/**
 * Test HttpClient Implementation
 *
 * Provides a test-only HttpClient using FetchHttpClient with mocked fetch.
 * This ensures compatibility with Effect's HTTP client implementation.
 */

import { FetchHttpClient, HttpClient } from "@effect/platform";
import { Layer } from "effect";

/**
 * A test response configuration
 */
export interface TestResponse {
  url: string;
  method?: string;
  status?: number;
  body: unknown;
  /** Set to true to simulate a network error (RequestError) */
  networkError?: boolean;
}

/**
 * Create a test HttpClient layer using FetchHttpClient with mocked fetch
 *
 * This creates a proper HttpClient by mocking the global fetch function,
 * which ensures compatibility with Effect's HttpClient implementation.
 *
 * @param testResponses - Array of test responses to return
 * @returns Layer providing HttpClient
 */
export const createTestHttpClient = (
  testResponses: TestResponse[]
): Layer.Layer<HttpClient.HttpClient> =>
  Layer.suspend(() => {
    // Create mock fetch function
    const mockFetch = (
      input: Request | URL,
      init?: RequestInit
    ): Promise<Response> => {
      const url = input.toString();
      const method = init?.method ?? "GET";

      // Find matching test response
      const testResponse = testResponses.find(
        (resp) =>
          url.includes(resp.url) && (!resp.method || resp.method === method)
      );

      if (!testResponse) {
        return Promise.reject(
          new Error(`No test response found for ${method} ${url}`)
        );
      }

      // Simulate network error if requested
      if (testResponse.networkError) {
        return Promise.reject(new TypeError("Network timeout"));
      }

      // Create proper Response object
      const jsonBody = JSON.stringify(testResponse.body);
      return Promise.resolve(
        new Response(jsonBody, {
          status: testResponse.status ?? 200,
          statusText:
            testResponse.status === 500 ? "Internal Server Error" : "OK",
          headers: {
            "Content-Type": "application/json",
          },
        })
      );
    };

    // Install mock fetch
    globalThis.fetch = mockFetch as typeof fetch;

    // Return fresh FetchHttpClient layer
    return FetchHttpClient.layer;
  });

/**
 * Create a simple test response helper
 *
 * @param url - URL pattern to match
 * @param body - Response body
 * @param status - HTTP status code (default: 200)
 * @returns TestResponse
 */
export const testResponse = (
  url: string,
  body: unknown,
  status = 200
): TestResponse => ({
  url,
  status,
  body,
  method: "POST",
});
