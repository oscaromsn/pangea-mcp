import {
  AnalyzeResultsToolSchema,
  COURT_CODES,
  CourtSearchToolSchema,
  GeneralSearchToolSchema,
  PRECEDENT_TYPES,
  SaveSearchToolSchema,
  type SearchResponse,
  TypeSearchToolSchema,
} from "@/types";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { pangeaClient } from "./client";
import { formatErrorResponse, formatSearchResponse } from "./formatters";
import { sessionManager } from "./session";

/**
 * Main MCP server for Pangea jurisprudence search
 */
export class PangeaServer {
  private server: Server;

  constructor() {
    this.server = new Server(
      {
        name: "pangea-jurisprudence",
        version: "1.0.0",
      },
      {
        capabilities: {
          resources: {},
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
    this.setupResourceHandlers();
  }

  /**
   * Setup tool handlers for the MCP server
   */
  private setupToolHandlers(): void {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: "search_jurisprudence",
            description:
              "Search Brazilian legal precedents and court decisions using flexible text queries and boolean operators. Use this for comprehensive jurisprudence research when you need to explore legal topics broadly. Supports complex boolean combinations for precise searches.",
            inputSchema: {
              type: "object",
              examples: [
                {
                  busca_geral: "responsabilidade civil médico",
                  pagina: 1,
                  tamanho_pagina: 20,
                },
                {
                  todas_palavras: "dano moral",
                  quaisquer_palavras: "consumidor paciente",
                  sem_palavras: "criminal",
                  pagina: 1,
                },
                {
                  trecho_exato: "responsabilidade objetiva do estado",
                  todas_palavras: "ambiental",
                },
              ],
              properties: {
                busca_geral: {
                  type: "string",
                  description:
                    "Primary search query - searches across all text fields including case summaries (ementa), legal thesis (tese), and full text. Supports boolean operators and will match partial words.",
                },
                todas_palavras: {
                  type: "string",
                  description:
                    "AND operator - all words listed here must appear in the results (space-separated). Example: 'dano moral consumidor' finds cases containing ALL three terms.",
                },
                quaisquer_palavras: {
                  type: "string",
                  description:
                    "OR operator - results must contain at least one of these words (space-separated). Example: 'trabalhista celetista estatutário' finds cases with ANY of these terms.",
                },
                sem_palavras: {
                  type: "string",
                  description:
                    "NOT operator - excludes results containing any of these words (space-separated). Example: 'criminal penal' excludes criminal law cases from results.",
                },
                trecho_exato: {
                  type: "string",
                  description:
                    "Exact phrase match - finds this exact sequence of words in order. Example: 'responsabilidade objetiva do estado' finds this exact legal phrase.",
                },
                pagina: {
                  type: "integer",
                  description:
                    "Page number for results pagination. Default is 1. Use this to navigate through large result sets.",
                  default: 1,
                },
                tamanho_pagina: {
                  type: "integer",
                  description:
                    "Number of results per page (1-100). Default is 10. Increase for bulk analysis, decrease for detailed review.",
                  default: 10,
                },
              },
            },
          },
          {
            name: "search_by_court",
            description:
              "Find legal precedents from specific Brazilian courts (e.g., Supreme Courts like STF/STJ, Federal Courts like TRF, State Courts like TJSP, or Labor Courts like TRT). Use when you need decisions from particular judicial authorities or jurisdictions. Returns only results from the specified courts.",
            inputSchema: {
              type: "object",
              examples: [
                {
                  busca_geral: "direito consumidor",
                  orgaos: ["STJ", "STF"],
                },
                {
                  busca_geral: "horas extras",
                  orgaos: ["TST", "TRT02", "TRT15"],
                },
                {
                  busca_geral: "ICMS guerra fiscal",
                  orgaos: ["STF"],
                  tamanho_pagina: 50,
                },
              ],
              properties: {
                busca_geral: {
                  type: "string",
                  description:
                    "Search query to find within the selected courts. Can be keywords, legal concepts, or case references.",
                },
                orgaos: {
                  type: "array",
                  items: { type: "string" },
                  description:
                    "Array of court codes to search. Examples: ['STF', 'STJ'] for supreme courts, ['TJSP', 'TJRJ'] for state courts, ['TRT02'] for São Paulo labor court. Use get_available_courts to see all codes.",
                },
                pagina: {
                  type: "integer",
                  default: 1,
                },
                tamanho_pagina: {
                  type: "integer",
                  default: 10,
                },
              },
              required: ["busca_geral", "orgaos"],
            },
          },
          {
            name: "search_by_type",
            description:
              "Search for specific types of binding legal precedents (Súmulas, Repercussão Geral, IRDR, etc.). Use when researching established legal principles, binding precedents, or standardized court positions. Different types have different binding force and applicability.",
            inputSchema: {
              type: "object",
              examples: [
                {
                  busca_geral: "prazo prescrição",
                  tipos: ["SUM", "SV"],
                },
                {
                  busca_geral: "repercussão geral tributário",
                  tipos: ["RG"],
                },
                {
                  busca_geral: "plano saúde",
                  tipos: ["IRDR", "IAC", "RR"],
                },
              ],
              properties: {
                busca_geral: {
                  type: "string",
                  description:
                    "Search query to find within the selected precedent types. Focus on legal concepts or specific issues.",
                },
                tipos: {
                  type: "array",
                  items: { type: "string" },
                  description:
                    "Array of precedent type codes. Examples: ['SUM'] for Súmulas, ['RG'] for Repercussão Geral, ['SV'] for binding Súmulas Vinculantes. Use get_precedent_types to see all codes with explanations.",
                },
                pagina: {
                  type: "integer",
                  default: 1,
                },
                tamanho_pagina: {
                  type: "integer",
                  default: 10,
                },
              },
              required: ["busca_geral", "tipos"],
            },
          },
          {
            name: "get_available_courts",
            description:
              "Discover all Brazilian courts organized by hierarchy (Supreme, Federal, State, Labor). Returns court codes with full names and jurisdictions. Essential for understanding which courts to search. No parameters required.",
            inputSchema: {
              type: "object",
              properties: {},
            },
          },
          {
            name: "get_precedent_types",
            description:
              "List all types of legal precedents in the Brazilian system with their codes and meanings (e.g., SUM=Súmula, RG=Repercussão Geral). Essential reference for understanding precedent hierarchy and binding force. No parameters required.",
            inputSchema: {
              type: "object",
              properties: {},
            },
          },
          {
            name: "save_search",
            description:
              "Preserve important search results and parameters for future reference during your research session. Useful for complex research involving multiple queries, comparing different searches, or building comprehensive legal arguments. Saved searches can be retrieved as resources.",
            inputSchema: {
              type: "object",
              examples: [
                {
                  name: "consumer_rights_stj_2024",
                  search_params: {
                    busca_geral: "direito consumidor",
                    orgaos: ["STJ"],
                    pagina: 1,
                  },
                  results: {},
                },
              ],
              properties: {
                name: {
                  type: "string",
                  description:
                    "Descriptive name for this search (e.g., 'environmental_liability_stf_2023'). Will be used to retrieve results later.",
                },
                search_params: {
                  type: "object",
                  description:
                    "The exact search parameters used to generate these results. Include all filters and query terms for reproducibility.",
                },
                results: {
                  type: "object",
                  description:
                    "The complete search response object including all precedents and metadata. This preserves the full context of the search.",
                },
              },
              required: ["name", "search_params", "results"],
            },
          },
          {
            name: "analyze_results",
            description:
              "Generate statistical analysis of search results including court distribution, precedent types breakdown, temporal patterns, and legal status (active/cancelled). Helps identify jurisprudential trends, dominant positions, and research gaps. Requires the complete results object from a search.",
            inputSchema: {
              type: "object",
              examples: [
                {
                  results: {
                    total: 156,
                    resultados: [],
                  },
                },
              ],
              properties: {
                results: {
                  type: "object",
                  description:
                    "Complete search results object from any search tool. Must include the 'resultados' array for meaningful analysis.",
                },
              },
              required: ["results"],
            },
          },
        ],
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case "search_jurisprudence":
            return await this.handleGeneralSearch(args);
          case "search_by_court":
            return await this.handleCourtSearch(args);
          case "search_by_type":
            return await this.handleTypeSearch(args);
          case "get_available_courts":
            return this.handleGetAvailableCourts();
          case "get_precedent_types":
            return this.handleGetPrecedentTypes();
          case "save_search":
            return this.handleSaveSearch(args);
          case "analyze_results":
            return this.handleAnalyzeResults(args);
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        const errorResponse = formatErrorResponse(
          error instanceof Error ? error : new Error("Unknown error occurred"),
          { tool: name, arguments: args }
        );

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(errorResponse, null, 2),
            },
          ],
        };
      }
    });
  }

  /**
   * Setup resource handlers for saved searches and help
   */
  private setupResourceHandlers(): void {
    this.server.setRequestHandler(ListResourcesRequestSchema, async () => {
      const resources = [];

      // Add saved searches as resources
      const savedSearches = sessionManager.getAllSavedSearches();
      for (const [name, data] of savedSearches) {
        resources.push({
          uri: `pangea://saved-search/${name}`,
          name: `Saved Search: ${name}`,
          description: `Saved search from ${data.timestamp}`,
          mimeType: "application/json",
        });
      }

      // Add search history resource
      const history = sessionManager.getSearchHistory();
      if (history.length > 0) {
        resources.push({
          uri: "pangea://search-history",
          name: "Search History",
          description: `History of ${history.length} searches performed`,
          mimeType: "application/json",
        });
      }

      // Add help resource
      resources.push({
        uri: "pangea://help",
        name: "Pangea Search Help",
        description: "Guide for using the Pangea jurisprudence search tools",
        mimeType: "text/markdown",
      });

      return { resources };
    });

    this.server.setRequestHandler(
      ReadResourceRequestSchema,
      async (request) => {
        const { uri } = request.params;

        if (uri.startsWith("pangea://saved-search/")) {
          const name = uri.replace("pangea://saved-search/", "");
          const savedSearch = sessionManager.getSavedSearch(name);
          if (savedSearch) {
            return {
              contents: [
                {
                  uri,
                  mimeType: "application/json",
                  text: JSON.stringify(savedSearch, null, 2),
                },
              ],
            };
          }
          throw new Error(`Saved search '${name}' not found`);
        }

        if (uri === "pangea://search-history") {
          const history = sessionManager.getSearchHistory();
          return {
            contents: [
              {
                uri,
                mimeType: "application/json",
                text: JSON.stringify(history, null, 2),
              },
            ],
          };
        }

        if (uri === "pangea://help") {
          return {
            contents: [
              {
                uri,
                mimeType: "text/markdown",
                text: this.getHelpText(),
              },
            ],
          };
        }

        throw new Error(`Unknown resource: ${uri}`);
      }
    );
  }

  /**
   * Handle general jurisprudence search
   */
  private async handleGeneralSearch(args: unknown) {
    const validatedArgs = GeneralSearchToolSchema.parse(args);

    const result = await pangeaClient.searchJurisprudence({
      busca_geral: validatedArgs.busca_geral,
      todas_palavras: validatedArgs.todas_palavras,
      quaisquer_palavras: validatedArgs.quaisquer_palavras,
      sem_palavras: validatedArgs.sem_palavras,
      trecho_exato: validatedArgs.trecho_exato,
      pagina: validatedArgs.pagina,
      tamanho_pagina: validatedArgs.tamanho_pagina,
    });

    // Add to search history
    sessionManager.addToHistory(validatedArgs, result.total);

    // Format response using the new formatter
    const formattedResponse = formatSearchResponse(
      result,
      validatedArgs,
      validatedArgs.pagina,
      validatedArgs.tamanho_pagina
    );

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(formattedResponse, null, 2),
        },
      ],
    };
  }

  /**
   * Handle court-filtered search
   */
  private async handleCourtSearch(args: unknown) {
    const validatedArgs = CourtSearchToolSchema.parse(args);

    const result = await pangeaClient.searchJurisprudence({
      busca_geral: validatedArgs.busca_geral,
      orgaos: validatedArgs.orgaos,
      pagina: validatedArgs.pagina,
      tamanho_pagina: validatedArgs.tamanho_pagina,
    });

    // Format response with court filter info
    const formattedResponse = formatSearchResponse(
      result,
      validatedArgs,
      validatedArgs.pagina,
      validatedArgs.tamanho_pagina
    );

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(formattedResponse, null, 2),
        },
      ],
    };
  }

  /**
   * Handle type-filtered search
   */
  private async handleTypeSearch(args: unknown) {
    const validatedArgs = TypeSearchToolSchema.parse(args);

    const result = await pangeaClient.searchJurisprudence({
      busca_geral: validatedArgs.busca_geral,
      tipos: validatedArgs.tipos,
      pagina: validatedArgs.pagina,
      tamanho_pagina: validatedArgs.tamanho_pagina,
    });

    // Format response with type filter info
    const formattedResponse = formatSearchResponse(
      result,
      validatedArgs,
      validatedArgs.pagina,
      validatedArgs.tamanho_pagina
    );

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(formattedResponse, null, 2),
        },
      ],
    };
  }

  /**
   * Handle get available courts
   */
  private handleGetAvailableCourts() {
    const formattedCourts = {
      description:
        "Brazilian court system hierarchy with codes for filtering searches",
      total_courts: Object.values(COURT_CODES).reduce(
        (acc, category) => acc + Object.keys(category).length,
        0
      ),
      categories: COURT_CODES,
      usage_hint:
        "Use these codes in the 'orgaos' parameter of search_by_court tool",
      examples: {
        supreme_courts: ["STF", "STJ"],
        state_courts: ["TJSP", "TJRJ"],
        labor_courts: ["TRT02"],
      },
    };

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(formattedCourts, null, 2),
        },
      ],
    };
  }

  /**
   * Handle get precedent types
   */
  private handleGetPrecedentTypes() {
    const formattedTypes = {
      description: "Types of legal precedents in the Brazilian judicial system",
      total_types: Object.keys(PRECEDENT_TYPES).length,
      precedent_types: PRECEDENT_TYPES,
      binding_force_guide: {
        high_binding: [
          "SV (Súmula Vinculante)",
          "RG (Repercussão Geral)",
          "IAC",
          "IRDR",
          "RR",
        ],
        medium_binding: ["SUM (Súmula)", "SIRDR", "CT"],
        low_binding: ["OJ (Orientação Jurisprudencial)", "PUIL"],
      },
      usage_hint:
        "Use these codes in the 'tipos' parameter of search_by_type tool",
      examples: {
        binding_precedents: ["SV", "RG"],
        court_summaries: ["SUM"],
        procedural_incidents: ["IRDR", "IAC"],
      },
    };

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(formattedTypes, null, 2),
        },
      ],
    };
  }

  /**
   * Handle save search
   */
  private handleSaveSearch(args: unknown) {
    const validatedArgs = SaveSearchToolSchema.parse(args);

    sessionManager.saveSearch(
      validatedArgs.name,
      validatedArgs.search_params,
      validatedArgs.results
    );

    return {
      content: [
        {
          type: "text",
          text: `Search '${validatedArgs.name}' saved successfully`,
        },
      ],
    };
  }

  /**
   * Handle analyze results
   */
  private handleAnalyzeResults(args: unknown) {
    const validatedArgs = AnalyzeResultsToolSchema.parse(args);

    try {
      const analysis = sessionManager.analyzeResults(
        validatedArgs.results as SearchResponse
      );

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(analysis, null, 2),
          },
        ],
      };
    } catch {
      return {
        content: [
          {
            type: "text",
            text: "No valid results to analyze",
          },
        ],
      };
    }
  }

  /**
   * Get help text for the Pangea search tools
   */
  private getHelpText(): string {
    return `# Pangea Jurisprudence Search Guide

## Overview
The Pangea MCP server provides access to Brazilian jurisprudence (legal precedents) through various search tools.

## Available Tools

### 1. search_jurisprudence
General-purpose search with multiple filter options:
- \`busca_geral\`: General search term
- \`todas_palavras\`: All words must be present
- \`quaisquer_palavras\`: Any of these words
- \`sem_palavras\`: Exclude these words
- \`trecho_exato\`: Exact phrase match
- \`pagina\`: Page number (default: 1)
- \`tamanho_pagina\`: Results per page (default: 10)

### 2. search_by_court
Search filtered by specific courts:
- \`busca_geral\`: Search term (required)
- \`orgaos\`: Array of court codes (required)
- Example: \`["STF", "STJ"]\` for Supreme Courts

### 3. search_by_type
Search filtered by precedent types:
- \`busca_geral\`: Search term (required)
- \`tipos\`: Array of type codes (required)
- Example: \`["SUM", "RG"]\` for Súmulas and Repercussão Geral

### 4. get_available_courts
Returns list of all court codes organized by category

### 5. get_precedent_types
Returns list of all precedent type codes with descriptions

### 6. save_search
Save search results for later reference

### 7. analyze_results
Analyze search results to extract insights and statistics

## Tips
- Use specific terms for better results
- Combine filters for precise searches
- Save important searches for reference
- Analyze results to identify patterns
`;
  }

  /**
   * Start the server
   */
  async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
  }
}

/**
 * CLI entry point
 */
export async function main(): Promise<void> {
  const server = new PangeaServer();
  await server.run();
}
