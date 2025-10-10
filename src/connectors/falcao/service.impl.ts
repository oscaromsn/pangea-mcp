/**
 * Falcao Service Implementation
 * Layer that provides the Falcao Service with its HTTP client dependency
 */

import { FetchHttpClient } from "@effect/platform";
import { Layer } from "effect";
import { FalcaoService } from "./service";

/**
 * Live implementation of FalcaoService with HttpClient dependency
 * Following the "Local Dependency Erasure" pattern by providing the FetchHttpClient locally
 */
export const FalcaoServiceLive = FalcaoService.Default.pipe(
  Layer.provide(FetchHttpClient.layer)
);
