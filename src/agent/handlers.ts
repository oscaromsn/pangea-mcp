/**
 * AI Agent Tool Handlers - Implementation layer for legal research tools
 *
 * This module implements the actual logic for each AI tool by connecting them to
 * the existing connector services (BnpService, DatajudService, FalcaoService).
 *
 * Key design: Handlers format responses as human-readable text summaries, not raw JSON,
 * because LLMs process text more effectively and can synthesize better answers.
 */

import { Effect, Layer } from "effect";
import { BnpService, BnpServiceLive } from "../connectors/bnp/index";
import {
  DatajudService,
  DatajudServiceLive,
} from "../connectors/datajud/index";
import { FalcaoService, FalcaoServiceLive } from "../connectors/falcao/index";
import { LegalToolkit } from "./tools";

/**
 * Tool Handler Implementations Layer
 *
 * This layer implements the logic for each tool by:
 * 1. Consuming the required connector services via dependency injection
 * 2. Mapping simplified tool inputs to full connector schemas
 * 3. Executing API calls through the connectors
 * 4. Formatting results as concise text summaries (top 3 results)
 * 5. Catching all errors and returning formatted error strings
 */
export const LegalToolHandlersLive = LegalToolkit.toLayer(
  Effect.gen(function* () {
    // 1. Acquire connector services via dependency injection
    const bnp = yield* BnpService;
    const datajud = yield* DatajudService;
    const falcao = yield* FalcaoService;

    // 2. Return implementations for each tool
    return {
      /**
       * Implementation: Search BNP (National Legal Precedents)
       *
       * Searches the BNP database for high-level legal precedents and theses.
       * Returns a formatted summary of the top 3 results with key information.
       */
      searchBnp: ({ query }) =>
        Effect.gen(function* () {
          const result = yield* bnp
            .searchPrecedents({
              buscaGeral: query,
              pagina: 1, // Always use first page - LLM can ask for more results if needed
            })
            .pipe(
              Effect.map((response) => {
                // Format results as human-readable text
                if (response.resultados.length === 0) {
                  return `No precedents found for query: "${query}"`;
                }

                const summary = response.resultados
                  .slice(0, 3) // Take top 3 results
                  .map((precedent, idx) => {
                    const title = `${precedent.tipo} ${precedent.nr} from ${precedent.orgao}`;
                    const thesis = precedent.tese
                      ? precedent.tese.substring(0, 150)
                      : precedent.questao.substring(0, 150);
                    const status = precedent.situacao;

                    return `${idx + 1}. [${title}]\n   Thesis: ${thesis}...\n   Status: ${status}`;
                  })
                  .join("\n\n");

                return `Found ${response.total} precedents. Top 3:\n\n${summary}`;
              }),
              // Log structured error for debugging, return simple message to LLM
              Effect.catchAll((error) =>
                Effect.logError("BNP tool failed", error).pipe(
                  Effect.as(`Error searching BNP: ${error._tag}`)
                )
              )
            );

          return result;
        }),

      /**
       * Implementation: Search Falcao (Labor Law Jurisprudence)
       *
       * Searches the Falcao database for labor law decisions, sentences, and precedents.
       * Returns a formatted summary of the top 3 results with key information.
       */
      searchFalcao: ({ query }) =>
        Effect.gen(function* () {
          const result = yield* falcao
            .search({
              texto: query,
              colecao: "acordaos", // Default to court decisions
              size: 10, // API only allows 5 or 10
              page: 0, // Always use first page
            })
            .pipe(
              Effect.map((response) => {
                if (response.documentos.length === 0) {
                  return `No documents found in Falcao for query: "${query}"`;
                }

                const summary = response.documentos
                  .slice(0, 3)
                  .map((doc, idx) => {
                    // Handle both regular documents and precedente documents
                    if ("origemDocumentos" in doc) {
                      // Precedente document
                      const thesis = doc.tese
                        ? `Thesis: ${doc.tese.substring(0, 150)}...`
                        : "";
                      const question = doc.questao
                        ? `Question: ${doc.questao.substring(0, 150)}...`
                        : "";
                      const tribunal = `[${doc.tribunal} - ${doc.descricaoTribunal}]`;

                      return `${idx + 1}. Precedent ${tribunal}\n   ${question}\n   ${thesis}`;
                    }

                    // Regular court document
                    const processNumber =
                      "numeroProcesso" in doc && doc.numeroProcesso
                        ? `Process ${doc.numeroProcesso}`
                        : "Document";
                    const tribunal = `[${doc.tribunal}]`;
                    const ementa =
                      "ementa" in doc && doc.ementa
                        ? `\n   Summary: ${doc.ementa.substring(0, 150)}...`
                        : "";
                    const relator =
                      "relator" in doc && doc.relator
                        ? `\n   Judge: ${doc.relator}`
                        : "";

                    return `${idx + 1}. ${processNumber} ${tribunal}${ementa}${relator}`;
                  })
                  .join("\n\n");

                return `Found ${response.quantidadeTotal} documents. Top 3:\n\n${summary}`;
              }),
              // Log structured error for debugging, return simple message to LLM
              Effect.catchAll((error) =>
                Effect.logError("Falcao tool failed", error).pipe(
                  Effect.as(`Error searching Falcao: ${error._tag}`)
                )
              )
            );

          return result;
        }),

      /**
       * Implementation: Get Datajud Process Details
       *
       * Retrieves detailed metadata for a specific judicial process by its number.
       * Returns a formatted summary of the process information.
       */
      getDatajudProcess: ({ processNumber }) =>
        Effect.gen(function* () {
          const result = yield* datajud
            .searchProcessMetadata(processNumber)
            .pipe(
              Effect.map((response) => {
                const hit = response.hits.hits[0]?._source;
                if (!hit) {
                  return `Process number "${processNumber}" not found in Datajud.`;
                }

                // Format process details as human-readable text
                const details = [
                  `Process: ${hit.numeroProcesso}`,
                  `Tribunal: ${hit.tribunal}`,
                  hit.classe
                    ? `Class: ${hit.classe.nome} (${hit.classe.codigo})`
                    : "",
                  hit.orgaoJulgador
                    ? `Court: ${hit.orgaoJulgador.nome} (${hit.orgaoJulgador.codigo})`
                    : "",
                  hit.assuntos &&
                  Array.isArray(hit.assuntos) &&
                  hit.assuntos.length > 0
                    ? `Subjects: ${hit.assuntos.map((a) => a.nome).join(", ")}`
                    : "",
                  hit.dataAjuizamento
                    ? `Filing date: ${hit.dataAjuizamento}`
                    : "",
                ]
                  .filter((line) => line.length > 0)
                  .join("\n");

                return `Process Details:\n\n${details}`;
              }),
              // Log structured error for debugging, return simple message to LLM
              Effect.catchAll((error) =>
                Effect.logError("Datajud tool failed", error).pipe(
                  Effect.as(
                    `Error retrieving process from Datajud: ${error._tag}`
                  )
                )
              )
            );

          return result;
        }),
    };
  })
).pipe(
  // Provide connector service dependencies locally (Local Dependency Erasure pattern)
  Layer.provide(
    Layer.mergeAll(BnpServiceLive, DatajudServiceLive, FalcaoServiceLive)
  )
);
