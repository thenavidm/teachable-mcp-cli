export type Account={name:string;apiKey:string;credentialsFile:string;apiVersion:'1'|'2'};
export type Config={accounts:Account[];defaultAccount:string;enableV2:boolean;readOnly:boolean;allowDestructive:boolean;auditPath:string;timeoutMs:number;minIntervalMs:number};
function integer(v:string|undefined,fallback:number,min:number,max:number){const n=v?Number(v):fallback;if(!Number.isInteger(n)||n<min||n>max)throw Error('Invalid timeout or request pacing setting.');return n;}
export function loadConfig(env:NodeJS.ProcessEnv=process.env):Config{
 let entries:Record<string,unknown>[]=[];const enableV2=/^(1|true)$/i.test(env.TEACHABLE_ENABLE_V2??'');
 if(env.TEACHABLE_ACCOUNTS){try{entries=JSON.parse(env.TEACHABLE_ACCOUNTS);if(!Array.isArray(entries))throw Error();}catch{throw Error('TEACHABLE_ACCOUNTS must be a private JSON array of named profiles.');}}
 else if(env.TEACHABLE_API_KEY||env.TEACHABLE_CREDENTIALS_FILE)entries=[{name:'default',api_key:env.TEACHABLE_API_KEY,credentials_file:env.TEACHABLE_CREDENTIALS_FILE,api_version:env.TEACHABLE_API_VERSION??'1'}];
 const accounts=entries.map(x=>{
  if(!x||typeof x!=='object'||typeof x.name!=='string'||!x.name.trim())throw Error('Every profile requires a nonempty name.');
  if(Object.keys(x).some(k=>!['name','api_key','credentials_file','api_version'].includes(k)))throw Error('Unsupported private profile setting.');
  for(const k of ['api_key','credentials_file','api_version'])if(x[k]!==undefined&&(typeof x[k]!=='string'||/[\r\n]/.test(x[k] as string)))throw Error('Private profile settings must be strings without line breaks.');
  if(x.api_key&&x.credentials_file)throw Error('Choose one credential source per profile; no file/key fallback.');
  const version=x.api_version??'1';if(!['1','2'].includes(version as string))throw Error('Invalid private profile API version; choose 1 or 2.');
  if(version==='2'&&!enableV2)throw Error('Beta v2 profile is disabled; explicitly set TEACHABLE_ENABLE_V2=1 after obtaining beta access.');
  return {name:x.name.trim(),apiKey:String(x.api_key??''),credentialsFile:String(x.credentials_file??''),apiVersion:version as '1'|'2'};
 });
 if(new Set(accounts.map(a=>a.name)).size!==accounts.length)throw Error('Private profile names must be unique.');
 const defaultAccount=env.TEACHABLE_DEFAULT_ACCOUNT??accounts[0]?.name??'';
 if(defaultAccount&&!accounts.some(a=>a.name===defaultAccount))throw Error('Unknown TEACHABLE_DEFAULT_ACCOUNT.');
 return{accounts,defaultAccount,enableV2,readOnly:/^(1|true)$/i.test(env.TEACHABLE_READ_ONLY??''),allowDestructive:!/^(0|false)$/i.test(env.TEACHABLE_ALLOW_DESTRUCTIVE??''),auditPath:env.TEACHABLE_AUDIT_LOG??'',timeoutMs:integer(env.TEACHABLE_REQUEST_TIMEOUT_MS,30000,100,300000),minIntervalMs:integer(env.TEACHABLE_MIN_REQUEST_INTERVAL_MS,1000,0,10000)};
}
export function selectAccount(c:Config,hint?:string):Account{const a=c.accounts.find(a=>a.name===(hint??c.defaultAccount));if(!a)throw Error(c.accounts.length?'Unknown profile; use an exact list_accounts label.':'No credentials configured. Run teachable-cli login and configure one private school profile.');return a;}
