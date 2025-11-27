/**
 * BnpService Contract Tests
 *
 * These tests verify that the BnpService correctly implements its contract:
 * - Success path: Valid search returns results
 * - Error paths: Network errors, API errors, validation errors
 *
 * Following TDD best practices with @effect/vitest
 */

import { assert, describe, it } from "@effect/vitest";
import { Cause, Effect, Exit, Layer, Option } from "effect";
import {
  emptyBnpSearchResponse,
  sampleBnpFilter,
  sampleBnpPrecedent,
  sampleBnpSearchResponse,
} from "../../test/fixtures";
import {
  createTestHttpClient,
  testResponse,
} from "../../test/test-http-client";
import { BnpApiError, BnpNetworkError, BnpValidationError } from "./errors";
import { BnpService } from "./service";
import { BnpServiceLive } from "./service.impl";

describe("BnpService", () => {
  describe("searchPrecedents", () => {
    it.effect("should successfully search precedents with valid filter", () =>
      Effect.gen(function* () {
        // Arrange: Create test HTTP client with successful response
        const testHttpClient = createTestHttpClient([
          testResponse("precedentes", sampleBnpSearchResponse),
        ]);

        // Create service with test dependencies
        const TestLayer = BnpServiceLive.pipe(Layer.provide(testHttpClient));

        // Act: Search for precedents
        const result = yield* BnpService.pipe(
          Effect.flatMap((service) =>
            service.searchPrecedents(sampleBnpFilter)
          ),
          Effect.provide(TestLayer)
        );

        // Assert: Verify successful response
        assert.strictEqual(result.total, 1);
        assert.strictEqual(result.resultados.length, 1);
        assert.strictEqual(result.resultados[0]?.id, "test-id-123");
        assert.strictEqual(result.resultados[0]?.orgao, "STJ");
      })
    );

    it.effect("should return empty results when no precedents match", () =>
      Effect.gen(function* () {
        // Arrange: Test empty response (must use valid filter with both orgaos and tipos)
        const testHttpClient = createTestHttpClient([
          testResponse("precedentes", emptyBnpSearchResponse),
        ]);

        const TestLayer = BnpServiceLive.pipe(Layer.provide(testHttpClient));

        // Act: Use sampleBnpFilter which has both required filters
        const result = yield* BnpService.pipe(
          Effect.flatMap((service) =>
            service.searchPrecedents(sampleBnpFilter)
          ),
          Effect.provide(TestLayer)
        );

        // Assert
        assert.strictEqual(result.total, 0);
        assert.strictEqual(result.resultados.length, 0);
      })
    );

    it.effect(
      "should apply default values when optional fields are missing",
      () =>
        Effect.gen(function* () {
          // Arrange: Test successful response
          const testHttpClient = createTestHttpClient([
            testResponse("precedentes", sampleBnpSearchResponse),
          ]);

          const TestLayer = BnpServiceLive.pipe(Layer.provide(testHttpClient));

          // Act: Use filter with required orgaos/tipos but no optional fields
          // (pagina, cancelados, ordenacao will be set to defaults)
          const result = yield* BnpService.pipe(
            Effect.flatMap((service) =>
              service.searchPrecedents({
                buscaGeral: "test",
                orgaos: ["STJ"],
                tipos: ["SUM"],
              })
            ),
            Effect.provide(TestLayer)
          );

          // Assert: Should succeed (defaults applied internally for pagina, cancelados, etc.)
          assert.strictEqual(result.total, 1);
        })
    );

    it.effect(
      "should fail with BnpValidationError when missing required filters",
      () =>
        Effect.gen(function* () {
          // Arrange: Test that service validates required filters
          const testHttpClient = createTestHttpClient([
            testResponse("precedentes", sampleBnpSearchResponse),
          ]);

          const TestLayer = BnpServiceLive.pipe(Layer.provide(testHttpClient));

          // Act: Try to search without orgaos and tipos (API requires both)
          const exit = yield* BnpService.pipe(
            Effect.flatMap((service) =>
              service.searchPrecedents({ buscaGeral: "test" })
            ),
            Effect.provide(TestLayer),
            Effect.exit
          );

          // Assert: Should fail with BnpValidationError
          assert.isTrue(Exit.isFailure(exit));

          if (Exit.isFailure(exit)) {
            const error = Cause.failureOption(exit.cause);
            assert.isTrue(Option.isSome(error));

            if (Option.isSome(error)) {
              const failureValue = error.value;
              assert.instanceOf(failureValue, BnpValidationError);
              assert.include(
                failureValue.message,
                "BNP API requires BOTH filters"
              );
            }
          }
        })
    );

    it.effect("should fail with BnpNetworkError on network failure", () =>
      Effect.gen(function* () {
        // Arrange: Test network error
        const testHttpClient = createTestHttpClient([
          {
            url: "precedentes",
            method: "POST",
            body: {},
            networkError: true,
          },
        ]);

        const TestLayer = BnpServiceLive.pipe(Layer.provide(testHttpClient));

        // Act & Assert: Expect BnpNetworkError
        const exit = yield* BnpService.pipe(
          Effect.flatMap((service) =>
            service.searchPrecedents(sampleBnpFilter)
          ),
          Effect.provide(TestLayer),
          Effect.exit
        );

        // Verify failure
        assert.isTrue(Exit.isFailure(exit));

        if (Exit.isFailure(exit)) {
          const error = Cause.failureOption(exit.cause);
          assert.isTrue(Option.isSome(error));

          if (Option.isSome(error)) {
            const failureValue = error.value;
            assert.instanceOf(failureValue, BnpNetworkError);
            assert.include(
              failureValue.message,
              "Network error while calling BNP API"
            );
          }
        }
      })
    );

    it.effect("should fail with BnpApiError on HTTP error status", () =>
      Effect.gen(function* () {
        // Arrange: Test HTTP error (500)
        const testHttpClient = createTestHttpClient([
          testResponse("precedentes", { error: "Internal error" }, 500),
        ]);

        const TestLayer = BnpServiceLive.pipe(Layer.provide(testHttpClient));

        // Act & Assert
        const exit = yield* BnpService.pipe(
          Effect.flatMap((service) =>
            service.searchPrecedents(sampleBnpFilter)
          ),
          Effect.provide(TestLayer),
          Effect.exit
        );

        // Verify BnpApiError
        assert.isTrue(Exit.isFailure(exit));

        if (Exit.isFailure(exit)) {
          const error = Cause.failureOption(exit.cause);
          assert.isTrue(Option.isSome(error));

          if (Option.isSome(error)) {
            const failureValue = error.value;
            assert.instanceOf(failureValue, BnpApiError);
            // Type assertion after instanceof check
            if (failureValue instanceof BnpApiError) {
              assert.strictEqual(failureValue.status, 500);
            }
          }
        }
      })
    );

    it.effect(
      "should fail with BnpValidationError on invalid response schema",
      () =>
        Effect.gen(function* () {
          // Arrange: Test invalid response (missing required fields)
          const testHttpClient = createTestHttpClient([
            testResponse("precedentes", { invalid: "data" }),
          ]);

          const TestLayer = BnpServiceLive.pipe(Layer.provide(testHttpClient));

          // Act & Assert
          const exit = yield* BnpService.pipe(
            Effect.flatMap((service) =>
              service.searchPrecedents(sampleBnpFilter)
            ),
            Effect.provide(TestLayer),
            Effect.exit
          );

          // Verify BnpValidationError
          assert.isTrue(Exit.isFailure(exit));

          if (Exit.isFailure(exit)) {
            const error = Cause.failureOption(exit.cause);
            assert.isTrue(Option.isSome(error));

            if (Option.isSome(error)) {
              const failureValue = error.value;
              assert.instanceOf(failureValue, BnpValidationError);
              assert.include(
                failureValue.message,
                "Response validation failed"
              );
            }
          }
        })
    );

    it.effect(
      "should validate response with processosParadigma missing link",
      () =>
        Effect.gen(function* () {
          // Arrange: Response with processosParadigma that has numero but no link
          // This is valid per OpenAPI spec - link is optional
          const responseWithNoLink = {
            ...sampleBnpSearchResponse,
            resultados: [
              {
                ...sampleBnpPrecedent,
                processosParadigma: [{ numero: "00266050920098260053" }],
              },
            ],
          };

          const testHttpClient = createTestHttpClient([
            testResponse("precedentes", responseWithNoLink),
          ]);

          const TestLayer = BnpServiceLive.pipe(Layer.provide(testHttpClient));

          // Act: This should succeed, not fail with BnpValidationError
          const result = yield* BnpService.pipe(
            Effect.flatMap((service) =>
              service.searchPrecedents(sampleBnpFilter)
            ),
            Effect.provide(TestLayer)
          );

          // Assert: Verify successful response with processosParadigma
          assert.strictEqual(result.total, 1);
          assert.strictEqual(
            result.resultados[0]?.processosParadigma?.[0]?.numero,
            "00266050920098260053"
          );
          assert.strictEqual(
            result.resultados[0]?.processosParadigma?.[0]?.link,
            undefined
          );
        })
    );

    it.effect(
      "should validate response with processosParadigma having both numero and link",
      () =>
        Effect.gen(function* () {
          // Arrange: Response with complete processosParadigma (both fields)
          const responseWithFullData = {
            ...sampleBnpSearchResponse,
            resultados: [
              {
                ...sampleBnpPrecedent,
                processosParadigma: [
                  {
                    numero: "00266050920098260053",
                    link: "https://example.com/processo/123",
                  },
                ],
              },
            ],
          };

          const testHttpClient = createTestHttpClient([
            testResponse("precedentes", responseWithFullData),
          ]);

          const TestLayer = BnpServiceLive.pipe(Layer.provide(testHttpClient));

          // Act
          const result = yield* BnpService.pipe(
            Effect.flatMap((service) =>
              service.searchPrecedents(sampleBnpFilter)
            ),
            Effect.provide(TestLayer)
          );

          // Assert: Verify both fields are present
          assert.strictEqual(result.total, 1);
          assert.strictEqual(
            result.resultados[0]?.processosParadigma?.[0]?.numero,
            "00266050920098260053"
          );
          assert.strictEqual(
            result.resultados[0]?.processosParadigma?.[0]?.link,
            "https://example.com/processo/123"
          );
        })
    );
  });
});
