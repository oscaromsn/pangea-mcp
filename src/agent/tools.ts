/**
 * AI Agent Tools - Tool definitions for legal research assistant
 *
 * This module defines the AI tools that the LLM can use to search Brazilian jurisprudence.
 * Each tool has a simplified, LLM-friendly schema for inputs and returns formatted text responses.
 */

import { Tool, Toolkit } from "@effect/ai";
import { Schema } from "effect";

/**
 * Simplified schema for general text search across BNP connector
 *
 * BNP (Banco Nacional de Precedentes) contains high-level, binding legal theses
 * from Brazilian courts. Best for broad legal questions and precedents.
 */
export const GeneralSearchInput = Schema.Struct({
  query: Schema.String.annotations({
    description: "The primary search term or legal question.",
  }),
  page: Schema.optional(Schema.Int.pipe(Schema.positive())).annotations({
    description: "The page number for pagination. Defaults to 1.",
  }),
});

export type GeneralSearchInput = Schema.Schema.Type<typeof GeneralSearchInput>;

/**
 * Simplified schema for Falcao-specific searches
 *
 * Falcao contains labor law jurisprudence including court decisions (acórdãos),
 * sentences (sentenças), and precedents. Best for specific labor law cases.
 */
export const FalcaoSearchInput = Schema.Struct({
  query: Schema.String.annotations({ description: "The search term." }),
  documentType: Schema.optional(
    Schema.Literal(
      "acordaos",
      "precedentes",
      "sentencas",
      "decisoesmonocraticas",
      "recursorevista",
      "precedentesBNP"
    )
  ).annotations({
    description:
      "The type of document to search for. E.g., 'acordaos' (court decisions), 'sentencas' (sentences), 'precedentes' (precedents).",
  }),
  tribunals: Schema.optional(Schema.Array(Schema.String)).annotations({
    description:
      "A list of tribunal codes to filter by, e.g., ['TST', 'TRT1']. TST is the highest labor court, TRT* are regional courts.",
  }),
  page: Schema.optional(Schema.Int.pipe(Schema.nonNegative())).annotations({
    description: "The page number for pagination. Defaults to 0.",
  }),
});

export type FalcaoSearchInput = Schema.Schema.Type<typeof FalcaoSearchInput>;

/**
 * Schema for searching a specific process number in Datajud
 *
 * Datajud contains metadata about judicial processes across Brazilian courts.
 * Use this when you have a specific process number and need case details.
 */
export const DatajudProcessSearchInput = Schema.Struct({
  processNumber: Schema.String.annotations({
    description:
      "A 20-digit or formatted (NNNNNNN-DD.AAAA.J.TR.OOOO) Brazilian process number.",
  }),
});

export type DatajudProcessSearchInput = Schema.Schema.Type<
  typeof DatajudProcessSearchInput
>;

/**
 * AI Tool: Search BNP (Banco Nacional de Precedentes)
 *
 * Searches for national legal precedents in the BNP database.
 * Returns a formatted text summary of the top results.
 */
export const SearchBnpTool = Tool.make("searchBnp", {
  description:
    "Search for national legal precedents (precedentes) in the BNP database. Best for high-level, binding legal theses and broad legal questions.",
  parameters: {
    query: Schema.String.annotations({
      description: "The primary search term or legal question.",
    }),
  },
  success: Schema.String, // We return a formatted summary string to the LLM
  failure: Schema.String, // Errors are also formatted as strings
});

/**
 * AI Tool: Search Falcao (Labor Law Jurisprudence)
 *
 * Searches for labor law jurisprudence including decisions, sentences, and precedents.
 * Returns a formatted text summary of the top results.
 */
export const SearchFalcaoTool = Tool.make("searchFalcao", {
  description:
    "Search for labor law jurisprudence (jurisprudência trabalhista), including court decisions (acórdãos), sentences (sentenças), and precedents. Best for specific labor law cases and detailed case law.",
  parameters: {
    query: Schema.String.annotations({ description: "The search term." }),
  },
  success: Schema.String,
  failure: Schema.String,
});

/**
 * AI Tool: Get Datajud Process Details
 *
 * Retrieves detailed metadata for a specific judicial process by its number.
 * Returns a formatted text summary of the process information.
 */
export const GetDatajudProcessTool = Tool.make("getDatajudProcess", {
  description:
    "Retrieve detailed metadata for a specific judicial process using its unique number. Use this when you have a complete process number and need case details like court, class, judge, etc.",
  parameters: {
    processNumber: Schema.String.annotations({
      description:
        "A 20-digit or formatted (NNNNNNN-DD.AAAA.J.TR.OOOO) Brazilian process number.",
    }),
  },
  success: Schema.String,
  failure: Schema.String,
});

/**
 * AI Tool: Get Full Falcao Document
 *
 * Retrieves full document details by tribunal and document ID.
 * Returns complete text content for deep analysis.
 */
export const GetFalcaoDocumentTool = Tool.make("getFalcaoDocument", {
  description:
    "Retrieve the full text of a specific labor law document by its tribunal and document ID. Use this after searching to get complete document details for deeper analysis.",
  parameters: {
    tribunal: Schema.String.annotations({
      description:
        "The tribunal code, e.g., 'TST' (Supreme Labor Court) or 'TRT1' through 'TRT24' (Regional Labor Courts).",
    }),
    documentId: Schema.String.annotations({
      description:
        "The unique document identifier returned from a previous search result.",
    }),
  },
  success: Schema.String,
  failure: Schema.String,
});

/**
 * AI Tool: Advanced Falcao Search
 *
 * Searches for labor law jurisprudence with advanced filtering options.
 * Allows filtering by document type, tribunals, dates, judge, and process number.
 */
export const SearchFalcaoAdvancedTool = Tool.make("searchFalcaoAdvanced", {
  description:
    "Advanced search for labor law jurisprudence with filtering options. Use when you need to filter by document type, specific tribunals, date ranges, or other criteria.",
  parameters: {
    query: Schema.String.annotations({
      description: "The search term or legal question.",
    }),
    documentType: Schema.optional(
      Schema.Literal(
        "acordaos",
        "precedentes",
        "sentencas",
        "decisoesmonocraticas",
        "recursorevista"
      )
    ).annotations({
      description:
        "Type of document: 'acordaos' (court decisions), 'sentencas' (sentences), 'precedentes' (precedents), 'decisoesmonocraticas' (monocratic decisions), 'recursorevista' (appeal decisions). Defaults to 'acordaos'.",
    }),
    tribunals: Schema.optional(Schema.String).annotations({
      description:
        "Comma-separated list of tribunal codes to filter by, e.g., 'TST,TRT1,TRT2'. TST is the Supreme Labor Court, TRT1-TRT24 are regional courts.",
    }),
    dateStart: Schema.optional(Schema.String).annotations({
      description: "Start date filter in DD/MM/YYYY format.",
    }),
    dateEnd: Schema.optional(Schema.String).annotations({
      description: "End date filter in DD/MM/YYYY format.",
    }),
    judgeReporter: Schema.optional(Schema.String).annotations({
      description: "Filter by reporting judge name (nomeRelator).",
    }),
    processNumber: Schema.optional(Schema.String).annotations({
      description: "Filter by specific process number.",
    }),
  },
  success: Schema.String,
  failure: Schema.String,
});

/**
 * AI Tool: Get Falcao Tribunals
 *
 * Lists all available tribunals in the Falcao labor law system.
 * Useful for discovering valid tribunal codes for filtering.
 */
export const GetFalcaoTribunalsTool = Tool.make("getFalcaoTribunals", {
  description:
    "List all available labor law tribunals (courts) in the Falcao system. Use this to discover valid tribunal codes before searching.",
  parameters: {},
  success: Schema.String,
  failure: Schema.String,
});

/**
 * AI Tool: Get Falcao Document Counts
 *
 * Gets document counts by type for a search query.
 * Helps determine which document collection to search.
 */
export const GetFalcaoDocumentCountsTool = Tool.make(
  "getFalcaoDocumentCounts",
  {
    description:
      "Get the count of documents by type (acordaos, sentencas, precedentes, etc.) for a search query. Use this to understand which document types have the most results before searching.",
    parameters: {
      query: Schema.String.annotations({
        description: "The search term to count documents for.",
      }),
      tribunals: Schema.optional(Schema.String).annotations({
        description:
          "Optional comma-separated list of tribunal codes to filter by.",
      }),
    },
    success: Schema.String,
    failure: Schema.String,
  }
);

/**
 * AI Tool: Falcao Autocomplete
 *
 * Gets search suggestions and related queries for a partial search text.
 */
export const GetFalcaoAutocompleteTool = Tool.make("getFalcaoAutocomplete", {
  description:
    "Get search suggestions and related queries for a partial search text. Use this to refine search terms or discover related legal concepts.",
  parameters: {
    text: Schema.String.annotations({
      description: "The partial search text to get suggestions for.",
    }),
  },
  success: Schema.String,
  failure: Schema.String,
});

/**
 * AI Tool: Advanced BNP Search
 *
 * Searches for national legal precedents with boolean operators and advanced filtering.
 */
export const SearchBnpAdvancedTool = Tool.make("searchBnpAdvanced", {
  description:
    "Advanced search for national legal precedents (BNP) with boolean operators (AND/OR/NOT) and filtering by courts and precedent types.",
  parameters: {
    query: Schema.String.annotations({
      description: "The primary search term or legal question.",
    }),
    allWords: Schema.optional(Schema.String).annotations({
      description:
        "Words that MUST ALL be present in results (AND operator). Separate words with spaces.",
    }),
    anyWords: Schema.optional(Schema.String).annotations({
      description:
        "At least one of these words must be present (OR operator). Separate words with spaces.",
    }),
    excludeWords: Schema.optional(Schema.String).annotations({
      description:
        "Words to EXCLUDE from results (NOT operator). Separate words with spaces.",
    }),
    exactPhrase: Schema.optional(Schema.String).annotations({
      description: "An exact phrase that must appear in results.",
    }),
    courts: Schema.optional(Schema.String).annotations({
      description:
        "Comma-separated list of court codes to filter by, e.g., 'STJ,STF,TST'. Required along with types for filtering.",
    }),
    types: Schema.optional(Schema.String).annotations({
      description:
        "Comma-separated list of precedent types to filter by, e.g., 'Súmula,Tese'. Required along with courts for filtering.",
    }),
    includeCancelled: Schema.optional(Schema.Boolean).annotations({
      description:
        "Whether to include cancelled/suspended precedents. Defaults to false.",
    }),
    sortBy: Schema.optional(
      Schema.Literal(
        "Textual",
        "Cronologica Ascendente",
        "Cronologica Descendente"
      )
    ).annotations({
      description:
        "Sort order: 'Textual' (relevance), 'Cronologica Ascendente' (oldest first), 'Cronologica Descendente' (newest first).",
    }),
  },
  success: Schema.String,
  failure: Schema.String,
});

/**
 * AI Tool: Advanced Datajud Search
 *
 * Searches for judicial process metadata with Elasticsearch-like filtering.
 */
export const SearchDatajudAdvancedTool = Tool.make("searchDatajudAdvanced", {
  description:
    "Advanced search for judicial process metadata in Datajud with filtering by tribunal, process class, court, and date range. Supports 90 Brazilian tribunals.",
  parameters: {
    tribunal: Schema.String.annotations({
      description:
        "Required tribunal alias, e.g., 'tjsp' (São Paulo), 'tst' (Labor), 'stj' (Superior Court), 'trf1'-'trf6' (Federal). Use lowercase.",
    }),
    processClass: Schema.optional(Schema.Number).annotations({
      description:
        "Process class code (classe.codigo) to filter by, e.g., 1116 for 'Mandado de Segurança'.",
    }),
    courtCode: Schema.optional(Schema.Number).annotations({
      description:
        "Judicial body code (orgaoJulgador.codigo) to filter by specific court.",
    }),
    dateFrom: Schema.optional(Schema.String).annotations({
      description:
        "Start date for filing date filter in ISO format (YYYY-MM-DD).",
    }),
    dateTo: Schema.optional(Schema.String).annotations({
      description:
        "End date for filing date filter in ISO format (YYYY-MM-DD).",
    }),
    size: Schema.optional(Schema.Number).annotations({
      description: "Number of results to return (1-100). Defaults to 10.",
    }),
  },
  success: Schema.String,
  failure: Schema.String,
});

/**
 * AI Tool: Parse Process Number
 *
 * Parses and validates Brazilian judicial process numbers.
 * Extracts components and infers tribunal.
 */
export const ParseProcessNumberTool = Tool.make("parseProcessNumber", {
  description:
    "Parse and validate a Brazilian judicial process number. Extracts components (year, court, origin) and infers the tribunal. Use this to understand process number structure or validate format.",
  parameters: {
    processNumber: Schema.String.annotations({
      description:
        "A Brazilian process number in any format: formatted (NNNNNNN-DD.AAAA.J.TR.OOOO) or unformatted (20 digits).",
    }),
  },
  success: Schema.String,
  failure: Schema.String,
});

/**
 * Legal Research Toolkit
 *
 * Combines all legal research tools into a single toolkit for the LLM.
 * The LLM can choose which tool to use based on the user's question.
 */
export class LegalToolkit extends Toolkit.make(
  // Basic tools
  SearchBnpTool,
  SearchFalcaoTool,
  GetDatajudProcessTool,
  // Falcao advanced tools
  GetFalcaoDocumentTool,
  SearchFalcaoAdvancedTool,
  GetFalcaoTribunalsTool,
  GetFalcaoDocumentCountsTool,
  GetFalcaoAutocompleteTool,
  // BNP advanced tools
  SearchBnpAdvancedTool,
  // Datajud advanced tools
  SearchDatajudAdvancedTool,
  // Utility tools
  ParseProcessNumberTool
) {}
