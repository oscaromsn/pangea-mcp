/**
 * Falcao API Configuration
 *
 * Re-exports from centralized config for backward compatibility.
 * Secrets are loaded from environment variables via Effect Config.
 *
 * Required Environment Variables:
 * - FALCAO_TOKEN_SECRET: Token secret for authentication hash generation
 */

export { FalcaoConfig } from "../../config";
