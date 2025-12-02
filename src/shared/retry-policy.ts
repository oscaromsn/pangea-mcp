/**
 * HTTP Retry Policy
 *
 * Provides exponential backoff retry logic for HTTP requests.
 * Only retries on transient network errors (RequestError), not API errors (4xx/5xx).
 */

import { Effect, Schedule } from "effect";

/**
 * Exponential backoff schedule: 100ms → 200ms → 400ms
 * - Base delay: 100ms
 * - Factor: 2 (doubles each retry)
 * - Max retries: 3 (4 total attempts)
 *
 * Uses Schedule.intersect to stop when EITHER schedule stops:
 * - exponential provides the delay timing
 * - recurs(3) limits to 3 retry attempts
 */
export const httpRetrySchedule = Schedule.exponential("100 millis", 2).pipe(
  Schedule.intersect(Schedule.recurs(3))
);

/**
 * Type guard for RequestError (network-level failures)
 *
 * RequestError indicates a transient network issue that may succeed on retry:
 * - Connection refused
 * - DNS resolution failure
 * - Network timeout
 * - Socket hang up
 */
const isRequestError = (
  error: unknown
): error is { _tag: "RequestError"; reason: string } =>
  typeof error === "object" &&
  error !== null &&
  "_tag" in error &&
  error._tag === "RequestError";

/**
 * Apply exponential backoff retry to an effect, only for network errors.
 *
 * This helper wraps an effect with retry logic that:
 * - Retries up to 3 times on RequestError (network failures)
 * - Does NOT retry on ResponseError (4xx/5xx HTTP status codes)
 * - Does NOT retry on ParseError (schema validation failures)
 * - Uses exponential backoff: 100ms → 200ms → 400ms
 *
 * @example
 * ```typescript
 * const robustRequest = httpClient.execute(request).pipe(
 *   Effect.flatMap(HttpClientResponse.json),
 *   withNetworkRetry,
 *   Effect.catchTags({ ... })
 * );
 * ```
 */
export const withNetworkRetry = <A, E, R>(
  effect: Effect.Effect<A, E, R>
): Effect.Effect<A, E, R> =>
  effect.pipe(
    Effect.retry({
      schedule: httpRetrySchedule,
      while: (error) => isRequestError(error),
    })
  );

/**
 * Create a retry policy with custom schedule
 *
 * @param baseDelayMs - Base delay in milliseconds (default: 100)
 * @param factor - Exponential factor (default: 2)
 * @param maxRetries - Maximum number of retries (default: 3)
 */
export const createRetryPolicy = (
  baseDelayMs = 100,
  factor = 2,
  maxRetries = 3
) =>
  Schedule.exponential(`${baseDelayMs} millis`, factor).pipe(
    Schedule.intersect(Schedule.recurs(maxRetries))
  );
