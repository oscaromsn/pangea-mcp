/**
 * Pangea MCP Server - Effect-Native Implementation
 *
 * Main MCP server using Effect's McpServer.layerStdio pattern with Toolkit.
 * Exposes Brazilian legal precedent search tools via the MCP protocol.
 */

import { McpServer } from "@effect/ai";
import { BunSink, BunStream } from "@effect/platform-bun";
import { Effect, Layer, Logger } from "effect";
import { SessionService } from "../services/session-service";
import { COURT_CODES, PRECEDENT_TYPES } from "./constants";
import { PangeaToolHandlersLive } from "./handlers";
import { PangeaToolkit } from "./tools";

/**
 * Pangea Toolkit Layer
 *
 * Wraps the toolkit with its handlers using McpServer.toolkit().
 */
const PangeaToolkitLayer = McpServer.toolkit(PangeaToolkit).pipe(
  Layer.provide(PangeaToolHandlersLive)
);

/**
 * MCP Resources Layer
 * Exposes static reference data as MCP resources for agents to read
 */
const CourtsResourceLayer = McpServer.resource({
  uri: "pangea://reference/courts",
  name: "Court Codes",
  description:
    "Brazilian court codes organized by hierarchy for use in search filters",
  mimeType: "application/json",
  content: Effect.succeed(JSON.stringify(COURT_CODES, null, 2)),
});

const TypesResourceLayer = McpServer.resource({
  uri: "pangea://reference/types",
  name: "Precedent Types",
  description:
    "Precedent type codes with descriptions for use in search filters",
  mimeType: "application/json",
  content: Effect.succeed(JSON.stringify(PRECEDENT_TYPES, null, 2)),
});

/**
 * Combined Resources Layer
 */
const PangeaResourcesLayer = Layer.mergeAll(
  CourtsResourceLayer,
  TypesResourceLayer
);

/**
 * MCP Server Layer
 *
 * Creates the MCP server with stdio transport and registers the toolkit and resources.
 */
export const PangeaMcpServerLayer = Layer.mergeAll(
  PangeaToolkitLayer,
  PangeaResourcesLayer
).pipe(
  // Provide MCP server with stdio transport
  Layer.provide(
    McpServer.layerStdio({
      name: "pangea-jurisprudence",
      version: "1.0.0",
      stdin: BunStream.stdin,
      stdout: BunSink.stdout,
    })
  ),
  // Add pretty logger for development
  Layer.provide(Logger.add(Logger.prettyLogger({ stderr: true })))
);

/**
 * Application Layer
 *
 * Composes all application dependencies in the correct order.
 * Uses local dependency erasure pattern - services provide their own dependencies.
 *
 * Note: BnpServiceLive is provided by handlers, so it's not needed here.
 */
export const ApplicationLayer = Layer.mergeAll(
  PangeaMcpServerLayer,
  SessionService.Default
);

/**
 * Main Program
 *
 * Launches the MCP server and keeps it running.
 * This returns an Effect that will be executed by BunRuntime.runMain.
 *
 * Note: Do NOT use Effect.log here - it writes to stdout and corrupts the MCP JSON-RPC protocol.
 * Use console.error for startup diagnostics (writes to stderr).
 */
export const program = Layer.launch(ApplicationLayer);
