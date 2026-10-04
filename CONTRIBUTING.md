# Contributing

Thanks for looking. Here is what helps and what does not.

## Issues, yes

Bug reports are genuinely useful, and the more concrete the better: the command
you ran, what you expected, what happened instead. If it involves a specific
post, account or file, say which.

Feature requests are welcome. Include the concrete workflow, the current official API or MCP alternative, and why the addition is useful. Schema loading depends on the client; a tool count alone does not prove context cost. Changes must preserve the shared CLI/MCP handlers and guard, private profile isolation, native contract validation and complete house documentation.

## Pull requests, no

This is one of a family of servers that are deliberately identical to each
other: the same section order, the same safety model, the same shape of tool
description, the same voice. A change usually has to land the same way in
several of them, so reviewing a patch into that takes longer than writing it.

That is a property of how these are maintained, not a judgement on the patch.
If something is broken, an issue gets it fixed faster than a pull request will.

## Security

Please do not open a public issue for a vulnerability. Use the private
reporting path in [SECURITY.md](SECURITY.md), which also sets out what the
server can reach and what it holds.
