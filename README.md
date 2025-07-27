# Pangea Jurisprudence Search MCP Server (TypeScript)

A modern TypeScript implementation of the Model Context Protocol (MCP) server that provides AI agents with access to Brazilian jurisprudence through the Pangea legal database. This server enables searching legal precedents, court decisions, and jurisprudence from all major Brazilian courts including STF, STJ, TST, and regional courts.

## Features

🏛️ **Comprehensive Court Coverage**: Search across all Brazilian courts (Supreme, Federal, State, and Labor courts)
🔍 **Advanced Search Options**: Boolean operators, exact phrases, and multiple filter combinations
📊 **Legal Precedent Types**: Support for Súmulas, Repercussão Geral, IRDR, and more
💾 **Session Management**: Save searches and analyze results within your session
🚀 **High Performance**: Fast API responses with pagination support using Bun runtime
📋 **Rich Metadata**: Court hierarchies and precedent type definitions built-in
🔒 **Type Safety**: Complete TypeScript implementation with runtime validation using Zod
⚡ **Modern Tooling**: Built with Bun, Biome, and native TypeScript execution

## Tools Available

1. **`search_jurisprudence`** - General search with boolean operators and pagination
2. **`search_by_court`** - Filter by specific courts (STF, STJ, TRTs, etc.)
3. **`search_by_type`** - Filter by precedent types (Súmula, RG, IRDR, etc.)
4. **`get_available_courts`** - Returns hierarchical court structure
5. **`get_precedent_types`** - Returns all legal precedent type codes
6. **`save_search`** - Persist search results in session memory
7. **`analyze_results`** - Extract patterns and statistics from results

## Prerequisites

- **Bun 1.0+** (required for native TypeScript execution)

### Install Bun

```bash
# On macOS/Linux
curl -fsSL https://bun.sh/install | bash

# On Windows
powershell -c "irm bun.sh/install.ps1 | iex"

# Restart your terminal after installation
```

## Installation

### Clone and Setup

```bash
git clone <repository-url>
cd pangea-typescript
bun install
```

### Test the Installation

```bash
# Run tests to verify everything works
bun test

# Test the server directly
bun src/index.ts

# Run type checking
bun typecheck

# Run linting and formatting
bun lint
bun format
```

## Usage

### Standalone Usage

```bash
# Run with stdio transport (default)
bun src/index.ts

# Run in development mode with hot reload
bun dev
```

### Using with Claude Desktop

1. **Install Claude Desktop** from [claude.ai/download](https://claude.ai/download)

2. **Open Configuration File**:
   ```bash
   # On macOS
   open ~/Library/Application\ Support/Claude/claude_desktop_config.json

   # On Windows
   notepad %APPDATA%\Claude\claude_desktop_config.json
   ```

3. **Add MCP Server Configuration**:
   ```json
   {
     "mcpServers": {
       "pangea-search-ts": {
         "command": "bun",
         "args": [
           "src/index.ts"
         ],
         "cwd": "/ABSOLUTE/PATH/TO/pangea-typescript"
       }
     }
   }
   ```

   **⚠️ Important**: Replace `/ABSOLUTE/PATH/TO/pangea-typescript` with the full path to your cloned repository.

4. **Restart Claude Desktop** completely (quit and reopen)

5. **Verify Setup**: Look for the 🔨 hammer icon in Claude Desktop indicating MCP tools are available

### Using with Claude Code

1. **Find your Claude Code config**:
   ```bash
   # Find config location (varies by OS)
   claude config show
   ```

2. **Add to your Claude Code configuration**:
   ```json
   {
     "mcpServers": {
       "pangea-mcp": {
         "command": "bun",
         "args": [
           "run"
           "/ABSOLUTE/PATH/TO/pangea-typescript/src/server.ts"
         ]
       }
     }
   }
   ```

3. **Verify with `/mcp` command** in Claude Code to see server status

## Development

### Project Structure

```
src/
├── index.ts        # Entry point
├── server.ts       # MCP server implementation with 7 tools
├── client.ts       # HTTP client for Pangea API using fetch
└── session.ts      # Session management for saved searches

types/
└── index.ts        # TypeScript types and Zod schemas

tests/
├── client.test.ts   # Client functionality tests
├── session.test.ts  # Session management tests
└── types.test.ts    # Type validation tests
```

### Development Commands

```bash
# Development with hot reload
bun dev

# Run tests
bun test

# Run tests with coverage
bun test --coverage

# Type checking (no emit)
bun typecheck

# Linting and formatting
bun lint
bun lint:fix
bun format

# Start production server
bun start
```

### Technology Stack

- **Runtime**: Bun (native TypeScript execution)
- **Testing**: Bun's built-in test runner
- **Code Quality**: Biome (linting + formatting)
- **Validation**: Zod (runtime type safety)
- **HTTP**: Native fetch API
- **MCP**: Official TypeScript SDK

## Brazilian Legal Context

### Court System Hierarchy

- **Supreme Courts**: STF (Federal Supreme), STJ (Superior Justice), TST (Superior Labor), STM (Superior Military)
- **Federal Courts**: TRF01-06 (Regional Federal Tribunals), TNU (National Uniformization)
- **State Courts**: TJ + state code (e.g., TJSP, TJRJ, TJMG) - all 27 states/DF
- **Labor Courts**: TRT01-24 (Regional Labor Tribunals)

### Precedent Types

- **SUM**: Súmula (court precedent)
- **SV**: Súmula Vinculante (binding precedent)
- **RG**: Repercussão Geral (general repercussion)
- **IRDR**: Incidente de Resolução de Demandas Repetitivas
- **IAC**: Incidente de Assunção de Competência
- **RR**: Recursos Repetitivos (repetitive appeals)

## Example Searches

```typescript
// Search for civil liability cases
search_jurisprudence({
  busca_geral: "responsabilidade civil",
  tamanho_pagina: 5
})

// Search Supreme Court precedents
search_by_court({
  busca_geral: "direitos fundamentais",
  orgaos: ["STF", "STJ"]
})

// Find binding precedents
search_by_type({
  busca_geral: "liberdade expressão",
  tipos: ["SV", "RG"]
})

// Get all available courts
get_available_courts()
```

## API Reference

The Pangea API is public and requires no authentication. All searches use POST requests to:
- **Base URL**: `https://pangeabnp.pdpj.jus.br/api/v1/precedentes`
- **Timeout**: 30 seconds
- **Rate Limiting**: None specified

## Error Handling

The TypeScript implementation includes comprehensive error handling:

- **`PangeaAPIError`**: HTTP and network errors from the API
- **`ValidationError`**: Schema validation errors using Zod
- **Type Safety**: All API interactions are strictly typed
- **Runtime Validation**: All inputs and outputs are validated at runtime

## Performance

Built for performance with modern tools:

- **Bun Runtime**: Faster startup and execution compared to Node.js
- **Native TypeScript**: No transpilation step required
- **Efficient HTTP**: Native fetch API with proper timeout handling
- **Type-safe**: Zero runtime type errors with comprehensive Zod schemas

## Troubleshooting

### Common Issues

1. **"Command not found: bun"**
   - Install Bun and restart your terminal
   - Verify installation: `bun --version`

2. **MCP Server Not Appearing**
   - Check absolute paths in configuration
   - Verify Bun can run the server: `bun src/index.ts`
   - Restart Claude Desktop/Code completely

3. **API Timeout Errors**
   - Network connectivity to `pangeabnp.pdpj.jus.br`
   - Check firewall settings

4. **TypeScript Errors**
   - Run `bun typecheck` to see detailed errors
   - Ensure all dependencies are installed: `bun install`

5. **No Search Results**
   - Pangea database may be temporarily unavailable
   - Try broader search terms
   - Check if specific court/type filters are too restrictive

### Debugging

```bash
# Test API connectivity directly
bun -e "
import { searchJurisprudence } from './src/client.ts';
console.log(await searchJurisprudence({ busca_geral: 'test' }));
"

# Run server with error details
DEBUG=1 bun src/index.ts

# Check types
bun typecheck
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make changes and test: `bun test`
4. Check types and format: `bun typecheck && bun format`
5. Commit and push: `git commit -am "Add feature"`
6. Create a Pull Request

## Comparison with Python Version

### Advantages of TypeScript Version

- **Type Safety**: Complete compile-time and runtime type checking
- **Performance**: Faster startup and execution with Bun runtime
- **Modern Tooling**: Biome for linting/formatting, native test runner
- **Better Error Handling**: Strongly typed errors with detailed context
- **Developer Experience**: Superior IDE support and autocompletion

### Migration Notes

The TypeScript version maintains full API compatibility with the Python version while adding:

- Strict type definitions for all API interactions
- Runtime validation using Zod schemas
- Enhanced error handling with typed exceptions
- Modern async/await patterns throughout
- Comprehensive test coverage with built-in test runner

## License

MIT License - see LICENSE file for details.

## Legal Notice

This tool is for research and educational purposes. Users are responsible for compliance with applicable laws and regulations when accessing legal databases.

---

*Built with ⚡ and TypeScript for the Brazilian legal community*
