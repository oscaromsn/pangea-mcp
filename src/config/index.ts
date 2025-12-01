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

import { Config } from "effect";

/**
 * Datajud API Configuration
 * Public API for Brazilian judicial data
 */
export const DatajudConfig = {
	apiKey: Config.redacted("DATAJUD_API_KEY"),
	baseUrl: Config.string("DATAJUD_BASE_URL").pipe(
		Config.withDefault("https://api-publica.datajud.cnj.jus.br/"),
	),
};

/**
 * Falcao API Configuration
 * Brazilian Labor Court jurisprudence API
 */
export const FalcaoConfig = {
	tokenSecret: Config.redacted("FALCAO_TOKEN_SECRET"),
	baseUrl: Config.string("FALCAO_BASE_URL").pipe(
		Config.withDefault(
			"https://jurisprudencia.jt.jus.br/jurisprudencia-nacional-backend/api",
		),
	),
};

/**
 * BNP API Configuration
 * Banco Nacional de Precedentes (National Precedent Database)
 */
export const BnpConfig = {
	baseUrl: Config.string("BNP_BASE_URL").pipe(
		Config.withDefault("https://pangeabnp.pdpj.jus.br/api/v1/"),
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
