/**
 * Número Processo Static Mappings
 * Court and state mappings for tribunal alias inference
 */

import { TribunalAlias } from "./models";

/**
 * State code to abbreviation mapping
 * Maps the 2-digit id_tribunal to Brazilian state abbreviations
 */
export const STATE_CODE_TO_ABBREV: Record<number, string> = {
  1: "ac", // Acre
  2: "al", // Alagoas
  3: "ap", // Amapá
  4: "am", // Amazonas
  5: "ba", // Bahia
  6: "ce", // Ceará
  7: "dft", // Distrito Federal e Territórios
  8: "es", // Espírito Santo
  9: "go", // Goiás
  10: "ma", // Maranhão
  11: "mt", // Mato Grosso
  12: "ms", // Mato Grosso do Sul
  13: "mg", // Minas Gerais
  14: "pa", // Pará
  15: "pb", // Paraíba
  16: "pr", // Paraná
  17: "pe", // Pernambuco
  18: "pi", // Piauí
  19: "rj", // Rio de Janeiro
  20: "rn", // Rio Grande do Norte
  21: "rs", // Rio Grande do Sul
  22: "ro", // Rondônia
  23: "rr", // Roraima
  24: "sc", // Santa Catarina
  25: "se", // Sergipe
  26: "sp", // São Paulo
  27: "to", // Tocantins
} as const;

/**
 * Justice segment descriptions
 * Maps id_orgao to human-readable names
 */
export const JUSTICE_SEGMENT_NAMES: Record<number, string> = {
  1: "Supremo Tribunal Federal",
  2: "Conselho Nacional de Justiça",
  3: "Superior Tribunal de Justiça",
  4: "Justiça Federal",
  5: "Justiça do Trabalho",
  6: "Justiça Eleitoral",
  7: "Justiça Militar da União",
  8: "Justiça dos Estados e do Distrito Federal e Territórios",
  9: "Justiça Militar Estadual",
} as const;

/**
 * Supported tribunal aliases in the DataJud Public API
 * This is the complete list of all available endpoints
 */
export const SUPPORTED_TRIBUNAL_ALIASES = [
  // Tribunais Superiores
  TribunalAlias("stj"),
  TribunalAlias("tst"),
  TribunalAlias("tse"),
  TribunalAlias("stm"),
  // Justiça Federal
  TribunalAlias("trf1"),
  TribunalAlias("trf2"),
  TribunalAlias("trf3"),
  TribunalAlias("trf4"),
  TribunalAlias("trf5"),
  TribunalAlias("trf6"),
  // Justiça Estadual (27 states)
  TribunalAlias("tjac"),
  TribunalAlias("tjal"),
  TribunalAlias("tjam"),
  TribunalAlias("tjap"),
  TribunalAlias("tjba"),
  TribunalAlias("tjce"),
  TribunalAlias("tjdft"),
  TribunalAlias("tjes"),
  TribunalAlias("tjgo"),
  TribunalAlias("tjma"),
  TribunalAlias("tjmg"),
  TribunalAlias("tjms"),
  TribunalAlias("tjmt"),
  TribunalAlias("tjpa"),
  TribunalAlias("tjpb"),
  TribunalAlias("tjpe"),
  TribunalAlias("tjpi"),
  TribunalAlias("tjpr"),
  TribunalAlias("tjrj"),
  TribunalAlias("tjrn"),
  TribunalAlias("tjro"),
  TribunalAlias("tjrr"),
  TribunalAlias("tjrs"),
  TribunalAlias("tjsc"),
  TribunalAlias("tjse"),
  TribunalAlias("tjsp"),
  TribunalAlias("tjto"),
  // Justiça do Trabalho (24 regions)
  TribunalAlias("trt1"),
  TribunalAlias("trt2"),
  TribunalAlias("trt3"),
  TribunalAlias("trt4"),
  TribunalAlias("trt5"),
  TribunalAlias("trt6"),
  TribunalAlias("trt7"),
  TribunalAlias("trt8"),
  TribunalAlias("trt9"),
  TribunalAlias("trt10"),
  TribunalAlias("trt11"),
  TribunalAlias("trt12"),
  TribunalAlias("trt13"),
  TribunalAlias("trt14"),
  TribunalAlias("trt15"),
  TribunalAlias("trt16"),
  TribunalAlias("trt17"),
  TribunalAlias("trt18"),
  TribunalAlias("trt19"),
  TribunalAlias("trt20"),
  TribunalAlias("trt21"),
  TribunalAlias("trt22"),
  TribunalAlias("trt23"),
  TribunalAlias("trt24"),
  // Justiça Eleitoral (27 states)
  TribunalAlias("tre-ac"),
  TribunalAlias("tre-al"),
  TribunalAlias("tre-am"),
  TribunalAlias("tre-ap"),
  TribunalAlias("tre-ba"),
  TribunalAlias("tre-ce"),
  TribunalAlias("tre-dft"),
  TribunalAlias("tre-es"),
  TribunalAlias("tre-go"),
  TribunalAlias("tre-ma"),
  TribunalAlias("tre-mg"),
  TribunalAlias("tre-ms"),
  TribunalAlias("tre-mt"),
  TribunalAlias("tre-pa"),
  TribunalAlias("tre-pb"),
  TribunalAlias("tre-pe"),
  TribunalAlias("tre-pi"),
  TribunalAlias("tre-pr"),
  TribunalAlias("tre-rj"),
  TribunalAlias("tre-rn"),
  TribunalAlias("tre-ro"),
  TribunalAlias("tre-rr"),
  TribunalAlias("tre-rs"),
  TribunalAlias("tre-sc"),
  TribunalAlias("tre-se"),
  TribunalAlias("tre-sp"),
  TribunalAlias("tre-to"),
  // Justiça Militar Estadual (3 states)
  TribunalAlias("tjmmg"),
  TribunalAlias("tjmrs"),
  TribunalAlias("tjmsp"),
] as const;

/**
 * Set of supported tribunal aliases for O(1) lookup
 * Used for runtime validation of tribunal alias strings
 */
const SUPPORTED_TRIBUNAL_ALIASES_SET = new Set(SUPPORTED_TRIBUNAL_ALIASES);

/**
 * Type guard to check if a string is a valid supported tribunal alias
 *
 * @param input - String to check
 * @returns True if input is a valid tribunal alias
 *
 * @example
 * if (isSupportedTribunalAlias("tjsp")) {
 *   // TypeScript knows it's TribunalAlias
 * }
 */
export const isSupportedTribunalAlias = (
  input: string
): input is TribunalAlias => {
  return SUPPORTED_TRIBUNAL_ALIASES_SET.has(input as TribunalAlias);
};
