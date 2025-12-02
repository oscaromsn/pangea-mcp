/**
 * Legal Research Service - Business Logic Layer
 *
 * Centralizes legal research operations used by both Agent and MCP handlers.
 * Returns typed domain objects that handlers format for their respective outputs.
 *
 * This service eliminates duplication between Agent (text output) and MCP (JSON output)
 * handlers by extracting the core business logic into a shared layer.
 */

import { Effect } from "effect";
import { BnpService, BnpServiceLive } from "../connectors/bnp";
import type {
  BnpApiError,
  BnpNetworkError,
  BnpValidationError,
} from "../connectors/bnp/errors";
import type { Precedent } from "../connectors/bnp/schema";
import { DatajudService, DatajudServiceLive } from "../connectors/datajud";
import type {
  DatajudApiError,
  DatajudNetworkError,
  DatajudValidationError,
} from "../connectors/datajud/errors";
import type { DatajudSearchResponse } from "../connectors/datajud/schema";
import { FalcaoService, FalcaoServiceLive } from "../connectors/falcao";
import type {
  FalcaoApiError,
  FalcaoNetworkError,
  FalcaoValidationError,
} from "../connectors/falcao/errors";
import type {
  FalcaoAutocompleteResponse,
  FalcaoDocument,
  FalcaoSearchResponse,
  FalcaoTribunal,
} from "../connectors/falcao/schema";
import type { TribunalAlias } from "../domain/numero-processo";
import {
  formatNumeroProcesso,
  inferTribunalAlias,
  isSupportedTribunalAlias,
  parseNumeroProcesso,
} from "../domain/numero-processo";
import {
  type InvalidCheckDigitError,
  type InvalidProcessNumberFormatError,
  UnsupportedTribunalError,
} from "../domain/numero-processo/errors";

// =============================================================================
// Domain Result Types
// =============================================================================

/**
 * BNP search result with aggregations
 */
export interface BnpSearchResult {
  readonly total: number;
  readonly page: number;
  readonly pageSize: number;
  readonly results: ReadonlyArray<Precedent>;
  readonly aggregations: {
    readonly byType: ReadonlyArray<{ code: string; count: number }>;
    readonly byCourt: ReadonlyArray<{ code: string; count: number }>;
  };
}

/**
 * Falcao search result - unified for all document types
 */
export interface FalcaoSearchResult {
  readonly total: number;
  readonly page: number;
  readonly documents: FalcaoSearchResponse["documentos"];
  readonly filters?: FalcaoSearchResponse["filtrosDisponiveis"];
}

/**
 * Datajud process metadata result
 */
export interface ProcessDetailsResult {
  readonly found: boolean;
  readonly process?: {
    readonly number: string;
    readonly tribunal: string;
    readonly court?: string;
    readonly class?: string;
    readonly subjects: readonly string[];
    readonly filingDate: string;
    readonly degree: string;
    readonly system?: string;
  };
}

/**
 * Falcao document counts result
 */
export interface DocumentCountsResult {
  readonly acordaos: number;
  readonly sentencas: number;
  readonly precedentes: number;
  readonly decisoesMonocraticas: number;
  readonly recursoRevista: number;
}

/**
 * Process number parsing result
 */
export interface ParsedProcessNumber {
  readonly input: string;
  readonly formatted: string;
  readonly components: {
    readonly sequencial: number;
    readonly dv: number;
    readonly ano: number;
    readonly idOrgao: number;
    readonly idTribunal: number;
    readonly idUnidadeOrigem: number;
  };
  readonly tribunalAlias: string;
}

// =============================================================================
// Error Type Unions
// =============================================================================

export type BnpErrors = BnpApiError | BnpNetworkError | BnpValidationError;
export type FalcaoErrors =
  | FalcaoApiError
  | FalcaoNetworkError
  | FalcaoValidationError;
export type DatajudErrors =
  | DatajudApiError
  | DatajudNetworkError
  | DatajudValidationError;
export type ProcessNumberErrors =
  | InvalidProcessNumberFormatError
  | InvalidCheckDigitError
  | UnsupportedTribunalError;

// =============================================================================
// Service Input Types
// =============================================================================

export interface BnpSearchInput {
  readonly query?: string | undefined;
  readonly allWords?: string | undefined;
  readonly anyWords?: string | undefined;
  readonly excludeWords?: string | undefined;
  readonly exactPhrase?: string | undefined;
  readonly courts?: readonly string[] | undefined;
  readonly types?: readonly string[] | undefined;
  readonly includeCancelled?: boolean | undefined;
  readonly sortBy?:
    | "Textual"
    | "Cronologica Ascendente"
    | "Cronologica Descendente"
    | undefined;
  readonly page?: number | undefined;
}

export interface FalcaoSearchInput {
  readonly query: string;
  readonly documentType?:
    | "acordaos"
    | "precedentes"
    | "sentencas"
    | "decisoesmonocraticas"
    | "recursorevista"
    | undefined;
  readonly tribunals?: string | undefined;
  readonly dateStart?: string | undefined;
  readonly dateEnd?: string | undefined;
  readonly judgeReporter?: string | undefined;
  readonly processNumber?: string | undefined;
  readonly page?: number | undefined;
}

export interface DatajudAdvancedInput {
  readonly tribunal: string;
  readonly processClass?: number | undefined;
  readonly courtCode?: number | undefined;
  readonly dateFrom?: string | undefined;
  readonly dateTo?: string | undefined;
  readonly size?: number | undefined;
}

// =============================================================================
// Legal Research Service
// =============================================================================

/**
 * LegalResearchService - Core business logic for legal research operations
 *
 * This service provides the "what" (domain operations) separate from the "how"
 * (output formatting). Handlers consume this service and format results
 * appropriately for their output format (text for Agent, JSON for MCP).
 */
export class LegalResearchService extends Effect.Service<LegalResearchService>()(
  "app/LegalResearchService",
  {
    dependencies: [BnpServiceLive, FalcaoServiceLive, DatajudServiceLive],
    effect: Effect.gen(function* () {
      const bnp = yield* BnpService;
      const falcao = yield* FalcaoService;
      const datajud = yield* DatajudService;

      return {
        // =============================================================================
        // BNP Operations
        // =============================================================================

        /**
         * Search BNP precedents with optional filtering
         */
        searchBnp: (
          input: BnpSearchInput
        ): Effect.Effect<BnpSearchResult, BnpErrors> =>
          Effect.gen(function* () {
            const response = yield* bnp.searchPrecedents({
              buscaGeral: input.query,
              todasPalavras: input.allWords,
              quaisquerPalavras: input.anyWords,
              semPalavras: input.excludeWords,
              trechoExato: input.exactPhrase,
              orgaos: input.courts ? [...input.courts] : undefined,
              tipos: input.types ? [...input.types] : undefined,
              cancelados: input.includeCancelled,
              ordenacao: input.sortBy,
              pagina: input.page ?? 1,
            });

            return {
              total: response.total,
              page: input.page ?? 1,
              pageSize: 10, // API always returns 10
              results: response.resultados,
              aggregations: {
                byType: response.aggsEspecies.map((a) => ({
                  code: a.tipo,
                  count: a.total,
                })),
                byCourt: response.aggsOrgaos.map((a) => ({
                  code: a.tipo,
                  count: a.total,
                })),
              },
            };
          }).pipe(Effect.withSpan("LegalResearchService.searchBnp")),

        // =============================================================================
        // Falcao Operations
        // =============================================================================

        /**
         * Search Falcao labor law jurisprudence
         */
        searchFalcao: (
          input: FalcaoSearchInput
        ): Effect.Effect<FalcaoSearchResult, FalcaoErrors> =>
          Effect.gen(function* () {
            const response = yield* falcao.search({
              texto: input.query,
              colecao: input.documentType ?? "acordaos",
              tribunais: input.tribunals,
              dataInicio: input.dateStart,
              dataFim: input.dateEnd,
              nomeRelator: input.judgeReporter,
              numeroProcesso: input.processNumber,
              page: input.page ?? 0,
              size: 10,
            });

            return {
              total: response.quantidadeTotal,
              page: input.page ?? 0,
              documents: response.documentos,
              filters: response.filtrosDisponiveis,
            };
          }).pipe(Effect.withSpan("LegalResearchService.searchFalcao")),

        /**
         * Get full Falcao document by ID
         */
        getFalcaoDocument: (
          tribunal: string,
          documentId: string
        ): Effect.Effect<FalcaoDocument, FalcaoErrors> =>
          falcao
            .getDocument(tribunal, documentId)
            .pipe(Effect.withSpan("LegalResearchService.getFalcaoDocument")),

        /**
         * Get available Falcao tribunals
         */
        getFalcaoTribunals: (): Effect.Effect<
          readonly FalcaoTribunal[],
          FalcaoErrors
        > =>
          falcao
            .getTribunals()
            .pipe(Effect.withSpan("LegalResearchService.getFalcaoTribunals")),

        /**
         * Get document counts by type for a query
         */
        getFalcaoDocumentCounts: (
          query: string,
          tribunals?: string
        ): Effect.Effect<DocumentCountsResult, FalcaoErrors> =>
          Effect.gen(function* () {
            const response = yield* falcao.searchCount({
              texto: query,
              tribunais: tribunals,
            });

            return {
              acordaos: response.countAcordaos,
              sentencas: response.countSentencas,
              precedentes: response.countPrecedentes,
              decisoesMonocraticas: response.countDecisoesMonocraticas,
              recursoRevista: response.countRR,
            };
          }).pipe(
            Effect.withSpan("LegalResearchService.getFalcaoDocumentCounts")
          ),

        /**
         * Get autocomplete suggestions
         */
        getFalcaoAutocomplete: (
          text: string
        ): Effect.Effect<FalcaoAutocompleteResponse, FalcaoErrors> =>
          falcao
            .autocomplete(text)
            .pipe(
              Effect.withSpan("LegalResearchService.getFalcaoAutocomplete")
            ),

        // =============================================================================
        // Datajud Operations
        // =============================================================================

        /**
         * Get process details by process number
         * Automatically infers tribunal from the process number
         */
        getProcessDetails: (
          processNumber: string
        ): Effect.Effect<
          ProcessDetailsResult,
          DatajudErrors | ProcessNumberErrors
        > =>
          Effect.gen(function* () {
            const response =
              yield* datajud.searchProcessMetadata(processNumber);

            const firstHit = response.hits.hits[0];
            if (!firstHit) {
              return { found: false };
            }

            const process = firstHit._source;

            // Normalize assuntos - array of (single object | array of objects)
            const subjects = (process.assuntos ?? []).flatMap((item) => {
              if ("length" in item) {
                return (item as ReadonlyArray<{ nome: string }>).map(
                  (a) => a.nome
                );
              }
              return [item.nome];
            });

            return {
              found: true,
              process: {
                number: process.numeroProcesso,
                tribunal: process.tribunal,
                court: process.orgaoJulgador?.nome,
                class: process.classe?.nome,
                subjects,
                filingDate: process.dataAjuizamento,
                degree: process.grau,
                system: process.sistema?.nome,
              },
            };
          }).pipe(Effect.withSpan("LegalResearchService.getProcessDetails")),

        /**
         * Advanced Datajud search with Elasticsearch query
         */
        searchDatajudAdvanced: (
          input: DatajudAdvancedInput
        ): Effect.Effect<
          DatajudSearchResponse,
          DatajudErrors | ProcessNumberErrors
        > =>
          Effect.gen(function* () {
            // Validate tribunal alias
            if (!isSupportedTribunalAlias(input.tribunal)) {
              return yield* Effect.fail(
                new UnsupportedTribunalError({
                  processNumber: "",
                  tribunalName: input.tribunal,
                  reason: `"${input.tribunal}" is not a valid tribunal alias`,
                })
              );
            }

            // Build Elasticsearch query
            const mustClauses: Array<Record<string, unknown>> = [];

            if (input.processClass !== undefined) {
              mustClauses.push({
                match: { "classe.codigo": input.processClass },
              });
            }
            if (input.courtCode !== undefined) {
              mustClauses.push({
                match: { "orgaoJulgador.codigo": input.courtCode },
              });
            }
            if (input.dateFrom || input.dateTo) {
              const rangeClause: Record<string, string> = {};
              if (input.dateFrom) rangeClause.gte = input.dateFrom;
              if (input.dateTo) rangeClause.lte = input.dateTo;
              mustClauses.push({ range: { dataAjuizamento: rangeClause } });
            }

            const query =
              mustClauses.length > 0
                ? { bool: { must: mustClauses } }
                : { match_all: {} };

            return yield* datajud.searchProcessMetadata(
              input.tribunal as TribunalAlias,
              {
                query,
                size: input.size ?? 10,
              }
            );
          }).pipe(
            Effect.withSpan("LegalResearchService.searchDatajudAdvanced")
          ),

        // =============================================================================
        // Utility Operations
        // =============================================================================

        /**
         * Parse and validate a Brazilian process number
         */
        parseProcessNumber: (
          processNumber: string
        ): Effect.Effect<ParsedProcessNumber, ProcessNumberErrors> =>
          Effect.gen(function* () {
            const components = yield* parseNumeroProcesso(processNumber);
            const formatted = formatNumeroProcesso(components);
            const tribunalAlias = yield* inferTribunalAlias(processNumber);

            return {
              input: processNumber,
              formatted,
              components: {
                sequencial: components.sequencial,
                dv: components.dv,
                ano: components.ano,
                idOrgao: components.id_orgao,
                idTribunal: components.id_tribunal,
                idUnidadeOrigem: components.id_unidade_origem,
              },
              tribunalAlias,
            };
          }).pipe(Effect.withSpan("LegalResearchService.parseProcessNumber")),
      };
    }),
  }
) {}
