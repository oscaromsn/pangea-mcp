/**
 * Centralized Application Configuration
 *
 * Uses Effect's Config system for type-safe, redactable configuration.
 * Secrets are loaded from environment variables and automatically redacted in logs.
 *
 * Environment Variables:
 * - DATAJUD_API_KEY: API key for Datajud public API (required)
 * - FALCAO_TOKEN_SECRET: Token secret for Falcao API authentication (required)
 * - DATAJUD_BASE_URL: Override Datajud API base URL (optional)
 * - FALCAO_BASE_URL: Override Falcao API base URL (optional)
 * - BNP_BASE_URL: Override BNP API base URL (optional)
 */

import { Config, Redacted } from "effect";

/**
 * Datajud API Configuration
 * Public API for Brazilian judicial data
 *
 * Note: The API key has a default value (public CNJ API key) for zero-config startup.
 * Override via DATAJUD_API_KEY env var for custom deployments.
 */
export const DatajudConfig = {
  apiKey: Config.redacted("DATAJUD_API_KEY").pipe(
    Config.withDefault(
      Redacted.make(
        "cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw=="
      )
    )
  ),
  baseUrl: Config.string("DATAJUD_BASE_URL").pipe(
    Config.withDefault("https://api-publica.datajud.cnj.jus.br/")
  ),
};

/**
 * Falcao API Configuration
 * Brazilian Labor Court jurisprudence API
 *
 * Note: The token secret has a default value (known public token) for zero-config startup.
 * Override via FALCAO_TOKEN_SECRET env var for custom deployments.
 */
export const FalcaoConfig = {
  tokenSecret: Config.redacted("FALCAO_TOKEN_SECRET").pipe(
    Config.withDefault(Redacted.make("T9!juris#F4LKN"))
  ),
  baseUrl: Config.string("FALCAO_BASE_URL").pipe(
    Config.withDefault(
      "https://jurisprudencia.jt.jus.br/jurisprudencia-nacional-backend/api"
    )
  ),
};

/**
 * BNP API Configuration
 * Banco Nacional de Precedentes (National Precedent Database)
 */
export const BnpConfig = {
  baseUrl: Config.string("BNP_BASE_URL").pipe(
    Config.withDefault("https://pangeabnp.pdpj.jus.br/api/v1/")
  ),
};

/**
 * Unified Application Configuration
 * Access all connector configs from a single export
 */
export const AppConfig = {
  datajud: DatajudConfig,
  falcao: FalcaoConfig,
  bnp: BnpConfig,
};
