import type {
  SavedSearch,
  SearchAnalysis,
  SearchHistoryEntry,
  SearchResponse,
  SearchResultItem,
} from "@/types";

/**
 * Session manager for handling saved searches and search history
 */
export class SessionManager {
  private savedSearches: Map<string, SavedSearch> = new Map();
  private searchHistory: SearchHistoryEntry[] = [];

  /**
   * Save a search with its parameters and results
   */
  saveSearch(
    name: string,
    searchParams: Record<string, unknown>,
    results: Record<string, unknown>
  ): void {
    const savedSearch: SavedSearch = {
      timestamp: new Date().toISOString(),
      search_params: searchParams,
      results,
    };

    this.savedSearches.set(name, savedSearch);
  }

  /**
   * Get a saved search by name
   */
  getSavedSearch(name: string): SavedSearch | undefined {
    return this.savedSearches.get(name);
  }

  /**
   * Get all saved searches
   */
  getAllSavedSearches(): Map<string, SavedSearch> {
    return new Map(this.savedSearches);
  }

  /**
   * Delete a saved search
   */
  deleteSavedSearch(name: string): boolean {
    return this.savedSearches.delete(name);
  }

  /**
   * Add entry to search history
   */
  addToHistory(params: Record<string, unknown>, totalResults: number): void {
    const entry: SearchHistoryEntry = {
      timestamp: new Date().toISOString(),
      params,
      total_results: totalResults,
    };

    this.searchHistory.push(entry);

    // Keep only last 100 entries to prevent memory bloat
    if (this.searchHistory.length > 100) {
      this.searchHistory = this.searchHistory.slice(-100);
    }
  }

  /**
   * Get search history
   */
  getSearchHistory(): SearchHistoryEntry[] {
    return [...this.searchHistory];
  }

  /**
   * Clear search history
   */
  clearHistory(): void {
    this.searchHistory = [];
  }

  /**
   * Analyze search results to extract patterns and statistics
   */
  analyzeResults(results: SearchResponse): SearchAnalysis {
    const resultados = results.resultados || [];

    if (resultados.length === 0) {
      return {
        total_results: 0,
        courts_distribution: {},
        types_distribution: {},
        status_distribution: {},
        year_distribution: {},
      };
    }

    const analysis: SearchAnalysis = {
      total_results: resultados.length,
      courts_distribution: {},
      types_distribution: {},
      status_distribution: {},
      year_distribution: {},
    };

    // Analyze each result
    for (const result of resultados) {
      this.analyzeResultItem(result, analysis);
    }

    // Sort distributions by count (descending)
    analysis.courts_distribution = this.sortDistribution(
      analysis.courts_distribution
    );
    analysis.types_distribution = this.sortDistribution(
      analysis.types_distribution
    );
    analysis.status_distribution = this.sortDistribution(
      analysis.status_distribution
    );
    analysis.year_distribution = this.sortDistribution(
      analysis.year_distribution
    );

    return analysis;
  }

  /**
   * Analyze a single result item and update analysis counters
   */
  private analyzeResultItem(
    result: SearchResultItem,
    analysis: SearchAnalysis
  ): void {
    // Court distribution
    const orgao = result.orgao || "Unknown";
    analysis.courts_distribution[orgao] =
      (analysis.courts_distribution[orgao] || 0) + 1;

    // Type distribution
    const tipo = result.tipo || "Unknown";
    analysis.types_distribution[tipo] =
      (analysis.types_distribution[tipo] || 0) + 1;

    // Status distribution
    const situacao = result.situacao || "Unknown";
    analysis.status_distribution[situacao] =
      (analysis.status_distribution[situacao] || 0) + 1;

    // Year distribution from ultimaAtualizacao
    if (result.ultimaAtualizacao) {
      const year = this.extractYearFromDate(result.ultimaAtualizacao);
      if (year) {
        analysis.year_distribution[year] =
          (analysis.year_distribution[year] || 0) + 1;
      }
    }
  }

  /**
   * Extract year from date string (supports various formats)
   */
  private extractYearFromDate(dateString: string): string | null {
    // Try to extract year from different date formats
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
        // For other formats or simple 4-digit match, use first capture group
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
  private sortDistribution(
    distribution: Record<string, number>
  ): Record<string, number> {
    const entries = Object.entries(distribution);
    entries.sort(([, a], [, b]) => b - a);
    return Object.fromEntries(entries);
  }
}

// Default session manager instance
export const sessionManager = new SessionManager();
