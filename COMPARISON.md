# Teachable alternatives, checked2026-10-04

Teachable's [official remote MCP](https://docs.teachable.com/v2.0/docs/mcp) already supports documentation search and authenticated account requests. Credential-free discovery found seven v1/five v2 meta-tools, including generic execute-request. These are interface counts, not native API coverage. Official Admin apiKey and separately obtained end-user OAuth bearer are distinct; the remote server does not run or refresh the end-user OAuth flow.

| Requirement | This companion | Existing alternatives |
| --- | --- | --- |
| Admin API tasks | 21 stable plus 97 explicit beta native contracts | Official generic endpoint execution and docs search |
| End-user OAuth | Not implemented | Official MCP accepts a separately obtained bearer |
| Terminal | Dedicated schemas/help over shared handlers | Generic MCP terminal clients also exist |
| School selection | Exact isolated profile label and API version | Credential/client setup remains the user's responsibility |
| Approval | Per-call confirmation, direct read-only refusal | Provider permissions and client approvals remain separate |
| Repeated effects | Exact local batch review, stop-on-failure receipts | No transaction/state-lock claim |
| Export | Bounded private native-page export and offset resume | No atomic backup or binary download claim |
| Beta | Hidden default, explicitly pinned version, no fallback | Provider request-access and new scoped key may be required |
| Efficiency | No matched completed task benchmark yet | Tool counts are not token savings |

The pinned [ahmedrowaihi/teachable-mcp-server](https://github.com/ahmedrowaihi/teachable-mcp-server) source at 5d722b2987a8b745d50e2d49f58589ca51a10002 declares 21 v1 operations and one stdio server binary, without task CLI dispatch in the reviewed source. That is not proof no CLI exists elsewhere. Generic [wong2/mcp-cli](https://github.com/wong2/mcp-cli) is a terminal alternative; its reviewed source already supports remote interactive OAuth. See [COMPARISON.md](COMPARISON.md) for evidence and limits.

CLI suits shell agents, scripts and selected tasks. MCP suits supported apps that discover and call tools directly. Both execute the same implementation.

| Mode | Discovered tasks | Read operations | Confirmed effects |
| --- | --- | --- | --- |
| Stable v1 default | 26 | 19 | 7 |
| Stable read-only | 19 | 19 | 0 |
| Explicit beta enabled | 123 | 64 | 59 |
| Beta enabled read-only | 64 | 64 | 0 |

The beta-enabled list includes both API versions plus five local helpers. Each native call still requires a matching profile version. CLI help/results enter context on demand; MCP schema loading may be deferred by the client. Discovery size alone cannot show task efficiency.

Matched completed Codex task/token measurement remains pending. A fair comparison must use equivalent successful tasks, current client/model/package versions, loading mode and total usage including help, outputs, errors and retries. No schema-character estimate or borrowed benchmark is published as savings.

## Evidence boundaries

The official protocol was discovered without credentials. execute-request and school API operations were not called. Admin v1/v2 contracts and end-user OAuth contracts were catalogued separately. The owned implementation covers Admin contracts only; end-user OAuth, webhook creation/deletion and byte uploading are excluded. Native route fixtures do not establish beta entitlement or live account outcomes.
