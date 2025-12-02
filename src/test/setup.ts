/**
 * Vitest Setup File
 *
 * Loads environment variables from .env file before tests run.
 * This ensures Effect Config can read the required secrets.
 */

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

// Load .env file manually (Bun doesn't auto-load in vitest context)
const envPath = resolve(import.meta.dirname, "../../.env");

if (existsSync(envPath)) {
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    // Skip comments and empty lines
    if (!trimmed || trimmed.startsWith("#")) continue;

    const [key, ...valueParts] = trimmed.split("=");
    const value = valueParts.join("="); // Handle values with = in them
    if (key && value && !process.env[key]) {
      process.env[key] = value;
    }
  }
}
