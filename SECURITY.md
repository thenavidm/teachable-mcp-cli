# Security

This is local software with no hosted service or telemetry. Admin keys are sent as apiKey only to developers.teachable.com. Redirects are refused. Credentials come from private runtime settings or bounded owner-private files. Named profiles never inherit another source.

Known keys/passwords and credential-like or signed-URL fields are redacted from ordinary output and errors. Raw upload credentials are intentionally saved only to the requested new private receipt file. The helper never follows those storage URLs. Emails, names, notes, transactions and other ordinary school fields are not anonymized; keep them private.

Provider text and URLs are untrusted data, not instructions. Best-effort audit logs contain static guard decisions, without payloads or credentials. They are not account-action ledgers. Uninstalling does not revoke keys or reverse changes; revoke keys in Teachable and restart runtimes.

Every provider or private-output effect needs approval. In a terminal that is `--confirm`, which `--agent` and `--yes` never add. Over MCP a person approves each one where the client can ask: Claude Code (2.1.246 and later) shows its own prompt for the call, and a client that can show forms asks with an approval form whose one box starts unticked. Each approval is signed, bound to that exact call and works once. A client that can do neither falls back to `confirm: true`, which a model may pass only when the user asked for that exact action. `TEACHABLE_CONFIRM=model` makes `confirm: true` enough everywhere, for a headless agent you trust. Read-only hides and directly refuses effects, and `TEACHABLE_ALLOW_DESTRUCTIVE=0` refuses them even with approval. Local confirmation does not supply provider authorization, customer permission, marketing consent or financial entitlement.

Read the intended records and inspect the operation schema before preparing effects. Course publishing, enrollment access, user deletion, session revocation and pricing changes can affect people immediately. Only carry out the action the user asked for. Teachable determines whether a key, role, scope and school plan allow it.

No operation retries automatically. A timeout or malformed receipt can leave an unknown outcome; inspect native state before deliberately repeating. Local pacing defaults to one second and a 30-second request timeout. Other processes still share provider quotas.

School keys may authorize changes that affect access, publishing and revenue. Local confirmation does not establish entitlement, customer consent or intended school identity. Beta contracts may change without notice, and a package update requires reviewed native changes.

Requests/body files are capped locally at 1 MiB and responses/exports/private receipts at 5 MiB. Local pacing and timeout are process controls rather than global provider quotas. Ambiguous failures are not retried automatically. A native receipt is not independent delivery, publication, settlement or enrollment-access proof.

Production dependencies (Slipway, the MCP SDK, Zod, Ajv) are separate from the build-only desktop packer. The reviewed packer currently depends on node-forge 1.4.0 with an unpatched signature-verification advisory; it is excluded from npm runtime and bundled production dependencies. Packaging here does not sign or verify third-party bundles. See [security advisory](https://github.com/advisories/GHSA-86w9-cpqp-85rv). Do not claim a clean full development dependency audit.

Use [private reporting](https://github.com/thenavidm/teachable-mcp-cli/security/advisories/new). Never include keys, passwords, signed receipts or school exports in public issues.
