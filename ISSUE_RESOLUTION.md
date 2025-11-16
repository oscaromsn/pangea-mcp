# Issue Resolution: BNP API HTTP 400 Errors

## 🎯 Problem Summary

The Pangea MCP server was failing with HTTP 400 errors when searching for legal precedents, even when providing valid `orgaos` (courts) filters. The MCP client logs showed:

```json
{
  "busca_geral": "adicional de insalubridade",
  "orgaos": ["TST", "STF", "STJ"],
  "tamanho_pagina": 10
}
```

This request was hitting the API and returning HTTP 400, indicating that **invalid requests were bypassing our validation layer**.

## 🔍 Root Cause Analysis

### Investigation Process

1. **Added comprehensive diagnostic logging** to trace data flow:
   - Handler layer (MCP → Service)
   - Service layer (Validation → API)
   - API requests and responses

2. **Created reproduction tests** to systematically test the hypothesis:
   - `data-flow-trace.test.ts` - Reproduced exact MCP scenario
   - `both-filters-hypothesis.test.ts` - Tested API constraint hypotheses

3. **Discovered the pattern**:
   - ✅ **WORKING**: Requests with BOTH `orgaos` AND `tipos`
   - ❌ **FAILING**: Requests with ONLY `orgaos` (no `tipos`)
   - ❌ **FAILING**: Requests with ONLY `tipos` (no `orgaos`)

### The Critical Discovery

The BNP API requires **BOTH** filters to be non-empty:
- `orgaos` (courts) AND
- `tipos` (precedent types)

Our validation was checking:
```typescript
if (!hasOrgaos && !hasTipos) {  // ❌ WRONG
  // Fail only if NEITHER is present
}
```

But it should have been:
```typescript
if (!hasOrgaos || !hasTipos) {  // ✅ CORRECT
  // Fail if EITHER is missing
}
```

## ✅ Solution Implemented

### 1. Fixed Validation Logic

**File**: `src/connectors/bnp/service.ts:75`

Changed from:
```typescript
if (!hasOrgaos && !hasTipos) {
  return yield* Effect.fail(
    new BnpValidationError({
      message: "BNP API requires at least one filter..."
    })
  );
}
```

To:
```typescript
if (!hasOrgaos || !hasTipos) {
  return yield* Effect.fail(
    new BnpValidationError({
      message: "BNP API requires BOTH filters: 'orgaos' AND 'tipos'..."
    })
  );
}
```

### 2. Updated Schema Documentation

**File**: `src/connectors/bnp/schema.ts:11-17`

Updated comments to reflect that BOTH filters are required.

### 3. Updated MCP Tool Definitions

**File**: `src/mcp/tools.ts`

- **search_jurisprudence**: Updated description to state "CRITICAL REQUIREMENT: BOTH 'orgaos' AND 'tipos' filters MUST be provided"
- **search_by_court**: Added required `tipos` parameter
- **search_by_type**: Added required `orgaos` parameter

### 4. Updated Handlers

**File**: `src/mcp/handlers.ts`

- Updated `search_by_court` handler to accept and pass `tipos` parameter
- Updated `search_by_type` handler to accept and pass `orgaos` parameter

### 5. Fixed Schema Field Optionality

**File**: `src/connectors/bnp/schema.ts:76`

Made `questao` field optional since some API responses don't include it:
```typescript
questao: Schema.optional(Schema.String)
```

## 🧪 Validation Results

### Hypothesis Test Results (All 4 tests passed ✅)

```
✓ Test 1 - BOTH filters: HTTP 200 SUCCESS (53 results)
✓ Test 2 - ONLY orgaos: Correctly REJECTED by validation
✓ Test 3 - ONLY tipos: Correctly REJECTED by validation
✓ Test 4 - MCP scenario with BOTH filters: HTTP 200 SUCCESS (18 results)
```

### Key Achievement

**Before fix:**
- Invalid requests hit the API → HTTP 400 error
- No clear error message explaining what was wrong
- Validation was not catching the issue

**After fix:**
- Invalid requests blocked at validation layer
- Clear error message: "BNP API requires BOTH filters: 'orgaos' (courts) AND 'tipos' (precedent types) must both be provided with non-empty values."
- No invalid requests reach the API

## 📋 Files Modified

1. **Core Logic**:
   - `src/connectors/bnp/service.ts` - Fixed validation logic
   - `src/connectors/bnp/schema.ts` - Updated documentation and made `questao` optional

2. **MCP Layer**:
   - `src/mcp/tools.ts` - Updated tool descriptions and added required parameters
   - `src/mcp/handlers.ts` - Updated handlers to handle new parameters

3. **Testing**:
   - Created `src/test/both-filters-hypothesis.test.ts` - Hypothesis validation test
   - Created `src/test/data-flow-trace.test.ts` - Data flow reproduction test

4. **Bug Fixes**:
   - `examples/bnp-example.ts` - Added optional chaining for `questao` field
   - `src/agent/handlers.ts` - Added optional chaining for `questao` field

## 🚀 Impact

### Immediate Benefits

1. **No more invalid API requests**: Validation catches issues before hitting the API
2. **Clear error messages**: Users understand exactly what's required
3. **Improved reliability**: System fails fast with actionable error messages
4. **API constraint documentation**: Clear documentation of what the API requires

### Future Benefits

1. **Better MCP client experience**: LLM clients receive clear guidance on required parameters
2. **Reduced API load**: Invalid requests never reach the external API
3. **Easier debugging**: Validation errors provide context and guidance
4. **Test coverage**: Comprehensive hypothesis tests ensure correctness

## 📖 API Constraints Documented

The BNP API has the following confirmed constraints:

1. **BOTH filters required** (discovered and fixed):
   - `orgaos` (courts) - non-empty array
   - `tipos` (precedent types) - non-empty array

2. **Empty arrays rejected**: API returns HTTP 400 for empty filter arrays

3. **Fixed page size**: API always returns 10 results per page regardless of `tamanho_pagina` parameter

4. **Unknown fields rejected**: API returns HTTP 400 if request body contains unknown fields

5. **Optional response fields**: Some fields like `questao` may be absent in responses

## 🎓 Lessons Learned

1. **Data flow tracing is critical**: Comprehensive logging at each layer revealed the exact transformation that caused the issue

2. **Test hypotheses systematically**: Creating targeted tests to validate specific hypotheses quickly identified the root cause

3. **Validation should match reality**: Our validation assumed the API needed ONE filter, but reality required BOTH

4. **Schema optionality matters**: Making fields required when the API sometimes omits them causes unnecessary failures

5. **Clear error messages are essential**: Users should know exactly what's wrong and how to fix it

## ✅ Verification Checklist

- [x] TypeScript compilation passes
- [x] Biome linting passes
- [x] Hypothesis tests pass (all 4 scenarios)
- [x] Core validation tests pass
- [x] Error messages are clear and actionable
- [x] Documentation updated
- [x] No diagnostic logging in production code
- [x] Schema optionality fixed

---

**Status**: ✅ RESOLVED

**Date**: 2025-11-09

**Resolved By**: Systematic hypothesis testing and data flow analysis
