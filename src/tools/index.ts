import operationData from './operations.json' with {type:'json'};
import provenance from './provenance.json' with {type:'json'};
import {Ajv,type ValidateFunction} from 'ajv';
import addFormats from 'ajv-formats';
import {open,lstat,unlink} from 'node:fs/promises';
import {constants} from 'node:fs';
import {isAbsolute} from 'node:path';
import {createHash} from 'node:crypto';
import {TeachableClient,type Json,type QueryParam} from '../api/client.js';
import {TeachableError,UsageError} from '../api/errors.js';
import {selectAccount,type Config} from '../config.js';
import type {Risk} from '../safety.js';
type Param={name:string;key:string;location:string;required:boolean;schema:Json;explode:boolean};
export type Operation={name:string;operationId:string;title:string;description:string;method:string;path:string;group:string;risk:Risk;apiVersion:'1'|'2';listField:string;sizeKey:string;pageCountKey:string;params:Param[];bodySchema:Json|null;bodyRequired:boolean;privateOutput:boolean;pagination:boolean;scopes:unknown;source:string};
export type ToolSpec={name:string;title:string;description:string;group:string;inputSchema:Json;risk:Risk;handler:(args:Json,client:TeachableClient)=>Promise<unknown>};
const operations=operationData as unknown as Operation[];
const ajv=new Ajv({allErrors:true,strict:false,formats:{int32:true,int64:true,double:true,float:true}});
(addFormats as unknown as (a:Ajv)=>void)(ajv);
const privateResponseValidator=ajv.compile((operationData.find(o=>o.privateOutput)!.responseSchemas as Json)['201']);
const bodyValidators=new Map(operations.filter(o=>o.bodySchema).map(o=>[o.name,ajv.compile(o.bodySchema!)]));
function check(v:ValidateFunction,value:unknown){if(!v(value))throw new UsageError(ajv.errorsText(v.errors,{separator:'; '}));}
const account={type:'string',description:'Exact private school profile label; not a provider identity or authorization proof.'};
const confirm={type:'boolean',description:'Explicit approval for this exact provider effect or local private-file operation.'};
function bodyProperties(op:Operation):Json{return op.bodySchema&&!op.bodySchema.oneOf?op.bodySchema.properties??{}:{};}
function fieldsFor(op:Operation){
  const properties:Json=Object.fromEntries(op.params.map(p=>[p.key,p.schema]));
  for(const [key,value] of Object.entries(bodyProperties(op)))if(key!=='password'&&!(key in properties))properties[key]=value;
  Object.assign(properties,{account});if(op.risk!=='read')properties.confirm=confirm;
  if(op.bodySchema){properties.payload={...op.bodySchema,description:'Complete current native JSON body; cannot mix with native body flags or payload_file.'};properties.payload_file={type:'string',minLength:1,description:'Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags.'};}
  if(op.privateOutput)properties.output_file={type:'string',minLength:1,description:'Absolute NEW owner-private receipt file; exclusive0600 creation, no overwrite. Upload/public-token URLs never enter ordinary output.'};
  return{type:'object',properties,required:[...op.params.filter(p=>p.required).map(p=>p.key),...(op.privateOutput?['output_file']:[])],additionalProperties:false};
}
async function readPrivateFile(path:string,maxBytes:number,ownerOnly=false){
  let f;try{
    if(!isAbsolute(path)||(await lstat(path)).isSymbolicLink())throw Error();
    f=await open(path,constants.O_RDONLY|(constants.O_NOFOLLOW??0));const stat=await f.stat();
    if(!stat.isFile()||stat.size>maxBytes||(ownerOnly&&process.platform!=='win32'&&((stat.mode&0o077)||stat.uid!==process.getuid?.())))throw Error();
    const bytes=await f.readFile();if(bytes.length>maxBytes||bytes.length!==stat.size)throw Error();return bytes;
  }catch{throw new UsageError('Input file must be an absolute regular non-symlink file within the stated size and privacy limits.');}finally{await f?.close();}
}
async function fileJSON(path:string,ownerOnly=false){try{return JSON.parse((await readPrivateFile(path,1048576,ownerOnly)).toString('utf8'));}catch{throw new UsageError('Input must be a valid bounded JSON file with required privacy settings.');}}
function credentialFields(value:unknown):boolean {
  if(Array.isArray(value))return value.some(credentialFields);
  if(value&&typeof value==='object')return Object.entries(value).some(([k,v])=>/^(password|username|access_token|refresh_token|authorization|client_?secret|api_?key|secret|token)$/i.test(k)||credentialFields(v));
  return false;
}
async function prepare(op:Operation,args:Json,c:TeachableClient){
  const paramKeys=new Set(op.params.map(p=>p.key));
  const flat=Object.fromEntries(Object.keys(bodyProperties(op)).filter(k=>!paramKeys.has(k)&&args[k]!==undefined).map(k=>[k,args[k]]));
  if((args.payload!==undefined||args.payload_file!==undefined)&&Object.keys(flat).length)throw new UsageError('Do not mix body flags with payload or payload_file.');
  if(args.payload!==undefined&&args.payload_file!==undefined)throw new UsageError('Use payload or payload_file, not both.');
  const hasBody=!!op.bodySchema; // Validate native required fields even when generated requestBody.required is omitted.
  const body=hasBody?(args.payload_file?await fileJSON(args.payload_file,true):args.payload??flat):undefined;
  if(body!==undefined){
    if(body&&typeof body==='object'&&body.password!==undefined){
      c.rememberSecret(body.password);
      if(!args.payload_file||!['/v1/users','/v1/users/{user_id}','/v2/users','/v2/users/{user_id}'].includes(op.path))throw new UsageError('User passwords require owner-private payload_file; never inline flags or payload.');
      if(body.password!==null&&(typeof body.password!=='string'||body.password.length<6))throw new UsageError('User password must meet the native six-character minimum.');
    }
    check(bodyValidators.get(op.name)!,body);
    const nonPassword={...body};delete nonPassword.password;
    if(credentialFields(nonPassword))throw new UsageError('Credentials belong to private profile configuration, never native bodies.');
    if(op.apiVersion==='2'&&op.path.startsWith('/v2/users')&&op.method==='POST'){
      if(body.role==='student'&&typeof body.allow_marketing_emails!=='boolean')throw new UsageError('Student creation requires explicit allow_marketing_emails; no inferred consent.');
      for(const role of ['author','affiliate']){const key=role+'_revenue_share';if(body.role===role){if(typeof body[key]!=='number'||body[key]<0||body[key]>1)throw new UsageError('Selected role requires native revenue share between0 and1.');}else if(body[key]!==undefined)throw new UsageError('Revenue share is only valid for its matching role.');}
    }
  }
  if(op.name==='v2_create_coupon'){
    const present=(key:string)=>body[key]!==undefined&&body[key]!==null;
    if(present('product_type')!==present('product_id'))throw new UsageError('Native coupon product_type/product_id must be paired.');
    const scopes=Number(present('scope_type'))+Number(present('pricing_plan_id'))+Number(present('product_type'));
    if(scopes!==1)throw new UsageError('Native coupon requires exactly one scope shape: scope_type, pricing_plan_id or paired product_type/product_id.');
    if(body.duration_kind==='repeating'){if(!Number.isSafeInteger(body.discount_in_months)||body.discount_in_months<1)throw new UsageError('Repeating coupon requires discount_in_months>=1.');}
    else if(present('discount_in_months'))throw new UsageError('discount_in_months must be blank for non-repeating coupon.');
    if(present('product_type')){
      const future=Date.parse(body.expiration_date),latest=new Date();latest.setUTCFullYear(latest.getUTCFullYear()+5);
      if(typeof body.name!=='string'||body.name.length>40||!Number.isFinite(future)||future<=Date.now()||future>latest.getTime()||!Number.isSafeInteger(body.number_available)||body.number_available<1)throw new UsageError('Native new-payments product coupon requires name<=40, future expiry within5years and number_available>=1.');
      if(Number(present('discount_percent'))+Number(present('discount_amount'))!==1)throw new UsageError('Native new-payments product coupon requires exactly one discount amount or fraction.');
      if(present('discount_amount')&&(body.discount_amount<1||!present('discount_currency'))||present('discount_percent')&&(body.discount_percent<0.0001||present('discount_currency')))throw new UsageError('Invalid native new-payments product discount/currency combination.');
    }
  }
  if(op.name==='v2_list_coupons'){
    const present=(key:string)=>args[key]!==undefined&&args[key]!==null;
    if(present('product_type')!==present('product_id'))throw new UsageError('Native coupon product filters must be paired.');
    for(const key of ['created_after','created_before'])if(present(key)&&!Number.isFinite(Date.parse(args[key])))throw new UsageError('Native coupon dates must be valid ISO8601.');
    if(present('created_after')&&present('created_before')){const diff=Date.parse(args.created_before)-Date.parse(args.created_after);if(diff<=0||diff>90*86400000)throw new UsageError('Native coupon date range must be positive and no more than90days.');}
  }
  for(const [lower,upper] of ([['enrolled_in_after','enrolled_in_before'],['created_at_gte','created_at_lte']] as [string,string][]))if(args[lower]&&args[upper]&&Date.parse(args[lower])>=Date.parse(args[upper]))throw new UsageError('Native time range lower bound must precede upper bound.');
  const path=op.params.filter(p=>p.location==='path').reduce((s,p)=>s.replace('{'+p.name+'}',encodeURIComponent(String(args[p.key]))),op.path);
  const query:QueryParam[]=op.params.filter(p=>p.location==='query'&&args[p.key]!==undefined).map(p=>({name:p.name,value:args[p.key],explode:p.explode}));
  return{method:op.method,path,query,body};
}
async function savePrivate(path:string,value:unknown){
  if(!isAbsolute(path))throw new UsageError('output_file must be absolute.');let f;
  try{f=await open(path,'wx',0o600);}catch{throw new UsageError('Cannot exclusively create output_file; never overwrites or follows a target symlink.');}
  try{const actual=typeof value==='function'?await(value as()=>Promise<unknown>)():value;const bytes=Buffer.from(JSON.stringify(actual)+'\n');if(bytes.length>5*1048576)throw new UsageError('Private output exceeds5MiB local cap.');await f.writeFile(bytes);return{saved:true,output_file:path,bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')};}
  catch(e){await f.close();f=undefined;await unlink(path).catch(()=>{});throw e;}finally{await f?.close();}
}
async function execute(op:Operation,args:Json,c:TeachableClient){
  const selected=selectAccount(c.config,args.account);
  if(op.apiVersion==='2'&&!c.config.enableV2)throw new UsageError('Beta v2 tool is disabled.');
  if(selected.apiVersion!==op.apiVersion)throw new UsageError('Selected profile API version does not match operation; no version fallback.');
  const call=await prepare(op,args,c),run=()=>c.request(call.method,call.path,call.query,call.body,args.account);
  if(!op.privateOutput)return c.sanitize(await run());
  return savePrivate(args.output_file,async()=>{
    const receipt=await run();if(!privateResponseValidator(receipt))throw new TeachableError('Invalid native upload credential receipt; requested outcome is unverified.');const d=(receipt as Json).data;
    if(!d||typeof d.upload_url!=='string'||!['POST','PUT'].includes(d.upload_method)||!d.upload_headers||typeof d.upload_headers!=='object'||typeof d.upload_id!=='string')throw new TeachableError('Invalid native upload credentials receipt; requested outcome is unverified.');
    return{receiptVersion:1,operation:op.name,profile:selected.name,apiVersion:selected.apiVersion,request:call.body,data:d,uploaded:false,attached:false};
  });
}
export const ALL_TOOLS:ToolSpec[]=operations.map(op=>({...op,inputSchema:fieldsFor(op),handler:(args,c)=>execute(op,args,c)}));
function helper(name:string,title:string,description:string,risk:Risk,properties:Json,required:string[],handler:ToolSpec['handler']){
  ALL_TOOLS.push({name,title,description,group:'local_workflows',risk,inputSchema:{type:'object',properties,required,additionalProperties:false},handler});
}
helper('list_accounts','List private school profiles','Local labels/default/version/auth source availability only. No credential values, paths, provider identity or network.','read',{},[],async(_,c)=>({accounts:c.config.accounts.map(a=>({name:a.name,default:a.name===c.config.defaultAccount,apiVersion:a.apiVersion,authSource:a.credentialsFile?'private-json-file':'school-admin-api-key',configured:!!(a.credentialsFile||a.apiKey)}))}));
helper('get_operation_schema','Inspect native contract','Local reviewed native method/path/query/body/scopes/rate limit and pinned schema provenance. No provider access or authority proof.','read',{operation:{type:'string',enum:operations.map(o=>o.name)}},['operation'],async a=>({operation:operations.find(o=>o.name===a.operation),source:provenance.source,checked:provenance.checked,snapshotSha256:provenance.sanitizedSnapshotSha256}));
const allowed=operations.filter(o=>o.risk!=='read'&&!o.privateOutput).map(o=>o.name);
const tasks={type:'array',minItems:1,maxItems:20,description:'One to twenty exact ordered native effects. No signed receipts or mutable payload files. Cannot override account/confirm/output settings.',items:{type:'object',properties:{tool:{type:'string',enum:allowed},arguments:{type:'object'}},required:['tool','arguments'],additionalProperties:false}};
function canonical(v:any):any{if(Array.isArray(v))return v.map(canonical);if(v&&typeof v==='object')return Object.fromEntries(Object.keys(v).sort().map(k=>[k,canonical(v[k])]));return v;}
function hash(v:any){return createHash('sha256').update(JSON.stringify(canonical(v))).digest('hex');}
async function reviewed(a:Json,c:TeachableClient){
  const selected=selectAccount(c.config,a.account),profile=selected.name,calls=[];
  for(const task of a.tasks){if(!allowed.includes(task.tool))throw new UsageError('Unsupported native batch tool.');if(['account','confirm','payload_file','output_file'].some(k=>task.arguments[k]!==undefined))throw new UsageError('Batch cannot override private profile/confirmation or use mutable/output files.');const tool=ALL_TOOLS.find(t=>t.name===task.tool)!,op=operations.find(o=>o.name===task.tool)!;validateArguments(tool,task.arguments);if(op.apiVersion!==selected.apiVersion||op.apiVersion==='2'&&!c.config.enableV2)throw new UsageError('Batch operation does not match selected profile API version or beta policy.');calls.push(await prepare(op,task.arguments,c));}
  return{version:1,profile,apiVersion:selected.apiVersion,credentialBinding:'profile label only; private credentials not hashed',snapshotSha256:provenance.sanitizedSnapshotSha256,tasks:a.tasks,calls};
}
helper('preview_school_batch','Review ordered school effects','Validate every exact request and hash order/profile label/schema locally. No native request, credential loading, ownership check or provider preview.','read',{tasks,account},['tasks'],async(a,c)=>{const r=await reviewed(a,c);return{...c.sanitize(r)as Json,reviewSha256:hash(r),localOnly:true,providerValidated:false,notice:'Binds requests/order/profile label/schema. No expiry, single-use guarantee, credential/state lock, transaction or rollback. Re-review after private credential or native state changes.'};});
helper('submit_school_batch','Execute reviewed school effects','Confirmed ordered effects; all validated/hash checked before first request. Stop on first failure with known and unattempted receipts; no retry, rollback or implicit continuation.','destructive',{tasks,account,confirm,review_sha256:{type:'string',pattern:'^[a-f0-9]{64}$'}},['tasks','review_sha256'],async(a,c)=>{
  const r=await reviewed(a,c);if(hash(r)!==a.review_sha256)throw new UsageError('Review hash mismatch; preview identical ordered requests/profile/schema again.');const knownResults:Json[]=[];
  for(let i=0;i<r.calls.length;i++){const call=r.calls[i]!;try{knownResults.push({index:i,tool:a.tasks[i].tool,result:c.sanitize(await c.request(call.method,call.path,call.query,call.body,r.profile))});}
    catch(e){const err=e as TeachableError;throw new TeachableError(JSON.stringify(c.sanitize({notice:'Batch stopped. Failed request outcome may be unknown; inspect native state before repeating. No retries or rollback.',knownResults,failedIndex:i,unattemptedIndices:r.calls.slice(i+1).map((_,j)=>i+1+j),error:err.message})),err.status??0,err.code??'API_ERROR');}}
  return{requestsProcessed:true,knownResults,notice:'Native receipts are not independent delivery, settlement or school publication proof.'};
});
const lists=operations.filter(o=>o.pagination);
helper('export_resources','Export bounded private metadata','Confirmed reviewed native page/per or page/per_page export into a new exclusive0600 file. Page/item/5MiB budgets and explicit continuation; no signed links followed or binary download. Not an atomic backup.','destructive',{operation:{type:'string',enum:lists.map(o=>o.name)},arguments:{type:'object',description:'Current native list arguments; cannot override profile/policy/output.'},account,confirm,start_offset:{type:'integer',minimum:0,maximum:99},max_pages:{type:'integer',minimum:1,maximum:100},max_items:{type:'integer',minimum:1,maximum:10000},output_file:{type:'string',minLength:1}},['operation','output_file'],async(a,c)=>{
  const op=lists.find(o=>o.name===a.operation)!,args=a.arguments??{},profile=selectAccount(c.config,a.account);
  if(op.apiVersion!==profile.apiVersion||op.apiVersion==='2'&&!c.config.enableV2)throw new UsageError('Export version does not match selected profile or beta policy.');
  if(['account','confirm','payload_file','output_file'].some(k=>args[k]!==undefined))throw new UsageError('Export cannot override private profile/policy/output.');validateArguments(ALL_TOOLS.find(t=>t.name===op.name)!,args);
  let receipt:Json={};const saved=await savePrivate(a.output_file,async()=>{
    const size=args[op.sizeKey]??100,maxPages=a.max_pages??10,maxItems=a.max_items??1000;let page=args.page??1,offset=a.start_offset??0,requests=0,complete=false;const data:Json[]=[];
    if(!Number.isSafeInteger(page)||page<1||!Number.isSafeInteger(size)||size<1||size>100||offset>=size)throw new UsageError('Export requires page>=1, native page size1–100 and start_offset below size (local bounds).');
    while(requests<maxPages&&data.length<maxItems){const call=await prepare(op,{...args,page,[op.sizeKey]:size},c),r=await c.request(call.method,call.path,call.query,call.body,a.account);requests++;
      const items=r[op.listField],meta=r.meta,totalPages=meta?.[op.pageCountKey];
      if(!Array.isArray(items)||meta?.page!==page||meta?.per_page!==size||!Number.isInteger(totalPages)||totalPages<0||items.length>size||totalPages>0&&page>totalPages||totalPages===0&&items.length)throw new TeachableError('Invalid native pagination receipt; completeness unproven.');
      if(offset>items.length)throw new UsageError('Resume page changed; start_offset no longer exists.');
      const take=Math.min(items.length-offset,maxItems-data.length);data.push(...items.slice(offset,offset+take));offset+=take;
      if(Buffer.byteLength(JSON.stringify(data))>5*1048576)throw new TeachableError('Export exceeds5MiB local cap.');
      if(offset<items.length)break;if(totalPages===0||page>=totalPages){complete=true;break;}
      if(!items.length)throw new TeachableError('Empty native page before total_pages; no completeness guarantee.');page++;offset=0;
      if(op.name==='list_users'&&(page-1)*size>=10000)break;
    }
    receipt={requests,items:data.length,completeWithinRequestedFilters:complete,apiVersion:op.apiVersion,continuation:complete?null:{operation:op.name,arguments:{...args,page,[op.sizeKey]:size},start_offset:offset},nativeSearchAfterNotInferred:op.name==='list_users',atomicSnapshot:false,credentialsAndSignedURLsRedacted:true};return{data:c.sanitize(data),receipt};
  });return{...saved,...receipt};
});
const validators=new Map(ALL_TOOLS.map(t=>[t.name,ajv.compile(t.inputSchema)]));
export function validateArguments(tool:ToolSpec,args:Json){check(validators.get(tool.name)!,args);}
export function visibleTools(config:Config){return ALL_TOOLS.filter(t=>(config.enableV2||!t.name.startsWith('v2_'))&&(!config.readOnly||t.risk==='read'));}
