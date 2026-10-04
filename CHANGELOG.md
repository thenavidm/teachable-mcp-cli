# Changelog

## 3.0.0, 2026-10-04

Built on [Slipway](https://github.com/thenavidm/slipway) 0.1.4. Tool names, arguments, results and exit codes are unchanged, and every difference below was measured against 2.0.1 before release.

- **A person approves each change over MCP.** Claude Code (2.1.246 and later) shows its own prompt for every effect, and a client that can show forms asks with an approval form whose one box starts unticked. Approvals are signed, bound to the exact call and work once. Where a client can do neither, `confirm: true` still counts. `TEACHABLE_CONFIRM=model` makes `confirm: true` enough everywhere, for a headless agent.
- **Faster to answer.** The server answers a client in 159 ms where 2.0.1 took 237 (median of 21 runs, taking turns on one Mac), and a first tool result arrives in 191 ms instead of 236. Validators compile on first use instead of all 158 at startup, and npx installs 10 dependencies instead of 94.
- **Cheaper through the CLI.** The same Codex task took 147,386 input tokens instead of 166,358 (median of five runs), with no failed commands where 2.0.1 had one in every run. A command's help shows only the flags it can use, and `which <words>` finds a command by what it does.
- **One JSON error.** Errors are one object with `error`, `code` and a `hint` where it helps, instead of JSON inside a string. A command hidden by read-only mode or the beta switch says why instead of being unknown.
- **`--tasks` also takes a JSON array.** 2.0.1 took one task per repeated `--tasks` flag and failed on an array with "data/tasks/0 must be object"; both forms work now.
- **`install <client>`** adds the server to Claude Code, Codex, Claude Desktop, Cursor, VS Code or Gemini CLI in each one's own format.
- **`TEACHABLE_TOOLSETS=beta`** turns on the beta tasks, the same as `TEACHABLE_ENABLE_V2=1`.
- **Spacing fixes.** Size limits have a space before the number again, as in "at most 64 KiB", and README answers that had split a setting's name apart, such as `TEACHABLE_ENABLE_V2=1`, show it as it works.

### Upgrading

Scripts keep working: names, flags, results and exit codes are the same, and `--version` still prints the bare version. A script that read error text should read the `code` field instead. Over MCP, expect an approval prompt or form for each effect; a headless agent that should approve with `confirm: true` needs `TEACHABLE_CONFIRM=model`. Over MCP, the same Codex task reads 48 more input tokens out of about 77,000, from the standard wording of `confirm`; in Claude Code the tool list costs 28 fewer tokens, and SKILL.md 28 more for the new approval rules.

## 2.0.1, 2026-10-04

- **`npx -y @thenavidm/teachable-mcp-cli` always starts the MCP server.** npx starts whichever binary the npm registry lists first when they share one file, and the registry does not keep the published order, so an MCP client set up with this README's install line could get `teachable-cli` and its command list instead of a server. A third binary named after the package now always starts the server, and npx picks it by name.

## 2.0.0, 2026-10-04

- Fresh public AGPL-3.0 source; private legacy history and account data excluded.
- Shared dedicated CLI and local stdio MCP with schema-derived help and stable exit codes.
- Reviewed 21 stable v1 and 97 explicit beta v2 Admin operations, plus 5 local workflow helpers.
- Default discovery 26 tasks/19 reads/7 confirmed effects; beta-enabled 123/64/59. Beta is hidden by default and directly refused unless explicitly enabled.
- Exact isolated named-school API-key/file profiles with pinned version, no inherited credentials, arbitrary host or version fallback.
- Mandatory effect confirmation, direct read-only refusal, static audit decisions and no automatic retry.
- Local exact batch review, stop-on-failure receipts, native bounded private metadata exports and explicit offset continuation.
- Owner-private password body files and exclusive private signed-upload receipts. No byte uploader or implicit attachment/publication.
- Corrected native enrollment/user/pricing contracts, path-level coupon parameters and HTTP 204 acknowledgements.
- Full argument reference, 20 accordion FAQs, client/OS setup, desktop bundle, seven-job platform CI and source-contract checks.
- Official hosted MCP, pinned community server and generic terminal alternatives compared without invented superiority or token savings.

### Breaking changes

Eleven supported legacy names remain with refreshed native arguments. create_enrollment uses POST/v1/enroll and flat IDs; create_user uses a flat native body; pricing list is school-scoped. Undocumented pagination/name filters are removed. list_lectures has an explicitly opted-in beta replacement. Undocumented webhook creation/deletion are retired. All effects require confirmation; passwords need private payload_file and upload credentials need a new private output_file.

## 1.0.0, private legacy

The previous private MCP declared 14 handlers and no dedicated task CLI. No release date or successful public publication is invented. Its private history stays separate.
