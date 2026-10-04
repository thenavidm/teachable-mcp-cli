import assert from'node:assert/strict';import{ALL_TOOLS,visibleTools}from'../dist/tools/index.js';import{loadConfig}from'../dist/config.js';
assert.equal(ALL_TOOLS.length,123);assert.equal(ALL_TOOLS.filter(t=>t.risk==='read').length,64);
for(const beta of[false,true])for(const readOnly of[false,true]){const c=loadConfig({TEACHABLE_ENABLE_V2:beta?'1':'0',TEACHABLE_READ_ONLY:readOnly?'1':'0'});assert.equal(visibleTools(c).length,beta?(readOnly?64:123):(readOnly?19:26));}
console.log(JSON.stringify({default:26,defaultReadOnly:19,betaEnabled:123,betaReadOnly:64,nativeV1:21,nativeV2:97,helpers:5}));
