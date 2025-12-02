/**
 * AI Agent Tool Handlers - Implementation layer for legal research tools
 *
 * This module implements the actual logic for each AI tool by delegating to
 * the LegalResearchService, which centralizes business logic shared with MCP handlers.
 *
 * Key design: Handlers format responses as human-readable text summaries, not raw JSON,
 * because LLMs process text more effectively and can synthesize better answers.
 *
 * Architecture:
 * - LegalResearchService: Business logic (API calls, data transformation)
 * - Agent Handlers: Output formatting (text summaries for LLM consumption)
 */

import { Effect, Layer } from "effect";
import { LegalResearchService } from "../usecases/legal-research";
import { LegalToolkit } from "./tools";

// =============================================================================
// FORMATTING HELPER FUNCTIONS
// Extracted to reduce cognitive complexity in handlers
// =============================================================================

/**
 * Helper: Truncate text with ellipsis if needed
 */
const truncate = (
  text: string | null | undefined,
  maxLength: number
): string =>
  text
    ? text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text
    : "";

/**
 * Helper: Format a Falcao document for display
 * Extracts metadata and content from a document response
 */
const formatFalcaoDocumentDetails = (doc: {
  readonly tribunal: string;
  readonly numeroProcesso?: string | undefined;
  readonly relator?: string | undefined;
  readonly dataJulgamento?: string | undefined;
  readonly dataPublicacao?: string | undefined;
  readonly classeProcesso?: string | undefined;
  readonly orgaoJulgador?: string | null | undefined;
  readonly ementa?: string | undefined;
  readonly decisao?: string | undefined;
  readonly textoAcordao?: string | undefined;
  readonly conteudoCompleto?: string | undefined;
}): string => {
  const metadata = [
    `Document from ${doc.tribunal}`,
    doc.numeroProcesso ? `Process: ${doc.numeroProcesso}` : "",
    doc.relator ? `Judge (Relator): ${doc.relator}` : "",
    doc.dataJulgamento ? `Judgment Date: ${doc.dataJulgamento}` : "",
    doc.dataPublicacao ? `Publication Date: ${doc.dataPublicacao}` : "",
    doc.classeProcesso ? `Class: ${doc.classeProcesso}` : "",
    doc.orgaoJulgador ? `Court: ${doc.orgaoJulgador}` : "",
  ].filter(Boolean);

  const content = [
    doc.ementa ? `SUMMARY (Ementa):\n${doc.ementa}` : "",
    doc.decisao ? `DECISION:\n${doc.decisao}` : "",
    formatDocumentText(doc.textoAcordao, doc.conteudoCompleto),
  ].filter(Boolean);

  return [...metadata, "", ...content]
    .filter((line) => line.length > 0)
    .join("\n");
};

/**
 * Helper: Format document text content with truncation
 */
const formatDocumentText = (
  textoAcordao?: string,
  conteudoCompleto?: string
): string => {
  if (textoAcordao) {
    const truncated = textoAcordao.length > 2000;
    return `FULL TEXT:\n${textoAcordao.substring(0, 2000)}${truncated ? "... [truncated]" : ""}`;
  }
  if (conteudoCompleto) {
    const truncated = conteudoCompleto.length > 2000;
    return `CONTENT:\n${conteudoCompleto.substring(0, 2000)}${truncated ? "... [truncated]" : ""}`;
  }
  return "";
};

/**
 * Helper: Format a precedente (TemaTopFive) document
 */
const formatPrecedenteResult = (
  doc: { tribunal: string; questao?: string | null; tese?: string | null },
  idx: number
): string => {
  const question = doc.questao ? `Question: ${truncate(doc.questao, 150)}` : "";
  const thesis = doc.tese ? `Thesis: ${truncate(doc.tese, 150)}` : "";
  return `${idx + 1}. Precedent [${doc.tribunal}]\n   ${question}\n   ${thesis}`;
};

/**
 * Helper: Format a regular Falcao search result (acordao, sentenca, etc.)
 */
const formatRegularResult = (
  doc: {
    tribunal: string;
    id?: string | number;
    numeroProcesso?: string;
    ementa?: string;
    relator?: string;
  },
  idx: number
): string => {
  const docId = doc.id ? ` (ID: ${doc.id})` : "";
  const processNum = doc.numeroProcesso
    ? `Process ${doc.numeroProcesso}`
    : "Document";
  const ementa = doc.ementa ? `\n   Summary: ${truncate(doc.ementa, 200)}` : "";
  const relator = doc.relator ? `\n   Judge: ${doc.relator}` : "";
  return `${idx + 1}. ${processNum} [${doc.tribunal}]${docId}${ementa}${relator}`;
};

/**
 * Helper: Format a Falcao search result (handles both precedente and regular docs)
 * Uses explicit type guards since the union type from Falcao API is complex
 */
const formatFalcaoSearchResult = (doc: unknown, idx: number): string => {
  const d = doc as { tribunal: string; [key: string]: unknown };
  // Check if it's a precedente document (has origemDocumentos field)
  if ("origemDocumentos" in d) {
    return formatPrecedenteResult(
      d as { tribunal: string; questao?: string | null; tese?: string | null },
      idx
    );
  }
  // Regular document (acordao, sentenca, etc.)
  return formatRegularResult(
    d as {
      tribunal: string;
      id?: string | number;
      numeroProcesso?: string;
      ementa?: string;
      relator?: string;
    },
    idx
  );
};

// =============================================================================
// HANDLER LAYER IMPLEMENTATION
// =============================================================================

/**
 * Tool Handler Implementations Layer
 *
 * This layer implements the logic for each tool by:
 * 1. Consuming LegalResearchService via dependency injection
 * 2. Calling service methods for business logic execution
 * 3. Formatting results as concise text summaries (top 3 results)
 * 4. Catching all errors and returning formatted error strings
 */
export const LegalToolHandlersLive = LegalToolkit.toLayer(
  Effect.gen(function* () {
    // 1. Acquire LegalResearchService via dependency injection
    const legalResearch = yield* LegalResearchService;

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
          const result = yield* legalResearch
            .searchBnp({ query, page: 1 })
            .pipe(
              Effect.map((response) => {
                // Format results as human-readable text
                if (response.results.length === 0) {
                  return `No precedents found for query: "${query}"`;
                }

                const summary = response.results
                  .slice(0, 3) // Take top 3 results
                  .map((precedent, idx) => {
                    const title = `${precedent.tipo} ${precedent.nr} from ${precedent.orgao}`;
                    const thesis = precedent.tese
                      ? precedent.tese.substring(0, 150)
                      : (precedent.questao?.substring(0, 150) ?? "N/A");
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
        }).pipe(Effect.withSpan("Agent.searchBnp", { attributes: { query } })),

      /**
       * Implementation: Search Falcao (Labor Law Jurisprudence)
       *
       * Searches the Falcao database for labor law decisions, sentences, and precedents.
       * Returns a formatted summary of the top 3 results with key information.
       */
      searchFalcao: ({ query }) =>
        Effect.gen(function* () {
          const result = yield* legalResearch
            .searchFalcao({ query, documentType: "acordaos", page: 0 })
            .pipe(
              Effect.map((response) => {
                if (response.documents.length === 0) {
                  return `No documents found in Falcao for query: "${query}"`;
                }

                const summary = response.documents
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

                return `Found ${response.total} documents. Top 3:\n\n${summary}`;
              }),
              // Log structured error for debugging, return simple message to LLM
              Effect.catchAll((error) =>
                Effect.logError("Falcao tool failed", error).pipe(
                  Effect.as(`Error searching Falcao: ${error._tag}`)
                )
              )
            );

          return result;
        }).pipe(
          Effect.withSpan("Agent.searchFalcao", { attributes: { query } })
        ),

      /**
       * Implementation: Get Datajud Process Details
       *
       * Retrieves detailed metadata for a specific judicial process by its number.
       * Returns a formatted summary of the process information.
       */
      getDatajudProcess: ({ processNumber }) =>
        Effect.gen(function* () {
          const result = yield* legalResearch
            .getProcessDetails(processNumber)
            .pipe(
              Effect.map((response) => {
                if (!response.found || !response.process) {
                  return `Process number "${processNumber}" not found in Datajud.`;
                }

                const p = response.process;
                // Format process details as human-readable text
                const details = [
                  `Process: ${p.number}`,
                  `Tribunal: ${p.tribunal}`,
                  p.class ? `Class: ${p.class}` : "",
                  p.court ? `Court: ${p.court}` : "",
                  p.subjects.length > 0
                    ? `Subjects: ${p.subjects.join(", ")}`
                    : "",
                  p.filingDate ? `Filing date: ${p.filingDate}` : "",
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
        }).pipe(
          Effect.withSpan("Agent.getDatajudProcess", {
            attributes: { processNumber },
          })
        ),

      /**
       * Implementation: Get Full Falcao Document
       *
       * Retrieves full document details by tribunal and document ID.
       */
      getFalcaoDocument: ({ tribunal, documentId }) =>
        Effect.gen(function* () {
          const result = yield* legalResearch
            .getFalcaoDocument(tribunal, documentId)
            .pipe(
              Effect.map((doc) => formatFalcaoDocumentDetails(doc)),
              Effect.catchAll((error) =>
                Effect.logError("getFalcaoDocument failed", error).pipe(
                  Effect.as(`Error retrieving document: ${error._tag}`)
                )
              )
            );
          return result;
        }).pipe(
          Effect.withSpan("Agent.getFalcaoDocument", {
            attributes: { tribunal, documentId },
          })
        ),

      /**
       * Implementation: Advanced Falcao Search
       *
       * Searches with full filtering options.
       */
      searchFalcaoAdvanced: ({
        query,
        documentType,
        tribunals,
        dateStart,
        dateEnd,
        judgeReporter,
        processNumber,
      }) =>
        Effect.gen(function* () {
          const result = yield* legalResearch
            .searchFalcao({
              query,
              documentType: documentType ?? "acordaos",
              tribunals,
              dateStart,
              dateEnd,
              judgeReporter,
              processNumber,
              page: 0,
            })
            .pipe(
              Effect.map((response) => {
                if (response.documents.length === 0) {
                  return `No ${documentType ?? "acordaos"} found for query: "${query}"${tribunals ? ` in tribunals: ${tribunals}` : ""}`;
                }

                const summary = response.documents
                  .slice(0, 5)
                  .map((doc, idx) => formatFalcaoSearchResult(doc, idx))
                  .join("\n\n");

                return `Found ${response.total} ${documentType ?? "acordaos"}. Top 5:\n\n${summary}`;
              }),
              Effect.catchAll((error) =>
                Effect.logError("searchFalcaoAdvanced failed", error).pipe(
                  Effect.as(`Error searching Falcao: ${error._tag}`)
                )
              )
            );
          return result;
        }).pipe(
          Effect.withSpan("Agent.searchFalcaoAdvanced", {
            attributes: { query, documentType, tribunals },
          })
        ),

      /**
       * Implementation: Get Falcao Tribunals
       *
       * Lists all available tribunals.
       */
      getFalcaoTribunals: () =>
        Effect.gen(function* () {
          const result = yield* legalResearch.getFalcaoTribunals().pipe(
            Effect.map((tribunals) => {
              const list = tribunals
                .map((t) => `- ${t.sigla}: ${t.nome}`)
                .join("\n");
              return `Available Labor Law Tribunals (${tribunals.length}):\n\n${list}`;
            }),
            Effect.catchAll((error) =>
              Effect.logError("getFalcaoTribunals failed", error).pipe(
                Effect.as(`Error getting tribunals: ${error._tag}`)
              )
            )
          );
          return result;
        }).pipe(Effect.withSpan("Agent.getFalcaoTribunals")),

      /**
       * Implementation: Get Falcao Document Counts
       *
       * Gets document counts by type for a search query.
       */
      getFalcaoDocumentCounts: ({ query, tribunals }) =>
        Effect.gen(function* () {
          const result = yield* legalResearch
            .getFalcaoDocumentCounts(query, tribunals)
            .pipe(
              Effect.map((counts) => {
                const lines = [
                  `Document counts for "${query}"${tribunals ? ` in ${tribunals}` : ""}:`,
                  "",
                  `- Acórdãos (court decisions): ${counts.acordaos}`,
                  `- Sentenças (sentences): ${counts.sentencas}`,
                  `- Precedentes (precedents): ${counts.precedentes}`,
                  `- Decisões Monocráticas: ${counts.decisoesMonocraticas}`,
                  `- Recurso Revista (appeals): ${counts.recursoRevista}`,
                ];
                return lines.join("\n");
              }),
              Effect.catchAll((error) =>
                Effect.logError("getFalcaoDocumentCounts failed", error).pipe(
                  Effect.as(`Error getting counts: ${error._tag}`)
                )
              )
            );
          return result;
        }).pipe(
          Effect.withSpan("Agent.getFalcaoDocumentCounts", {
            attributes: { query, tribunals },
          })
        ),

      /**
       * Implementation: Falcao Autocomplete
       *
       * Gets search suggestions and related queries.
       */
      getFalcaoAutocomplete: ({ text }) =>
        Effect.gen(function* () {
          const result = yield* legalResearch.getFalcaoAutocomplete(text).pipe(
            Effect.map((response) => {
              const suggestions =
                response.sugestoes.length > 0
                  ? `Suggestions:\n${response.sugestoes.map((s) => `- ${s}`).join("\n")}`
                  : "No suggestions found.";

              const related =
                response.queriesRelated && response.queriesRelated.length > 0
                  ? `\n\nRelated searches:\n${response.queriesRelated
                      .flatMap((q) => q.queryRelated)
                      .slice(0, 10)
                      .map((r) => `- ${r}`)
                      .join("\n")}`
                  : "";

              return `${suggestions}${related}`;
            }),
            Effect.catchAll((error) =>
              Effect.logError("getFalcaoAutocomplete failed", error).pipe(
                Effect.as(`Error getting autocomplete: ${error._tag}`)
              )
            )
          );
          return result;
        }).pipe(
          Effect.withSpan("Agent.getFalcaoAutocomplete", {
            attributes: { text },
          })
        ),

      /**
       * Implementation: Advanced BNP Search
       *
       * Searches with boolean operators and filtering.
       */
      searchBnpAdvanced: ({
        query,
        allWords,
        anyWords,
        excludeWords,
        exactPhrase,
        courts,
        types,
        includeCancelled,
        sortBy,
      }) =>
        Effect.gen(function* () {
          // Parse comma-separated strings into arrays
          const courtsArray = courts
            ? courts.split(",").map((c) => c.trim())
            : undefined;
          const typesArray = types
            ? types.split(",").map((t) => t.trim())
            : undefined;

          const result = yield* legalResearch
            .searchBnp({
              query,
              allWords,
              anyWords,
              excludeWords,
              exactPhrase,
              courts: courtsArray,
              types: typesArray,
              includeCancelled: includeCancelled ?? false,
              sortBy: sortBy ?? "Textual",
              page: 1,
            })
            .pipe(
              Effect.map((response) => {
                if (response.results.length === 0) {
                  return `No precedents found for query: "${query}"`;
                }

                const summary = response.results
                  .slice(0, 5)
                  .map((precedent, idx) => {
                    const title = `${precedent.tipo} ${precedent.nr} from ${precedent.orgao}`;
                    const thesis = precedent.tese
                      ? precedent.tese.substring(0, 200)
                      : (precedent.questao?.substring(0, 200) ?? "N/A");
                    const status = precedent.situacao;

                    return `${idx + 1}. [${title}]\n   Thesis: ${thesis}...\n   Status: ${status}`;
                  })
                  .join("\n\n");

                return `Found ${response.total} precedents. Top 5:\n\n${summary}`;
              }),
              Effect.catchAll((error) =>
                Effect.logError("searchBnpAdvanced failed", error).pipe(
                  Effect.as(`Error searching BNP: ${error._tag}`)
                )
              )
            );
          return result;
        }).pipe(
          Effect.withSpan("Agent.searchBnpAdvanced", {
            attributes: { query, courts, types },
          })
        ),

      /**
       * Implementation: Advanced Datajud Search
       *
       * Searches with Elasticsearch-like filtering.
       */
      searchDatajudAdvanced: ({
        tribunal,
        processClass,
        courtCode,
        dateFrom,
        dateTo,
        size,
      }) =>
        Effect.gen(function* () {
          const result = yield* legalResearch
            .searchDatajudAdvanced({
              tribunal,
              processClass,
              courtCode,
              dateFrom,
              dateTo,
              size: size ?? 10,
            })
            .pipe(
              Effect.map((response) => {
                if (response.hits.hits.length === 0) {
                  return `No processes found in ${tribunal.toUpperCase()} with the specified filters.`;
                }

                const summary = response.hits.hits
                  .slice(0, 5)
                  .map((hit, idx) => {
                    const src = hit._source;
                    const lines = [
                      `${idx + 1}. Process: ${src.numeroProcesso}`,
                      src.classe ? `   Class: ${src.classe.nome}` : "",
                      src.orgaoJulgador
                        ? `   Court: ${src.orgaoJulgador.nome}`
                        : "",
                      src.dataAjuizamento
                        ? `   Filed: ${src.dataAjuizamento}`
                        : "",
                    ]
                      .filter((l) => l.length > 0)
                      .join("\n");
                    return lines;
                  })
                  .join("\n\n");

                return `Found ${response.hits.total.value} processes in ${tribunal.toUpperCase()}. Top 5:\n\n${summary}`;
              }),
              Effect.catchAll((error) =>
                Effect.logError("searchDatajudAdvanced failed", error).pipe(
                  Effect.as(`Error searching Datajud: ${error._tag}`)
                )
              )
            );
          return result;
        }).pipe(
          Effect.withSpan("Agent.searchDatajudAdvanced", {
            attributes: { tribunal, processClass, courtCode },
          })
        ),

      /**
       * Implementation: Parse Process Number
       *
       * Parses and validates Brazilian process numbers.
       */
      parseProcessNumber: ({ processNumber }) =>
        Effect.gen(function* () {
          const parsed = yield* legalResearch.parseProcessNumber(processNumber);

          const lines = [
            `Process Number Analysis:`,
            ``,
            `Input: ${parsed.input}`,
            `Formatted: ${parsed.formatted}`,
            ``,
            `Components:`,
            `- Sequential: ${parsed.components.sequencial}`,
            `- Check Digit: ${parsed.components.dv}`,
            `- Year: ${parsed.components.ano}`,
            `- Justice Segment: ${parsed.components.idOrgao}`,
            `- Tribunal ID: ${parsed.components.idTribunal}`,
            `- Origin Unit: ${parsed.components.idUnidadeOrigem}`,
            ``,
            `Inferred Tribunal: ${parsed.tribunalAlias.toUpperCase()}`,
          ];

          return lines.join("\n");
        }).pipe(
          Effect.catchAll((error) =>
            Effect.logError("parseProcessNumber failed", error).pipe(
              Effect.as(
                `Error parsing process number: ${"_tag" in error ? error._tag : "Unknown error"}`
              )
            )
          ),
          Effect.withSpan("Agent.parseProcessNumber", {
            attributes: { processNumber },
          })
        ),
    };
  })
).pipe(
  // Provide LegalResearchService (which internally provides connector services)
  Layer.provide(LegalResearchService.Default)
);
