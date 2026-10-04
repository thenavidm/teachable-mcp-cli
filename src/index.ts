#!/usr/bin/env node
import{StdioServerTransport}from'@modelcontextprotocol/sdk/server/stdio.js';import{buildServer,VERSION}from'./server.js';import{runCli,exitCodeFor}from'./cli.js';import{runDoctor}from'./doctor.js';import{basename}from'node:path';
const HELP=`Teachable MCP and shared CLI ${VERSION}
teachable-mcp                     Local stdio MCP
teachable-cli <command> --help     Actual shared arguments
teachable-cli schema <command>    Actual JSON schema
teachable-cli doctor [--network]  Local settings / deliberate courses read
teachable-cli login               Private setup instructions only
TEACHABLE_API_KEY                 Existing school Admin API key
TEACHABLE_CREDENTIALS_FILE        Absolute owner-private JSON {api_key}, no fallback
TEACHABLE_ACCOUNTS                Private named profiles: name, api_version, one key source
TEACHABLE_API_VERSION             1 default; 2 requires explicit beta enablement
TEACHABLE_ENABLE_V2=1             Expose request-access beta v2_ tools
TEACHABLE_READ_ONLY=1             Hide/directly refuse effects and private file outputs
TEACHABLE_ALLOW_DESTRUCTIVE=0      Refuse confirmed effects too
TEACHABLE_REQUEST_TIMEOUT_MS       Default30000; no retries
TEACHABLE_MIN_REQUEST_INTERVAL_MS  Default1000; local pacing, not provider quota
`;
async function main():Promise<void>{const args=process.argv.slice(2),command=args[0];if(['--version','-v'].includes(command??'')){console.log(VERSION);return;}if(['--help','-h','help'].includes(command??'')){process.stdout.write(HELP);return;}
if(command==='login'){console.log('Obtain an Admin API key for the intended school using Teachable admin/API settings. Provider plan and permission eligibility still apply. Configure TEACHABLE_API_KEY privately OR TEACHABLE_CREDENTIALS_FILE pointing to absolute owner-only regular JSON {api_key}. Never mix key/file. TEACHABLE_ACCOUNTS profiles require name, api_version (1 default), and api_key OR credentials_file; profiles never inherit global credentials. v2 requires provider beta access, an appropriately scoped key, TEACHABLE_ENABLE_V2=1 and an explicit version2 profile. login prints instructions only; no credential creation, browser consent, OAuth exchange or refresh. See https://docs.teachable.com/v2.0/docs/authentication.');return;}
if(command==='doctor'){if(args.slice(1).some(a=>a!=='--network')){process.exitCode=2;console.error(JSON.stringify({error:'doctor accepts only --network'}));return;}process.exitCode=await runDoctor(args.includes('--network'));return;}
if(basename(process.argv[1]??'').startsWith('teachable-cli')||command&&!command.startsWith('-')){process.exitCode=await runCli(args);return;}const server=buildServer();await server.connect(new StdioServerTransport());}
main().catch(e=>{console.error(JSON.stringify({error:(e as Error).message}));process.exitCode=exitCodeFor((e as Error).message);});
