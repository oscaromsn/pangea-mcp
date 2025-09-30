import { describe, expect, test } from "bun:test";
import type { SearchResponse } from "@/types";
import { formatErrorResponse, formatSearchResponse } from "../src/formatters";

describe("Interface Improvements", () => {
  test("formatSearchResponse creates agent-friendly structure", () => {
    const mockResponse: SearchResponse = {
      total: 3,
      posicao_inicial: 1,
      posicao_final: 3,
      resultados: [
        {
          id: "123",
          nr: 456,
          orgao: "STF",
          tipo: "RG",
          situacao: "Ativo",
          tese: "A responsabilidade civil é objetiva.",
          questao: "Há responsabilidade objetiva?",
          ultimaAtualizacao: "2023-05-15",
          texto: "Full text here...",
          ementa: "Summary of the case",
          assunto: "Responsabilidade Civil",
        },
        {
          id: "124",
          nr: 457,
          orgao: "STJ",
          tipo: "SUM",
          situacao: "Cancelado",
          ultimaAtualizacao: "2020-01-10",
        },
      ],
    };

    const searchParams = {
      busca_geral: "responsabilidade civil",
      pagina: 1,
    };

    const formatted = formatSearchResponse(mockResponse, searchParams, 1, 10);

    // Check summary structure
    expect(formatted.summary).toBeDefined();
    const summary = formatted.summary as Record<string, unknown>;
    expect(summary.total_found).toBe(3);
    expect(summary.search_query).toContain("responsabilidade civil");
    expect(summary.courts_represented).toBeArray();
    expect(summary.precedent_types).toBeArray();
    expect(summary.date_range).toBe("2020-2023");

    // Check pagination
    expect(formatted.pagination).toMatchObject({
      current_page: 1,
      total_pages: 1, // 3 results / 3 per page = 1 page (we have 2 results in array but total is 3)
      results_per_page: 2,
      total_results: 3,
      showing: "1-3 of 3",
    });

    // Check precedents format
    expect(formatted.precedents).toBeArray();
    const precedents = formatted.precedents as Array<Record<string, unknown>>;
    expect(precedents).toHaveLength(2);

    // Check first precedent structure
    const firstPrecedent = precedents[0];
    expect(firstPrecedent!.citation).toBe("STF - RG 456 (2023)");
    expect(firstPrecedent!.court).toMatchObject({
      code: "STF",
      name: "Supremo Tribunal Federal",
      hierarchy_level: "supreme",
    });
    expect(firstPrecedent!.precedent_type).toMatchObject({
      code: "RG",
      name: "Repercussão Geral",
      binding_force: "high",
    });
    expect(firstPrecedent!.status).toMatchObject({
      code: "Ativo",
      is_active: true,
      display: "Active",
    });

    // Check legal content structure
    const legalContent = firstPrecedent!.legal_content as Record<
      string,
      unknown
    >;
    expect(legalContent.thesis).toMatchObject({
      text: "A responsabilidade civil é objetiva.",
      explanation: "The binding legal principle established by this precedent",
    });

    // Check relevance hints
    expect(firstPrecedent!.relevance_hints).toMatchObject({
      is_supreme_court: true,
      is_binding_precedent: true,
      is_recent: true,
      is_active: true,
    });

    // Check metadata
    expect(formatted.metadata).toBeDefined();
    const metadata = formatted.metadata as Record<string, unknown>;
    expect(metadata.search_quality).toMatchObject({
      coverage: "limited",
      authority_level: "high",
      recency: "mixed",
      binding_precedents: "2/2",
    });

    // Check research hints
    expect(formatted.research_hints).toBeDefined();
  });

  test("formatErrorResponse provides actionable guidance", () => {
    const courtError = new Error("Invalid court code: SFT");
    const formatted = formatErrorResponse(courtError);

    expect(formatted.error).toBe(true);
    expect(formatted.message).toContain("court code");
    expect(formatted.suggestion).toContain("get_available_courts");
    expect(formatted.example_codes).toBeArray();
    expect(formatted.action).toBeDefined();
  });

  test("Court hierarchy provides proper categorization", () => {
    const mockResponse: SearchResponse = {
      total: 4,
      posicao_inicial: 1,
      posicao_final: 4,
      resultados: [
        { id: "1", nr: 1, orgao: "STF", tipo: "SUM", situacao: "Ativo" },
        { id: "2", nr: 2, orgao: "TRF01", tipo: "SUM", situacao: "Ativo" },
        { id: "3", nr: 3, orgao: "TJSP", tipo: "SUM", situacao: "Ativo" },
        { id: "4", nr: 4, orgao: "TRT02", tipo: "SUM", situacao: "Ativo" },
      ],
    };

    const formatted = formatSearchResponse(mockResponse, {}, 1, 10);
    const precedents = formatted.precedents as Array<Record<string, unknown>>;

    expect((precedents[0]!.court as any).hierarchy_level).toBe("supreme");
    expect((precedents[1]!.court as any).hierarchy_level).toBe("federal");
    expect((precedents[2]!.court as any).hierarchy_level).toBe("state");
    expect((precedents[3]!.court as any).hierarchy_level).toBe("labor");
  });

  test("Binding force classification works correctly", () => {
    const types = [
      { type: "SV", expected: "high" },
      { type: "RG", expected: "high" },
      { type: "SUM", expected: "medium" },
      { type: "OJ", expected: "low" },
    ];

    for (const { type, expected } of types) {
      const mockResponse: SearchResponse = {
        total: 1,
        posicao_inicial: 1,
        posicao_final: 1,
        resultados: [
          {
            id: "1",
            nr: 1,
            orgao: "STF",
            tipo: type as any,
            situacao: "Ativo",
          },
        ],
      };

      const formatted = formatSearchResponse(mockResponse, {}, 1, 10);
      const precedents = formatted.precedents as Array<Record<string, unknown>>;
      expect((precedents[0]!.precedent_type as any).binding_force).toBe(
        expected
      );
    }
  });

  test("Empty results provide helpful guidance", () => {
    const emptyResponse: SearchResponse = {
      total: 0,
      posicao_inicial: 0,
      posicao_final: 0,
      resultados: [],
    };

    const formatted = formatSearchResponse(
      emptyResponse,
      { busca_geral: "test" },
      1,
      10
    );
    const summary = formatted.summary as Record<string, unknown>;

    expect(summary.total_found).toBe(0);
    expect(summary.message).toContain("No results found");
    expect(summary.suggestion).toContain("broaden");

    const hints = formatted.research_hints as Record<string, unknown>;
    const suggestions = hints.suggestions as string[];
    expect(suggestions).toContain("Consider using more general search terms");
  });
});
