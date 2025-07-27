# Pangea MCP Tool Interface Improvements

## Current vs Improved Tool Descriptions

### 1. search_jurisprudence
**Current**: "Search for jurisprudence in the Pangea legal database. Returns legal cases matching search criteria."

**Improved**: "Search Brazilian legal precedents and court decisions using flexible text queries and boolean operators. Use this for comprehensive jurisprudence research when you need to explore legal topics broadly."

**Key improvements**:
- Clarifies it's Brazilian jurisprudence
- Mentions boolean operators capability
- Provides usage guidance

### 2. search_by_court
**Current**: "Search jurisprudence filtered by specific courts or tribunals"

**Improved**: "Find legal precedents from specific Brazilian courts (e.g., Supreme Courts like STF/STJ, Federal Courts, State Courts, or Labor Courts). Use when you need decisions from particular judicial authorities or jurisdictions."

**Key improvements**:
- Explicitly mentions Brazilian courts
- Provides examples of court types
- Clarifies when to use this tool

### 3. search_by_type
**Current**: "Search jurisprudence filtered by precedent types"

**Improved**: "Search for specific types of binding legal precedents (Súmulas, Repercussão Geral, IRDR, etc.). Use when researching established legal principles, binding precedents, or standardized court positions."

**Key improvements**:
- Explains what precedent types are
- Provides examples
- Clarifies the binding nature

### 4. get_available_courts
**Current**: "Get list of available court codes for filtering searches"

**Improved**: "Discover all Brazilian courts organized by hierarchy (Supreme, Federal, State, Labor). Returns court codes with full names and jurisdictions. Essential for understanding which courts to search."

**Key improvements**:
- Mentions organization by hierarchy
- Explains what's returned
- Positions as essential reference

### 5. get_precedent_types
**Current**: "Get list of available precedent type codes for filtering searches"

**Improved**: "List all types of legal precedents in the Brazilian system with their codes and meanings (e.g., SUM=Súmula, RG=Repercussão Geral). Essential reference for understanding precedent hierarchy and binding force."

**Key improvements**:
- Explains the purpose
- Provides examples
- Mentions precedent hierarchy

### 6. save_search
**Current**: "Save a search query and its results for later reference"

**Improved**: "Preserve important search results and parameters for future reference during your research session. Useful for complex research involving multiple queries or when building legal arguments."

**Key improvements**:
- Clarifies the session context
- Explains when it's useful

### 7. analyze_results
**Current**: "Analyze search results to extract key insights and statistics"

**Improved**: "Generate statistical analysis of search results including court distribution, precedent types, temporal patterns, and legal status. Helps identify trends and patterns in jurisprudence."

**Key improvements**:
- Specifies what analysis is provided
- Mentions pattern identification

## Enhanced Parameter Descriptions

### Boolean Search Parameters (search_jurisprudence)

**busca_geral**:
- Current: "General search term for broad jurisprudence search"
- Improved: "Primary search query - searches across all text fields including case summaries, legal thesis, and full text. Supports boolean operators (AND, OR, NOT)."

**todas_palavras**:
- Current: "All these words must be present in results"
- Improved: "AND operator - all words listed here must appear in the results. Example: 'dano moral consumidor' finds cases with ALL three terms."

**quaisquer_palavras**:
- Current: "Any of these words should be present"
- Improved: "OR operator - results must contain at least one of these words. Example: 'trabalhista celetista estatutário' finds cases with ANY of these terms."

**sem_palavras**:
- Current: "Exclude results containing these words"
- Improved: "NOT operator - excludes results containing these words. Example: 'criminal' excludes criminal law cases from results."

**trecho_exato**:
- Current: "Exact phrase to search for"
- Improved: "Exact phrase match - finds this exact sequence of words. Use quotes for precision. Example: 'dano moral in re ipsa'."

## Response Format Improvements

### Current Format Issues:
1. Raw JSON dumps are hard for agents to parse
2. Portuguese field names without explanation
3. No summary or highlights
4. Missing relevance indicators

### Improved Response Structure:
```typescript
{
  // Executive summary for agents
  "summary": {
    "total_found": 156,
    "search_query": "environmental liability",
    "courts_represented": ["STF", "STJ", "TJSP"],
    "date_range": "2019-2024",
    "key_finding": "Majority establish strict liability for environmental damage"
  },
  
  // Pagination with clear navigation
  "pagination": {
    "current_page": 1,
    "total_pages": 16,
    "results_per_page": 10,
    "showing_results": "1-10 of 156"
  },
  
  // Main results with enhanced structure
  "precedents": [
    {
      "citation": "STF - RE 123456 - Min. Silva - 2023",
      "court": {
        "code": "STF",
        "name": "Supreme Federal Court",
        "hierarchy": "supreme"
      },
      "type": {
        "code": "RG",
        "name": "Repercussão Geral",
        "binding_force": "high"
      },
      "status": "active", // vs "cancelled"
      "date": "2023-05-15",
      
      // Key legal content
      "legal_thesis": "Environmental damage creates objective liability regardless of fault...",
      "summary": "Established that companies are strictly liable for environmental damage...",
      "key_terms": ["environmental law", "strict liability", "objective responsibility"],
      
      // Full content available but collapsed
      "full_text": "...",
      
      // Metadata for agent decision-making
      "relevance_hints": {
        "is_binding": true,
        "is_recent": true,
        "from_supreme_court": true
      }
    }
  ],
  
  // Analysis hints
  "research_hints": {
    "dominant_position": "Courts favor strict liability",
    "recent_trend": "Increasing environmental protection",
    "consider_also": ["Search state courts for local applications", "Check for dissenting opinions"]
  }
}
```

## Error Message Improvements

### Current Issues:
- Generic "Invalid search parameters"
- No guidance on fixing errors
- Technical Zod validation errors exposed

### Improved Error Responses:
```typescript
{
  "error": "Invalid court code",
  "message": "The court code 'SFT' is not recognized.",
  "suggestion": "Did you mean 'STF' (Supremo Tribunal Federal)?",
  "action": "Use get_available_courts tool to see all valid court codes",
  "example": "Valid codes include: STF, STJ, TST, TJSP, TRT02..."
}
```

## Tool Naming Considerations

While the current names are functional, we could consider more action-oriented alternatives:
- `search_jurisprudence` → keep (clear and standard)
- `search_by_court` → keep (clear filter)
- `search_by_type` → keep (clear filter)
- `get_available_courts` → `list_brazilian_courts`
- `get_precedent_types` → `list_precedent_types`
- `save_search` → keep
- `analyze_results` → `analyze_search_results`

However, changing tool names would break compatibility, so we'll focus on improving descriptions and responses instead.