import type {
  CourtCode,
  PrecedentType,
  SearchResponse,
  SearchResultItem,
} from "@/types";
import { getCourtName, getPrecedentTypeName } from "@/types";

/**
 * Format search response for better agent comprehension
 */
export function formatSearchResponse(
  response: SearchResponse,
  searchParams: Record<string, unknown>,
  currentPage: number = 1,
  pageSize: number = 10
): Record<string, unknown> {
  const results = response.resultados || [];
  const totalPages = Math.ceil(response.total / pageSize);

  // Extract key insights from results
  const summary = generateSearchSummary(response, searchParams);
  const formattedResults = results.map(formatPrecedentResult);

  return {
    summary,
    pagination: {
      current_page: currentPage,
      total_pages: totalPages,
      results_per_page: results.length,
      total_results: response.total,
      showing: `${response.posicao_inicial}-${response.posicao_final} of ${response.total}`,
    },
    precedents: formattedResults,
    metadata: {
      search_quality: assessSearchQuality(response),
      result_distribution: getResultDistribution(response),
    },
    research_hints: generateResearchHints(response, searchParams),
  };
}

/**
 * Generate executive summary of search results
 */
function generateSearchSummary(
  response: SearchResponse,
  searchParams: Record<string, unknown>
): Record<string, unknown> {
  const results = response.resultados || [];
  if (results.length === 0) {
    return {
      total_found: 0,
      message: "No results found for the given search criteria",
      suggestion: "Try broadening your search terms or removing filters",
    };
  }

  // Get unique courts and types
  const courts = [...new Set(results.map((r) => r.orgao))];
  const types = [...new Set(results.map((r) => r.tipo))];

  // Find date range
  const dates = results
    .map((r) => r.ultimaAtualizacao)
    .filter((d): d is string => Boolean(d))
    .sort();
  const dateRange =
    dates.length > 0
      ? `${extractYear(dates[0]!)}-${extractYear(dates[dates.length - 1]!)}`
      : "various dates";

  // Identify dominant position if any
  const keyFinding = identifyKeyPattern(results);

  return {
    total_found: response.total,
    search_query: buildQueryDescription(searchParams),
    courts_represented: courts.map((c) => ({
      code: c,
      name: getCourtName(c as CourtCode),
    })),
    precedent_types: types.map((t) => ({
      code: t,
      name: getPrecedentTypeName(t as PrecedentType),
    })),
    date_range: dateRange,
    key_finding: keyFinding,
  };
}

/**
 * Format individual precedent result
 */
function formatPrecedentResult(
  result: SearchResultItem
): Record<string, unknown> {
  const courtInfo = {
    code: result.orgao,
    name: getCourtName(result.orgao),
    hierarchy_level: getCourtHierarchy(result.orgao),
  };

  const typeInfo = {
    code: result.tipo,
    name: getPrecedentTypeName(result.tipo),
    binding_force: getBindingForce(result.tipo),
  };

  return {
    // Quick reference citation
    citation: formatCitation(result),

    // Structured court and type info
    court: courtInfo,
    precedent_type: typeInfo,

    // Status with clear meaning
    status: {
      code: result.situacao,
      is_active: result.situacao !== "Cancelado",
      display: result.situacao === "Cancelado" ? "Cancelled" : "Active",
    },

    // Date in readable format
    last_updated: result.ultimaAtualizacao,

    // Key legal content with explanations
    legal_content: {
      thesis: result.tese
        ? {
            text: result.tese,
            explanation:
              "The binding legal principle established by this precedent",
          }
        : null,
      question: result.questao
        ? {
            text: result.questao,
            explanation: "The legal question addressed by this precedent",
          }
        : null,
      summary: result.ementa
        ? {
            text: result.ementa,
            explanation:
              "Case summary (ementa) outlining key facts and holdings",
          }
        : null,
      subject_matter: result.assunto || null,
    },

    // Full text if available (collapsed by default)
    full_text: result.texto || null,

    // Metadata for agent decision-making
    relevance_hints: {
      is_supreme_court: isSupremeCourt(result.orgao),
      is_binding_precedent: isBindingType(result.tipo),
      is_recent: isRecent(result.ultimaAtualizacao),
      is_active: result.situacao !== "Cancelado",
    },

    // Original IDs for reference
    internal_ids: {
      id: result.id,
      number: result.nr,
    },
  };
}

/**
 * Build human-readable query description
 */
function buildQueryDescription(params: Record<string, unknown>): string {
  const parts = [];

  if (params.busca_geral) parts.push(`"${params.busca_geral}"`);
  if (params.todas_palavras)
    parts.push(`all words: "${params.todas_palavras}"`);
  if (params.quaisquer_palavras)
    parts.push(`any words: "${params.quaisquer_palavras}"`);
  if (params.sem_palavras) parts.push(`excluding: "${params.sem_palavras}"`);
  if (params.trecho_exato) parts.push(`exact phrase: "${params.trecho_exato}"`);

  return parts.length > 0 ? parts.join(", ") : "all precedents";
}

/**
 * Format standard legal citation
 */
function formatCitation(result: SearchResultItem): string {
  const year = extractYear(result.ultimaAtualizacao || "");
  return `${result.orgao} - ${result.tipo} ${result.nr}${year ? ` (${year})` : ""}`;
}

/**
 * Determine court hierarchy level
 */
function getCourtHierarchy(court: CourtCode): string {
  if (["STF", "STJ", "TST", "STM"].includes(court)) return "supreme";
  if (court.startsWith("TRF") || court === "TNU") return "federal";
  if (court.startsWith("TJ")) return "state";
  if (court.startsWith("TRT")) return "labor";
  return "other";
}

/**
 * Determine binding force of precedent type
 */
function getBindingForce(type: PrecedentType): string {
  const highBinding = ["SV", "RG", "IAC", "IRDR", "RR"];
  const mediumBinding = ["SUM", "SIRDR", "CT"];

  if (highBinding.includes(type)) return "high";
  if (mediumBinding.includes(type)) return "medium";
  return "low";
}

/**
 * Check if court is supreme level
 */
function isSupremeCourt(court: CourtCode): boolean {
  return ["STF", "STJ", "TST", "STM"].includes(court);
}

/**
 * Check if precedent type is binding
 */
function isBindingType(type: PrecedentType): boolean {
  return ["SV", "RG", "IAC", "IRDR", "RR", "SUM"].includes(type);
}

/**
 * Check if precedent is recent (within 2 years)
 */
function isRecent(date?: string): boolean {
  if (!date) return false;
  const year = extractYear(date);
  if (!year) return false;
  const currentYear = new Date().getFullYear();
  return currentYear - parseInt(year) <= 2;
}

/**
 * Extract year from date string
 */
function extractYear(dateStr: string): string {
  const match = dateStr.match(/\b(20\d{2})\b/);
  return match?.[1] || "";
}

/**
 * Assess overall search quality
 */
function assessSearchQuality(
  response: SearchResponse
): Record<string, unknown> {
  const results = response.resultados || [];
  if (results.length === 0) {
    return {
      coverage: "none",
      authority_level: "none",
      recency: "none",
    };
  }

  const supremeCourtCount = results.filter((r) =>
    isSupremeCourt(r.orgao)
  ).length;
  const bindingCount = results.filter((r) => isBindingType(r.tipo)).length;
  const recentCount = results.filter((r) =>
    isRecent(r.ultimaAtualizacao)
  ).length;

  return {
    coverage:
      response.total > 50
        ? "comprehensive"
        : response.total > 10
          ? "good"
          : "limited",
    authority_level: supremeCourtCount > results.length / 2 ? "high" : "mixed",
    recency: recentCount > results.length / 2 ? "current" : "mixed",
    binding_precedents: `${bindingCount}/${results.length}`,
  };
}

/**
 * Get distribution of results by court and type
 */
function getResultDistribution(
  response: SearchResponse
): Record<string, unknown> {
  const results = response.resultados || [];

  const courtDist: Record<string, number> = {};
  const typeDist: Record<string, number> = {};

  results.forEach((r) => {
    courtDist[r.orgao] = (courtDist[r.orgao] || 0) + 1;
    typeDist[r.tipo] = (typeDist[r.tipo] || 0) + 1;
  });

  return {
    by_court: courtDist,
    by_type: typeDist,
  };
}

/**
 * Generate research hints based on results
 */
function generateResearchHints(
  response: SearchResponse,
  searchParams: Record<string, unknown>
): Record<string, unknown> {
  const results = response.resultados || [];
  const hints = [];

  // If no results, suggest broader search
  if (results.length === 0) {
    hints.push("Consider using more general search terms");
    hints.push("Try searching without court or type filters");
    hints.push("Check for alternative spellings or synonyms");
  }

  // If too many results, suggest refinement
  if (response.total > 100) {
    hints.push("Refine search with more specific terms or filters");
    hints.push("Consider filtering by court or precedent type");
    hints.push("Add date constraints if looking for recent precedents");
  }

  // If only lower courts, suggest supreme court search
  const hasSupremeCourt = results.some((r) => isSupremeCourt(r.orgao));
  if (!hasSupremeCourt && results.length > 0) {
    hints.push(
      "Consider searching supreme courts (STF, STJ) for binding precedents"
    );
  }

  // If mixed status, highlight active ones
  const hasCancelled = results.some((r) => r.situacao === "Cancelado");
  if (hasCancelled) {
    hints.push("Some results are cancelled precedents - focus on active ones");
  }

  return {
    suggestions: hints,
    next_steps: generateNextSteps(response, searchParams),
  };
}

/**
 * Generate next research steps
 */
function generateNextSteps(
  response: SearchResponse,
  searchParams: Record<string, unknown>
): string[] {
  const steps = [];

  if (response.total > 10) {
    steps.push("Use analyze_results tool to get statistical insights");
  }

  if (response.total > 0) {
    steps.push("Save this search for future reference");
  }

  if (!searchParams.orgaos) {
    steps.push("Filter by specific courts for more targeted results");
  }

  if (!searchParams.tipos) {
    steps.push("Filter by precedent types to find binding decisions");
  }

  return steps;
}

/**
 * Identify key patterns in results
 */
function identifyKeyPattern(results: SearchResultItem[]): string {
  if (results.length === 0) return "No results to analyze";

  // Check for dominant court
  const courtCounts: Record<string, number> = {};
  results.forEach((r) => {
    courtCounts[r.orgao] = (courtCounts[r.orgao] || 0) + 1;
  });

  const dominantCourt = Object.entries(courtCounts).sort(
    ([, a], [, b]) => b - a
  )[0];

  if (dominantCourt && dominantCourt[1] > results.length / 2) {
    return `Majority of results from ${getCourtName(dominantCourt[0] as CourtCode)}`;
  }

  // Check for binding precedents
  const bindingCount = results.filter((r) => isBindingType(r.tipo)).length;
  if (bindingCount > results.length / 2) {
    return "Predominantly binding precedents found";
  }

  return "Mixed results from various courts and precedent types";
}

/**
 * Format error response for agents
 */
export function formatErrorResponse(
  error: Error,
  context?: Record<string, unknown>
): Record<string, unknown> {
  const baseError = {
    error: true,
    error_type: error.name || "Unknown Error",
    message: error.message,
  };

  // Add helpful context based on error type
  if (error.message.includes("court code")) {
    return {
      ...baseError,
      suggestion: "Use get_available_courts tool to see valid court codes",
      example_codes: ["STF", "STJ", "TJSP", "TRT02"],
      action: "Verify the court code and try again",
    };
  }

  if (error.message.includes("precedent type")) {
    return {
      ...baseError,
      suggestion: "Use get_precedent_types tool to see valid type codes",
      example_codes: ["SUM", "RG", "IRDR", "SV"],
      action: "Verify the precedent type code and try again",
    };
  }

  if (error.message.includes("timeout")) {
    return {
      ...baseError,
      suggestion: "The search took too long. Try with more specific filters",
      action: "Narrow your search criteria or reduce page size",
    };
  }

  return {
    ...baseError,
    context,
    suggestion: "Check your parameters and try again",
  };
}
