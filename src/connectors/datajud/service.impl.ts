/**
 * Datajud Service Implementation
 * Layer that provides the DatajudService with its HTTP client dependency
 */

import { FetchHttpClient } from "@effect/platform";
import { Layer } from "effect";
import { DatajudService } from "./service";

/**
 * Live implementation of DatajudService with HttpClient dependency
 * Following the "Local Dependency Erasure" pattern by providing the FetchHttpClient locally
 */
export const DatajudServiceLive = DatajudService.Default.pipe(
  Layer.provide(FetchHttpClient.layer)
);
