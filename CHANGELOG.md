# Changelog



## 2.0.1, 2026-10-04

- **`npx -y @thenavidm/teachable-mcp-cli` always starts the MCP server.** npx starts whichever binary the npm registry lists first when they share one file, and the registry does not keep the published order, so an MCP client set up with this README's install line could get `teachable-cli` and its command list instead of a server. A third binary named after the package now always starts the server, and npx picks it by name.

## 2.0.0 — 2026-10-04

- Fresh public AGPL-3.0 source; private legacy history and account data excluded.
- Shared dedicated CLI and local stdio MCP with schema-derived help and stable exit codes.
- Reviewed21 stable v1 and97 explicit beta v2 Admin operations, plus5 local workflow helpers.
- Default discovery26 tasks/19 reads/7 confirmed effects; beta-enabled123/64/59. Beta is hidden by default and directly refused unless explicitly enabled.
- Exact isolated named-school API-key/file profiles with pinned version, no inherited credentials, arbitrary host or version fallback.
- Mandatory effect confirmation, direct read-only refusal, static audit decisions and no automatic retry.
- Local exact batch review, stop-on-failure receipts, native bounded private metadata exports and explicit offset continuation.
- Owner-private password body files and exclusive private signed-upload receipts. No byte uploader or implicit attachment/publication.
- Corrected native enrollment/user/pricing contracts, path-level coupon parameters and HTTP204 acknowledgements.
- Full argument reference,20 accordion FAQs, client/OS setup, desktop bundle, seven-job platform CI and source-contract checks.
- Official hosted MCP, pinned community server and generic terminal alternatives compared without invented superiority or token savings.

### Breaking changes

Eleven supported legacy names remain with refreshed native arguments. create_enrollment uses POST/v1/enroll and flat IDs; create_user uses a flat native body; pricing list is school-scoped. Undocumented pagination/name filters are removed. list_lectures has an explicitly opted-in beta replacement. Undocumented webhook creation/deletion are retired. All effects require confirmation; passwords need private payload_file and upload credentials need a new private output_file.

## 1.0.0 — private legacy

The previous private MCP declared14 handlers and no dedicated task CLI. No release date or successful public publication is invented. Its private history stays separate.
