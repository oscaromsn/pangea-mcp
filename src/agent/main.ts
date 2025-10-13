/**
 * Legal Research AI Agent - Main CLI Application
 *
 * This is an interactive CLI application where users can ask natural language questions
 * about Brazilian jurisprudence. The AI agent (Juris) interprets questions, uses the
 * available legal research tools, and synthesizes results into helpful answers.
 *
 * Run with: bun run src/agent/main.ts
 * Environment: Requires OPENAI_API_KEY environment variable
 */

import { Chat } from "@effect/ai";
import { OpenAiClient, OpenAiLanguageModel } from "@effect/ai-openai";
import { Prompt } from "@effect/cli";
import { FetchHttpClient } from "@effect/platform";
import { BunContext, BunRuntime } from "@effect/platform-bun";
import { Config, Console, Effect, Layer, Stream } from "effect";
import { LegalToolHandlersLive } from "./handlers";
import { systemPrompt } from "./system-prompt";
import { LegalToolkit } from "./tools";

/**
 * Handle streaming events from the LLM
 *
 * Processes different event types and outputs them to the console using Effect.
 * This ensures all side effects are properly tracked in the Effect type system.
 *
 * Event types:
 * - text-delta: Stream the response text (without newline)
 * - reasoning-delta: Stream the AI's thinking process
 * - tool-params-start: Show which tool is being called
 * - tool-call: Show tool arguments
 * - tool-result: Show tool results
 *
 * @returns Effect that performs console output based on event type
 */
function handleStreamEvent(event: any): Effect.Effect<void> {
  if (event.type === "text-delta") {
    // Stream text without newlines for continuous output
    return Effect.sync(() => process.stdout.write(event.delta));
  }
  if (event.type === "finish") {
    return Console.log("");
  }
  if (event.type === "reasoning-start") {
    return Effect.sync(() => process.stdout.write("\n💭 Raciocínio:\n"));
  }
  if (event.type === "reasoning-delta") {
    // Stream reasoning text without newlines
    return Effect.sync(() => process.stdout.write(event.delta));
  }
  if (event.type === "reasoning-end") {
    return Console.log("");
  }
  if (event.type === "tool-params-start") {
    return Effect.gen(function* () {
      yield* Effect.sync(() =>
        process.stdout.write(`\n🔧 Ferramenta: ${event.name}\n`)
      );
      yield* Effect.sync(() => process.stdout.write("Argumentos: "));
    });
  }
  if (event.type === "tool-params-delta") {
    // Stream tool arguments without newlines
    return Effect.sync(() => process.stdout.write(event.delta));
  }
  if (event.type === "tool-params-end") {
    return Console.log("");
  }
  if (event.type === "tool-call") {
    // Tool execution happens here (arguments already shown)
    return Effect.void;
  }
  if (event.type === "tool-result") {
    return Console.log(`\n📊 Resultado:\n${event.result}`);
  }
  // Default: no output for unknown event types
  return Effect.void;
}

/**
 * Main Interactive REPL Program
 *
 * This program:
 * 1. Initializes a chat session with the system prompt
 * 2. Starts an interactive loop that accepts user queries
 * 3. Streams LLM responses with automatic tool calling
 * 4. Handles the "exit" command to quit
 */
const main = Effect.gen(function* () {
  // Initialize the chat with the system prompt
  const chat = yield* Chat.fromPrompt([
    { role: "system", content: systemPrompt },
  ]);

  // Welcome message
  yield* Console.log("\n=== Juris - Brazilian Legal Research Assistant ===\n");
  yield* Console.log(
    'Type your legal research questions in natural language, or "exit" to quit.\n'
  );

  // Start the interactive loop - runs forever until user types "exit"
  while (true) {
    // Get user input
    const userInput = yield* Prompt.text({ message: "> " });

    // Check for exit command
    if (userInput.toLowerCase() === "exit") {
      yield* Console.log("\nGoodbye! Thank you for using Juris.\n");
      break;
    }

    // Skip empty inputs
    if (userInput.trim().length === 0) {
      continue;
    }

    // Stream the LLM response with automatic tool calling
    // First turn: send the user's query
    let response = yield* chat
      .streamText({
        prompt: userInput,
        toolkit: LegalToolkit,
      })
      .pipe(
        Stream.tap((event) => handleStreamEvent(event)),
        // Accumulate response data to check for tool calls
        Stream.runFold(
          { text: "", toolCalls: [] as Array<any> },
          (acc, event) => {
            if (event.type === "text-delta") {
              return { ...acc, text: acc.text + event.delta };
            } else if (event.type === "tool-call") {
              return { ...acc, toolCalls: [...acc.toolCalls, event] };
            }
            return acc;
          }
        )
      );

    // Continue the conversation while there are tool calls
    // Each iteration lets the LLM synthesize the tool results
    while (response.toolCalls.length > 0) {
      response = yield* chat
        .streamText({
          prompt: [], // Empty prompt to continue with tool results
          toolkit: LegalToolkit,
        })
        .pipe(
          Stream.tap((event) => handleStreamEvent(event)),
          Stream.runFold(
            { text: "", toolCalls: [] as Array<any> },
            (acc, event) => {
              if (event.type === "text-delta") {
                return { ...acc, text: acc.text + event.delta };
              } else if (event.type === "tool-call") {
                return { ...acc, toolCalls: [...acc.toolCalls, event] };
              }
              return acc;
            }
          )
        );
    }

    yield* Console.log("");
  }
});

/**
 * OpenAI Configuration Layer
 *
 * Creates the OpenAI client with API key from environment.
 * Uses FetchHttpClient for HTTP requests.
 */
const OpenAiLayer = OpenAiClient.layerConfig({
  apiKey: Config.redacted("OPENAI_API_KEY"),
}).pipe(Layer.provide(FetchHttpClient.layer));

/**
 * Language Model Layer
 *
 * Configures GPT-5-mini as the language model.
 */
const Gpt5MiniLayer = OpenAiLanguageModel.model("gpt-5-mini").pipe(
  Layer.provide(OpenAiLayer)
);

/**
 * Main Application Layer
 *
 * Composes ALL application layers into a single layer.
 * This is the MANDATORY "single provide" pattern - we compose all layers here
 * and provide them once at the application's edge.
 *
 * Dependencies:
 * - LegalToolHandlersLive: Implements the three legal research tools
 *   (already includes BNP, Datajud, and Falcao connectors via local dependency erasure)
 * - Gpt5MiniLayer: OpenAI language model
 * - BunContext.layer: Provides Terminal for Prompt
 */
const MainLayer = Layer.mergeAll(
  LegalToolHandlersLive,
  Gpt5MiniLayer,
  BunContext.layer
);

/**
 * Runnable Program
 *
 * Provides the main layer to the main program.
 * This is the single point where we provide all dependencies.
 */
const runnable = main.pipe(Effect.provide(MainLayer));

/**
 * Entry Point
 *
 * Execute the program using the Bun runtime.
 */
BunRuntime.runMain(runnable);
