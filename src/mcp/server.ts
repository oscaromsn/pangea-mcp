/**
 * Pangea MCP Server - Effect-Native Implementation
 *
 * Main MCP server using Effect's McpServer.layerStdio pattern with Toolkit.
 * Exposes Brazilian legal precedent search tools via the MCP protocol.
 */

import { McpServer } from "@effect/ai";
import { FetchHttpClient } from "@effect/platform";
import { BunSink, BunStream } from "@effect/platform-bun";
import { Layer, Logger } from "effect";
import { BnpServiceLive } from "../connectors/bnp";
import { SessionService } from "../services/session-service";
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
 * MCP Server Layer
 *
 * Creates the MCP server with stdio transport and registers the toolkit.
 */
export const PangeaMcpServerLayer = PangeaToolkitLayer.pipe(
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
 */
export const ApplicationLayer = Layer.mergeAll(
  PangeaMcpServerLayer,
  SessionService.Default,
  BnpServiceLive
).pipe(
  // Provide FetchHttpClient at the top level
  Layer.provide(FetchHttpClient.layer)
);

/**
 * Main Program
 *
 * Launches the MCP server and keeps it running.
 * This returns an Effect that will be executed by BunRuntime.runMain.
 */
export const program = Layer.launch(ApplicationLayer);
