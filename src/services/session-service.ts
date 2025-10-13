/**
 * Session Service - Effect-Native Implementation
 *
 * Manages search sessions, saved searches, and search history using Effect's Ref
 * for fiber-safe mutable state. This replaces the legacy SessionManager with
 * global mutable state.
 */

import { Effect, Ref, Schema } from "effect";

/**
 * Saved Search Schema
 */
export const SavedSearch = Schema.Struct({
  timestamp: Schema.String,
  search_params: Schema.Unknown,
  results: Schema.Unknown,
});

export type SavedSearch = Schema.Schema.Type<typeof SavedSearch>;

/**
 * Search History Entry Schema
 */
export const SearchHistoryEntry = Schema.Struct({
  timestamp: Schema.String,
  params: Schema.Unknown,
  total_results: Schema.Number,
});

export type SearchHistoryEntry = Schema.Schema.Type<typeof SearchHistoryEntry>;

/**
 * Search Analysis Result Schema
 */
export const SearchAnalysis = Schema.Struct({
  total_results: Schema.Number,
  courts_distribution: Schema.Record({
    key: Schema.String,
    value: Schema.Number,
  }),
  types_distribution: Schema.Record({
    key: Schema.String,
    value: Schema.Number,
  }),
  status_distribution: Schema.Record({
    key: Schema.String,
    value: Schema.Number,
  }),
  year_distribution: Schema.Record({
    key: Schema.String,
    value: Schema.Number,
  }),
});

export type SearchAnalysis = Schema.Schema.Type<typeof SearchAnalysis>;

/**
 * Session Service
 *
 * Provides session management functionality with fiber-safe state management.
 * Uses Ref for mutable state to ensure thread safety across concurrent operations.
 */
export class SessionService extends Effect.Service<SessionService>()(
  "app/SessionService",
  {
    effect: Effect.gen(function* () {
      // Initialize fiber-safe mutable state
      const savedSearchesRef = yield* Ref.make<Map<string, SavedSearch>>(
        new Map()
      );
      const searchHistoryRef = yield* Ref.make<SearchHistoryEntry[]>([]);

      return {
        /**
         * Save a search with its parameters and results
         */
        saveSearch: (name: string, searchParams: unknown, results: unknown) =>
          Effect.gen(function* () {
            const savedSearch: SavedSearch = {
              timestamp: new Date().toISOString(),
              search_params: searchParams,
              results,
            };

            yield* Ref.update(savedSearchesRef, (searches) => {
              const newSearches = new Map(searches);
              newSearches.set(name, savedSearch);
              return newSearches;
            });
          }),

        /**
         * Get a saved search by name
         */
        getSavedSearch: (name: string) =>
          Effect.gen(function* () {
            const searches = yield* Ref.get(savedSearchesRef);
            return searches.get(name);
          }),

        /**
         * Get all saved searches
         */
        getAllSavedSearches: () =>
          Effect.gen(function* () {
            const searches = yield* Ref.get(savedSearchesRef);
            return new Map(searches);
          }),

        /**
         * Delete a saved search
         */
        deleteSavedSearch: (name: string) =>
          Effect.gen(function* () {
            return yield* Ref.modify(savedSearchesRef, (searches) => {
              const newSearches = new Map(searches);
              const deleted = newSearches.delete(name);
              return [deleted, newSearches];
            });
          }),

        /**
         * Add entry to search history
         */
        addToHistory: (params: unknown, totalResults: number) =>
          Effect.gen(function* () {
            const entry: SearchHistoryEntry = {
              timestamp: new Date().toISOString(),
              params,
              total_results: totalResults,
            };

            yield* Ref.update(searchHistoryRef, (history) => {
              const newHistory = [...history, entry];
              // Keep only last 100 entries
              return newHistory.length > 100
                ? newHistory.slice(-100)
                : newHistory;
            });
          }),

        /**
         * Get search history
         */
        getSearchHistory: () =>
          Effect.gen(function* () {
            const history = yield* Ref.get(searchHistoryRef);
            return [...history];
          }),

        /**
         * Clear search history
         */
        clearHistory: () => Ref.set(searchHistoryRef, []),

        /**
         * Analyze search results to extract patterns and statistics
         */
        analyzeResults: (results: {
          resultados?: Array<{
            orgao?: string;
            tipo?: string;
            situacao?: string;
            ultimaAtualizacao?: string;
          }>;
        }) =>
          Effect.gen(function* () {
            const resultados = results.resultados ?? [];

            if (resultados.length === 0) {
              return {
                total_results: 0,
                courts_distribution: {},
                types_distribution: {},
                status_distribution: {},
                year_distribution: {},
              };
            }

            // Build distributions as mutable plain objects
            const courtsDistribution: Record<string, number> = {};
            const typesDistribution: Record<string, number> = {};
            const statusDistribution: Record<string, number> = {};
            const yearDistribution: Record<string, number> = {};

            // Analyze each result
            for (const result of resultados) {
              // Court distribution
              const orgao = result.orgao ?? "Unknown";
              courtsDistribution[orgao] = (courtsDistribution[orgao] ?? 0) + 1;

              // Type distribution
              const tipo = result.tipo ?? "Unknown";
              typesDistribution[tipo] = (typesDistribution[tipo] ?? 0) + 1;

              // Status distribution
              const situacao = result.situacao ?? "Unknown";
              statusDistribution[situacao] =
                (statusDistribution[situacao] ?? 0) + 1;

              // Year distribution
              if (result.ultimaAtualizacao) {
                const year = extractYear(result.ultimaAtualizacao);
                if (year) {
                  yearDistribution[year] = (yearDistribution[year] ?? 0) + 1;
                }
              }
            }

            // Create final analysis object with sorted distributions
            const analysis: SearchAnalysis = {
              total_results: resultados.length,
              courts_distribution: sortDistribution(courtsDistribution),
              types_distribution: sortDistribution(typesDistribution),
              status_distribution: sortDistribution(statusDistribution),
              year_distribution: sortDistribution(yearDistribution),
            };

            return analysis;
          }),
      };
    }),
  }
) {}

/**
 * Extract year from date string
 */
function extractYear(dateString: string): string | null {
  const patterns = [
    /\b(\d{4})\b/, // 4-digit year anywhere
    /(\d{2})\/(\d{2})\/(\d{4})/, // DD/MM/YYYY
    /(\d{4})-(\d{2})-(\d{2})/, // YYYY-MM-DD
  ];

  for (const pattern of patterns) {
    const match = dateString.match(pattern);
    if (match) {
      // For DD/MM/YYYY format, year is in position 3
      if (match.length === 4 && match[3]) {
        return match[3];
      }
      // For other formats, use first capture group
      if (match[1]) {
        return match[1];
      }
    }
  }

  return null;
}

/**
 * Sort distribution object by count (descending)
 */
function sortDistribution(
  distribution: Record<string, number>
): Record<string, number> {
  const entries = Object.entries(distribution);
  entries.sort(([, a], [, b]) => b - a);
  return Object.fromEntries(entries);
}
