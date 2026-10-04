import{it,expect,vi}from'vitest';import{mkdtemp,rm}from'node:fs/promises';import{tmpdir}from'node:os';import{join}from'node:path';
import fixtures from'./native-fixtures.json' with{type:'json'};import{loadConfig}from'../src/config.js';import{TeachableClient}from'../src/api/client.js';import{ALL_TOOLS,validateArguments}from'../src/tools/index.js';
it.each(fixtures)('reviewed contract $method $path routes $tool',async f=>{
 const dir=await mkdtemp(join(tmpdir(),'teachable-native-'));
 try{const cfg=loadConfig({TEACHABLE_API_KEY:'fixture-native-key',TEACHABLE_API_VERSION:f.version,TEACHABLE_ENABLE_V2:'1',TEACHABLE_MIN_REQUEST_INTERVAL_MS:'0'}),fetcher=vi.fn(async()=>new Response(f.response===null?null:JSON.stringify(f.response),{status:f.status})),api=new TeachableClient(cfg,fetcher as typeof fetch),tool=ALL_TOOLS.find(t=>t.name===f.tool)!,args={...f.args,...(f.tool==='v2_create_pre_signed_upload_credentials'?{output_file:join(dir,'receipt.json')}: {})};
 validateArguments(tool,args);await tool.handler(args,api);expect(fetcher).toHaveBeenCalledOnce();const[url,init]=fetcher.mock.calls[0] as unknown as [URL,RequestInit];expect(init.method).toBe(f.method);const expected=f.path.replace(/\{([^}]+)\}/g,(_,key)=>encodeURIComponent(String((f.args as Record<string,unknown>)[key])));expect(url.pathname).toBe(expected);expect(url.origin).toBe('https://developers.teachable.com');
 }finally{await rm(dir,{recursive:true,force:true});}
});
