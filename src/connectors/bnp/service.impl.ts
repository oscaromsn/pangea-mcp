/**
 * BNP Service Implementation
 * Layer that provides the BNP Service with its HTTP client dependency
 */

import { FetchHttpClient } from "@effect/platform";
import { Layer } from "effect";
import { BnpService } from "./service";

/**
 * Live implementation of BnpService with HttpClient dependency
 * Following the "Local Dependency Erasure" pattern by providing the FetchHttpClient locally
 */
export const BnpServiceLive = BnpService.Default.pipe(
  Layer.provide(FetchHttpClient.layer)
);
