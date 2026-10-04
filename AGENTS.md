# Teachable shared CLI and MCP

Read README.md, INSTALL.md, COMPARISON.md and SECURITY.md before edits. Use the current Bluesky/Substack/Firefly house framework. Both surfaces are one Slipway app: src/app.ts turns the tool list into the MCP server and the CLI, so there is no separate server, CLI bridge, guard or doctor file. Shared native operations, schemas, handlers and guard policy must stay identical across the CLI and MCP. Stable v1 is default; v2 requires explicit beta access/opt-in and a version 2 profile. Never fall back across profiles, credentials, hosts or API versions.

Run npm run typecheck, build, test, check:counts, check:discovery, sync:api -- --check and build:mcpb. Review upstream path-item parameters as well as operation parameters. Preserve private password input, signed credential output, exact reviewed batches, export bounds and explicit consent semantics. Every effect requires per-call confirmation.

Update all arguments, twenty FAQ accordions, dated changelog/component versions, package/desktop metadata, published topics/keywords and the matching published CMS guide together. Reuse the native terminal component; capture at 1040 px for 520 px display. Never run historical source/document generators over reviewed files.

No credentials, customer exports, private payloads, signed receipts or private legacy Git history may enter public source or artifacts. Fixture/CI checks do not prove provider outcomes, desktop GUI installation or actual token savings. Credit the official hosted MCP fairly. Retain the Navid Media author/footer wording and existing AGPL license.
