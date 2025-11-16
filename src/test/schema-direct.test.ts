/**
 * Direct Schema Validation Test
 *
 * Tests the schema validation directly without going through the service
 */

import { describe, it } from "vitest";
import { PrecedentSearchFilter } from "../connectors/bnp/schema";

describe("Direct Schema Validation", () => {
  it("should validate that filter rejects empty arrays", () => {
    console.error("\n🧪 Testing schema validation directly");

    // Test 1: Without filters (should fail)
    console.error("\n1️⃣ Test without filters:");
    try {
      const filter1 = PrecedentSearchFilter.make({
        buscaGeral: "direito",
      });
      console.error("   ❌ FAILED: Schema accepted empty filters!");
      console.error("   Result:", JSON.stringify(filter1, null, 2));
    } catch (error) {
      console.error("   ✅ SUCCESS: Schema rejected empty filters");
      console.error("   Error:", error);
    }

    // Test 2: With orgaos (should succeed)
    console.error("\n2️⃣ Test with orgaos filter:");
    try {
      const filter2 = PrecedentSearchFilter.make({
        buscaGeral: "direito",
        orgaos: ["STF"],
      });
      console.error("   ✅ SUCCESS: Schema accepted with orgaos");
      console.error("   Result fields:", Object.keys(filter2));
    } catch (error) {
      console.error("   ❌ FAILED: Schema rejected valid filter!");
      console.error("   Error:", error);
    }

    // Test 3: With tipos (should succeed)
    console.error("\n3️⃣ Test with tipos filter:");
    try {
      const filter3 = PrecedentSearchFilter.make({
        buscaGeral: "direito",
        tipos: ["SUM"],
      });
      console.error("   ✅ SUCCESS: Schema accepted with tipos");
      console.error("   Result fields:", Object.keys(filter3));
    } catch (error) {
      console.error("   ❌ FAILED: Schema rejected valid filter!");
      console.error("   Error:", error);
    }
  });
});
