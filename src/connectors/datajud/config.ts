/**
 * Datajud API Configuration
 *
 * Re-exports from centralized config for backward compatibility.
 * Secrets are loaded from environment variables via Effect Config.
 *
 * Required Environment Variables:
 * - DATAJUD_API_KEY: API key for Datajud public API
 */

export { DatajudConfig } from "../../config";
