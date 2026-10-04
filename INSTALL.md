# Install Teachable MCP Server & CLI

Node 22+; one package, two binaries and a desktop bundle.

Use the intended school owner account to open **Settings > API > Create API Key**. Give the key a name and select only the permissions needed. API eligibility and beta access remain provider-controlled. Follow [Teachable authentication](https://docs.teachable.com/v2.0/docs/authentication).

Choose one source: `TEACHABLE_API_KEY` in private runtime settings, or `TEACHABLE_CREDENTIALS_FILE` pointing to an absolute owner-private regular JSON file containing `api_key`. Never mix them. The file must be non-symlink, at most 64 KiB and, on POSIX, owned by the process user with owner-only permissions. Restrict Windows ACLs separately. Credentials do not belong in repositories, chat, screenshots, user payloads or project MCP config.

```bash
teachable-cli login
teachable-cli list-accounts --agent
teachable-cli doctor
teachable-cli doctor --network
```

Login prints instructions only. Local doctor reports configuration availability without proving the key is valid. The deliberate network option performs one version-matched courses read. Success there does not establish all scopes, ownership or every native task. Keys are cached within the process; restart clients after rotation. Revoke through **Settings > API > More Actions > Revoke Key**.

## Private credential file example

Replace the placeholder only in a private file outside every repository. Use owner-only mode on POSIX and restricted ACLs on Windows. All absolute paths must exist in the launching local/remote runtime; Windows uses a path such as C:/Users/you/private/teachable.json.

```json
{"api_key":"YOUR_PRIVATE_TEACHABLE_ADMIN_API_KEY"}
```

## Named profile example

Configure this array privately in TEACHABLE_ACCOUNTS. Each profile chooses one source and its own API version. Setting TEACHABLE_ENABLE_V2=1 is required to accept the second profile; it does not obtain provider beta approval.

```json
[
  {"name":"intended-school","api_version":"1","credentials_file":"/absolute/private/school-v1.json"},
  {"name":"intended-beta-school","api_version":"2","credentials_file":"/absolute/private/school-v2.json"}
]
```

## CLI

```bash
npm install -g @thenavidm/teachable-mcp-cli@latest
teachable-cli --version
teachable-cli tools
teachable-cli login
```

Without a global install, use npx -y --package @thenavidm/teachable-mcp-cli@latest teachable-cli tools. npm does not automatically register the shipped SKILL.md in an agent. On Windows, use npm.cmd/npx.cmd or a supported cmd launcher where required; do not weaken execution policy.

## Codex

Codex is the current validation priority. Private credential paths must exist in the process or remote environment where the server runs.

~~~bash
codex mcp add teachable -- npx -y @thenavidm/teachable-mcp-cli@latest
codex mcp list
~~~

Account credentials must reach the server through private environment settings. `codex mcp add --env NAME=value` stores values in your local config, so never commit that config or put secrets in a shared command. In TOML, the equivalent server is:

~~~toml
[mcp_servers.teachable]
command = "npx"
args = ["-y", "@thenavidm/teachable-mcp-cli@latest"]
env_vars = ["TEACHABLE_API_KEY", "TEACHABLE_CREDENTIALS_FILE", "TEACHABLE_ACCOUNTS", "TEACHABLE_DEFAULT_ACCOUNT", "TEACHABLE_API_VERSION", "TEACHABLE_ENABLE_V2", "TEACHABLE_READ_ONLY", "TEACHABLE_ALLOW_DESTRUCTIVE", "TEACHABLE_AUDIT_LOG", "TEACHABLE_REQUEST_TIMEOUT_MS", "TEACHABLE_MIN_REQUEST_INTERVAL_MS"]
~~~

`env_vars` forwards those names from the environment available to Codex. If that environment does not contain them, configure private env settings locally. Codex can also call the CLI directly with SKILL.md and `--agent` output.

## Claude Code

For a user-scoped connection, after privately configuring credentials:

~~~bash
claude mcp add --scope user teachable -- npx -y @thenavidm/teachable-mcp-cli@latest
claude mcp list
~~~

Use the client's private local environment settings for private credential settings if they are not inherited. Claude's `-e NAME=value` registration option writes values into its config; only use it locally through your secret manager, with no shared command transcript. Never place credentials in a project .mcp.json. Reconnect and ask Claude to verify credentials.

Alternatively install the CLI, make SKILL.md available to Claude, and use shell commands. Registering both surfaces is optional.

## Claude Desktop

### Install the .mcpb extension

Download teachable-3.0.0.mcpb from [GitHub Releases](https://github.com/thenavidm/teachable-mcp-cli/releases/latest). In a supported Claude Desktop build, use Settings > Extensions > Advanced settings > Install Extension… . Choose one private Admin API key or credential JSON file; leave the other empty. Stable version 1 is default; beta requires enable_v2 plus an explicit version 2 profile and provider access. Named profiles require private manual runtime settings. Read-only exposes only the 19 read operations by default (64 with beta enabled). Reconnect after installation or credential rotation. The bundle includes production dependencies; Node 22+ compatibility and actual GUI installation are separate checks.

### Manual config

Open **Settings > Developer > Edit Config**, or use your platform's config file:

| OS | Typical config path |
| --- | --- |
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| Linux | `~/.config/Claude/claude_desktop_config.json`; confirm the location through Edit Config in your installed build |

~~~json
{
  "mcpServers": {
    "teachable": {
      "command": "npx",
      "args": ["-y", "@thenavidm/teachable-mcp-cli@latest"],
      "env": {
        "TEACHABLE_CREDENTIALS_FILE": "/absolute/private/teachable.json"
      }
    }
  }
}
~~~

Replace the placeholders only in your private file. Merge the server entry into an existing mcpServers object instead of replacing other integrations. Fully quit and reopen Claude Desktop. Do not enable an extension and a manual entry with the same name; choose one route.

If a Windows launcher cannot execute npx directly, use `"command": "cmd"` with `"args": ["/c", "npx", "-y", "@thenavidm/teachable-mcp-cli@latest"]`. An absolute node executable and installed `dist/index.js` path also avoids launcher/PATH problems.

## Cursor

Use private user settings at `~/.cursor/mcp.json`, or **Settings > Tools & MCP**. [Cursor documents environment interpolation and envFile support](https://cursor.com/docs/mcp).

~~~json
{
  "mcpServers": {
    "teachable": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@thenavidm/teachable-mcp-cli@latest"],
      "env": {
        "TEACHABLE_CREDENTIALS_FILE": "${env:TEACHABLE_CREDENTIALS_FILE}"
      }
    }
  }
}
~~~

The environment values must exist for the Cursor process. If you use envFile, keep that file private and outside version control. A project .cursor/mcp.json must not contain actual credentials. Reconnect the server after saving.

## VS Code and Copilot

Use **MCP: Open User Configuration**. [VS Code uses servers and secure inputs](https://code.visualstudio.com/docs/agent-customization/mcp-servers), rather than a mcpServers root:

~~~json
{
  "inputs": [
    {"type":"promptString","id":"teachable-private-file","description":"Absolute private credential JSON file path"}
  ],
  "servers": {
    "teachable": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@thenavidm/teachable-mcp-cli@latest"],
      "env": {
        "TEACHABLE_CREDENTIALS_FILE": "${input:teachable-private-file}"
      }
    }
  }
}
~~~

Start Teachable through the MCP controls, approve trust if prompted, and enter the private file path in the input prompt. Workspace .vscode/mcp.json may contain this placeholder-only structure, but never resolved secret values. Remote development runs the server in the selected remote environment, so local file paths refer to that environment.

## Windsurf

Open Cascade's MCP settings or edit the private user file `~/.codeium/windsurf/mcp_config.json`. Use the Claude Desktop manual mcpServers block above with your locally configured env values. See [Windsurf's current MCP documentation](https://docs.devin.ai/desktop/cascade/mcp). Restart or reconnect Teachable in Cascade; project files must not contain secrets.

## Zed

Open **Settings > AI > MCP Servers > Add Server > Add Local Server**, or your user settings file. [Zed uses context_servers](https://zed.dev/docs/ai/mcp):

~~~json
{
  "context_servers": {
    "teachable": {
      "command": "npx",
      "args": ["-y", "@thenavidm/teachable-mcp-cli@latest"],
      "env": {
        "TEACHABLE_CREDENTIALS_FILE": "/absolute/private/teachable.json"
      }
    }
  }
}
~~~

Enter actual values only in private user settings. Check the active-server indicator before prompting. Do not wrap command and args inside a nested command object from older Zed examples.

## Gemini CLI

Merge the Claude Desktop manual mcpServers block into your private `~/.gemini/settings.json`. Configure the private credential values locally, then restart Gemini CLI and inspect `/mcp`. See [Gemini CLI's MCP configuration](https://geminicli.com/docs/tools/mcp-server/). Its project settings must not contain real credentials. You can instead use the CLI from an agent shell.

Other local stdio clients use the same command and arguments, adapted to their config format. A client that only accepts a remote MCP URL cannot connect directly: this package does not ship a public HTTP listener. ChatGPT's remote connector setup is not a substitute for local stdio installation.

## OpenCode

Merge this into your private user config, following [OpenCode's MCP docs](https://opencode.ai/docs/mcp-servers/). Reconnect and inspect the server status.

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "teachable": {
      "type": "local",
      "command": ["npx", "-y", "@thenavidm/teachable-mcp-cli@latest"],
      "enabled": true,
      "environment": {"TEACHABLE_CREDENTIALS_FILE": "/absolute/private/teachable.json"}
    }
  }
}
```

## Copilot CLI

After private runtime setup, use [Copilot CLI's documented registration](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers):

```bash
copilot mcp add teachable --env TEACHABLE_CREDENTIALS_FILE=/absolute/private/teachable.json -- npx -y @thenavidm/teachable-mcp-cli@latest
copilot mcp get teachable
```

Registration stores the private file path in user configuration; do not put actual credentials in the command or repository.

## OpenClaw

Use the saved-server registry in an eligible runtime, following [OpenClaw's MCP reference](https://docs.openclaw.ai/cli/mcp):

```bash
openclaw mcp add teachable --command npx --arg -y --arg @thenavidm/teachable-mcp-cli@latest --env TEACHABLE_CREDENTIALS_FILE=/absolute/private/teachable.json
openclaw mcp doctor teachable --probe
```

Configure paths in the process where the server actually runs. Runtime projection and trust policy remain client-specific; a saved entry is not proof of a successful provider call.

## Antigravity

Follow [Google's current custom-server instructions](https://antigravity.google/docs/mcp): open MCP Servers, Manage MCP Servers, then View raw config. Merge the Claude Desktop manual mcpServers block above. Current global config is ~/.gemini/config/mcp_config.json; project .agents/mcp_config.json must never contain secrets. The local stdio command/args/env form applies. Reconnect and inspect tools.

## Hermes

Merge this into your private ~/.hermes/config.yaml, following [Hermes MCP configuration](https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp):

```yaml
mcp_servers:
  teachable:
    command: "npx"
    args: ["-y", "@thenavidm/teachable-mcp-cli@latest"]
    env:
      TEACHABLE_CREDENTIALS_FILE: "/absolute/private/teachable.json"
```

Restart the agent and inspect available tools. An agent shell can also use teachable-cli directly with the shipped SKILL.md; installing npm does not automatically register the skill.


## Docker

Build the included Dockerfile and supply private runtime settings through your secret manager. A credential-file path must exist inside the container through a restricted read-only mount. Use -i for stdio. No HTTP listener is exposed.

## Policy and limits

Every provider or private-output effect needs approval. In a terminal that is `--confirm`, which `--agent` and `--yes` never add. Over MCP a person approves each one where the client can ask: Claude Code (2.1.246 and later) shows its own prompt for the call, and a client that can show forms asks with an approval form whose one box starts unticked. Each approval is signed, bound to that exact call and works once. A client that can do neither falls back to `confirm: true`, which a model may pass only when the user asked for that exact action. `TEACHABLE_CONFIRM=model` makes `confirm: true` enough everywhere, for a headless agent you trust. Read-only hides and directly refuses effects, and `TEACHABLE_ALLOW_DESTRUCTIVE=0` refuses them even with approval. Local confirmation does not supply provider authorization, customer permission, marketing consent or financial entitlement.

Read the intended records and inspect the operation schema before preparing effects. Course publishing, enrollment access, user deletion, session revocation and pricing changes can affect people immediately. Only carry out the action the user asked for. Teachable determines whether a key, role, scope and school plan allow it.

No operation retries automatically. A timeout or malformed receipt can leave an unknown outcome; inspect native state before deliberately repeating. Local pacing defaults to one second and a 30-second request timeout. Other processes still share provider quotas.

Stable v1 remains under `/v1`; opt-in v2 is request-access beta under `/v2`. Set `TEACHABLE_ENABLE_V2=1` (or `TEACHABLE_TOOLSETS=beta`) to expose v2_ tasks and configure an explicit `api_version:"2"` profile. Merely enabling discovery does not grant access or change a version 1 profile.

V1 enrollment creation is `POST /v1/enroll` with flat `user_id` and `course_id`; it is not the legacy `/enrollments` wrapper. User creation uses flat `email`, `name`, `password` and `src`, with no guessed role field. Pricing lists use `/v1/pricing_plans`. Course enrollment listing has native enrolled_in_after/enrolled_in_before/sort_direction filters, without invented page/per arguments.

```bash
teachable-cli get-operation-schema --operation create_enrollment --agent
teachable-cli create-enrollment --course-id 7 --user-id 9 --account intended-school --confirm --agent
teachable-cli v2-list-lectures-for-course --course-id 7 --account intended-beta-school --agent
```

V2 route IDs retain the reviewed schema's types; some are strings. The dedicated CLI parses them accordingly. For user creation, explicit student marketing consent is required, and author/affiliate shares are native decimal fractions between 0 and 1. User passwords can only be read from a private payload file; there is no password flag or inline-payload password route.

V2 coupon deletion archives a multiple-use coupon rather than deleting its historical record. Coupon creation has mutually exclusive scope shapes, and new-payment schools have additional expiry, inventory and discount requirements. Some coupon updates on those schools only propagate name. Review the full native description and [coupon reference](https://docs.teachable.com/v2.0/reference/post_v2-products-coupons); this package cannot infer the school's payments entitlement.

The v2_create_pre_signed_upload_credentials workflow here requests signed credentials into a new private file. Transfer bytes according to the native storage receipt separately, then use a deliberate content attachment/update step. No byte uploader or automatic course publishing is advertised.
