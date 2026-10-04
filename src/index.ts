#!/usr/bin/env node
/**
 * Both binaries: teachable-mcp serves MCP over stdio (or --http), teachable-cli runs one tool.
 */

import { app } from "./app.js";

await app.main();
