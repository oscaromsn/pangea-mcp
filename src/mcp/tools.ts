/**
 * MCP Tool Definitions - Toolkit Implementation
 *
 * Defines tools using the Toolkit.make pattern for the Pangea MCP server.
 * These tools provide access to Brazilian legal precedent search functionality.
 */

import { Tool, Toolkit } from "@effect/ai";
import { Schema } from "effect";

/**
 * Pangea Legal Research Toolkit
 *
 * Provides tools for searching Brazilian legal precedents via the Pangea database.
 */
export class PangeaToolkit extends Toolkit.make(
  Tool.make("search_jurisprudence", {
    description:
      "Search Brazilian legal precedents using flexible text queries and boolean operators",
    success: Schema.String,
    failure: Schema.Never,
    parameters: {
      busca_geral: Schema.optional(Schema.String).annotations({
        description: "Primary search query across all fields",
      }),
      todas_palavras: Schema.optional(Schema.String).annotations({
        description: "AND operator - all words must be present",
      }),
      quaisquer_palavras: Schema.optional(Schema.String).annotations({
        description: "OR operator - at least one word must be present",
      }),
      sem_palavras: Schema.optional(Schema.String).annotations({
        description: "NOT operator - exclude these words",
      }),
      trecho_exato: Schema.optional(Schema.String).annotations({
        description: "Exact phrase match",
      }),
      pagina: Schema.optional(Schema.Int.pipe(Schema.positive())).annotations({
        description: "Page number (default: 1)",
      }),
      tamanho_pagina: Schema.optional(
        Schema.Int.pipe(Schema.positive(), Schema.lessThanOrEqualTo(100))
      ).annotations({
        description: "Results per page (1-100, default: 10)",
      }),
    },
  }),
  Tool.make("search_by_court", {
    description: "Search precedents from specific courts (STF, STJ, etc.)",
    success: Schema.String,
    failure: Schema.Never,
    parameters: {
      busca_geral: Schema.String.annotations({
        description: "Search query",
      }),
      orgaos: Schema.Array(Schema.String).annotations({
        description: "Array of court codes",
      }),
      pagina: Schema.optional(Schema.Int.pipe(Schema.positive())).annotations({
        description: "Page number (default: 1)",
      }),
      tamanho_pagina: Schema.optional(
        Schema.Int.pipe(Schema.positive(), Schema.lessThanOrEqualTo(100))
      ).annotations({
        description: "Results per page (default: 10)",
      }),
    },
  }),
  Tool.make("search_by_type", {
    description: "Search specific types of precedents (Súmulas, RG, etc.)",
    success: Schema.String,
    failure: Schema.Never,
    parameters: {
      busca_geral: Schema.String.annotations({
        description: "Search query",
      }),
      tipos: Schema.Array(Schema.String).annotations({
        description: "Array of precedent type codes",
      }),
      pagina: Schema.optional(Schema.Int.pipe(Schema.positive())).annotations({
        description: "Page number (default: 1)",
      }),
      tamanho_pagina: Schema.optional(
        Schema.Int.pipe(Schema.positive(), Schema.lessThanOrEqualTo(100))
      ).annotations({
        description: "Results per page (default: 10)",
      }),
    },
  }),
  Tool.make("get_available_courts", {
    description: "Get all Brazilian court codes organized by hierarchy",
    success: Schema.String,
    failure: Schema.Never,
    parameters: {},
  }),
  Tool.make("get_precedent_types", {
    description: "Get all precedent type codes with descriptions",
    success: Schema.String,
    failure: Schema.Never,
    parameters: {},
  }),
  Tool.make("save_search", {
    description: "Save search results for future reference",
    success: Schema.String,
    failure: Schema.Never,
    parameters: {
      name: Schema.String.annotations({
        description: "Descriptive name for the search",
      }),
      search_params: Schema.Unknown.annotations({
        description: "Search parameters used",
      }),
      results: Schema.Unknown.annotations({
        description: "Complete search results",
      }),
    },
  }),
  Tool.make("analyze_results", {
    description:
      "Generate statistical analysis including court distribution and patterns",
    success: Schema.String,
    failure: Schema.Never,
    parameters: {
      results: Schema.Unknown.annotations({
        description: "Complete search results to analyze",
      }),
    },
  })
) {}
