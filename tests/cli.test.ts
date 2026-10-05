/**
 * The CLI, now built by Slipway from the same tools as the MCP server.
 *
 * Parsing, help and output shapes are Slipway's and tested there. These cover
 * what this repo promises: the beta switch, read-only mode, confirmation that
 * agent mode never grants, and the setup exit code.
 */

import { describe, expect, it } from "vitest";
import { checkApp, cli } from "@thenavidm/slipway/testing";
import { TeachableClient } from "../src/api/client.js";
import { app, createApp } from "../src/app.js";
import { loadConfig } from "../src/config.js";

const key = { TEACHABLE_API_KEY: "fixture-key-not-a-provider-secret" };

/** The app with Teachable answering every request with `status` and `body`, so nothing leaves the test. */
function answering(status: number, body: unknown = { message: "failure" }) {
  return createApp({
    context: (env) => {
      const config = loadConfig({ ...env, TEACHABLE_MIN_REQUEST_INTERVAL_MS: "0" });
      const fetcher = async () => new Response(JSON.stringify(body), { status });
      return { config, client: new TeachableClient(config, fetcher as typeof fetch) };
    },
  });
}

describe("Teachable CLI on Slipway", () => {
  it("lists the 26 stable commands, and all 123 with the beta switch", async () => {
    const stable = JSON.parse((await cli(app, ["agent-context", "--brief"], { env: {} })).stdout);
    const beta = JSON.parse((await cli(app, ["agent-context", "--brief"], { env: { TEACHABLE_ENABLE_V2: "1" } })).stdout);
    expect(stable.commands).toHaveLength(26);
    expect(beta.commands).toHaveLength(123);
    expect(beta.commands.filter((c: { requires_confirm: boolean }) => c.requires_confirm)).toHaveLength(59);
  });

  it("runs the beta tools it lists when TEACHABLE_TOOLSETS turns them on", async () => {
    const page = { data: [{ id: 7 }], meta: { page: 1, per_page: 20, total_pages: 1 } };
    for (const toolsets of ["beta", "all"]) {
      const env = { ...key, TEACHABLE_TOOLSETS: toolsets, TEACHABLE_API_VERSION: "2" };
      expect(JSON.parse((await cli(app, ["agent-context", "--brief"], { env })).stdout).commands).toHaveLength(123);
      const run = await cli(answering(200, page), ["v2-list-courses", "--agent"], { env });
      expect(run.stderr).toBe("");
      expect(run.code).toBe(0);
    }
  });

  it("refuses an enrollment without --confirm, also in agent mode, before any network", async () => {
    for (const extra of [[], ["--agent"], ["--yes"]]) {
      const run = await cli(app, ["create-enrollment", "--course-id", "7", "--user-id", "9", ...extra], { env: key });
      expect(run.code).toBe(2);
      expect(JSON.parse(run.stderr).code).toBe("refused");
      // 2.x's words for what the call can do, not a generic warning.
      expect(JSON.parse(run.stderr).error).toContain("may change school users,");
    }
  });

  it("hides writes in read-only mode", async () => {
    const run = await cli(app, ["create-enrollment", "--course-id", "7", "--user-id", "9", "--confirm"], { env: { ...key, TEACHABLE_READ_ONLY: "1" } });
    expect(run.code).toBe(2);
    expect(run.stderr).toContain("TEACHABLE_READ_ONLY");
  });

  it("reports a missing argument by its flag", async () => {
    const run = await cli(app, ["get-course"], { env: key });
    expect(run.code).toBe(2);
    expect(JSON.parse(run.stderr).error).toContain("--course-id");
  });

  it("exits 10 when nothing is configured, on a call and from doctor", async () => {
    expect((await cli(app, ["list-courses"], { env: {} })).code).toBe(10);
    expect((await cli(app, ["doctor", "--json"], { env: {} })).code).toBe(10);
  });

  it("keeps the exit codes scripts branch on: an unreadable key file 10, a batch stopped by 500 is 5, by 429 is 7", async () => {
    const unreadable = await cli(app, ["list-courses"], { env: { TEACHABLE_CREDENTIALS_FILE: "/nonexistent/teachable.json" } });
    expect(unreadable.code).toBe(10);
    expect(JSON.parse(unreadable.stderr).code).toBe("not_configured");

    const tasks = JSON.stringify([{ tool: "create_enrollment", arguments: { course_id: 7, user_id: 9 } }]);
    for (const [status, code] of [[500, 5], [429, 7]]) {
      const stub = answering(status);
      const review = JSON.parse((await cli(stub, ["preview-school-batch", "--tasks", tasks, "--agent"], { env: key })).stdout);
      const run = await cli(stub, ["submit-school-batch", "--tasks", tasks, "--review-sha256", review.reviewSha256, "--confirm", "--agent"], { env: key });
      expect(run.code).toBe(code);
      expect(JSON.parse(JSON.parse(run.stderr).error).failedIndex).toBe(0);
    }
  });

  it("passes slipway check in both policy modes", async () => {
    for (const env of [{}, { TEACHABLE_ENABLE_V2: "1" }]) {
      const report = await checkApp(app, { env });
      expect(report.findings.filter((finding) => finding.level === "error")).toEqual([]);
    }
  });
});
