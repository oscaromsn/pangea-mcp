import { Schema } from "effect";

// =================================================================
// 1. Primitive and Utility Types (Based on XSD patterns)
// =================================================================

/**
 * Schema for Brazilian Cadastro Identificador (CPF or CNPJ).
 * Must be 11 digits (CPF) or 14 digits (CNPJ).
 * Matches the pattern: (\d{11})|(\d{14})
 */
const CadastroIdentificador = Schema.String.pipe(
  Schema.pattern(/^(\d{11})|(\d{14})$/),
  Schema.annotations({
    identifier: "CadastroIdentificador",
    title: "CPF or CNPJ",
    description: "Must be 11 (CPF) or 14 (CNPJ) digits",
    message: () => "Must be 11 (CPF) or 14 (CNPJ) digits",
  })
);

/**
 * Schema for Brazilian OAB registration (e.g., RJ0000000A).
 * Matches the pattern: [A-Za-z]{2}\d{7}[A-Za-z]{1}
 */
const CadastroOAB = Schema.String.pipe(
  Schema.pattern(/^[A-Za-z]{2}\d{7}[A-Za-z]{1}$/),
  Schema.annotations({
    identifier: "CadastroOAB",
    title: "OAB Registration",
    description: "Must be 2 letters (UF) + 7 digits + 1 letter (type)",
    message: () => "Must be 2 letters (UF) + 7 digits + 1 letter (type)",
  })
);

/**
 * Schema for CNJ Número Único de Processo (NUP).
 * Must be 20 digits.
 * Matches the pattern: \d{20}
 */
const NumeroUnico = Schema.String.pipe(
  Schema.pattern(/^\d{20}$/),
  Schema.annotations({
    identifier: "NumeroUnico",
    title: "CNJ Process Number",
    description: "Must be exactly 20 digits (NUP format)",
    message: () => "Must be exactly 20 digits (NUP format)",
  })
);

/**
 * Schema for Data (YYYY-MM-DD).
 * Strict validation of date format including leap years.
 */
const Data = Schema.String.pipe(
  Schema.pattern(
    /^([1-9]\d{3}-((0[1-9]|1[0-2])-(0[1-9]|1\d|2[0-8])|(0[13-9]|1[0-2])-(29|30)|(0[13578]|1[02])-31)|([1-9]\d(0[48]|[2468][048]|[13579][26])|([2468][048]|[13579][26])00)-02-29)$/
  ),
  Schema.annotations({
    identifier: "Data",
    title: "Date",
    description: "Must be a valid date in YYYY-MM-DD format",
    message: () => "Must be a valid date in YYYY-MM-DD format",
  })
);

/**
 * Schema for DataHora (YYYY-MM-DDThh:mm:ssTZD).
 * Full ISO 8601 subset used by MNI (including timezone offset).
 */
const DataHora = Schema.String.pipe(
  Schema.pattern(
    /^([1-9]\d{3}-((0[1-9]|1[0-2])-(0[1-9]|1\d|2[0-8])|(0[13-9]|1[0-2])-(29|30)|(0[13578]|1[02])-31)|([1-9]\d(0[48]|[2468][048]|[13579][26])|([2468][048]|[13579][26])00)-02-29)T([01]\d|2[0-3]):[0-5]\d:[0-5]\d(Z|[+-][01]\d:[0-5]\d)$/
  ),
  Schema.annotations({
    identifier: "DataHora",
    title: "DateTime",
    description:
      "Must be a valid date-time with timezone offset (YYYY-MM-DDThh:mm:ssTZD)",
    message: () =>
      "Must be a valid date-time with timezone offset (YYYY-MM-DDThh:mm:ssTZD)",
  })
);

/**
 * Schema for Identificador Comunicacao (15 digits).
 * Matches the pattern: \d{15}
 */
const IdentificadorComunicacao = Schema.String.pipe(
  Schema.pattern(/^\d{15}$/),
  Schema.annotations({
    identifier: "IdentificadorComunicacao",
    title: "Communication Identifier",
    description: "Must be exactly 15 digits",
    message: () => "Must be exactly 15 digits",
  })
);

// =================================================================
// 2. Enumerations (Modalidades)
// =================================================================

const ModalidadeAlgoritmoHash = Schema.Literal(
  "MD5",
  "SHA-1",
  "SHA-256",
  "SHA-512"
);

const ModalidadeUnidadeFederacao = Schema.Literal(
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO"
);

const ModalidadeQualificacaoPessoa = Schema.Literal(
  "FIS",
  "JUR",
  "AUT",
  "ORP",
  "EDP"
);
const ModalidadePoloProcessual = Schema.Literal(
  "AT",
  "PA",
  "TC",
  "FL",
  "TJ",
  "AD",
  "VI"
);
const ModalidadeRepresentanteProcessual = Schema.Literal(
  "A",
  "E",
  "M",
  "D",
  "P"
);
const ModalidadeSituacaoParte = Schema.Literal("A", "I", "B", "S");
const ModalidadeRelacionamentoProcessual = Schema.Literal(
  "CP",
  "RP",
  "TF",
  "AT",
  "AS"
);
const ModalidadePrioridade = Schema.Literal(
  "IDOSO",
  "REU_PRESO",
  "PERECIMENTO",
  "MENOR"
);
const ModalidadeTipoComunicacao = Schema.Literal(
  "CIT",
  "INT",
  "IDP",
  "IDC",
  "IAD",
  "IST",
  "IAC",
  "NOT",
  "VIS",
  "URG",
  "PTA"
);
const ModalidadePrazo = Schema.Literal(
  "HOR",
  "DIA",
  "MES",
  "ANO",
  "DATA_CERTA",
  "SEMPRAZO"
);
const ModalidadePendenciaComunicacao = Schema.Literal("PC", "PR", "AM");
const ModalidadeGeneroPessoa = Schema.Literal("M", "F", "D");
const ModalidadeVinculacaoProcesso = Schema.Literal(
  "AP",
  "AR",
  "CD",
  "CT",
  "CX",
  "DP",
  "OG",
  "OR",
  "PU",
  "RG",
  "RR"
);
const ModalidadeDocumentoIdentificador = Schema.Literal(
  "RG",
  "CNH",
  "PASSAPORTE",
  "RNE",
  "CTPS",
  "TITULO_ELEITOR"
);
const ModalidadeRelacionamentoPessoal = Schema.Literal(
  "P",
  "AP",
  "SP",
  "T",
  "C"
);
const ModalidadeInstanciaOrgao = Schema.Literal(
  "ORIG",
  "REV",
  "ESP",
  "EXT",
  "ADM"
);
const ModalidadeAlgoritmoAssinatura = Schema.Literal(
  "sha1WithRSAEncryption",
  "sha256WithRSAEncryption",
  "sha256WithECDSAEncryption",
  "sha512WithRSAEncryption",
  "sha512WithECDSAEncryption"
);
const ModalidadeTipoMensagem = Schema.Literal("INFORMACAO", "ALERTA", "ERRO");

// =================================================================
// 3. Core Data Types (Complex Types)
// =================================================================

// Forward declarations for recursive types
class Cidade extends Schema.Class<Cidade>("Cidade")({
  municipio: Schema.NonEmptyString,
  unidadeFederacao: Schema.optional(ModalidadeUnidadeFederacao),
  codigoIBGE: Schema.optional(
    Schema.String.pipe(
      Schema.pattern(/^[0-9]{7}$/),
      Schema.annotations({
        description: "IBGE code (7 digits)",
      })
    )
  ),
}) {}

class Endereco extends Schema.Class<Endereco>("Endereco")({
  logradouro: Schema.optional(Schema.String),
  numero: Schema.optional(Schema.String),
  complemento: Schema.optional(Schema.String),
  bairro: Schema.optional(Schema.String),
  cidade: Schema.optional(Cidade),
  unidadeFederacao: Schema.optional(ModalidadeUnidadeFederacao),
  pais: Schema.optional(
    Schema.String.pipe(
      Schema.pattern(/^[A-Za-z]{2}$/),
      Schema.annotations({ description: "Two-letter country code" })
    )
  ),
  cep: Schema.optional(
    Schema.String.pipe(
      Schema.pattern(/^\d{8}$/),
      Schema.annotations({ description: "8-digit postal code" })
    )
  ),
}) {}

class DocumentoIdentificacao extends Schema.Class<DocumentoIdentificacao>(
  "DocumentoIdentificacao"
)({
  codigoDocumento: Schema.NonEmptyString,
  emissorDocumento: Schema.NonEmptyString,
  tipoDocumento: ModalidadeDocumentoIdentificador,
  nome: Schema.optional(Schema.String),
}) {}

// PessoaSimples requires either numeroDocumentoPrincipal or justificativaAusenciaDocumentoPrincipal
class PessoaSimples extends Schema.Class<PessoaSimples>("PessoaSimples")(
  Schema.Struct({
    nome: Schema.NonEmptyString,
    qualificacaoPessoa: ModalidadeQualificacaoPessoa,
    numeroDocumentoPrincipal: Schema.optional(CadastroIdentificador),
    justificativaAusenciaDocumentoPrincipal: Schema.optional(Schema.String),
  }).pipe(
    Schema.filter((data) => {
      const hasNumero = data.numeroDocumentoPrincipal !== undefined;
      const hasJustificativa =
        data.justificativaAusenciaDocumentoPrincipal !== undefined;
      return (hasNumero && !hasJustificativa) ||
        (!hasNumero && hasJustificativa)
        ? undefined
        : "Must provide either 'numeroDocumentoPrincipal' or 'justificativaAusenciaDocumentoPrincipal', but not both";
    })
  )
) {}

// Recursive types for Pessoa - using Schema.Struct pattern for proper type inference
const RelacionamentoPessoalSchema: Schema.Schema<any, any, never> =
  Schema.Struct({
    pessoa: Schema.suspend(() => PessoaSchema),
    modalidadeRelacionamento: Schema.optional(ModalidadeRelacionamentoPessoal),
  });

const PessoaSchema: Schema.Schema<any, any, never> = Schema.Struct({
  dadosBasicos: PessoaSimples,
  outroNome: Schema.optional(Schema.Array(Schema.String)),
  dataNascimento: Schema.optional(Data),
  dataObito: Schema.optional(Data),
  sexo: ModalidadeGeneroPessoa,
  nomeGenitor: Schema.optional(Schema.String),
  nomeGenitora: Schema.optional(Schema.String),
  documento: Schema.optional(Schema.Array(DocumentoIdentificacao)),
  cidadeNatural: Schema.optional(Cidade),
  nacionalidade: Schema.optional(
    Schema.String.pipe(
      Schema.pattern(/^[A-Za-z]{2}$/),
      Schema.annotations({ description: "ISO 3166-1 alpha-2 country code" })
    )
  ),
  endereco: Schema.optional(Schema.Array(Endereco)),
  pessoaRelacionada: Schema.optional(
    Schema.Array(Schema.suspend(() => RelacionamentoPessoalSchema))
  ),
  pessoaVinculada: Schema.optional(Schema.suspend(() => PessoaSchema)),
  escolaridade: Schema.optional(
    Schema.String.pipe(
      Schema.pattern(/^[1-7]$/),
      Schema.annotations({ description: "Education level (1-7)" })
    )
  ),
  qualificacaoPessoa: ModalidadeQualificacaoPessoa,
  numeroDocumentoPrincipal: Schema.optional(CadastroIdentificador),
  justificativaAusenciaDocumentoPrincipal: Schema.optional(Schema.String),
});

// Export type interfaces and schemas for backward compatibility
export interface RelacionamentoPessoal
  extends Schema.Schema.Type<typeof RelacionamentoPessoalSchema> {}
export interface Pessoa extends Schema.Schema.Type<typeof PessoaSchema> {}
export const RelacionamentoPessoal = RelacionamentoPessoalSchema;
export const Pessoa = PessoaSchema;

class RepresentanteProcessual extends Schema.Class<RepresentanteProcessual>(
  "RepresentanteProcessual"
)({
  nome: Schema.NonEmptyString,
  inscricao: Schema.optional(CadastroOAB),
  numeroDocumentoPrincipal: Schema.optional(Schema.String),
  intimacao: Schema.Boolean,
  tipoRepresentante: ModalidadeRepresentanteProcessual,
  endereco: Schema.optional(Schema.Array(Endereco)),
}) {}

// Recursive type for Parte
const ParteSchema: Schema.Schema<any, any, never> = Schema.Struct({
  pessoa: Schema.optional(Schema.suspend(() => PessoaSchema)),
  interessePublico: Schema.optional(Schema.Boolean),
  advogado: Schema.optional(Schema.Array(RepresentanteProcessual)),
  pessoaProcessualRelacionada: Schema.optional(
    Schema.Array(Schema.suspend(() => ParteSchema))
  ),
  assistenciaJudiciaria: Schema.optional(Schema.Boolean),
  intimacaoPendente: Schema.optional(Schema.Int.pipe(Schema.nonNegative())),
  relacionamentoProcessual: Schema.optional(ModalidadeRelacionamentoProcessual),
  situacao: ModalidadeSituacaoParte,
  complemento: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  Schema.filter((data) => {
    const hasPessoa = data.pessoa !== undefined;
    const hasInteressePublico = data.interessePublico !== undefined;
    return (hasPessoa && !hasInteressePublico) ||
      (!hasPessoa && hasInteressePublico)
      ? undefined
      : "Must provide either 'pessoa' or 'interessePublico', but not both";
  })
);

export interface Parte extends Schema.Schema.Type<typeof ParteSchema> {}
export const Parte = ParteSchema;

class PoloProcessual extends Schema.Class<PoloProcessual>("PoloProcessual")({
  polo: ModalidadePoloProcessual,
  parte: Schema.Array(Schema.suspend(() => ParteSchema)).pipe(
    Schema.minItems(1)
  ),
}) {}

// Recursive type for OrgaoJulgador
const OrgaoJulgadorSchema: Schema.Schema<any, any, never> = Schema.Struct({
  codigo: Schema.NonEmptyString,
  nome: Schema.NonEmptyString,
  instancia: ModalidadeInstanciaOrgao,
  codigoLocalidade: Schema.optional(Schema.String),
  orgaoColegiado: Schema.optional(Schema.suspend(() => OrgaoJulgadorSchema)),
});
const OrgaoJulgador = OrgaoJulgadorSchema;

class CabecalhoProcessoSimples extends Schema.Class<CabecalhoProcessoSimples>(
  "CabecalhoProcessoSimples"
)({
  numero: NumeroUnico,
  classeProcessual: Schema.Int.pipe(Schema.positive()),
  orgaoJulgador: Schema.optional(Schema.suspend(() => OrgaoJulgadorSchema)),
}) {}

// Recursive type for AssuntoLocal
const AssuntoLocalSchema: Schema.Schema<any, any, never> = Schema.Struct({
  codigoAssunto: Schema.Int,
  codigoPaiNacional: Schema.Int,
  descricao: Schema.NonEmptyString,
  assuntoLocalPai: Schema.optional(Schema.suspend(() => AssuntoLocalSchema)),
});
const AssuntoLocal = AssuntoLocalSchema;

const AssuntoProcessualSchema: Schema.Schema<any, any, never> = Schema.Struct({
  principal: Schema.optional(Schema.Boolean),
  codigoNacional: Schema.optional(Schema.Int),
  assuntoLocal: Schema.optional(Schema.suspend(() => AssuntoLocalSchema)),
}).pipe(
  Schema.filter((data) => {
    const hasNacional = data.codigoNacional !== undefined;
    const hasLocal = data.assuntoLocal !== undefined;
    return (hasNacional && !hasLocal) || (!hasNacional && hasLocal)
      ? undefined
      : "Must provide either 'codigoNacional' or 'assuntoLocal'";
  })
);
const AssuntoProcessual = AssuntoProcessualSchema;

class VinculacaoProcessual extends Schema.Class<VinculacaoProcessual>(
  "VinculacaoProcessual"
)({
  numeroProcesso: NumeroUnico,
  vinculo: ModalidadeVinculacaoProcesso,
}) {}

class UnidadeJudiciaria extends Schema.Class<UnidadeJudiciaria>(
  "UnidadeJudiciaria"
)({
  justica: Schema.Int.pipe(Schema.between(1, 9)),
  tribunal: Schema.String.pipe(
    Schema.pattern(/^[0-9]{2}$/),
    Schema.annotations({ description: "2-digit tribunal code" })
  ),
  unidade: Schema.String.pipe(
    Schema.pattern(/^[0-9]{4}$/),
    Schema.annotations({ description: "4-digit unit code" })
  ),
}) {}

class HistoricoDeslocamento extends Schema.Class<HistoricoDeslocamento>(
  "HistoricoDeslocamento"
)({
  unidadeJudiciaria: UnidadeJudiciaria,
  dataAjuizamento: DataHora,
  numeroProcesso: NumeroUnico,
  numeroInterno: Schema.optional(Schema.String),
  classeProcessual: Schema.Int.pipe(Schema.positive()),
}) {}

class Parametro extends Schema.Class<Parametro>("Parametro")({
  nome: Schema.NonEmptyString,
  valor: Schema.optional(Schema.String),
}) {}

class CabecalhoProcessual extends Schema.Class<CabecalhoProcessual>(
  "CabecalhoProcessual"
)({
  dadosBasicos: CabecalhoProcessoSimples,
  competencia: Schema.optional(Schema.Int),
  classeProcessual: Schema.Int.pipe(Schema.positive()),
  codigoLocalidade: Schema.NonEmptyString,
  nivelSigilo: Schema.Int.pipe(Schema.between(0, 5)),
  intervencaoMP: Schema.optional(Schema.Boolean),
  tamanhoProcesso: Schema.optional(Schema.Int),
  dataAjuizamento: DataHora,
  polo: Schema.optional(Schema.Array(PoloProcessual)),
  assunto: Schema.Array(AssuntoProcessualSchema).pipe(Schema.minItems(1)),
  magistradoAtuante: Schema.optional(Schema.Array(CadastroIdentificador)),
  processoVinculado: Schema.optional(Schema.Array(VinculacaoProcessual)),
  prioridade: ModalidadePrioridade,
  outroParametro: Schema.optional(Schema.Array(Parametro)),
  valorCausa: Schema.optional(Schema.Number),
  orgaoJulgador: Schema.suspend(() => OrgaoJulgadorSchema),
  outrosNumeros: Schema.optional(Schema.Array(Schema.String)),
  processoFisico: Schema.optional(Schema.Boolean),
  pedidoLiminarPendente: Schema.optional(Schema.Boolean),
  historicoDeslocamento: Schema.optional(Schema.Array(HistoricoDeslocamento)),
}) {}

// Recursive type for MovimentoLocal
const MovimentoLocalSchema: Schema.Schema<any, any, never> = Schema.Struct({
  codigoMovimento: Schema.Int,
  codigoPaiNacional: Schema.Int,
  descricao: Schema.NonEmptyString,
  movimentoLocalPai: Schema.optional(
    Schema.suspend(() => MovimentoLocalSchema)
  ),
});

class MovimentoNacional extends Schema.Class<MovimentoNacional>(
  "MovimentoNacional"
)({
  codigoNacional: Schema.Int,
  complemento: Schema.optional(Schema.Array(Schema.String)),
}) {}

const MovimentacaoProcessualSchema: Schema.Schema<any, any, never> =
  Schema.Struct({
    dataHora: DataHora,
    nivelSigilo: Schema.optional(Schema.Int.pipe(Schema.between(0, 5))),
    idMovimento: Schema.optional(Schema.String),
    complemento: Schema.optional(Schema.Array(Schema.String)),
    idDocumentoVinculado: Schema.optional(Schema.Array(Schema.String)),
    movimentoNacional: Schema.optional(MovimentoNacional),
    movimentoLocal: Schema.optional(Schema.suspend(() => MovimentoLocalSchema)),
  }).pipe(
    Schema.filter((data) => {
      const hasNacional = data.movimentoNacional !== undefined;
      const hasLocal = data.movimentoLocal !== undefined;
      return (hasNacional && !hasLocal) || (!hasNacional && hasLocal)
        ? undefined
        : "Must provide either 'movimentoNacional' or 'movimentoLocal'";
    })
  );
const MovimentacaoProcessual = MovimentacaoProcessualSchema;

class Hash extends Schema.Class<Hash>("Hash")({
  hash: Schema.NonEmptyString,
  algoritmo: ModalidadeAlgoritmoHash,
}) {}

class AssinaturaDigital extends Schema.Class<AssinaturaDigital>(
  "AssinaturaDigital"
)({
  assinatura: Schema.NonEmptyString.pipe(
    Schema.annotations({ description: "Base64 encoded binary content" })
  ),
  dataAssinatura: DataHora,
  cadeiaCertificado: Schema.NonEmptyString,
  algoritmo: ModalidadeAlgoritmoAssinatura,
  codificacaoCadeiaCertificado: Schema.String,
}) {}

class SignatarioSimples extends Schema.Class<SignatarioSimples>(
  "SignatarioSimples"
)({
  identificador: CadastroIdentificador,
  dataHora: DataHora,
}) {}

class Assinatura extends Schema.Class<Assinatura>("Assinatura")(
  Schema.Struct({
    signatarioLogin: Schema.optional(SignatarioSimples),
    assinaturaDigital: Schema.optional(AssinaturaDigital),
  }).pipe(
    Schema.filter((data) => {
      const hasLogin = data.signatarioLogin !== undefined;
      const hasDigital = data.assinaturaDigital !== undefined;
      return (hasLogin && !hasDigital) || (!hasLogin && hasDigital)
        ? undefined
        : "Must provide either 'signatarioLogin' or 'assinaturaDigital'";
    })
  )
) {}

class ConteudoDocumento extends Schema.Class<ConteudoDocumento>(
  "ConteudoDocumento"
)({
  idDocumento: Schema.NonEmptyString,
  mimetype: Schema.NonEmptyString,
  encoding: Schema.optional(Schema.String),
  hash: Schema.optional(Hash),
  conteudo: Schema.optional(
    Schema.String.pipe(
      Schema.annotations({ description: "Base64 encoded binary content" })
    )
  ),
  assinatura: Schema.optional(Schema.Array(Assinatura)),
}) {}

// Recursive type for DocumentoProcessual
const DocumentoProcessualSchema: Schema.Schema<any, any, never> = Schema.Struct(
  {
    idDocumento: Schema.NonEmptyString,
    idDocumentoVinculado: Schema.optional(Schema.String),
    codigoTipoDocumento: Schema.Int.pipe(Schema.positive()),
    dataHora: Schema.optional(DataHora),
    nivelSigilo: Schema.optional(Schema.Int.pipe(Schema.between(0, 5))),
    idMovimento: Schema.optional(Schema.String),
    descricao: Schema.optional(Schema.String),
    codigoTipoDocumentoLocal: Schema.optional(Schema.String),
    conteudo: Schema.optional(ConteudoDocumento),
    documentoVinculado: Schema.optional(
      Schema.Array(Schema.suspend(() => DocumentoProcessualSchema))
    ),
    unidadeJudiciaria: Schema.optional(UnidadeJudiciaria),
    tamanhoConteudo: Schema.optional(Schema.Int.pipe(Schema.positive())),
    outroParametro: Schema.optional(Schema.Array(Parametro)),
  }
);
const DocumentoProcessual = DocumentoProcessualSchema;

// =================================================================
// 4. Authentication and Messaging
// =================================================================

class AutenticacaoSimples extends Schema.Class<AutenticacaoSimples>(
  "AutenticacaoSimples"
)({
  usuario: Schema.NonEmptyString,
  senha: Schema.NonEmptyString.pipe(
    Schema.annotations({
      description: "Should be hashed/encrypted in production",
    })
  ),
}) {}

class Autenticacao extends Schema.Class<Autenticacao>("Autenticacao")(
  Schema.Struct({
    pessoaVinculada: Schema.optional(CadastroIdentificador),
    token: Schema.optional(Schema.String),
    autenticacaoSimples: Schema.optional(AutenticacaoSimples),
    autenticacaoCertificada: Schema.optional(AssinaturaDigital),
  }).pipe(
    Schema.filter((data) => {
      const methods = [
        data.token,
        data.autenticacaoSimples,
        data.autenticacaoCertificada,
      ].filter((v) => v !== undefined);
      return methods.length === 1
        ? undefined
        : "Must provide exactly one of 'token', 'autenticacaoSimples', or 'autenticacaoCertificada'";
    })
  )
) {}

class MensagemResposta extends Schema.Class<MensagemResposta>(
  "MensagemResposta"
)({
  descritivo: Schema.NonEmptyString,
  codigo: Schema.NonEmptyString,
  codigoUnico: Schema.NonEmptyString,
  tipo: Schema.optional(ModalidadeTipoMensagem),
}) {}

class ReciboTokenAutenticacao extends Schema.Class<ReciboTokenAutenticacao>(
  "ReciboTokenAutenticacao"
)({
  token: Schema.NonEmptyString,
  dataExpiracao: DataHora,
}) {}

class Recibo extends Schema.Class<Recibo>("Recibo")({
  sucesso: Schema.Boolean,
  mensagens: Schema.Array(MensagemResposta).pipe(Schema.minItems(1)),
  reciboToken: Schema.optional(ReciboTokenAutenticacao),
}) {}

class ReciboDocumentoProtocolado extends Schema.Class<ReciboDocumentoProtocolado>(
  "ReciboDocumentoProtocolado"
)({
  hashDocumento: Hash,
  dataRecebimento: DataHora,
  numeroProcesso: Schema.optional(NumeroUnico),
}) {}

class ReciboManifestacaoProcessual extends Schema.Class<ReciboManifestacaoProcessual>(
  "ReciboManifestacaoProcessual"
)({
  recibo: Recibo,
  numeroProtocolo: Schema.NonEmptyString,
  dataOperacao: DataHora,
  documentoComprovante: Schema.optional(
    Schema.String.pipe(
      Schema.annotations({ description: "Base64 encoded binary content" })
    )
  ),
  reciboDocumentos: Schema.optional(Schema.Array(ReciboDocumentoProtocolado)),
}) {}

// =================================================================
// 5. Core Entities for Service Operations
// =================================================================

const ProcessoJudicialSchema: Schema.Schema<any, any, never> = Schema.Struct({
  movimento: Schema.optional(
    Schema.Array(Schema.suspend(() => MovimentacaoProcessualSchema))
  ),
  documento: Schema.optional(
    Schema.Array(Schema.suspend(() => DocumentoProcessualSchema))
  ),
  numeroProcesso: Schema.optional(NumeroUnico),
  dadosBasicos: Schema.optional(CabecalhoProcessual),
}).pipe(
  Schema.filter((data) => {
    const hasNumero = data.numeroProcesso !== undefined;
    const hasDados = data.dadosBasicos !== undefined;
    return (hasNumero && !hasDados) || (!hasNumero && hasDados)
      ? undefined
      : "Must provide either 'numeroProcesso' or 'dadosBasicos'";
  })
);
const ProcessoJudicial = ProcessoJudicialSchema;

class AvisoComunicacaoPendente extends Schema.Class<AvisoComunicacaoPendente>(
  "AvisoComunicacaoPendente"
)({
  idAviso: IdentificadorComunicacao,
  tipoComunicacao: ModalidadeTipoComunicacao,
  destinatario: PessoaSimples,
  processo: CabecalhoProcessoSimples,
  remetente: Schema.suspend(() => OrgaoJulgadorSchema),
  numeroProcesso: NumeroUnico,
  dataDisponibilizacao: DataHora,
  tipoPrazo: ModalidadePrazo,
  prazo: Schema.optional(Schema.Int.pipe(Schema.positive())),
}) {}

class ComunicacaoProcessual extends Schema.Class<ComunicacaoProcessual>(
  "ComunicacaoProcessual"
)({
  id: IdentificadorComunicacao,
  processo: CabecalhoProcessoSimples,
  destinatario: PessoaSimples,
  remetente: Schema.suspend(() => OrgaoJulgadorSchema),
  tipoComunicacao: Schema.optional(ModalidadeTipoComunicacao),
  tipoPrazo: Schema.optional(ModalidadePrazo),
  dataReferencia: Schema.optional(DataHora),
  prazo: Schema.optional(Schema.Int),
  dataPrazoCalculado: Schema.optional(DataHora),
  teor: Schema.optional(Schema.String),
  documento: Schema.optional(
    Schema.Array(Schema.suspend(() => DocumentoProcessualSchema))
  ),
  nivelSigilo: Schema.optional(Schema.Int),
  parametro: Schema.optional(Schema.Array(Parametro)),
}) {}

// =================================================================
// 6. Service Request/Response Schemas
// =================================================================

// 6.1. Consultar Processo
export class RequisicaoConsultarProcesso extends Schema.Class<RequisicaoConsultarProcesso>(
  "RequisicaoConsultarProcesso"
)({
  consultante: Autenticacao,
  numeroProcesso: NumeroUnico,
  dataInicial: Schema.optional(DataHora),
  dataFinal: Schema.optional(DataHora),
  incluirCabecalho: Schema.optional(Schema.Boolean),
  incluirPartes: Schema.optional(Schema.Boolean),
  incluirEnderecos: Schema.optional(Schema.Boolean),
  incluirMovimentos: Schema.optional(Schema.Boolean),
  incluirDocumentos: Schema.optional(Schema.Boolean),
}) {}

export class RespostaConsultarProcesso extends Schema.Class<RespostaConsultarProcesso>(
  "RespostaConsultarProcesso"
)({
  recibo: Recibo,
  processo: Schema.optional(ProcessoJudicialSchema),
}) {}

// 6.2. Consultar Avisos Pendentes
export class RequisicaoConsultarAvisosPendentes extends Schema.Class<RequisicaoConsultarAvisosPendentes>(
  "RequisicaoConsultarAvisosPendentes"
)({
  consultante: Autenticacao,
  idRepresentado: Schema.optional(Schema.String),
  dataInicial: Schema.optional(DataHora),
  dataFinal: Schema.optional(DataHora),
  tipoPendencia: Schema.optional(ModalidadePendenciaComunicacao),
  tiposAviso: Schema.optional(Schema.Array(ModalidadeTipoComunicacao)),
}) {}

export class RespostaConsultarAvisosPendentes extends Schema.Class<RespostaConsultarAvisosPendentes>(
  "RespostaConsultarAvisosPendentes"
)({
  recibo: Recibo,
  avisos: Schema.optional(Schema.Array(AvisoComunicacaoPendente)),
}) {}

// 6.3. Consultar Documentos Processo
export class RequisicaoConsultarDocumentosProcesso extends Schema.Class<RequisicaoConsultarDocumentosProcesso>(
  "RequisicaoConsultarDocumentosProcesso"
)({
  consultante: Autenticacao,
  numeroProcesso: NumeroUnico,
  idDocumento: Schema.Array(Schema.String).pipe(Schema.minItems(1)),
}) {}

export class RespostaConsultarDocumentosProcesso extends Schema.Class<RespostaConsultarDocumentosProcesso>(
  "RespostaConsultarDocumentosProcesso"
)({
  recibo: Recibo,
  documentos: Schema.optional(Schema.Array(ConteudoDocumento)),
}) {}

// 6.4. Entregar Petição Inicial
export class RequisicaoEntregarPeticaoInicial extends Schema.Class<RequisicaoEntregarPeticaoInicial>(
  "RequisicaoEntregarPeticaoInicial"
)({
  manifestante: Autenticacao,
  dadosBasicos: CabecalhoProcessual,
  documentos: Schema.Array(
    Schema.suspend(() => DocumentoProcessualSchema)
  ).pipe(Schema.minItems(1)),
  dataEnvio: DataHora,
  parametros: Schema.optional(Schema.Array(Parametro)),
}) {}

export class RespostaEntregarPeticaoInicial extends Schema.Class<RespostaEntregarPeticaoInicial>(
  "RespostaEntregarPeticaoInicial"
)({
  recibo: ReciboManifestacaoProcessual,
}) {}

// 6.5. Consultar Alteração
export class RequisicaoConsultarAlteracao extends Schema.Class<RequisicaoConsultarAlteracao>(
  "RequisicaoConsultarAlteracao"
)({
  consultante: Autenticacao,
  numeroProcesso: NumeroUnico,
}) {}

export class RespostaConsultarAlteracao extends Schema.Class<RespostaConsultarAlteracao>(
  "RespostaConsultarAlteracao"
)({
  recibo: Recibo,
  hashCabecalho: Schema.optional(Hash),
  hashMovimentacoes: Schema.optional(Hash),
  hashDocumentos: Schema.optional(Hash),
}) {}

// 6.6. Consultar Localidades
export class RequisicaoConsultarLocalidades extends Schema.Class<RequisicaoConsultarLocalidades>(
  "RequisicaoConsultarLocalidades"
)({
  estado: Schema.optional(ModalidadeUnidadeFederacao),
}) {}

class Localidade extends Schema.Class<Localidade>("Localidade")({
  codigo: Schema.NonEmptyString,
  descricao: Schema.NonEmptyString,
  municipio: Schema.optional(Cidade),
}) {}

export class RespostaConsultarLocalidades extends Schema.Class<RespostaConsultarLocalidades>(
  "RespostaConsultarLocalidades"
)({
  recibo: Recibo,
  localidades: Schema.optional(Schema.Array(Localidade)),
}) {}

// =================================================================
// EXPORTS - Organized namespace for all schemas
// =================================================================

export const MniSchemas = {
  // Primitives
  NumeroUnico,
  DataHora,
  Data,
  CadastroIdentificador,
  CadastroOAB,
  IdentificadorComunicacao,

  // Enumerations
  ModalidadeAlgoritmoHash,
  ModalidadeUnidadeFederacao,
  ModalidadeQualificacaoPessoa,
  ModalidadePoloProcessual,
  ModalidadeRepresentanteProcessual,
  ModalidadeSituacaoParte,
  ModalidadeRelacionamentoProcessual,
  ModalidadePrioridade,
  ModalidadeTipoComunicacao,
  ModalidadePrazo,
  ModalidadePendenciaComunicacao,
  ModalidadeGeneroPessoa,
  ModalidadeVinculacaoProcesso,
  ModalidadeDocumentoIdentificador,
  ModalidadeRelacionamentoPessoal,
  ModalidadeInstanciaOrgao,
  ModalidadeAlgoritmoAssinatura,
  ModalidadeTipoMensagem,

  // Core Entities
  Pessoa,
  PessoaSimples,
  Parte,
  PoloProcessual,
  DocumentoProcessual,
  MovimentacaoProcessual,
  CabecalhoProcessual,
  CabecalhoProcessoSimples,
  Endereco,
  Cidade,
  OrgaoJulgador,
  AssuntoProcessual,
  AssuntoLocal,
  Hash,
  Assinatura,
  ConteudoDocumento,
  UnidadeJudiciaria,
  Parametro,

  // Authentication
  Autenticacao,
  AutenticacaoSimples,
  AssinaturaDigital,

  // Messaging
  Recibo,
  MensagemResposta,
  ReciboManifestacaoProcessual,
  ReciboDocumentoProtocolado,

  // Process Entities
  ProcessoJudicial,
  AvisoComunicacaoPendente,
  ComunicacaoProcessual,
} as const;

// Type exports for convenience
export type NumeroUnicoType = Schema.Schema.Type<typeof NumeroUnico>;
export type DataHoraType = Schema.Schema.Type<typeof DataHora>;
export type PessoaType = Schema.Schema.Type<typeof Pessoa>;
export type ProcessoJudicialType = Schema.Schema.Type<typeof ProcessoJudicial>;
