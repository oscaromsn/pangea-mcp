# Pangea: Legal Connectors & AI Agent Toolkit

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-95%25-brightgreen)
![Effect TS](https://img.shields.io/badge/Effect-3.18.4-blue)

## Table of Contents

1. [Overview](#1-overview)
2. [Key Features](#2-key-features)
3. [Architecture](#3-architecture)
4. [Prerequisites & Installation](#4-prerequisites--installation)
5. [Quick Start](#5-quick-start)
6. [Available Connectors](#6-available-connectors)
7. [Usage Guide](#7-usage-guide)
8. [The numero-processo Domain Toolkit](#8-the-numero-processo-domain-toolkit)
9. [AI Agent & MCP Server](#9-ai-agent--mcp-server)
10. [Development & Contribution](#10-development--contribution)
11. [Testing](#11-testing)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. Overview

**Pangea** is a comprehensive, production-grade Effect-TS library that provides unified, type-safe, and resilient access to major Brazilian legal data APIs. It serves as a foundational layer for building advanced legal tech applications, including AI-powered agentic systems and MCP (Model Context Protocol) servers.

This package provides three core connectors:

- **BNP Connector**: Interacts with the *Banco Nacional de Precedentes* for high-level legal precedents and binding theses.
- **DataJud Connector**: Accesses the *DataJud Public API* for detailed judicial process metadata with automatic tribunal inference.
- **Falcão Connector**: Searches the *Jurisprudência Nacional* for Brazilian labor law jurisprudence.

Additionally, it includes a sophisticated **AI Agent ("Juris")** and **MCP Server** built on top of these connectors, demonstrating a complete, production-ready use case for legal research automation.

---

## 2. Key Features

This library is engineered from the ground up using Effect-TS and adheres strictly to the `CLAUDE.md` and `AGENTS.md` development guidelines.

- ✅ **Idiomatic Effect-TS**: Built entirely with `Effect`, `Layer`, `Schema`, and `Data.TaggedError` for a purely functional, declarative, and composable codebase.
- 🔒 **Unmatched Type Safety**: Leverages Effect's typed error channel to handle all failure modes (network errors, API errors, validation errors) at the type level. No `try/catch`, no runtime surprises.
- 🧩 **Modular & Composable Architecture**: Each API connector is a self-contained `Layer` with its dependencies managed internally ("Local Dependency Erasure"). This allows them to be easily composed, tested in isolation, and integrated into larger systems.
- 📜 **Schema-Driven Development**: All data crossing application boundaries is defined using `@effect/schema`, providing a single source of truth for types, validation, parsing, and serialization.
- 🎯 **Contract-Driven TDD**: Follows an Interface-First Test-Driven Development methodology. Service contracts are defined in `service.ts` and tested exhaustively, separating the "what" from the "how".
- 🤖 **AI Agent & MCP Ready**: Includes a fully-featured AI agent (`/agent`) with interactive CLI and a Model Context Protocol server (`/mcp`) that consume the connector layers, providing powerful examples of higher-level application architecture.
- 🧪 **Comprehensive Testing Suite**: High test coverage using `@effect/vitest`, with unit tests for domain logic and contract-driven integration tests using test `Layer`s for dependency mocking.
- 🚀 **Production-Ready**: Built with clean architecture that emphasizes separation of concerns, dependency injection, and resilience patterns.
- ⚡ **High Performance**: Utilizes the Bun runtime for fast startup and native TypeScript execution. Asynchronous operations are managed by Effect's highly efficient fiber-based runtime.

---

## 3. Architecture

This project showcases idiomatic Effect-TS architecture, blending **Vertical Slice Architecture**, **Interface-First TDD**, and **Hexagonal Architecture (Ports and Adapters)** principles.

### Core Architectural Principles

1. **Schema-Driven Development**: All data crossing application boundaries (API requests/responses, domain models) is defined using `@effect/schema`. This provides runtime validation and compile-time type safety.

2. **Contract-Driven TDD**: Each service has a clearly defined interface (its "contract"). Tests are written against this interface before implementation, ensuring correctness and decoupling tests from implementation details.

3. **Dependency Injection with Layers**: The application's dependency graph is managed entirely by Effect's `Layer` system, providing compile-time guarantees that all dependencies are met.

4. **Local Dependency Erasure**: Each connector manages its own dependencies internally, exposing only its service interface to consumers.

### System Architecture Diagram

```mermaid
graph TD
    subgraph "Application Layer"
        A[Examples & CLI]
        B[AI Agent - Juris]
        C[MCP Server]
    end

    subgraph "Service Layer"
        D[LegalToolkit]
        E[SessionService]
    end

    subgraph "Connector Layer"
        F[BnpService]
        G[DatajudService]
        H[FalcaoService]
    end

    subgraph "Domain Layer"
        I[NumeroProcesso Toolkit]
        J[Domain Models & Errors]
    end

    subgraph "Platform Layer"
        K[HttpClient]
        L[@effect/platform]
    end

    A --> D
    B --> D
    C --> D
    D --> F
    D --> G
    D --> H
    D --> E

    F --> K
    G --> K
    H --> K
    G --> I

    F --> J
    G --> J
    H --> J

    K --> L

    style A fill:#cde4ff,stroke:#333
    style B fill:#cde4ff,stroke:#333
    style C fill:#cde4ff,stroke:#333
    style D fill:#b8e6b8,stroke:#333
    style E fill:#b8e6b8,stroke:#333
    style I fill:#e2d9ff,stroke:#333
    style J fill:#e2d9ff,stroke:#333
    style K fill:#d4edda,stroke:#155724
    style L fill:#d4edda,stroke:#155724
```

### Directory Structure

```
src/
├── domain/                 # 🧠 The "What": Pure data models and business logic
│   └── numero-processo/    # Self-contained toolkit for Brazilian process numbers
│       ├── errors.ts       # Typed domain errors
│       ├── models.ts       # Schema and Brand definitions
│       ├── parser.ts       # Effect-based parser
│       └── validator.ts    # Effect-based check-digit validator
│
├── connectors/             # 🔌 The "How": API client implementations
│   ├── bnp/                # BNP API Connector
│   ├── datajud/            # DataJud API Connector
│   └── falcao/             # Falcão API Connector
│   # Each connector contains:
│   #  - service.ts:        Public service interface (Effect.Service)
│   #  - service.impl.ts:   Live implementation (Layer)
│   #  - service.test.ts:   Contract tests
│   #  - schema.ts:         @effect/schema models for API requests/responses
│   #  - errors.ts:         Data.TaggedError definitions
│   #  - config.ts:         API constants
│
├── services/               # 🔧 Shared application-level services
│   └── session-service.ts  # Fiber-safe session state management using Ref
│
├── agent/                  # 🤖 AI Agent application logic
│   ├── tools.ts            # AI tool definitions using @effect/ai and Schema
│   ├── handlers.ts         # Tool logic consuming connector services
│   ├── system-prompt.ts    # AI personality and behavior definition
│   └── main.ts             # Interactive CLI entry point
│
├── mcp/                    # 📡 Model Context Protocol server
│   ├── server.ts           # MCP server setup and Layer composition
│   ├── handlers.ts         # MCP tool handlers
│   └── tools.ts            # Tool definitions for MCP
│
├── test/                   # 🧪 Shared testing utilities
│   ├── fixtures.ts         # Reusable, validated test data
│   └── test-http-client.ts # Test double for HttpClient
│
└── index.ts                # Main entry point for MCP server

examples/                   # Standalone runnable examples
├── bnp-example.ts
├── datajud-example.ts
└── falcao-example.ts
```

### Architectural Layers Explained

- **Domain Layer**: Contains pure, self-contained business logic with no external dependencies. The `numero-processo` toolkit is a prime example of pure domain logic.

- **Connector Layer**: Acts as the boundary to external services. Each connector encapsulates all logic for communicating with an external API, including error handling, schema validation, and HTTP client management.

- **Service Layer**: Provides higher-level abstractions that compose multiple connectors or provide application-wide services (like session management).

- **Application Layer**: The top layer containing user-facing entry points (CLI agent, MCP server, examples) that compose the lower layers into complete applications.

- **Platform Layer**: The lowest-level abstraction providing access to external resources like the network via `@effect/platform`'s `HttpClient`.

---

## 4. Prerequisites & Installation

### Prerequisites

- **Bun v1.0+**: This project uses Bun as its runtime, package manager, and test runner. [Install Bun](https://bun.sh/docs/installation)
- **OpenAI API Key**: Required for running the AI agent (optional for using connectors directly)

### Installation

This package is part of an enterprise monorepo. To install dependencies, run from the monorepo root:

```bash
bun install
```

### Environment Configuration

Create a `.env` file in the project root by copying the example:

```bash
cp .env.example .env
```

Add your OpenAI API key (required only for the AI agent):

```env
# Required for the AI Agent
OPENAI_API_KEY="sk-..."

# Note: API connectors use public-facing endpoints and do not require keys
```

---

## 5. Quick Start

### Running Examples

The `examples/` directory contains standalone scripts demonstrating each connector:

```bash
# Run the BNP connector example
bun run examples/bnp-example.ts

# Run the DataJud connector example
bun run examples/datajud-example.ts

# Run the Falcão connector example
bun run examples/falcao-example.ts
```

### Running the AI Agent (Interactive CLI)

Start the Juris AI assistant for natural language legal research:

```bash
# Start the interactive agent
bun agent

# Or run in development mode with hot-reloading
bun agent:dev
```

Example queries:
> `What are the latest precedents on "adicional de periculosidade" from the TST?`
> `Find labor law decisions about "horas extras".`
> `Get details for process number 0722391-40.2017.8.07.0001.`

Type `exit` to quit.

### Running the MCP Server

The MCP server exposes legal research tools to AI clients like Claude Desktop:

```bash
# Start the MCP server (stdio transport)
bun start

# Or run in development mode
bun dev
```

To integrate with an MCP client, configure it to run `bun start` from this project's directory.

---

## 6. Available Connectors

| Connector | Target API | Key Features | Primary Use Case |
|:----------|:-----------|:-------------|:-----------------|
| **BnpService** | Banco Nacional de Precedentes | Searches high-level precedents, theses, and binding legal principles | Finding authoritative legal positions and broad precedents |
| **DatajudService** | DataJud Public API | Type-safe Elasticsearch Query DSL, automatic tribunal inference from process numbers | Retrieving detailed metadata for specific judicial processes |
| **FalcaoService** | Jurisprudência Nacional (Labor Law) | Robust schemas for 6+ document types including precedentes and acordãos | In-depth research on Brazilian labor law jurisprudence |

---

## 7. Usage Guide

Each connector provides a `Service` interface and a `Live` `Layer` implementation. To use a connector, provide its `Live` layer to your Effect program.

### Example 1: Searching the BNP (Banco Nacional de Precedentes)

This example demonstrates searching for legal precedents and handling potential errors idiomatically:

```typescript
import { Effect } from "effect";
import { BnpService, BnpServiceLive } from "./connectors/bnp";

const program = Effect.gen(function* () {
  const bnp = yield* BnpService;
  const results = yield* bnp.searchPrecedents({
    buscaGeral: "adicional de periculosidade",
    tipos: ["IRR"],
    orgaos: ["TST"],
  });

  console.log(`Found ${results.total} precedents.`);
  return results;
});

// Provide the live layer and handle all possible errors
const runnable = program.pipe(
  Effect.provide(BnpServiceLive),
  Effect.catchTag("BnpApiError", (error) =>
    Effect.logError(`BNP API Error (Status ${error.status}): ${error.details}`)
  ),
  Effect.catchTag("BnpNetworkError", (error) =>
    Effect.logError(`BNP Network Error: ${error.message}`)
  ),
  Effect.catchTag("BnpValidationError", (error) =>
    Effect.logError(`BNP Validation Error: ${error.message}`)
  )
);

// Run at the edge of the application
Effect.runPromiseExit(runnable).then(console.log);
```

### Example 2: Searching DataJud with Type-Safe Query DSL

The DataJud connector includes a powerful, type-safe DSL for building Elasticsearch queries and automatically infers the correct tribunal from a process number:

```typescript
import { Effect } from "effect";
import {
  DatajudService,
  DatajudServiceLive,
  DatajudFields,
  TribunalAlias,
} from "./connectors/datajud";

const program = Effect.gen(function* () {
  const datajud = yield* DatajudService;

  // Search by tribunal alias with a complex, type-safe query
  const results = yield* datajud.searchProcessMetadata(
    TribunalAlias("tjsp"), // Type-safe tribunal alias
    {
      query: {
        bool: {
          must: [
            { match: { [DatajudFields.orgaoJulgador.nome]: "Praia Grande" } },
          ],
          should: [
            { match: { [DatajudFields.classe.nome]: "usucapião" } },
            { match: { [DatajudFields.assuntos.nome]: "usucapião" } },
          ],
        },
      },
      size: 10,
    }
  );

  console.log(`Found ${results.hits.total.value} processes in TJSP.`);
  return results;
});

const runnable = program.pipe(
  Effect.provide(DatajudServiceLive),
  Effect.catchAll((error) => Effect.logError(error))
);

Effect.runPromise(runnable);
```

### Example 3: Searching the Falcão API

The Falcão connector correctly handles API-specific constraints, like page size limits:

```typescript
import { Effect } from "effect";
import { FalcaoService, FalcaoServiceLive } from "./connectors/falcao";

const program = Effect.gen(function* () {
  const falcao = yield* FalcaoService;
  const results = yield* falcao.search({
    texto: "gerente bancario",
    colecao: "acordaos",
    size: 10, // The schema enforces allowed sizes (5 or 10)
  });

  console.log(`Found ${results.quantidadeTotal} documents.`);
  return results;
});

const runnable = program.pipe(
  Effect.provide(FalcaoServiceLive),
  Effect.catchAll((error) => Effect.logError(error))
);

Effect.runPromise(runnable);
```

---

## 8. The `numero-processo` Domain Toolkit

This package includes a powerful, self-contained domain toolkit for working with Brazilian judicial process numbers (`Número Único de Processo`).

### Features

- **Parsing**: Converts formatted (`NNNNNNN-DD.AAAA.J.TR.OOOO`) or unformatted (20-digit) numbers into a structured `NumeroProcessoComponents` object.
- **Validation**: Validates format and, optionally, the check digit (`dígito verificador`) using the Módulo 97 algorithm.
- **Tribunal Inference**: Automatically and safely infers the correct DataJud `TribunalAlias` from a process number.
- **Error Handling**: Returns typed domain errors (`InvalidProcessNumberFormatError`, `InvalidCheckDigitError`, `UnsupportedTribunalError`).

### Usage Example

```typescript
import { Effect } from "effect";
import { inferTribunalAlias } from "./domain/numero-processo";

const processNumber = "0722391-40.2017.8.07.0001";

const program = Effect.gen(function* () {
  // Infer the tribunal and validate the check digit in one step
  const alias = yield* inferTribunalAlias(processNumber, {
    validateCheckDigit: true,
  });

  console.log(`Process number ${processNumber} belongs to tribunal: ${alias}`);
});

// Output: "Process number ... belongs to tribunal: tjdft"
Effect.runPromise(program);
```

---

## 9. AI Agent & MCP Server

This package includes both an interactive AI legal assistant and an MCP server for AI agent integration.

### The AI Agent ("Juris")

**Juris** is an AI-powered legal research assistant designed to interact with the connector services through a defined set of tools.

#### Agent Capabilities (Tools)

- **`searchBnp`**: Searches the BNP for high-level precedents
- **`searchFalcao`**: Searches the Falcao database for labor law cases
- **`getDatajudProcess`**: Retrieves specific details for a given process number

#### Design Philosophy

The agent handlers in `src/agent/handlers.ts` are designed to return **human-readable text summaries** rather than raw JSON. This is a deliberate architectural choice because LLMs are more effective at synthesizing information from natural language summaries than from structured data. This simplifies the LLM's task and leads to higher-quality final answers.

#### Running the Agent

```bash
# Start the interactive agent
bun agent

# Example interactions
> What are the latest precedents on "adicional de periculosidade" from the TST?
> Find labor law decisions about "horas extras".
> Get details for process number 0722391-40.2017.8.07.0001.
```

### The MCP Server

The MCP server exposes the agent's tools over the Model Context Protocol, allowing integration with clients like Claude Desktop.

```bash
# Start the MCP server
bun start
```

The server will start and listen for requests on `stdio`.

---

## 10. Development & Contribution

All development must strictly adhere to the `CLAUDE.md` and `AGENTS.md` development guidelines.

### Key Scripts

- `bun typecheck`: Run TypeScript compiler checks
- `bun check`: Run Biome linter and formatter
- `bun check --write`: Automatically fix lint/format issues
- `bun test`: Run the full test suite using Vitest
- `bun test:coverage`: Run tests and generate a coverage report

### Development Workflow: Interface-First TDD

This project follows a strict **Interface-First, Contract-Driven Test-Driven Development (TDD)** methodology. All new features and bug fixes must follow this cycle:

#### Phase 1: Define the Contract

1. **Define Errors** (`errors.ts`): Create `Data.TaggedError` classes for all possible failures
2. **Define Schemas** (`schema.ts`): Create `@effect/schema` definitions for all data structures
3. **Define Service Interface** (`service.ts`): Create the `class MyService extends Effect.Service(...)` contract

#### Phase 2: Test the Contract (Red Phase)

1. **Write Contract Tests** (`service.test.ts`): Write tests against the *interface*, completely decoupled from any production implementation
2. **Use Test Doubles**: Use a live, in-memory test double (e.g., mocked `HttpClient` layer from `src/test/test-http-client.ts`)
3. **Test All Paths**: Write tests for the happy path and all specified error paths
4. **Failure Testing**: Failure tests **MUST** use `Effect.exit` to assert on the `Cause`
5. **Confirm Red**: Run `bunx vitest` and confirm that the new tests fail

#### Phase 3: Implement the Contract (Green Phase)

1. **Minimal Implementation**: Write the minimal production implementation in `service.impl.ts` to make tests pass
2. **Continuous Testing**: Run `bunx vitest` continuously until all tests are green

#### Phase 4: Refactor

With a full suite of passing tests, refactor the implementation for clarity, performance, and maintainability with confidence.

### Adding a New Connector

To add a new connector, follow the established **Interface-First TDD** pattern:

1. **Create Directory**: Create a new directory under `src/connectors/`
2. **Define Errors** (`errors.ts`): Create `Data.TaggedError` classes for all possible failures
3. **Define Schemas** (`schema.ts`): Create `@effect/schema` definitions for all API request and response bodies
4. **Define Interface** (`service.ts`): Create the `class MyService extends Effect.Service...` contract
5. **Write Tests** (`service.test.ts`): Write failing tests against the interface using a mock `HttpClient` layer
6. **Implement** (`service.impl.ts`): Write the live `Layer` implementation to make the tests pass
7. **Add Config** (`config.ts`): Define API constants like base URLs

### Mandatory Validation Steps

- **After every file edit**, run:
  ```bash
  bun check && bun typecheck
  ```
- **Before every commit**, run:
  ```bash
  bun test
  ```

---

## 11. Testing

This project uses **Vitest** with the **`@effect/vitest`** integration.

### Running Tests

```bash
# Run all tests
bunx vitest

# Run tests with coverage report
bunx vitest --coverage

# Run tests for a specific connector
bunx vitest src/connectors/bnp/service.test.ts
```

**IMPORTANT**: Do **NOT** use `bun test`. Always use `bunx vitest` to ensure the correct test runner and environment are used.

### Testing Philosophy

The project features a comprehensive, multi-layered testing strategy:

#### Unit Tests (`/domain`)

Test pure business logic, such as the `numero-processo` parser and validator.

#### Contract / Integration Tests (`/connectors`)

Each connector has a `*.test.ts` file that tests the `Service` contract. These tests use a **Test `Layer`** for the `HttpClient` (`src/test/test-http-client.ts`) to provide mock responses, completely isolating the service logic from the network.

#### Fixtures (`/test/fixtures.ts`)

All mock data is centralized and validated against the `@effect/schema` definitions, ensuring tests use realistic and type-safe data.

#### Core Testing Principles

- **Test Runner**: All tests are written using `it.effect` from `@effect/vitest`
- **Assertions**: Use `assert` from `vitest`, integrated with `@effect/vitest`'s matchers
- **Test Doubles**: We create fully-functional, in-memory `Layer` implementations of service interfaces. **We do not use traditional mocking libraries like `vi.mock`**
- **Failure Testing**: Expected failures are tested by wrapping the fallible operation in `Effect.exit` and asserting on the resulting `Exit` or `Cause` value

#### Example: Testing Error Paths

```typescript
import { Effect, Exit } from "effect";
import { assert, it } from "@effect/vitest";

it.effect("should fail with BnpApiError when API returns 500", () =>
  Effect.gen(function* () {
    const bnp = yield* BnpService;

    // Capture the Exit to test failure modes
    const exit = yield* Effect.exit(
      bnp.searchPrecedents({ buscaGeral: "test" })
    );

    assert(Exit.isFailure(exit));
    const cause = exit.cause;

    // Assert on the specific error tag
    assert(Cause.isFailType(cause));
    assert.equal(cause.error._tag, "BnpApiError");
  })
);
```

---

## 12. Troubleshooting

### Falcão API Rate Limiting

The Falcão API has aggressive rate limiting that is not well-documented.

**Symptoms:**
- Multiple, otherwise unrelated, examples or tests start failing with validation or HTTP errors
- Unexpected `FalcaoValidationError` or `FalcaoApiError` during local development

**Solution:**
- Wait 15-30 minutes before making more requests
- When running examples, consider commenting out some tests in `falcao-example.ts` to reduce sequential requests
- In production, implement request throttling or caching

### TypeScript Errors After Update

If you encounter TypeScript errors after pulling updates:

```bash
# Clean and reinstall dependencies
rm -rf node_modules bun.lockb
bun install

# Re-run type checking
bun typecheck
```

### Test Failures

If tests fail unexpectedly:

1. **Ensure correct test runner**: Always use `bunx vitest`, never `bun test`
2. **Check fixtures**: Verify that test fixtures in `src/test/fixtures.ts` are up-to-date with schema definitions
3. **Clear test cache**: Run `bunx vitest --clearCache`

### Agent Not Responding

If the AI agent is unresponsive:

1. **Verify API key**: Ensure `OPENAI_API_KEY` is set correctly in `.env`
2. **Check network**: Verify internet connectivity
3. **Review logs**: Check console output for error messages

---

## Error Handling Philosophy

This project treats errors as first-class citizens, a core tenet of Effect-TS.

### Failures (Typed Errors)

All predictable, domain-specific errors (e.g., `BnpApiError`, `DatajudValidationError`) are modeled as `Data.TaggedError` and tracked in the `E` channel of `Effect` types. This allows for compile-time exhaustive checking using `Effect.catchTag` or `Match.tags`.

```typescript
myEffect.pipe(
  Effect.catchTag("BnpApiError", (error) =>
    Effect.logWarning(`BNP API returned status ${error.status}, recovering...`)
  ),
  Effect.catchTag("BnpNetworkError", (error) =>
    Effect.logError(`Network failure: ${error.message}`)
  )
)
```

### Defects (Bugs)

Unexpected, unrecoverable errors (e.g., a `JSON.stringify` failure on a known-good type) should be escalated to defects using `Effect.die`. This signals a programming error and bypasses normal error handling, leading to a "fail-fast" behavior that is essential for production reliability.
