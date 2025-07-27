# CLAUDE.md - Pangea TypeScript MCP Server

This file provides guidance to Claude Code when working with the TypeScript implementation of the Pangea jurisprudence search MCP server.

## Project Overview

This is a modern TypeScript implementation of an MCP (Model Context Protocol) server that provides AI agents with access to Brazilian jurisprudence through the Pangea legal database. The server enables searching legal precedents, court decisions, and jurisprudence from all major Brazilian courts.

## Core Architecture

### Main Components

- **`src/index.ts`**: Entry point with error handling and server startup
- **`src/server.ts`**: Main MCP server implementation with 7 tools for legal search
- **`src/client.ts`**: HTTP client for Pangea API communication using native fetch
- **`src/session.ts`**: Session management for saved searches and result analysis
- **`types/index.ts`**: Complete TypeScript type definitions and Zod schemas

### Key Design Patterns

- **Type-First Development**: All API interactions are strictly typed with runtime validation
- **Bun-Native Execution**: Direct TypeScript execution without transpilation
- **Functional Architecture**: Pure functions with comprehensive error handling
- **Zod Validation**: Runtime type safety for all inputs and outputs
- **Modern Async Patterns**: Consistent use of async/await throughout

## Development Commands

### Essential Commands
```bash
# Development with hot reload
bun dev

# Run tests with Bun's native test runner
bun test

# Type checking (no emit, bun-native)
bun typecheck

# Code quality with Biome
bun lint
bun format

# Production server
bun start
```

### Testing
```bash
# Run all tests
bun test

# Run tests with coverage
bun test --coverage

# Run specific test file
bun test tests/client.test.ts

# Run tests in watch mode
bun test --watch
```

## Technology Stack

### Core Technologies
- **Runtime**: Bun (native TypeScript execution, no Node.js)
- **HTTP Client**: Native fetch API (no external dependencies)
- **Validation**: Zod for runtime type safety
- **Testing**: Bun's built-in test runner
- **Code Quality**: Biome for linting and formatting
- **MCP SDK**: Official TypeScript SDK

### Key Dependencies
- `@modelcontextprotocol/sdk`: MCP TypeScript SDK
- `zod`: Runtime type validation and schema definition
- `@biomejs/biome`: Fast linting and formatting

## Tools and Search Capabilities

The server provides 7 specialized tools with full TypeScript typing:

1. **`search_jurisprudence`**: General search with boolean operators and pagination
2. **`search_by_court`**: Filter by specific courts (STF, STJ, TRTs, etc.)
3. **`search_by_type`**: Filter by precedent types (Súmula, RG, IRDR, etc.)
4. **`get_available_courts`**: Returns hierarchical court structure
5. **`get_precedent_types`**: Returns all legal precedent type codes
6. **`save_search`**: Persist search results in session memory
7. **`analyze_results`**: Extract patterns and statistics from results

## Brazilian Legal Context

### Court Hierarchy (TypeScript Enums)
- **Supreme Courts**: STF, STJ, TST, STM
- **Federal Courts**: TRF01-06, TNU
- **State Courts**: TJSP, TJRJ, TJMG, etc. (all 27 states/DF)
- **Labor Courts**: TRT01-24 (regional labor tribunals)

### Precedent Types (Strongly Typed)
- **SUM**: Súmula (court precedent)
- **RG**: Repercussão Geral (general repercussion)
- **IRDR**: Incidente de Resolução de Demandas Repetitivas
- **SV**: Súmula Vinculante (binding precedent)

## Type Safety and Validation

### Zod Schemas
All API interactions use Zod schemas for:
- **Input validation**: Tool parameters and search criteria
- **Output validation**: API responses and result structures
- **Type inference**: Automatic TypeScript type generation
- **Runtime safety**: Comprehensive error handling

### Error Handling
- **`PangeaAPIError`**: HTTP and network errors with context
- **`ValidationError`**: Schema validation failures
- **Type Guards**: Comprehensive runtime type checking
- **Structured Errors**: Detailed error information for debugging

## Development Best Practices

### Code Organization
```typescript
// 1. Type definitions and schemas (from types/index.ts)
import { SearchParamsSchema, type SearchParams } from "@/types";

// 2. Pure utility functions
const validateSearchParams = (params: unknown): SearchParams => {
  return SearchParamsSchema.parse(params);
};

// 3. Class-based architecture with proper encapsulation
export class PangeaClient {
  private readonly baseUrl: string;
  // Implementation...
}
```

### Testing Strategy
- **Unit Tests**: Mock HTTP responses using Bun's spyOn
- **Integration Tests**: Full MCP server functionality validation
- **Type Tests**: Ensure all schemas and types work correctly
- **Error Scenarios**: Comprehensive error handling validation

## API Integration

### Pangea API Details
- **Base URL**: `https://pangeabnp.pdpj.jus.br/api/v1/precedentes`
- **Authentication**: None required (public database)
- **Rate Limiting**: No explicit limits, 30s timeout
- **Response Format**: JSON with comprehensive pagination metadata

### Request Patterns
All searches use POST with structured payload and proper headers for compatibility with the original site.

## Performance Characteristics

### Bun Optimizations
- **Fast Startup**: Near-instant server initialization
- **Native TypeScript**: Zero transpilation overhead
- **Efficient HTTP**: Native fetch implementation
- **Memory Efficient**: Optimized garbage collection

### Validation Performance
- **Zod Schemas**: Fast runtime validation
- **Type Inference**: Compile-time type checking
- **Minimal Overhead**: Efficient error handling

## Session Management

### In-Memory Storage
- **Saved Searches**: Map-based storage with timestamp tracking
- **Search History**: Circular buffer (max 100 entries)
- **Result Analysis**: Statistical computation on search results

### Analysis Features
- **Court Distribution**: Frequency analysis of court appearances
- **Type Distribution**: Precedent type frequency analysis
- **Year Distribution**: Timeline analysis of legal precedents
- **Status Analysis**: Active vs. cancelled precedent tracking

## Development Workflow

### Incremental Development
1. **Types First**: Define interfaces and schemas
2. **Implementation**: Build functionality with type safety
3. **Validation**: Add comprehensive error handling
4. **Testing**: Create thorough test coverage
5. **Documentation**: Update types and schemas

### Quality Assurance
- **Type Coverage**: 100% TypeScript, zero `any` types
- **Runtime Safety**: Comprehensive Zod validation
- **Error Handling**: Structured error types throughout
- **Performance**: Optimized for Bun runtime characteristics

---

*This implementation leverages modern TypeScript patterns and Bun's performance characteristics to provide a robust, type-safe legal research tool.*