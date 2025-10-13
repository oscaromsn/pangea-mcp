#!/usr/bin/env bun

/**
 * Entry point for the Pangea MCP Server - Effect-Native Implementation
 *
 * This is the main entry point for the Effect-native MCP server.
 * It uses the modern Effect architecture with proper dependency injection,
 * type safety, and the Model Context Protocol (MCP) for LLM integration.
 *
 * Run with: bun src/index.ts
 */

import { BunRuntime } from "@effect/platform-bun";
import { program } from "./mcp/server";

/**
 * Entry Point
 *
 * Execute the MCP server program using the Bun runtime.
 * The server will run indefinitely, processing MCP requests via stdio.
 */
BunRuntime.runMain(program);
