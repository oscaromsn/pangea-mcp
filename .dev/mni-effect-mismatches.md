# Critical Schema Issues - Deep Inspection Report

## 🔴 Critical Type Safety Issues

### 1. **Unsafe `any` Types Defeat Effect's Purpose**

Multiple recursive schemas use `any`, breaking type inference:

```typescript
// ❌ CURRENT (Effect Schema)
const PessoaSchema: Schema.Schema<any, any, never> = Schema.Struct({...})
const ParteSchema: Schema.Schema<any, any, never> = Schema.Struct({...})
const MovimentacaoProcessualSchema: Schema.Schema<any, any, never> = Schema.Struct({...})
```

**Impact**: Eliminates compile-time safety, allows invalid data to pass type checking.

**Fix**: Use proper recursive schema pattern:
```typescript
// ✅ CORRECT
interface Pessoa extends Schema.Schema.Type<typeof PessoaSchema> {}
const PessoaSchema: Schema.Schema<Pessoa> = Schema.Struct({
  pessoaVinculada: Schema.optional(Schema.suspend((): Schema.Schema<Pessoa> => PessoaSchema))
});
```

---

## 🔴 Critical Data Validation Issues

### 2. **Education Level Uses Pattern Instead of Literal Enum**

```xml
<!-- XSD: Enumeration -->
<simpleType name="tipoNivelEscolaridade">
  <restriction base="string">
    <enumeration value="1"/>
    <enumeration value="2"/>
    ...<enumeration value="7"/>
  </restriction>
</simpleType>
```

```typescript
// ❌ CURRENT (Effect Schema) - Allows invalid values like "17" or "12"
escolaridade: Schema.optional(
  Schema.String.pipe(
    Schema.pattern(/^[1-7]$/),
    Schema.annotations({ description: "Education level (1-7)" })
  )
)
```

**Vulnerability**: Pattern `/^[1-7]$/` would match "1", "2", but also allows regex-level issues.

**Fix**:
```typescript
// ✅ CORRECT
const TipoNivelEscolaridade = Schema.Literal("1", "2", "3", "4", "5", "6", "7");
escolaridade: Schema.optional(TipoNivelEscolaridade)
```

---

### 3. **Base64 Fields Have No Validation**

```typescript
// ❌ CURRENT - Accepts ANY string
conteudo: Schema.optional(
  Schema.String.pipe(
    Schema.annotations({ description: "Base64 encoded binary content" })
  )
)
```

**Impact**: Invalid base64 strings pass validation, causing runtime errors during decoding.

**Fix**:
```typescript
// ✅ CORRECT
const Base64String = Schema.String.pipe(
  Schema.pattern(/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/),
  Schema.annotations({
    identifier: "Base64String",
    title: "Base64 Encoded String",
    message: () => "Must be valid base64"
  })
);

conteudo: Schema.optional(Base64String)
```

---

### 4. **Missing Default Values**

XSD defines several defaults that are lost in translation:

```xml
<!-- XSD -->
<element name="pais" minOccurs="0" maxOccurs="1" default="BR">
<element name="encoding" minOccurs="0" maxOccurs="1" default="UTF-8">
<element name="nivelSigilo" type="int" minOccurs="0" maxOccurs="1" default="0">
<element name="processoFisico" type="boolean" minOccurs="0" maxOccurs="1" default="false">
```

```typescript
// ❌ CURRENT - No defaults
pais: Schema.optional(Schema.String.pipe(Schema.pattern(/^[A-Za-z]{2}$/)))
encoding: Schema.optional(Schema.String)
nivelSigilo: Schema.optional(Schema.Int.pipe(Schema.between(0, 5)))
processoFisico: Schema.optional(Schema.Boolean)
```

**Impact**: Consumers must manually apply defaults; behavior differs from XSD-based systems.

**Fix**:
```typescript
// ✅ CORRECT
pais: Schema.String.pipe(
  Schema.pattern(/^[A-Za-z]{2}$/),
  Schema.propertySignature,
  Schema.withDefault(() => "BR")
)

encoding: Schema.String.pipe(
  Schema.propertySignature,
  Schema.withDefault(() => "UTF-8")
)

nivelSigilo: Schema.Int.pipe(
  Schema.between(0, 5),
  Schema.propertySignature,
  Schema.withDefault(() => 0)
)
```

---

## 🟡 Data Integrity Issues

### 5. **Duplicate Field: `qualificacaoPessoa` Appears Twice**

```xml
<!-- XSD: Field appears in BOTH PessoaSimples AND Pessoa -->
<complexType name="tipoPessoaSimples">
  <element name="qualificacaoPessoa".../>
</complexType>

<complexType name="tipoPessoa">
  <element name="dadosBasicos" type="cnj:tipoPessoaSimples"/>
  <!-- ... -->
  <element name="qualificacaoPessoa".../>  <!-- DUPLICATE! -->
</complexType>
```

**Analysis**: This is a **data model flaw in the XSD itself**. The Effect schema correctly mirrors this redundancy, but it's semantically questionable.

**Recommendation**:
- If this is a CNJ standard, preserve it for compatibility
- Add validation that both values must match:

```typescript
const PessoaSchema = Schema.Struct({
  dadosBasicos: PessoaSimples,
  qualificacaoPessoa: ModalidadeQualificacaoPessoa,
  // ...
}).pipe(
  Schema.filter((data) =>
    data.dadosBasicos.qualificacaoPessoa === data.qualificacaoPessoa
      ? undefined
      : "qualificacaoPessoa must match dadosBasicos.qualificacaoPessoa"
  )
);
```

---

### 6. **DRY Violation: `nivelSigilo` Repeated Everywhere**

`nivelSigilo` is defined inline 10+ times:

```typescript
// ❌ CURRENT - Repeated everywhere
nivelSigilo: Schema.optional(Schema.Int.pipe(Schema.between(0, 5)))
```

**Impact**:
- Changes require updating multiple locations
- Inconsistent error messages
- No semantic identifier

**Fix**:
```typescript
// ✅ CORRECT - Define once
const TipoNivelSigilo = Schema.Int.pipe(
  Schema.between(0, 5),
  Schema.annotations({
    identifier: "TipoNivelSigilo",
    title: "Privacy Level",
    description: "0=public, 1=judicial_secrecy, 2=minimum, 3=medium, 4=intense, 5=absolute",
    message: () => "Privacy level must be between 0 (public) and 5 (absolute secrecy)"
  })
);

// Reuse everywhere
nivelSigilo: Schema.optional(TipoNivelSigilo)
```

Same issue with: `Schema.Int.pipe(Schema.positive())` for `classeProcessual`, `codigoNacional`, etc.

---

## 🟡 Semantic Mismatches

### 7. **Missing Inline Anonymous Type**

XSD defines inline anonymous simpleTypes:

```xml
<element name="prazo" minOccurs="0" maxOccurs="1">
  <simpleType>
    <restriction base="int">
      <minInclusive value="1"/>
    </restriction>
  </simpleType>
</element>
```

Effect uses:
```typescript
// ❌ CURRENT - Wrong! Allows 0 or negative
prazo: Schema.optional(Schema.Int)
```

**Fix**:
```typescript
// ✅ CORRECT
prazo: Schema.optional(Schema.Int.pipe(Schema.positive()))
```

Same issue in `AvisoComunicacaoPendente`.

---

### 8. **Pattern Regex Missing Anchors in XSD Context**

XSD patterns are **implicitly anchored** (match entire string). Effect correctly adds `^...$`, but one pattern is questionable:

```typescript
// CEP validation
Schema.pattern(/^\d{8}$/)  // ✅ Correct
```

But country code allows case-insensitive:
```typescript
// ❌ CURRENT
Schema.pattern(/^[A-Za-z]{2}$/)  // XSD: [A-Za-z]{2}
```

**Issue**: ISO 3166-1 alpha-2 codes are **uppercase only** (BR, not br).

**Fix**:
```typescript
// ✅ CORRECT
const CountryCode = Schema.String.pipe(
  Schema.pattern(/^[A-Z]{2}$/),
  Schema.annotations({
    identifier: "CountryCode",
    title: "ISO 3166-1 Alpha-2 Country Code",
    description: "Two uppercase letters (e.g., BR, US)",
    examples: ["BR", "US", "PT"]
  })
);
```

---

## 🟡 Cardinality & Optionality Issues

### 9. **Missing `minItems` Constraint**

Some XSD elements with `minOccurs="1" maxOccurs="unbounded"` lack enforcement:

```xml
<!-- XSD: At least one message required -->
<element name="mensagens" type="cnj:tipoMensagemResposta" minOccurs="1" maxOccurs="unbounded"/>
```

```typescript
// ✅ CURRENT - Correctly enforced
mensagens: Schema.Array(MensagemResposta).pipe(Schema.minItems(1))
```

But check **every** `minOccurs="1" maxOccurs="unbounded"`:

- ✅ `Recibo.mensagens` - enforced
- ✅ `CabecalhoProcessual.assunto` - enforced
- ✅ `PoloProcessual.parte` - enforced
- ❓ **Check others systematically**

---

### 10. **Optional Fields in Wrong Places**

`RepresentanteProcessual` has `inscricao` as optional:

```xml
<attribute name="inscricao" type="cnj:tipoCadastroOAB" use="optional">
```

```typescript
// ✅ CURRENT - Correct
inscricao: Schema.optional(CadastroOAB)
```

But `numeroDocumentoPrincipal` is also optional:

```xml
<attribute name="numeroDocumentoPrincipal" type="string" use="optional">
```

**Semantic Issue**: For a representative, **at least one identifier** should be required (OAB or CPF/CNPJ).

**Recommendation**: Add business rule validation:
```typescript
class RepresentanteProcessual extends Schema.Class<RepresentanteProcessual>(
  "RepresentanteProcessual"
)(
  Schema.Struct({
    inscricao: Schema.optional(CadastroOAB),
    numeroDocumentoPrincipal: Schema.optional(Schema.String),
    // ...
  }).pipe(
    Schema.filter((data) =>
      data.inscricao || data.numeroDocumentoPrincipal
        ? undefined
        : "Must provide either 'inscricao' or 'numeroDocumentoPrincipal'"
    )
  )
) {}
```

---

## 🟢 Minor Issues

### 11. **Inconsistent Naming: Schema Suffix**

```typescript
// Inconsistent
const NumeroUnico = Schema.String...  // No suffix
const PessoaSchema = Schema.Struct... // Has suffix
const Pessoa = PessoaSchema;          // Alias
```

**Recommendation**: Consistent naming convention:
```typescript
// Option A: PascalCase for schemas (match XSD type names)
const NumeroUnico = ...
const Pessoa = ...
const Parte = ...

// Option B: Suffix all schemas
const NumeroUnicoSchema = ...
const PessoaSchema = ...
```

---

### 12. **Missing Documentation from XSD**

XSD has extensive `<documentation>` tags that are lost:

```xml
<annotation>
  <documentation>
Número do documento principal da pessoa individualizada, devendo ser utilizado
o RIC ou o CPF para pessoas físicas, nessa ordem, ou o CNPJ para pessoas jurídicas.
  </documentation>
</annotation>
```

Effect schema should use `description` in annotations:

```typescript
// ✅ ADD
numeroDocumentoPrincipal: Schema.optional(CadastroIdentificador).pipe(
  Schema.annotations({
    description: "Main document number: RIC or CPF for individuals (in that order), or CNPJ for legal entities",
    title: "Main Document Number"
  })
)
```

---

## Summary of Critical Fixes Needed

| Priority | Issue | Impact | LOE |
|----------|-------|--------|-----|
| 🔴 Critical | Replace `any` with proper recursive types | Type safety broken | High |
| 🔴 Critical | Add base64 validation | Runtime errors | Low |
| 🔴 Critical | Fix education level enum | Invalid data accepted | Low |
| 🔴 Critical | Add missing `positive()` constraint on `prazo` | Invalid data accepted | Low |
| 🟡 High | Add default values | Behavior mismatch with XSD | Medium |
| 🟡 High | Extract repeated `nivelSigilo` definition | DRY violation, maintenance burden | Medium |
| 🟡 High | Fix country code to uppercase only | Invalid ISO codes accepted | Low |
| 🟡 Medium | Add XOR validation for representative IDs | Business rule not enforced | Low |
| 🟡 Medium | Add duplicate field validation for `qualificacaoPessoa` | Data inconsistency possible | Low |
| 🟢 Low | Add documentation from XSD | Poor DX | High |
| 🟢 Low | Consistent naming convention | Code clarity | Low |

The most critical issues are the `any` types and missing validation constraints. These must be fixed before production use.
