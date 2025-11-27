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
import type { TribunalAlias } from "../domain/numero-processo";
import {
  formatNumeroProcesso,
  inferTribunalAlias,
  isSupportedTribunalAlias,
  parseNumeroProcesso,
} from "../domain/numero-processo";
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

      /**
       * Implementation: Get Full Falcao Document
       *
       * Retrieves full document details by tribunal and document ID.
       */
      getFalcaoDocument: ({ tribunal, documentId }) =>
        Effect.gen(function* () {
          const result = yield* falcao.getDocument(tribunal, documentId).pipe(
            Effect.map((doc) => formatFalcaoDocumentDetails(doc)),
            Effect.catchAll((error) =>
              Effect.logError("getFalcaoDocument failed", error).pipe(
                Effect.as(`Error retrieving document: ${error._tag}`)
              )
            )
          );
          return result;
        }),

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
          const result = yield* falcao
            .search({
              texto: query,
              colecao: documentType ?? "acordaos",
              size: 10,
              page: 0,
              tribunais: tribunals,
              dataInicio: dateStart,
              dataFim: dateEnd,
              nomeRelator: judgeReporter,
              numeroProcesso: processNumber,
            })
            .pipe(
              Effect.map((response) => {
                if (response.documentos.length === 0) {
                  return `No ${documentType ?? "acordaos"} found for query: "${query}"${tribunals ? ` in tribunals: ${tribunals}` : ""}`;
                }

                const summary = response.documentos
                  .slice(0, 5)
                  .map((doc, idx) => formatFalcaoSearchResult(doc, idx))
                  .join("\n\n");

                return `Found ${response.quantidadeTotal} ${documentType ?? "acordaos"}. Top 5:\n\n${summary}`;
              }),
              Effect.catchAll((error) =>
                Effect.logError("searchFalcaoAdvanced failed", error).pipe(
                  Effect.as(`Error searching Falcao: ${error._tag}`)
                )
              )
            );
          return result;
        }),

      /**
       * Implementation: Get Falcao Tribunals
       *
       * Lists all available tribunals.
       */
      getFalcaoTribunals: () =>
        Effect.gen(function* () {
          const result = yield* falcao.getTribunals().pipe(
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
        }),

      /**
       * Implementation: Get Falcao Document Counts
       *
       * Gets document counts by type for a search query.
       */
      getFalcaoDocumentCounts: ({ query, tribunals }) =>
        Effect.gen(function* () {
          const result = yield* falcao
            .searchCount({
              texto: query,
              tribunais: tribunals,
            })
            .pipe(
              Effect.map((counts) => {
                const lines = [
                  `Document counts for "${query}"${tribunals ? ` in ${tribunals}` : ""}:`,
                  "",
                  `- Acórdãos (court decisions): ${counts.countAcordaos}`,
                  `- Sentenças (sentences): ${counts.countSentencas}`,
                  `- Precedentes (precedents): ${counts.countPrecedentes}`,
                  `- Decisões Monocráticas: ${counts.countDecisoesMonocraticas}`,
                  `- Recurso Revista (appeals): ${counts.countRR}`,
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
        }),

      /**
       * Implementation: Falcao Autocomplete
       *
       * Gets search suggestions and related queries.
       */
      getFalcaoAutocomplete: ({ text }) =>
        Effect.gen(function* () {
          const result = yield* falcao.autocomplete(text).pipe(
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
        }),

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
          const orgaos = courts
            ? courts.split(",").map((c) => c.trim())
            : undefined;
          const tipos = types
            ? types.split(",").map((t) => t.trim())
            : undefined;

          const result = yield* bnp
            .searchPrecedents({
              buscaGeral: query,
              todasPalavras: allWords,
              quaisquerPalavras: anyWords,
              semPalavras: excludeWords,
              trechoExato: exactPhrase,
              orgaos,
              tipos,
              cancelados: includeCancelled ?? false,
              ordenacao: sortBy ?? "Textual",
              pagina: 1,
            })
            .pipe(
              Effect.map((response) => {
                if (response.resultados.length === 0) {
                  return `No precedents found for query: "${query}"`;
                }

                const summary = response.resultados
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
        }),

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
          // Validate tribunal alias
          if (!isSupportedTribunalAlias(tribunal)) {
            return `Error: "${tribunal}" is not a valid tribunal alias. Use lowercase codes like 'tjsp', 'tst', 'stj', 'trf1', etc.`;
          }

          // Build Elasticsearch query
          const mustClauses: Array<Record<string, unknown>> = [];

          if (processClass !== undefined) {
            mustClauses.push({ match: { "classe.codigo": processClass } });
          }
          if (courtCode !== undefined) {
            mustClauses.push({ match: { "orgaoJulgador.codigo": courtCode } });
          }
          if (dateFrom || dateTo) {
            const rangeClause: Record<string, string> = {};
            if (dateFrom) rangeClause.gte = dateFrom;
            if (dateTo) rangeClause.lte = dateTo;
            mustClauses.push({ range: { dataAjuizamento: rangeClause } });
          }

          const query =
            mustClauses.length > 0
              ? { bool: { must: mustClauses } }
              : { match_all: {} };

          const result = yield* datajud
            .searchProcessMetadata(tribunal as TribunalAlias, {
              query,
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
        }),

      /**
       * Implementation: Parse Process Number
       *
       * Parses and validates Brazilian process numbers.
       */
      parseProcessNumber: ({ processNumber }) =>
        Effect.gen(function* () {
          const components = yield* parseNumeroProcesso(processNumber);
          const formatted = formatNumeroProcesso(components);
          const tribunalAlias = yield* inferTribunalAlias(processNumber);

          const lines = [
            `Process Number Analysis:`,
            ``,
            `Input: ${processNumber}`,
            `Formatted: ${formatted}`,
            ``,
            `Components:`,
            `- Sequential: ${components.sequencial}`,
            `- Check Digit: ${components.dv}`,
            `- Year: ${components.ano}`,
            `- Justice Segment: ${components.id_orgao}`,
            `- Tribunal ID: ${components.id_tribunal}`,
            `- Origin Unit: ${components.id_unidade_origem}`,
            ``,
            `Inferred Tribunal: ${tribunalAlias.toUpperCase()}`,
          ];

          return lines.join("\n");
        }).pipe(
          Effect.catchAll((error) =>
            Effect.logError("parseProcessNumber failed", error).pipe(
              Effect.as(
                `Error parsing process number: ${"_tag" in error ? error._tag : "Unknown error"}`
              )
            )
          )
        ),
    };
  })
).pipe(
  // Provide connector service dependencies locally (Local Dependency Erasure pattern)
  Layer.provide(
    Layer.mergeAll(BnpServiceLive, DatajudServiceLive, FalcaoServiceLive)
  )
);
