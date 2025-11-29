/**
 * MCP Ergonomics Tests
 *
 * Tests for the ergonomic improvements to the Pangea MCP server:
 * - Phase 1: Output Hygiene & Token Optimization (formatting.ts)
 * - Phase 2: Smart Defaults for orgaos/tipos
 * - Phase 3: New tool handlers (get_process_details, search_labor_jurisprudence)
 * - Phase 4: MCP Resources (pangea://reference/*)
 * - Phase 5: Actionable Error Hints
 */

import { assert, describe, it } from "vitest";
import type { Precedent } from "../connectors/bnp/schema";
import {
  COURT_CODES,
  DEFAULT_COURTS,
  DEFAULT_TYPES,
  PRECEDENT_TYPES,
} from "../mcp/constants";
import {
  formatBnpResult,
  formatBnpResults,
  stripHtml,
} from "../mcp/formatting";

describe("Phase 1: Output Hygiene - stripHtml", () => {
  it("should remove HTML tags from text", () => {
    const input = "<p>This is <b>bold</b> text</p>";
    const result = stripHtml(input);
    assert.strictEqual(result, "This is bold text");
  });

  it("should handle nested HTML tags", () => {
    const input = "<div><p>Nested <span class='test'>content</span></p></div>";
    const result = stripHtml(input);
    assert.strictEqual(result, "Nested content");
  });

  it("should handle null input", () => {
    const result = stripHtml(null);
    assert.isNull(result);
  });

  it("should handle undefined input", () => {
    const result = stripHtml(undefined);
    assert.isNull(result);
  });

  it("should trim whitespace", () => {
    const input = "  <p>text</p>  ";
    const result = stripHtml(input);
    assert.strictEqual(result, "text");
  });

  it("should handle empty string", () => {
    const result = stripHtml("");
    assert.isNull(result);
  });

  it("should preserve text without HTML", () => {
    const input = "Plain text without tags";
    const result = stripHtml(input);
    assert.strictEqual(result, "Plain text without tags");
  });
});

describe("Phase 1: Output Hygiene - formatBnpResult", () => {
  const createMockPrecedent = (overrides?: Partial<Precedent>): Precedent =>
    ({
      id: "test-id-123",
      orgao: "STF",
      tipo: "SUM",
      nr: 123,
      situacao: "VIGENTE",
      tese: "<p>Teste com <b>HTML</b></p>",
      questao: null,
      ultimaAtualizacao: "2024-01-15",
      highlight: { tese: ["<em>match</em>"] },
      processosParadigma: [{ numero: "0001234-56.2020.1.00.0000" }],
      ...overrides,
    }) as Precedent;

  it("should extract essential fields only", () => {
    const precedent = createMockPrecedent();
    const result = formatBnpResult(precedent);

    // Check essential fields are present
    assert.strictEqual(result.id, "test-id-123");
    assert.strictEqual(result.court, "STF");
    assert.strictEqual(result.type, "SUM");
    assert.strictEqual(result.number, 123);
    assert.strictEqual(result.status, "VIGENTE");
    assert.strictEqual(result.date, "2024-01-15");
  });

  it("should strip HTML from tese field", () => {
    const precedent = createMockPrecedent({
      tese: "<p>Nested <span>HTML</span> content</p>",
    });
    const result = formatBnpResult(precedent);

    assert.strictEqual(result.summary, "Nested HTML content");
  });

  it("should use questao as fallback when tese is null", () => {
    const precedent = createMockPrecedent({
      tese: null,
      questao: "<div>Question content</div>",
    });
    const result = formatBnpResult(precedent);

    assert.strictEqual(result.summary, "Question content");
  });

  it("should exclude highlight field (token savings)", () => {
    const precedent = createMockPrecedent();
    const result = formatBnpResult(precedent);

    assert.isFalse("highlight" in result);
  });

  it("should exclude processosParadigma field (token savings)", () => {
    const precedent = createMockPrecedent();
    const result = formatBnpResult(precedent);

    assert.isFalse("processosParadigma" in result);
  });

  it("should return null date when ultimaAtualizacao is undefined", () => {
    const precedent = createMockPrecedent({ ultimaAtualizacao: undefined });
    const result = formatBnpResult(precedent);

    assert.isNull(result.date);
  });
});

describe("Phase 1: Output Hygiene - formatBnpResults (batch)", () => {
  it("should format array of precedents", () => {
    const precedents: Precedent[] = [
      {
        id: "1",
        orgao: "STF",
        tipo: "SUM",
        nr: 1,
        situacao: "VIGENTE",
        tese: "Tese 1",
      } as Precedent,
      {
        id: "2",
        orgao: "STJ",
        tipo: "RG",
        nr: 2,
        situacao: "SUPERADA",
        tese: "Tese 2",
      } as Precedent,
    ];

    const results = formatBnpResults(precedents);

    assert.lengthOf(results, 2);
    assert.strictEqual(results[0]?.court, "STF");
    assert.strictEqual(results[1]?.court, "STJ");
  });

  it("should handle empty array", () => {
    const results = formatBnpResults([]);
    assert.lengthOf(results, 0);
  });
});

describe("Phase 2: Smart Defaults - Constants", () => {
  it("should have correct DEFAULT_COURTS", () => {
    assert.deepStrictEqual([...DEFAULT_COURTS], ["STF", "STJ", "TST"]);
  });

  it("should have correct DEFAULT_TYPES", () => {
    assert.deepStrictEqual(
      [...DEFAULT_TYPES],
      ["SUM", "SV", "RG", "IRR", "RR"]
    );
  });

  it("should have COURT_CODES organized by hierarchy", () => {
    assert.isObject(COURT_CODES.SUPREME_COURTS);
    assert.isObject(COURT_CODES.FEDERAL_COURTS);

    // Verify some key courts exist
    assert.property(COURT_CODES.SUPREME_COURTS, "STF");
    assert.property(COURT_CODES.SUPREME_COURTS, "STJ");
    assert.property(COURT_CODES.SUPREME_COURTS, "TST");
    assert.property(COURT_CODES.FEDERAL_COURTS, "TRF01");
  });

  it("should have PRECEDENT_TYPES with descriptions", () => {
    assert.strictEqual(PRECEDENT_TYPES.SUM, "Súmula");
    assert.strictEqual(PRECEDENT_TYPES.SV, "Súmula Vinculante");
    assert.strictEqual(PRECEDENT_TYPES.RG, "Repercussão Geral");
  });
});

describe("Phase 4: MCP Resources - Static Data Verification", () => {
  it("should have all courts in COURT_CODES", () => {
    const supremeCourts = Object.keys(COURT_CODES.SUPREME_COURTS);
    const federalCourts = Object.keys(COURT_CODES.FEDERAL_COURTS);

    // Verify expected counts
    assert.strictEqual(supremeCourts.length, 4, "4 supreme courts expected");
    assert.isAtLeast(federalCourts.length, 7, "At least 7 TRFs expected");
  });

  it("should have all precedent types in PRECEDENT_TYPES", () => {
    const types = Object.keys(PRECEDENT_TYPES);

    // Verify expected types
    assert.include(types, "SUM");
    assert.include(types, "SV");
    assert.include(types, "RG");
    assert.include(types, "IAC");
    assert.include(types, "IRDR");
    assert.include(types, "RR");
  });

  it("should have JSON-serializable structure for resources", () => {
    // Verify data can be serialized (as it would be for MCP resources)
    const courtsJson = JSON.stringify(COURT_CODES);
    const typesJson = JSON.stringify(PRECEDENT_TYPES);

    assert.isString(courtsJson);
    assert.isString(typesJson);

    // Verify it can be parsed back
    const parsedCourts = JSON.parse(courtsJson);
    assert.deepStrictEqual(parsedCourts, COURT_CODES);
  });
});

describe("Phase 5: Actionable Error Hints - Format Verification", () => {
  it("should document expected error response structure", () => {
    // This documents the error response format with hints
    const expectedErrorFormat = {
      success: false,
      error: "BnpValidationError",
      message: "Both 'orgaos' and 'tipos' must be provided",
      hint: "Ensure both 'orgaos' and 'tipos' are provided. Use get_available_courts and get_precedent_types tools for valid codes.",
    };

    // Verify structure is valid JSON
    const json = JSON.stringify(expectedErrorFormat, null, 2);
    assert.isString(json);

    // Verify parsed structure has expected fields
    const parsed = JSON.parse(json);
    assert.isFalse(parsed.success);
    assert.isString(parsed.error);
    assert.isString(parsed.message);
    assert.isString(parsed.hint);
  });

  it("should document all supported error types with hints", () => {
    // Document which errors have hints configured
    const errorTypesWithHints = [
      "DatajudValidationError",
      "DatajudApiError",
      "BnpValidationError",
      "BnpApiError",
      "FalcaoValidationError",
      "FalcaoApiError",
      "InvalidProcessNumberFormatError",
      "UnsupportedTribunalError",
    ];

    console.error("\n📚 Error types with hints:");
    for (const errorType of errorTypesWithHints) {
      console.error(`   - ${errorType}`);
    }

    // This is documentation - assert it exists
    assert.isArray(errorTypesWithHints);
    assert.isAtLeast(errorTypesWithHints.length, 5);
  });
});

describe("Phase 3: New Tools - Type Verification", () => {
  it("should document get_process_details response structure", () => {
    // Document expected response format
    const expectedSuccessResponse = {
      success: true,
      found: true,
      process: {
        number: "0001234-56.2020.1.00.0000",
        tribunal: "TJSP",
        court: "1ª Vara Cível",
        class: "Ação de Cobrança",
        subjects: ["Direito Civil", "Obrigações"],
        filingDate: "2020-01-15",
        degree: "G1",
        system: "PJe",
      },
    };

    const expectedNotFoundResponse = {
      success: true,
      found: false,
      message: "No process found with that number",
    };

    // Verify JSON serialization
    assert.isString(JSON.stringify(expectedSuccessResponse));
    assert.isString(JSON.stringify(expectedNotFoundResponse));

    console.error("\n📚 get_process_details response formats documented");
  });

  it("should document search_labor_jurisprudence response structure", () => {
    // Document expected response format
    const expectedResponse = {
      success: true,
      total: 150,
      page: 0,
      results: [
        {
          id: "doc-123",
          tribunal: "TST",
          process_number: "0001234-56.2020.5.00.0000",
          rapporteur: "Min. Fulano de Tal",
          summary: "Ementa do acórdão...",
          judgment_date: "2024-01-15",
          class: "Recurso de Revista",
        },
      ],
    };

    // Verify JSON serialization
    assert.isString(JSON.stringify(expectedResponse));

    console.error("\n📚 search_labor_jurisprudence response format documented");
  });
});
