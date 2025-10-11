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
 * Legal Research Toolkit
 *
 * Combines all legal research tools into a single toolkit for the LLM.
 * The LLM can choose which tool to use based on the user's question.
 */
export class LegalToolkit extends Toolkit.make(
  SearchBnpTool,
  SearchFalcaoTool,
  GetDatajudProcessTool
) {}
