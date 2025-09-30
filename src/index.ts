#!/usr/bin/env bun

/**
 * Entry point for the Pangea MCP Server
 *
 * This file serves as the main entry point for the TypeScript implementation
 * of the Pangea jurisprudence search MCP server.
 */

import { main } from "./server";

// Handle uncaught errors
process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled rejection at:", promise, "reason:", reason);
  process.exit(1);
});

// Start the server
if (import.meta.main) {
  try {
    await main();
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}
