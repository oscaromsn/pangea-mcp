# BNP API Constraints Documentation

## Overview

This document describes the discovered constraints and limitations of the BNP (Banco Nacional de Precedentes) API through systematic testing.

## Critical Constraints

### 1. Filter Requirement

**Constraint**: The BNP API requires at least one non-empty filter to perform searches.

**Required Filters** (at least one must be provided):
- `orgaos[]` - Array of court codes (e.g., `["STF", "STJ"]`)
- `tipos[]` - Array of precedent type codes (e.g., `["SUM", "RG"]`)

**Validation**: This constraint is enforced at the service layer in `src/connectors/bnp/service.ts` after schema defaults are applied.

**Error Response**: Requests without filters fail with:
```json
{
  "success": false,
  "error": "BnpValidationError",
  "message": "BNP API requires at least one filter: either 'orgaos' (courts) or 'tipos' (precedent types) must be non-empty."
}
```

### 2. Empty Array Rejection

**Constraint**: The API rejects empty arrays for `orgaos` and `tipos` fields.

- ✅ **Accepted**: Field omitted entirely from JSON
- ✅ **Accepted**: Field with non-empty array `["STF"]`
- ❌ **Rejected**: Field with empty array `[]` → HTTP 400

**Implementation**: Empty arrays are removed from the request body before sending to the API.

### 3. Fixed Page Size

**Constraint**: The API always returns exactly 10 results per page (or fewer if less than 10 total results exist).

- The `tamanhoPagina` / `page_size` parameter is **NOT supported**
- Attempts to send this parameter result in HTTP 400 (unknown field error)
- Pagination is achieved using the `pagina` parameter only

**Implementation**:
- Schema does NOT include `tamanhoPagina`
- MCP tools accept `tamanho_pagina` for UX (graceful degradation) but don't send it to API
- Response always indicates `page_size: 10` regardless of request

### 4. Unknown Field Rejection

**Constraint**: The API strictly validates request fields and rejects unknown parameters with HTTP 400.

**Accepted Fields** (from OpenAPI spec):
- `buscaGeral` - General search query
- `cancelados` - Include canceled precedents (boolean)
- `ordenacao` - Sort order (enum)
- `orgaos` - Court filters (array)
- `pagina` - Page number (integer)
- `tipos` - Precedent type filters (array)
- `todasPalavras` - AND operator (string)
- `quaisquerPalavras` - OR operator (string)
- `semPalavras` - NOT operator (string)
- `trechoExato` - Exact phrase match (string)

## Implementation Details

### Schema Definition (`src/connectors/bnp/schema.ts`)

```typescript
export const PrecedentSearchFilter = Schema.Struct({
  buscaGeral: Schema.optional(Schema.String).pipe(
    Schema.withConstructorDefault(() => "")
  ),
  cancelados: Schema.optional(Schema.Boolean).pipe(
    Schema.withConstructorDefault(() => false)
  ),
  ordenacao: Schema.optional(Schema.Literal(...)).pipe(
    Schema.withConstructorDefault(() => "Textual" as const)
  ),
  orgaos: Schema.optional(Schema.Array(Schema.String)).pipe(
    Schema.withConstructorDefault(() => [])
  ),
  pagina: Schema.optional(Schema.Int.pipe(Schema.positive())).pipe(
    Schema.withConstructorDefault(() => 1)
  ),
  tipos: Schema.optional(Schema.Array(Schema.String)).pipe(
    Schema.withConstructorDefault(() => [])
  ),
  // Additional optional search fields...
});
```

### Service Validation (`src/connectors/bnp/service.ts`)

```typescript
// 1. Apply schema defaults
const validatedFilter = PrecedentSearchFilter.make(filter);

// 2. Validate filter constraint
const hasOrgaos = validatedFilter.orgaos && validatedFilter.orgaos.length > 0;
const hasTipos = validatedFilter.tipos && validatedFilter.tipos.length > 0;

if (!hasOrgaos && !hasTipos) {
  return yield* Effect.fail(new BnpValidationError({
    message: "BNP API requires at least one filter: either 'orgaos' (courts) or 'tipos' (precedent types) must be non-empty."
  }));
}

// 3. Remove empty arrays (API rejects them)
const cleanedFilter = { ...validatedFilter };
if (cleanedFilter.orgaos?.length === 0) delete cleanedFilter.orgaos;
if (cleanedFilter.tipos?.length === 0) delete cleanedFilter.tipos;
```

## Testing

### Validation Tests

Located in `src/test/schema-validation.test.ts`:

- ✅ Rejects searches without any filters
- ✅ Accepts searches with `orgaos` filter
- ✅ Accepts searches with `tipos` filter
- ✅ Accepts searches with both filters

### Constraint Documentation Tests

Located in:
- `src/test/bnp-api-constraints.test.ts` - Documents all API constraints
- `src/test/mcp-handler-flow.test.ts` - Documents parameter transformation pipeline
- `src/test/bnp-diagnostics.test.ts` - Diagnostic tools for debugging

## MCP Integration

The MCP tools properly document these constraints:

### `search_jurisprudence` Tool

```
IMPORTANT: Requires at least one filter - either 'orgaos' (courts)
or 'tipos' (precedent types) must be provided with non-empty values.
```

### `search_by_court` and `search_by_type` Tools

These specialized tools automatically satisfy the filter requirement by design.

## Error Handling

All validation errors are converted to `BnpValidationError` with clear, actionable messages that guide users to provide required filters.

## Future Considerations

1. **API Documentation**: Official API documentation may clarify if both filters are required or if one is sufficient
2. **Rate Limiting**: The API may have undocumented rate limits that cause transient failures
3. **Field Evolution**: New fields may be added to the API over time - schema should be updated accordingly

## Revision History

- **2025-11-10**: Initial documentation after systematic constraint discovery
  - Identified filter requirement
  - Documented empty array rejection
  - Confirmed fixed page size of 10
  - Documented unknown field rejection
