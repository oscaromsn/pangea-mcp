Here is the improved and cleanly formatted version of the provided markdown file.

---

# Conselho Nacional de Justiça
## Modelo de Interoperabilidade de Dados do Poder Judiciário e Órgãos de Administração da Justiça
### Versão 2.2.2
**Brasília - julho de 2014**

---

## Sumário

1.  Contextualização
2.  Versões
3.  Mudanças significativas
    3.1. Operações
    3.2. Mudanças em objetos
        3.2.1. `http://www.cnj.jus.br/intercomunicacao-2.2.2:tipoParte`
        3.2.2. `http://www.cnj.jus.br/intercomunicacao-2.2.2:modalidadeVinculacaoProcesso`
        3.2.3. `http://www.cnj.jus.br/intercomunicacao-2.2.2:tipoNumeroUnico`
        3.2.4. `http://www.cnj.jus.br/intercomunicacao-2.2.2:tipoCabecalhoProcesso`
        3.2.5. `http://www.cnj.jus.br/intercomunicacao-2.2.2:tipoMovimentoProcessual`
        3.2.6. `http://www.cnj.jus.br/intercomunicacao-2.2.2:tipoDocumento`
        3.2.7. `http://www.cnj.jus.br/intercomunicacao-2.2.2:tipoAssinatura`
        3.2.8. `http://www.cnj.jus.br/intercomunicacao-2.2.2:tipoOrgaojulgador`
        3.2.9. `http://www.cnj.jus.br/intercomunicacao-2.2.2:tipoSignatarioSimples`
        3.2.10. `http://www.cnj.jus.br/tipos-servico-intercomunicacao-2.2.2:tipoEntregarManifestacaoProcessualResposta`
        3.2.11. `http://www.cnj.jus.br/tipos-servico-intercomunicacao-2.2.2:tipoConsultarProcesso`
        3.2.12. `http://www.cnj.jus.br/tipos-servico-intercomunicacao-2.2.2::tipoConfirmarRecebimento`
        3.2.13. `http://www.cnj.jus.br/tipos-servico-intercomunicacao-2.2.2:tipoConfirmarRecebimentoResposta`
    3.3. Dinâmica
        3.3.1. Confirmação de recebimento
4.  Visão Geral dos Objetos de Comunicação
5.  Serviços Ofertados
    5.1 Visão Geral das Operações
    5.2 Autenticação
    5.3 Autorização
6.  Dinâmica das Comunicações
    6.1 Entre Tribunais
    6.2 Entre Tribunais e outros órgãos de administração da Justiça
        6.2.1 Protocolo Inicial
        6.2.2 Avisos de Comunicação
        6.2.3 Consulta de Comunicação

---

## 1. Contextualização

Este documento se destina a estabelecer as bases para o intercâmbio de informações de processos judiciais e assemelhados entre os diversos órgãos de administração da Justiça, e, além de servir de base para a implementação das funcionalidades pertinentes no âmbito do sistema processual de que trata o TCOT n.º 073/2009, servirá como base de discussão para revisão do modelo já estabelecido em razão do acordo TAC n.º 58/2009.

---

## 2. Versões

| Versão | Autor/Revisor | Data | Modificação |
| :--- | :--- | :--- | :--- |
| 1.9.0 | Paulo C. de Araújo Silva Filho | 03/08/10 | Inicial |
| 1.9.1 | Paulo C. de Araújo Silva Filho | 17/12/10 | Rascunho final |
| 2.0.0 | Grupo de Interoperabilidade | 14/03/11 | Versão final |
| 2.1.0 | Antonio Augusto Silva Martins<br>Paulo C. de Araújo Silva Filho | 30/04/12 | Inclusão de objetos solicitados pelos<br>participantes do grupo<br>Correção do documento para a versão<br>2.1.0 |
| 2.2.1 | Guilherme Alves Reis | 28/01/14 | Ajustes destinados a viabilizar o envio<br>de grandes volumes de dados |
| 2.2.2 | Paulo C. de Araújo Silva Filho | 07/07/14 | Ajustes decorrentes da 2ª reunião do<br>comitê-técnico do MNI.<br>Redução da repetição de informações<br>entre este documento e os<br>documentos de definição com vistas a<br>reduzir ambiguidades.<br>Renumeração dos capítulos em razão<br>da introdução de capítulo de<br>modificações relevantes. |

---

## 3. Mudanças significativas

Este capítulo se destina a identificar as mudanças significativas entre a versão atual e a última versão em produção (em relação à 2.2.2, a versão 2.1.1) a fim de permitir que implementadores do modelo possam organizar seu trabalho de evolução mais eficientemente.

### 3.1. Operações

Foi incluída a operação `confirmarRecebimento`, com parâmetros de entrada `confirmarRecebimento` e de saída `confirmarRecebimentoResposta` e as correspondentes mensagens e bindings.

A operação `tipoConsultarProcesso` teve incluída a possibilidade de não se recuperar o cabeçalho processual.

### 3.2. Mudanças em objetos

#### 3.2.1. `http://www.cnj.jus.br/intercomunicacao-2.2.2:tipoParte`
Alterada a designação do elemento “interesse-publico” para “interessePublico”.

#### 3.2.2. `http://www.cnj.jus.br/intercomunicacao-2.2.2:modalidadeVinculacaoProcesso`
Acrescentados quatro novas modalidades de vinculação processual: AR - ação rescisória; CD - competência delegada; RR - recurso repetitivo e RG - repercussão geral.

#### 3.2.3. `http://www.cnj.jus.br/intercomunicacao-2.2.2:tipoNumeroUnico`
Reduzidas as restrições do padrão esperado de “\d{13}[0-29][0-7]\d{4}” para “\d{20}”.

#### 3.2.4. `http://www.cnj.jus.br/intercomunicacao-2.2.2:tipoCabecalhoProcesso`
Suprimido o atributo `codigoOrgaoJulgador`.
Acrescentado o atributo `dataAjuizamento` do tipo complexo `tipoDataHora`.
Acrescentado o elemento `orgaoJulgador` do tipo complexo (novo) `tipoOrgaoJulgador`, com ocorrência obrigatória.
Acrescentado elemento `outrosnumeros`, do tipo String, com ocorrência facultativa e múltipla.

#### 3.2.5. `http://www.cnj.jus.br/intercomunicacao-2.2.2:tipoMovimentoProcessual`
O elemento `movimentoLocal` teve seu tipo modificado de String para o tipo complexo `tipoMovimentoLocal`.

#### 3.2.6. `http://www.cnj.jus.br/intercomunicacao-2.2.2:tipoDocumento`
Modificado o tipo do elemento `conteudo` de `hexBinary` para `base64Binary`, com conteúdo esperado “application/octet-stream".
Alterada a semântica do atributo `tipoDocumento` para passar a exigir o código nacional previstos nas TNUs da Resolução CNJ 46.
Incluído atributo opcional `descricao` do tipo String para descrição do documento.
Incluído atributo opcional `tipoDocumentoLocal`, do tipo String, para indicação de código local (do tribunal) de armazenamento.

#### 3.2.7. `http://www.cnj.jus.br/intercomunicacao-2.2.2:tipoAssinatura`
Modificado o tipo de extensão do tipo simples string para tipo complexo.
Modificado o tipo atributo `dataAssinatura` de String para o tipo complexo `tipoDataHora`.
Incluído o atributo facultativo `codificacaoCertificado`, do tipo String.
Incluído o elemento facultativo e múltiplo, do tipo complexo (novo), `tipoSignatarioSimples`.

#### 3.2.8. `http://www.cnj.jus.br/intercomunicacao-2.2.2:tipoOrgaoJulgador`
Incluído esse novo tipo complexo, que contém os atributos obrigatórios `codigoOrgao:string`, `nomeOrgao:string`, `codigoMunicipioIBGE:int`, `instancia: [ORIG, REV,ESP,EXT,ADM]`.

#### 3.2.9. `http://www.cnj.jus.br/intercomunicacao-2.2.2:tipoSignatarioSimples`
Incluído esse novo tipo complexo, que contém os atributos obrigatórios `identificador:string` e `dataHora`.

#### 3.2.10. `http://www.cnj.jus.br/tipos-servico-intercomunicacao-2.2.2:tipoEntregarManifestacaoProcessualResposta`
Modificado o tipo do elemento `recibo` de `hexBinary` para `base64Binary`, com conteúdo esperado “application/octet-stream”.

#### 3.2.11. `http://www.cnj.jus.br/tipos-servico-intercomunicacao-2.2.2:tipoConsultarProcesso`
Incluído o elemento `incluirCabecalho` com o objetivo de indicar se o consulente deseja receber o cabeçalho processual quando da consulta de documentos.

#### 3.2.12. `http://www.cnj.jus.br/tipos-servico-intercomunicacao-2.2.2::tipoConfirmarRecebimento`
Incluído esse novo tipo complexo, que contém os atributos `idRecebedor:string`, `senhaRecebedor:string` e `protocolo:string`, para utilização na operação de confirmação de recebimento.

#### 3.2.13. `http://www.cnj.jus.br/tipos-servico-intercomunicacao-2.2.2:tipoConfirmarRecebimentoResposta`
Incluído esse novo tipo complexo, que contém os atributos `sucesso:boolean`, `mensagem:string`, para utilização na operação de confirmação de recebimento.

### 3.3. Dinâmica

#### 3.3.1. Confirmação de recebimento
Incluída a operação de confirmação de recebimento com o objetivo de um tribunal recebedor de uma entrega de manifestação processual parcial de outro tribunal poder comunicar o recebimento integral da manifestação.

---

## 4. Visão Geral dos Objetos de Comunicação

A definição clara de elementos de comunicação - ou objetos de comunicação - é determinante do sucesso da interoperabilidade. No presente modelo, a opção se deu pelo uso de dois arquivos definidores de esquema (XML Schema Document, XSD) que descrevem esses objetos, permitindo o intercâmbio de dados independentemente das implementações existentes em cada órgão.

A relação dos arquivos, nome de esquema e dos objetos neles definidos é a seguir apresentada. Os documentos XSD respectivos devem ser publicados juntamente com o presente arquivo. A documentação de referência pode ser gerada a partir desses arquivos.

| Arquivo / Localização / Namespace | Objetos definidos |
| :--- | :--- |
| **Arquivo:** `Intercomunicacao-2.2.2.xsd`<br>**Localização:** `http://www.cnj.jus.br/intercomunicacao-2.2.2/{nomexsd}`<br>**Namespace:** `http://www.cnj.jus.br/intercomunicacao-2.2.2` | `tipoAssinatura`<br>`tipoAssuntoLocal`<br>`tipoAssuntoProcessual`<br>`tipoAvisoComunicacaoPendente`<br>`tipoCabecalhoProcesso`<br>`tipoComunicacaoProcessual`<br>`tipoDocumento`<br>`tipoDocumentoldentificacao`<br>`tipoEndereco`<br>`tipolntercomunicacao`<br>`tipoMovimentoLocal`<br>`tipoMovimentoNacional`<br>`tipoMovimentoProcessual`<br>`tipoOrgaoJulgador`<br>`tipoParametro`<br>`tipoParte`<br>`tipoPessoa`<br>`tipoPoloProcessual`<br>`tipoProcessoJudicial`<br>`tipoRelacionamentoPessoal`<br>`tipoRepresentanteProcessual`<br>`tipoSignatarioSimples`<br>`tipoVinculacaoProcessual`<br>`identificadorComunicacao`<br>`modalidadeDocumentoldentificador`<br>`modalidadeGeneroPessoa`<br>`modalidadePoloProcessual`<br>`modalidadeRelacionamentoPessoal`<br>`modalidadeRepresentanteProcessual`<br>`modalidadeVinculacaoProcesso`<br>`tipoCadastroldentificador`<br>`tipoCadastroOAB`<br>`tipoComplemento`<br>`tipoComunicacao`<br>`tipoData`<br>`tipoDataHora`<br>`tipoNumeroUnico`<br>`tipoPrazo`<br>`tipoQualificacaoPessoa` |
| **Arquivo:** `Tipos-servico-intercomunicacao-2.2.2.xsd`<br>**Localização:** `http://www.cnj.jus.br/intercomunicacao-2.2.2/{nomexsd}`<br>**Namespace:** `http://www.cnj.jus.br/tipos-servico-intercomunicacao-2.2.2` | `tipoConfirmarRecebimento`<br>`tipoConfirmarRecebimentoResposta`<br>`tipoConsultaAlteracao`<br>`tipoConsultaAlteracaoResposta`<br>`tipoConsultaAvisosPendentes`<br>`tipoConsultaAvisosPendentesResposta`<br>`tipoConsultaProcesso`<br>`tipoConsultaProcessoResposta`<br>`tipoConsultaTeorComunicacao`<br>`tipoConsultaTeorComunicacaoResposta`<br>`tipoEntregaManifestacaoProcessual`<br>`tipoEntregaManifestacaoProcessualResposta` |

O arquivo `intercomunicacao-2.2.2.xsd` define os objetos básicos para troca de informações processuais. Eles incluem os dados de cabeçalhos, movimentações, assuntos, classes, polos processuais, partes do processo, documentos, tipos de documentos entre diversos outros elementos. Há um elemento raiz (`intercomunicacao`) que permite encapsular quaisquer desses dados em um só tipo de elemento, mas o objetivo principal é definir os tipos básicos de objetos de interoperabilidade que podem ser utilizados pelos serviços disponibilizados externamente.

O arquivo `tipos-servico-intercomunicacao-2.2.2.xsd` define os tipos de elementos utilizados nas operações dos serviços WEB definidos neste documento. Estes elementos encapsulam os objetos definidos no arquivo `intercomunicacao-2.2.2.xsd`, acrescentando outros elementos informativos para as operações. Eis as descrições sumárias.

A partir dos elementos acima, foi elaborado o documento WSDL de modelo de um serviço de comunicação processual a ser ofertado por um tribunal, descrito no tópico seguinte.

---

## 5. Serviços Ofertados

A comunicação processual se dará a partir do arquétipo presente no arquivo WSDL, editado para refletir os dados de acesso próprios de cada tribunal ofertante do serviço.

### 5.1 Visão Geral das Operações

Todas as operações têm um só parâmetro de entrada e um só parâmetro de saída, sendo eles de tipos que encapsulam duas informações básicas e o efetivo resultado da operação.

Os dois elementos básicos contidos nos objetos de resposta são um booleano indicando o sucesso ou não da operação e um campo de texto destinado à apresentação de alguma mensagem sobre a operação. Os demais elementos são a resposta efetiva à operação, quando existente.

| Seq | Nome | Parâmetros |
| :--- | :--- | :--- |
| 1 | `consultarAvisosPendentes` | → `consultarAvisosPendentes`<br>← `consultarAvisosPendentesResposta` |
| 2 | `consultarTeorComunicacao` | → `consultarTeorComunicacao`<br>← `consultarTeorComunicacaoResposta` |
| 3 | `consultarProcesso` | → `consultarProcesso`<br>← `consultarProcessoResponse` |
| 4 | `entregarManifestacaoProcessual` | → `entregarManifestacaoProcessual`<br>← `entregarManifestacaoProcessualResposta` |
| 5 | `consultarAlteracao` | → `consultarAlteracao`<br>← `consultarAlteracaoResposta` |
| 6 | `confirmarRecebimento` | → `confirmarRecebimento`<br>← `confirmarRecebimentoResposta` |

| Seq | Nome | Descrição |
| :--- | :--- | :--- |
| 1 | `consultarAvisosPendentes` | Operação destinada a permitir que o consultante verifique a existência de avisos de comunicação processual pendentes junto ao tribunal fornecedor do serviço.<br>Essa consulta poderá ser específica em relação a uma parte representada ou, ainda, genérica, relativa aos processos em que o consultante opera como órgão de representação processual (MP, defensoria pública, advocacia pública, escritório de advocacia e advogado). O retorno da consulta é um objeto do tipo `tipoConsultarAvisosPendentesResponse`, que contém, além dos dados básicos, uma lista dos avisos pendentes de conhecimento pelo consultante, sendo os avisos do tipo `tipoAvisoComunicacaoPendente` definido no esquema `http://www.cnj.jus.br/intercomunicacao-2.1`.<br>Caso não haja aviso pendente, será retornada uma lista de tamanho zero. |
| 2 | `consultarTeorComunicacao` | Operação destinada a permitir a consulta a teor específico de comunicação processual pendente. O retorno será um objeto do tipo `tipoConsultaTeorComunicacaoResponse`, que, além dos dados básicos, conterá uma lista de zero ou mais objetos do tipo `tipoComunicacaoProcessual` definido no esquema `http://www.cnj.jus.br/intercomunicacao-2.1`. |
| 3 | `consultarProcesso` | Operação destinada a permitir a consulta a um processo judicial. **Não é necessário que o consultante seja representante de qualquer das partes componentes do processo.**<br>A operação retornará objeto do tipo `tipoConsultarProcessoResponse`, que contém um objeto do tipo `tipoProcessoJudicial`, definido pelo esquema `http://www.cnj.jus.br/intercomunicacao-2.2.2`, caso o processo exista e possa ser acessado pelo consultante.<br>**A implementação deverá assegurar que o processo somente seja retornado se o nível de sigilo interno permitir a consulta pelo requerente.**<br>Os elementos documentos do elemento processo poderão encerrar apenas binários encriptados cuja chave será fornecida na `consultaTeorComunicacao`, caso haja intimação pendente para o documento transferido. |
| 4 | `entregarManifestacaoProcessual` | Operação destinada a permitir a entrega de manifestação processual por órgão de representação processual ou por advogado.<br>Essa operação também permite a entrega de petição inicial, caso em que o parâmetro de entrada deverá incluir os dados básicos necessários à distribuição.<br>A operação retornará objeto do tipo `tipoEntregarManifestacaoProcessualResponse` que, além dos dados básicos, contém o número do protocolo, a data da operação e, se bem sucedida, documento PDF contendo o recibo. |
| 5 | `consultarAlteracao` | Operação destinada a permitir uma verificação rápida quanto à existência de modificações havidas em um processo judicial. |
| 6 | `confirmarRecebimento` | Operação destinada exclusivamente a tribunais em sua intercomunicação que tem por objetivo permitir que um tribunal que tenha sido objeto de uma operação de entrega de manifestação processual (4) confirme junto ao tribunal que enviou a manifestação que a recebeu integralmente. |

### 5.2 Autenticação

O meio preferencial para a autenticação dos clientes no serviço deverá ser a troca de certificados digitais expedidos no formato ICP-Brasil. A partir do certificado, o serviço deverá obter o número identificador do consulente (CNPJ ou CPF) e, com isso, validar os acessos independentemente do uso de um par login/senha.

Caso tal meio de autenticação não seja possível no contexto do tribunal, dever-se-á utilizar o par login/senha para a autenticação, assegurando-se, porém, em qualquer situação, que o canal de comunicação entre as partes seja seguro (https).

No caso de comunicação entre tribunais, os códigos identificadores serão o resultado da conjunção do campo “J”, “TR” e “OOOO” de que tratam, respectivamente, os parágrafos 4.º, 5.º e 6.º do art. 1.º da Resolução CNJ 65, com ou sem a concatenação de outros dígitos identificadores no caso de esses 7 dígitos não serem suficientes para a identificação unívoca do órgão remetente.

### 5.3 Autorização

Os serviços deverão autorizar o acesso a informações seguindo as regras definidas para cada operação.

No que concerne à autorização, deve ser observado o nível de sigilo pertinente ao acesso. Os níveis de sigilo adotados são os seguintes:

| Nível | Nome | Descrição |
| :--- | :--- | :--- |
| 0 | público | Objeto acessível a todos os servidores do Judiciário e dos demais órgãos públicos de colaboração na administração da Justiça, assim como aos advogados. |
| 1 | segredo | Objeto acessível aos servidores do Judiciário, aos servidores dos órgãos públicos de colaboração na administração da Justiça e às partes do processo (inclusive advogados). |
| 2 | sigilo mínimo | Objeto acessível aos servidores do Judiciário e aos demais órgãos públicos de colaboração na administração da Justiça. |
| 3 | sigilo médio | Objeto acessível aos servidores do órgão em que tramita o processo, às partes que provocaram o incidente e àqueles que forem expressamente incluídos. |
| 4 | sigilo intenso | Objeto acessível a classes de servidores qualificados (magistrado, diretor de secretaria/escrivão, oficial de gabinete/assessor) do órgão em que tramita o processo, às partes que provocaram o incidente e àqueles que forem expressamente incluídos. |
| 5 | sigilo absoluto | Objeto acessível apenas ao magistrado do órgão em que tramita, aos servidores e demais usuários por ele indicado e às partes que provocaram o incidente. |

O tribunal que implementar o serviço deverá assegurar que esses níveis de sigilo sejam respeitados. Caso quantidade inferior de níveis de sigilo, deverá encaixar seus níveis no nível da relação acima que for idêntico ou naquele mais intenso que se aproximar do nível local avaliado.

É de responsabilidade dos consumidores dos serviços assegurar o respeito aos limites decorrentes do nível de sigilo dos objetos repassados.

---

## 6. Dinâmica das Comunicações

### 6.1 Entre Tribunais

A comunicação entre tribunais será feita primordialmente por meio do uso das operações `consultarProcesso`, `entregarManifestacaoProcessual` e `confirmarRecebimento`.

Essencialmente, o tribunal remetente originário enviará os dados básicos do processo ou recurso deflagrado como uma entrega de manifestação processual originária, indicando todos os dados básicos para a distribuição no tribunal de destino. Cumprida tal atividade, o tribunal de destino, com o código do órgão de origem e o número do processo judicial, realizará uma operação de consulta do processo de origem, podendo complementar, de lá, os elementos e documentos necessários ao processamento do objeto, caso não tenham sido enviados na entrega originária. Finalizada a operação de consulta, o tribunal recebedor da manifestação deve utilizar a operação de confirmação de recebimento para comunicar ao tribunal de origem que recebeu integralmente o processo.

Ao concluir o processamento na instância ou órgão de destino, o tribunal de destino realizará, no processo de origem, uma entrega de manifestação processual em que encaminhará os documentos de relevo para o processamento.

Ao realizar a operação de entrega de manifestação processual originária, o tribunal de origem receberá do tribunal de destino o número de protocolo necessário para eventual acompanhamento do processo de destino por meio da operação de consulta. O tribunal de origem e o tribunal de destino assegurarão que, para os processos relacionados entre si, haja liberação de acesso recíproca para a consulta.

Essas comunicações poderão se dar tanto no caso de remessa e devolução de recursos quanto no caso de remessa e devolução de cartas (precatórias, de ordem e rogatórias).

### 6.2 Entre Tribunais e outros órgãos de administração da Justiça

#### 6.2.1 Protocolo Inicial

No protocolo inicial, a operação `entregaManifestacaoProcessual` será realizada com a substituição do elemento `numeroProcesso` pelo elemento `tipoCabecalhoProcesso`, fazendo constar, nesse cabeçalho, como número de processo, uma sequência de 20 dígitos zero (0).

A distribuição eletrônica e imediata determinada pela EC n.º 45/2004 será feita a partir dos dados componentes do cabeçalho. Caso não seja possível essa distribuição imediata em razão de conflitos entre as competências da comarca ou subseção de destino, a resposta deverá ser de insucesso, com o número do protocolo pertinente, acompanhada de lista de parâmetros com nome “competencia” e valor descritivo das competências possíveis para escolha pelo protocolante em uma nova tentativa de protocolo.

Essa tentativa de protocolo deverá ser mantida no órgão de destino até as 23h59m59s do dia útil seguinte, assim como os hashs dos documentos enviados na primeira tentativa.

Na tentativa seguinte de protocolo, o órgão protocolante deverá indicar, além do cabeçalho, um elemento `parametro` com nome “protocolo-originario” e valor idêntico ao protocolo da primeira tentativa e outro elemento `parametro` com nome “competencia” e valor da competência para a qual pretende a distribuição. Nesse caso, se a tentativa bem sucedida se der na janela de tempo referida no parágrafo anterior, o sistema do Judiciário deverá considerar como concretizado o protocolo na data e hora do primeiro protocolo.

#### 6.2.2 Avisos de Comunicação

Os atos de comunicação serão realizados de forma passiva pelo Judiciário, como previsto na Lei n.º 11.419/2006, art. 5.º, com a disponibilização no serviço dos avisos pertinentes.

O Judiciário deverá disponibilizar, na data da elaboração do ato de comunicação, um aviso de comunicação pendente (objeto `avisoComunicacaoPendente`). Esse aviso será identificado univocamente e ficará disponível para consulta pelo prazo previsto no art. 5.º referido, ou seja, até a expiração do prazo de 10 (dez) dias previsto no § 3.º ou até o momento em que houver a ciência por meio da operação de consulta de comunicação processual.

Cada operação de consulta de avisos pendentes deverá retornar a quem consulta todos os avisos de comunicação ainda pendentes. Na operação de consulta, o consulente poderá indicar seu código identificador específico, preferencialmente o CNPJ, ou o código identificador da pessoa ou entidade a respeito da qual pretende consultar.

Exemplificando, a Advocacia-Geral da União poderá apresentar a consulta indicando o seu código identificador (seu CNPJ) ou o CNPJ de algum órgão específico que esteja defendendo (ANTT, por exemplo). No primeiro caso, o sistema do Judiciário deverá retornar TODOS os avisos de comunicação pendentes relativos a TODAS as pessoas/entidades que estejam cadastradas em seu sistema como tendo como órgão de representação a Advocacia-Geral da União. No segundo caso, o sistema do Judiciário deverá retornar TODOS os avisos de comunicação pendentes relativos especificamente à ANTT.

#### 6.2.3 Consulta de Comunicação

A consulta de comunicação poderá ser feita de duas maneiras distintas:

a) consulta direta à comunicação pendente; ou
b) consulta ao processo seguida de consulta à comunicação pendente.

No primeiro caso, basta o consultante, de posse dos dados obtidos no `avisoComunicacaoPendente`, realizar a consulta da comunicação específica.

No segundo caso, a consulta a processo em relação ao qual há comunicação pendente para o órgão consultante deverá retornar os documentos pertinentes à comunicação encriptados seguindo o algoritmo SHA-1 fazendo uso de chave específica, preferencialmente o hash do arquivo original. Com a consulta posterior à comunicação, os hashs dos documentos pertinentes à comunicação serão enviados e a ciência será concretizada.

A implementação da segunda forma de comunicação é opcional, e os tribunais que não a adotarem deverão assegurar que a consulta do processo pelo órgão destinatário da comunicação implique a ciência da comunicação.