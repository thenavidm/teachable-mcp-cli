import {open,lstat} from 'node:fs/promises';
import {constants} from 'node:fs';
import {isAbsolute} from 'node:path';
import {selectAccount,type Account,type Config} from '../config.js';
import {TeachableError,UsageError} from './errors.js';
import operationData from '../tools/operations.json' with {type:'json'};
export type Json = Record<string,any>;
export type QueryParam = {name:string;value:unknown;explode:boolean};
const MAX=5*1048576;
const routes=operationData.map(o=>({...o,regex:new RegExp('^'+o.path.replace(/[.*+?^$()|[\]\\]/g,'\\$&').replace(/\{[^}]+\}/g,'([^/]+)')+'$')}));
export class TeachableClient {
  private authorizations=new Map<string,string>(); private secrets=new Set<string>();
  private schedule:Promise<void>=Promise.resolve(); private next=new Map<string,number>();
  constructor(readonly config:Config,private readonly fetcher:typeof fetch=fetch,
    private readonly sleep:(ms:number)=>Promise<void>=ms=>new Promise(r=>setTimeout(r,ms))) {
    for(const a of config.accounts) for(const s of [a.apiKey]) if(s)this.secrets.add(s);
  }
  redactText(text:string) {
    for(const secret of [...this.secrets].sort((a,b)=>b.length-a.length)) text=text.split(secret).join('[redacted]');
    return text.replace(/https?:\/\/[^\s"<>]*(?:X-Amz-Signature|X-Goog-Signature|[?&](?:token|signature|sig|key|access_token)=)[^\s"<>]*/gi,'[private credential URL]');
  }
  sanitize(value:unknown):unknown {
    if(typeof value==='string') return this.redactText(value);
    if(Array.isArray(value))return value.map(x=>this.sanitize(x));
    if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[
      k,/^(password|secret|api_?key|signing_?key|api_?token|token|access_?token|refresh_?token|authorization|client_?secret|upload_?url|upload_?headers|upload_?body|file_?url|download_?url|content_?url|signed_?url)$/i.test(k)?'[redacted]':this.sanitize(v)]));
    return value;
  }
  rememberSecret(value:unknown){if(typeof value==='string'&&value)this.secrets.add(value);}
  private async authorization(a:Account){
    if(this.authorizations.has(a.name))return this.authorizations.get(a.name)!;
    let values:Json={api_key:a.apiKey};
    if(a.credentialsFile){let file;try{
      if(!isAbsolute(a.credentialsFile)||(await lstat(a.credentialsFile)).isSymbolicLink())throw Error();
      file=await open(a.credentialsFile,constants.O_RDONLY|(constants.O_NOFOLLOW??0));const stat=await file.stat();
      if(!stat.isFile()||stat.size>65536||(process.platform!=='win32'&&((stat.mode&0o077)||stat.uid!==process.getuid?.())))throw Error();
      const bytes=await file.readFile();if(bytes.length>65536||bytes.length!==stat.size)throw Error();values=JSON.parse(bytes.toString('utf8'));
      if(!values||typeof values!=='object'||Array.isArray(values)||Object.keys(values).some(k=>k!=='api_key'))throw Error();
    }catch{throw new TeachableError('Cannot read selected private credential JSON file; use an absolute owner-only regular non-symlink file at most 64 KiB.',0,'CONFIG');}finally{await file?.close();}}
    if(typeof values.api_key!=='string'||!values.api_key||/[\r\n]/.test(values.api_key))throw new TeachableError('No valid API key configured for selected profile. Run teachable-cli login.',0,'CONFIG');
    this.rememberSecret(values.api_key);this.authorizations.set(a.name,values.api_key);return values.api_key;
  }
  private async pace(profile:string,op:typeof operationData[number]) {
    const rate=op.rateLimit as Json,bucket=rate.cacheName??'default';
    const tight=rate.capacity&&rate.periodSeconds?Math.ceil(rate.periodSeconds*1000/rate.capacity):0;
    const key=profile+':'+bucket,global=profile+':global';
    const next=this.schedule.catch(()=>{}).then(async()=>{
      const delay=Math.max(0,(this.next.get(key)??0)-Date.now(),(this.next.get(global)??0)-Date.now());
      if(delay)await this.sleep(delay);
      this.next.set(key,Date.now()+Math.max(this.config.minIntervalMs,tight));this.next.set(global,Date.now()+this.config.minIntervalMs);
    });this.schedule=next;await next;
  }
  private async bytes(response:Response) {
    const chunks:Uint8Array[]=[];let total=0;const reader=response.body?.getReader();
    if(reader)try{for(;;){const part=await reader.read();if(part.done)break;total+=part.value.byteLength;
      if(total>MAX){await reader.cancel();throw new TeachableError('Response exceeds 5 MiB local cap; no automatic retry.');}chunks.push(part.value);}}
    finally{reader.releaseLock();}return Buffer.concat(chunks);
  }
  async request(method:string,path:string,query:QueryParam[]=[],body?:unknown,hint?:string):Promise<any> {
    const op=routes.find(r=>r.method===method&&r.regex.test(path));
    if(!op||/[?#\\]/.test(path)||/%2f|%5c|%00/i.test(path)||path.split('/').some(s=>['.','..'].includes(decodeURIComponent(s))))throw new UsageError('Unsupported Teachable Admin API method or path.');
    const account=selectAccount(this.config,hint);
    if(op.apiVersion==='2'&&!this.config.enableV2)throw new UsageError('Beta v2 is disabled; explicitly enable TEACHABLE_ENABLE_V2.');
    if(account.apiVersion!==op.apiVersion)throw new UsageError('Selected profile API version does not match operation; no version fallback.');
    const headers:Record<string,string>={Accept:'application/json',apiKey:await this.authorization(account),'User-Agent':'Navid Media Teachable MCP CLI/2.0.0 (https://navid.me)'};
    const url=new URL(path,'https://developers.teachable.com');
    for(const param of query){const v=param.value;if(v===undefined||v===null)continue;
      if(Array.isArray(v)){if(v.some(x=>typeof x==='object'))throw new UsageError('Nested query collections unsupported.');if(param.explode)for(const x of v)url.searchParams.append(param.name,String(x));else url.searchParams.set(param.name,v.join(','));}
      else if(typeof v==='object')throw new UsageError('Object query field unsupported.');else url.searchParams.set(param.name,String(v));}
    const encoded=body===undefined?undefined:JSON.stringify(body);
    if(encoded!==undefined){headers['Content-Type']='application/json';if(Buffer.byteLength(encoded)>1048576)throw new UsageError('Request exceeds 1 MiB local cap.');}
    await this.pace(account.name,op);let response:Response;
    try{response=await this.fetcher(url,{method,redirect:'error',signal:AbortSignal.timeout(this.config.timeoutMs),headers,...(encoded===undefined?{}:{body:encoded})});}
    catch{throw new TeachableError('Request failed or timed out. Outcome may be unknown; no automatic retry. Inspect provider state before deliberately repeating.',0,'NETWORK');}
    const bytes=await this.bytes(response);let parsed;
    if(bytes.length)try{parsed=JSON.parse(bytes.toString('utf8'));}catch{if(response.ok)throw new TeachableError('Provider returned a non-JSON receipt; outcome may be unknown.',response.status);}
    if(!response.ok){const detail=parsed?JSON.stringify(this.sanitize(parsed)).slice(0,1000):'';throw new TeachableError('Teachable API '+response.status+(detail?': '+detail:''),response.status,response.status===429?'RATE_LIMIT':[401,403].includes(response.status)?'AUTH':response.status===404?'NOT_FOUND':'API_ERROR');}
    if(!op.successStatuses.includes(response.status))throw new TeachableError('Unexpected native success status; requested outcome is unverified.',response.status);
    if(!bytes.length){if((op.emptyStatuses as number[]).includes(response.status))return{success:true,http_status:response.status,nativeEmptyReceipt:true};throw new TeachableError('Missing native receipt; requested outcome may be unknown.',response.status);}
    if(!parsed||typeof parsed!=='object')throw new TeachableError('Invalid native JSON receipt.',response.status);
    return parsed;
  }
}
