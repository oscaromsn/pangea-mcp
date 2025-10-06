---
title: "Regras negociais | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Regras%20negociais"
author:
published:
created: 2025-09-30
description: "Esse conteúdo foi migrado integralmente da antiga Wiki do PJe, e suas informações podem estar desatualizadas."
tags:
  - "clippings"
---
# Regras negociais | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Regras%20negociais


## Regras de negócio

## RN1

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de norma/Período de vigência. | Pode haver mais de um "Tipo de norma/Identificador da norma" idênticos para a mesma norma pai,   com períodos de vigência diferentes. Não é possível haver sobreposição de períodos de vigência. | PJE\_UC001. |

## RN2

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de dispositivo da norma. | Tipos de dispositivo da norma permitidos: artigo, parágrafo, inciso, parte, alínea e itens. | PJE\_UC002 |

## RN3

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Natureza das normas. | A "Norma pai" e "Tipos de dispositivos de normas" são necessariamente de natureza penal. | PJE\_UC002. |

## RN4

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperação das normas penais. | O sistema deverá recuperar apenas as normas cadastradas que estiverem ativas. | PJE\_UC001. |

## RN5

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Histórico de alterações. | O sistema deve manter histórico das alterações. | PJE\_UC001;   PJE\_UC002. |

## RN6

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipos de normas permitidas. | Tipos de normas penais permitidas: "Lei", "Decreto lei", "Lei complementar", "Lei delegada". | PJE\_UC001. |

## RN7

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para norma. | Toda norma tem, no mínimo, um artigo. | PJE\_UC001. |

## RN8

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para artigo. | Todo artigo deve estar vinculado a uma determinada norma. | PJE\_UC002. |

## RN9

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para parágrafo. | Todo parágrafo deve estar vinculado a um determinado artigo. | PJE\_UC002. |

## RN10

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para inciso. | Todo inciso deve estar vinculado a um determinado artigo ou parágrafo. | PJE\_UC002. |

## RN11

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para alíneas. | Toda alínea deve estar vinculada a um artigo, parágrafo ou inciso | PJE\_UC002. |

## RN12

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para itens. | Todo item deve estar vinculado a uma alínea. | PJE\_UC002. |

## RN13

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Dispositivo pai. | Quando o tipo de dispositivo for artigo não é permitido selecionar o tipo de dispositivo pai. | PJE\_UC002 |

## RN14

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campo "Data na qual o crime passou a ser considerado hediondo". | Preenchimento obrigatório se o campo "Hediondo" for igual a "Sim".   Caso contrario, o campo permanece desabilitado. | PJE\_UC002 |

## RN15

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Penas privativa de liberdade. | Se "Previsão de pena privativa de liberdade" for igual a "Sim" disponibiliza   para edição os campos: "Tipo de pena privat. de lib.", "Pena priv. de líber.   mínima cominada", "Pena priv. lib. máx. cominada", e tornar preenchimento obrigatório. | PJE\_UC002. |

## RN16

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para artigo. | Pode se desdobrar em parágrafo, inciso, parte ou alínea. | PJE\_UC002. |

## RN17

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campo(s) obrigatório(s). | O(s) campo(s) `<campo(s)referenciado(s)pela regra>` deve ter seu preenchimento como obrigatório. | PJE\_UC001;   PJE\_UC002;   PJE\_UC003;   PJE\_UC004;   PJE\_UC005;   PJE\_UC009;   PJE\_UC012;   PJE\_UC013;   PJE\_UC017;   PJE\_UC021;   PJE\_UC022;   PJE\_UC023;   PJE\_UC024;   PJE\_UC032;   PJE\_UC034;   PJE\_UC036;   PJE\_UC037;   PJE\_UC059;   Funcionalidades:   Cadastro de processo.   Certidão Interna      Casos de teste:   PJe-751   PJe-752;   PJe-799 |

## RN18

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para artigo. | Os artigos nunca se repetem dentro de uma determinada norma, porém podem existir vários Art. 1º em normas diferentes. | PJE\_UC002. |

## RN19

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exclusão de dispositivos. | Não será permitida a exclusão de dispositivos de normas pais que tiverem dipositivos de normas filhos. | PJE\_UC002. |

## RN20

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para parágrafo. | Pode se desdobrar em inciso, parte ou alínea. | PJE\_UC002. |

## RN21

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para parágrafo. | Os parágrafos nunca se repetem dentro de um determinado artigo, porém podem existir vários §1º em artigos diferentes. | PJE\_UC002. |

## RN22

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para inciso. | Pode se desdobrar em alíneas. | PJE\_UC002. |

## RN23

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para inciso. | Os incisos nunca se repetem dentro de um determinado artigo ou parágrafo,   porém podem existir vários incisos I em artigos ou parágrafos diferentes. | PJE\_UC002. |

## RN24

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para alíneas. | Pode se desdobrar em itens. | PJE\_UC002. |

## RN25

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de pena. | É obrigatório informar o tipo(gênero) de pena: privativa de liberdade, multa ou restritiva de direito. | PJE\_UC003.   Casos de teste:   PJe-751 |

## RN26

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Considerações sobre "Inclusão" de novo tipo de pena. | Na inclusão de um novo tipo de pena todos os atributos booleanos deverão estar marcados (inicialmente) como "Não". | PJE\_UC003 |

## RN27

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para tipos de pena. | Os tipos de pena nunca se repetem dentro da tabela. | PJE\_UC003 |

## RN28

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para prioridade do processo. | Não pode haver duplicidade no cadastro de prioridade do processo, mas o   processo pode acumular mais de um tipo de prioridade, conforme regra RD107. | Preenchimento de características do processo no cadastro de partes |

## RN29

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para origem do processo. | Não permitir o cadastro de nome + município + UF duplicados. | PJE\_UC005. |

## RN30

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Perfis | Por padrão, somente usuários com o perfil de administrador podem cadastrar origens, mas o tribunal pode decidir se altera ou não esta regra. | PJE\_UC005. |

## RN31

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Composição do código interno. | O código interno poderá ser composto pelo código do tribunal na numeração única (segmento e tribunal)   mais sequencial por tipo da origem. Esta regra tem o objetivo de permitir futura integração   de todas as instâncias do PJe e poderá ser observada em todos os cadastros. | PJE\_UC005. |

## RN32

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para o código na origem. | O código na origem deve permitir caracteres alfanuméricos. | PJE\_UC005. |

## RN33

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras básicas para o tipo de origem. | Não pode haver duplicidade no cadastro. | PJE\_UC006. |

## RN34

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de informação processual complementar   (IPC) do tipo transferência do réu. | IPCs do tipo transferência do réu devem obedecer as   especificações descritas nas seguintes regras complementares:   **1.** RN140;   **2.** Qualquer tipo de IPC possui uma relação com pessoa e processo judicial; no caso de IPC do tipo transferência do réu, essa relação é definida pela regra RN141. | Funcionalidade:   IPC do tipo transferência do réu. |

## RN35

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Símbolo. | Se o campo "Tipo de dispositivo da norma" for:      Artigo apresentar em "Símbolo" o "Art.";   Parágrafo apresentar em "Símbolo" o "§", com possibilidade de o usuário selecionar   a opção "Parágrafo único". Caso contrário, o campo permanece desabilitado. | PJE\_UC002. |

## RN36

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Multa x pena privativa de liberdade. | Se os campos "Privativa de liberdade" e "Multa" forem iguais   a "Sim" devem ser habilitadas as opções "Cumulativa" e "Alternativa";   o preenchimento é obrigatório. Se apenas o campo "Multa" for "Sim" o campo   "Privativa de liberdade" deve ser "Não", e deve ser marcado o campo "Isolada". | PJE\_UC002 |

## RN37

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Uso do dispositivo. | Se "Uso do dispositivo" for igual a "Tipo penal" marcar "Sim" para o campo "Previsão pena privativa de liberdade". | PJE\_UC002. |

## RN38

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regra básica para parte. | Pode ser incluída para qualquer "Dispositivo pai". | PJE\_UC002. |

## RN39

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Adicionar novo dispositivo da norma,   clicando com o botão direito do mouse sobre o item. | O sistema deve carregar automaticamente os seguintes campos:      Norma pai (conforme tela anterior);   Dispositivo pai (deve apresentar o dispositivo selecionado).   O novo registro deve ser criado abaixo do dispositivo selecionado. | PJE\_UC002 |

## RN40

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regra básica para tipo de origem. | Se o "Tipo de origem" for "Pessoa física" ou "Pessoa jurídica", não devem ser   solicitados origem, procedimento de origem e número do procedimento de origem. | PJE\_UC006. |

## RN41

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regra de exclusão. | A exclusão de registros deverá ser lógica, alterando o campo "Situação" para "Inativo". | Utilizado por todos os casos de uso que tiverem a função excluir.      Funcionalidades:   Legislação penal;   Tipo de pena;   Tipo de procedimento de origem;   Órgão do procedimento de origem      Casos de testes:   PJe-763;   PJe-753;   PJe-785;   PJe-801 |

## RN42

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Código – tipo de procedimento de origem. | Número de procedimento de origem é alfanumérico acrescido de ano (o ano deve ser ≤ ao ano atual).   Deverá ser possível que cada tribunal defina sua própria regra de validação dos números (uso de expressão regulares, por exemplo). | PJE\_UC007. |

## RN43

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Dependências que existem tanto em IPC do tipo fuga quanto em IPC do tipo soltura. | Tanto para uma IPC do tipo fuga quanto para uma IPC do tipo soltura é necessário que exista uma IPC do tipo prisão vinculada,   ou seja, no cadastro de uma IPC do tipo fuga e do tipo soltura é obrigatório o vínculo (ou dependência) de uma IPC do tipo prisão. | Funcionalidades:   IPC do tipo fuga.   IPC do tipo soltura. |

## RN44

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Movimentação. | Uma informação criminal relevante não pode ser vinculada ao mesmo tipo de movimentação mais de uma vez. (utilizar o código da movimentação para validação) | PJE\_UC010   PJE\_UC066. |

## RN45

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de informação processual complementar (IPC) do tipo prisão. | IPCs do tipo prisão devem obedecer as especificações descritas nas seguintes regras complementares:   **1.** RN53;   **2.** RN78;   **3.** Alguns tipos de IPC possuem uma relação com pessoa e processo judicial; no caso de IPC do tipo prisão, essa relação é definida pela regra RN141. | Funcionalidade:   IPC do tipo prisão. |

## RN46

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de informação processual complementar (IPC) do tipo soltura. | IPCs do tipo soltura devem obedecer as especificações descritas nas seguintes regras complementares:   **1.** RN47;   **2.** Alguns tipos de IPC possuem uma relação com pessoa e processo judicial; no caso de IPC do tipo soltura, essa relação é definida pela regra RN141;   **3.** RN55. `[ TODO: a regra RN55 foi escrita com base da RN144 do documento 'PJE - Regras de Negocio.doc', com isso é preciso validar se essa regra será mesmo considerada.]` | Funcionalidade:   IPC do tipo soltura. |

## RN47

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam IPC do tipo soltura. | As informações (ou atributos) que caracterizam uma IPC do tipo soltura são:   **1.** Uma **lista de prisões formada** conforme a regra RN427.   **\-** Essa lista deve atender as regras RN57 e RN66 (a RN66 visa atender a regra RN43).   **2.** A **data** (dia, mês e ano) que ocorreu a **soltura**.   **\-** É obrigatório informar a data da soltura.   **\-** A data da soltura deve obedecer as regras: RI3, RN74.   **3.** Uma **lista de tipos de soltura** formada conforme a regra RD8.   **\-** Essa lista deve atender as regras RN57 e RN66.   **4.** Uma **lista de movimentações processuais** formada conforme a regra RN429.   **\-** Essa lista deve atender as regras RN57 e RN166.   **5.** Uma **lista de documentos** formada conforme a regra RN430.   **\-** Essa lista deve atender as regras RN57 e RN166. | Funcionalidade:   IPC do tipo soltura. |

## RN48

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Informação processual complementar (IPC)   **única por pessoa e múltipla por processo.** | Dizemos que uma IPC tem característica de única por pessoa e múltipla por processo judicial quando essa IPC "afeta", individualmente, cada uma das pessoas escolhidas previamente e também "alcança" um ou mais processos judiciais escolhidos.   Essa característica implica:      • na criação de vários registros de IPC (com mesmo conteúdo) no banco de dados;   • a quantidade de registros de IPC criados é igual a quantidade de pessoas escolhidas;   • cada registro é criado em conjunto com os dados da pessoa ( \* ), os dados do processo judicial em questão (ou processo corrente) e mais os dados de outros processos judiciais escolhidos.   ( \* ) Caso os dados da pessoa seja proveniente de IPC(s) diferente(s) da IPC em questão, deve-se adicionar também o(s) identificador(es) dessa(s) IPC(s), que também é conhecida como IPC de dependência.      Exemplo: Seja uma IPC do tipo AEI na qual afete dez pessoas e alcance o processo judicial corrente e mais três outros processos judiciais. A IPC do tipo AEI possui dependência com a IPC do tipo WRU. Nessa situação, deverá ser criado dez registros de IPC do tipo AEI no banco de dados. Cada registro de IPC criado estará associado a uma das pessoas escolhidas em conjunto com:      • o processo judicial corrente,   • os três outros processos judiciais e,   • o identificador da IPC do tipo WRU (que é a IPC de dependência com a IPC tipo AEI). | Funcionalidade: |

## RN49

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Dispositivo pai | Se o "Tipo de dispositivo da norma" for "Artigo", o campo "Dispositivo pai"   não será obrigatório. O artigo deve ser vinculado direto à norma pai. | PJE\_UC002. |

## RN50

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Réu desconhecido. | Não pode haver recebimento de denúncia para um réu desconhecido. | PJE\_UC013;   PJE\_UC014. |

## RN51

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de pena privativa de liberdade. | Devem ser listados apenas os tipos penais iguais à pena privativa de liberdade. | PJE\_UC002. |

## RN52

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de procedimento de origem;   CEP;   Meios de contato | Não pode haver duplicidade no cadastro | PJE\_UC007.      Funcionalidades:   Cadastro de processo - aba "Partes" (Endereços);   Cadastro de processo - aba "Partes" (Meios de contato);   Tipo de procedimento de origem;   Tipo de suspensão |

## RN53

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos)   que caracterizam IPC do tipo prisão. | As informações (ou atributos) que caracterizam uma IPC do tipo prisão são:   **1.** Uma **lista das possíveis pessoas afetadas (ou réus)** no processo em questão, essa lista é formada conforme a regra RN72.   • Essa lista deve atender as regras RN249 e RN408.   **2.** A **data** (dia, mês e ano) que ocorreu a **prisão**.   • É obrigatório informar a data da prisão.   • A data da prisão deve obedecer a(s) regra(s): RI3.   **3.** Uma **lista de tipos de prisão** formada conforme a regra RD3.   • Essa lista deve atender as regras RN57 e RN66.   **4.** O **prazo (em dias)** que o(s) réu(s) deverá(ão) ficar na prisão; esse prazo deve estar de acordo com a regra RN54.   **5.** Uma **lista de estabelecimentos prisionais** formada conforme a regra RN212.   • Essa lista deve atender as regras RN57 e RN66.   **6.** Uma **lista de movimentações processuais** formada conforme a regra RN429.   • Essa lista deve atender as regras RN57 e RN166.   **7.** Uma **lista de documentos** formada conforme a regra RN430.   • Essa lista deve atender as regras RN57 e RN166. | Funcionalidades:   IPC do tipo prisão. |

## RN54

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Prazo em dias para prisão. | O prazo em dias é uma informação obrigatória quando o tipo de prisão é do tipo "Temporária" (os tipos de prisão são definidos na regra RD3). | Funcionalidade:   IPC do tipo prisão. |

## RN55

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Restrição de existência de informação processual complementar (IPC) do tipo soltura. | Uma IPC do tipo soltura cujo tipo de soltura seja igual a "Final do prazo da temporária"   só pode existir caso o tipo de prisão( \* ) seja igual a "Temporária".      Nota:   ( \* ) trata-se do tipo de prisão proveniente de uma IPC do tipo prisão escolhida previamente   e vinculada à IPC do tipo soltura em questão. | Casos de uso:   PJE\_UC018.      Funcionalidades:   IPC do tipo soltura. |

## RN56

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações(ou atributo)   que caracterizam a pesquisa da tipificação do delito. | \- | \- |

## RN57

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Seleção de único item em uma determinada lista. | A escolha de item na lista em questão deve ser de forma exclusiva, ou seja, somente um item por vez na lista. | Funcionalidades:      IPC do tipo fuga.   IPC do tipo prisão.   IPC do tipo soltura.   IPC do tipo transferência do réu.   IPC do tipo indiciamento.   IPC do tipo obrigações a pagar.   IPC do tipo oferecimento da denúncia.   IPC do tipo oferecimento da denúncia.   IPC do tipo aditamento da denúncia.   IPC do tipo aditamento da queixa.   IPC do tipo atribuição de autoria dos fatos.   IPC do tipo queixa   IPC do tipo recebimento da denúncia. |

## RN58

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regra de ordenação crescente. | Os registros apresentados devem ser exibidos em ordem crescente. | PJE\_UC021;   PJE\_UC022;   PJE\_UC023;   PJE\_UC024;   PJE\_UC027;   PJE\_UC036;      Funcionalidades:   Nó de desvio |

## RN59

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Listagem de processos. | O sistema deverá recuperar os processos ativos, ou seja, que foram protocolizados. | PJE\_UC019      Funcionalidades:   Nó de desvio |

## RN60

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Informar número de documento. | Somente informa o número do documento após selecionar o tipo de identificação. | PJE\_UC019. |

## RN61

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Agrupamento de expedientes | Ao produzir expedientes para várias partes, o servidor poderá optar por construir um mesmo documento que será enviado para mais de uma pessoa. Essa funcionalidade é denominada de agrupamento de pessoas em um mesmo expediente. Somente é possível agrupar em um mesmo expediente uma determinada pessoa se o meio de intimação (correios, mandados etc.) e o tipo de documento produzido (intimação, citação etc.) forem idênticos. Dessa forma, para uma intimação de idêntico teor a ser enviada para duas partes distintas do processo, por exemplo, o servidor só precisará construir um único documento intimando as duas partes.   • **ATENÇÃO!** Não confundir um único documento de intimação com um único expediente, será criado um expediente para cada pessoa selecionada. No entanto, o sistema criará apenas um documento para todos estes intimados, na grid de documentos será visível apenas este documento. | Funcionalidades:   tarefa Preparar comunicação   (Passo preparar ato, após escolha dos destinatários)   do fluxo Preparar ato de comunicação |

## RN62

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Cálculo do tempo da prisão. | O tempo da prisão deverá ser igual ao resultado em dias do cálculo: data da soltura menos a data da prisão (vinculada ao ICR soltura). | PJE\_UC018 |

## RN63

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Consulta de prisões. | Esta consulta deverá ser ordenada pela data da prisão em forma decrescente, ou seja, da prisão mais recente para a mais antiga. | PJE\_UC020. |

## RN64

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Informação processual complementar (IPC)   **múltipla por pessoa e múltipla por processo**. | Dizemos que uma IPC tem característica de múltipla por pessoa e múltipla por processo judicial quando essa IPC "alcança" uma ou mais pessoas e também "alcança" um ou mais processos judiciais, ambos escolhidos previamente.   Essa característica implica na criação de um único registro da IPC em questão no banco de dados em conjunto com:      • os dados das pessoas ( \* ), os dados do processo judicial em questão (ou processo corrente) e mais os dados de outros processos judiciais escolhidos.   ( \* ) Caso os dados das pessoas sejam provenientes de IPC(s) diferente(s) da IPC em questão, deve-se adicionar também o(s) identificador(es) dessa(s) IPC(s), que também é conhecida como IPC de dependência.      Exemplo:   Seja uma IPC do tipo XYZ na qual alcance três pessoas, o processo judicial corrente e mais dois outros processos judiciais. A IPC do tipo XYZ não possui dependência com outra IPC. Nessa situação, deverá ser criado um único registro de IPC do tipo XYZ no banco de dados. Esse registro de IPC criado estará associado às três pessoas escolhidas e aos três processos judiciais e sem identificador de IPC de dependência. | Funcionalidades:   \- |

## RN65

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Consulta de réus presos do processo. | O sistema deverá listar todos os réus do processo em questão, desde que:   • estejam presos;   • não tenham registro de prisão encerrada vinculada à última prisão;   • não tenham registro de soltura vinculada à última prisão;   • não tenham registro de fuga vinculada à última prisão. | PJE\_UC020 |

## RN66

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Obrigatoriedade de escolha de item em uma determinada lista. | É obrigatório a escolha de somente um item na lista em questão. | Funcionalidades:      IPC do tipo fuga.   IPC do tipo soltura.   IPC do tipo prisão.   IPC do tipo transferência do réu. |

## RN67

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Obrigatoriedade da tipificação de delito. | Será obrigatória a vinculação de tipificação de delito a um ICR para que o mesmo seja cadastrado. | PJE\_UC009;   PJE\_UC013. |

## RN68

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pesquisa movimentação do processo. | O sistema deverá apresentar todas as movimentações existentes no processo. | PJE\_UC010. |

## RN69

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Utilização do contéudo do documento. | Este ICR deverá utilizar o conteúdo do documento. | \- |

## RN70

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Movimentação para vincular | Serão pesquisadas apenas as movimentações do processo. | PJE\_UC010. |

## RN71

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Estabelecimento prisional. | Deverá ser carregado o último estabelecimento prisional (atual) no qual réu selecionado se encontre.   O estabelecimento prisional atual não será, necessariamente, o estabelecimento cadastrado na ICR de prisão,   podendo ser uma transferência do réu de estabelecimento para outro vinculado à mesma prisão. | PJE\_UC016. |

## RN72

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da lista de possíveis pessoas afetadas (ou réus). | Essa lista é composta por todos os participantes do polo passivo do processo judicial em questão (ou processo corrente).   Cada item da lista contém a(s) informação(ões): nome completo do participante. | Funcionalidade:      IPC do tipo prisão.   IPC do tipo indiciamento.   IPC do tipo obrigações a pagar.   IPC do tipo oferecimento da denúncia.   IPC do tipo aditamento da denúncia.   IPC do tipo aditamento da queixa.   IPC do tipo atribuição de autoria dos fatos.   IPC do tipo queixa.   IPC do tipo recebimento da denúncia.   IPC do tipo atribuição de autoria de fatos. |

## RN73

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Formas de pesquisa com filtro. | Caso seja selecionada a opção "Todas as expressões" então todos os filtros informados serão adicionados na pesquisa   ("e"). Caso seja selecionada a opção "Qualquer expressão" então os filtros informados poderão ser pesquisados ("ou"). | PJE\_UC001;   PJE\_UC019. |

## RN74

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Datas que não podem ser inferiores à data da prisão. | Data da fuga/data da soltura não pode ser inferior à data da prisão   (data da prisão é uma informação proveniente de uma IPC do tipo prisão escolhida previamente). | PJE\_UC021;   PJE\_UC018;   PJE\_UC017;   Funcionalidade:   IPC do tipo fuga.   IPC do tipo soltura.   IPC do tipo transferência do réu |

## RN75

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Apresentação das informações (ou atributos) que   caracterizam a lista de estabelecimento prisional | No cadastro das IPC do tipo transferência do réu, a **lista com os possíveis estabelecimentos prisionais**   não deve exibir o estabelecimento atual do preso, ou seja, deverá listar todos os estabelecimentos prisionais   cadastrados na base do PJe exceto o local onde o réu se encontra preso. | Funcionalidades:   IPC do tipo transferência do réu. |

## RN76

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data de trânsito julgado. | A data do trânsito em julgado deve ser superior a data da sentença. | PJE\_UC025. |

## RN77

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Informação processual complementar (IPC)   **múltipla por pessoa e única por processo.** | Dizemos que uma IPC tem característica de múltipla por pessoa e única por processo judicial quando essa IPC "alcança" uma ou mais pessoas e também "afeta" um único processo judicial; as pessoas são escolhidas previamente e o processo é o processo judicial em questão (ou processo corrente).   Essa característica implica na criação de um único registro da IPC em questão no banco de dados em conjunto com:      • os dados das pessoas ( \* ) e do processo judicial corrente.   ( \* ) Caso os dados das pessoas sejam provenientes de IPC(s) diferente(s) da IPC em questão, deve-se adicionar também o(s) identificador(es) dessa(s) IPC(s), que também é conhecida como IPC de dependência.      Exemplo:   Seja uma IPC do tipo ABC na qual alcance duas pessoas e afete o processo judicial corrente. A IPC do tipo ABC possui dependência com a IPC do tipo XYZ. Nessa situação, deverá ser criado um único registro de IPC do tipo ABC no banco de dados. Esse registro de IPC criado estará associado às duas pessoas escolhidas e ao processo judicial corrente e com o identificador da IPC do tipo XYZ (que é a IPC de dependência com a IPC tipo ABC). | Funcionalidades:      IPC do tipo obrigações a pagar. |

## RN78

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Informação processual complementar (IPC)   sem dependência com outro tipo de IPC. | Alguns tipos de IPC não possuem dependência com outro(s) tipo(s)   de IPC, tais como: IPC do tipo prisão. | Funcionalidades:   IPC do tipo prisão. |

## RN79

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Prazo mínimo para medida de segurança da sentença absolutoria imprópria. | O prazo mínimo para medida de segurança é de 1(um) ano e o máximo deverá ser de 3 (três) anos. | PJE\_UC023;   PJE\_UC034. |

## RN80

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recupera tipo parte. | O sistema deverá recuperar todos as descrições do tipo parte correspondente à cada participante (à parte recuperada). | PJE\_UC025;   PJE\_UC069. |

## RN81

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recupera parte. | O sistema deverá recuperar o nome de todas as partes do polo ativo e o nome do réu da parte passiva referente à sentença que está sendo editada. | PJE\_UC025. |

## RN82

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar trânsito em julgado. | O sistema deverá recuperar os dados e as datas cadastradas do trânsito em julgado para edição. | PJE\_UC025. |

## RN83

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Condição transação penal. | Caso seja selecionado a espécie de condição do tipo multa o sistema deverá recuperar   e exibir para cadastro os gêneros de condições cadastrados para o tipo multa.   Caso seja selecionado a espécie de condição do tipo restritiva de direito o sistema deverá   recuperar e exibir para cadastro os gêneros de condições cadastradas para o tipo restritivo de direito. | PJE\_UC027. |

## RN84

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Acompanhar transação penal. | Caso a condição da transação penal possua informação nos campos "Acompanhamento   da condição" o sistema deve habilitar a aba "Acompanhar transação penal". | PJE\_UC027. |

## RN85

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar as condições que possuem acompanhamento. | Caso a transação penal possua acompanhamento da condição o sistema   deverá recuperar as condições na aba "Acompanhar transação penal". | PJE\_UC027. |

## RN86

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campos para o cadastro da condição. | O sistema deverá recuperar e apresentar os campos da condição de acordo com   os atributos informados no caso de uso PJE\_UC003 - Manter tipos de pena. | PJE\_UC027. |

## RN87

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista de condição da transação penal. | Deverá recuperar todas as condições que possuem indicação de acompanhamento da transação penal. | PJE\_UC028. |

## RN88

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exclusão da legislação penal. | Caso a legislação penal possua vinculo com outras funcionalidades, o sistema não deverá permitir a exclusão. | PJE\_UC001. |

## RN89

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Condição com situação cumprida. | Não será permitido incluir novas tarefas para condições que possuírem situação de "cumprido". | PJE\_UC028. |

## RN90

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Réus com sentença não anulada. | Serão recuperados todos os réus do processo que possuem ICR de   sentenças em 1º grau. São elas: sentença absolutória própria, sentença absolutória imprópria, sentença   de extinção da punibilidade, sentença condenatória, sentença de absolvição sumária do júri, sentença de   pronúncia e sentença de impronúncia. Não devem ser listadas as ICRs que constarem ICRs de anulação vinculadas a elas. | PJE\_UC030;   PJE\_UC032;   PJE\_UC034;   PJE\_UC035;   PJE\_UC037. |

## RN91

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar sentença(s) de réu selecionado. | Caso o réu selecionado tenha mais de uma sentença, então serão listadas com suas datas e documento(s) da(s) movimentação(ões) vinculada(s) para que seja selecionada apenas uma. Caso contrário, o sistema apresentará apenas a única sentença existente, com sua data, sem que precise selecionar. | PJE\_UC030;   PJE\_UC032;   PJE\_UC034;   PJE\_UC035;   PJE\_UC037. |

## RN92

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar relatores. | Serão recuperados os nomes de todos os magistrados cadastrados e ativos. | PJE\_UC030;   PJE\_UC032;   PJE\_UC034;   PJE\_UC035;   PJE\_UC037. |

## RN93

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data da decisão menor que sentença. | A data da decisão em instância superior não poderá ser inferior à data da sentença do réu selecionado. | PJE\_UC030;   PJE\_UC032;   PJE\_UC034;   PJE\_UC035;   PJE\_UC037. |

## RN94

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Documentos da sentença. | Será(ão) apresentado(s) o(s) documento(s) da(s) movimentação(ões) vinculada(s) à sentença. | PJE\_UC030;   PJE\_UC032;   PJE\_UC034;   PJE\_UC035;   PJE\_UC037. |

## RN95

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Réus com transação penal. | Deverá recuperar todos os réus do processo que possuem transação penal cadastradas. | PJE\_UC029. |

## RN96

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Transação penal não encerrada. | Deverá recuperar todos os réus do processo que possuem transação penal cadastradas. | PJE\_UC029. |

## RN97

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data do encerramento inferior à data da transação penal. | Recupera os réus do processo que tiverem "Situação" igual a "Ativo" ou diferente de "Suspenso". | PJE\_UC029. |

## RN98

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar réus para suspensão. | Recupera os réus do processo que tiverem "Situação" igual a "Ativo" ou diferente de "Suspenso". | PJE\_UC026. |

## RN99

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campo | Descrição da regra | Itens relacionados |
| \------- | \-------------------- | \-------------------- |
| Alteração da situação do réu ao armazenar a suspensão. | Ao armazenar a suspensão do processo, a "Situação" da parte deverá ser alterada para "Suspenso" e a "Justificativa" deverá incluir a descrição do "Tipo de suspensão". | PJE\_UC026. |

## RN100

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campo | Descrição da regra | Itens relacionados |
| \------- | \-------------------- | \-------------------- |
| Data da publicação. | A data da publicação da sentença deverá ser maior ou igual à data da sentença e inferior à data atual. | PJE\_UC022;   PJE\_UC023;   PJE\_UC024;   PJE\_UC032;   PJE\_UC034;   PJE\_UC036;   PJE\_UC037.   *Funcionalidade:*   IPC do tipo atribuição de autoria dos fatos.   IPC do tipo desclassificação.   IPC do tipo sentença absolutória. |

## RN101

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista "Tipo de suspensão". | A lista "Tipo de suspensão" recupera todos os tipos de suspensão, ativos e inativos. | PJE\_UC031. |

## RN102

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Parte de um dispositivo de norma | Uma parte deve possuir um dispositivo pai associado a ela. | **Funcionalidades:**   Legislação penal   *Casos de teste:*   PJe-764 |

## RN103

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exclusão dos filhos. | Ao excluir um registro (inativar), todos os registros filhos deverão ser excluídos (inativados) também. | PJE\_UC031. |

## RN104

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Cadastro de condição obrigatório. | O cadastro de condição deverá ser obrigatório quando o valor do campo "Lista de condições para suspensão?" for igual a "Sim". Deverá ser cadastrada no mínimo uma condição. | PJE\_UC031. |

## RN105

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Prazo para suspensão obrigatório. | Para o tipo de suspensão criada/selecionada: caso o campo "Prazo para suspensão obrigatório" seja igual a "Sim", então o campo "Prazo para suspensão" no cadastro de suspensão terá seu preenchimento obrigatório. | PJE\_UC031;   PJE\_UC026. |

## RN106

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Possui acompanhamento. | O acompanhamento da suspensão somente é permitido quando informada a lista de condição para a suspensão. | PJE\_UC031;   PJE\_UC033. |

## RN107

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data de previsão de término inválida. | A data de previsão de término não pode ser menor que a data da suspensão. | PJE\_UC026. |

## RN108

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data de ICR inválida. | A data do ICR deverá ser maior ou igual à data de autuação do processo. | PJE\_UC026. |

## RN109

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperação de condições. | Recuperar as condições cadastradas e ativas. As condições deverão ser exibidas conforme o tipo de suspensão selecionado. | PJE\_UC026. |

## RN110

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Réu do processo. | Deve ser listado apenas os réus (polo passivo) do processo. | PJE\_UC019. |

## RN111

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data do prazo do cumprimento inválida. | A data prevista deverá ser menor ou igual à data do cumprimento da tarefa. | PJE\_UC033. |

## RN112

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data do cumprimento inválida. | A data do cumprimento no acompanhamento da tarefa deverá ser maior ou igual à data inicial do prazo do cumprimento da tarefa. | PJE\_UC033. |

## RN113

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recupera as condições da suspensão. | Recupera a lista de condições cadastradas no caso de uso PJE\_UC026 - Cadastrar suspensão. | PJE\_UC033. |

## RN114

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recupera acompanhamentos das tarefas. | Recupera todos os acompanhamentos cadastrados de todas as tarefas da suspensão. | PJE\_UC033. |

## RN115

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exclusão de tarefas. | A exclusão de tarefas (inativa) só deve ser permitida se os acompanhamentos ligados a ela não existirem ou forem inativos. | PJE\_UC033. |

## RN116

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista acompanhamentos pelo código da tarefa. | A lista de acompanhamento será filtrada conforme o código (número) da tarefa selecionado. Caso não haja nenhum número selecionado, então a lista apresentará todos os acompanhamentos de todas as tarefas. | PJE\_UC033. |

## RN117

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recupera número das tarefas. | Recupera o número de todas as tarefas cadastradas para a suspensão do processo de um determinado réu. | PJE\_UC033. |

## RN118

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Cadastro de campos obrigatório. | O cadastro dos campos "Ano", "Mês", "Dias", "Valor", "Qtde dias multa", "Tipo do bem", "Descrição do bem", "Descrição do local" deve ser exibido quando os valores desses forem igual a "Sim". | PJE\_UC027. |

## RN119

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Uso do dispositivo. | Se o campo "Uso do dispositivo" for "Tipo penal", deve habilitar os demais campos do painel (com exceção do campo "Multa x Pena privativa de liberdade"). Caso contrário, os campos permanecem desabilitados. | PJE\_UC002. |

## RN120

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regra "Prevê tipo penal" igual a "Sim". | Se o campo "Prevê tipo penal" for "Sim", é obrigatório que pelo menos um dos campos - multa, privativa de liberdade ou restritiva de direito - seja preenchido como "Sim". | PJE\_UC002. |

## RN121

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista de tipos de procedimento de origem. | Devem ser listados todos os tipos de procedimento de origem, ativos, cadastrados conforme o caso de uso PJE\_UC007. | PJE\_UC006. |

## RN122

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Botão "Vincular" tipo de procedimento de origem. | Deve ser retirado o (s) item (s) selecionado (s) no quadro "Tipo de procedimento de origem" e adicionado para o quadro "Tipo de procedimento de origem adicionado". | PJE\_UC006. |

## RN123

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Botão "Desvincular" tipo de procedimento de origem. | Devem ser retirados os itens selecionados do quadro "Tipo de procedimento de origem adicionado" e adicionados ao quadro "Tipo de procedimento de origem". | PJE\_UC006. |

## RN124

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Período. | A data final deve ser superior à data inicial informada. | PJE\_UC019.   **Funcionalidades:**   Tipo de suspensão   Conector ECT   **Casos de teste:**   PJe-778 |

## RN125

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Permitir reordenação da lista. | O sistema deve permitir que o usuário reordene de forma crescente ou decrescente cada coluna da lista apresentada. | PJE\_UC019. |

## RN126

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Identificador do dispositivo. | Se o "Tipo" do dispositivo cadastrado for "Parágrafo" e o "Símbolo" selecionado for "Parágrafo único", o campo "Identificador do dispositivo" deve ser desabilitado. | PJE\_UC002. |

## RN127

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Réus com suspensão. | Deverá recuperar todos os réus do processo que possuem suspensão cadastrada, sem um encerramento de prisão vinculado. | PJE\_UC038. |

## RN128

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data encerramento da suspensão. | A data para encerramento da suspensão deve ser superior a data de cadastro da suspensão. | PJE\_UC038. |

## RN129

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista de pena individual do processo. | O sistema deverá apresentar todas as penas individualizadas existentes no processo para o réu. | PJE\_UC039. |

## RN130

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pena. | O sistema deverá recuperar o gênero e a espécie cadastrados para a pena individualizada do delito. | PJE\_UC039;   PJE\_UC040. |

## RN131

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Delito. | O sistema deverá recuperar o(s) delito(s) cadastrado(s) para a(s) pena(s). | PJE\_UC039. |

## RN132

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campos para o cadastro da pena. | O sistema deverá recuperar e apresentar os campos da pena de acordo com os atributos cadastrados no caso de uso PJE\_UC003 - Manter tipos de pena. O campo "Acréscimo de pena" só é aplicado para as penas individualizadas. | PJE\_UC039;   PJE\_UC040. |

## RN133

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pena substitutiva. | O sistema deverá recuperar o gênero da pena e espécie cadastrados para a pena original. |  |

## RN134

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pena substitutiva privativa de liberdade. | Caso a pena cadastrada seja do tipo privativa de liberdade, então o sistema deverá permitir o cadastro de pena(s) substitutiva(s). Apenas as penas privativas de liberdade podem ser substituídas (ter pena substitutiva). Podem ser substituídas por pena do tipo: restritiva de direito; multa. | PJE\_UC039;   PJE\_UC040. |

## RN135

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar gênero da pena total. | Para o cadastro da pena total, o sistema deverá recuperar apenas os gêneros e espécies de pena cadastrada na pena individualizada. | PJE\_UC040. |

## RN136

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de regime da pena privativa de liberdade. | É obrigatório informar o regime caso o tipo de pena seja "Privativa de liberdade". | PJE\_UC040. |

## RN137

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de suspensão. | Devem ser recuperados e listados todos os tipos de suspensão, ativos, cadastrados conforme o caso de uso PJE\_UC031 - Manter tipo de suspensão. | PJE\_UC026. |

## RN138

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Restrição para lançamento de movimentações | O registro de movimentações manual no PJe pode ocorrer através do uso do lançador de movimentações, configurado através do fluxo. O lançamento da movimentação só ocorrerá se a movimentação estiver disponível na árvore de lançamento e se, ao selecioná-la, a movimentação constar do conjunto de movimentações a serem lançadas como validada. Para que a movimentação conste do conjunto, ela deve ser do tipo folha, ou seja, não deve ter a ela vinculada nenhuma outra movimentação como filha. Além disso, ela deve estar com a aplicabilidade ativa cadastrada de acordo com aquela instalação do PJe, ou seja, conforme parâmetros tipoJustica e aplicacaoSistema. | **Funcionalidades:**   Tarefas que utilizam o lançador de movimentações |

## RN139

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Critério para obtenção de potenciais processos judiciais em IPC. | São potenciais processos judiciais àqueles pertencentes aos réus (ou pessoas afetadas) escolhidos na IPC em questão e esses réus devem fazer parte do polo passivo desses processos judiciais. | **Funcionalidades:** |

## RN140

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam IPC do tipo transferência do réu. | Os dados que caracterizam uma IPC do tipo transferência do réu são:   \- Uma lista de prisões formada conforme a regra RN427. Essa lista deve atender as regras RN57 e RN66 (a RN66 visa atender a regra RN43).   \- A data (dia, mês e ano) do fato que ocorreu a transferência do réu. É obrigatório informar a data da transferência do réu. A data da transferência do réu deve obedecer a regra: RI3.   \- Uma lista de estabelecimento prisional formada conforme a regra RN140. Essa lista deve atender as regras RN75.   \- Uma lista de movimentações processuais formada conforme a regra RN429. Essa lista deve atender as regras RN57 e RN166.   \- Uma lista de documentos formada conforme a regra RN430. Essa lista deve atender as regras RN57 e RN166. | *Funcionalidades:*   IPC do tipo transferência do réu. |

## RN141

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Informação processual complementar (IPC) única por pessoa e única por processo. | Dizemos que uma IPC tem característica de única por pessoa e única por processo judicial quando essa IPC "afeta", individualmente, cada uma das pessoas escolhidas previamente e também "afeta" um único processo judicial (que é o processo judicial em questão, ou processo corrente).   Essa característica implica:   \- Na criação de vários registros de IPC (com mesmo conteúdo) no banco de dados;   \- A quantidade de registros de IPC criados é igual à quantidade de pessoas escolhidas;   \- Cada registro é criado em conjunto com os dados da pessoa ( \* ) e do processo judicial corrente.   ( \* ) Caso os dados da pessoa sejam provenientes de IPC(s) diferentes da IPC em questão, deve-se adicionar também o(s) identificador(es) dessa(s) IPC(s), que também é conhecida como IPC de dependência.   Exemplo: Seja uma IPC do tipo OPT na qual afete quatro pessoas e afete o processo judicial corrente. A IPC do tipo OPT possui dependência com a IPC do tipo CLK. Nessa situação, deverão ser criados quatro registros de IPC do tipo OPT no banco de dados. Cada registro de IPC criado estará associado a uma das pessoas escolhidas em conjunto com outros dados, que são:   \- O processo judicial corrente e,   \- O identificador da IPC do tipo CLK (que é a IPC de dependência com a IPC tipo OPT). | **Funcionalidades:**   IPC do tipo prisão.   IPC do tipo fuga.   IPC do tipo soltura.   IPC do tipo transferência do réu.   IPC do tipo indiciamento.   IPC do tipo oferecimento da denúncia.   IPC do tipo aditamento da denúncia.   IPC do tipo aditamento da queixa.   IPC do tipo atribuição de autoria dos fatos.   IPC do tipo desclassificação.   IPC do tipo queixa.   IPC do tipo recebimento da denúncia.   IPC do tipo atribuição de autoria de fatos. |

## RN142

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exclusão e alteração do tipo penal. | Caso o tipo penal possua vínculo com outras funcionalidades, o sistema não deverá permitir a exclusão ou alteração do tipo penal. | PJE\_UC003. |

## RN143

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de informação processual complementar (IPC) do tipo indiciamento. | IPCs do tipo indiciamento devem obedecer às especificações descritas nas seguintes regras complementares:   RN144;   Qualquer tipo de IPC possui uma relação com pessoa e processo judicial; no caso de IPC do tipo indiciamento, essa relação é definida pela regra RN141.   Alguns tipos de IPC possuem a necessidade de associação do(s) delito(s) cometido(s) pelo réu(s); no caso da IPC do tipo indiciamento, essa primordialidade é definida pela regra RN440. | **Funcionalidades:**   IPC do tipo indiciamento. |

## RN144

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam IPC do tipo indiciamento. | Os dados que caracterizam uma IPC do tipo indiciamento são:   \- Uma lista de réus no processo em questão formada conforme a regra RN72. Essa lista deve atender as regras RN249 e RN408 e RI24.   \- A data (dia, mês e ano) do fato que ocorreu o indiciamento. É obrigatório informar a data do indiciamento. A data do indiciamento deve obedecer a regra: RI3.   \- Uma lista de movimentações processuais formada conforme a regra RN429. Essa lista deve atender as regras RN57 e RN166.   \- Uma lista de documentos formada conforme a regra RN430. Essa lista deve atender as regras RN57 e RN166. | **Funcionalidades:**   IPC do tipo indiciamento. |

## RN145

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista de sentenças de 1º grau. | Devem ser listadas apenas as ICRs de sentenças em 1º grau. São elas: sentença absolutória própria, sentença absolutória imprópria, sentença de extinção da punibilidade e sentença condenatória. Caso o réu possua apenas uma ICR de sentença em 1º grau, esta deve ser listada automaticamente. | PJE\_UC030. |

## RN146

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de documento. | Existem 3 tipos de documentos: mandado de prisão, contramandado de prisão e alvará de soltura. | PJE\_UC058. |

## RN147

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Caso de uso para o tipo de documento. | Caso o tipo de documento selecionado seja um mandado de prisão, o sistema deve encaminhar o usuário para o caso de uso "Manter mandado de prisão". Caso o tipo de documento selecionado seja um contramandado de prisão, o sistema deve encaminhar o usuário para o caso de uso "Manter contramandado de prisão". Caso o tipo de documento selecionado seja um alvará de soltura, o sistema deve encaminhar o usuário para o caso de uso "Manter alvará de soltura". | PJE\_UC058. |

## RN148

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Nome da parte. | O sistema deverá recuperar do processo o(s) nome(s) da(s) parte(s) vinculado(s) ao Polo passivo. | PJE\_UC059   **Caso de teste:** PJe-736. |

## RN149

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Documento de identificação da parte. | O sistema deve recuperar o "tipo de documento" e o "número do documento" de identificação da parte. Ex.: CPF:000.000.000-00 | PJE\_UC059. |

## RN150

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar lista de penas individualizadas. | O sistema deverá recuperar todas as penas individualizadas cadastradas para o tipo de pena. | PJE\_UC040. |

## RN151

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar pena substitutiva. | Caso exista pena substitutiva cadastrada, o sistema deverá apresentar a aba "Após substituição" listada com as penas originais e seus detalhes e com as penas substitutivas e seus detalhes. Caso contrário, o sistema apresentará apenas a aba "Pena definitiva". | PJE\_UC040. |

## RN152

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Número do mandado de prisão, contramandado e alvará de soltura. | Deve ser composto pelo número do processo judicial, acrescido de um número sequencial de quatro dígitos. | PJE\_UC059. |

## RN153

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data do delito principal. | O sistema deve recuperar a data do delito informado na última ICR com tipificação cadastrada para a parte. A data deve ser recuperada do delito com maior pena prevista. | PJE\_UC059. |

## RN154

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data do delito desconhecida. | Caso o usuário marque a opção "Data do delito desconhecida", o campo "Data do delito principal" deve ser desabilitado. | PJE\_UC059. |

## RN155

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Dados do procedimento de origem. | O sistema deve recuperar os dados do procedimento de origem informados no cadastro do processo. | PJE\_UC059. |

## RN156

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Assunto do delito principal. | O sistema deve recuperar da última ICR com tipificação cadastrada para a parte, todos os assuntos vinculados aos delitos adicionados. Caso não conste nenhuma ICR com tipificação vinculada à parte, o sistema deve recuperar todos os assuntos vinculados ao processo. | PJE\_UC059. |

## RN157

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recaptura. | O sistema deve verificar na base de mandados se existe algum mandado cadastrado para a parte. Se sim, o sistema deve recuperar os dados do mandado. Caso exista mais de um mandado, o sistema deve exibir uma lista com os mandados disponíveis, para seleção do usuário. Caso negativo, o usuário deve informar os dados. | PJE\_UC060. |

## RN158

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Mandado com publicidade restrita. | Quando a opção for marcada, o sistema não deve enviar o mandado para o BNMP. Somente após o usuário informar o cumprimento do mandado, o mandado deve ser encaminhado para o BNMP. | PJE\_UC060; PJE\_UC059. |

## RN159

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Dados da sentença condenatória referente à pena privativa de liberdade. | Quando o campo "Motivo da prisão" for "Definitiva" o sistema deve recuperar os dados referentes à pena privativa de liberdade da ICR de sentença condenatória cadastrada para a parte. | PJE\_UC059. |

## RN160

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Modelo do documento. | O sistema deve recuperar todos os modelos de documento referente ao mandado de prisão. | PJE\_UC059. |

## RN161

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Prazo da prisão (em dias). | O campo "Prazo da prisão (em dias)" só deve ser apresentado quando o "Motivo da prisão" for igual a "Temporária". | PJE\_UC059. |

## RN162

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Prisão decorrente de conversão em flagrante. | O campo "Prazo da prisão (em dias)" só deve ser apresentado quando o "Motivo da prisão" for igual a "Preventiva" ou "Temporária". | PJE\_UC059. |

## RN163

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Copiar dados do "mandado", "alvará" ou "contramandado" – "De". | O sistema deve recuperar os dados da parte selecionada para realizar a cópia. | PJE\_UC059. |

## RN164

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Copiar dados do "mandado", "alvará" ou "contramandado" – "Para". | O sistema deve recuperar todas as partes do processo, exceto a parte selecionada na opção RN163. | PJE\_UC059. |

## RN165

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Excluir procedimento de origem. | O sistema não deve permitir que o usuário exclua todos os procedimentos de origem recuperados no mandado. Portanto, quando constar apenas um procedimento na lista, o ícone de excluir, deve ser retirado. | PJE\_UC059; PJE\_UC064. |

## RN166

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Não obrigatoriedade de escolha de item em uma determinada lista. | A escolha de um item da lista em questão é opcional. | Funcionalidades: IPC do tipo fuga. IPC do tipo prisão. IPC do tipo soltura. IPC do tipo obrigações a pagar. IPC do tipo oferecimento da denúncia. IPC do tipo aditamento da denúncia. IPC do tipo aditamento da queixa. IPC do tipo atribuição de autoria dos fatos. IPC do tipo queixa IPC do tipo recebimento da denúncia. |

## RN167

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Número do mandado de prisão tornado sem efeito. | O sistema deve verificar se existe algum mandado de prisão com situação "Pendente de cumprimento" para a parte. Em caso positivo, o sistema deve recuperar o número do mandado. Se constar mais de um mandado, o sistema deve permitir que o usuário selecione o mandado desejado. | PJE\_UC063. |

## RN168

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Modelo do Documento. | O sistema deve recuperar todos os modelos de documento referente ao contramandado de prisão. | PJE\_UC063. |

## RN169

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Partes associadas com documentos cadastrados. | Devem constar documentos (mandado de prisão, alvará de soltura ou contramandado) vinculados a cada parte incluída em "Partes associadas". | PJE\_UC059; PJE\_UC063. |

## RN170

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Número do mandado de prisão – Alvará de soltura. | O sistema deve recuperar o número do mandado de prisão com situação "Cumprido" referente ao réu. Caso exista mais de um mandado de prisão cumprido para o réu, o sistema deve exibir uma lista com o número de todos os mandados, para seleção do usuário. | PJE\_UC064. |

## RN171

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Modelo do Documento. | O sistema deve recuperar todos os modelos de documento referente ao alvará de soltura. | PJE\_UC064. |

## RN172

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Gerar ICR de prisão. | De acordo com os dados informados no mandado e no cumprimento do mandado de prisão, deve ser gerada uma ICR (informação criminal relevante) de prisão para o réu, conforme referência abaixo:   \- Dados do mandado: data do cumprimento, motivo da prisão, prazo da prisão (em dias), UF, cidade, estabelecimento prisional;   \- Dados da ICR prisão: data da prisão, tipo de prisão, prazo (em dias), UF, cidade, estabelecimento. | PJE\_UC065. |

## RN173

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Gerar ICR de soltura. | De acordo com os dados informados no alvará de soltura e em seu cumprimento, deve ser gerada uma ICR (informação criminal relevante) de soltura para o réu, conforme referência abaixo:   \- Dado do cumprimento do alvará de soltura: data do cumprimento, motivo da soltura;   \- Dados da ICR soltura: data da soltura, tipo de soltura. | PJE\_UC066. |

## RN174

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar se existe oferecimento da denúncia. | O sistema não deverá permitir cadastrar se não existir para o réu uma ICR de oferecimento/aditamento da denúncia para o réu selecionado. | PJE\_UC049. |

## RN175

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar se existe recebimento da denúncia. | O sistema não deverá permitir cadastrar se existir para o réu uma ICR recebimento da denúncia para o réu selecionado. | PJE\_UC049. |

## RN176

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar se existe oferecimento da queixa. | O sistema não deverá permitir cadastrar se não existir para o réu uma ICR de oferecimento/aditamento da queixa para o réu selecionado. | PJE\_UC050. |

## RN177

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar se existe recebimento da queixa. | O sistema não deverá permitir cadastrar se existir para o réu uma ICR recebimento da queixa para o réu selecionado. | PJE\_UC050. |

## RN178

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar se existe pronúncia. | O sistema não deverá permitir cadastrar se não existir para o réu uma ICR de pronúncia para o réu selecionado. | PJE\_UC051. |

## RN179

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Mandado com publicidade restrita. | Caso o processo seja "Sigiloso", o campo "Mandado com publicidade restrita" deve ser marcado automaticamente. | PJE\_UC059. |

## RN180

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Gerar ICR de soltura - processos alcançados pelo alvará. | O sistema deve gerar uma ICR de soltura para cada processo listado no campo "Processos alcançados pelo alvará". | PJE\_UC066. |

## RN181

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Processos alcançados pelo alvará. | O sistema deve permitir que o usuário selecione um ou mais processos cadastrados no sistema. | PJE\_UC064. |

## RN182

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar se existe ICR de "Suspender suspensão do processo". | O sistema não deverá permitir cadastrar se não existir uma ICR de "Suspender suspensão" para o réu selecionado. | PJE\_UC053. |

## RN183

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Validação de data | O sistema deverá permitir cadastrar se a data da retomada da suspensão for igual ou posterior à data da suspensão do processo. | PJE\_UC053. |

## RN184

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar se existe ICR de transação penal. | O sistema não deverá permitir cadastrar se não existir uma ICR de transação penal para o réu selecionado. | PJE\_UC055. |

## RN185

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar se existe ICR de transação penal. | O sistema não deverá permitir cadastrar se não existir uma ICR de suspender transação penal para o réu selecionado. | PJE\_UC054. |

## RN186

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Validação de data. | O sistema deverá permitir cadastrar se a data da retomada da transação penal for igual ou posterior à data da suspensão da transação penal. | PJE\_UC054. |

## RN187

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar se existe ICR de suspensão do processo. | O sistema não deverá permitir cadastrar se não existir uma ICR de suspensão do processo para o réu; deverá listar os réus que possuem ICR de suspensão do processo. | PJE\_UC052. |

## RN188

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da lista de delitos. | Essa lista é composta por um conjunto de informações provenientes do cadastro de legislação penal ativos no sistema. Cada item da lista contém a(s) informação(ões): Norma penal (Tipo da norma, número e nome da norma) Ex.: Decreto lei - 2848 Código penal. Artigo (sigla Art., número, texto do artigo) Ex.: Art. 121 - Matar alguém. Parágrafo (sigla, texto do parágrafo) Ex.: §1 - Se a participação for de menor importância, a pena pode ser diminuída de um sexto a um terço. Os itens são ordenados de forma ascendente por artigo. | \- |

## RN189

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar se existe vínculo entre a ICR de transação penal e a ICR de encerrar transação penal. | O sistema não deverá completar a operação se existir vinculação a uma ICR de encerrar transação penal para o réu da ICR de transação penal selecionada. | PJE\_UC019. |

## RN190

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar se existe vínculo entre a ICR de retomar penal e a ICR de suspensão da transação penal. | O sistema não deverá completar a operação se existir vínculo a uma ICR de retomar transação penal para o réu da ICR de suspensão da transação penal selecionada. | PJE\_UC019. |

## RN191

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar se existe vínculo entre a ICR de suspensão da "Suspensão da transação penal" e a ICR de suspensão da "Transação penal". | O sistema não deverá completar a operação se existir vinculação a uma ICR de suspensão da "Suspensão da transação penal" para o réu da ICR de suspensão da "Transação penal" selecionada. | PJE\_UC019. |

## RN192

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar se existe vínculo entre a ICR de suspensão da transação penal e a ICR de encerrar transação penal. | O sistema não deverá completar a operação se existir vínculo a uma ICR de encerrar transação penal para o réu da ICR de suspensão da transação penal selecionada. | PJE\_UC019. |

## RN193

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar se existe vínculo entre a ICR de retomar suspensão do processo e a ICR de suspensão da suspensão do processo. | O sistema não deverá completar a operação se existir vínculo a uma ICR de retomar suspensão do processo para o réu da ICR de suspensão da suspensão do processo selecionada. | PJE\_UC019. |

## RN194

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar se existe vínculo entre a ICR de encerrar suspensão do processo e a ICR de suspensão do processo. | O sistema não deverá completar a operação se existir vínculo a uma ICR de encerrar suspensão do processo para o réu da ICR de suspensão do processo selecionada. | PJE\_UC019. |

## RN195

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar se existe vínculo entre a ICR de suspensão da suspensão do processo e a ICR de suspensão do processo. | O sistema não deverá completar a operação se existir vínculo a uma ICR de suspensão da suspensão do processo para o réu da ICR de suspensão do processo selecionada. | PJE\_UC019. |

## RN196

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exclusão de ICR encerrar suspensão do processo com outra suspensão do processo em aberto. | O sistema não deverá completar a operação de exclusão da ICR de encerrar suspensão do processo se existir uma ICR de suspensão do processo em aberto. | PJE\_UC019. |

## RN197

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Excluir ICR de encerrar transação penal. | O sistema deverá inativar a ICR de encerrar transação penal e remover o vínculo com a ICR de transação penal vinculada à ICR excluída. | PJE\_UC019. |

## RN198

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Excluir ICR de retomar transação penal. | O sistema deverá inativar a ICR de retomar transação penal e remover o vínculo com a ICR de suspensão da transação penal vinculada. | PJE\_UC019. |

## RN199

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Excluir ICR de encerrar suspensão do processo. | O sistema deverá inativar a ICR de encerrar suspensão do processo e remover o vínculo com a ICR de suspensão do processo. | PJE\_UC019. |

## RN200

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Excluir ICR de retomar suspensão do processo. | O sistema deverá inativar a ICR de retomar suspensão do processo e remover o vínculo com a ICR de suspensão da suspensão do processo vinculada. | PJE\_UC019. |

## RN201

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Vincular medida cautelar diversa da prisão. | O sistema deverá verificar se existe pelo menos uma medida cautelar diversa da prisão vinculada ao processo. | PJE\_UC057. |

## RN202

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Gerar sugestão de datas para comparecimento periódico em juízo. | Caso o ator associe a medida "Art. 319, I - comparecimento periódico em juízo, no prazo e nas condições fixadas pelo juiz, para informar e justificar atividades" e não haja sugestões de datas para comparecimento, o sistema deverá gerar as datas dos comparecimentos de acordo com o valor dos campos "Prazos", "Frequência" e "Data do 1º comparecimento". As datas dos comparecimentos deverão ter, como primeira data, a data informada no campo "Data do 1º comparecimento" e, como última, a data resultante do somatório "Data do 1º comparecimento" com o valor do campo "Prazos", mesmo que esse somatório não atenda a frequência informada pelo ator. Ex.: prazo = 7 meses e 15 dias, frequência = mensal, data do 1º comparecimento = 01/01/2012; as datas intermediárias serão = 05/01/2012 (dt 1º comp.), 05/02/2012, 05/03/2012, 05/04/2012, 05/05/2012, 05/06/2012, 05/07/2012, 20/07/2012 (dt 1º comp. + prazo). | PJE\_UC057. |

## RN203

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar os detalhes da condição. | O sistema deverá recuperar e apresentar os valores dos campos da condição de acordo com os atributos cadastrados no caso de uso PJE\_UC003 - Manter tipos de pena. | PJE\_UC027. |

## RN204

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar réus para suspensão da suspensão do processo. | O sistema deverá listar todos os réus do processo que possuem suspensões do processo cadastradas e que não tenham sido encerradas. | PJE\_UC053. |

## RN205

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar réus para suspensão da transação penal. | O sistema deverá listar os réus que possuam ICR de transação penal ativa e que não possuam ICR de encerramento da transação penal ativa nem ICR de suspensão da transação penal ativa. | PJE\_UC055. |

## RN206

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar réus para retomar transação penal. | O sistema deverá listar os réus que possuam ICR de transação penal ativa e que não possuam ICR de encerramento da transação penal ativa. | PJE\_UC054. |

## RN207

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Vincular medida protetiva de urgência que obriga o agressor. | O sistema deverá verificar se existe pelo menos uma medida protetiva de urgência que obriga o agressor vinculada ao processo. | PJE\_UC069. |

## RN208

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recupera pessoas do processo. | O sistema deverá recuperar o tipo de vinculação e o nome de todas as partes do polo ativo, das testemunhas e das vítimas associadas ao processo. | PJE\_UC069. |

## RN209

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Valor informado deve ser maior que zero. | O sistema identifica que o valor informado para o campo deverá ser maior do que zero. | PJE\_UC069. |

## RN210

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pessoa jurídica associada à lista de pessoas com as quais o réu não deve manter contato. | O sistema identifica que o ator associou uma pessoa jurídica à lista de pessoas com as quais o réu não deve manter contato. | PJE\_UC069. |

## RN211

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Filtrar pessoas físicas. | O sistema deverá listar todas as pessoas físicas que possuam parte do nome ou número do CPF que atendam ao parâmetro informado pelo ator. | PJE\_UC069. |

## RN212

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da lista de estabelecimentos prisionais. | Essa lista é composta por um conjunto de informações provenientes do cadastro de estabelecimentos prisionais ativos no sistema. Cada item da lista contém a(s) informação(ões): UF, jurisdição e nome completo do estabelecimento prisional. Os itens são ordenados de forma ascendente por UF e jurisdição. Cada item da lista deverá estar disponível para seleção futura. `[ TODO: PJe deverá ter uma integração com o sistem InfoPenas do Ministério da Justiça, detalhes em Recuperação de informações do InfoPenas ]` | Funcionalidade(s): IPC do tipo prisão; IPC do tipo transferência do réu. PJE\_UC055. |

## RN213

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Filtro de estabelecimentos prisionais. | O sistema deverá recuperar os estabelecimentos que atendam aos filtros informados. | PJE\_UC071. |

## RN214

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Validação de inclusão/alteração estabelecimento prisional. | O estabelecimento prisional em uma cidade tem nome único, ou seja, não deve existir estabelecimento prisional ativo na mesma cidade com o nome repetido. | PJE\_UC071. |

## RN215

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Validação de exclusão estabelecimento prisional. | O sistema deve verificar se o estabelecimento prisional já foi vinculado a uma ICR e não permitir a exclusão. | PJE\_UC071. |

## RN216

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Listagem de ICR. | O sistema deverá recuperar todos os tipos de "Informação criminal relevante" cadastrados no sistema. | PJE\_UC072. |

## RN217

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Filtro de ICR. | O sistema deverá recuperar as ICRs cadastradas que atendam aos filtros informados. | PJE\_UC072. |

## RN218

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Validação de inclusão/alteração de causa e efeito. | O sistema deverá verificar se existe causa e efeito já cadastrada com o mesmo nome. | PJE\_UC073. |

## RN219

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista "Causa e efeito". | Caso não seja informado nenhum parâmetro de pesquisa, a lista "Causa e efeito" deverá recuperar todos as causas e efeitos, ativos e inativos. | PJE\_UC073. |

## RN220

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Processos alcançados pelo alvará. | No registro de um alvará, o sistema deve verificar o processo ao qual ele está vinculado e gerar uma movimentação. Os outros processos que por ventura sejam alcançados pelo alvará também terão movimentação registrada e a data da movimentação deve ser a data atual. Ao registrar as movimentações dos outros processos alcançados pelo alvará, não deve ser alterada a data de movimentação do processo principal. `[REVISAR_REGRA]` | PJE\_UC066. |

## RN221

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Qtd. dias/multa. | A quantidade de dias/multa informado não pode ser 0. | PJE\_UC039. |

## RN222

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Qtd. dias/multa. | O valor informado deve ser de 10 a 360. | PJE\_UC039. |

## RN223

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Valor do dia multa em frações do salário mínimo. | O valor informado deve ser entre 0,03 (1/30) até 5. | PJE\_UC039. |

## RN224

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Multiplicador. | O valor informado deve ser entre 1 a 3. Default o valor 1. | PJE\_UC039. |

## RN225

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista de tipo de informação criminal relevante. | O sistema deverá recuperar e apresentar os tipos de informação criminal relevante cadastrado no sistema. | PJE\_UC072. |

## RN226

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista das características de efeitos sobre a parte no processo. | Efeitos sobre a parte no processo: Ativa, Inativa, Suspende, Nenhum. PJE\_UC072. |  |

## RN227

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista das características sobre o controle de pena / prisão. | Efeitos sobre o controle de pena/prisão: Nenhum, Inicia/reinicia controle, Encerra controle. PJE\_UC072. |  |

## RN228

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista das características sobre a prescrição. | Efeitos sobre a prescrição: Nenhum, Inicia contagem do prazo, Suspende contagem do prazo, Interrompe contagem do prazo, Reinicia contagem do prazo. | PJE\_UC072. |

## RN229

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar informação da suspensão do processo. | O sistema deverá recuperar para os campos "Data da suspensão", "Tipo da suspensão" e "Data do término" os valores cadastrados na suspensão do processo. | PJE\_UC052. |

## RN230

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar informação da suspensão do processo. | O sistema deverá recuperar para os campos "Data da suspensão", "Tipo da suspensão", "Data da suspensão do processo" os valores cadastrados na suspensão do processo. | PJE\_UC053. |

## RN231

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar informação da suspensão do processo. | O sistema deverá recuperar para os campos "Data da transação penal", "Tipo da transação penal" os valores cadastrados na transação penal. | PJE\_UC054. |

## RN232

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Detalhes da falta adicionada. | O detalhe da falta adicionada deve ser único, não pode ter dois detalhes da falta adicionada iguais. | PJE\_UC073. |

## RN233

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar o nome da parte do processo informação da ICR do processo. | O sistema deverá recuperar do cadastro "Guia de recolhimento" o nome da parte selecionado na guia de recolhimento. | PJE\_UC019. |

## RN234

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar o número do documento de identificação do réu. | O sistema deverá recuperar do cadastro de processo o número do documento de identificação. | PJE\_UC019. |

## RN235

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar o regime de cumprimento da pena para o réu. | O sistema deve verificar na ICR de sentença condenatória, na ICR de regressão de regime, na ICR de progressão de regime, na ICR de unificação da pena e na ICR de soma de pena o regime do réu. Deverá recuperar pela data o regime atual do réu. | PJE\_UC019. |

## RN236

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Alteração e exclusão de ICR do processo da área de conhecimento. | Para o processo de execução penal, o sistema deverá listar as ICRs cadastradas para o réu no processo de conhecimento, mas não deverá permitir a edição e exclusão. | PJE\_UC019. |

## RN237

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Associar pendência de ICR às movimentações processuais. | O sistema deverá verificar os possíveis valores de pendências de ICR que podem ser geradas para cada movimentação escolhida. O domínio de possíveis pendências de ICR será definido para cada movimentação. Uma movimentação poderá estar associada a nenhuma, uma ou mais pendência de ICR. Caso a movimentação escolhida não possua domínio de pendência de ICR a ela vinculada, o sistema deverá gerar uma pendência genérica. Essa pendência genérica permitirá o cadastro de qualquer das ICRs permitidas pelo sistema. Caso a movimentação escolhida possua um domínio de pendência de ICR a ela vinculada, o sistema deverá gerar uma pendência que permita apenas o cadastro de ICRs pertencentes ao tipo contido no domínio associado à movimentação. | PJE\_UC077; PJE\_UC086. |

## RN238

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Permissão de saída temporária. | Caso o réu do processo cumpra pena em regime diferente de semi-aberto, o sistema deverá emitir um alerta informando o regime de cumprimento da pena. Mas deve permitir o cadastro da ICR de saída temporária. | PJE\_UC076. |

## RN239

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Saldo de dias/horas para remição de pena. | O sistema não deverá permitir que o saldo de dias seja superior a 2 dias quando o parâmetro for dia, ou que seja maior que 6 horas quando o parâmetro for horas. | PJE\_UC078. |

## RN240

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Filtro de processos com pendência de ICR. | O sistema deverá filtrar os processos que possuam pendência de ICR cadastrada e, também, de acordo com a "raia" do ator (combinação da "Localização" e do "Papel" definidos no fluxo de negócio) e "órgão julgador". | PJE\_UC086. |

## RN241

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Permissão de exclusão de pendência de informação criminal relevante. | A exclusão de pendência de informação criminal relevante só pode ser realizada por quem tem permissão. (informar os papéis que terão essa permissão) | PJE\_UC086. |

## RN242

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Associar réus à pendência de ICR. | Para cada pendência de ICR vinculada, deverão ser especificados os réus selecionados. Durante o cadastro da ICR que solucionará a pendência, apenas esses réus poderão ser selecionados. | PJE\_UC077. |

## RN243

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar informações da movimentação do processo. | O sistema deverá recuperar a informação da movimentação do processo que possui pendência de ICR. | PJE\_UC086. |

## RN244

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar informações do cadastro do processo. | O sistema deverá recuperar a informação do cadastro do processo que possui pendência de ICR. | PJE\_UC086. |

## RN245

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
|  |  |  |

## RN246

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar informação do livramento condicional. | O sistema deverá recuperar do caso de uso PJE\_UC079 - Cadastrar livramento condicional, as informações do livramento condicional. | PJE\_UC081. |

## RN247

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data da suspensão do livramento condicional. | A data da suspensão do livramento condicional não poderá ser menor que a data do livramento condicional. | PJE\_UC081. |

## RN248

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data inicial posterior à data final. | A data do final deverá ser posterior ou igual à data inicial. | PJE\_UC076. |

## RN249

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Seleção de múltiplos itens em uma determinada lista. | A escolha de item na lista em questão deve ser de forma múltipla, ou seja, um ou mais itens podem ser escolhidos por vez na lista. | Funcionalidade: IPC do tipo prisão, IPC do tipo indiciamento, IPC do tipo obrigações a pagar, IPC do tipo oferecimento da denúncia, IPC do tipo aditamento da denúncia, IPC do tipo aditamento da queixa, IPC do tipo atribuição de autoria dos fatos, IPC do tipo queixa, IPC do tipo recebimento da denúncia, IPC do tipo atribuição de autoria de fatos. |

## RN250

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Privação de liberdade do adolescente em aberto. | O sistema deverá verificar se existe IPR de privação de liberdade cadastrada para os adolescentes selecionados. Caso haja adolescente com IPR de privação de liberdade em aberto (ou seja não possui encerramento da privação de liberdade ou registro de IPR de evasão ou IPR de liberação registrada para privação de liberdade), o sistema não permitirá que se realize o cadastro de uma nova IPR de privação de liberdade enquanto não encerrar a última. | PJE\_INF\_UC001. |

## RN251

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Obrigatoriedade da vinculação da privação de liberdade. | É obrigatório vincular a IPR de privação de liberdade no cadastro das IPRs de liberação, evasão. | PJE\_INF\_UC002; PJE\_INF\_UC003. |

## RN252

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Período de privação de liberdade coincidente. | O sistema não deverá permitir o cadastro de uma IPR de privação de liberdade caso haja um período coincidente com outra IPR de privação de liberdade. Ou seja, não será permitido o cadastro de privações de liberdades de conversão de prisão com períodos coincidentes, mesmo que parcialmente. | PJE\_INF\_UC001. |

## RN253

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Obrigatoriedade da vinculação da privação de liberdade. | É obrigatório vincular a IPR de privação de liberdade no cadastro das IPR de evasão, liberação e transferência do adolescente. | PJE\_INF\_UC005. |

## RN254

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Alteração da situação do adolescente ao armazenar a suspensão do processo. | Ao armazenar a suspensão do processo na entidade processo, o valor da "Situação" da parte (adolescente) do processo deverá ser alterado para "Suspenso" e, no campo "Justificativa", deverá ser incluída a descrição contida no campo "Tipo de suspensão". | PJE\_INF\_UC006. |

## RN255

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Encerrar suspensão do processo. | Ao armazenar o encerramento da suspensão do processo na entidade processo, a "Situação" da parte (adolescente) do processo deverá ser alterada para diferente de "Suspenso" e, no campo "Justificativa", deverá ser incluída a descrição contida no campo "Motivo do encerramento da suspensão". | PJE\_INF\_UC007. |

## RN256

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Transferência de adolescente para unidade de internação. | O adolescente deve ser transferido para uma unidade de internação diferente da unidade de internação atual. | PJE\_INF\_UC004. |

## RN257

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exibição da opção de assinatura em lote. | O link para realização da assinatura em lote deve ser exibido somente nas tarefas marcadas como aptas à realização de assinatura em lote e cuja action é capaz de recuperar todos os documentos já minutados e não assinados aptos à assinatura. | PJE\_LOT\_UC001. |

## RN258

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Conclusão da assinatura. | Ao realizar a assinatura bem sucedida, o sistema deverá providenciar a transição do processo da tarefa atual para a tarefa padrão definida no nó de tarefa, se existente. | PJE\_LOT\_UC001. |

## RN259

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Movimentação processual automatizada. | O sistema deverá assegurar que, quando da assinatura em lote, a movimentação processual vinculada ao ato assinado, também previamente minutada, seja lançada automaticamente. | PJE\_LOT\_UC001. |

## RN260

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Erro nas assinaturas. | O sistema deverá assegurar que, havendo erro na assinatura de algum dos documentos, somente ele seja afetado pelo evento, mantendo-se a minuta originária e o processo na tarefa. | PJE\_LOT\_UC001. |

## RN261

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Erro nas transições. | O sistema deverá assegurar que, havendo erro nas transições de algum dos processos, somente eles sejam afetados pelo evento, retornando os processos à tarefa originária. | PJE\_LOT\_UC001. |

## RN262

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Restrição de tamanho e tipos de arquivos para upload | O PJe restringe, com exceção das funcionalidades de protocolo inicial, de anexação de documentos nos detalhes do processo e na resposta de expediente nas versões 1.6.0 e superiores, a extensão de documento anexado a pdf e o tamanho a 1500 KB. Pode-se alterar o tamanho para menos de acordo com a configuração do parâmetro "Tamanho máximo por página" da configuração do tipo de documento, o que alterará a restrição para aquele tipo específico. | Funcionalidades: Upload de documentos |

## RN263

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Visualização de minutas pendentes. | A tela de seleção de processos para assinatura deve permitir que o usuário visualize diretamente a minuta em vias de ser assinada. | PJE\_LOT\_UC001. |

## RN264

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Aptidão para assinatura em lote. | A assinatura em lote só deve ser feita sobre minutas de tipos de documentos em que um dos papéis do usuário conste como facultativo, obrigatório ou suficiente à validação. | PJE\_LOT\_UC001. |

## RN265

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Restrição para vinculação de advogados a processos | Ao cadastrar um advogado como parte, pode ocorrer as seguintes situações:   O CPF digitado não corresponde a um advogado cadastrado na base de dados nacional da OAB - Não estando o advogado cadastrado na base nacional da OAB não será possível a sua inclusão como advogado em qualquer polo de qualquer processo.   O CPF digitado corresponde a advogado cadastrado na Base de Dados Nacional da OAB, mas não cadastrado no PJe - Estando o advogado cadastrado na base nacional da OAB, mas não cadastrado no PJe, não será possível a sua inclusão em qualquer polo de qualquer processo.   O CPF digitado corresponde a advogado cadastrado na Base de Dados Nacional da OAB e cadastrado no PJe - Estando o advogado cadastrado na base nacional da OAB e cadastrado no PJe será possível a sua inclusão em processos e em qualquer polo. | Funcionalidades: Cadastro de partes |

## RN266

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Confirmação dos dados do advogado | Para casos de indisponibilidade do serviços da OAB, pode ser dado ao administrador ou a algum papel desejado a permissão para confirmar o cadastro iniciado anteriormente. De posse dos dados do advogado, que por algum motivo não conseguiu realizar o cadastro, o usuário preenche o formulário e, se desejar, valida aqueles dados na OAB e na Receita Federal por meio de opções especificas. O credenciamento é realizado caso o usuário confirme o cadastro, independente de eventuais validações realizadas. | Funcionalidades: Confirmação de cadastro |

## RN267

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Transição de tarefas de processos em lote | Ao realizar a transição para um conjunto definido de tarefas pendentes em processos judiciais, o sistema deverá assegurar que todas as tarefas pendentes sejam marcadas como concluídas. | PJE\_LOT\_UC002 |

## RN268

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Movimentação processual automatizada | O sistema deverá assegurar que, quando da transição em lote, a movimentação processual automatizada, quando houver uma vinculada à tarefa, seja lançada para cada um dos processos afetados, considerando seu contexto. | PJE\_LOT\_UC002 |

## RN269

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Erro nas transições | O sistema deverá assegurar que, havendo erro na transição de algum dos processos, somente eles sejam afetados pelo evento, retornando os processos à tarefa originária. | PJE\_LOT\_UC002 |

## RN270

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Seleção de processos para tarefas em lote | A seleção de processos para realização de atividades em lote na tela de tarefas (painel do usuário) deve permitir que o usuário:      • selecione individualmente alguns dos processos;   • selecione todos os processos da página;   • selecione todos os processos da tarefa;   • selecione todos os processos filtrados;   • inverta a seleção existente na página;   • inverta a seleção existente na tarefa;   • inverta a seleção de processos filtrados;   • limpe a seleção existente. | Funcionalidades: |

## RN271

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Seleção de processos na tela de movimentação em lote. | A tela de movimentação em lote deve permitir que o usuário:      • exclua um processo do conjunto que será afetado pela transição;   • reinclua um processo no conjunto que será afetado pela transição. | PJE\_LOT\_UC002 |

## RN272

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Transições escolhidas por padrão | A tela de tarefa em lote deve carregar por padrão, como transição para cada um dos processos, a transição padrão definida na tarefa ou, se inexistente, a primeira transição possível. | PJE\_LOT\_UC002 |

## RN273

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Troca de transição | A tela de tarefa em lote deve permitir trocar a transição padrão definida segundo RN272 por quaisquer das demais transições possíveis para o processo. | PJE\_LOT\_UC002 |

## RN274

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Troca de todas as transições | não implementada | Existindo uma ou mais idêntica transição possível em todos os processos selecionados, a tela de tarefa em lote deve permitir que o usuário substitua todas as transições dos processos por uma daquelas elegíveis para todos. |

## RN275

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Numeração de processo | A numeração do processo segue a máscara: NNNNNNN-DD.AAAA.J.TR.OOOO. O sistema deve gerar o número sequencial do processo no ano, calcular os dígitos verificadores, e obedecer às regras para cada parte da máscara. | Funcionalidades: Consulta de localização de processo, Log da distribuição. RN276 |

## RN276

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Assunto principal | Por padrão, o sistema mantém o primeiro assunto associado como o assunto principal. No cadastro de processos, o assunto principal não poderá ser removido da aba "Assuntos". Quando existe apenas um assunto associado, ele é o principal. | Funcionalidades: Cadastro de processo, aba "Assuntos"; Cadastro de processo com jus postulandi, aba "Assuntos". RN277 |

## RN277

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Usuário externo | Todos os demais usuários não caracterizados como usuários internos são usuários externos, incluindo partes, advogados, membros do Ministério Público, defensores públicos, peritos e leiloeiros. No PJe, é considerado usuário externo aquele que tenha vinculado pelo menos um dos papéis que represente as pessoas listadas. | Funcionalidades: Preparar remessa para o 2º grau. RN278 |

## RN278

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Validação de CPF | O sistema deve validar os dígitos verificadores do CPF de acordo com a regra Módulo 11. Se os dígitos estiverem corretos, deve validar a existência do CPF por meio de acesso à base de dados da Receita Federal e obter os dados do portador do CPF. Observada a restrição RN498. | Funcionalidades: Cadastro de processo; Cadastro de processo incidental; Cadastro de processo jus postulandi; Preparar remessa de manifestação processual para envio à instância superior. Casos de testes: PJe-729. RN279 |

## RN279

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificar autoridade cadastrada | O sistema deve impedir que uma autoridade seja incluída duas vezes no mesmo polo. `[REVISAR_REGRA]` | Funcionalidades: Cadastro de processo; Cadastro de processo incidental; Cadastro de processo jus postulandi; Casos de teste: PJe-362 Mensagens: MN151 |

## RN280

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Validação de CNPJ | O sistema deverá validar os dígitos verificadores do CNPJ de acordo com a regra Módulo 14. Se os dígitos estiverem corretos, deverá validar a existência do CNPJ por meio de acesso à base de dados da Receita Federal e obter os dados do portador do CNPJ informado. Observada a restrição RN498. | Funcionalidades: Cadastro de processo; Cadastro de processo incidental; Cadastro de processo jus postulandi; Preparar remessa de manifestação processual para envio à instância superior. Casos de teste: PJe-374, PJe-729. |

## RN281

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar dados da tabela país | O sistema deve recuperar da tabela "País" todos os registros de país com a situação de ativo. | Funcionalidades: Cadastro de processo; Cadastro de processo incidental; Cadastro de processo jus postulandi. |

## RN282

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Autenticação do login | A autenticação do login segue a linha de handshake seguro do SSL. Não há comparação com eventual gravação de cadeia de certificação no sistema. A verificação de LCRs faz um cache local da LCR em arquivos temporários. | Funcionalidades: Login; Assinatura digital. RN283 |

## RN283

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Assinatura digital | A assinatura digital de documentos no PJe é feita através de um aplicativo que é instalado na estação do cliente. Esse aplicativo consiste em uma applet que utiliza um algoritmo de assinatura do modelo NULLWITHRSA, assinando o documento tomando como entrada o hash MD5 do documento a ser assinado através de sistemática ASN1MD5. | Funcionalidades: Login; Assinatura digital. |

## RN284

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Adição de arquivos | O usuário pode enviar um ou mais arquivos para adição. | Funcionalidades: Detalhes do processo (aba "Anexar documentos"); Cadastro de processo (aba "Anexar petições e documentos"); Painel do advogado/procurador (Resposta de expedientes) |

## RN285

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Restrições de arquivos adicionados | O usuário pode adicionar arquivos desde que suas extensões estejam dentro das possíveis configuradas na aplicação PJe e que obedeça ao tamanho máximo configurado no PJe. A configuração é vinculada à instalação. Os nomes dos arquivos não devem iniciar com espaço(s) em branco. | Funcionalidades: Detalhes do processo (aba "Anexar documentos"); Cadastro de processo (aba "Anexar petições e documentos"); Painel do advogado/procurador (Resposta de expedientes) RN286 |

## RN286

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Detalhes dos arquivos adicionados | Para gravação definitiva, o sistema deve exigir informações sobre os arquivos adicionados: tipo de documento, descrição, se requer sigilo judicial a seu respeito e a ordem de inclusão. O documento será considerado válido após assinatura. | Funcionalidades: Detalhes do processo (aba "Anexar documentos"); Cadastro de processo (aba "Anexar petições e documentos"); Painel do advogado/procurador (Resposta de expedientes) |

## RN287

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Ordenação de arquivos adicionados | A data de juntada será a data em que o documento foi protocolado e juntado como documento válido nos autos. Arquivos do processo aparecem na ordem em que foram assinados, ou seja, a ordenação deve ser feita pela data da assinatura mais antiga do documento. | Funcionalidades: Detalhes do processo (aba "Anexar documentos"); Cadastro de processo (aba "Anexar petições e documentos"); Painel do advogado/procurador (Resposta de expedientes) |

## RN288

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pedido de inclusão em pauta | Nas sessões de julgamento, é pedida a inclusão de um processo em pauta pelo seu relator. Pode o presidente ou a secretaria do órgão julgador colegiado adicionar processos em pauta, de acordo com a configuração do órgão respectivo. | Funcionalidades: Configuração do órgão julgador colegiado; Inclusão em pauta através da opção Relação de julgamento RN289 |

## RN289

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Revisor | Um processo precisa ter um revisor vinculado dependendo do que determina sua classe judicial. A atribuição do revisor se dá na abertura da sessão de julgamento, quando o relator determina que o processo está pronto para revisão. (comportamento a ser documentado quando da finalização da funcionalidade pronto para revisão) | Funcionalidades: Classe judicial; Painel do magistrado; Painel do magistrado na sessão |

## RN290

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Validação do número do processo originário (versão futura) | Para o 2º grau, o número do processo originário deverá ser validado em conformidade com a regra de numeração única de processos, definida pelo CNJ (20 dígitos), inclusive validando o dígito verificador. A validação será realizada se o parâmetro que a habilita estiver marcado. O sistema deverá realizar a verificação para as classes em que o processo de referência for obrigatório ou facultativo (neste último, desde que preenchido) | Funcionalidades: Configuração → Tabelas judiciais → Classe judicial → Classe judicial; |

## RN291

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Inclusão de processo em pauta | Os processos podem ser incluídos em pauta obedecendo às seguintes condições: 1. aptos para pauta (processos cuja classe processual exige inclusão em pauta e publicação prévia com prazo de 48 horas); 2. remanescentes (processos que já estiveram em pauta e que, portanto, já cumpriram o requisito da publicidade); 3. em mesa (processos cuja classe processual não exige inclusão em pauta, levando à dispensa de publicação anterior). Durante a sessão de julgamento, entretanto, somente os processos remanescentes e em mesa poderão ser incluídos devido ao requisito de publicidade prévia. | Funcionalidades: Configuração de classe judicial; Inclusão em pauta através da opção Relação de julgamento; RN293 |

## RN292

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exclusão da sessão de julgamento | A exclusão da sessão de julgamento pode ser realizada pelo perfil "Secretário de sessão" (ou perfil responsável pelo cadastro da sessão de julgamento na instalação). (adicionar restrições de exclusão, como, por exemplo, sessão em andamento) | Funcionalidades: Cadastro de sessão de julgamento; RN294 |

## RN293

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Inclusão de anexos inválida | Os anexos que serão incluídos no processo (pdf) devem possuir uma petição (ou documento) para serem validados pelo sistema. | Funcionalidades: Cadastro de processo (aba "Anexar petições e documentos"); RN295 |

## RN294

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Fechamento de pauta | A pauta de uma sessão é fechada automaticamente ou não dependendo da configuração do órgão julgador colegiado respectivo. No caso de ser configurada para fechar automaticamente, o botão 'Fechar pauta' não deve aparecer, já que a pauta é fechada automaticamente, respeitando a configuração de 'Prazo para ciência e inclusão em pauta' e de 'Prazo de disponibilização da pauta de julgamento' existentes também no cadastro do órgão julgador colegiado. A criação da sessão e a montagem da pauta devem ser realizadas com antecedência, assim haverá tempo hábil para o seu fechamento. | Funcionalidades: Pauta de audiência; Configuração do órgão julgador colegiado; Fluxo de contagem de prazos |

## RN295

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Botão de assinatura | O botão de assinatura aparece na tela do editor com assinatura após a seleção da movimentação vinculada ao tipo de documento. Para possibilitar a vinculação de movimentações a um tipo de documento, é necessário selecionar um agrupamento no cadastro deste, com exceção dos documentos associados ao magistrado, que em geral são despacho, decisão e sentença. Essa restrição se dá pelo uso do lançador de movimentos temporário. No caso desses tipos de documentos, não deve haver agrupamento de movimentação associado. Para outros tipos de documentos, ao associar o agrupamento de movimentações, se ele contiver movimentos associados com aplicação de classe adequada e aplicabilidade, além de estar com permissão para o papel adequado, o usuário poderá selecionar movimentos para associar ao anexar documentos. Na configuração do tipo de documento, são associados papéis que determinam aqueles que podem ou não assiná-los. Além disso, o botão de assinatura, com exceção dos documentos associados ao magistrado, só deve aparecer quando o tipo de documento utilizado no Editor (variável do fluxo) está associado a um agrupamento de movimentação. Quando não há essa vinculação, o botão não é exibido. Além da vinculação a um agrupamento, é necessário haver modelo de Documento associado ao tipo de documento utilizado. Qualquer documento PDF anexado ao processo deve ser assinado. | Funcionalidades: Assinatura digital; Editor com assinatura; RN390 |

## RN296

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Botão de assinatura | O botão de assinatura aparece na tela do editor com assinatura após a seleção da movimentação vinculada ao tipo de documento. Para possibilitar a vinculação de movimentações a um tipo de documento, é necessário selecionar um agrupamento no cadastro deste, com exceção dos documentos associados ao magistrado, que em geral são despacho, decisão e sentença. Essa restrição se dá pelo uso do lançador de movimentos temporário. No caso desses tipos de documentos, não deve haver agrupamento de movimentação associado. Para outros tipos de documentos, ao associar o agrupamento de movimentações, se ele contiver movimentos associados com aplicação de classe adequada e aplicabilidade, além de estar com permissão para o papel adequado, o usuário poderá selecionar movimentos para associar ao anexar documentos. Na configuração do tipo de documento, são associados papéis que determinam aqueles que podem ou não assiná-los.   Além disso, o botão de assinatura, com exceção dos documentos associados ao magistrado, só deve aparecer quando o tipo de documento utilizado no Editor (variável do fluxo) está associado a um agrupamento de movimentação. Quando não há essa vinculação, o botão não é exibido. Além da vinculação a um agrupamento, é necessário haver modelo de Documento associado ao tipo de documento utilizado.   Qualquer documento PDF anexado ao processo deve ser assinado. | Funcionalidades:   Assinatura digital;   Editor com assinatura;   RN390 |

## RN297

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Unicidade de documentos | 1 - Para os tipos de documento CPF e Título de Eleitor, pode haver apenas, mas não obrigatoriamente, um com situação ativo.   2 - São considerados duplicados os documentos de mesmo tipo, número, órgão emissor e data de emissão.   3 - Na inclusão, devem ser recusados documentos duplicados, conforme item 2, independentemente da situação, ativo ou inativo.   4 - Na edição de documentos, pelos papéis autorizados, deve ser observado o seguinte: (a) todas as regras de inclusão existentes; (b) não é possível a alteração do tipo do documento. | Funcionalidades:   Configuração de documentos de identificação no cadastro de pessoa;   Processo (atualização dos dados das partes) |

## RN298

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exibição de modelos de documentos | Os modelos de documentos exibidos para seleção são filtrados primariamente pelo tipo de modelo de documento selecionado. Sendo assim, as caixas de combinação (combos) de modelos de documentos não devem ser exibidas caso o tipo de modelo de documento não tenha sido selecionado (quando aplicável). Se o tipo de modelo foi selecionado, os modelos a serem exibidos são limitados àqueles associados às localizações:   **Caso 1 (vinculado à localização estruturada):** atual do usuário logado; ancestrais diretas da localização do usuário logado; descendentes da localização do usuário logado. Com essas regras, modelos de abrangência mais ampla serão visíveis para o usuário, assim como estarão os da própria localização e os de sua localização filha, se existente. Ressaltando que ancestrais diretos não inclui apenas o ancestral imediato, mas todos os ancestrais em linha direta até o ancestral raiz.      Exemplos:      Tomemos como exemplo a estrutura de localizações de um tribunal hipotético, com servidores (pessoas) lotados em cada uma dessas localizações conforme abaixo:   ![estrutura!](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-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 "estrutura")   Digamos que a estrutura utilizada como exemplo tenha a ela vinculados os seguintes modelos:   ![estrutura2!](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/+h8A0DJgnAC0lCSsff36tXwAAJgP3759M3/++ae+i4zz1atX8iEA4O5ZWVkxl5eX+g5hLQCtJddzsgUD0ASPHz9OQjXUqyxx+fie07BxMoeHh/rq9vbHH3/UVwBMB+pVOWXlg7AWgJYC4wSgpcA4AWgpME4AWkqpcd78sWkWFhZyt8E/elDnuDGnv9A1vhnJu9Ebvt5Nc/pd3s6G76dmk8tVz+nKfaZlrOfc/OPGvtZzT4PN98BUTsldt9t+OaXSnwFR+cbcSXlPQCXPeTy65VHdYHv5RHeOYfRm+ordRBqV+eeD2flE1/x0TT/oJjdfzow5vTZnP52bzR92jFnu6Z7JWfxp0/TNvnnLBj+WkRnQeYdbJ+aa69To2JhPO+ZRA41EV5hpWMteZ/1A30xIE2nUYfT3Pv09NhsVG59ZsPjrWa0GcBL4HGe/LhqztG3O6FzyelqWNszmljHDz+fjPeD3K3PB/1d6Rs785KVt+H+fQaOo1ziTtGfI1MYZh74SJunn1qiGZucH+3kSPrwZ2OOplcyEFP/Yfe74wjRyjmdcGDogb5t+Tq00veb3disKvUbmnM93tGEKb2McikUtvcuf2/xQKd7n8hwTXKNeX7i5/JdfV528+PsYW466BeFm2TkXTY/nGXw6M+dVI52D9cJwsygPSfm4evS/r9MQXQnKMBPW+tcwMOf6aUp0jf71J2kN9Bi9/uA+hZFeXNZF9z0DtVZC3o+h16d9nj2Usx3ffuUD/ju57dP7/ikFJsTXI97Xvz35T95m3ifpHcm3BfcZhc6W0bG8L0qz2vHpe/rG7ckWfbZ1Qq8IzbOfh4Toepjg/Jnvfr2lYCxJO85b8F3NZ+6+KN3MNSru2uxx5ddVlpd6Za7XqOnafeH9T8sjm3bZj+zJ9ejmX29ZHtw50vNqWbh8jSmb3LST84f3NJO2Sys5F5FbftVsZOpJCJTppK9pt5eBZxluP5LWpfc77zsz20u6o4DZ9+f6ZvMnF6Ytmu2/KF9/9cwHbrm4n6N7MlCoVbiP4H7akNI++c3lf808P6WiF09xY84/87fTkHjNLw8N255f2Va0dqhOLbP9zrH5KuFZ2XWV5UX3UV/vuQubnzw3VAE1HNXoYWvTbMh9XDMbR/Tv4NzzkPtmnc45+J4NFxd7q/L/4mq8d+A8kaHpO0p1LY10xufBr0eLZuNnTmffnIunPDdnn6gW/LxhQ+aAbNpyDx3/nFMqlPbutn6XynmXzNWl7fCiK9sVSuvc2tPs8XVthJkurKVYfo8LjeHOPFeSKLSaPzr6urBuLk6vDbVkVIyTcfVvkekOzRUZ9hVVCLPVM7lDKxr2PNpeNdSiGmpBa0Bh1hpXAKoCp8+1UpRdV1ledF8en2ifvkzvp2tILugaqeL9lp6HjalWmJaD61+78hhuf0jrT0Ee8lj8dY+aIsrT39RV0kY0baA94r5uxM2V7M2lvMGxXS/O64LeKzl+ChuZus9pW2TevkrhcIux3qYRN21FKaSZetCjt1xk1n3TWyJDIO8TVHAP17qe/BdGHVW4+eOttObs7d67ayi9rrK86L48fGN2o6jJpq29G1yhzXm94faLqUfT136/Fu8dUJSHXJx3fWteSGTgPGME3Sfx7ZdXaT/Sw3n+PFZ7ZfWH762f13SQbVIbmc44g8GYNfNSW+++DssXV+aUOAyylTglTmPc8YXozRh9LAlr6caV5dj+VEAt5EdXsCPzYdtVhCi0IuxAgD84wB6W/n0/NW/FE1SAjn3B5+Cb/86FWh6511WWF91HrfgHF3bpz0c2DNRKngzq6OCIDIo4b21bfvZ61uOtUuPE/1PPU16RXX58r+t7+7I8FGPDyaEZUjppWBqTTVvuoePJhvXA79y56JrfcR0rHsF35z37Yr/hBiXlvo+xkVLIooXDWgNC3qCJdoaTzRscSDvP9vN4sMDiOty8UUf5NOxcx2mMOz7ucDPBdWwd3x77gwUB4cADk0nPz090LBOXWXqt6cCDfH5k8y37XZqall9ORfcgsy/nuorzUr6PsdftNm/wIyh/3sKyjssrr145MtcW3ZOiPLjvxXlOy9jPLxGVb3gNx1SH4vTCexXkK5OWEtlBkLcSGykrn1LjfIjYChHd3HtLWgmTxm6m6Pm8yox6VU5Z+Uzd5+waNkQpHni4X9gRXfI01SYGTEvpKCmoC4wzRn5W8PuV9xfXr3tEfariPlhz2FHSY7PXxGwjAOPMor8f3rOpXnm4nyl4m+VUQIc9X/3RaJAPjBOAlgLjBKClwDgBaCm50pjPnj0TyT4AmgD1qhxfktaXxsw1TgDA3QPFdwDuCbmeE8rcoCmg+F4OFN/B3EC9KgfT9wC4h8A4AWgpME4AWgqME4CWUmycsQRksOWIPMvx+rn/+o6Q1edtkkcBJTjpyRwtHScxOUb1IB+bbizzmWHC+plVb3A4hYicc8u5JtPVKjZOTyvmVqQVfI2UauphABRDNWorUrQjKsvOzIutvjHx2lin5xTDhlmm9jiG5sJaMWYYLajO6kpf1PJSbszVZd8cH5EBtJWVVbMai2azpOrRsYp3WcTLkmGu0ueTMrlxcvjxy8AMxJ1TiPB/OaHCFw1R/FAgE1L4oYgNDzbfDOgY+70w9EnDh+w+cN/oPd00fV+Llj2Q2TQby/peceGkbHG468Jg3t5E2u1S13RfWRhb9Thhw2wcpWJeDHv746cb+k7p7Yly4Mun+n4CpvOcnygE2dUw95F+ljA0O597VtqQwmI+YGxfQBkeGLMn4TPLJaYygjd/vDA7K181tLb7qj00B7QSebaKpxDID1f6eSPU2iXjc1q/cs+N/7AjatjXyDBU9Px6+cJKiAq0jz2XE0QfrZqdH/Ia8/C461NTcFwKS9mksi8sUp1V5lt8sja18sSUYW35A38SaQwV1g1DmGJS4WR99oYiK+0ThYIScWRwT7AynVbm1CrRx5Ka0gdN1NVVfd15W1FnT+ugE5YWeF9G1T7bx81PI+c4H5bPdJrAch5P77dBmutzZmChZX1JVNGwHYsfwiy8NRdF4sjg3sA6xOKFZFAlbuy5D0o1qUDjVTRyA8NIBbNln6cYv7DwSLR5Y9X2bBpV4PNYA+bGY1aCZjM0zpDiRxlUxYr79vnRAxLivKfeCbj3iBc6Mx8+nplh5uluNnIa/pvVrWdEYDxQtU+jKdmXUYzPPuowm0YVrMff/3tAIW3BYx8aYIbG6SnYUYebFc7lwTMih+91qPXBMVVJbpSqlIP7DiuwD83+wTD3AVciVZoMGqn6ujNiUWf3xh38uiRG76na66BPZtxD00j6vfLoi/LuGiPq/wf7FNIWPPahAWYa1p4sn9uQgjrc/BRlqwBnn+okT13ifX/3ss/IyMX1N9b1exvyKICiVhXcH6xWcIFBPHlprk8v5KlmEpoa8obJuIN9vAEPNkqdeEepJHXJ7rvQhy2FddAnPO7Rtqn2PBt9UPBMNXrJ1QuHWNoDZgDqVTll5XNnfU4AQD1gnAC0FBgnAC0FxglAS4FxAtBSYJwAtBQYJwAtBcYJQEtpxjh1QnrekjCRD5lIcqImsr70Ds4DGsCu4e2yTEmwBrVKnnJoxjhlfmJ2xj8X1vnBjKc4MXxD1+rM0AXzp8MyJVQf0zWotI2Ozf5a/cagobCWJy8bbwGqomvlZvkYcvHMaxftlrYAuXRWpuTJSzJKb36uOK+huZqPcerk5SjTwUJZF67oloQGEo56cify/RpyJE9ZGeHMPI+kLUD76bRMSQM0NyCkrUOaaRvS2mVALCdxkar3kZsfbn9Ib4ovd7LEN6O6HMnak7HrB0Bb6bBMiU/VZWgxzRmnC22T9Za+/MOaeekp88nq84Aw45AjeSg8AJkSaVyG1IBUWIYW0aBxamirBRcWahimvvgsHxYThMCQI+kynZYp4Xqsnj27jnQ8jRpnuqrcD2kJUS04TkavznZX7ee5QI7kQSFeqIMyJWKYtis3iWEyzRonFS2Htvtr60GoYLnQ0SqVmhgD5EgeCh2UKeFzicecTmS9YePUwmT8VlDi/SF1tDm8eGHMLj/ewRlrDORIHhq2zhQYxD2UKeGBLZaz23fn1i07eWEM5OqFQ8hJgBmAelVOWfk07jkBAM0A4wSgpcA4AWgpME4AWgqME4CWAuMEoKXAOAFoKTBOAFrKHI3TSkr4MygqSzmUyUyU7QMtwd377sqUhIs3JquP8zFOKZx1c5FMbqdNp1DVnuI0EyreZDAFHZYpkbm16frlKmtE85iDcVIrs7tjhkdfwxUCS9vmPT8aML7wulA6Z97aUdBeOitTEtVBmSRfOJe8mLs3Tmll+ubkt+zUYllk/dd2OpE4CA1yvOqXdH+yzw9Z5PsDM2Cdodw0wtDaekoOUXhVjZ24nHhPSdcdWxampCGO3eq3mA+FhyJTIhPhJ3jI7hyMk1oZs2p6YzNKhlMmbUKp7Hzu2fV6ujIhPwzdNxfLGj5LGi+08K0RJqG1hNV8YxbN9l9fpRVMF8lSXipJXnBFqi6x8uDpukyJGr0oIex6TqcicxwQcsSexrVc46RNyHjcBVMYscfrSIMQyeGp/y31KLxQdOV9uo/TCFvEhKqSFwQkVurQcZkSCW/J6HU8pe4Yxt0bpxiIH3+zp9LWjS4i7W2ERpuVNukH3re3XLOfIh58X9cJ2m39IH/daFXJCyEIxSGxMo5Oy5Q4Sp1HMXMwTg5lKCT9OCajtaRNyEf9y8tbayCNRJp+siVeL6Wq5AVXJkis1KSrMiUB5Y1MEXMIa8lTviMPebCeHZyh2D80sTJpE8/AKbZ/62sWVUH7O2l/kM5PLWzuTzlVJS8USKzUoaMyJf7AktSDKkYcMp8+p8Ti12bzs8pLyLZu9o+sQLT0M8dKm/TNyfK5/W6hBEUZduBn1Ulc6Plty+q0kJyxVpW8cH0iSKzUoWsyJVK/ZQBKzz2pnhC5euEQchJgBqBelVNWPi0YrQUA5AHjBKClwDgBaCkwTgBaCowTgJYC4wSgpcA4AWgpME4AWkozxqmTvfOms414LeVEkhPVkPR5FoZs49bigXZgp0p2WqbEQ+possytOs0Yp8xPzFulYZ/TOXbW/oRwYa1fppObJ5WDAPOgwzIlPtTY8GqnSWgorNVHzseZ1rVyyZrJhomVEyaVgwDzobMyJQk8Uf+CGiF9W5PG+pwyeTnKdLBQNljn6IUG/PkvAzOQsMCFGmmYYDd4wy7SdZkSVsU4+/m92VvRD2rS3ICQhLZ+pv1Hz1NfoExy5BMZ8S7vszP3J5X6GH3cmUirBcyJTsuUjMwHyvc0UWNzxulC22Qtoy//ME5yJLy4SaQ+pP950Dcn7+prtYB50V2ZktGbdfpTYelZCQ0ap4a2WnBhoYZhalZyJCIIgcdLfbBh2nV4E6yZA3OlkzIlFCa/vfQahglp1DjTVeV+SEvUkhyxq92rSn1Yw+SwB4Z5LxEv1C2ZEpHC9BoGGa3lBfg1fx5q1jipaK2CAOu+xq1gmeRIlkpSH9IfqbhyHbSU7smUSLfMaxBYDcOwyoevyVyBho1TC5PxW8GxkiM+1aU+JHRmLSEnB6Hb2B+hQauwdabAIO6jTElTkGULh5CTADMA9aqcsvJp3HMCAJoBxglAS4FxAtBSYJwAtBQYJwAtBcYJQEuBcQLQUmCcALSUORqnlZRws3p4qzyzp0xmomzfzLET/HOfVAY83L3vsExJsHiDt/rnm49xSuF4j3znTadQtaNiV7zJYAq6LVMiq13kqXlujm39hRlzME5qZXZ3zDB53J6ytG3en/azUid1kccLYoXKfaDLMiX8MOe6D8uNuXvjlFamb05+y04tjjWB4tAg41W/pPuTfX7IIt8fmIGn0BemEYbW1lNyiMKrauzzORPvKem6Y8eFKOdpujNUHrzvdFemxK5DjReO12UOxkmtjFk1vbGejQynTNqEV6N87tn1eroyIT8M3TcXyxo+SxovtPCtESahtYTVfGPsQ3VlncToVlcxUF4qSV5Yhttnpif5jmU1QEBnZUrsulJu3F3DMUl3bY4DQo60Mx22XOOkTch4dtXLUii7x+tIgxDJ4an/LfWop6Poyvt0H6cRtogJVSUvHEd7mu9IVgNEdFSmhBwQ11bXaJQ7j2Lu3jjFQPy1nOyp0otIexuh0WalTfqB9+0t1+yniAff13WCduMV63nrRqtKXjiCvobfIIAMnZQpkXEPF3XZ98XOo5g5GCeHMhSSfhyT0VrSJrYDXgsxmjT9ZEsW8qZUlbzIRRoBUEgHZUqKqDtANIewljzlO/KQB+vZwRmK/cOKXCZt4hk4dejf+ppFVdD+Tiq5SeenFja3b1BV8kJJ+8aa70ylAyndkylxA5GJ+6H3rAxZ1Ygd8+lzitu/NpufVV5CtnWzL78LaT9zrLRJ35wsn9vvFkpQlGEHfladxIWe37asTgvJGWtVyQtL/7RnziXNWFYD5NE5mRLK8y1ZZtJlkkGrCX7eI1cvHEJOAswA1KtyysqnBaO1AIA8YJwAtBQYJwAtBcYJQEuBcQLQUhZ4VIhfvH792rx69Uo+fPbsmXn8+LG8BmBaUK/KceWzsrJiLi8v5TWTa5wAgLsnNk6EtQC0lMRzcsjx7ds3+RAAMB9yw1oAQLtAWAtAKzHm/wH+ZfP3q94oKAAAAABJRU5ErkJggg== "estrutura2")   Com essa configuração, os servidores deverão ter acesso aos modelos (e apenas a eles), conforme relações abaixo:   • Servidor S1   \- Modelo M1   \- Modelo M2   \- Modelo M3   \- Modelo M4   \- Modelo M5   • Servidor S2   \- Modelo M1   \- Modelo M2   \- Modelo M3   • Servidor S3   \- Modelo M1   \- Modelo M2   \- Modelo M3   • Servidor S4   \- Modelo M1   \- Modelo M4   \- Modelo M5   • Servidor S5   \- Modelo M1   \- Modelo M4   \- Modelo M5   Caso 2 (sem vinculo à localização estruturada): atual do usuário logado e descendentes da localização do usuário logado. | Funcionalidades:   Todas que contenham a caixa de combinação de modelos de documentos |

## RN299

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Petição sigilosa | Ao cadastrar uma petição/documento, deve haver uma opção que determina que o documento é sigiloso. Uma vez marcada, só quem está adicionando o documento e as pessoas devidamente autorizadas, conforme regra RN451 poderão enxergar o documento. Essa opção é de grande valia para apresentação de contestações (defesas). O advogado protocola sua contestação no sistema antes da audiência e marca o sigilo. Assim, o advogado do reclamante não enxerga. Na audiência, se nao tiver acordo, o juiz desmarca o sigilo e a petição fica visível para todos. A opção deve ser implementada através de um campo de seleção (checkbox) ao adicionar documentos. | Funcionalidades:   Onde há inclusão de petições(cadastro de uma petição inicial ou incidental);   Painel do advogado (resposta de expedientes);   Pesquisa de processos (Detalhes do processo - Aba "Anexar petições ou documentos") |

## RN300

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Habilitação nos autos em processos que tramitam em segredo de justiça | Habilitação de advogados nos autos em processo que tramitam em segredo de justiça não deve ser automática, devendo ser analisada pelo magistrado a quem o processo está distribuído. | Funcionalidades:   Habilitação nos autos |

## RN301

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Validação dos dados do usuário não cadastrado | A validação de dados no cadastro de usuários novos deve ser feita através de serviços automáticos (webservices) disponibilizados pela OAB e pela Receita Federal. A configuração de acesso a esse serviço é feita através do PJe na seção de parâmetros. A validação deve ser feita exclusivamente quanto ao CPF oriundo do certificado digital e das datas de nascimento recuperadas do certificado, da Receita Federal e da OAB. No caso da OAB, o acesso será realizado de acordo com a identificação da pessoa como sendo um advogado, informação essa retornada pela Receita Federal. Dada a recuperação do cadastro, o único caso em que o cadastro não deve ser considerado validado é quando há uma divergência entre a data de nascimento registrada no certificado e uma das datas recuperadas, a partir do CPF obtido do certificado, dos serviços da OAB e da Receita Federal. | Funcionalidades:   Cadastro de usuários novos |

## RN302

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Vinculação de papel a tipo de documento | No cadastro do tipo de documento, a vinculação de um papel ao tipo de documento significa que aquele papel poderá incluir no sistema aquele tipo de documento. Essa configuração determina também o aparecimento do botão de assinatura para aquele documento quando o usuário logado for do papel associado. O documento será considerado válido no sistema de acordo com o parâmetro "exigibilidade". A exigibilidade é "SEM ASSINATURA" quando o papel vinculado puder criar um novo documento do tipo especificado, mas não poderá assiná-lo, consequentemente não poderá torná-lo válido no sistema. A exigibilidade é facultativa quando o papel a ela vinculado pode assinar o documento, mas não é necessário que o faça. Se todos os papéis associados ao tipo de documento forem facultativos, o documento não será válido para o sistema, ainda que tenha todas as assinaturas associadas. Se a exigibilidade for suficiente, esse papel é o único necessário para que o documento seja considerado válido. Se o parâmetro estiver marcado como "obrigatório" para todos os papéis vinculados ao documento, serão necessárias as assinaturas de todos os papéis vinculados ao documento para que esse seja considerado válido. Segue tabela ilustrativa das regras:   ![documento!](https://docs.pje.jus.br/assets/images/Documento-c31830315d3e31cf6f6dbe94fa01fd05.png "documento")   Situações de exemplo: se estiver marcado como "obrigatório" para três papéis, e outros dois papéis estiverem marcados como "facultativo", só a assinatura dos três primeiros papéis (marcados como "obrigatório") serão necessárias para que o documento seja considerado válido. Se apenas um dos papéis vinculados ao documento estiver marcado como suficiente, mesmo que outros papéis estejam marcados como "obrigatório", a assinatura do papel marcado como "suficiente" será a única necessária para que o documento seja considerado válido. Para um papel marcado como suficiente, tendo outros papéis marcados como obrigatórios, o documento só será considerado válido quando papel marcado como suficiente assinar o documento. | Funcionalidades:   Cadastro de tipo de documento   Inclusão de editor com assinatura no fluxo |

## RN303

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Ocorrência da verificação da prevenção | A rotina de análise de prevenção ocorre somente na distribuição e redistribuição de processos. Sendo assim, o processo que teve sua autuação retificada não sofre nova análise, porém os novos processos autuados levarão em consideração a nova composição do processo retificado. | Funcionalidades:   \- Processo não distribuído (distribuição manual);   \- Painel do usuário (distribuição manual);   \- Protocolar processo:   \- Protocolo de processo;   \- Protocolo de processo com jus postulandi;   \- Protocolo de processo incidental;   \- Processos cadastrados e não protocolados |

## RN304

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Situações indicadas para análise de prevenção | A análise de prevenção utiliza os seguintes critérios para marcar possíveis preventos para o processo:      (i) Identidade de assunto(s) e partes (ainda que em polos diversos);   (ii) Identidade de assuntos e entre a parte ativa e a pessoa jurídica a que está vinculada a autoridade constante do polo passivo, em caso das classes: mandado de segurança, mandado de injunção, habeas corpus e habeas data (essas classes devem estar relacionadas a um agrupador de classes com o nome "ACO");   (iii) Identidade de assunto(s) e de polo passivo em ações coletivas (classes: ação civil pública, ação coletiva pública, mandado de segurança coletivo) (essas classes devem estar relacionadas a um agrupador de classes com o nome "ACL").      Com base nesses critérios, o sistema aponta ao magistrado a possibilidade de prevenção, cabendo a ele confirmar ou declinar a prevenção de fato, retirando a conexão entre os processos, caso decida pela declinação ou registrando a data, caso confirme.      As partes verificadas na prevenção são apenas as partes principais do polo ativo e passivo, não são verificados advogados ou outros representantes ou terceiros interessados.      É válido salientar que o sistema verificará a prevenção se todos os procedimentos de instalação forem realizados conforme recomendado em nossos manuais, especificamente o procedimento que ativa os índices do Hibernate, conforme seção de implantação do manual de instalação do PJe. | Funcionalidades:   \- Processo não distribuído (distribuição manual);   \- Painel do usuário (distribuição manual);   \- Protocolar processo:   \- Protocolo de processo;   \- Protocolo de processo com jus postulandi;   \- Protocolo de processo incidental;   \- Processos cadastrados e não protocolados |

## RN305

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Definições sobre o distribuidor   (Regra depreciada, excluindo-se sua ocorrência a partir da versão 1.6.0) | No segundo grau, há a possibilidade de distribuição manual de processos. A distribuição é realizada por um papel ligado à Diretoria de Distribuição. Esse usuário, quando ligado a esse papel, não deve ter localização associada, visto que a distribuição ocorre para os diversos órgãos julgadores, e o usuário deve ter acesso à distribuição de todos os processos, até mesmo os já distribuídos, visto que há a possibilidade de redistribuição. | Funcionalidades:   \- Processo não distribuído (distribuição manual);   \- Painel do usuário (distribuição manual);   \- Configuração do servidor como diretor da distribuição, servidor da análise da distribuição, servidor da distribuição, servidor da prevenção, servidor da retificação da distribuição. |

## RN306

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Id | Após a inclusão, o sistema deve gerar uma numeração sequencial para todos os documentos anexados no processo, inclusive petições. A numeração sequencial será diferenciada conforme o grau de jurisdição, ou seja, serão distintas as sequencias do 1° Grau, 2° Grau ou 3° Grau. A numeração deve ser apresentada no campo Id. | Funcionalidade: Cadastro de processo (aba "Processo", painel "Documentos") |

## RN307

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Alteração da jurisdição   (seção/subseção) | O sistema não deve permitir que seja alterada a jurisdição de processos já distribuídos através de retificação de autuação. A alteração da jurisdição só deve acontecer através de redistribuição. | Funcionalidade: Retificar autuação |

## RN308

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Publicação de fluxo | Ao criar um fluxo associando-o a uma classe judicial, quando há processos distribuídos daquela classe, o processo inicia sua tramitação através do fluxo configurado. Isso só é possível se duas condições de publicação forem satisfeitas: o fluxo deve estar publicado no motor de fluxos (através da opção "Publicar" da tela de definição); o fluxo deve estar marcado como "Publicado" (através da tela de formulário dos dados básicos do fluxo). | Funcionalidades:   \- Processo não distribuído (distribuição manual);   \- Painel do usuário (distribuição manual);   \- Protocolar processo:   \- Protocolo de processo;   \- Protocolo de processo com jus postulandi;   \- Protocolo de processo incidental;   \- Processos cadastrados e não protocolados;   \- Cadastro de fluxo;   \- Definição de fluxo |

## RN309

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Ação do botão "Gravar" | O registro gravado somente terá validade se for assinado digitalmente. | Funcionalidades:   Cadastro de processo (aba "Anexar petições e documentos"). |

## RN310

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Marcação de fluxo publicado | Ao inserir a data de publicação do fluxo como sendo a data atual, o parâmetro "Publicado" será automaticamente marcado. | Funcionalidades: Cadastro de fluxo |

## RN311

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Assinatura de documentos para assistente | Aos perfis de assistente (assistente de advogado, assistente de procurador), só é permitida assinatura de documentos de acordo com marcação expressa em seus cadastros. | Funcionalidades:   \- Cadastro de assistente de advogado;   \- Cadastro de assistente de procurador. |

## RN312

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Visibilidade | A visibilidade é o conceito que determina a restrição ou permissão de visualização dos processos no PJe. A visibilidade está ligada aos cargos de um órgão julgador. Os processos distribuídos para um determinado órgão julgador que estão sob responsabilidade de um determinado cargo poderão ser visualizados por servidores no PJe, através de seus paineis, se a visibilidade para aquele cargo naquele órgão julgador estiver marcada. A restrição é feita similarmente nos perfis de magistrado. Salvo para os casos de processos sigilosos, todo usuário interno pode consultar, acessar, e anexar documentos a processos de sua instalação do PJe, ainda que não estejam (os processos) vinculados a seu órgão julgador. | Funcionalidades:   \- Cadastro de servidor;   \- Cadastro de magistrado;   \- Painel. |

## RN313

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Cadastro de partes não principais | No cadastro de processo, o cadastro das partes não principais depende da configuração dos tipos de parte do sistema e dos tipos de parte vinculados à classe judicial do processo que se está cadastrando. Para que o tipo de parte apareça, precisa ter sido configurado como um tipo de parte ativo do sistema. Na configuração da classe judicial, ela deve ter sido configurada como tipo de parte da classe. O tipo de usuário "Advogado" não pode cadastrar em "Procurador/Terceiro vinculado" partes do tipo "Advogado" no polo passivo. (Se o papel do usuário logado herdar as configurações do papel de advogado, com exceção de administradores, esse usuário não conseguirá cadastrar advogado para o polo passivo) | Funcionalidades:   \- Cadastro de partes;   \- Protocolar processo:   \- Protocolo de processo;   \- Protocolo de processo com jus postulandi;   \- Protocolo de processo incidental;   \- Processos cadastrados e não protocolados. |

## RN314

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Definição da data da audiência marcada automaticamente | Para que o sistema possa marcar automaticamente ou sugerir uma data de audiência, algumas configurações são necessárias:   1\. Cadastrar nos tipos de audiência (Configuração → Audiências e sessões → Tipo de Audiência) a audiência que se quer que seja automaticamente marcada. Por exemplo, “Audiência de conciliação”.   2\. Cadastrar salas de audiência para cada órgão julgador (Configuração → Audiências e sessões → Sala). Pode haver salas ESPECIALIZADAS em um ou mais tipos de audiência, conforme regra RN610. As salas de audiência devem pertencer ao mesmo órgão julgador cuja competência contém a classe configurada conforme item 4.   3\. Configurar o tempo médio de audiência por órgão julgador, por tipo de audiência (Configuração → Audiências e sessões → Tempo de audiência do órgão julgador). Esse valor será utilizado como tempo padrão da audiência, para agendamento (por exemplo: 15 Min.)   4\. Indicar, na configuração do órgão julgador, em cada classe processual para cujos processos se quer agendar uma audiência automaticamente, o tipo de audiência que deve ser selecionado. Se esse valor não tiver sido preenchido, o sistema verifica o tipo de audiência para agendamento automático configurada na própria classe. A classe determina, por meio dessa configuração, se haverá audiências automáticas no ajuizamento.   5\. Indicar o valor do parâmetro “tempoMinimoAudiencia” (Configuração → Sistema → Parâmetro) com o prazo, em dias, que deve ser considerado a partir da data atual, ou seja, se um processo é distribuído hoje o sistema buscará identificar automaticamente uma data possível para a audiência somando os dias informados no parâmetro. Se o servidor que estiver marcando a audiência utilizar a funcionalidade de data sugerida para a audiência, o sistema somará a partir do dia em que está sendo feita a ação de marcação o número de dias informados no parâmetro (exemplo: se “tempoMinimoAudiencia” estiver com o valor 15, e um processo está sendo distribuído no dia 01/05/2013, o sistema só procurará horário vago para marcação da audiência inicial a partir de 15 dias após tal data, ou seja, a partir de 16/05/2013, da mesma forma, se hoje dia 1/6/15 o servidor solicitou para que o sistema sugerisse uma data possível para a audiência e o parâmetro estiver com o valor 15 o sistema buscará um dia em que haja audiência e a sala esteja disponível a partir do dia 16/6/15).   6\. Deve-se lembrar que a contagem do prazo mínimo de audiência automática deverá ser em dias corridos, no entanto, se durante este prazo houver um evento no calendário que suspenda a contagem de prazos, a contagem do prazo mínimo de audiência automática também será suspensa, reiniciando após o evento do calendário. Para a definição da data da audiência o sistema então deverá fazer a contagem de prazos em dias corridos, desconsiderando eventos de suspensão de prazos, e após decorrido o prazo mínimo o sistema deverá marcar a audiência no primeiro horário vago que encontrar.   7\. A regra de ocupação e bloqueio de pauta (RN391) deve também ser observada. | Funcionalidades:   \- Protocolar processo:   \- Protocolo de processo;   \- Protocolo de processo com jus postulandi;   \- Protocolo de processo incidental;   \- Processos cadastrados e não protocolados   Casos de teste:   \- PJe-451   Mensagens:   \- MN166 |

## RN315

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar registro de etnia | O sistema deverá recuperar da tabela de etnia todos os registros ativos. | Funcionalidades:   \- Cadastro de processo - aba "Partes" (Informações pessoais)   \- Cadastro do processo com jus postulandi |

## RN316

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar registro de profissão | O sistema deverá recuperar da tabela de profissão todos os registros ativos. | Funcionalidades:   \- Cadastro de processo   \- Cadastro do processo com jus postulandi |

## RN317

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar registro de estado civil | O sistema deverá recuperar da tabela de estado civil todos os registros ativos. | Funcionalidades:   \- Cadastro de processo   \- Cadastro do processo com jus postulandi |

## RN318

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar registro de escolaridade | O sistema deverá recuperar da tabela de escolaridade todos os registros ativos. | Funcionalidades:   \- Cadastro de processo   \- Cadastro do processo com jus postulandi |

## RN319

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar registro de tipo de documento de identificação | O sistema deverá recuperar da tabela de tipo de documento de identificação todos os registros ativos. | Funcionalidades:   \- Cadastro de processo   \- Cadastro do processo com jus postulandi |

## RN320

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar registro de Estado | O sistema deverá recuperar da tabela de Estado todos os registros ativos. | Funcionalidades:   \- Cadastro de processo   \- Cadastro do processo com jus postulandi |

## RN321

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar registro de CEP | O sistema deverá recuperar da tabela de CEP, todos os registros ativos. | Funcionalidades:   \- Cadastro de processo   \- Cadastro do processo com jus postulandi |

## RN322

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Prazo para ciência | A contagem de prazo para ciência das partes é feita em dias corridos. | Funcionalidades:   \- Dar ciência às partes |

## RN323

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data de inclusão de registros | Os registros serão listados conforme a data de inclusão, ou seja, os últimos registros incluídos serão os últimos da lista. | Funcionalidades:   \- Nó de desvio   Casos de teste:   PJe-622. |

## RN324

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Processos do nó de desvio | A funcionalidade "Nó de desvio" suspende um processo já protocolado. Apenas os processos protocolizados poderão ser chamados à ordem. Os processos suspensos deverão ser apresentados na tarefa "Nó de desvio". Se um processo for arquivado ou encerrado, ele não poderá ser chamado à ordem. | Funcionalidades:   \- Nó de desvio   Casos de teste:   PJe-622;   PJe-623;   PJe-626. |

## RN325

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Inclusão de alertas nos processos | Um alerta pode ser cadastrado no sistema sem estar vinculado a um processo. No entanto, o alerta somente será visível a outros perfis caso o número do processo seja associado ao alerta que foi cadastrado pelo administrador, secretário ou magistrado. | Funcionalidades:   \- Alertas |

## RN326

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Permissão de acesso à tarefa responsável pela reclassificação do tipo de documento | Somente terão acesso à tarefa responsável pela reclassificação do tipo de documento os usuários que tenham recebido a permissão do papel "Pode reclassificar documento" cujo identificador é "pje:papel:podeReclassificarDocumento". | Funcionalidades:   \- Reclassificar tipo de documento   Casos de teste:   \- PJe-711;   \- PJe-741. |

## RN327

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Utilização de CEP no cadastro de endereço das partes | Para logradouros com CEP único, ou seja, cujo CEP não está vinculado a um determinado logradouro, a digitação do nome do logradouro e bairro no cadastro de partes é necessária.   Por exemplo: O CEP 38610-000, da cidade de Unaí, não apresenta logradouro associado. Ele (o CEP) pode ser cadastrado no PJe sem logradouro e bairro. Assim, ao cadastrar uma parte, o usuário utilizará o número do referido CEP e fornecerá o logradouro e bairro específicos. Caso exista logradouro e bairro vinculados ao CEP, o sistema não permite a alteração dos conteúdos destes no cadastro de endereço da parte. Caso julgue insuficiente as informações do endereço, o usuário deve utilizar o campo "Complemento". | Funcionalidades:   Cadastro de endereço das partes;   Regras: Regra de recuperação de CEPs |

## RN328

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Definição de pesos de órgão julgador | O peso de órgão julgador (campo 'Divisor do peso do processo'), deverá ser um número percentual entre zero por cento e 200%, correspondendo 100% ao peso padrão. Caso seja reduzido a 0%, o órgão deve ser excluído da distribuição. Caso seja superior a zero e inferior a 100%, o órgão deve receber menor peso de distribuição, devendo ela equivaler ao percentual indicado da média. Caso seja superior a 100%, deverá ser maior, até o dobro quando atingido o máximo. | Funcionalidades:   Distribuição; |

## RN329

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Preparação dos dados de uma remessa ou de uma baixa de manifestação processual a ser enviada para outra instância. | Os dados (classe judicial, assuntos, partes e documentos) da remessa ou da baixa não poderão alterar os dados do processo judicial originário (isto é, a autuação original do processo judicial deve ser mantida). Exemplificando: caso seja excluído uma parte (do polo ativo ou do polo passivo) da remessa, essa parte deverá ser excluída somente da remessa de manifestação processual que será enviada para outra instância e, caso essa parte exista no processo judicial originário, essa parte deverá continuar cadastrada nesse processo. | Preparar remessa de manifestação processual para envio à instância superior.   Preparar remessa para o 2º grau.      Casos de testes:   PJe-719   PJe-736   PJe-777   PJe-737   PJe-726   PJe-729   PJe-733   PJe-718   PJe-720   PJe-722   PJe-768   PJe-846   PJe-847   PJe-848   PJe-851 |

## RN330

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperação de classe judicial. | Se existir uma remessa de manifestação processual para o processo judicial em questão, o sistema deverá recuperar a classe judicial informada nessa manifestação e, além disso, o sistema deve permitir que o usuário vincule uma outra classe judicial à manifestação processual. | Funcionalidades: Preparar remessa de manifestação processual para envio à instância superior. |

## RN331

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Comportamentos após envio da remessa de manifestação processual. | Após o envio de uma remessa de manifestação processual, deve-se verificar o status da operação de envio dessa remessa.      Caso esse status seja igual a verdadeiro (isto quer dizer que teve sucesso no envio), os seguintes comportamentos devem acontecer:   1- Gravar em um atributo apropriado no cadastro do processo judicial em questão uma informação que indicará se o processo foi remetido com sucesso para o STF ou para o STJ, pois essa informação poderá impactar outras funcionalidades do PJe que exibem o cabeçalho do processo judicial: a exibição pode ser através de um ícone ou de um texto descritivo em local apropriado no cabeçalho do processo que informará "Processo remetido ao `<informar aqui a sigla da instância superior>`.".   `[TODO: para equipe de projeto -<br/>Precisa ser definido qual o contéudo do atributo que receberá 'a informação que indicará se o processo foi remetido com sucesso...'.`   `Precisa ser definido se será usado o desenho do ícone ou texto descritivo.`   `É preciso também identificar quais funcionalidades do PJe exibirão a informação "Processo remetido ao <informar aqui a sigla da instância superior>." no cabeçalho do processo. ]`   2- Gravar em atributos apropriados do cadastro do processo judicial em questão o número do recibo e o número do protoloco recebidos após envio da remessa.   Caso a classe judicial dessa remessa 'exigir numeração própria', o número do protocolo da remessa (i.e., número do processo judicial gerado pela instância superior que recebeu a remessa) é diferente do número do protocolo do processo judicial em questão.   3- O movimento "132-Recebidos os autos" deve ser cadastrado para o processo judicial em questão informando que a remessa de manifestação processual foi efetivamente recebida na instância superior.   4- Prosseguir com o processo judicial em questão para um nó responsável por identificar processo que teve remessa de manifestação processual enviada com sucesso.   `[TODO: para equipe de projeto -`   `Precisa validar a configuração sugerida desse nó:`   `Label = Processos remetidos à instância superior`   `Comportamento sugerido: consultar detalhes da remessa de manifestação processual do processo judicial em questão, bem como, o número do recibo e o número do protoloco obtidos da tarefa responsável pelo envio da remessa em questão.]`      Caso esse status seja igual a falso (isto quer dizer que não teve sucesso no envio), os seguintes comportamentos devem acontecer:   1- As remessas não enviadas estarão no nó Acompanhar Manifestação Processual para envio automático e programado pelo sistema. Ainda neste nó, caso o usuário queira retificar algo na remessa, basta ele prosseguir com o processo judicial em questão para o nó Preparar remessa de manifestação processual para envio à instância superior.   Funcionalidade: Preparar remessa de manifestação processual para envio à instância superior. | Funcionalidade:   Preparar remessa de manifestação processual para envio à instância superior. |

## RN332

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Classes judiciais definidas para o envio de remessa à instância superior. | São todas as classes judiciais vinculadas ao agrupamento previamente definido para o envio de remessa à instância superior. Esse agrupamento definido deverá constar na tabela de parâmetros do PJe sendo um parâmetro para cada tipo de instância superior, vejamos:   pje:classe:agrupamento:remessaSTF:codigo para identificar o agrupamento de classes judiciais definido para o envio de remessa ao STF.   pje:classe:agrupamento:remessaSTJ:codigo para identificar o agrupamento de classes judiciais definido para o envio de remessa ao STJ. | Funcionalidades:      Preparar remessa de manifestação processual para envio à instância superior.      Casos de teste:   PJe-777   PJe-768. |

## RN333

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Anexar documentos | Para anexar documentos a um processo não protocolado, os dados de jurisdição, classe, assunto e partes do processo devem ter sido preenchidos. No caso do cadastro de partes, para processo incidental e para desmembramento do processo, se a classe não exigir polo passivo, só o cadastro do polo ativo é necessário. | Funcionalidades: Protocolar processo: Protocolo de processo; Protocolo de processo com jus postulandi; Protocolo de processo incidental; Processos cadastrados e não protocolados   Regras: RN348 |

## RN334

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Forma de envio da remessa de manifestação processual à instância superior (STF ou STJ). | A forma de envio da remessa de manifestação processual deve obedecer os princípios explicados nas seções do documento 'Modelo de Interoperabilidade de Dados do Poder Judiciário e Órgãos de Administração da Justiça' o qual está em conformidade com o padrão MNI(Modelo Nacional de Interoperabilidade).   Basicamente, o envio compreende-se no envio de um objeto do tipo 'tipoEntregarManifestacaoProcessual' que encapsula os dados da manifestação processual em questão e complementado com os dados básicos do processo originário. A regra RN358 também orienta sobre os dados da manifestação processual.   Se a remessa for para o STF, deverá adicionar também no envio todo o contéudo de cada documento juntado em formato.pdf (portable document format) visando obedecer o Art. 2º da Resolução 490/2012 do STF. Se a remessa for para o STJ, deverá adicionar somente os códigos identificadores dos documentos juntados.   Além disso, o envio é acionado por meio da operação 'entregarManifestacaoProcessual' que deve ser feita em uma comunicação (autenticada ou não) que obedece os critérios definidos pelo destinatário (instância superior que receberá a remessa de manifestação processual). | Funcionalidades:   Preparar remessa de manifestação processual para envio à instância superior.   Casos de teste: PJe-723. |

## RN335

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Restrições para preparar remessa de manifestação processual que será remetida à instância superior. | A remessa de manifestação processual que será remetida à instância superior (STF ou STJ) deverá conter as seguintes informações obrigatórias:   1\. Classe judicial (se faltar emitir mensagem MN181).   2\. Pelo menos um assunto (se faltar emitir mensagem MN177).   3\. Pelo menos um documento juntado deve ser incluído na remessa (se faltar emitir mensagem MN178).   4\. Pelo menos um documento deve ser caracterizado como 'documento principal' (se faltar emitir mensagem MN182).   5\. Pelo menos uma parte no polo ativo (se faltar emitir mensagem MN173) e,   6\. Caso a classe judicial exija polo passivo, deverá ter pelo menos uma parte no polo passivo (se faltar emitir mensagem MN174).   Além dessas informações obrigatórias, algumas restrições também devem ser obedecidas:   1\. A classe judicial da remessa de manifestação processual não pode ser a mesma classe judicial que consta no processo originário (processo judicial que dá origem à manifestação processual), deve-se escolher uma das classes definidas pela regra RN332. Se essa restrição for violada emitir mensagem MN189.   2\. É opcional remover ou incluir assuntos e, caso seja desejado incluir novos assuntos, somente poderá incluir assuntos conforme orienta a regra RN349.   3\. É opcional remover ou incluir novos participantes tanto no polo ativo quanto no polo passivo.   4\. É obrigatório reclassificar os documentos juntados, ou seja, deve-se escolher um tipo de documento permitido na instância superior que receberá a remessa. A regra RN337 orienta como facilitar esse trabalho de reclassificação. | Funcionalidades:   Preparar remessa de manifestação processual para envio à instância superior.   Casos de teste:   PJe-777,   PJe-768. |

## RN336

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Duplicação de polos | A duplicação de polos geralmente ocorre quando os dois polos recorrem de uma decisão judicial. Diante disso, o sistema deverá duplicar os participantes dos polos conforme a seguinte definição:   ![Polos!](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-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 "Polos")   Outro exemplo de duplicação: seja José (agravante) versus Caixa Econômica Federal (agravado), depois da duplicação ficará assim - José (agravante), Caixa Econômica Federal (agravante) versus José (agravado), Caixa Econômica Federal (agravado). | Funcionalidades:      Preparar remessa de manifestação processual para envio à instância superior;   Preparar remessa para o 2º grau.      Casos de testes:   PJe-726 |

## RN337

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de documento permitido na tarefa responsável pela preparação de remessa de manifestação processual para envio à instância superior. | O sistema deverá disponibilizar os tipos de documentos ativos na instância superior (STF ou STJ) a qual receberá a remessa de manifestação processual. A Resolução 490/2012 do STF regulamenta os tipos de documentos homologados pelo STF. A fim de facilitar a reclassificação dos tipos de documentos, o sistema deverá exibir para cada documento juntado (em local apropriado na janela) o tipo de documento correspondente na instância superior; esse tipo de documento correspondente deve ser compatibilizado (via identidade de texto descritivo ou começado por) com o tipo documento do documento juntado ao processo originário. Ex.: caso o tipo de documento do documento juntado ao processo originário seja "Petição", o sistema deverá exibir o tipo de documento correspondente que têm exatamente o texto descritivo "Petição" ou que começam com o texto "Petição". | Funcionalidades:   Preparar remessa de manifestação processual para envio à instância superior.   Casos de teste:   PJe-720. |

## RN338

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de intervalo | Os intervalos numéricos devem ser de três tipos, todos contendo um operador e pelo menos um número inteiro. A tabela de operadores e o número de inteiros vinculados são:   ![operadores!](https://docs.pje.jus.br/assets/images/operadores-597d4e1024c0dd1ded212f1e79eb416d.png "operadores")   Exemplos:   Quantidade de partes / Peso das partes   Até 3 / 1.0   Entre 4 e 10 / 2.0   Maior ou igual a 11 / 4.0      Quantidade de processos preventos a um processo / Peso   Até 5 / 1.0   Entre 6 e 15 / 0.6   Entre 16 e 30 / 0.4   Maior que 31 / 0.1      Quantidade de órgãos jurisdicionais passíveis de distribuição / Distância máxima de sorteio   Até 4 / 40   Entre 5 e 15 / 30   Maior que 16 / 20 | Funcionalidades:   Peso das partes no processo; (hoje não usa intervalos, mas deveria)   Distância máxima de distribuição; (hoje não usa intervalos, mas deveria)   Peso da prevenção      Regras:   Validação de intervalos de domínio |

## RN339

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Peso das partes | O peso das partes deve ser um número decimal positivo (não nulo e não zero) entre 1 e 3, correspondendo a unidade ao peso padrão. Dever-se-á prever intervalos iniciais de 1, sem prejuízo de, no futuro, se autorizar intervalos fracionários. Números superiores à unidade resultarão em potencializar o peso do processo (carga de trabalho presumida) segundo a multiplicação do peso do processo segundo os demais critérios pelo peso das partes. | Funcionalidades:   Configuração do peso das partes |

## RN340

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Peso de processo prevento | O peso de processo prevento deve ser um número decimal positivo (não nulo e não zero) entre 0,1 e 1.0, correspondendo a unidade ao peso padrão. Inicialmente, os valores deverão ser adotados apenas nos domínios 0,5 e 1. Números inferiores à unidade resultarão em reduzir o peso do processo distribuído por prevenção no que concerne à carga de trabalho presumida. | Funcionalidades:   Peso da prevenção |

## RN341

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Ausência de agrupadores (revisar) | Os agrupadores devem ser exibidos apenas quando há processos para o usuário logado na condição do agrupador. Para o caso de o usuário não ter associado nenhum agrupador, o sistema deve notificar através de exibição de mensagem na tela principal. Essa mensagem não deve aparecer para usuários com perfil de distribuição. | Funcionalidades:   Painéis |

## RN342

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Critério para o filtro do lançador de movimentações | A pesquisa no lançador de movimentações utilizará o parâmetro para restringir, na árvore de movimentações exibida, as movimentações e seus ramos. O critério inserido pode coincidir com o ramo e com a movimentação. Para o caso de coincidir com o ramo, as movimentações associadas aquele ramo deverão ser exibidas. Em todos os casos, só movimentações vinculadas ao(s) agrupamento(s) configurado na tarefa deverão ser exibidas. A pesquisa deve ignorar diferenças entre maiúsculas e minúsculas. | Funcionalidades:   Tarefas que contêm o lançador de movimentações, como, por exemplo, minutar ato;   Relatório de produtividade órgão julgador/magistrado   Fluxos:   Preparar ato judicial;   Casos de teste:   PJe-725 |

## RN343

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Permissão de acesso à tarefa responsável pela preparação de remessa de manifestação processual para envio à instância superior (STF ou STJ). | Somente terão acesso à tarefa responsável pela preparação de remessa de manifestação processual para envio à instância superior os usuários que tenham recebido a permissão do papel "Preparar remessa de manifestação processual para envio à instância superior" cujo identificador é "pje:papel:remessa:recurso:instanciaSuperior". | Funcionalidades:   Preparar remessa de manifestação processual para envio à instância superior.   Casos de teste:   PJe-777,   PJe-723. |

## RN344

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Contagem de prazo em dobro. | A contagem de prazo em dobro para intimações é utilizada na intimação automática da pauta de julgamento no segundo grau. Neste caso, o prazo para resposta da intimação será dobrado somente para a pessoa jurídica configurada. Esse prazo também pode ser simples ou quádruplo, de acordo com a configuração definida no campo "Prazo automático para expediente" do cadastro de Pessoa Jurídica. | Funcionalidades:   Cadastro de pessoa jurídica;   Cadastro da pauta |

## RN345

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Intimação pessoal | A opção de intimação pessoal permite que, se a intenção for intimar pessoalmente o autor, a intimação chegue diretamente para a parte. Apenas o destinatário poderá registrar a ciência e responder ao expediente pessoal. O representante poderá visualizar o expediente pessoal após a ciência do destinatário.      \- Quando é selecionada uma parte e ela tem advogado ou a parte é uma pessoa física ou jurídica (não é um ente ou autoridade) com Procuradorias ou Defensorias representantes, o campo pessoal fica disponível para seleção. Neste caso, se a opção pela intimação Pessoal for marcada, nem o advogado, nem o procurador representante poderá dar ciência ou responder a intimação pessoal, no entanto os representantes poderão visualizar o expediente pessoal.      \- Se a parte não tem representantes e não é um ente ou autoridade, o campo pessoal vem desmarcado e disponível para seleção.      \-- Neste caso, se a opção pela intimação Pessoal for marcada, futuros representantes (advogados, procuradores ou defensores) não poderão dar ciência ou responder a intimação pessoal, no entanto os representantes poderão visualizar o expediente pessoal;      \-- Quando a opção pela intimação Pessoal não for marcada, futuros representantes (advogados, procuradores ou defensores) poderão visualizar, dar ciência ou responder a intimação não pessoal.      \- Se a parte é um ente ou autoridade, o campo Pessoal deve vir desmarcado e desabilitada a possibilidade de marcar (campo somente leitura).      \- No caso de se inserir um destinatário que não seja parte do processo, pelo campo "Digite o nome, o CPF ou o CNPJ do destinatário:" em "Outros destinatários", o funcionamento do sistema deverá seguir a mesma lógica para as partes, ou seja:      \-- Quando for selecionado um destinatário pessoa física ou jurídica (não é ente ou autoridade) com Procuradorias representantes, o campo pessoal fica disponível para seleção. Neste caso, se a opção pela intimação Pessoal for marcada o procurador representante não poderá visualizar ou dar ciência na intimação pessoal.      \-- Se o destinatário não possuir representantes e não é um ente ou autoridade, o campo pessoal vem desmarcado e habilitada a possibilidade de marcar;      \-- Já se o destinatário for um ente ou autoridade, o campo Pessoal deve vir desmarcado e desabilitada a possibilidade de marcar (campo somente leitura). | Funcionalidades:   Preparar ato de comunicação;   Dar ciência |

## RN346

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Notificação da intimação | A regra geral do PJe é intimar a parte, não seu advogado. Por ser advogada da parte, ele será notificado naquele processo, terá acesso à intimação, dela poderá tomar ciência e responder. O intimado é, em verdade, a parte, em nome de seu advogado, e não o advogado. Quando há mais de um advogado representando a mesma pessoa, a só intimação da pessoa é suficiente para permitir que todos os advogados tenham acesso à intimação. | Funcionalidades:   Preparar ato de comunicação;   Dar ciência |

## RN347

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Fechamento de expedientes sem prazo | A intimação sem prazo acontece quando o valor do prazo vinculado é zero. A parte intimada poderá notificar ciência e se manifestar normalmente. Se a resposta não for dada e o parâmetro esperaMaximaSemPrazo não tiver sido configurado, ao término de 30 dias o sistema dará o expediente como fechado. O valor de 30 dias pode ser alterado através da configuração do parâmetro citado. | Funcionalidades:   Verificação periódica;   Agrupamentos de expedientes |

## RN348

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Restrição para o cadastro de partes | As regras para o cadastro de partes são as seguintes:   \- No polo ativo, deve existir, ao menos, uma parte como principal;   \- No polo passivo, deve existir ao menos uma parte principal, caso o atributo "Exige polo passivo" da classe processual esteja marcado;   \- As demais partes (procurador, terceiro vinculado e outros participantes), ou seja, tachadas como "não principal", podem não existir e, portanto, podem ser inativadas;   \- Caso a classe judicial exija autoridade no polo passivo, o cadastro do processo deverá exigir ao menos uma parte como autoridade no polo passivo. A inativação de autoridade, para esse caso, só poderá acontecer caso exista mais de uma autoridade no polo passivo como parte principal.   **Notas de desenvolvimento:**   \- Como identificar se uma parte é principal: A identificação da parte como "principal" encontra-se no campo client.tb\_processo\_parte.in\_parte\_principal ("TRUE ou (S)": é principal, "FALSE ou (N)": não é principal);   \- Como identificar se uma parte é polo ativo ou passivo: Encontra-se no campo client.tb\_processo\_parte.in\_participacao ("A": Ativo "P": Passivo); | Funcionalidades:   Regras:   RN333   RN349 |

## RN349

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Assuntos definidos para o envio de remessa à instância superior. | São todos os assuntos vinculados ao agrupamento previamente definido para o envio de remessa à instância superior. Esse agrupamento definido deverá constar na tabela de parâmetros do PJe sendo um parâmetro para cada tipo de instância superior, vejamos:   \- pje:assunto:agrupamento:remessaSTF:codigo para identificar o agrupamento de assuntos definido para o envio de remessa ao STF.   \- pje:assunto:agrupamento:remessaSTJ:codigo para identificar o agrupamento de assuntos definido para o envio de remessa ao STJ. | Funcionalidades:   Preparar remessa de manifestação processual para envio à instância superior.   Casos de testes:   PJe-737. |

## RN350

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperação de assuntos associados. | O sistema deverá recuperar os assuntos associados ao processo judicial em questão ou, se existir uma remessa de manifestação processual para esse processo, deverá recuperar os assuntos associados à essa manifestação. | Funcionalidades:   Preparar remessa de manifestação processual para envio à instância superior. |

## RN351

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Validação de intervalos de domínios | O sistema deverá validar os intervalos inseridos pelo mantenedor de modo a evitar a existência de mais de uma regra de peso para um mesmo intervalo e de modo a impedir a inexistência de regras para outro intervalo. Em outras palavras, se o mantenedor inserir um intervalo “Até 3” e outro, para o mesmo parâmetro, “Entre 3 e 10”, o sistema deverá recusar o segundo intervalo inserido informando a colisão de intervalos – no caso, por o número “3” constar em dois deles. De igual modo, se o mantenedor inserir um intervalo “Até 3” e outro “Entre 5 e 10”, o sistema deverá recusar a gravação final indicando a inexistência de regras para o intervalo “Entre 4 e 4”. | Funcionalidades:   Peso das partes no processo; (hoje não usa intervalos, mas deveria)   Distância máxima de distribuição; (hoje não usa intervalos, mas deveria)   Peso da prevenção   Regras:   Intervalo de domínio de critério |

## RN352

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Disponibilização de certidões | A emissão de certidões relativas à distribuição (ou não) de processos em relação a uma pessoa pode ser feita através das seguintes configurações:   1\. Para cada "Tipo de certidão", é necessário cadastrar um modelo de documento (Configuração → Documento → Modelo → Modelo). O tipo de documento "Certidão" também deve ter sido configurado pois será associado aos modelos.   2\. Cadastrar um "Tipo de certidão" (Configuração → Tabelas Judiciais → Tipo de certidão). Nesse ponto, devem ser incluídas TODAS as classes que implicam a expedição de certidão positiva, caso constatada a existência de processo daquela classe em nome da pessoa, em determinado polo processual (ativo ou passivo ou ambos). Exemplo: Se queremos que determinada certidão dê positiva na hipótese de haver processos das classes 436, 1707, 92, 93, 94 no polo passivo, devemos vincular APENAS tais classes e o polo passivo nesse “passo 2.”. Nessa hipótese, se a pessoa for ré em um processo de "Interdito proibitório" (1709), apenas, a certidão seria emitida como NEGATIVA. É o que a justiça federal chama de identificar as classes/situações que PICHAM ou NÃO PICHAM a certidão.   3\. Necessário configurar o parâmetro idTipoDocumentoCertidao com o ID de banco do tipo de documento "Certidão".   4\. Todas as referências a códigos de classes podem ser conferidas através das tabelas do cnj (Acessar Área Pública) | Funcionalidades:   Emissão de certidão |

## RN353

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de documento para registro da intimação utilizando expediente físico | O registro da intimação utilizando expediente físico utiliza um tipo de documento de uso específico, que é o inserido através de carga (upload). Sendo assim, deve ter sido configurado um tipo de documento com o uso "upload" (Documento) selecionado ou "todos". Além disso, deve também ser observada a configuração do tipo de documento relacionada ao grau de jurisdição onde aquele documento poderá ser utilizado e ao papel que terá acesso àquele tipo de documento. | Funcionalidades:   Registro de intimação |

## RN354

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Obrigatoriedade do cadastro de endereço da parte | Cada parte de um processo deve ter pelo menos um endereço cadastrado, salvo quando sinalizada a opção de endereço desconhecido, opção esta não disponível para usuários externos no cadastro do polo ativo. Sendo assim a opção endereço desconhecido será visualizada somente no polo passivo, levando em consideração as regras de endereço já cadastrado na base de dados, ou seja, se a parte possuir pelo menos um endereço na base de dados e o responsável pelo o protocolo possuir permissão de visualização do endereço a opção endereço desconhecido não é visualizada. Ao incluir um novo endereço, o sistema definirá (de forma automática) o endereço incluído como o endereço principal. Porém, se a parte possuir mais de um endereço, observada a regra RN393, deve-se selecionar qual dos endereços listados será o endereço principal. | Funcionalidades:   Cadastro de endereço da parte |

## RN355

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de parte principal | Uma parte é considerada do "Tipo principal" quando não atua como advogado/procurador/representante no processo. No cadastro de tipos de parte, a opção de "Tipo principal" determinará, quando estiver marcada como não, que aquele tipo de parte aparecerá como opção para seleção no cadastro de advogados, procuradores ou representantes que atuarão no processo, de acordo também com marcação de polo ativo, passivo ou como outros participantes. Quando estiver marcada como sim, ela poderá aparecer como parte principal no cadastro de outros participantes, se também tiver sido marcada a opção de "Outros participantes". | Funcionalidades:   Cadastro de partes |

## RN356

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Outros participantes | Um processo pode ter associado a ele partes no polo ativo, passivo ou outros participantes. A opção de outros participantes abrange, por exemplo, a vinculação de uma testemunha ao processo. Para que um tipo de parte apareça como opção no cadastro de "Outros participantes", deve ter sido marcada essa opção em seu cadastro, sendo possível ser uma parte principal ou um procurador/terceiro vinculado. | Funcionalidades:   Cadastro de partes |

## RN357

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Polos de um processo | As partes principais de um processo abrangem, além da opção de outros participantes, os polos ativo e passivo. As partes principais dos polos ativo e passivo podem ser pessoas físicas, jurídicas ou autoridades.   **Tipo de parte Pessoa Física e Jurídica**   \- No cadastro de partes do tipo pessoa física ou jurídica, de forma geral, deve ser possível definir a defensoria que representa a parte.   \- Na visualização dos detalhes de processo deve ser possível visualizar a parte e a defensoria se esta tiver sido vinculada;   \- No cadastro de entes ou autoridades, não deve ser possível definir uma defensoria para representar a parte;   \- Caso à pessoa indicada, esteja vinculada uma procuradoria (roteiro de configuração de procuradorias) o sistema não poderá apresentar a opção de vinculação à defensoria, apenas a opção de vinculação à procuradoria (ou às procuradorias se houver mais de uma).   \- Para o caso de autoridades, tanto para usuários internos quanto para usuários externos só poderá ser possível cadastrar autoridades (no polo ativo ou no passivo) se a classe judicial tiver a marcação de "Exige ente ou autoridade" ou houver um tipo de parte vinculado à classe que permita o cadastro de entes ou autoridades para a parte principal.   \- E o cadastro de partes principais no polo ativo do tipo "Ente ou autoridade" será obrigatório para classes judiciais que estiverem com a marcação "Exige ente ou autoridade". | Funcionalidades:   Cadastro de partes |

## RN357

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Polos de um processo | As partes principais de um processo abrangem, além da opção de outros participantes, os polos ativo e passivo. As partes principais dos polos ativo e passivo podem ser pessoas físicas, jurídicas ou autoridades.   **Tipo de parte Pessoa Física e Jurídica**   \- No cadastro de partes do tipo pessoa física ou jurídica, de forma geral, deve ser possível definir a defensoria que representa a parte.   \- Na visualização dos detalhes de processo deve ser possível visualizar a parte e a defensoria se esta tiver sido vinculada;   \- No cadastro de entes ou autoridades, não deve ser possível definir uma defensoria para representar a parte;   \- Caso à pessoa indicada, esteja vinculada uma procuradoria (roteiro de configuração de procuradorias) o sistema não poderá apresentar a opção de vinculação à defensoria, apenas a opção de vinculação à procuradoria (ou às procuradorias se houver mais de uma).   \- Para o caso de autoridades, tanto para usuários internos quanto para usuários externos só poderá ser possível cadastrar autoridades (no polo ativo ou no passivo) se a classe judicial tiver a marcação de "Exige ente ou autoridade" ou houver um tipo de parte vinculado à classe que permita o cadastro de entes ou autoridades para a parte principal.   \- E o cadastro de partes principais no polo ativo do tipo "Ente ou autoridade" será obrigatório para classes judiciais que estiverem com a marcação "Exige ente ou autoridade". | Funcionalidades:   Cadastro de partes |

## RN358

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Dados da remessa de manifestação processual para envio à instância superior | São todos os dados apresentados na janela responsável pela preparação de remessa de manifestação processual para envio à instância superior com a seguinte exceção: somente os documentos juntados que foram indicados para serem incluídos na remessa. | Funcionalidades:   Preparar remessa de manifestação processual para envio à instância superior.   Casos de teste:   PJe-777. |

## RN359

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Restrição de exclusão de endereço | O endereço principal de uma pessoa física ou jurídica não poderá ser excluído. Por exemplo: caso a opção "Usar no processo" estiver marcada, esse endereço será o principal, portanto, não poderá ser excluído. | Funcionalidades:   Cadastro do processo - aba "Partes" (Endereço) |

## RN360

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Ocorrência do processo referência | A configuração da classe judicial utilizada no protocolo do processo incidental contém o campo "Processo referência", que pode ser utilizado com os seguintes valores: "obrigatório", "facultativo" ou "não exigir". A opção determina, ao ser cadastrado um processo incidental, se o campo "Processo referência" estará disponível no cadastramento como de preenchimento obrigatório, facultativo ou se não estará disponível. | Funcionalidades:   Cadastro de processo incidental;   Configuração de classe judicial |

## RN361

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Definição de pesos de classe judicial | O peso de classe processual deve ser um número decimal positivo (não nulo e não zero) entre 1 e 5, correspondendo a unidade ao peso padrão. Dever-se-á prever intervalos de 0,5 entre esses valores. Número superior a 1 resultará em se considerar que o processo que apresenta essa classe será considerado de maior carga de trabalho em relação a uma carga de trabalho “padrão”. | Funcionalidades:   Distribuição |

## RN362

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Definição de pesos de assunto | O peso do assunto processual deve ser um número decimal positivo (não nulo e não zero) entre 1 e 4, correspondente a unidade ao peso padrão. Dever-se-á prever intervalos iniciais de 1, sem prejuízo de, no futuro, se autorizar intervalos fracionários. Número superior a 1 resultará em se considerar que o processo que apresenta esse assunto tem uma carga de trabalho superior àquela padrão. | Funcionalidades:   Distribuição |

## RN363

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Distância máxima de sorteio | A distância máxima de sorteio deve ser um número decimal positivo (não nulo e não zero), indicador da diferença máxima a ser admitida entre os acumuladores de órgãos jurisdicionais com competências iguais ou uma contida na outra (dimensões espaciais, pessoais, funcionais e materiais idênticas) antes daquele órgão que tem o maior valor acumulado ser excluído, enquanto mantiver diferença superior à distância máxima, dos órgãos passíveis de serem alvo de distribuição. O ideal é adotar uma maior distância quando o número de órgãos for menor e reduzir essa distância quando o número de órgãos for maior, dessa forma, tem-se, de um lado, maior segurança quanto à aleatoriedade da distribuição e, de outro, maior uniformidade da carga de trabalho atribuída a cada um dos órgãos julgadores.   O valor mínimo da distância máxima de sorteio será 2,5 vezes o maior peso possível de um processo judicial. | Funcionalidades:   Distância máxima de distribuição |

## RN364

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Identificação da prevenção | A prevenção deve ser acusada quando um critério de prevenção, apurado a partir das informações do processo submetido à análise, aponta a existência de um ou mais processos já existentes que se encaixam no critério.   Os critérios de prevenção podem ser “indicativo de prevenção” ou “determinante de dependência”.   Caso um processo apresente um “indicativo de prevenção”, o sistema deverá registrar avisos tanto no processo novo quanto no antigo possível prevento. `Por exemplo, quando o PJe acusa a possibilidade de prevenção entre dois processos, por exemplo A e B, haverá o registro de uma "conexão" entre o primeiro processo e o segundo (A->B), assim como o registro de outra conexão entre o segundo processo e o primeiro (B->A). Se os processos tramitam no mesmo órgão, quando o magistrado analisar um deles, por exemplo A, ambos deixarão de exibir alertas de prevenção entre si, não haverá mais o alerta de prevenção A -> B, nem o alerta inverso B -> A, devido ao fato de que os dois processos tramitam no mesmo órgão. No entanto, se houver um terceiro processo, por exemplo C e houver um indicativo de prevenção de B -> C, a análise da prevenção A -> B não deverá excluir o indicativo (e o alerta) da prevenção B -> C.`   Quando a prevenção é entre processos de juizados diferentes, a análise e despacho registrado num processo/juizado não afeta o processo do outro órgão julgador. Desta forma, cada magistrado de cada órgão julgador irá realizar a sua analise prevenção em seus processos. A exceção para o comportamento de registro da prevenção nos dois processos ocorre quando pelo menos um dos processos for sigiloso, caso em que deverá ser seguida a regra RN373. | Funcionalidades:   Distribuição |

## RN365

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Distribuição de processos | A distribuição de processos deverá se iniciar por meio da seleção dos órgãos jurisdicionais passíveis de distribuição, conforme regra de seleção de órgãos jurisdicionais.   Ex.: 1.a, 3.a e 4.a Varas Cíveis e Vara Ambiental e Residual de Recife.      Para cada um dos órgãos jurisdicionais passíveis de distribuição, o sistema deverá definir um intervalo de alvo de tamanho idêntico, resultado da divisão da unidade pelo número de órgãos jurisdicionais de potenciais alvos.   Ex.:   1a Vara Cível / 0,000-0,250   2a Vara Cível / 0,250\*-0,500   4a Vara Cível / 0,500\*-0,750   Vara Ambiental e Residual / 0,750\*-1,000   • Significa que o limite em questão deve ser considerado sem considerar seu valor exato, mas o valor imediatamente superior.      O sistema deve, então, gerar um número decimal aleatório entre 0,000 e 1,000. O intervalo a que pertencer esse número aleatório indicará qual o órgão jurisdicional a que será destinado o processo. | Funcionalidades:   Distribuição |

## RN366

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Seleção de órgãos jurisdicionais passíveis de distribuição | A seleção dos órgãos jurisdicionais passíveis de distribuição deve ser feita tomando por parâmetros os seguintes:   a. Localização territorial (jurisdição) destinatária escolhida pelo distribuidor (advogado).   b. Dados processuais: autores, réus, classe processual e assuntos.      Com base nos parâmetros acima, o sistema deverá retornar os órgãos jurisdicionais que tenham pelo menos uma competência atribuída em que:   a) a dimensão territorial da competência englobe a localização territorial destinatária (jurisdição) escolhida pelo distribuidor;   b) a dimensão material da competência englobe o conjunto classe/assunto do processo   escolhido pelo distribuidor;   c) a dimensão pessoal defina a necessidade da presença de pessoa ou tipo de pessoa que existe no polo do processo em distribuição, no polo respectivo;   d) a dimensão pessoal não defina a proibição de presença de pessoa ou tipo de pessoa que existe no polo do processo em distribuição, no polo respectivo;   e) a dimensão funcional defina a necessidade da presença de autoridade que existe no polo do processo em distribuição, no polo respectivo;   f) a dimensão funcional não defina a proibição de presença de autoridade que existe no polo do processo em distribuição, no polo respectivo;   g) a dimensão de alçada contemple parâmetro que está preenchido pelo processo em distribuição.   h) o acumulador de pesos de distribuição, subtraído do acumulador do órgão que preenche os requisitos “a” e “b” supra, resulte valor inferior à distância máxima de sorteio;quando o acumulador não resultar em valor inferior para um dado órgão julgador, ele (o órgão) deverá ser considerado selecionável com a chance de 1/4 (um quarto), aleatoriamente.      Caso não haja, na localidade a que se refere o item (a) supra, órgão jurisdicional cuja relação de competências inclua uma das dimensões referidas nos itens (c) a (g), esses critérios devem ser dispensados.      Caso, após a análise supra, seja constatada a existência de mais de um juízo passível de distribuição em que a competência material deles é diversa, o sistema deverá apresentar ao distribuidor (advogado) aviso indicando que há possível conflito e solicitando que escolha entre as competências conflitantes (ambiguidade de competência). Caso a distribuição seja solicitada por equipamento fazendo uso de serviço web, a distribuição deverá ser recusada com a indicação da existência do conflito. | Funcionalidades:   Distribuição |

## RN367

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Seleção de órgãos jurisdicionais passíveis de distribuição em instância de revisão (segundo grau) | A seleção do órgão passível de distribuição em instância de revisão segue a mesma regra RN366, devendo-se considerar que são competências de um determinado órgão julgador singular aquelas existentes no órgão julgador colegiado a que ele está ligado, caso ele não tenha nenhuma competência definida exclusivamente para ele. Caso haja uma competência tal, deverá ser considerada exclusivamente a competência definida para o órgão julgador singular. A distribuição só deve acontecer quando houver a ligação entre o órgão julgador singular a algum órgão julgador colegiado. A ambiguidade de competências é verificada através das competências vinculadas ao órgão julgador colegiado. | Funcionalidades:   Distribuição |

## RN368

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Peso do processo | O peso do processo é o resultado da seguinte operação:   Pproc=Ppar⋅Pc⋅max Pa   Onde:   Pproc: peso do processo   Ppar: peso decorrente do número das partes   Pc: peso da classe   max(Pa): maior peso existentes entre os assuntos do processo sob distribuição      Em uma configuração padrão, os pesos mínimos e máximos possíveis de um processo judicial são:   Pproc min =1⋅1⋅1=1   Pproc max =3⋅5⋅4=60   É importante relembrar que esse peso se aplica inclusive aos processos em instância de revisão, uma vez que o conteúdo da demanda de revisão pode ser ampliado ou reduzido em relação ao conteúdo do processo na instância originária. Esse conteúdo da demanda será refletido pelo cadastramento do recurso interposto, que poderá ter assuntos e classes bem diversas daquelas do processo originário. | Funcionalidades:   Distribuição |

## RN369

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Peso de distribuição do processo | O peso de distribuição é o resultado da seguinte operação:   Pdist= Pproc⋅Pprev⋅(100\*Porgao)   Onde:      Pdist: peso de distribuição   Pproc: peso de processo   Pprev: peso da prevenção, que deve ser 1 se não for caso de redistribuição por prevenção ou se não for caso de distribuição por prevenção obrigatória.   Porgao: peso do órgão jurisdicional, se não for igual a zero.      Em uma configuração padrão, os pesos mínimos e máximos possíveis de um processo distribuído, desconsiderando os efeitos decorrentes diretamente do órgão julgador, são:      Pdist min =Pproc min⋅0,5⋅1=0,5   Pdist max =Pproc max⋅1⋅1=60 | Funcionalidades:   Distribuição |

## RN370

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipos de redistribuição pontual | São causas de redistribuição pontual ao menos as seguintes, sem prejuízo de acréscimo por meio de configuração específica (regra de domínio RD110):   \- Por prevenção   \- Por impedimento   \- Por suspeição | Funcionalidades:   Redistribuição pontual |

## RN371

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Acumulador de distribuição | Cada órgão jurisdicional deve manter um acumulador de distribuição, com valor inicial 0, ao qual serão somados ou subtraídos os pesos de distribuição dos processos, conforme sejam a ele distribuídos ou dele redistribuídos, respectivamente. O arquivamento e baixa de processos não interferem nesse acumulador, que somente poderá ser modificado nas hipóteses já referidas (distribuição e redistribuição). | Funcionalidades:   Distribuição |

## RN372

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Avisos de possíveis preventos | Observada a restrição para processos sigilosos, os processos com possível prevenção e os seus paradigmas terão registrados em seus dados avisos dessa ocorrência. Esses avisos deverão ser visíveis para os usuários internos que trabalhem com eles. | Funcionalidades:   Prevenção |

## RN373

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Avisos de possíveis preventos em processos que tramitam em segredo de justiça | Para casos de possíveis preventos ("indicativo de prevenção") em relação a processos sigilosos, os avisos de prevenção serão registrados segundo as seguintes regras:   a) se ambos forem sigilosos, registrar o aviso apenas no processo mais antigo;   b) se o processo novo for sigiloso e o antigo não for, registrar o aviso apenas no processo sigiloso;   c) se o processo novo for público e o antigo for sigiloso, registrar o aviso apenas no processo mais antigo.   Esta regra não se aplica para a prevenção pelo critério de dependência, pois neste critério não devem ser considerados o sigilo dos processos. | Funcionalidades:   Prevenção |

## RN374

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Prevenção obrigatória (por dependência) | A prevenção obrigatória, ou seja, a distribuição obrigatória de um processo para um órgão julgador específico devido a sua dependência de outro processo, é disponibilizada no PJe através do cadastro de processo incidental. Caso esteja disponível para preenchimento o campo "Processo referência" e seja fornecido um número de processo referente a um processo constante daquela instalação do PJe, a distribuição ocorrerá para o mesmo órgão julgador do processo referência, independente de suas configurações de competência. Nesse caso, não deverá ser exibida opção para seleção de jurisdição e de órgão julgador. Se o processo referência não for fornecido ou se, apesar de ser informado, não estiver na lista de processos distribuídos naquela instalação do PJe, o usuário poderá selecionar a jurisdição e o órgão julgador, de acordo com as competências possíveis. | Funcionalidades:   Prevenção;   Cadastro de processo incidental |

## RN375

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Cadastro de exclusão de movimentações processuais | Uma movimentação processual somente poderá ser excluída caso a sua aplicabilidade tenha a permissão ativada. Para alterar a permissão as seguintes configurações deverão ser seguidas:   1\. Cadastrar nas movimentações processuais (Configuração → Tabelas judicias → Movimentações → Movimentações processuais) uma movimentação que se deseja adicionar ao processo. Por exemplo, “Mero expediente”.   2\. Cadastrar a aplicabilidade (Configuração → Tabelas judicias → Movimentações → Aplicabilidade ) da movimentação processual, por exemplo, “JC”, “1° GRAU”, “Monocrático”. Esse cadastro deverá ser utilizado na aba “Aplicabilidade” do passo anterior.   3\. Na aba “Aplicabilidade” (Configuração → Tabelas judicias → Movimentações → Movimentações processuais), marcar o campo "Permite Exclusão?" para “SIM”.      Além disso, ao excluir a movimentação, outro evento será lançado no processo. Esse evento é o mesmo cujo código esteja cadastrado no parâmetro codMovimentoExclusao. Sendo assim, deve haver um movimento processual registrado com o código citado.      As movimentações associadas a documentos têm sua exclusão permitida de acordo com a permissão de exclusão dos documentos (RN380) e o procedimento segue a regra de exclusão dos documentos (RN504). | Funcionalidades:   Ajustar movimentação |

## RN376

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Restrição para habilitação nos autos | A funcionalidade de habilitação nos autos apenas estará disponível para os usuários com o perfil de advogado. Mesmo que o acesso a esta funcionalidade seja disponibilizado para outro perfil, quando este usuário tentar finalizar a habilitação nos autos, o sistema deverá exibir a mensagem: "Esta operação só é possível para o perfil de advogado." O advogado não poderá se habilitar como advogado de uma parte em um polo do processo se originalmente ele já for parte ou representante de uma parte do outro polo. | Funcionalidades:   Habilitação nos autos |

## RN377

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Intimação via sistema para pessoas jurídicas | Uma PJ pode ser intimada via sistema pelo servidor da secretaria (ou de acordo com o configurado no fluxo). No entanto, a intimação da PJ será enviada para o seu representante (advogado). A PJ não terá acesso direto ao processo, e a ciência da intimação se dá apenas pelo advogado. | Funcionalidades:   Preparar ato de comunicação |

## RN378

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Consulta dos documentos principais do processo que não estão assinados | Os documentos principais do processo são gerados via editor de textos, um documento PDF só será um documento principal quando este for enviado via MNI. Estes documentos podem ser apenas gravados no ato da sua criação. Caso o documento principal não seja assinado, ele será direcionado para a funcionalidade “Assinar documentos pendentes”, que listará todos os documentos que estejam ativos, que não tenham data de exclusão, e que não estejam assinados.   Na lista de documentos pendentes de assinatura não devem ser listados os documentos anexos cujo documento principal relacionado ainda não esteja assinado e uma vez assinado o documento principal, todos os seus anexos devem ser automaticamente assinados. RN379. | Funcionalidades:   Assinar documentos pendentes |

## RN379

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Visibilidade para documentos principais que não foram assinados | Os documentos principais não assinados serão visíveis para os seguintes usuários:   \- Para o usuário que criou o documento;   \- Se o usuário for advogado ou assistente de advogado ou assistente gestor de advogado, então o sistema deve retornar os documentos que tenham sido criados por outros usuários da mesma localização (escritório, por exemplo) que tenham os perfis de advogado, assistente de advogado ou assistente gestor de advogado;   \- Se o usuário for procurador, procurador chefe, defensor ou defensor chefe então o sistema deve retornar os documentos de processos das entidades que ele representa e que tenham sido criados por usuários que tenham os perfis procurador, procurador chefe, defensor, defensor chefe, assistente de procuradoria ou assistente gestor de procuradoria;   \- Se o usuário for assistente de procuradoria ou assistente gestor de procuradoria, então o sistema deve retornar os documentos de processos das entidades que ele representa e que tenham sido criados por usuários que tenham os perfis procurador, procurador chefe, assistente de procuradoria ou assistente gestor de procuradoria;   Documentos não assinados não são visíveis na consulta pública. | Funcionalidades:   Assinar documentos pendentes |

## RN380

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Desentranhamento de documentos do processo (exclusão de documentos) | O desentranhamento de documentos do processo é permitido ao magistrado e a usuários internos (que herdem do papel servidor) vinculados ao papel pje:desentranhaDoc. Para esses casos, o ícone da lixeira se apresentará ao lado dos documentos do processo, permitindo que o usuário exclua a vinculação, deixando registrado o motivo. A exclusão no desentranhamento pode ser física ou lógica, conforme a restrição RN504. | Funcionalidades:   Documentos do processo |

## RN381

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Dados exibidos no detalhamento do processo da consulta pública. | Para o processo detalhado, os dados que devem ser exibidos são:   \- Jurisdição do processo, isto é, local onde o processo foi peticionado.   \- Número, classe judicial e assuntos do processo.   \- Nome das partes principais do polo ativo e passivo e nomes dos respectivos representantes (advogados, procuradorias, defensorias) dessas partes; inclue-se também o tipo de participação das partes conforme cadastrado na classe judicial do processo.   \- A lista dos nomes dos outros participantes do processo com seus respectivos tipos de participação.   \- Movimentações processuais.   \- Inteiro teor das decisões, sentenças, votos e acórdãos (ou seja, os tipos de documento e que devem estar marcados como públicos).   \- Data de distribuição e órgãos julgadores do processo.   Os nomes das vítimas não devem ser exibidos para processos criminais segundo a regra RN590.   As movimentações do processo são exibidas de acordo com a regra RN559.   A exibição será conforme regra RI318. | Funcionalidades:   Consulta pública |

## RN382

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Vinculação de documentos do processo ao expediente | A possibilidade de vinculação de documentos do processo ao expediente visa, para o caso de expedientes enviados via Correios ou Central de mandados, que documentos do processo sejam impressos em conjunto com a impressão do expediente para facilitar o envio. | Funcionalidades:   Tarefa Preparar comunicação |

## RN383

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Redistribuição por incompetência e por desaforamento | A redistribuição para os casos de incompetência e de desaforamento só ocorrerá mediante os seguintes critérios:   \- Deve haver órgão julgador configurado na jurisdição selecionada com a competência desejada;   \- O órgão deve conter cargos judicial ativo, que receba distribuição, configurado como não auxiliar e cujo divisor do peso do processo seja maior que zero. | Funcionalidades:   Tarefa redistribuição |

## RN384

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Prazo para ciência | Intimação é o ato de comunicação a alguém dos atos e termos do processo, para que faça ou deixe de fazer alguma coisa. A ciência acontece quando o intimado sabe que foi intimado.   Quando a intimação é feita de forma eletrônica, o sistema estabelece um prazo de 10 (dez) dias corridos para que o usuário registre a ciência da intimação, caso contrário o sistema considerará a intimação automaticamente realizada na data do término desse prazo, registrando a ciência com a seguinte informação: O sistema registrou ciência em DD/MM/AAAA 23:59:59. O prazo para ciência de intimações eletrônicas, internamente no PJe, é chamado de data prazo processual. A data desse campo é a data limite para ciência. | Funcionalidades:   Preparar comunicação |

## RN385

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Prazo para resposta | Intimação é o ato pelo qual se dá ciência a alguém dos atos e termos do processo, para que faça ou deixe de fazer alguma coisa. O prazo para resposta é o prazo estabelecido pela autoridade judiciária para que o intimado responda à intimação. O prazo começa a contar a partir da ciência. Essa data se aplica a todos os atos de comunicação que tenham prazo. Internamente, no PJe, é chamada data prazo legal, também considerada data limite de manifestação. | Funcionalidades:   Preparar comunicação |

## RN386

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Ciência de intimação | Intimação é o ato pelo qual se dá ciência a alguém dos atos e termos do processo, para que faça ou deixe de fazer alguma coisa. No Distrito Federal e nas Capitais dos Estados e dos Territórios, consideram-se feitas as intimações pela só publicação dos atos no órgão oficial. As intimações serão feitas às partes, aos seus representantes legais e aos advogados pelo correio ou, se presentes em cartório, diretamente pelo escrivão ou chefe de secretaria. Far-se-á a intimação por meio de oficial de justiça quando frustrada a realização pelo correio. Os prazos correrão a partir da ciência. A ciência ocorrerá:   \- Quando a citação ou intimação for pelo correio, da data de juntada aos autos do aviso de recebimento, utilizando-se o conceito de presunção de recebimento. O advogado pode dar ciência no expediente, além disso, o sistema oferece duas formas de contar data de ciência e fim do prazo legal, conforme as situações abaixo:   a) Presunção legal - parametriza-se o sistema de modo que um prazo máximo de dias seja estabelecido para ciência automática. Pode-se configurar um prazo máximo para o órgão julgador dentro do qual o expediente foi produzido. Exemplificando, para configurar um sistema de modo a se dar ciência automática para todos os expediente do tribunal, seta-se o parâmetro "presuncaoEntregaCorrespondencia" com o valor corresponde à quantidade de dias que deve transcorrer para ciência automática, a partir da criação do expediente.   b) Manualmente pelo usuário - após a criação do expediente, o servidor do órgão julgador pode ir até a aba de expedientes no painel do usuário e dentro do agrupador "Expedientes físicos sem registro de intimação", selecionar o expediente desejado e cadastrar informações relativas ao Aviso de Recebimento (AR). Uma vez que isso seja feito, a data de ciência e fim do prazo legal, bem como a informação de quem confirmou o recebimento devem ser setadas no expediente.   \- Quando a citação ou intimação for por oficial de justiça (meio de comunicação "central de mandados"), da data de juntada aos autos do mandado cumprido;   \- Quando houver vários réus, da data de juntada aos autos do último aviso de recebimento ou mandado citatório cumprido;   \- Quando o ato se realizar em cumprimento de carta de ordem, precatória ou rogatória, da data de sua juntada aos autos devidamente cumprida;   \- Quando a citação for por edital, findo o prazo estabelecido pelo juiz, que corre a partir da primeira publicação.   As intimações podem ser feitas de forma eletrônica. A ciência pode ser:   \- Ficta, ou seja, assumida, para os casos de presunção de recebimento (exemplos: registro do AR, ciência eletrônica, conforma regra RN384);   \- Concreta, quando registrada pelo cientificado, independente se por meio eletrônico ou não. | Funcionalidades:   Preparar comunicação |

## RN387

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Selecionado para pauta (regra válida a partir da 1.6.0) | Para disponibilizar o processo para julgamento, o relator pode utilizar a opção "Selecionado para pauta?" da tela de detalhamento do processo, disponível ao lado direito do botão "Paginador" em instalações cujo parâmetro "utilizaFluxoColegiado" esteja marcado como "false".   A opção é permitida para:   \- Usuários que tenham acesso ao recurso com o identificador: '/pages/processo/relatorRevisado' que sejam servidores ou magistrados. Além disso, é permitida em processos que tenham tido algum evento configurado como evento de conclusão (parâmetro idEventoConclusao) e quando o órgão julgador do processo não é da primeira instância (campo "Instância" no cadastro do órgão julgador maior que "1ª").   Será exibida para processos cuja classe processual exige pauta e   \- Para o caso de não exigir revisor, o usuário logado deve ser do órgão julgador colegiado do processo   \- Para o caso de exigir revisor, deve ser levado em consideração se o processo está pronto para revisão, analisando ainda as seguintes restrições:   a) Se quem pede pauta é o relator e o processo está revisado ou na configuração do órgão julgador colegiado há a possibilidade de pedir pauta antes da revisão (campo "O relator pode pedir pauta antes da revisão?" selecionado com "Sim")   b) Se quem pede pauta é o revisor e o processo está revisado. | Funcionalidades:   Consulta do processo |

## RN388

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipos de documentos na minuta | Na tarefa "minutar ato" (variável do tipo "Editor"), quando não houver definição explícita através de configuração de ações em eventos conforme orientações disponíveis no Preparar ato judicial, os tipos de documentos disponíveis sempre serão "Despacho", "Decisão" e "Sentença", sendo este último disponibilizado apenas para instalações em instâncias de 1º grau. | Funcionalidades:   Minuta |

## RN389

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Movimentações processuais | Todos os processos têm movimentações. Algumas movimentações poderão ser cadastradas no sistema através de nós do fluxo, outras serão geradas pelo próprio sistema e em outras ocasiões será lançada de acordo com o tipo de documento selecionado. Entende-se por movimentação (cadastrada via sistema) como o ato jurídico de movimentar um processo. Para lançamento de movimentações através do fluxo, devem ser cadastrados eventos que realizem o lançamento automaticamente por meio de expressões ou permitam a seleção por parte do usuário através de configuração do lançador de movimentações. Para lançamento de movimentações associadas a documentos, deve ser configurado o agrupamento de movimentações adequadamente e observada a regra de movimentos associados a documentos. | Funcionalidades:   Painéis;   Fluxo;   Movimentações processuais |

## RN390

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Documentos associados a movimentações processuais | Uma movimentação pode estar associada a um tipo de documento. Na tela do editor de textos, se existir algum tipo de documento que tenha agrupamento de movimentação associado, será permitido o lançamento de movimentação para aquele tipo de documento de acordo com os movimentos do agrupamento, para usuários cujos papéis herdem do papel pje:auxiliarInterno, ou seja, sejam usuários internos. O lançamento da movimentação se dará de forma manual. Para usuários externos, a movimentação associada será automática, ou seja, a partir do momento que o usuário selecionar o tipo de documento da lista e assiná-lo, sendo, via de regra, registrada a movimentação de juntada de documentos. O documento criado deve ser visível após a sua conclusão. Sendo assim, será possível visualizar o documento criado por meio da aba “Movimento” do processo, ou no painel de listagem de processos (onde normalmente são apresentados dentro das tarefas de fluxo do painel do usuário). | Funcionalidades:   Painéis;   RN296;   RI193 |

## RN391

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Marcação de audiência e bloqueio | A marcação de audiências leva em consideração períodos de disponibilidade de salas vinculadas ao órgão julgador da competência respectiva. Na marcação manual, é verificado se a data selecionada é feriado ou se a sala está disponível para a data selecionada.   Na marcação manual o sistema permite que o usuário indique um horário fora do período de funcionamento da sala, forçando assim uma audiência em período distinto do configurado para o funcionamento da sala.   O sistema também verifica, na marcação manual, se o advogado está com outra audiência marcada no mesmo horário. Outras restrições são observadas:   \- Pode-se configurar um bloqueio de pauta referente a uma sala, fazendo com que aquela sala naquele período não seja considerada para marcação de audiências. Caso no momento da configuração do bloqueio de pauta, haja alguma audiência já marcada para a sala durante o período em que está sendo criado o bloqueio de pauta, o sistema exibe uma mensagem informando a existência da audiência já marcada e confirmando que ela não será desmarcada. Ou seja, caso o representante do tribunal queira remarcar a audiência já agendada, ele deverá remarcar as audiências daquele período, uma-a-uma. A marcação de audiências, seja através do protocolo ou não, desconsidera bloqueios superiores a noventa dias da data que é realizada a marcação.   \- Caso haja pelo menos uma sala não bloqueada na data calculada para audiência, o PJe marca a audiência e aloca a sala selecionada. Caso contrário, posterga-se a audiência até a primeira data disponível.   Na marcação de audiências automaticamente no ajuizamento da ação, a regra RN314 é observada.   Na marcação manual, o prazo mínimo configurado para o tipo de audiência e órgão julgador é observado (Configuração disponível no cadastro do órgão julgador). | Funcionalidades:   Protocolo com marcação automática de audiência;   Tarefas de audiência |

## RN392

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Permissão para protocolar | Os perfis de assistente auxiliam os advogados/procuradores na construção de documentos, mas não devem poder protocolar os processos. | Funcionalidades:   Protocolo de processos |

## RN393

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperação de endereços previamente cadastrados | Para partes com endereço previamente cadastrado, o sistema observará as seguintes restrições para recuperação:   \- Se o usuário for usuário interno, todos os endereços vinculados àquela parte serão recuperados;   \- Se os endereços vinculados à parte tiverem sido cadastrados pelo usuário logado, eles serão recuperados;   \- Se o usuário logado for a parte, todos os endereços vinculados a ele serão recuperados. | Funcionalidades:   Cadastro de endereço da parte |

## RN394

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Usuário interno | O usuário do PJe é considerado um "usuário interno" caso tenha a ele vinculado um papel que, em sua hierarquia, esteja o papel de servidor. Negocialmente, são magistrados e servidores do Poder Judiciário, bem como outros a que se reconhecer acesso às funcionalidades internas do sistema de processamento em meio eletrônico, tais como estagiários e prestadores de serviço. | Funcionalidades:   Preparar remessa para o 2º grau. |

## RN395

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Hierarquia de papéis | Ao criar um papel no PJe, pode-se vincular e ele uma hierarquia de papéis que permite que o novo papel criado herde as permissões dos papéis vinculados. Por exemplo, se for criado um papel de assessor e ele tiver, como papel herdado, o papel de servidor, todas as funcionalidades do papel de servidor estarão também disponíveis para o papel de assessor. Mais detalhes sobre esse assunto podem ser encontrados na seção de controle de acesso do manual de referência. | Funcionalidades:   RN396 |

## RN396

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Documentos anexos | O PJe só permite anexos construídos em outros aplicativos após a inclusão de um documento principal para que os documentos anexos estejam sempre associados ao principal. O tipo de uso upload identifica tipos de documentos que estarão disponíveis para serem disponibilizados no sistema quando da utilização de anexos aos documentos principais. | Funcionalidades:   Configuração de tipo de documento;   Funcionalidades que utilizam o uso como filtro, como por exemplo, o registro de intimações realizadas por correios. |

## RN397

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Ciência eletrônica | A ciência eletrônica ocorre quando há comunicações pendentes de ciência para partes em processos no PJe onde o advogado/procurador/defensor da parte intimada ou a própria parte acessam a intimação no sistema. O ícone de ciência (a lupa vermelha ) aparecerá para esses usuários em intimações pendentes de ciência tanto na tela de detalhes do processo como no agrupador de intimações pendentes. Ao tentar acessar o documento, para usuários advogados/procuradores/defensores da parte intimada e para a parte intimada, o sistema só deverá permitir a visualização se o usuário confirmar a ciência da intimação. Havendo a confirmação, o documento poderá ser exibido, e o sistema deverá fazer o registro da ciência. | Funcionalidades:   Painel do advogado;   Detalhes do processo.      Regras:   Regra de intimação pessoal;   Regra geral de ciência |

## RN398

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Visualização de expedientes | Se um determinado expediente não pessoal é destinado a uma pessoa, independentemente de o processo ser ou não sigiloso, ela e seus representantes devem poder vê-lo, inclusive se os representantes forem procuradorias, ressaltando-se que, se estiverem pendentes de ciência, só poderão visualizar mediante confirmação da ciência, conforme regra RN397. (verificar requisitos de configurações de procuradores/defensores e procuradorias/defensorias no roteiro). Para expedientes pessoais, o mesmo deve ser observado, respeitada a regra RN345. | Funcionalidades:   Detalhes do processo. |

## RN399

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Visualização de processos | A visualização de processos está vinculada ao conceito de visibilidade da regra RN312. Complementarmente, processos podem ser visualizados através da consulta pública, de acordo com a restrição RN381. Além disso, podem ter acesso aos processos os advogados/procuradores de suas partes, assim como seus assistentes. Em processos com segredo de justiça, o sistema permite a visualização pelas partes do polo ativo. Advogados, procuradores e membros do Ministério Público cadastrados, mas não vinculados ao processo podem visualizá-los desde que demonstrado interesse, conforme funcionalidade de consulta a processo de terceiros, desde que respeitada a regra RN452. | Funcionalidades:   Detalhes do processo. |

## RN400

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lançamento de movimento de juntada | O movimento de juntada é lançado quando um documento é anexado ao PJe e não foi vinculada movimentação explicitamente pelo usuário que o anexou. Para usuários internos, o movimento a ser lançado é o de Juntada de Documento. Para usuários externos, é o de Juntada de Petição. Em ambos os casos, o tipo de documento utilizado é parte do complemento do movimento registrado. | Funcionalidades:   Incluir documentos ou petições. |

## RN400

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lançamento de movimento de juntada | O movimento de juntada é lançado quando um documento é anexado ao PJe e não foi vinculada movimentação explicitamente pelo usuário que o anexou. Para usuários internos, o movimento a ser lançado é o de Juntada de Documento. Para usuários externos, é o de Juntada de Petição. Em ambos os casos, o tipo de documento utilizado é parte do complemento do movimento registrado. | Funcionalidades:   Incluir documentos ou petições. |

## RN401

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campos da consulta pública (também chamados parâmetros ou critérios) | Conforme Resolução N° 121 do CNJ, a consulta pública do PJe deve permitir a localização e identificação dos dados básicos de processo judicial segundo os seguintes critérios: número do processo; nomes das partes; CPF ou CNPJ das partes; nomes dos representantes processuais (advogados, defensorias, procuradorias); registro junto à Ordem dos Advogados do Brasil (dos advogados listados). A fim de melhorar o refinamento da consulta, o usuário poderá utilizar mais de um critério por vez. Quando utilizado o número do processo, o comportamento do campo será determinado pela regra RI312. Quanto utilizado nomes das partes e/ou nomes dos representantes processuais, os campos deverão se comportar conforme regra RI313. Quando utilizado CPF/CNPJ das partes, o campo deverá se comportar conforme regra RI315 Quando utilizado o registro junto à OAB, o comportamento do campo será determinado pela regra RI316. Os critérios das consultas a processos sujeitos à apreciação da Justiça do Trabalho, ou seja, para instalações onde o parâmetro tipoJustiça estiver configurado com o valor "JT", devem ser restringidos ao número do processo, nome dos advogados e registro junto à OAB. Ou seja, nessas instalações, os outros critérios não devem ser exibidos. O resultado da consulta deve obedecer à regra RN589. | Funcionalidades:   Consulta pública. |

## RN402

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Classes judiciais para o protocolo de processo | No protocolo de processos, as classes só aparecem após selecionada a jurisdição. As classes passíveis de seleção ao criar um processo seguem algumas restrições.   **Para primeiro grau**, as classes devem ter sido configuradas obedecendo a todas e somente todas as regras descritas abaixo:      • Devem ter um fluxo associado;   • Devem estar configuradas na competência vinculada a algum órgão julgador da jurisdição selecionada;   • A aplicação da classe deve ser a mesma configurada no parâmetro aplicacaoSistema.   • Para usuários   **\-** externos   **\-** não devem ser incidentais ou devem ser iniciais; (regra deve ser revista, pois no lugar do "ou" deveria ser um "e")   **\-** não devem ter sido configuradas como recursal/interna;   **\-** internos   **\-** não devem ser incidentais ou devem ser recursais (campo recursal/interna) ou a classe deve ser inicial; (regra deve ser revista, pois no lugar do primeiro "ou" deveria ser um "e");   **\-** jus postulandi   **\-** devem ter sido configuradas como "Permite jus postulandi;   **\-** não devem ser incidentais ou devem ser iniciais; (regra deve ser revista, pois no lugar do "ou" deveria ser um "e")   **\-** não devem ser recursais (campo recursal/interna);      Abaixo, segue um exemplo que auxilia no entendimento da regra.      Configuração:      • Parâmetro "aplicacaoSistema" marcado com o valor "1"   • Aplicação da classe (aplicabilidade da jurisdição) contendo como primeiro item configurado o valor "1º GRAU";   • Classe judicial "Procedimento do juizado especial cível" configurada de acordo com os seguintes parâmetros:   • Campo "Fluxo" com o conteúdo "Fluxo básico de conhecimento" selecionado (fluxo deve ter sido construído através da configuração de fluxos)   • Campo "Inicial" selecionado   • Campo "Permite jus postulandi" selecionado   • Campo Recursal/Interna não selecionado   • Campo "Incidental" não selecionado   • Aba "Aplicação" contendo a "Aplicação da classe" com o valor "1º GRAU" como incluída;   • Jurisdição "Paranoá" configurada como ativa;   • Competência "Juizado especial cível" corretamente configurada, contendo na aba "Classe X Assunto" a classe "Procedimento do juizado especial cível" com data inicial anterior à data atual e sem data final ou com data final posterior à data atual;   • Órgão julgador "Vara única do Paranoá" corretamente configurado com o campo "Jurisdição" com o conteúdo "Paranoá" selecionado, contendo na aba "Competência" a competência "Juizado especial cível".   `-> Na situação descrita acima, a classe estará na lista de possíveis classes para o usuário advogado, jus postulandi e para o servidor. -> Se o campo "Recursal/Interna" da classe for selecionado, a classe só aparecerá para o servidor. -> Se, na configuração, o campo "Permite jus postulandi" for desmarcado, a classe só aparecerá para o servidor e para o advogado.`      **Para segundo grau**, as classes devem ter sido configuradas com obedecendo todas e somente todas as regras descritas abaixo:      **\-** Devem ter um fluxo associado;   **\-** Devem estar ativas;   **\-** Devem ser iniciais;   **\-** Devem estar configuradas na competência vinculada a algum órgão julgador da jurisdição selecionada;   **\-** A aplicação da classe deve ser a mesma configurada no parâmetro aplicacaoSistema.   Abaixo, segue um exemplo que auxilia no entendimento da regra.      Configuração:      • Parâmetro "aplicacaoSistema" marcado com o valor "2"   • Aplicação da classe (aplicabilidade da jurisdição) contendo como primeiro item configurado o valor "2º GRAU";   • Classe judicial "Revisão disciplinar" configurada de acordo com os seguintes parâmetros:   • Campo "Fluxo" com o conteúdo "Fluxo básico de conhecimento" selecionado (fluxo deve ter sido construído através da configuração de fluxos)   • Campo "Ativo" selecionado   • Campo "Inicial" selecionado   • Aba "Aplicação" contendo a "Aplicação da classe" com o valor "2º GRAU" como incluída;   • Jurisdição "CNJ" configurada como ativa;   • Competência "Corregedoria" corretamente configurada, contendo na aba "Classe X Assunto" a classe "Revisão disciplinar" com data inicial anterior à data atual e sem data final ou com data final posterior à data atual;   • Órgão julgador "Gabinete da corregedoria" corretamente configurado com o campo "Jurisdição" com o conteúdo "CNJ" selecionado, contendo na aba "Competência" a competência "Corregedoria".   `-> Na situação descrita acima, a classe estará na lista de possíveis classes. -> Se o campo "Inicial" da classe for desmarcado, a classe não mais aparecerá. -> Se na aba "Aplicação" vinculada à classe não estiver contido o valor "2º GRAU", a classe não mais aparecerá.` | Funcionalidades:   Seleção de classes no cadastro de processo. |

## RN403

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Classes judiciais para o protocolo de processo incidental | No protocolo de processos incidentais, as classes passíveis de seleção ao criar um processo seguem as seguintes restrições:   **Para primeiro grau**, as classes devem ter sido configuradas obedecendo a todas e somente todas as regras descritas abaixo:   • Devem estar ativas;   • Devem ter um fluxo associado;   • Devem estar configuradas na competência vinculada a algum órgão julgador da jurisdição selecionada e a competência deve estar ativa na data atual;   • A aplicação da classe deve ser a mesma configurada no parâmetro aplicacaoSistema.   • Para usuários   **\-** externos   **\-** devem ter sido configuradas como incidentais;   **\-** não devem ter sido configuradas como recursais (campo recursal/interna);   **\-** internos   **\-** a classe deve ser incidental ou a classe deve ser recursal/interna;   **\-** jus postulandi   **\-** devem estar marcadas como de jus postulandi   **\-** deve ser incidentais ou devem ser recursais (campo recursal/interna); (regra deve ser revista, pois no lugar do "ou" deveria ser um "e")   **Para segundo grau**, as classes devem ter sido configuradas obedecendo a todas e somente todas as regras descritas abaixo:      **\-** Devem ter um fluxo associado;   **\-** Devem estar ativas;   **\-** Devem ser incidentais;   **\-** Para usuários externos, não devem ter sido configuradas como recursal/interna;   **\-** Devem estar configuradas na competência vinculada a algum órgão julgador da jurisdição selecionada e a competência deve estar ativa na data atual;   **\-** A aplicação da classe deve ser a mesma configurada no parâmetro aplicacaoSistema. | Funcionalidades:   Seleção de classes no cadastro de processo incidental. |

## RN404

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Transição vinculada a editor com assinatura | Ao ser utilizado o editor com assinatura (variável na configuração do fluxo), a transição só deverá ocorrer quando da assinatura do documento seguindo as regras da RN302, ou seja:   • Para tipos de documento cujos papéis associados sejam todos facultativos, a assinatura será permitida, mas não necessária para que o processo siga para a transição seguinte (o usuário poderá assinar e prosseguir ou apenas prosseguir);   • Para tipos de documento que tenham papéis marcados como obrigatórios e nenhum suficiente, o documento precisará ser assinado por todos os papéis obrigatórios para que o processo siga para a transição seguinte;   • Para tipos de documento que tenha um ou mais papéis marcados como suficientes, quando pelo menos um papel marcado como suficiente assinar o documento, o processo seguirá para a transição seguinte. | Funcionalidades:   Editor com assinatura |

## RN405

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recurso para acesso ao relatório de produtividade por órgão julgador/ magistrado | Apenas os papéis que possuírem o recurso "Relatório de produtividade – Órgão Julgador/ Magistrado", cadastrado com o identificador TODO DESING: /pages/EstatisticaProcesso/RelatorioProdutividadeOrgaoJulgadorMagistrado/listView.seam poderão acessar a funcionalidade para geração de relatórios. | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado |

## RN406

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Movimentações processuais vinculadas a fluxos utilizados por magistrados | As movimentações processuais cadastradas que serão utilizadas pelos magistrados devem ser vinculadas ao fluxo por meio de ELs. As linguagens de expressões serão definidas e vinculadas às tarefas de fluxos por meio dos eventos. Além disso, a tarefa necessita ser atribuída a uma raia, onde o papel do magistrado será obrigatório. | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado |

## RN407

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Distinção para pesquisa genérica e relatório de produtividade | O resultado da pesquisa do relatório será apresentado de duas formas, a saber:   O resultado genérico exibe apenas os dados do processo, tais como número, classe, assunto, polos, data e hora da última movimentação. Esse resultado não separa a pesquisa de acordo com as movimentações. Seu papel é apenas possibilitar a geração do relatório de produtividade (sintético ou analítico), sendo apresentado ao usuário após utilização do painel de pesquisa.   O resultado detalhado, ou seja, o relatório de produtividade sintético ou analítico, apresenta os detalhes do relatório, sendo separados de acordo com as movimentações processuais. Como pré-requisito, esses relatórios somente serão visualizados após a apresentação do relatório genérico. | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado |

## RN408

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Obrigatoriedade, mínima, de escolha de item em uma determinada lista. | É obrigatória a escolha de no mínimo um item na lista em questão. | Funcionalidade:   \- IPC do tipo prisão.   \- IPC do tipo indiciamento.   \- IPC do tipo obrigações a pagar.   \- IPC do tipo oferecimento da denúncia.   \- IPC do tipo aditamento da denúncia.   \- IPC do tipo atribuição de autoria dos fatos.   \- IPC do tipo queixa.   \- IPC do tipo recebimento da denúncia.   \- IPC do tipo atribuição de autoria de fatos. |

## RN409

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista de jurisdições no protocolo de processos | As jurisdições disponíveis são aquelas cadastradas através da opção Configuração → Jurisdição e que estão marcadas como o campo Situação "Ativo". | Funcionalidades:   \- Protocolo de processos |

## RN410

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Criptografia de documentos produzidos pelo magistrado | A criptografia dos documentos produzidos pelos magistrados trará mais segurança quanto à decisão do magistrado por terceiros antes da sua divulgação. Dessa forma, todos os documentos elaborados pelo magistrado deverão possuir criptografia de dados, ou seja, desde o momento que o magistrado (ou servidores da vara, como por exemplo, o assessor) salve a inclusão ou alteração do documento dentro do editor de textos. Esse documento será visível para quem o elaborou, ou para os perfis que possuam permissão. O documento somente será descriptografado (visível aos demais) quando o mesmo se tornar público, desde que o mesmo não seja sigiloso ou um processo que tramita em segredo de justiça. O ato de tornar o documento público se dá a partir do momento em que o documento é assinado, ou seja, quando o processo for assinado dentro da tarefa onde se encontra, ele deverá ser descriptografado. | Funcionalidades:   \- Criptografia de documentos |

## RN411

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Nomenclatura para o relatório de produtividade | O relatório de produtividade possui a opção de geração nos formatos pdf e xls. Quando os mesmos forem gerados, esse relatório deverá conter o nome padrão "Relatório de produtividade", no entanto, fica a critério do usuário a alteração desse nome. | Funcionalidades:   \- Relatório de produtividade órgão julgador/ magistrado |

## RN412

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regra para o cadastramento de usuários externos | Através da tela principal do PJe tem-se acesso a opção de identificação, que deve ser realizada através do uso de certificado digital, conforme procedimentos descritos no manual do advogado. No mesmo manual, há alguns esclarecimentos sobre o uso de certificação digital. Para usuários não cadastrados, ao inserir o cartão de certificação ou o token, o sistema verificará, com base na identificação, os dados do usuários junto ao cadastro da receita federal, conforme regra RN301. O usuário realizará a confirmação de seu cadastro, assinando um termo de compromisso e podendo, em seguida, prosseguir com a utilização do sistema. | Funcionalidades:   \- Login |

## RN413

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regras de peticionamento avulso | \- Um advogado/procurador/Jus Postulandi pode peticionar avulsamente em um processo X ao qual ele não está associado;   \- O advogado/procurador/Jus Postulandi INATIVADO (situação da parte marcada como "I") ou SUSPENSO (situação da parte marcada como "S") ou BAIXADO (situação da parte marcada como "B") do processo também deve poder peticionar de forma avulsa;   \- Se o advogado/procurador/Jus Postulandi for associado a alguma parte do processo, ele não poderá mais fazer petição avulsa, pois ele terá acesso ao processo diretamente pelo "painel do advogado - anexar petições ou documentos";   \- Se o advogado/procurador/Jus Postulandi for associado a alguma parte do processo, ele deve conseguir peticionar no processo, no entanto, o peticionamento não será considerado um peticionamento avulso `(não cria registro na tabela [tb_proc_doc_ptcao_nao_lida])`.      **Mensagens:**   **Para processos não sigilosos:**   \- Se o advogado/procurador incluir o número do processo para o peticionamento e clicar em pesquisar o sistema deverá mostrar o resumo do processo;   Ao clicar no número do processo:   \- se o advogado/procurador não fizer parte do processo, deve ser mostrado um popup de que ele não faz parte do processo e que o acesso ao processo será registrado; (o peticionamento deverá ser registrado como peticionamento avulso (tb\_proc\_doc\_ptcao\_nao\_lida));   **Texto do popup:**   "Conforme a Resolução CNJ n.º 121 e o PCA 0000547-84.2011.2.00.0000, o acesso aos autos de processo de que o advogado não faz parte será registrado para fins de eventual responsabilização civil, administrativa ou criminal. Continuar?"   \- se o advogado/procurador fizer parte do processo, não deverá ser exibida a mensagem;   \- Se o Jus Postulandi incluir o número do processo para o peticionamento e clicar em pesquisar o sistema deverá verificar:   \- se o Jus Postulandi faz parte do processo, se fizer deve ser mostrado o resumo do processo e ao clicar deve ser mostrado o detalhe do processo sem mensagens adicionais;   \- se o Jus Postulandi não faz parte do processo, deve ser exibida a mensagem:   "O seu usuário não possui permissão de visualização do processo XXXXXXX-XX.XXXX.X.XX.XXXX, por isso, suas informações não podem ser exibidas.";   ao protocolar o sistema deverá registrar como peticionamento avulso (tb\_proc\_doc\_ptcao\_nao\_lida).      **Para processos sigilosos:**   \- deve-se respeitar as mesmas regras para processos não sigilosos, no entanto, para usuários que estão peticionando e que não fazem parte do processo deve-se seguir às regras:   \- Se o número do processo digitado não estiver completo, o sistema deverá lançar o aviso:   "Não foi encontrado o processo pesquisado. Por favor, verifique o número inserido.";   ou seja, pessoas que não fazem parte de um processo sigiloso devem informar o número completo do processo;   \- Se o número do processo digitado estiver completo o sistema deverá lançar a mensagem:   "O processo XXXXXXX-XX.XXXX.X.XX.XXXX é sigiloso e, por isso, suas informações não podem ser exibidas." | Funcionalidades:   \- Peticionamento avulso |

## RN414

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Permissão para peticionamento avulso | Somente usuários credenciados podem fazer uso do peticionamento avulso. Os assistentes podem fazer uso da funcionalidade, mas somente advogados e procuradores podem assinar digitalmente as petições avulsas. | Funcionalidades:   \- Peticionamento avulso |

## RN415

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Contrato de serviços com a ECT | A Empresa Brasileira de Correios e Telégrafos (ECT) dispõe de um conjunto de operações acessíveis via Web Service que possibilita a integração do Gerenciador de Postagens dos Correios, o SIGEP WEB. Esse serviço tem o objetivo de organizar o processo de postagens de expedientes entre os Tribunais e os Correios. Para utilizá-los, cada Tribunal deve contratar e pagar pelos serviços oferecidos. A priori, somente o serviço do tipo "Carta" mais o serviço adicional "Aviso de Recebimento (AR)" serão utilizados entre o PJe e a ECT. O Aviso de Recebimento (AR) é um serviço adicional que permite ter o comprovante da entrega do expediente, podendo qualquer pessoa assiná-lo, atestando o recebimento do expediente. Sendo assim, o PJe disponibilizará um conector para se comunicar com a ECT. Esse conector possui a finalidade de enviar os expedientes e suas respectivas etiquetas postais ao SIGEP WEB, permitindo um maior controle sobre a carga a ser postada. O conector possuirá as funcionalidades necessárias para efetuar a integração. Para configurar o conector, o PJE deverá incluir no cadastro de parâmetros gerais os seguintes valores parâmetros:   CONTRATO\_CORREIOS   CARTAO\_CORREIOS   USUARIO\_CORREIOS   SENHA\_CORREIOS   CNPJ\_CONTRATANTE\_CORREIOS   Os valores referentes aos parâmetros citados anteriormente serão diferenciados para cada Tribunal, já que cada Tribunal deverá possuir um contrato com os Correios. | Funcionalidades:   \- Conector ECT |

## RN416

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Papel definido para acessar a funcionalidade "Preparar ato de comunicação" | Apenas os usuários que tenham recebido a permissão do papel “Diretor de Secretária” (identificador "dirSecretaria") terão acesso ao fluxo "Preparar ato de comunicação". Além disso, o papel “Diretor de Secretária” deve estar vinculado ao fluxo "Preparar ato de comunicação" por meio das raias de fluxo. | Funcionalidades:   \- Conector ECT;   \- Lista de processo do painel do usuário |

## RN417

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Solicitação de numero de etiquetas à ECT | A numeração da etiqueta de postagem para a correspondência será gerada pelo SIGEPWeb (Gerenciador de Postagem dos Correios). A priori, somente o serviço de "Carta" será utilizado. Esse serviço deverá possuir uma numeração própria, reservando faixas de números de registros das encomendas. Com o atendimento da solicitação, o número de registro fica reservado para o CNPJ do Tribunal, conforme exemplo: DL61145929BR, onde:   \- Dois primeiros dígitos – indica o código do identificador do tipo de serviço. Ex: SO.   \- Oito dígitos seguintes – numeração gerada pelos Correios, sendo o último dígito apenas para verificação. Ex: 61145929   \- Dois últimos dígitos – indica o código do país. Ex: BR   O número de etiqueta gerado pelo SIGEPWeb será usado para rastrear o objeto e verificar sua entrega. Também será usado na impressão das etiquetas de AR. | Funcionalidades:   \- Conector ECT;   \- Preparar ato de comunicação |

## RN418

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificação da situação do contrato do tribunal perante a ECT | O PJe utilizará o serviços dos correios para envio de correspondências. Ao enviar uma requisição ao servidor web dos Correios, o tipo do serviço disponível no cartão de postagem e o status do contrato do cartão deverão ser validados por meio dos seguintes parâmetros (criados por meio da funcionalidade "Parâmetro"):   \- Número do contrato do serviço firmado entre ECT e o Tribunal. Para realizar os testes, usar o número do contrato: 9912208555;   \- Número do cartão, esse número é disponibilizado pela ECT mediante contrato firmado. Para realizar os testes, usar o número do cartão: 0067594867;   \- Usuário dos Correios. Para realizar os testes, usar: sigep   \- Senha. Para realizar os testes, usar a senha: n5f9t8   \- CNPJ da jurisdição (Tribunal). Para realizar os testes, usar: 34028316000103   Todos os valores parâmetros devem ser os mesmos cadastrados nas tabelas do banco de dados ("postagem.tb\_contrato" e "postagem.tb\_cartao\_postagem"). Essa verificação será efetuada em todas as requisições feitas à ECT. Para cada uma dessas verificações, o sistema deverá alertar o usuário sobre alguma inconsistência encontrada no final do processamento. Caso haja algum tipo de impedimento, a conexão entre o tribunal e a ECT será interrompida. | Funcionalidades:   \- Conector ECT;   \- Preparar ato de comunicação |

## RN419

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Vinculação entre expedientes e número de etiqueta | Para cada expediente do tipo “Correios” deverá existir uma etiqueta vinculada a esse expediente. Essa numeração de etiqueta será gerada pelo SIGEP (Web Service dos Correios). Dessa forma pode-se rastrear o objeto postal e verificar seu andamento. | Funcionalidades:   Conector ECT;   Preparar ato de comunicação |

## RN420

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Atualização agendada de objetos postais | A atualização diária é feita através de um temporizador que será executado diariamente às 23h e solicitará aos Correios(SIGEP) os dados atualizados dos objetos postais, bem como de seu rastreio. Cada um desses objetos possuirá um status, podendo ser "0", "1" ou "2", sendo:   • “0” significa status inicial, ou seja, quando o objeto foi enviado eletronicamente aos Correios;   • “1” significa que o objeto foi postado, ou seja, quando o objeto foi recebido (fisicamente) na unidade de coleta dos Correios;   • “2” significa que a postagem do objeto foi cancelada.   O temporizador irá verificar apenas objetos postais que possuam status igual a "0" ou "1". Objetos com status "2" serão ignorados.   Além do status do objetos postal, o temporizador verificará apenas objetos postais cujo status do rastreio seja:      • Status "0", com a combinação dos tipos "BDE", "BDI" e "BDR"   • Status "1", com a combinação dos tipos "BDE", "BDI" e "BDR" | Funcionalidades: |
| Conector ECT |  |  |

## RN421

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Órgãos julgadores para seleção no cadastro do servidor | O cadastro de servidores é uma funcionalidade que deve ser disponibilizada para administradores do sistema, ou seja, pessoas vinculadas ao papel de administrador, conforme regra RN422. Partindo dessa premissa, os órgão julgadores, na aba de localizações, figurarão na lista todos os órgãos julgadores cadastrados na instalação do PJe. Caso não estejam vinculadas ao papel de administrador, a lista conterá apenas o órgão julgador vinculado ao usuário. Caso o usuário não esteja vinculado à nenhum órgão julgador, não haverá opções a selecionar. | Funcionalidades:   Configuração de pessoa servidor |

## RN422

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Usuários administradores | Usuários administradores são todos aqueles vinculados ao papel cujo identificador esteja cadastrado como "admin" ou "administrador". Papéis que herdem do papel de administrador disponibilizarão aos usuários as permissões de administrador da mesma forma. Conforme orienta o manual de instalação, é recomendável que seja cadastrado, ao instalar o PJe, o cadastro de um administrador, para que toda a configuração do sistema possa ser realizada. A vinculação de usuários a papéis só é possível para cadastro de usuários internos. Sendo assim, só servidores (usuários internos) podem ser administradores. | Funcionalidades:   Funcionalidades que precisam ser executadas pelo papel de administrador |

## RN423

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Ciência da intimação publicada em meio oficial (DJE). | No Distrito Federal e nas Capitais dos Estados e dos Territórios, consideram-se feitas as intimações pela só publicação dos atos no órgão oficial. Da publicação deve constar os nomes das partes e de seus advogados. Nas demais comarcas poderá ser aplicada a mesma regra, se houver órgão de publicação dos atos oficiais. A exceção se dá para intimações do Ministério Público, que em qualquer caso será feita pessoalmente. No PJe, o registro de ciência de intimações feitas via DJE poderá ser feito de forma manual por meio de uma tarefa de fluxo. A configuração dessa tarefa pode ser consultada aqui. A intimação, para esses casos, figurará nos agrupadores de acordo com as regras gerais de cada agrupador. | Funcionalidades:   Publicar DJE no fluxo de preparar ato de comunicação |

## RN424

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Ciência da intimação por carta para outros órgãos jurisdicionais. | Quando o ato de comunicação se realizar em cumprimento de carta de ordem, precatória ou rogatória, a ciência será registrada com a data de sua juntada aos autos devidamente cumprida. No PJe, o registro de ciência de intimações feitas por carta poderá ser feito de forma manual por meio de uma tarefa de fluxo. A configuração dessa tarefa pode ser consultada aqui. A intimação, para esses casos, figurará nos agrupadores de acordo com as regras gerais de cada agrupador. | Funcionalidades:   Encaminhar carta |

## RN425

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de informação processual complementar (IPC) do tipo fuga. | IPCs do tipo fuga devem obedecer as especificações descritas nas seguintes regras complementares:   • RN426;   • Alguns tipos de IPC possuem uma relação com pessoa e processo judicial; no caso de IPC do tipo fuga, essa relação é definida pela regra RN141. | Funcionalidades:   IPC do tipo fuga. |

## RN426

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam IPC do tipo fuga. | As informações (ou atributos) que caracterizam uma IPC do tipo fuga são:   • Uma **lista de prisões** formada conforme a regra RN427.   **\-** Essa lista deve atender as regras RN57 e RN66 (a RN66 visa atender a regra RN43).   • A **data** (dia, mês e ano) que ocorreu a **fuga**.   **\-** É obrigatório informar a data da fuga.   **\-** A data da fuga deve obedecer as regras: RI3, RN74.   • Uma **lista de movimentações processuais** formada conforme a regra RN429.   **\-** Essa lista deve atender as regras RN57 e RN166.   • Uma **lista de documentos** formada conforme a regra RN430.   **\-** Essa lista deve atender as regras RN57 e RN166.   • Um **atributo** que permita descrever as **observações** desejadas à IPC do tipo fuga. As observações são descritas em texto e não há restrição a respeito do conteúdo desse texto. | Funcionalidades:   IPC do tipo fuga. |

## RN427

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da lista de prisões em IPC | Essa lista é composta por um conjunto de informações provenientes das IPCs do tipo prisão pertencentes ao processo judicial em questão. Cada item da lista contém as informações: nome completo da pessoa afetada (ou réu), data da prisão, tipo da prisão, local do estabelecimento prisional e nome desse estabelecimento. Cada item da lista deverá estar disponível para seleção futura. | Funcionalidades:   \- IPC do tipo fuga;   \- IPC do tipo soltura;   \- IPC do tipo transferência do réu. |

## RN428

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da lista de processos judiciais em IPC | Essa lista é composta por um conjunto de informações provenientes de processos judiciais conforme regra RN139. Cada item da lista contém as informações: órgão julgador colegiado, órgão julgador, sigla da classe judicial, número do processo judicial, assunto principal, nome da parte no polo ativo, nome da parte no polo passivo e data de autuação. Cada item da lista deverá estar disponível para seleção futura. | Funcionalidades:   \- (Listar as funcionalidades relacionadas, se houver). |

## RN429

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da lista de movimentações processuais em IPC | Essa lista é composta por um conjunto de informações provenientes das movimentações processuais do processo judicial em questão. Cada item da lista contém as informações: identificador (ou id) da movimentação, data e hora de lançamento da movimentação, código da movimentação (este código é o mesmo registrado nas Tabelas Processuais Unificadas), descrição (ou texto final interno) da movimentação. A lista é ordenada de forma decrescente pela data de lançamento da movimentação. Cada item da lista deverá estar disponível para seleção. | Funcionalidades:   \- IPC do tipo prisão;   \- IPC do tipo fuga;   \- IPC do tipo soltura;   \- IPC do tipo indiciamento;   \- IPC do tipo obrigações a pagar;   \- IPC do tipo oferecimento da denúncia;   \- IPC do tipo aditamento da denúncia;   \- IPC do tipo aditamento da queixa;   \- IPC do tipo atribuição de autoria dos fatos;   \- IPC do tipo queixa;   \- IPC do tipo recebimento da denúncia. |

## RN430

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da lista de documentos em IPC | Essa lista é composta por um conjunto de informações provenientes dos documentos juntados do processo judicial em questão e que são visíveis para o usuário logado. Cada item da lista contém as informações: identificador (ou id) do documento, nome do documento, data de juntada (se esta existir), identificador (ou id) do documento vinculado (se este existir) e o tipo do documento. A lista é ordenada de forma decrescente pela data de juntada. Cada item da lista deverá estar disponível para seleção futura. | Funcionalidades:   \- IPC do tipo prisão;   \- IPC do tipo fuga;   \- IPC do tipo soltura;   \- IPC do tipo indiciamento;   \- IPC do tipo obrigações a pagar;   \- IPC do tipo oferecimento da denúncia;   \- IPC do tipo aditamento da denúncia;   \- IPC do tipo aditamento da queixa;   \- IPC do tipo atribuição de autoria dos fatos;   \- IPC do tipo queixa;   \- IPC do tipo recebimento da denúncia. |

## RN431

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Serviço de Rastreamento de Objetos (SRO) | Na tela de consulta de detalhes de processo (Processo/ConsultaProcesso/Detalhe/...), a coluna 'Documentos' da aba 'Expedientes' deve exibir um ícone com o logo dos Correios somente para expedientes enviados pelos "Correios". O ícone acionará uma chamada para o SRO (Serviço de Rastreamento de Objetos dos Correios) para recuperar os dados do rastreio do expediente selecionado. As informações serão retornadas numa mensagem XML, que irá preencher os campos da tabela descrita na RI280. | Funcionalidades:   Consultar detalhes do processo. |

## RN432

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Geração do número identificador de PLPs | O número identificador interno de uma PLP é um número sequencial e deve ser zerado diariamente, ou seja, pode-se ter PLPs com o mesmo número, porém não com o mesmo número e a mesma data de cadastramento. Ex: 1 - 01/01/2014; 2 - 01/01/2014; 1 - 02/01/2014. | Funcionalidades:   Conector ECT |

## RN433

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Envio de PLPs aos Correios | Uma Pré-Lista de Postagem (PLP) será enviada aos Correios da seguinte maneira:   Faz-se um agrupamento de objetos postais em uma lista chamada PLP (RN522), onde seus dados, bem como dos objetos postais serão enviados aos Correios. Vale ressaltar que trata-se de uma pré-postagem onde os dados cadastrais das correspondências são enviados.   Após a postagem da PLP, os expedientes e suas respectivas etiquetas ARs deverão ser impressos e encaminhados (fisicamente) aos Correios.   Pode-se ter mais de uma PLP, normalmente postadas ao fim do dia diariamente, contemplando todos os expedientes criados naquele dia. | Funcionalidades:   Conector ECT |

## RN434

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Número da PLP | Quando uma Pré-Lista de Postagem (PLP) for enviada corretamente aos Correios, um número de protocolo é gerado pelo SIGEP e devolvido ao ConectorECT. Esse número servirá como confirmação de uma postagem correta, devendo ser vinculado à PLP. Nos casos onde não existir Número de PLP, subtende-se que o pacote PLP ainda não foi enviado a ECT, permitindo que o mesmo sofra alterações. Só não é permitida a edição de uma PLP nos casos onde o pacote já foi enviado aos Correios. Nesses casos, a PLP poderá ser apenas visualizada e impressa. | Funcionalidades:   Conector ECT |

## RN435

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Endereço do destinatário | No momento da criação do expediente, o PJe irá recuperar os nomes e respectivos endereços das partes de um processo. O usuário selecionará o endereço para onde a correspondência deverá ser entregue. Esses dados (nome da parte e endereço) deverão ser gravados na base de dados do PJe para posterior envio das correspondências, sendo que essas informações irão preencher os campos da etiqueta postal, especificada por meio da regra RI278. | Funcionalidades:   Conector ECT;   Preparar ato de comunicação |

## RN436

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de informação processual complementar (IPC) do tipo obrigações a pagar | IPCs do tipo obrigações a pagar devem obedecer as especificações descritas nas seguintes regras complementares: RN437; Alguns tipos de IPC possuem uma relação com pessoa e processo judicial; no caso de IPC do tipo obrigações a pagar, essa relação é definida pela regra RN77. | Funcionalidades:   IPC do tipo obrigações a pagar |

## RN437

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam IPC do tipo obrigações a pagar | As informações (ou atributos) que caracterizam uma IPC do tipo obrigações a pagar são:   \- Uma lista das possíveis pessoas afetadas (ou réus) no processo judicial em questão, essa lista é formada conforme a regra RN72.   \- Essa lista deve atender as regras RN249 e RN408.   \- Uma lista de destinatários (ou credores, pessoas beneficiadas com o processo em questão) com as seguintes características:   \- A lista é formada conforme a regra RN438 e, opcionalmente, é possível incluir nessa lista outros participantes conforme orienta a regra RN439.   \- A lista também deve atender as regras RN249 e RN408.   \- O valor monetário que corresponde ao valor total das obrigações a pagar. É obrigatório informar o valor monetário e esse valor não pode ser negativo e nem igual a zero.   \- A data (dia, mês e ano) do vencimento das obrigações a pagar. É obrigatório informar a data do vencimento. A data do vencimento deve obedecer a(s) regra(s): RI3.   \- Uma lista de movimentações processuais formada conforme a regra RN429. Essa lista deve atender as regras RN57 e RN166.   \- Uma lista de documentos formada conforme a regra RN430. Essa lista deve atender as regras RN57 e RN166.   \- Um atributo que permita descrever as observações desejadas à IPC em questão. As observações são descritas em texto e não há restrição a respeito do conteúdo desse texto. | Funcionalidades:   IPC do tipo obrigações a pagar |

## RN438

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da lista de destinatários (ou credores) que são participantes dos polos (ativo, passivo) de um processo judicial | Essa lista é composta por todos os participantes do polo ativo do processo judicial em questão (ou processo corrente). Cada item da lista contém a(s) informação(ões): nome completo do participante. | Funcionalidade:   IPC do tipo obrigações a pagar |

## RN439

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de destinatários (ou credores) que não são participantes dos polos (ativo, passivo) de um processo judicial | Uma pessoa qualquer (física ou jurídica) pode ser credora em um processo judicial em questão (ou processo corrente) e não constar como participante dos polos (ativo, passivo) desse processo. Nessa situação, todos os dados dessa pessoa são obtidos da base de dados da Receita Federal de acordo com uma das informações prestadas previamente por essa pessoa: nome completo ou CPF ou CNPJ. Os dados dessa pessoa obtidos da Receita Federal (nome completo, CPF ou CNPJ, endereço completo, entre outros) serão vinculados ao processo em questão ou ao tipo de informação processual complementar (IPC) se for o caso. Nota: a situação aqui exposta tem comportamento idêntico à inclusão de 'outros destinatários' na tarefa de fluxo responsável pela preparação de ato de comunicação. | Funcionalidade:   IPC do tipo obrigações a pagar |

## RN440

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam a tipificação de delito | Os dados que caracterizam a tipificação de delito são:   \- A data do delito/ato infracional (dia, mês e ano) que registra a data do fato. É obrigatório informar a data do delito/ato infracional. A data do delito/ato infracional deve obedecer a regra: RI3.   \- Uma opção para data desconhecida com o objetivo de informar que a data do delito/ato infracional é desconhecida. Caso a opção de data desconhecida seja selecionada o campo data do delito/ato infracional deverá ser desabilitado para edição.   \- Uma lista de delitos formada conforme a regra RN188. A escolha de item da lista de delitos deve ser de forma múltipla, ou seja, um ou mais delitos podem ser escolhidos e gravados em uma lista. É obrigatório a escolha de no mínimo um item da lista de delitos. Essa lista deve atender as regras RN249 e RN408   \- Uma opção que permita combinar normas de extensão ao delito informado no item anterior. Conforme previsto na regra RN487 A escolha de item da lista de normas de extensão deve ser de forma múltipla, ou seja, uma ou mais normas de extensão podem ser escolhidas e gravadas em uma lista. A combinação de delito com normas de extensão não é obrigatório.   \- Um campo para informar a quantidade de incidências que o réu cometeu o delito. É obrigatório informar a quantidade de incidência do delito.   \- Uma lista que diz-se o crime é: crime consumado ou crime tentado formada conforme a regra RD62.   \- Uma lista de tipificações associadas formada conforme o usuário faça a inclusão das tipificações de delitos. Essa lista deve atender a regra RN480.   \- Uma opção que permita definir concurso de crime conforme previsto nas regras RN48, RN483.   \- Uma lista para visualizar a tipificação completa formada conforme a regra RN484. | Funcionalidades:   IPC do tipo indiciamento.   IPC do tipo transação penal.   IPC do tipo oferecimento da denúncia.   IPC do tipo aditamento da denúncia.   IPC do tipo aditamento da queixa.   IPC do tipo atribuição de autoria dos fatos.   IPC do tipo queixa.   IPC do tipo recebimento da denúncia.   IPC do tipo atribuição de autoria de fatos. |

## RN441

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Consulta de localizações | A consulta de localizações presente na tela de cadastro restringe os resultados às localizações estruturadas e às localizações simples vinculadas à localização do tribunal na instalação do PJe, que representa a raiz da hierarquia de localizações dos usuários internos. Para que a consulta funcione corretamente, o parâmetro idLocalizacaoTribunal deve ter sido configurado conforme diretrizes abaixo: Nome: idLocalizacaoTribunal Descrição: Id do próprio tribunal na tabela localização Valor: (Verificar o ID do registro na tabela parâmetro que representa o próprio tribunal na raiz da hierarquia) Sistema: Sim Tabela: tb\_localizacao | Funcionalidade:   Consulta de localizações (Menu Configuração) |

## RN442

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Características determinantes de processos sigilosos | O tribunal poderá configurar o sistema de modo que processos de determinadas classes ou assuntos sejam considerados em segredo de justiça automaticamente. Outros critérios podem ser configurados conforme definição do fluxo. | Funcionalidades:   Configuração de classe judicial |

## RN443

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Processos sigilosos | Alguns processos correm em segredo de justiça de acordo com características previamente configuradas, conforme regra RN442, ou com pedidos justificados no protocolo da ação, que são objeto de análise do juízo de distribuição. Em quaisquer da opções, os processos são considerados sigilosos. Conforme determina o Art. 28, § 2º da Resolução 185/2013 do CNJ, requerido o segredo de justiça, o processo permanecerá sigiloso até que o magistrado da causa ou pessoa competente decida em sentido contrário, de ofício ou a requerimento da parte contrária. | Funcionalidades: |

## RN444

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Vinculação de representantes a processos | Para partes cuja representação é realizada por advogados, a vinculação de procurador(es)/terceiro(s) vinculado(s) ao processo onde aquelas partes estejam presentes se dá através do protocolo do processo. Para o caso de o usuário distribuidor ser advogado, deve ser observada a restrição RN313, que diz que o advogado não poderá adicionar procurador/terceiro vinculado no polo passivo. Além disso, sendo o usuário advogado, ele será inserido automaticamente como representante da parte no polo ativo. Para partes cuja representação é realizada por procuradorias e órgãos do Ministério Público, a vinculação de um representante se dá através da vinculação da procuradoria à parte representada. Para partes cuja representação é realizada por defensorias, a vinculação de um representante se dá através da vinculação do tipo de pessoa física, o sistema apresenta campo permitindo a seleção da defensoria que a representa. A vinculação de novos representantes só é possível após vinculação da parte principal no polo pertinente. Quando uma parte inserida no polo ativo possuir mais de uma Procuradoria configurada como possíveis representantes da parte o sistema deve selecionar como procuradoria padrão (e não permitir que seja alterada) desta parte aquela que corresponde à procuradoria do perfil do usuário logado, caso nenhuma das procuradorias desta parte corresponda à do usuário logado o sistema deverá exibir o campo de seleção com todas as procuradorias representantes da parte. Se ela for representada apenas por uma Procuradoria o sistema deverá apenas informar que a procuradoria representante é aquela única. Quando uma parte for inserida no "Polo passivo" ou em "Outros participantes" e esta for representada por mais de uma Procuradoria o sistema deverá selecionar como padrão a procuradoria do perfil do usuário logado (e exibir um campo de seleção com as demais procuradorias representantes, para alteração), caso nenhuma das procuradorias do cadastro desta parte seja a procuradoria do perfil do usuário logado, o sistema não deverá selecionar previamente nenhuma procuradoria e solicitar que o usuário selecione uma das procuradorias da lista. Se houver apenas uma procuradoria representante da parte em seu cadastro, o sistema apenas deverá informar que a procuradoria representante é aquela única procuradoria. | Funcionalidades:   Configuração de procuradorias;   Cadastro de partes no protocolo de processos |

## RN445

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Vinculação de procuradores a entidades | A vinculação de procuradores a entidades específicas de uma procuradoria faz com que essas entidades sejam representadas apenas por aqueles procuradores, de acordo com perfil liberado para acesso Gestor, Padrão ou Distribuidor. Orientações a respeito da utilização dessa restrição estão no roteiro de configuração de procuradorias | Funcionalidades:   Configuração de procuradores |

## RN446

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Cadastro de localizações | Conforme preconiza as instruções contidas no manual de configuração inicial do sistema, o cadastro de localizações se destina ao cadastro de localizações estruturadas ou localizações simples vinculadas ao tribunal, pois as localizações de advogados, procuradores, procuradorias, defensores ou defensorias são criadas automaticamente pelo sistema. Sendo assim, no cadastro de localizações deve sempre ser informado campo "localização superior", com exceção das localizações base do tipo estruturada, já que todas as localizações do cadastro manual devem ser vinculadas a uma hierarquia de localizações. | Funcionalidades:   Configuração de localizações |

## RN447

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Opções de sigilo ou segredo de justiça | Conforme regra RN443, processos que tramitam em segredo de justiça são tratados no sistema como processos sigilosos. Processos que não têm essa característica podem ter a ele vinculados atos sigilosos, cuja característica de sigilo pode ser concedida de forma temporária. Assim sendo, documentos vinculados podem ter a característica de sigilo agregada, assim como também movimentações processuais. | Funcionalidades: |

## RN448

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de informação processual complementar (IPC) do tipo aditamento da denúncia | IPCs do tipo aditamento da denúncia devem obedecer as especificações descritas nas seguintes regras complementares: RN454; Qualquer tipo de IPC possui uma relação com pessoa e processo judicial; no caso de IPC do tipo aditamento da denúncia, essa relação é definida pela regra RN141. Alguns tipos de IPC possuem a necessidade de associação do(s) delito(s) cometido(s) pelo réu(s); no caso da IPC do tipo aditamento da denúncia, essa primordialidade é definida pela regra RN440. | Funcionalidades:   IPC do tipo aditamento da denúncia |

## RN449

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam IPC do tipo aditamento da denúncia | Os dados que caracterizam uma IPC do tipo aditamento da denúncia são: Uma lista de réus no processo em questão formada conforme a regra RN72. Essa lista deve atender as regras RN249 e RN408 e RI24. A data (dia, mês e ano) do fato que ocorreu o aditamento da denúncia. É obrigatório informar a data do aditamento da denúncia. A data do aditamento da denúncia deve obedecer a regra: RI3. Uma lista de movimentações processuais formada conforme a regra RN429. Essa lista deve atender as regras RN57 e RN166. Uma lista de documentos formada conforme a regra RN430. Essa lista deve atender as regras RN57 e RN166. | Funcionalidades:   IPC do tipo aditamento da denúncia |

## RN450

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Manipulação de informações de sigilo e segredo de justiça | As manipulações referentes a sigilo de documentos e segredo de justiça estão restritas a usuários do PJe cujo perfil esteja vinculado a um papel que herde o papel pje:manipulaSigiloso e que pertençam ao mesmo órgão julgador do processo ou ao mesmo órgão julgador colegiado do processo. O sistema deverá permitir que usuários cujo perfil encerre a funcionalidade de manipulação de acesso sigiloso possam: habilitar/desabilitar para visualização do objeto sigiloso outros usuários internos vinculados à hierarquia de sua localização habilitar/desabilitar para visualização do objeto sigiloso usuários externos usuários externos. apreciar solicitações de segredo de justiça ou de sigilo, deferindo ou indeferindo os pedidos O papel pje:manipulaSigiloso só deve ser atribuído a usuários internos. É importante salientar que a regra acima deve ser levada em consideração para versão 1.6.0 ou superior. Nas 1.4.6.x e anteriores, o magistrado tem a permissão de manipulação. Quando o magistrado ou a secretaria processual (ou outro servidor interno com a permissão adequada) determinar que o processo deva ser sigiloso, o sistema identificará as partes e os representantes destas partes no polo ativo do processo e deverá inclui-los na lista de visualizadores do processo. Pois este é o comportamento mais comum. O sistema deverá exibir um alerta ao usuário que estiver determinando o sigilo do processo, informando que as partes do polo ativo e seus representantes serão marcados automaticamente como visualizadores do processo. Desta forma, se o magistrado (ou a pessoa que realizar esta tarefa) entender que o processo deva ser realmente sigiloso para todas as partes, deverá acessar a aba Segredo ou sigilo e remover especificamente os visualizadores que não poderão visualizar o processo. | Funcionalidades:   Pesquisa de processos;   Opções de sigilo;   Agrupador de segredo de justiça;   Agrupador de sigilo de documentos |

## RN451

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Visualização de processos sigilosos | A visualização de processos sigilosos é permitida a usuários do PJe cujo perfil esteja vinculado a um papel que herde o papel pje:visualizaSigiloso ou pje:manipulaSigiloso. A permissão de visualização está limitada a processos vinculados ao órgão julgador ou ao órgão julgador colegaiado do usuário detentor da permissão. Inclusive nas situações das instalações da justiça de 2º grau em que há Órgãos Julgadores singulares associados aos Órgãos Julgadores Colegiados, os servidores vinculados aos Colegiados que possuírem as permissões visualização de processos sigilosos (pje:visualizaSigiloso ou pje:manipulaSigiloso), poderão visualizar processos sigilosos associados a esses Órgãos Julgadores singulares. Outros possíveis visualizadores do processo ou do documento sigiloso são as pessoas diretamente relacionadas como visualizadoras do processo ou do documento. Em cada processo há uma lista de visualizadores que pode ser alterada de acordo com a regra RN450. - Essa lista é alimentada, no protocolo do processo com o usuário manifestante. As partes do polo ativo devem sempre ser incluídas na lista de visualizadores. - A pessoa identificada como "Fiscal da Lei" deve também ser incluída na lista de visualizadores. - A inclusão das partes do polo ativo e Fiscal da Lei devem ser incluídas na lista de visualizadores tanto no protocolo quanto na retificação de processos. - Nas intimações (ou expedientes), a lista também é atualizada para incluir os intimados que terão acesso ao processo sigiloso a partir daí. As pessoas dessa lista terão acesso ao processo ao qual a lista está vinculada. Por fim, servidores que estiverem responsáveis por uma tarefa em aberto para o processo sigiloso, também poderão ter acesso ao seu conteúdo, no fluxo do CNJ são exemplos as tarefas: “Votar Antecipadamente – não Relator” e “Remessa de Processos para não Relatores”. A visualização dos agrupadores de sigilo e segredo de justiça é determinada pela associação ao papel pje:manipulaSigiloso. O papel só deve ser atribuído a usuários internos. É importante salientar que a regra acima, com exceção da lista de visualizadores, deve ser levada em consideração para versão 1.6.0 ou superior. Nas 1.4.6.x e anteriores, o magistrado tem a permissão de visualização. | Funcionalidades:   Pesquisa de processos;   Opções de sigilo;   Agrupador de segredo de justiça;   Agrupador de sigilo de documentos |

## RN452

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Consulta de processos de terceiros | Conforme resolução 121 o PJe permite que advogados, procuradores e membros do Ministério Público cadastrados, mas não vinculados a processo previamente identificado, acessem automaticamente todos os atos e documentos processuais armazenados em meio eletrônico, desde que demonstrado interesse, para fins, apenas, de registro, salvo nos casos de processos em sigilo ou segredo de justiça. | Funcionalidades:   Consulta de processos de terceiros;   Pesquisa de processos |

## RN453

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de informação processual complementar (IPC) do tipo aditamento da queixa | IPCs do tipo aditamento da queixa devem obedecer as especificações descritas nas seguintes regras complementares: RN449; Qualquer tipo de IPC possui uma relação com pessoa e processo judicial; no caso de IPC do tipo aditamento da queixa, essa relação é definida pela regra RN141. Alguns tipos de IPC possuem a necessidade de associação do(s) delito(s) cometido(s) pelo réu(s); no caso da IPC do tipo aditamento da queixa, essa primordialidade é definida pela regra RN440. | Funcionalidades:   IPC do tipo aditamento da queixa |

## RN454

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam IPC do tipo aditamento da queixa | Os dados que caracterizam uma IPC do tipo aditamento da queixa são: - Uma lista de réus no processo em questão formada conforme a regra RN72. - Essa lista deve atender as regras RN249 e RN408 e RI24. - A data (dia, mês e ano) do fato que ocorreu o aditamento da queixa. - É obrigatório informar a data do aditamento da queixa. - A data do aditamento da queixa deve obedecer a regra: RI3. - Uma lista de movimentações processuais formada conforme a regra RN429. - Essa lista deve atender as regras RN57 e RN166. - Uma lista de documentos formada conforme a regra RN430. - Essa lista deve atender as regras RN57 e RN166. | Funcionalidades:   IPC do tipo aditamento da queixa |

## RN455

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Sigilo de documentos | Deve ser permitida a solicitação de sigilo para um ou mais documentos ou arquivos do processo, através de indicação em campo próprio. Em toda e qualquer petição poderá ser requerido sigilo para esta ou para documento ou arquivo a ela vinculado. Requerido o sigilo de documento ou arquivo, este permanecerá sigiloso até que o magistrado da causa decida em sentido contrário, de ofício ou a requerimento da parte contrária. Nos casos em que o rito processual autorize a apresentação de resposta em audiência, faculta-se a sua juntada antecipada aos autos eletrônicos, juntamente com os documentos, hipótese em que permanecerão ocultos para a parte contrária, a critério do advogado peticionante, conforme regra RN299, até a audiência. | Funcionalidades:   Sigilo de documentos |

## RN456

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de informação processual complementar (IPC) do tipo atribuição de autoria dos fatos | IPCs do tipo atribuição de autoria dos fatos devem obedecer as especificações descritas nas seguintes regras complementares: RN457; Qualquer tipo de IPC possui uma relação com pessoa e processo judicial; no caso de IPC do tipo atribuição de autoria dos fatos, essa relação é definida pela regra RN141. Alguns tipos de IPC possuem a necessidade de associação do(s) delito(s) cometido(s) pelo réu(s); no caso da IPC do tipo atribuição de autoria dos fatos, essa primordialidade é definida pela regra RN440. | Funcionalidades:   IPC do tipo atribuição de autoria dos fatos |

## RN457

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam IPC do tipo atribuição de autoria dos fatos | Os dados que caracterizam uma IPC do tipo atribuição de autoria dos fatos são: - Uma lista de réus no processo em questão formada conforme a regra RN72. - Essa lista deve atender as regras RN249 e RN408 e RI24. - A data da atribuição de autoria dos fatos (dia, mês e ano) do fato que ocorreu o atribuição de autoria dos fatos. - É obrigatório informar a data do atribuição de autoria dos fatos. - A data do atribuição de autoria dos fatos deve obedecer a regra: RI3. - A data de publicação (dia, mês e ano) do fato que ocorreu a atribuição de autoria dos fatos. - É obrigatório informar a data de publicação da atribuição de autoria dos fatos. - A data de publicação da atribuição de autoria dos fatos deve obedecer as regras: RN100 e RI3. - Uma lista de julgadores formada conforme a regra RN458. - Essa lista deve atender as regras RN57 e RN166. - Uma lista de movimentações processuais formada conforme a regra RN429. - Essa lista deve atender as regras RN57 e RN166. - Uma lista de documentos formada conforme a regra RN430. - Essa lista deve atender as regras RN57 e RN166. | Funcionalidades:   IPC do tipo atribuição de autoria dos fatos |

## RN458

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista de julgador no cadastro de alguns tipos de IPC | Essa lista com o julgador é composto por informações proveniente do cadastro de magistrados; o sistema deverá recuperar o(s) registro(s) ativo(s) no sistema. Os itens dessa lista contém a(s) seguinte(s) característica(s): Nome completo do magistrado. | Funcionalidades:   IPC do tipo atribuição de autoria dos fatos |

## RN459

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de informação processual complementar (IPC) do tipo desclassificação | IPCs do tipo desclassificação devem obedecer as especificações descritas nas seguintes regras complementares: RN460; Qualquer tipo de IPC possui uma relação com pessoa e processo judicial; no caso de IPC do tipo desclassificação, essa relação é definida pela regra RN141. | Funcionalidades:   IPC do tipo desclassificação |

## RN460

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam IPC do tipo desclassificação | Os dados que caracterizam uma IPC do tipo desclassificação são: - Uma lista de réus no processo em questão formada conforme a regra RN72. - Essa lista deve atender as regras RN249 e RN408 e RI24. - A data (dia, mês e ano) do fato que ocorreu o desclassificação. - É obrigatório informar a data da desclassificação. - A data da desclassificação deve obedecer a regra: RI3. - A data de publicação (dia, mês e ano) do fato que ocorreu a desclassificação. - É obrigatório informar a data de publicação da desclassificação. - A data de publicação da desclassificação deve obedecer as regras: RN100 e RI3. - O campo para inclusão de texto, e que permita adicionar observações à IPC. - Não é obrigatório o preenchimento do campo observações. - Uma lista de movimentações processuais formada conforme a regra RN429. - Essa lista deve atender as regras RN57 e RN166. - Uma lista de documentos formada conforme a regra RN430. - Essa lista deve atender as regras RN57 e RN166. | Funcionalidades:   IPC do tipo desclassificação |

## RN461

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Acesso ao PJe Push sem cadastro | O usuário poderá acessar o PJe Push sem precisar ter cadastro na base de usuários do PJe. O PJe fornecerá uma página para o usuário fornecer seu CPF, e-mail e código CAPTCHA gerado para acompanhar o processo desejado. |  |

## RN462

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de informação processual complementar (IPC) do tipo oferecimento da denúncia | IPCs do tipo oferecimento da denúncia devem obedecer as especificações descritas nas seguintes regras complementares: RN463; Qualquer tipo de IPC possui uma relação com pessoa e processo judicial; no caso de IPC do tipo oferecimento da denúncia, essa relação é definida pela regra RN141. Alguns tipos de IPC possuem a necessidade de associação do(s) delito(s) cometido(s) pelo réu(s); no caso da IPC do tipo atribuição de autoria dos fatos, essa primordialidade é definida pela regra RN440. | Funcionalidades:   IPC do tipo oferecimento da denúncia |

## RN463

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam IPC do tipo oferecimento da denúncia | Os dados que caracterizam uma IPC do tipo oferecimento da denúncia são: - Uma lista de réus no processo em questão formada conforme a regra RN72. - Essa lista deve atender as regras RN249 e RN408 e RI24. - A data (dia, mês e ano) do fato que ocorreu o oferecimento da denúncia. - É obrigatório informar a data do oferecimento da denúncia. - A data do oferecimento da denúncia deve obedecer a regra: RI3. - O campo para inclusão de texto, e que permita adicionar observações à IPC. - Não é obrigatório o preenchimento do campo observações. - Uma lista de movimentações processuais formada conforme a regra RN429. - Essa lista deve atender as regras RN57 e RN166. - Uma lista de documentos formada conforme a regra RN430. - Essa lista deve atender as regras RN57 e RN166. | Funcionalidades:   IPC do tipo oferecimento da denúncia |

## RN464

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Associação com processo sigiloso | A utilização de processo sigiloso como referência na associação de processos deve ser permitida. Os dados do processo sigiloso só devem estar disponíveis quando atendida a regra RN451, com exceção do número do processo, jurisdição e órgão julgador, que estão disponíveis independente da restrição mencionada. | Funcionalidades:   Cadastro de processo incidente;   Associação de processos |

## RN465

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Dados do processo incidental originários do processo referência | Ao utilizar um processo da instalação do PJe como referência para o cadastro do processo incidental, os seguintes dados devem ser automaticamente atribuídos ao novo processo: - Jurisdição - não passível de alteração, conforme regra RN374 - Órgão julgador - não passível de alteração, conforme regra RN374 - Valor da causa - passível de alteração | Funcionalidades:   Cadastro de processo incidente |

## RN466

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Utilização de processo sigiloso como referência no processo incidental | A utilização de processo sigiloso como referência no cadastro de processo incidental segue a regra RN464. Para o caso de usuários que não têm acesso ao processo, conforme regra RN451, a vinculação de valor da causa no processo incidental prevista na regra RN465 não deve ser realizada. | Funcionalidades:   Cadastro de processo incidente |

## RN467

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de informação processual complementar (IPC) do tipo queixa | IPCs do tipo queixa devem obedecer as especificações descritas nas seguintes regras complementares: RN468; Qualquer tipo de IPC possui uma relação com pessoa e processo judicial; no caso de IPC do tipo queixa, essa relação é definida pela regra RN141. Alguns tipos de IPC possuem a necessidade de associação do(s) delito(s) cometido(s) pelo réu(s); no caso da IPC do tipo atribuição de autoria dos fatos, essa primordialidade é definida pela regra RN440. | Funcionalidades:   IPC do tipo queixa |

## RN468

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam IPC do tipo queixa | Os dados que caracterizam uma IPC do tipo queixa são: - Uma lista de réus no processo em questão formada conforme a regra RN72. - Essa lista deve atender as regras RN249 e RN408 e RI24. - A data (dia, mês e ano) do fato que ocorreu o queixa. - É obrigatório informar a data do queixa. - A data do queixa deve obedecer a regra: RI3. - O campo para inclusão de texto, e que permita adicionar observações à IPC. - Não é obrigatório o preenchimento do campo observações. - Uma lista de movimentações processuais formada conforme a regra RN429. - Essa lista deve atender as regras RN57 e RN166. - Uma lista de documentos formada conforme a regra RN430. - Essa lista deve atender as regras RN57 e RN166. | Funcionalidades:   IPC do tipo queixa |

## RN469

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pesquisa de processos | A pesquisa de processos levará em consideração para retornar os resultados os parâmetros informados para consulta, respeitando a restrição para para acesso a processos sigilosos RN470. Para usuários advogados, caso não sejam parte dos processos retornados, o detalhamento só será permitido desde que seja registrado o pedido de acesso, conforme regra da consulta de processos de terceiros RN452. Da mesma forma, para usuários procuradores, caso não sejam representantes de partes dos processos retornados, o detalhamento só será permitido mediante registro do pedido. O acesso como Jus Postulandi aos processos deve obedecer a RN534. | Funcionalidades:   Pesquisa de processos |

## RN470

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Retorno de processos sigilosos na pesquisa de processos | Os processos sigilosos, na pesquisa de processos, deve ser respeitada a regra RN451. Se o usuário for procurador, serão retornados processos desde que ele seja representante de uma das partes | Funcionalidades:   Pesquisa de processos |

## RN471

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Acesso a funcionalidade de emissão de certidões positivas ou negativas | Para acessar a funcionalidade que permite emitir certidões negativadas ou positivadas, o papel "Administrador", cujo identificador é "admin" será considerado o usuário default para acesso. Apenas esse papel poderá conceder permissões de acesso a outros usuários internos. Além disso, também cabe ao administrador a devida configuração sobre a disponibilidade da funcionalidade para acesso aos usuários externos. | Funcionalidades:   Certidão Interna |

## RN472

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Variáveis obrigatórias para criação do modelo de certidão positiva | O modelo de certidão utilizado para certidões positivas deverá ter, obrigatoriamente, as seguintes variáveis:   • `#{processoTrfHome.instance.orgaoJulgador}`   • `#{processoTrfHome.instance.classeJudicial}`   • `#{numeroProcesso}`   • `#{processoTrfHome.instance.nomeReuProcesso}`   • TODO DESING Nacionalidade   • `#{processoTrfHome.instance.nomeCpfReuList}` ou cnpj   • TODO DESING Nome da mãe   • TODO DESING Orgão Julgador Colegiado   • `#{dataAtual}`   • `#{currentTime}`      As variáveis citadas poderão ser ordenadas a critério do criador do modelo, dentro da funcionalidade modelo de documento. Abaixo apresentados um exemplo de criação do modelo:      Mostrar o nome/sigla do órgão de instalação do PJe juntamente com o OJ, seguidas da classe e número do processo. Exemplos:   SJAL 3º Vara Federal: PROCEDIMENTO ORDINÁRIO,0800333-76.2012.4.05.8000; TRF5 1º Turma: CAUTELAR INOMINADA, 0800121-96.2012.4.05.0000;      Devendo ficar conforme exemplo abaixo:   CERTIFICA de natureza Cível contra PESSOA PESQUISADA, NACIONALIDADE, 999.999.999-99, filho(a) NOME DA MÃE com os seguintes dados processuais: NOME DO ÓRGÃO DE INSTALAÇÃO DO PJE NOME DO ÓRGÃO JULGADOR ou ÓRGÃO JULGADOR COLEGIADO: NOME DA CLASSE DO PROCESSO, NÚMERO DO PROCESSO;. Dada e passada nesta, aos 25 (vinte e cinco) dias do mês de junho de 2012 (dois mil e doze) às 14:33:13.      NOTA: Na situação em que não for encontrado o parâmetro filiação, o descritivo filho(a) deverá ser suprimido. | Funcionalidades:   Certidão Interna |

## RN473

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Configuração do tipo de certidão para emitir certidões positivas e negativas | No cadastro do tipo de certidão, o modelo de documento e as classes judiciais (com seus respectivos polos) serão configuradas para atender as exigências do usuário. Além disso, será possível indicar se a certidão que está sendo configurada, quando realizada pelo usuário externo e negativada, deverá ou não ser emitida via internet. Para as classes judiciais, o sistema deve contemplar às classes inativas e ativas. Se o agrupamento de classe (classe raiz) for indicado, todas as classes inferiores receberão a mesma configuração. Caso a classe inferior (classe folha) seja alterada, tal alteração ficará restrita a esta classe. | Funcionalidades: Certidão Interna |

## RN474

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Cadastro de conexão no processo incidental | A vinculação de conexão por dependência no cadastro de processo incidental só acontece para processos referências que estejam na instalação do PJe. Para os casos de processos físicos ou que não estejam na instalação do PJe, a descrição do processo referência deve ser armazenada de forma a permitir a sua recuperação futura. | Funcionalidades: Cadastro de processo incidental |

## RN475

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Certidões judiciais negativada | A certidão negativa representa que a pessoa pesquisa não deve estar no polo passivo da ação originária. Essa certidão pode ser emitida por um usuário externo.   A pesquisa se dará de duas formas distintas, dependendo do tipo de classe. Dessa forma:   Para as classes cíveis: a pessoa pesquisada não figura no polo passivo;   Para as classes penais:   1\. Quando houver processos nas classes “Termo Circunstanciado” e “Inquérito”, ou processo em tramitação e não houver sentença condenatória transitada e julgada.   2\. Se houve condenação, mas foi dado o benefício de sursis (suspensão da execução da pena), ou foi extinta a pena, ou a mesma foi cumprida.      Caso seja encontrado um homônimo, a certidão deverá ser negativada, e emitida com a mensagem MN203 dentro do documento gerado. Tal ressalva é valida para certidões judiciais negativas emitidas internamente pelo PJE.   O formato da certidão negativada deverá ser configurado pelo usuário, por meio da funcionalidade “modelo de documentos”, além de possuirem um código hash em cada certidão gerada, conforme regra RN477. | Funcionalidades:   Certidão Interna |

## RN476

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Certidões judiciais positivadas | Para que seja gerada uma certidão positivada é necessário que a pesquisa seja realizada por um usuário interno devidamente cadastrado, autorizado e ativo no sistema PJe, ou seja, apenas os usuários internos poderão emitir esse tipo de certidão, vedada a emissão para usuários externos.   Para que o tipo de certidão judicial seja positivada:   • Para classes cíveis: A pessoa pesquisada deve estar no polo passivo da relação processual originária.   • Para classes penais: A parte pesquisada possui sentença condenatória com trânsito em julgado em algum processo. A movimentação "Trânsito em julgado" é lançada no processo, não havendo vinculação com as partes. Ocorre que toda a área criminal está sendo tratada através de uma estrutura denominada IPC (Informação Processual Complementar). Através das IPCs são lançadas informações individualizadas por partes (a sentença condenatória, com a tipificação penal e o trânsito em julgado, por exemplo). A partir de tal estrutura é que devemos construir a emissão de certidões.   Para o formato da certidão judicial positivada, ver regra RN472. | Funcionalidades:   Certidão Interna |

## RN477

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Código hash para certidões positivas ou negativas | Cada certidão judicial (positiva ou negativa) deve possuir um código hash, gerado de forma aleatória pelo sistema. O código de validação da certidão (hash) será gerado ao carregar o documento da certidão. Esse código será apresentado dentro do modelo de certidão. Além do código, o documento também deve apresentar o endereço eletrônico para que o detentor da certidão possa acessar a URL mencionada e validar o documento na WEB, usando o código hash.   O código hash valida apenas o documento emitido. No entanto, as certidões judiciais positivadas ou negativadas são emitidas e válidas, até o momento de emissão, ou seja, é garantido que até aquele dia e horário a pessoa pesquisada estava nestas condições. | Funcionalidades:   Certidão Interna |

## RN478

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Acesso à base de dados no âmbito civil e/ou penal | A pesquisa no PJE para classes cíveis e penais, e a pesquisa deve ser realizada em:   \- Todos os processos cíveis em tramitação, do 1° e 2° graus, e a parte pesquisada esteja no polo passivo da ação originária.   \- Todos os processos penais em tramitação e baixados, no 1° e 2° graus, e a parte pesquisada esteja no polo passivo da ação originária.   Para o controle e efeito das certidões judiciais negativas e positivas devem ser verificados os processos que se encontram em tramitação. Além disso, deve ser observada a situação de reativação. Ou seja, a existência de processos baixados identifica também um processo em tramitação. Exemplo para o desmembramento: o processo precisar ter a “baixa” no sistema antes de ser arquivado ou remetido a outro Tribunal, e só volta a tramitar após o movimento de reativação. | Funcionalidades:   Certidão Interna |

## RN479

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Restrição para redistribuição por prevenção | Após identificar impedimento na Redistribuição, verifique se há pendência de documentos ainda não assinados cujo processo está sobrestado em tarefa de minuta e assinatura. Utilize aba "Documentos do processo" na janela da tarefa "Redistribuir" ao lado da aba Saída para inativar documentos pendentes. Evite utilizar Ver detalhes do processo que mostrará apenas documentos já assinados. | Funcionalidades:   Redistribuição |

## RN480

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam a lista de tipificações associadas | Os dados que caracterizam a lista de tipificações associadas:   \- Um campo denominado número de referência que define a sequência de inclusão dos registros.   \- Um campo denominado data do delito/ato infracional (dia, mês e ano) que mostra a data do delito ou ato infracional.   \- Um campo denominado quantidade de incidências que recupera a quantidade de incidências do delito/ato infracional.   \- Um campo denominado consumação que recupera se o crime associado foi classificado em: crime consumado ou crime tentado.   \- Um campo denominado combinações onde são recuperadas as combinações de delito e normas de extensão. Tal combinação é formada conforme a regra RN487.   \- Um campo denominado concurso de crimes onde são recuperados os agrupamentos de delitos. Tal agrupamento é formado conforme a regra RN488. | Tipificação do delito |

## RN481

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de informação processual complementar (IPC) do tipo recebimento da queixa | IPCs do tipo recebimento da queixa devem obedecer as especificações descritas nas seguintes regras complementares:   \- RN482;   \- Qualquer tipo de IPC possui uma relação com pessoa e processo judicial; no caso de IPC do tipo recebimento da queixa, essa relação é definida pela regra RN141. | Funcionalidades: IPC do tipo recebimento da queixa |

## RN482

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam IPC do tipo recebimento da queixa | Os dados que caracterizam uma IPC do tipo recebimento da queixa são:   \- Uma lista de réus no processo em questão formada conforme a regra RN72.   \- Essa lista deve atender as regras RN249 e RN408 e RI24.   \- A data (dia, mês e ano) do fato que ocorreu o recebimento da queixa. É obrigatório informar a data do recebimento da queixa. A data do recebimento da queixa deve obedecer a regra: RI3.   \- Uma lista de movimentações processuais formada conforme a regra RN429. Essa lista deve atender as regras RN57 e RN166.   \- Uma lista de documentos formada conforme a regra RN430. Essa lista deve atender as regras RN57 e RN166. | Funcionalidades: IPC do tipo recebimento da queixa |

## RN483

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Visualização de processos não protocolados | Os processos não protocolados serão listados seguindo os seguintes critérios:   \- Processos cujos cadastros foram iniciados pelo próprio usuário   \- Processos cujos cadastros foram iniciados por um usuário assistente de procurador cuja localização (procuradoria) seja igual a do usuário logado   \- Processos cujos cadastros foram iniciados por um usuário assistente de advogado cuja localização (nome do advogado ou escritório) seja igual a do usuário logado   \- Processos cujos cadastros foram iniciados por um usuário procurador cuja localização (procuradoria) seja igual a do usuário logado   \- Processos cujos cadastros foram iniciados por servidores da mesma localização | Funcionalidades: Consulta de processo não protocolado |

## RN484

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam a opção de definir concurso de crime | Os dados que caracterizam a lista definir concurso de crime:   \- Uma lista dos possíveis tipos de agrupamento dos delitos associados, essa lista é formada conforme a regra RD63.   \- Uma lista dos delitos associados e disponíveis para serem agrupados, essa lista é composta pelos seguintes campos:   \-- Uma opção que permita selecionar os possíveis delitos que serão agrupados.   \-- Um campo denominado data do delito/ato infracional (dia, mês e ano) que mostra a data do delito/ato infracional.   \-- Um campo denominado delito/ato infracional que recupera Tipo/número da norma/nome do código.   \-- Um campo denominado quantidade de incidências que recupera a quantidade de incidências do delito/ato infracional.   \- Uma lista de delitos agrupados e essa lista é composta pelos seguintes campos:   \-- Um campo denominado concurso de crimes que recupera os artigos que já foram agrupados.   \-- Um campo denominado tipo de agrupamento que recupera o tipo de agrupamento dos delitos | Funcionalidades: tipificação do delito. |

## RN485

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de informação processual complementar (IPC) do tipo recebimento da denúncia | IPCs do tipo recebimento da denúncia devem obedecer as especificações descritas nas seguintes regras complementares:   \- RN486;   \- Qualquer tipo de IPC possui uma relação com pessoa e processo judicial; no caso de IPC do tipo recebimento da denúncia, essa relação é definida pela regra RN141.   \- Alguns tipos de IPC possuem a necessidade de associação do(s) delito(s) cometido(s) pelo réu(s); no caso da IPC do tipo recebimento da denúncia, essa primordialidade é definida pela regra RN440. | Funcionalidades: IPC do tipo recebimento da denúncia |

## RN486

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam IPC do tipo recebimento da denúncia | Os dados que caracterizam uma IPC do tipo recebimento da denúncia são:   \- Uma lista de réus no processo em questão formada conforme a regra RN72.   \- Essa lista deve atender as regras RN249 e RN408 e RI24.   \- A data (dia, mês e ano) do fato que ocorreu o recebimento da denúncia. É obrigatório informar a data do recebimento da denúncia. A data do recebimento da denúncia deve obedecer a regra: RI3.   \- Uma lista de movimentações processuais formada conforme a regra RN429. Essa lista deve atender as regras RN57 e RN166.   \- Uma lista de documentos formada conforme a regra RN430. Essa lista deve atender as regras RN57 e RN166. | Funcionalidades: IPC do tipo recebimento da denúncia |

## RN487

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Característica da combinação entre delito e norma de extensão | O cadastro da tipificação permite a combinação entre "delito" e "normas de extensão". Essas combinações são previstas quando existe a necessidade de tipificar um delito e combiná-lo com uma ou mais normas de extensão. Exemplo: Quando há violação de uma norma penal através de omissão. Uma mãe, que tem por lei o dever de cuidado e proteção com seu filho recém nascido, deixa de amamentá-lo e o mesmo vem a falecer. A conduta da mãe se subsumiu ao artigo 121 do CP, combinado com a norma de extensão do artigo 13, §2º, “a” do CP. | Funcionalidades: tipificação do delito. |

## RN488

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Característica do agrupamento de delitos | O cadastro da tipificação permite o agrupamento dos delitos em crime de concurso formal e crimes continuado. O agrupamento de delitos em concurso formal ocorre quando há necessidade de agrupar dois ou mais crimes idênticos. Exemplo: Fulano atropela três pessoas e elas morrem. Neste exemplo, nós temos três resultados idênticos diante de uma única conduta. Portanto, as exigências para que configure o agrupamento de concurso formal são única conduta e dois ou mais resultados que sejam fatos típicos. O agrupamento de delito em crime continuado ocorre quando o autor comete dois ou mais crimes da mesma espécie, nas mesmas condições de tempo, ação e lugar. Exemplo: a empregada que furta toda semana o mesmo valor da carteira da patroa. | Funcionalidades: tipificação do delito. |

## RN489

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de informação processual complementar (IPC) do tipo atribuição de autoria de fatos | IPCs do tipo atribuição de autoria de fatos devem obedecer às especificações descritas nas seguintes regras complementares:   \- RN490;   \- Qualquer tipo de IPC possui uma relação com pessoa e processo judicial; no caso de IPC do tipo atribuição de autoria de fatos, essa relação é definida pela regra RN141.   \- Alguns tipos de IPC possuem a necessidade de associação do(s) delito(s) cometido(s) pelo réu(s); no caso da IPC do tipo atribuição de autoria de fatos, essa primordialidade é definida pela regra RN440. | Funcionalidades: IPC do tipo atribuição de autoria de fatos |

## RN490

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam IPC do tipo atribuição de autoria de fatos | Os dados que caracterizam uma IPC do tipo atribuição de autoria de fatos são:   \- Uma lista de réus no processo em questão formada conforme a regra RN72.   \- Essa lista deve atender às regras RN249 e RN408 e RI24.   \- A data (dia, mês e ano) do fato que ocorreu a atribuição de autoria de fatos. É obrigatório informar a data da atribuição de autoria de fatos. A data da atribuição de autoria de fatos deve obedecer a regra: RI3.   \- Uma lista de movimentações processuais formada conforme a regra RN429. Essa lista deve atender às regras RN57 e RN166.   \- Uma lista de documentos formada conforme a regra RN430. Essa lista deve atender às regras RN57 e RN166. | Funcionalidades: IPC do tipo atribuição de autoria de fatos |

## RN491

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Inversão de polos | A inversão de polos em um processo judicial/manifestação processual consiste no seguinte procedimento: as partes do polo ativo deixarão de fazer parte do polo ativo e serão cadastradas no polo passivo e a mesma ação de inversão deve acontecer para as partes do polo passivo. | Funcionalidades:   \- Preparar remessa de manifestação processual para envio à instância superior;   \- Preparar remessa para o 2º grau.   Casos de testes: PJe-719, PJe-848 |

## RN492

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Assuntos para o protocolo de processos | Os assuntos disponibilizados para seleção no protocolo de processos são os assuntos vinculados à classe selecionada, vinculação essa realizada através do cadastro de competências, na configuração de Classe x Assunto. Sendo assim, só estará disponível para seleção um assunto que tenha sido vinculado a alguma competência que tenha sido associada a algum órgão julgador da instalação, e o assunto deverá ter sido vinculado juntamente com a classe selecionada nos "Dados iniciais" do processo. | Funcionalidades:   \- Protocolar processo:   \-- Protocolo de processo;   \-- Protocolo de processo com jus postulandi;   \-- Protocolo de processo incidental;   \-- Processos cadastrados e não protocolados |

## RN493

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Cadastro do polo ativo em processos de jus postulandi | Para usuários com perfil de jus postulandi, o cadastro de partes no polo ativo já virá preenchido com o nome do usuário como parte principal, sem possibilidade de edição e adição de representantes. | Funcionalidades:   \- Protocolo de processo com jus postulandi |

## RN494

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Dados que compõem uma remessa de manifestação processual para envio ao 2º grau e restrições negociais | Dados obrigatórios tanto na remessa quanto na baixa:   \- Jurisdição, classe judicial, motivo da remessa, assunto, parte no polo ativo, parte do polo passivo (quando a classe exigir polo passivo) e documentos.   Caso não tenha a jurisdição, a mensagem MN207 deve ser exibida.   Caso não tenha a classe judicial, a mensagem MN181 deve ser exibida.   Caso a classe judicial escolhida viole a regra RN545, a mensagem MN224 deve ser exibida.   Caso não tenha o motivo da remessa, a mensagem MN208 deve ser exibida.   Caso nenhum assunto esteja associado à remessa/baixa, a mensagem MN177 deve ser exibida.   Caso não exista parte no polo ativo, a mensagem MN173 deve ser exibida.   Caso não exista parte no polo passivo e a classe judicial da remessa/baixa exigir polo passivo, a mensagem MN174 deve ser exibida.   Os documentos que compõem a remessa/baixa devem atender a regra RN495 e, caso ocorra violação dessa regra, a mensagem MN212 deve ser exibida.   O processo judicial (o qual dá origem a remessa/baixa em questão) não pode ter prazos em aberto, ou seja, todos os expedientes devem estar fechados e, além de fechados, é importante garantir que os documentos relacionados a esses expedientes estejam assinados. Caso o processo tenha algum expediente que viola a condição citada, a mensagem MN206 deve ser exibida.   Caso alguma restrição descrita anteriormente seja violada, a remessa/baixa em questão não será gravada. No caso da remessa, haverá uma janela para edição dos dados da remessa conforme especifica a regra RI4; no caso da baixa, somente o 'motivo da remessa' será editado conforme especifica a regra RI104. | Funcionalidades:   \- Preparar remessa para o 2º grau |

## RN495

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista de documentos de uma remessa de manifestação processual para envio ao 2º grau | A lista de documentos tanto da remessa quanto da baixa é composta por:   \- Todos os documentos assinados produzidos tanto por usuários "internos" quanto por usuários "externos", exceto as respectivas certidões desses documentos.   Caso algum documento não esteja assinado, a remessa/baixa poderá ser enviada mediante confirmação conforme orienta a mensagem MN212, porém os documentos não assinados "não" serão remetidos para a instância superior nem baixados para a instância de origem.   Particularidades em relação à lista de documentos quando nessa lista há documentos sigilosos:   \- No caso de documento sigiloso (já devidamente assinado) cujo 'pedido de sigilo' tenha sido apreciado: o documento nessa condição fará parte também da lista de documentos. E, ao remeter o processo para instância superior, o processo distribuído na instância superior não deverá ser marcado com o indicativo que tenha documento(s) com pedido de sigilo para apreciação.   \- No caso de documento sigiloso (já devidamente assinado) cujo 'pedido de sigilo' não tenha sido apreciado: a remessa/baixa poderá ser enviada mediante confirmação conforme orienta a mensagem MN225, porém os documentos sigilosos não apreciados "não" serão remetidos para a instância superior "nem" baixados para a instância de origem.   Com relação ao "tipo do documento" dos documentos, deve-se observar o pré-requisito correspondente definido aqui. | Funcionalidades:   \- Preparar remessa para o 2º grau   Mensagens: MN212, MN225 |

## RN496

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Movimento de envio de remessa para o 2º grau | Para toda remessa de manifestação processual enviada com sucesso para o 2º grau deve ser cadastrado o movimento "123-Remessa" associado ao processo judicial que deu origem à remessa em questão; o cadastro desse movimento é feito por meio de uma configuração em um nó de tarefa responsável por preparar remessa de manifestação processual para envio ao 2º grau. Quando a remessa for entregue ao destinatário (neste caso, 2º Grau), o sistema lançará automaticamente o movimento "132-Recebidos os autos". | Funcionalidades:   \- Preparar remessa para o 2º grau |

## RN497

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Identificação da parte | A identificação do contribuinte é o principal meio de se referenciar uma parte de nacionalidade brasileira em um processo cadastrado no PJe. A identificação consiste no número do CPF para pessoas físicas ou no número do CNPJ para pessoas jurídicas. Outros documentos podem ser utilizados na identificação da parte brasileira alternativamente à identificação do contribuinte mas, para partes no polo ativo em processos cadastrados por advogados, é exigida uma identificação. Para usuário que herdar o papel de identificador "servidor", não será exigido o documento. Para partes estrangeiras, a identificação será realizada pelo número do passaporte e pelo país de origem. | Funcionalidades:   \- Cadastro de partes no protocolo de processos |

## RN498

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperação de dados da Receita Federal | No cadastro de partes, o fornecimento da identificação do contribuinte faz com o que o sistema acesse a base de dados da Receita Federal e recupere algumas informações. Para CPF, são elas: Nome, Sexo, Nome da genitora, Data de nascimento, Endereço. Para CNPJ, são elas: Nome, Nome fantasia, Tipo de pessoa, Endereço. No cadastro do processo, a identificação do contribuinte é considerado um documento de identificação da parte. Para usuários advogados, com exceção do nome e nome fantasia, as informações recuperadas não são exibidas no cadastro. | Funcionalidades:   \- Cadastro de partes no protocolo de processos |

## RN499

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperação de documentos de identificação previamente cadastrados | No cadastro de partes, para partes com documentos de identificação previamente cadastrados, o sistema observará as seguintes restrições para recuperação: Se o usuário for usuário interno, todos os documentos de identificação vinculados àquela parte serão recuperados; Se os documentos de identificação vinculados à parte tiverem sido cadastrados pelo usuário logado, eles serão recuperados; Se o usuário logado for a parte, todos os documentos de identificação vinculados a ele serão recuperados | Funcionalidades:   \- Cadastro de partes no protocolo de processos |

## RN500

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Bloqueio de processos | A atuação de um usuário em um processo através da árvore de tarefas deve bloquear o processo de forma que outro usuário não possa realizar a mesma tarefa. Ao bloquear um processo no Painel do usuário por meio da execução de tarefa, as outras tarefas vinculadas a este processo não devem ser bloqueadas. O bloqueio é vinculado ao login do usuário. Se outro usuário tentar acessar o processo bloqueado, o usuário deverá notificá-lo e permitir que se realize o desbloqueio. Caso não seja solicitado explicitamente o desbloqueio, o bloqueio permanecerá ativo pelo tempo definido na instalação. | Funcionalidades:   \- Tarefas no painel do usuário |

## RN501

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Expediente por meio eletrônico | Os expedientes construídos na tarefa preparar comunicação do fluxo preparar ato de comunicação podem ser enviados pelos meios de comunicação restringidos pela regra de domínio RD95. O envio de expedientes por meio eletrônico (E - Enviar via sistema) só deve estar disponível para partes que estejam devidamente cadastradas no PJe com seu certificado definido (ou seja, a parte confirmou seu cadastramento através de login no sistema) ou partes que possuam representante devidamente cadastrado no PJe. Quando a opção de envio pessoal for marcada, o sistema só poderá enviar por meio eletrônico se a parte estiver devidamente cadastrada no PJe com seu certificado definido e o sistema não deverá considerar a situação do cadastro dos representantes da parte. Quando é enviado um expediente a uma entidade que está vinculada como parte de um processo e esta for representada por uma procuradoria ou defensoria, o sistema deve utilizar a procuradoria e/ou a defensoria que representa esta parte no processo e vinculá-la como responsável pelo expediente que estiver sendo enviado à parte de forma não pessoal; No frame do PAC (preparar ato de comunicação), se for selecionada uma entidade que não é parte do processo e esta entidade for representada por uma procuradoria apenas, o sistema já deverá identificar esta procuradoria como destinatária do expediente. Se a entidade for representada por mais de uma procuradoria, o sistema deverá permitir que o usuário selecione qual das procuradorias é a destinatária do expediente e esta informação deve ser obrigatória, ou seja, o usuário tem que selecionar uma das opções de procuradoria existente para poder seguir com o envio do expediente; No envio automático de expedientes por ELs de sistema (caso em que não há interface de usuário), quando o expediente for enviado a uma entidade que não está vinculada como parte de um processo e esta entidade for representada apenas por uma procuradoria no cadastro de procuradorias, esta procuradoria deve ser cadastrada como responsável da parte pelo expediente que estiver sendo enviado à parte de forma não pessoal. Quando o expediente for enviado a uma entidade que não está vinculada como parte de um processo e esta entidade for representada por mais de uma procuradoria no cadastro de procuradorias, o sistema deverá iniciar um novo fluxo identificado pela variável pje:fluxo:identificarResponsavelExpediente, para que o usuário servidor possa fazer a vinculação manual do responsável pelo expediente. | Funcionalidades:   \- Tarefa preparar comunicação   Orientações de fluxos:   \- Fluxo de preparar ato de comunicação |

## RN502

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pedidos de liminar ou antecipação de tutela | Os processos com pedido de antecipação de tutela são aqueles que têm marcado o campo pertinente nas suas características. Quando assim marcados, os processos devem aparecer no agrupador de antecipação de tutela e liminar no painel do magistrado. A visualização do agrupador é permitida a usuários do PJe cujo perfil esteja vinculado a um papel que herde o papel pje:painel:liminarTutela:agrupador:manipula. O agrupador deverá exibir os processos com essa característica vinculados ao órgão julgador do usuário detentor da permissão cujo pedido ainda não tenha sido apreciado, respeitando as restrições para processos sigilosos. O papel determinará a permissão para atualização da apreciação, realizada através de botão no agrupador, que será disponibilizado quando algum processo da lista for selecionado. Ao apreciar, o usuário retira a marcação de pedido de liminar/antecipação de tutela. A apreciação poderá ser realizada também pela retificação de autuação, sendo registrada, o que retirará o processo do agrupador. | Funcionalidades:   \- Agrupador de pedidos e liminar e antecipação de tutela |

## RN503

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Localização de processos em caixas | A localização de processos em tarefas/caixas deve seguir as restrições de visualização do processo que do usuário logado. A localização é facilitada por um campo de sugestão e é realizada pelo número do processo. Para o caso de processos localizados em mais de uma tarefa/caixa, o campo de sugestão retornará em sua lista de sugestões apenas uma ocorrência mas, após o usuário efetivar a pesquisa pelo número completo do processo, as tarefas em que eles aparecem devem ser listadas, seguindo o padrão de exibição como "trilha de pão", ou seja, o ponto do fluxo utilizado para a classe judicial. Por exemplo: se aquele processo está em uma caixa chamada "reps", vinculada a uma tarefa denominada "Preparar juntada", vinculada ao subprocesso "Digitalizar documentos", subprocesso esse que está vinculado ao fluxo principal "Fluxo comum do CNJ", a exibição da tarefa como resultado da pesquisa deve ser a seguinte:` Fluxo comum do CNJ: Digitalizar documentos > Preparar juntada / reps` | Funcionalidades:   \- Localizar caixa |

## RN504

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exclusão de documentos | A exclusão de documentos, quando o documento não estiver juntado, será física. Para o documento assinado e juntado, a exclusão será lógica. Para esse caso, quando há movimentações associadas de acordo com a regra RN390, elas devem também serem excluídas logicamente. Tanto os documentos quanto as movimentações excluídos logicamente devem ser exibidas de forma tachada na cor vermelha. Exemplo: 1936202 19/09/2014 18:31:19 - Juntada de ato ordinatório. A visibilidade de documentos, excluídos logicamente ou não excluídos, está definida de acordo com a regra RN558 e a visibilidade de movimentações, excluídas logicamente ou não excluídas está definida de acordo com a regra RN559. A petição inicial para processos distribuídos não é passível de exclusão. | Funcionalidades:   \- Documentos do processo   \- Tarefas que permitem exclusão de documentos, como, por exemplo, preparação de documentos e verificação de documentos no fluxo de digitalização |

## RN505

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Desbloqueio de processos | Ao ser bloqueado, um processo é visualizado por outros usuários da tarefa com essa notificação. A notificação continuará sinalizando o bloqueio pelo tempo limite definido na instalação, quando o processo aparecerá novamente como desbloqueado. O desbloqueio do processo também pode ocorrer quando outro usuário com acesso a tarefa solicita explicitamente que isso aconteça. | Funcionalidades:   \- Tarefas no painel do usuário |

## RN506

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Universo dos agrupadores de pesquisa | Nos agrupadores de pesquisa, o universo da pesquisa é o conteúdo da lista diretamente relacionada ao agrupador, visto que o objetivo é a redução do tamanho da lista pesquisada ou a localização de um objeto específico daquela lista. Por exemplo, o agrupador de pesquisa disponibilizado ao lado da árvore de tarefas refina a exibição da lista de processos na tarefa de acordo com o(s) parâmetro(s) informado. Os processos que estão em caixas vinculados à tarefa não fazem parte da lista a ser pesquisada. | Funcionalidades:   \- Tarefas no painel do usuário |

## RN507

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Visualização do nome de partes menores de idade | Definição da parte como menor de idade - A pessoa será definida como menor de idade se a diferença entre a data atual e a data de nascimento for inferior a 18 anos. - Se não houver registro da data de nascimento da pessoa ou a data de nascimento for inferior a 18 anos da data atual a pessoa será definida como maior de idade e não se aplicarão as regras aqui descritas. Cadastro de parte menor de idade No cadastro da parte menor de idade, o usuário cadastrador deve conseguir visualizar todo o seu nome, como se este fosse maior de idade. Na página de cadastro de pessoas físicas (Configuração > Pessoa > Física), deve ser possível visualizar o nome completo do menor de idade e não as iniciais de seu nome. Permissão de visualização de partes menores de idade A visualização de processos com partes menores de idade deverá seguir primeiramente as restrições de processos sigilosos descritas pela RN452 se este processo for sigiloso. Independentemente de as partes constarem ou não na lista de visualizadores do processo, a visualização da parte menor de idade só deverá ser permitida aos seguintes usuários: - usuários do PJe cujo perfil esteja vinculado a um papel que herde o papel pje:visualizaSigiloso (papel atribuído apenas a usuários internos), sendo que a permissão de visualização está limitada a processos vinculados ao órgão julgador ou órgão julgador colegiado do usuário detentor da permissão; - aos servidores que tiverem atribuídas tarefas pendentes daquele processo; - a própria parte e seu(s) representante(s); - no caso de a parte ser representada por uma procuradoria (ou defensoria), todos os seus procuradores (ou defensores) vinculados. Visualização de processos com partes menores de idade (mostrado na tela de detalhes do processo, internamente no processo, externamente na consulta pública) Para verificação da permissão de visualização da parte menor de idade deve-se seguir a regra apontada na RN451. Quando o usuário não tiver permissão para visualizar a parte menor de idade, o nome desta parte deve ser exibido apenas com as iniciais do nome. Assim, o nome de um menor de idade chamado por exemplo: "Joaquim José da Silva Xavier" seria exibido assim: "J. J. d. S. X." Pesquisa de processos com partes menores de idade Para verificação da permissão de visualização da parte menor de idade deve-se seguir a regra apontada na RN451. Na pesquisa de processos, caso o usuário tenha solicitado a pesquisa pelo "Nome da parte" ou pelo "CPF", o sistema só deverá retornar processos em que o usuário pesquisador tenha permissão de visualizar a parte escrita no campo "Nome da parte" (ou CPF) (ou seja, partes maiores de idade ou partes menores de idade e que o usuário tenha permissão de visualizar esta parte). Se o usuário pesquisador não tiver permissão de visualizar a parte o processo não deve ser retornado. No entanto, se o usuário pesquisador não inserir "Nome da parte" nem CPF ou inserir um "Nome da parte" ou CPF que seja visível para ele, o sistema deverá retornar o resultado da pesquisa pelo processo, mas na apresentação do resultado da pesquisa não poderá constar o nome da parte menor de idade que o usuário pesquisador não tenha permissão de visualização. Neste caso o nome da parte menor de idade deverá ser exibido apenas com as suas iniciais, como no exemplo anterior "J. J. d. S. X.". | Funcionalidades:   \- Detalhes do processo |

## RN508

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Disponibilização da aba "Características pessoais" | A aba "Características pessoais" no cadastro de parte do tipo pessoa física será disponibilizado para usuários cadastradores que tenham o papel "pje:caracteristicasPessoais". | Funcionalidades:   \- Cadastro de partes no processo |

## RN509

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperação de meios de contato previamente cadastrados | No cadastro de partes, para partes com meios de contato previamente cadastrados, o sistema observará as seguintes restrições para recuperação: Se o usuário for usuário interno, todos os meios de contato vinculados àquela parte serão recuperados; Se os meios de contato vinculados à parte tiverem sido cadastrados pelo usuário logado, eles serão recuperados; Se o usuário logado for a parte, todos os meios de contato vinculados a ele serão recuperados | Funcionalidades:   \- Cadastro de partes no protocolo de processos |

## RN510

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Registro da ciência para expedientes físicos | O registro da ciência para expedientes físicos só será realizado se a intimação for efetivamente recebida, ou seja, "Recebido" de acordo com as opções da regra RD102. O campo data de recebimento do resultado do AR, (anteriormente chamado de data de recebimento) deve ser de preenchimento obrigatório para todos os resultados. Para resultados diferentes de "Recebido", o expediente deve ser fechado. | Funcionalidades:   \- Registro de intimação para expedientes físicos |

## RN511

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Visualização da tarefa na pesquisa de processos | A pesquisa de processos traz, entre outras informações, a tarefa da qual o processo está pendente de execução. A exibição dessa informação está condicionada ao papel e à localização do usuário, ou seja, só estará disponível se o par papel + localização ao qual o usuário está vinculado estiver configurado na raia (swimlane) responsável pela execução da tarefa | Funcionalidades:   \- Pesquisa de processos |

## RN512

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Movimento de envio de baixa para instância de origem | Para toda baixa de manifestação processual enviada com sucesso para instância de origem deve ser cadastrado o movimento "123-Remessa" associado ao processo judicial que deu origem à baixa em questão; o cadastro desse movimento é feito por meio de uma configuração em um nó de tarefa responsável por preparar baixa. Quando a baixa for entregue ao destinatário, o sistema lançará automaticamente o movimento "22-Baixa Definitiva". | Funcionalidades:   \- Preparar remessa para o 2º grau |

## RN513

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de informação processual complementar (IPC) do tipo sentença absolutória | IPCs do tipo sentença absolutória devem obedecer as especificações descritas nas seguintes regras complementares: RN514; Qualquer tipo de IPC possui uma relação com pessoa e processo judicial; no caso de IPC do tipo sentença absolutória, essa relação é definida pela regra RN141. Alguns tipos de IPC possuem a necessidade de associação do(s) delito(s) cometido(s) pelo réu(s); no caso da IPC do tipo sentença absolutória, essa primordialidade é definida pela regra RN440. | Funcionalidades:   \- IPC do tipo sentença absolutória |

## RN514

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação das informações (ou atributos) que caracterizam IPC do tipo sentença absolutória | Os dados que caracterizam uma IPC do tipo sentença absolutória são: - Uma lista de réus no processo em questão formada conforme a regra RN72. Essa lista deve atender as regras RN249 e RN408 e RI24. - A data da sentença (dia, mês e ano) do fato que ocorreu a sentença absolutória. É obrigatório informar a data do sentença absolutória. A data da sentença absolutória deve obedecer a regra: RI3. - A data da publicação (dia, mês e ano) da publicação da sentença sentença absolutória. É obrigatório informar a data do sentença absolutória. A data da sentença absolutória deve obedecer a regra:RN100 RI3. - Uma lista contendo nomes dos orgãos julgadores formada conforme a regra RN458. - Uma lista de movimentações processuais formada conforme a regra RN429. Essa lista deve atender as regras RN57 e RN166. - Uma lista de documentos formada conforme a regra RN430. Essa lista deve atender as regras RN57 e RN166. | Funcionalidades:   \- IPC do tipo sentença absolutória |

## RN515

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Edição no agrupador de documentos | A edição de um documento listado na tabela do agrupador de documentos é disponibilizada de acordo com as seguintes restrições: para usuários de papéis que agreguem a funcionalidade de edição ('/pages/Processo/ConsultaProcesso/editarModeloDocumento.seam') para documentos não assinados para documentos ativos Não estará disponível para documentos que sejam minutas em elaboração documentos que sejam relatórios, salvo os relatórios de disponibilidade documentos de processos preventos | Funcionalidades:   \- Agrupador de documentos no detalhamento do processo;   \- Agrupador de documentos no resumo do processo ao protocolar |

## RN516

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exclusão no agrupador de documentos | A exclusão de um documento listado na tabela do agrupador de documentos é disponibilizada para processos ainda em elaboração (Domínio 'E' da regra de domínio RD104), ou seja, não protocolados. Essa restrição se deve à regra RN504, ou seja, documentos não assinados podem ser excluídos. A exclusão também é possível de acordo com a regra RN380. | Funcionalidades:   \- Agrupador de documentos no detalhamento do processo;   \- Agrupador de documentos no resumo do processo ao protocolar |

## RN517

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Certidão no agrupador de documentos | A certidão de um documento listado na tabela do agrupador de documentos é disponibilizada para documentos assinados e que estejam cadastrados com a "Aplicação de classe" de acordo com a instância da instalação do PJe, ou seja, conforme parâmetro aplicacaoSistema. | Funcionalidades:   \- Agrupador de documentos no detalhamento do processo;   \- Agrupador de documentos no resumo do processo ao protocolar |

## RN518

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Adequação do fluxo "PAC - Preparar ato de comunicação" para conexão com a ECT | Para que os expedientes do tipo Correios sejam conectados a ECT, o fluxo "PAC - Preparar ato de comunicação" deverá sofrer inclusões e alterações em seus nós, conforme instruções a seguir:      a) Criar nó de sistema "Tratar Expedientes Correios":      • ENTRADAS: "É Correio?"   • SAÍDAS: "Possui Erros ConectorECT?"   • Criar evento do tipo "Entrar no nó"   • Criar ação e colocar a seguinte EL na expressão: `#{comunicacaoProcessualAction.enviarExpedientesLancarMovimentos('C', 'processoExpedienteAtual','#{preencherMovimento.deCodigo(60).associarAoDocumento(processoExpedienteAtual.getProcessoDocumento()).comComplementoDeCodigo(4).doTipoDominio().preencherComElementoDeCodigo(74).lancarMovimento()}')}`      b) No nó de decisão "É correio?":      • ENTRADAS: ForkComunicacao   • SAIDAS: "JoinComunicacao" e "Tratar Expedientes Correios"   • No campo expressão, ao invés de ir para o nó "imprimir correspondência", redirecione para "Tratar Expedientes Correios": `#{comunicacaoProcessualAction.getExpedientesCorreios().size() > 0 ? 'Tratar Expedientes Correios' : 'JoinComunicacao'}`      c) No nó "Imprimir Correspondência":      • ENTRADAS: "Possui Erros ConectorECT?", "Nó de Desvio" e "Nó de Desvio - Preparar ato de comunicação"   • SAIDAS: "Concluir", "Nó de Desvio" e "Nó de Desvio - Preparar ato de comunicação"   excluir os eventos existentes      d) Criar nó de decisão "Possui Erros ConectorECT?":      • ENTRADAS: "Trata Expedientes Correios"   • SAIDAS: "Imprimir Correspondência" e "JoinComunicacao"   • `Se possuir erros na interação entre o PJE e o ConectorECT, redireciona para tarefa "Imprimir Correspondência"`   `• Se não, direcionada para o nó "JoinComunicacao", conforme a seguinte expressão: #{tramitacaoProcessualService.recuperaVariavel('variavelErrosConectorEct').size() > 0 ? 'Imprimir Correspondência' : 'JoinComunicacao'}`      e) Nó "Imprimir Correspondência":   • Alterar a página usada para `Processo_Fluxo_expedientes_correios.xhtml`   • Alterar do tipo Página para "Frame" | Funcionalidades:   \- Preparar ato de comunicação |

## RN519

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Permissão para iniciar atividade de digitalização | A opção de iniciar atividade de digitalização, disponível para alguns usuários internos do PJe no CNJ, será possível para usuários detentores do papel cujo identificador esteja registrado como pje:processo:fluxo:deflagrar:digitalizacao. Além disso, a opção estará disponível para instalações do PJe cujo parâmetro pje:fluxo:digitalizacao:codigo esteja configurado com um código de fluxo válido na instalação. | Funcionalidades:   \- Opção de iniciar fluxo de digitalização em ferramentas do processo |

## RN520

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pedido de sustentação oral. | A sustentação oral é a oportunidade que tem o advogado da parte interessada de sustentar, no dia do julgamento e perante o colegiado julgador, oralmente, as razões do seu recurso ou as suas contra-razões ao recurso da parte adversária. Geralmente, o pedido de sustentação oral é feito antes do início da sessão de julgamento e perante ao secretário da sessão.   No PJe, o pedido de sustentação pode ser feito de duas maneiras:      No **painel do secretário da sessão** (com perfil de Secretário da Sessão, preferencialmente) escolha e clique no dia da sessão desejada, depois clique no botão "Continuar" e, em seguida, será exibida a tela com a lista de processos da sessão de julgamento em questão. Para cada processo é apresentado o ícone e, ao acioná-lo aparecerá algumas opções e uma dessas é a opção "Marcar para sustentação oral" . Ao clicar nessa opção, uma pequena tela denominada "Pedido de Sustentação Oral" será exibida para que sejam informados os nomes dos advogados. Após clicar no botão "Gravar", o pedido de sustentação oral será registrado para o processo judicial em questão na respectiva sessão de julgamento.   No menu **Audiências e sessões → Relação de julgamento** (com perfil de Secretário da Sessão, preferencialmente), escolha o processo judicial desejado apresentado na tela "Relação de julgamento" e marque a opção "Sustentação oral", com isso o pedido de sustentação oral será registrado para o processo judicial na respectiva relação de julgamento da sessão em questão. | Funcionalidades:      Painel do secretário da sessão.   Sessão de julgamento.   Relação de julgamento. |

## RN521

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lançamento de movimento de mudança de classe processual | Na evolução de classe, o movimento lançado é determinado pela expressão atualmente definida como mudança de classe processual. Na retificação de autuação, pode ser definido pela instalação se o parâmetro movimentoAutomatico.ELMovimentoRetificacaoClasse estiver definido. Nesse caso, o lançamento do movimento obedece o que determina a expressão cadastrada no parâmetro. | Funcionalidades:   \- Alteração de classe processual: Registrar evolução de classe   \- Retificar autuação |

## RN522

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| PLP com objetos do mesmo cartão | Para salvar uma PLP, esta deve ser vinculada a um determinado cartão de postagem, onde os objetos postais associados a ela devem ter sido cadastrados pelo mesmo cartão. | Funcionalidades:   \- Conector ECT |

## RN523

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Número mínimo de objetos postais em uma PLP | Uma PLP deve ter, no mínimo, dois objetos postais associados para ter sua postagem permitida. | Funcionalidades:   \- Conector ECT |

## RN524

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Cadastro de Filiais de Pessoas Jurídicas | O CNPJ das filiais é identificado como tendo a mesma raiz do CNPJ da matriz. Conceitualmente, para o sistema, a matriz e suas filiais são a mesma pessoa jurídica, sendo assim, o PJe busca unificar os cadastros para que a mesma pessoa jurídica não conste em duplicidade. Portanto, ao inserir o CNPJ de uma filial, o sistema já insere o CNPJ da matriz. Se a matriz correspondente não existir, o sistema cadastra os CNPJs da matriz e da filial na lista de documentos de identificação. Se o CNPJ da matriz já estiver cadastrado, o sistema disponibiliza os demais campos para preenchimento. Se o CNPJ da filial já estiver cadastrado como documento inativo, o sistema reativa o documento se a razão social for a mesma. Caso contrário, cadastra um novo documento mantendo o antigo inativo. O endereço da filial pode ser adicionado no momento do cadastro da empresa, na aba endereços, e pode ser selecionado quando da associação da filial ao processo. | Funcionalidades:   \- Cadastro de Pessoa Jurídica |

## RN525

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista de processos aptos para pauta | O usuário com permissão poderá incluir processos na pauta de julgamento desde que a sessão tenha sido planejada para data posterior a atual (data de fechamento maior que data atual) e a realização da sessão não tenha ocorrido.   Processos estarão disponíveis para serem incluídos na sessão de julgamento desde que tenham sido distribuídos e sejam de classes judiciais que tenham a opção "Exige inclusão em pauta" marcada. Além disso, deve ter sido marcado como selecionado para pauta, de acordo com regra RN526. Os processos, ainda, não devem ter movimento de retirada de pauta conforme parâmetro idProcessoRetiradoPauta e não devem ser processos já pautados em sessão que ainda não foi realizada.      Para usuários com o papel de secretário da sessão (idSecretarioSessao):      os processos devem ser de relatoria de órgãos julgadores que componham a sessão de julgamento, conforme cadastro da sessão   se no papel+localização houver registro de órgão julgador e órgão julgador colegiado, só estarão disponíveis processos do órgão julgador referenciado no papel (Por exemplo: usuário está com o papel+localização "Plenário/Direção da secretaria/Secretário da sessão" não terá restrições quanto ao órgão julgador dos processos por causa de seu login, já que não está vinculado a órgão julgador (poderia ser Presidência), mas apenas a órgão julgador colegiado (Plenário))   caso contrário, não há restrição de processos por órgão julgador   Para usuários com papel diferente de secretário da sessão:      se no papel+localização houver registro de órgão julgador, só estarão disponíveis   processos do órgão julgador referenciado no papel ou   processos cadastrados na sessão cuja responsabilidade de revisão esteja com aquele órgão julgador e de classes judiciais que exijam revisor (campo "Exige revisão" marcado)   caso contrário, não há restrição de processos por órgão julgador   Considerando que é possível um mesmo processo ser levado várias vezes a julgamento, em relação a questões incidentes, por exemplo, a funcionalidade deve funcionar do seguinte modo:      Para indicar que um processo está apto para pauta, o usuário deve marcar na aba do processo o flag "apto para pauta" (que só aparece obedecidas todas as condições atualmente implementadas RN387).   O processo então ficará em todas as abas "Aptos para inclusão em pauta" de todas as sessões aprazadas daquele órgão julgador colegiado. (comportamento que já ocorre).   Ao incluir efetivamente em pauta, ou seja, vincular um processo a uma determinada sessão de julgamento, o sistema deve desmarcar o flag "apto para pauta" do processo. Caso haja uma exclusão da pauta antes de seu fechamento, a marca de que está apto para pauta deve ser reativada.   O sistema deve permitir a inclusão do processo nas sessões subsequentes, se houver adiamento, o que deve ser realizado de forma automática, de acordo com as configurações do órgão julgador colegiado.   Permitir que os passos 1 a 4 possam se repetir quantas vezes sejam necessárias (pode haver julgamento de incidentes inclusos no próprio processo). | Funcionalidades:   Processos aptos para inclusão em pauta na Relação de julgamento   Issues   PJEII-2931 |

## RN526

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Selecionado para pauta | O processo pode ser marcado como selecionado para pauta das seguintes formas: - Através de nós de fluxo, utilizando uma expressão de seleção. - Através de marcação específica na tela de detalhes do processo, seguindo a regra RN387. | Funcionalidades: Processos aptos para inclusão em pauta na Relação de julgamento |

## RN527

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Permissão de acesso a funcionalidades | As funcionalidades disponíveis nos menus do PJe têm, via de regra, a permissão de acesso determinada pela vinculação de seu cadastro ao do papel que o usuário detém. Sendo assim, uma funcionalidade do menu poderá ser acionada por um usuário desde que esteja vinculado a um papel que a agregue ou que a tenha agregado em algum papel da sua hierarquia. | Funcionalidades: Disponibilização de funcionalidades nos menus |

## RN528

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Cadastro de filial como parte de um processo | O PJe considera a matriz e suas filiais como a mesma pessoa jurídica para evitar duplicidades. Portanto, não é permitido cadastrar a mesma empresa com CNPJs diferentes. O sistema permite o cadastro de mais de um endereço para a mesma pessoa jurídica. Caso a parte cadastrada seja uma filial, deve-se informar/selecionar o endereço da filial para notificações, mas na tela principal sempre aparecerá o CNPJ da matriz. A solicitação de cadastro de CNPJs distintos nos processos pode ocorrer para notificar a empresa na localidade da filial. O PJe permite o cadastro de todos os endereços das filiais, mesmo que o CNPJ seja da matriz, visando atender às necessidades específicas sem alterar a regra do sistema. | Funcionalidades: Cadastro de partes no protocolo de processos |

## RN529

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Definição de perfil para acesso à funcionalidade "Peticionar" | Para acessar a funcionalidade que permite peticionar um processo e visualizar todos os processos peticionados, o usuário deve receber permissão do papel “Administrador” com identificador `/pages/Processo/CadastroPeticaoAvulsa/peticaoavulsa.seam`. Embora a funcionalidade seja normalmente acessada por advogados, procuradores e seus assistentes, não é restrita a esses perfis. | Funcionalidades: Peticionamento avulso |

## RN530

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Número do processo para peticionamento | Para realizar o peticionamento ou a pesquisa de um processo, o usuário deve possuir o número completo do processo desejado. A numeração pertence apenas à aplicação atual do PJe (jurisdição); para outras aplicações do PJe, a numeração será considerada inexistente. | Funcionalidades: Peticionamento avulso |

## RN531

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Solicitação de usuários externos ao peticionar | Ao peticionar um processo, o sistema verifica se o solicitante já está cadastrado como parte no processo. Se o usuário não for parte do processo, seu peticionamento é considerado AVULSO; caso contrário, não é considerado avulso. O sistema reúne em um agrupador da secretaria processual todos os peticionamentos avulsos para apreciação. No painel do usuário externo, o sistema mostra todas as petições realizadas pelo usuário em processos no sistema na aba "Petições". | Funcionalidades: Peticionamento avulso |

## RN532

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Sigilo de processos em peticionamentos | O peticionamento avulso em processos sigilosos é permitido, mas as informações do processo devem respeitar a regra de visualização de processos sigilosos (RN451). Nos casos em que o processo não for sigiloso, o comportamento do sistema deve ser verificado, pois a versão 1.6.4.4 (CNJ) apresenta bug, definindo todos os processos como sigilosos. | Funcionalidades: Peticionamento avulso |

## RN533

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Petições vinculadas ao perfil do usuário logado | A aba 'Petições' retorna todas as petições elaboradas pelo usuário logado no sistema (independentemente se a petição é avulsa ou não). Por exemplo, o advogado peticionou em um processo, por isso, apenas os processos que ele peticionou poderão ser consultados na aba 'Petições'. A exceção será apenas para os perfis de procuradores e defensores.   Nesses casos, o sistema deverá exibir também as petições incluídas pelos demais participantes da sua Procuradoria ou Defensoria.      • A aba Petições, no painel do Representante Processual deverá conseguir mostrar todas as petições cadastradas pelo próprio usuário ou por algum dos outros representantes processuais do grupo em que o usuário faça parte, para isso esta aba deverá possuir os seguinte critérios de pesquisa:   • Número do processo - campo que pode ter valores inseridos da mesma forma que na pesquisa por processos, ou seja, por partes do numero (ver imagem anexa), sendo possível pesquisar processos por partes de seu número;   • Campo: "Você é parte do processo?", com as opções: "sim", "não", "indiferente". Comportamento:   • "Sim" - o sistema listará apenas as petições encontradas em que o usuário ou a Procuradoria/Defensoria ou o Escritório de Advocacia do usuário sejam parte;   • "Não" - o sistema listará apenas as petições encontradas em que o usuário, Procuradoria/Defensoria ou Escritório de Advocacia do usuário não sejam parte;   • "Indiferente" - o sistema não restringirá a pesquisa por este campo.   • Campo: "Apenas processos que estejam em seu painel?", opções: "sim", "não", "indiferente". Comportamento:   • "Sim" - o sistema mostrará apenas processos que estejam no painel do usuário, ou seja, se o usuário for JusPostulandi, serão todos que ele faça parte, se for um advogado serão todos em que ele seja parte ou represente uma parte, se for um procurador ou um defensor, deve ser verificado se ele é gestor, neste caso mostram-se todos os processos no painel, se ele for distribuidor, mostram-se todos os processos da jurisdição em que ele é distribuidor, se ele for 'padrão', mostram-se todos os processos da caixa em que ele está vinculado. Para o assistente de procuradoria, mostram-se todos os processo da caixa em que ele está vinculado.   • Campo: "Quem criou as petições?", com as opções: "criadas por mim", "criadas por outra pessoa", "indiferente". Comportamento:   • "Criadas por mim" - mostrará apenas as petições cridas pelo usuário logado;   • "Outra pessoa do meu grupo" - mostrará apenas as petições não criadas pelo usuário logado, mas que tenham sido criadas pela Procuradoria/Defensoria em que ele faça parte.   • "Indiferente" - com esta opção o sistema não restringirá a pesquisa de petições pelo criador. | Funcionalidades:   Peticionamento avulso |

## RN534

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Acesso de Jus Postulandi aos processos | Quanto ao acesso como Jus Postulandi, a resolução 121 determina que o acesso deve ser dado da seguinte forma:   Art. 1.º A consulta aos dados básicos dos processos judiciais será disponibilizada na rede mundial de computadores (internet), assegurado o direito de acesso a informações processuais a toda e qualquer pessoa, independentemente de prévio cadastramento ou de demonstração de interesse.   Parágrafo único. No caso de processo em sigilo ou segredo de justiça não se aplica o disposto neste artigo.   No PJe esta funcionalidade é tratada da seguinte maneira:   caso o processo seja sigiloso, a regra a ser seguida é a seguinte: RN451;   caso o processo não seja sigiloso, o usuário com o perfil de Jus Postulandi, poderá visualizar os detalhes do processo. No entanto, no momento de o sistema exibir o detalhamento do processo, deve-se verificar o seguinte critério:   • será exibido o detalhamento normal do processo (o mesmo detalhamento mostrado aos advogados/procuradores) - quando o usuário Jus Postulandi pertencer à parte ativa ou pertencer à parte passiva ou tiver cadastrado como outros interessados ou ainda quando ele possuir um expediente em aberto em seu nome;   • será exibido o detalhamento da consulta pública (mais resumido) - no caso contrário, ou seja, se o usuário Jus Postulandi não for parte (ativa ou passiva ou outros interessados) do processo ou ainda não possuir uma intimação em aberto em seu nome. | Funcionalidades:   Pesquisa de processos |

## RN535

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Inclusão de dados específicos da classe | Para configurar uma classe com campos complementares ou também chamados de dados específicos da classe, deve-se, dentro da aba Aplicação na configuração dos detalhes da classe processual, selecionar a aplicação da classe entre os graus de jurisdição disponíveis e incluir uma descrição do campo, a função de validação (CPF, CNPJ ou data) e marcar se o campo será exigido como obrigatório ou somente leitura.   As opções de atributos do campo são: ambos os atributos (obrigatório e somente leitura) desmarcados, marcado apenas como somente leitura ou marcado apenas como campo obrigatório. O campo não poderá ser marcado como obrigatório e somente leitura ao mesmo tempo. A opção de marcar um campo como somente leitura é utilizada para pontos de extensão do sistema PJe, estes, portanto, serão campos derivados cujo o conteúdo será preenchido pelos sistemas de extensão ao PJe, como no caso da "Situação da guia de recolhimento de custas" referenciado na issue: PJEII-17328. | Funcionalidades:   Dados específicos da classe |

## RN536

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exibição de dados específicos da classe | Nos processos, caso à classe processual correspondente tenha sido configurada com a inclusão de campos complementares a ela RN535, deverá ser exibida a aba "Dados específicos da classe" e neste caso todos os campos complementares correspondentes deverão ser mostrados nesta aba.   Para a exibição destes campos, deve-se observar se o atributo obrigatório foi marcado e neste caso, o campos deverá exigir que exista um valor inserido para poder gravar os dados, caso o campo tenha sido marcado como somente leitura, o sistema não poderá mostrar o campo de inserção de dados. E em ambos os casos o sistema deverá obedecer à "função de validação" marcada para o campo para poder formatá-lo. Sendo que atualmente as opções de formatação são: default (campo texto sem formatação), CPF (utilizar a máscara de CPF e a validação de CPF), CNPJ (utilizar a máscara e a validação do CNPJ) e data (utilizando uma máscara de data DD/MM/AAAA e a validação da data). | Funcionalidades:   Dados específicos da classe |

## RN537

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Minutar em Lote | Para minutar em lote, procedimento executado no painel do magistrado, após a seleção dos processos para minutar em lote e o clique no botão "Minutar em lote", o sistema deverá excluir os despachos em aberto para cada processo do lote selecionado e possibilitar a criação de um novo despacho que terá o mesmo modelo para todos os processos do lote. Nos casos em que o sistema excluir os despachos em aberto, um alerta deve ser enviado ao usuário, para que este tenha ciência de que o despacho anterior não será aproveitado e será excluído.   Este comportamento é um pouco diferente do comportamento de quando os processos são minutados individualmente, pois na movimentação individual o sistema apresenta o conteúdo do despacho anterior ao usuário. | Funcionalidades:   Minutar em lote   Fluxos:   Preparar ato judicial   JIRA: |

## RN538

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Troca de classe judicial não altera os tipos de partes envolvidos. | Ao selecionar uma nova classe judicial em que não há configurado os tipos de partes já existentes no processo, o sistema deverá apresentar a seguinte mensagem de alerta ao usuário: "A classe judicial selecionada possui incompatibilidades nos tipos de parte. A alteração da classe judicial não implicará na mudança dos tipos de parte já cadastrados. Deseja continuar?". | JIRA:   PJEII-17421 |

## RN539

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Permissão de acesso aos processos sobre suspeita de prevenção. | Para permitir que um usuário tenha acesso aos processos sobre suspeita de prevenção, o papel deve possuir a visibilidade adequada de acordo com o configurado no sistema. Além da visibilidade, o recurso `/pages/Painel/painel_usuario/popup/preventoPopUp.seam` deve ser cadastrado e vinculado ao papel desejado.   Essa visibilidade está relacionada ao acesso à janela "Popup de análise de prevenção" e não ao agrupador "Processos sob análise de prevenção".   Para elaborar o documento da prevenção, a lista "Tipo de documento" deve retornar os documentos permitidos para a prevenção. Apenas o documento Despacho será utilizado na prevenção, ou seja, o papel deve ser vinculado a esse documento. Ele será definido pelo parâmetro idTipoProcessoDocumentoDespacho. | Funcionalidades:   Processos sob análise de prevenção |

## RN540

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exclusão lógica de documentos anexados ao processo | A exclusão de documentos do processo segue a regra RN504. Via de regra, advogados, procuradores e jus postulandis não possuem permissão de excluir documentos assinados do processo, permissão essa que segue a regra RN380. Já para documentos não assinados a exclusão lógica será permitida por meio da opção “Assinar documentos pendentes” e somente pelo usuário que criou o documento, ou de acordo com as especificações da regra RN379. | Funcionalidades:   Documentos do processo   Assinar documentos pendentes |

## RN541

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Expediente por meio telefônico | O envio de expedientes por meio telefônico (T - Telefone) só deve estar disponível para partes que tenham pelo menos um meio de contato cadastrado no PJe para o tipo de contato "telefone". A verificação exige que o tipo de contato tenha sido cadastrado com parte da descrição contendo o texto "telefone". | Funcionalidades:   Preparar comunicação |

## RN542

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Cadastro de espólio e massa falida | Para o cadastro de espólio ou massa falida no PJe, os mesmos devem ser incluídos no polo ativo do processo e seus representantes devem ser cadastrados como terceiros vinculados. Considera-se espólio o conjunto de bens, direitos e obrigações da pessoa falecida. E massa falida é o acervo do ativo e passivo de bens e interesses do falido, que passam a ser administrados e representados pelo síndico. São a mesma coisa, só que um de pessoa física, o outro de pessoa jurídica.   Mesmo sendo a pessoa falecida, a Receita Federal mantem o CPF ou CNPJ ativo na sua base de dados, o que não prejudica a validação desses dados dentro do PJe. | Funcionalidades:   Cadastro de processo |

## RN543

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Contagem de prazos para expedientes | De acordo com Art. 184 do Código Processo Civil, para a contagem de prazos, exclui-se o dia do começo e inclui-se o do vencimento.   As intimações consideram-se realizadas no 1° dia útil seguinte, se tiverem ocorrido em dia em que não tenha havido expediente forense, ou seja, intimações em feriados ou finais de semana são consideradas realizadas no primeiro dia útil seguinte. Para iniciar a contagem, o prazo só começa a fluir do 1° (primeiro) dia útil após a data considerada como a da intimação.   Por exemplo, uma intimação feita no sábado, entende-se ocorrida na 2ª feira, de tal forma que o prazo só terá início no dia seguinte, 3ª feira. Se a intimação ocorrer nas férias forenses, será considerada feita no primeiro dia útil, quando reiniciarem-se as atividades judiciais normais, já que não se praticam atos processuais durante feriados e férias forenses. As férias forenses são os períodos de 2 a 31 de janeiro e de 2 a 31 de julho.   O prazo de término se prorroga para o 1° dia útil quando cair em feriado ou o expediente forense for encerrado antes da hora normal. | Funcionalidades:   Preparar comunicação   Aba Expedientes |

## RN544

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Expediente com prazo do tipo data certa | Quando um expediente é enviado com data certa, o destinatário desta comunicação tem até a data estabelecida para dar ciência e se manifestar.   Independentemente se a data indicada for ou não dia útil. | Funcionalidades:   Preparar comunicação   Aba Expedientes |

## RN545

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Restrições em relação à classe recursal. | Os dados da remessa devem estar em conformidade com todas as restrições atuais da classe recursal escolhida (campo "Classe Judicial" definido na regra RI5). Algumas restrições:   \- se a classe recursal "Exige polo passivo", é obrigatória a presença de pelo menos uma parte no polo passivo da remessa em questão.   \- se a classe recursal tiver a marcação "Exige ente ou autoridade", a RN357 deve ser atendida. | Funcionalidades:   Preparar remessa para o 2º grau. |

## RN546

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Processo remetido para instância superior pode ou não receber numeração própria de acordo com a característica da classe. | Se a classe judicial tiver a marcação "Exige numeração própria", um novo número de processo deve ser gerado ao protocolar o processo na instância superior e o campo "Processo de referência" deve ser preenchido com o número do processo da instância de origem.   Caso a classe judicial não tenha a marcação "Exige numeração própria", o processo remetido à instância superior deve ser mantido com a mesma numeração existente na instância de origem e o campo "Processo de referência" não precisa ser preenchido. | Funcionalidades:   Preparar remessa para o 2º grau. |

## RN547

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Dados do processo de origem que precisam ser os mesmos quando este processo é remetido para outra instância. | Alguns dados do processo protocolado na origem (1º grau, por exemplo) devem ser os mesmos quando a remessa desse processo é enviada e protocolada em outra instância (2º grau, por exemplo). Os dados são:   \- Conteúdo do campo "Segredo Justiça?".   \- Conteúdo do campo "Justiça Gratuita?".   \- Conteúdo do campo "Pedido de liminar ou de antecipação de tutela?".   \- Conteúdo do campo "Valor da Causa".   \- Conteúdo(s) de "Prioridade Processual".   \- Conteúdos da lista de "Documentos":   • Campo "Número".   • Campo "Juntado em".   • Campo "Documento".   • Campo "Tipo de documento".   • Campo "Validação".   • Campo "Origem", ou seja, instância de origem do processo.   • Campo "Juntado por", cujo conteúdo deve ter o nome do usuário que juntou e assinou o documento do processo na instância de origem. | Funcionalidades:   Preparar remessa para o 2º grau. |

## RN548

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Dados da aba "Expedientes" do processo de origem não são remetidos para outra instância. | Os dados da aba "Expedientes" (exibidos na consulta de detalhes do processo) não são migrados para o 2º grau e, da mesma forma, na baixa de processos do 2º para o 1º grau também não são migrados. Somente são migrados os documentos vinculados aos expedientes. | Funcionalidades:   Preparar remessa para o 2º grau. |

## RN549

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Proibições impostas ao processo em tramitação em outra instância. | Quando o processo for remetido para instância superior (RN550) e o parâmetro do sistema chamado "bloqueiaProcessoRemetido" estiver com o valor true, o sistema não deve permitir a realização das seguintes ações no processo da instância de origem:   \- Transitar o processo por meio da tela que permite a movimentação do processo (devendo-se ocultar as transições possíveis).   \- Adicionar novos documentos por meio da aba "Incluir petições e documentos" da tela de detalhes do processo.   `- Utilizar a funcionalidade Processo -> Outras ações -> Peticionar, para o processo em questão.`   `- Utilizar a funcionalidade Processo -> Outras ações -> Peticionamento avulso, para o processo em questão.`   Referência: issue PJEII-17841. | Funcionalidades:   Preparar remessa para o 2º grau.   RI248. |

## RN550

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Processo quando remetido ou baixado para outra instância recebe atualização do atributo "inOutraInstancia". | 1\. Quando o processo for remetido (envio de remessa) com sucesso para instância superior, o atributo "inOutraInstancia" do processo na instância de origem deve ser atualizado com o valor true.   2\. Quando o processo em questão for baixado (baixa de processo) com sucesso da instância superior, deve-se atualizar o atributo "inOutraInstancia" do processo da instância inferior com o valor false.   Se por algum motivo, o processo judicial em questão, mesmo sendo efetivamente remetido ou baixado não for movimentado da tarefa responsável pelo envio/baixa para a próxima tarefa configurada, o sistema não deverá permitir que o processo seja remetido/baixado novamente.   Referência: regra disponível após conclusão da issue PJEII-17922 | Funcionalidades:   Preparar remessa para o 2º grau.   RI248. |

## RN551

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Movimentação na distribuição de mandados | Ao distribuir um mandado, se o parâmetro pje:centralmandado:registrarMovimentacaoDistribuicaoMandado estiver marcado como "true", a movimentação associada ao parâmetro pje:movimento:codigo:recebidoMandadoCumprimento será lançada no processo. | Funcionalidades:   Distribuição de mandados no painel do oficial de justiça distribuidor |

## RN552

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Distribuição de mandados | Na distribuição de mandados, as seguintes regras devem ser observadas:   \- O grupo de oficiais de justiça deve ser obrigatoriamente fornecido;   \- O grupo selecionado deve ter pelo menos um oficial cadastrado;   \- Caso não seja selecionado nenhum oficial de justiça, a distribuição é aleatória entre os oficiais do grupo selecionado, de forma a manter a mesma quantidade de processos para cada oficial;   \- Para mandados que tenham sido vinculados anteriormente a outra central, trata-se de uma redistribuição. Sendo assim, o oficial de justiça atual deve ser diferente do anterior. | Funcionalidades:   Distribuição de mandados no painel do oficial de justiça distribuidor |

## RN553

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Seleção de mandados para distribuição | Os mandados devem ser exibidos desde que:   \- Estejam pendentes de distribuição (situação marcada como A);   \- Não tenham data de distribuição registrada;   \- Não tenham sido vinculadas anteriormente a outra central de mandados;   \- Tenham sido enviados para uma central de mandado da localização do usuário ou ascendente e que a esta central esteja vinculado pelo menos um grupo de oficial de justiça;   \- Dentre os documentos vinculados ao expediente, pelo menos um esteja assinado;   \- O expediente não tenha data de exclusão;   \- O expediente não seja temporário. | Funcionalidades:   Distribuição de mandados no painel do oficial de justiça distribuidor |

## RN554

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Seleção de mandados para redistribuição | Os mandados devem ser exibidos desde que estejam pendentes de redistribuição (situação marcada como R), tenham sido enviados para uma central de mandado da localização do usuário (o batimento de localizações permitidas segue a regra RN568) e que a esta central esteja vinculado pelo menos um grupo de oficial de justiça. | Funcionalidades:   Redistribuição de mandados no painel do oficial de justiça distribuidor |

## RN555

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Seleção de expedientes para cumprimento | Os mandados devem ser exibidos desde que estejam pendentes de redistribuição (situação marcada como A), tenham sido enviados para uma central de mandado da localização do usuário (o batimento de localizações permitidas segue a regra RN568) e que a esta central esteja vinculado pelo menos um grupo de oficial de justiça. | Funcionalidades:   Exibição de expedientes para cumprimento no painel do oficial de justiça |

## RN556

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipos de resultado da diligência no controle de visita | Os tipos de resultado da diligência possíveis são os que tiverem sido cadastrados através da opção Tipo de resultado de diligência. Caso não tenham sido registradas visitas, a única opção disponível será a que tiver sido cadastrada com o código equivalente ao parâmetro idTipoResultadoDiligenciaRedistribuicao. | Funcionalidades:   Registro do resultado da diligência no controle de visita |

## RN557

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Movimentação no cumprimento do mandado | Ao registrar o resultado da diligência, se o parâmetro pje:centralmandado:registrarMovimentacaoDevolucaoMandado estiver marcado como "true", a movimentação associada ao parâmetro pje:movimento:codigo:mandadoDevolvido será lançada no processo. | Funcionalidades:   Registro do resultado da diligência |

## RN558

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Visibilidade de documentos | A visibilidade de documentos assinados no PJe é determinada pela configuração do tipo de documento. Os atributos "Visibilidade" e "Público" são utilizados no sistema para disponibilizar os documentos externamente ou não. Para o atributo "Visibilidade", será visível externamente o tipo de documento marcado como "Externo" ou "Ambos". Para o atributo "Público", será visível externamente o tipo de documento marcado como "Sim". A regra de visibilidade de documentos externamente restringe essa opção para usuários externos e na consulta pública. A visibilidade de documentos não assinados é determinada pela regra RN379. O conteúdo dos documentos excluídos estará disponível apenas para usuários internos, que também podem visualizar a justificativa da exclusão do documento. Usuários externos visualizam o registro do documento excluído, visualizam a justificativa da sua exclusão, mas não visualizam seu conteúdo. | Funcionalidades:   Telas onde há documentos de processo |

## RN559

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Visibilidade de movimentações | A visibilidade de movimentações no PJe é determinada pela configuração da movimentação. O atributo "Visível externamente" é utilizado no sistema para disponibilizar os registros das movimentações externamente ou não. A respectiva marcação faz com que a movimentação não seja exibida para para usuários externos e na consulta pública. | Funcionalidades:   Telas onde há movimentações de processo |

## RN560

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Ordenação de mandados | A ordenação dos mandados disponibilizados no painel do oficial de justiça distribuidor é determinada pelo parâmetro pje:centralmandado:tipoordenacaoendereco. O oficial poderá ordenar os mandados de acordo com o campo registrado no parâmetro. Os valores possíveis são "Cep", "Logradouro-Numero", "Bairro", "Cidade". | Funcionalidades:   Distribuição de mandados no painel do oficial de justiça distribuidor;   Redistribuição de mandados no painel do oficial de justiça distribuidor |

## RN561

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Suspensão de parte no processo | Conforme Art. 89 da lei 9909/95, em um processo criminal pode uma ou mais partes do processo serem suspensas (situação da parte marcada como "S") por determinação do magistrado, que submeterá o acusado a período de prova. Ao final do período de prova, a parte pode se tornar inativa (situação da parte marcada como "I") ou pode ser reativada (situação da parte marcada como "A"), de acordo com avaliação do magistrado do período de prova transcorrido. | Funcionalidades:   Retificação de autuação; |

## RN562

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Inativação e baixa de parte no processo | A inativação (situação da parte marcada como "I") e baixa (situação da parte marcada como "B") de parte no processo contempla o mesmo significado, ou seja, a parte cuja relação processual tenha sido extinta por qualquer motivo. A diferença é que partes baixadas ainda podem ser utilizadas como parâmetro nas consultas processuais, assim como são retornadas no detalhamento do processo. Ao realizar consultas processuais utilizando partes inativas como parâmetro, os processos respectivos não serão retornados. Na consulta pública, as partes baixadas têm o mesmo comportamento que as partes inativas. Na consulta processual, podem ser pesquisadas as partes ativas, baixadas e suspensas. A consulta por partes inativas não pode retornar resultado. Na consulta pública, podem ser pesquisadas apenas as partes ativas e suspensas. A consulta por partes inativas ou baixadas não poderá retornar resultado. Ao pesquisar processos que tenham partes baixadas ou suspensas usando outros parâmetros que não a própria parte, o sistema não deve levar em consideração a situação das partes para o retorno dos resultados da pesquisa. **Visibilidade das partes:** Nos detalhes do processo, tanto para usuários internos do tribunal quanto para os usuários externos, as partes ativas, suspensas e baixadas devem ser mostradas. As partes suspensas e as baixadas devem ser mostradas de forma tachada (por exemplo: José da Silva). Na consulta pública, as partes baixadas têm o mesmo comportamento que as partes inativas. Somente as partes ativas e suspensas podem ser exibidas, e as partes suspensas devem ser mostradas de forma tachada. **Restrições da retificação de processos sigilosos:** Quando o usuário retificador não possuir os papéis manipulaSigiloso ou visualizaSigiloso, ele não poderá visualizar e, consequentemente, retificar processos sigilosos. Quando o usuário retificador possuir apenas o papel visualizaSigiloso, ele poderá pesquisar por processos sigilosos relacionados ao seu próprio órgão julgador ou ao seu órgão julgador colegiado. Assim, ele pode retificar os dados desses processos e incluir novas partes. No entanto, ele não pode remover partes que já estejam na lista de visualizadores do processo sigiloso, pois a permissão "visualizaSigiloso" não permite a manipulação dessa lista. Quando o usuário retificador possuir o papel manipulaSigiloso, ele terá permissão para pesquisar por processos sigilosos relacionados ao seu próprio órgão julgador ou ao seu órgão julgador colegiado. Ele pode retificar os dados desses processos, incluindo a adição ou remoção de partes. Ele também pode remover partes que já estejam na lista de visualizadores do processo sigiloso. Essas partes removidas não serão mais listadas como partes ou visualizadores do processo sigiloso. | Funcionalidades:   Retificação de autuação;   Consulta pública;   Consultas processuais |

## RN563

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Proximidade de expiração do certificado digital | O sistema considerará que o certificado digital do usuário está próximo de expirar quando a data atual somada à quantidade de dias registrada no parâmetro "qtdDiasAlertaExpiracaoCertificado" for uma data igual ou posterior que a data de validade do certificado digital do usuário identificado. Se o parâmetro tiver sido definido com o valor -1, o sistema não exibirá o alerta. | Funcionalidades:   Login |

## RN564

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exibição de aviso de expiração do certificado digital | O aviso de proximidade de expiração do certificado digital, quando atendida a regra RN563, deve ser exibido toda vez que o usuário efetuar o login no sistema. | Funcionalidades:   Login |

## RN565

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Modelo de documento da petição inicial | O modelo de documento na petição inicial poderá ser utilizado desde que as seguintes restrições sejam satisfeitas:   \- O parâmetro "idModeloPeticaoInicial" estiver configurado com um id de modelo de documento válido;   \- O id configurado no parâmetro "idModeloPeticaoInicial" seja de um modelo do tipo de documento configurado no parâmetro "idTipoProcessoDocumentoPeticaoInicial";   \- A localização do usuário está vinculada a um órgão julgador;   \- A localização do modelo está vinculada à localização do órgão julgador do usuário segundo regra RN298. | Funcionalidades:   Incluir petições e documentos na criação de processo;   Orientações do protocolo de processos no roteiro de configuração de documentos |

## RN566

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de documento da petição inicial | O tipo de documento da petição inicial será o tipo vinculado ao id configurado no parâmetro "idTipoProcessoDocumentoPeticaoInicial". | Funcionalidades:   Incluir petições e documentos na criação de processo;   Orientações do protocolo de processos no roteiro de configuração de documentos |

## RN567

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Movimentações sigilosas | Uma movimentação será considerada sigilosa caso a opção "Sigiloso" de seu cadastrado tenha sido marcada. Para esse caso, a movimentação será registrada nos passos pertinentes do processo, conforme orientações disponíveis no roteiro de movimentações, mas não será visualizada no processo após seu registro. | Funcionalidades:   Cadastro de movimentações |

## RN568

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Verificação de localização | A recuperação de informações no PJe segundo a localização do usuário diz que a localização vinculada à informação deve ser a localização do órgão julgador do usuário ou deve ser ascendente à localização do órgão julgador do usuário ou deve ser descendente da localização do órgão julgador do usuário. Para usuários que não estão vinculados a órgão julgador, será utilizada a localização do usuário. | Funcionalidades:   Todas as funcionalidades que recuperem informações utilizando a localização do usuário como referência. |

## RN569

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Processos com documentos não lidos | Os processos com documentos não lidos são processos que tiveram documentos juntados por usuários externos que ainda não foram revisados por usuários internos. Quando assim caracterizados, os processos devem aparecer no agrupador de processos com documentos não lidos no painel do magistrado e do usuário. A visualização do agrupador é permitida a usuários do PJe cujo perfil esteja vinculado a um papel que herde o papel "pje:painel:documentosNaoLidos:agrupador:manipula". O agrupador deverá exibir os processos com essa característica vinculados ao órgão julgador do usuário detentor da permissão cujos documentos ainda não tenham sido revisados, respeitando as restrições para processos sigilosos. O papel determinará a permissão para atualização da situação de não lido, realizada através de botão no agrupador, que será disponibilizado quando algum processo da lista for selecionado. Ao revisar, o usuário faz com que o processo não apareça mais no agrupador, e os avisos pertinentes não mais aparecerão. A revisão poderá ser realizada também pelo detalhamento do processo, sendo registrada, o que retirará o processo do agrupador. | Funcionalidades:   Agrupador de processos com documentos não lidos |

> Regra válida após integração do código da pendência PJEII-18215

## RN570

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exibição de "Petições avulsas" | A aba "Petições avulsas" será exibida para usuários:   \- do perfil "Procurador" (no qual se incluem: Procurador Chefe, Procurador, Assistente de Procuradoria);   \- do perfil "Defensor" (no qual se incluem: Defensor Chefe,Defensor);   \- usuário servidor (magistrado inclusive), desde que seja do mesmo órgão julgador do processo   \- usuário magistrado que não seja do mesmo órgão julgador do processo mas seja revisor;   \- usuário cujo papel contenha a permissão "pje:processo:visualizaPeticionamentoAvulso" (papel do usuário herda o papel "pje:processo:visualizaPeticionamentoAvulso"). | Funcionalidades:   Aba "Petições avulsas" no detalhamento do processo |

## RN571

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Petições avulsas não apreciadas | As petições avulsas não apreciadas são as petições realizadas por usuários externos ao tribunal (aqueles que não são servidores ou magistrados), que não estejam habilitados nos autos do processo. Isso inclui petições simples e solicitações de habilitação nos autos.   \- Petições - toda juntada de documentos feita por usuários externos ao tribunal;   \- Usuários externos ao tribunal - são aqueles que não herdam o papel "pje:auxiliarInterno" | Funcionalidades:   Aba "Petições avulsas" no detalhamento do processo |

## RN572

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Perfil de visualização da árvore de tarefas | O usuário poderá visualizar todas as tarefas de sua unidade judiciária desde que seu perfil contenha a permissão "pje:visualizaPainelCompleto" (papel do usuário herda o papel "pje:visualizaPainelCompleto") | Funcionalidades:   Perfil de visualização |

## RN573

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Marcação de retificação | Ao selecionar a opção de retificação, mesmo não sendo finalizada a retificação, a marcação do documento será alterada para que fique registrado que ele foi retificado. | Funcionalidades:   Retificar do agrupador "Processos com habilitação nos autos não lida" |

## RN574

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Restrição de papeis que juntam documentos | Documentos juntados serão considerados no agrupador desde que tenham sido realizados por um dos seguintes papeis: advogado, procurador ou perito. Caso tenham sido realizados por outro papel e seja necessário que seja considerado no agrupador, deve-se configurar o parâmetro "pje:agrupador:docsNaoLidos:papeis" para conter os papeis em questão, separados por vírgula. | Funcionalidades:   Processos com documentos não lidos |

## RN575

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Avisos de documentos não lidos | Além da disponibilização no agrupador, alertas que existem documentos não lidos no processo devem ser exibidos para usuários cujos papéis herdem do papel pje:auxiliarInterno, ou seja, sejam usuários internos. Os alertas serão exibidos antes da assinatura de documentos e nas telas de detalhamento do processo e de realização da tarefa, respeitada a regra RN578. | Funcionalidades:   Processos com documentos não lidos |

## RN576

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Avisos de documentos não lidos nas telas de processo | Caso o parâmetro "exibirAvisoDocsNaoLidos" tenha sido configurado com o valor "true", o alerta "Processo com documentos não lidos" deve ser exibido, respeitada a regra RN575, na tela de detalhamento do processo e na tela de execução da tarefa. O aviso deve ficar na lateral esquerda dos detalhes do processo, onde está também localizado o número. | Funcionalidades:   Detalhamento do processo;   Execução da tarefa na árvore de tarefas |

## RN577

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Avisos de documentos não lidos antes da assinatura de documentos | O alerta de que há documentos não lidos no processo deve ser exibido antes da assinatura de documentos, respeitada a regra RN575, desde que o parâmetro "pje:assinador:avisarAntesSobreDocsNaoLidos" tenha sido configurado com o valor "true". Para esse caso, o aviso exibido será o configurado no parâmetro "pje:assinador:mensagemDocsNaoLidosAntesAssinatura". A mensagem é disponibilizada com as opções de seleção do botão "OK" e "Cancelar", permitindo que o usuário não assine o documento. | Funcionalidades:   Locais onde há assinatura de documentos |

## RN578

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Documento não lido | O documento não lido é o documento que agrega as seguintes características:   \- Tem data de juntada   \- Sua inclusão foi após a distribuição   \- O atributo lido está marcado como "false"   \- Não é o documento principal do processo | Funcionalidades:   Agrupador;   Avisos |

## RN579

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de situação processual | As situações processuais devem ser de tipos de situações definidos em tempo de configuração pelo tribunal local. A inativação do tipo fará com que não seja mais possível utilizá-lo para registro em processos. | Funcionalidades:   Cadastro de tipo de situação processual;   Registro de situação processual no fluxo e posterior recuperação no detalhamento do processo |

## RN580

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de situação processual incompatível | Uma situação é conflitante com outra se, no período de sua vigência, houve outra situação cujo tipo contenha seu tipo como incompatível. Dessa forma, ela não poderá ser registrada no processo. Deve-se impedir que uma situação nova seja acrescentada quando seu tipo conflitar com o tipo de uma situação atual do processo. Para acrescentar uma situação incompatível com uma situação atual (expressão de acréscimo aqui), é imprescindível fazer a prévia remoção (expressão de remoção aqui), preferencialmente em um evento anterior ao do acréscimo. | Funcionalidades:   Cadastro de tipo de situação processual;   Registro de situação processual no fluxo |

## RN581

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Situação processual | As situações processuais devem conter: o processo e a instância de tramitação a que se refere, a data inicial de sua inclusão no processo, a eventual data final e marca indicativa de sua validade (para supressão do registro equivocadamente incluído); O processo deve passar a ter duas listas relativas à situação processual: lista de situações atuais (ou seja, que não têm data final definida) e lista de todas as situações do processo; Um processo não pode ter mais de uma situação do mesmo tipo vigente ao mesmo tempo para a mesma instância. | Funcionalidades:   Registro de situação processual no fluxo e posterior recuperação no detalhamento do processo |

## RN582

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Unificação de pessoas | Passos da unificação de usuários no sistema:   \- Cria a tabela "tb\_unificacao" e preenche o id\_usuario com o id do usuário que fez a unificação (usuário logado) e o id\_pessoa com o id do usuário principal da unificação (este é o usuário que permanecerá ativo no sistema);   \- Cria a tabela "tb\_unificacao\_pessoas" utilizando o mesmo id\_unificacao criado como chave na tabela anterior (tb\_unificacao), preenche o id\_pessoa com o id do usuário duplicado (este é o usuário que será tornado inativo no sistema), preenche o id\_usuario\_unificacao com o id do usuário que realizou a unificação;   \- Cria a tabela "tb\_unificacao\_pessoas\_doc" com os documentos de identificação do usuário duplicado que será tornado inativo;   \- Altera os registros dos documentos de identificação para o id do usuário que está sendo inativado, tb\_pess\_doc\_identificacao.id\_pessoa = `<id pessoa principal>`;   \- Cria a tabela "tb\_unificacao\_pessoas\_nome" com os registros dos nomes alternativos do usuário duplicado que será tornado inativo;   \- Altera os registros dos nomes alternativos do usuário duplicado para que sejam nomes alternativos do usuário principal tb\_pessoa\_nome\_alternativo.id\_pessoa = `<id pessoa principal>`;   \- Cria a tabela "tb\_proc\_parte\_exp\_hist" com os registros dos expedientes do usuário duplicado que será tornado inativo, identificando em id\_pessoa\_parte\_origem o id da pessoa duplicada (que será tornada inativa), em id\_usuario será gravada a identificação de qual o usuário que fez a unificação, em id\_processo\_parte\_expediente será gravado o id\_processo\_parte\_expediente que teve seu registro migrado para a pessoa principal da unificação (aquela que não foi inativada);   \- Altera os registros dos expedientes do usuário duplicado para que passem a ser do usuário principal: tb\_proc\_parte\_expediente.id\_pessoa\_parte = `<id pessoa principal>`;   \- Cria a tabela "tb\_unificacao\_pessoas\_parte" com os registros em que o usuário duplicado (o que será tornado inativo) era parte de algum processo, registrando na coluna "in\_ativo\_original" a situação do relacionamento atual entre a parte e o processo;   \- Atualiza os registros da tabela "tb\_processo\_parte", alterando os registros da coluna id\_pessoa em que o usuário duplicado (tornado inativo) estava para o id do usuário principal (que permaneceu ativo). Neste momento, se já houver um registro do usuário principal como parte do processo com o mesmo tipo de parte (id\_tipo\_parte) e o mesmo tipo de participação (in\_participacao), este relacionamento deverá ser tornado inativo (in\_ativo=false) e a coluna "partes\_duplicadas" deverá ser marcada como true, caso contrário, esta coluna deverá ser registrada como false.   \- Torna o usuário duplicado inativo: tb\_pessoa.in\_ativo = false. | Funcionalidades:   Unificar Pessoas |

## RN583

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Desunificação de pessoas | Passos da desunificação de usuários no sistema:   \- Inativa o registro da unificação em "tb\_unificacao", in\_ativo=false;   \- Registra a data da desunificação na tabela "tb\_unificacao\_pessoas", registrando o id do usuário que fez esta desunificação na coluna "id\_usuario\_desunificacao" e a data em que foi feita esta desunificação, tornando o valor da coluna in\_ativo = false -- lembrando-se que o id\_pessoa desta tabela corresponde ao usuário anteriormente duplicado que deverá ser reativado;   \- Altera os documentos de identificação relacionados em "tb\_unificacao\_pessoas\_doc" para o id da pessoa anteriormente duplicada (que estava inativa);   \- Torna os registros dos documentos de identificação relacionados inativos: in\_ativo=false;   \- Altera os registros dos nomes alternativos do usuário principal para que sejam nomes alternativos do usuário original tb\_pessoa\_nome\_alternativo.id\_pessoa = `<id pessoa duplicada>`   \- Torna os registros dos nomes alternativos de identificação relacionados inativos: tb\_pessoa\_nome\_alternativo.in\_ativo = false;   \- Altera os registros dos expedientes para o usuário original, registrados na unificação em "tb\_proc\_parte\_exp\_hist" em expedientes do usuário original;   \- Torna os registros de expedientes já desunificados em registros inativos: tb\_proc\_parte\_exp\_hist.unificacao\_ativo= false;   \- Altera os relacionamentos de partes com processos registrados em "tb\_unificacao\_pessoas\_parte", para o id do usuário original e se o valor da coluna "partes\_duplicadas" estiver igual a "true", o valor de in\_ativo na tabela "tb\_processo\_parte" deverá ser setado com o mesmo valor de "in\_ativo\_original" da tabela "tb\_unificacao\_pessoas\_parte";   \- Torna os registros destes relacionamentos inativos: tb\_unificacao\_pessoas\_parte.in\_ativo = false;   \- Torna o usuário original um usuário ativo: tb\_pessoa.in\_ativo = true. | Funcionalidades:   Desunificar Pessoas |

## RN584

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Visualização de documentos de expedientes | Quando um documento for utilizado como documento principal de um expediente (Visualização de expedientes), a sua visualização na lista de documentos do processo passa a ficar indisponível para todos os usuários externos ao sistema enquanto os expedientes que têm este documento como principal estiverem com a ciência pendente (Registrar Ciência); Documentos associados ao expediente, mas que não foram utilizados como documento principal do expediente não deverão ter a sua visibilidade alterada, se já eram visíveis antes, permanecem visíveis aos usuários, mesmo que o expediente esteja pendente de ciência; Caso um mesmo documento seja utilizado para dois expedientes diferentes como documento principal, quando o destinatário de um dos expedientes registrar a ciência pelo painel do advogado ou pela aba expedientes (detalhes do processo) ele terá acesso ao conteúdo deste documento principal e poderá visualizar o conteúdo deste documento principal apenas pelo painel do advogado ou pela aba expedientes (detalhes do processo), não podendo visualizar o conteúdo do documento pela lista de documentos (detalhes do processo) enquanto ainda houver expedientes pendentes de ciência que utilizem este documento como documento principal. | Funcionalidades:   Detalhes do processo |

## RN585

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Filtro para consulta interna de órgão julgador | **Atenção:** REGRA EM CONSTRUÇÃO.   Para usuários internos, a filtragem por órgão julgador estará disponível e listará todos os órgãos julgadores ativos. Se o usuário estiver vinculado a um órgão julgador colegiado, a lista de órgãos julgadores para consulta será composta de todos os órgãos julgadores ativos vinculados àquele órgão julgador colegiado.   Para usuários externos, o filtro não estará disponível. (Campo não deve aparecer na tela) | Funcionalidades:   Pesquisa de processo |

## RN586

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Filtro para consulta interna de órgão julgador colegiado | **Atenção:** REGRA EM CONSTRUÇÃO.   Para instalações em instância de revisão (segundo grau), o campo órgão julgador colegiado estará disponível para filtragem para usuários internos listando todos os órgãos julgadores colegiados ativos.   Para usuários externos, o filtro não estará disponível. (Campo não deve aparecer na tela) | Funcionalidades:   Pesquisa de processo |

## RN587

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pesquisa de pautas de audiências | A tela de pesquisa pelas pautas de audiências deve permitir que sejam pesquisadas as pautas de audiência já cadastradas no sistema, em suas várias situações, mesmo as já finalizadas.   O sistema deve restringir o acesso às pautas de audiência, dependendo do perfil do usuário logado:   \- Para usuários internos do tribunal, servidores ou magistrados, os campos "Jurisdição" e "Órgão julgador" devem estar travados e apenas como leitura com a Jurisdição e o Órgão julgador do usuário logado. Assim, este usuário terá acesso apenas às pautas de audiências da sua própria localização;   \- Para usuários externos, advogados, procuradores ou jus postulandi, os campos "Jurisdição" e "Órgão julgador" devem permitir que sejam selecionadas as jurisdições configuradas no sistema e ao selecionar uma destas jurisdições, deve ser possível selecionar os órgãos julgadores vinculados. No entanto, o resultado desta pesquisa só poderá trazer pautas de audiências de processos nos quais o usuário logado está vinculado como parte ou no caso de procuradores ou defensores, apenas os processos nos quais o usuário é procurador/defensor relacionado a uma Procuradoria/Defensoria representante de uma das partes.   \- Para o perfil de administrador os campos jurisdição e órgão julgador devem estar disponíveis para a seleção e nesta situação, deve ser possível que o usuário pesquise por qualquer pauta de audiência do sistema. | Funcionalidades:   Pauta de audiência |

## RN588

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Visualização de processos e documentos sigilosos por Procuradores e Defensores | A regra de visualização de processos sigilosos é dada pela \[\[1\]\], no entanto, quando a parte relacionada no processo é representada por uma Procuradoria ou por uma Defensoria, quando houver permissão para que a entidade diretamente relacionada no processo tenha acesso ao processo, ou seja, a entidade está na lista de visualizadores do processo ou há direcionado para a entidade um expediente ainda não fechado, o sistema deverá liberar a permissão para que todos os usuários procuradores ou defensores (independente se são: gestores, distribuidores ou tenham um perfil padrão na procuradoria/defensoria) da Procuradoria/Defensoria representante da parte naquele processo, tenham acesso para a visualização do processo.   Similarmente à permissão de visualização de processos, quando a entidade estiver na lista de visualizadores de um documento sigiloso RN455, todos os procuradores ou defensores da Procuradoria/Defensoria representante da entidade também poderão visualizar o documento sigiloso, não importando o perfil (distribuidor, padrão, gestor) destes usuários na Procuradoria/Defensoria. | Funcionalidades:   Pesquisa de Processos |

## RN589

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Resultado da consulta pública. | Processos tramitando em segredo de justiça, ou seja, processos onde a marcação de segredo esteja como "sim" (entidade do processo esteja com a opção de segredo marcada como sim), não devem ser retornados como resultado na Consulta Pública.   A Consulta Pública, para evitar problemas de performance, restringe a quantidade de registros retornados a 30, exibindo, para consultas que retornem quantidade superior, uma mensagem de orientação para o refinamento da pesquisa, conforme regra MN230.   As consultas a processos criminais conforme regra RN590 só deverão ser disponibilizadas após o trânsito em julgado da decisão absolutória, da extinção da punibilidade ou do cumprimento da pena (TODO: validar o texto em vermelho; transformar em regras de sistema se for o caso). O critério de consulta para esses processos deve ser restringido ao número de processo, ou seja, se o resultado da consulta contemplar processos criminais e os parâmetros informados não tiverem sido restringidos ao número do processo, eles não devem fazer parte do retorno.   A aplicação de filtros específicos na Consulta Pública está sob a escolha do usuário conforme opções disponíveis na janela (definida na regra RI314); esses filtros são regidos de acordo com os seguintes critérios:   \- Quando o critério número do processo for utilizado, a seguinte regra RN597 deve ser obedecida.   \- Quando o critério nome do advogado for utilizado, a seguinte regra RN592 deve ser obedecida.   \- Quando o critério nome da parte for utilizado, a seguinte regra RN593 deve ser obedecida.   \- Quando o critério CPF da parte for utilizado, a seguinte regra RN594 deve ser obedecida.   \- Quando o critério CNPJ da parte for utilizado, a seguinte regra RN595 deve ser obedecida.   \- Quando o critério OAB do advogado for utilizado, a seguinte regra RN596 deve ser obedecida.   O resultado da consulta deve ser exibido conforme regra RI317. Para cada item retornado, devem ser exibidas as seguintes informações:   \- Classe judicial   \- Número do processo formatado   \- Polos ativo e passivo do processo e seus respectivos advogados, cujo conteúdo é determinado pela regra RN598   \- Link para detalhamento do processo   A exibição do detalhamento do processo está determinada pela regra RN381. | Funcionalidades:   Consulta pública. |

## RN590

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Processos criminais | Os processos criminais no PJe são processos de classes e assuntos que estejam configurados no agrupamento de classes e assuntos denominado "CRI". | Funcionalidades:   Consulta pública. |

## RN591

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Sinalização de processo sigiloso | Para que o usuário tenha mensagens diferentes nas situações onde um processo não é encontrado na base e onde o processo foi encontrado mas é sigiloso, APENAS quando utilizado o número de processo completo, o sistema deve sinalizar para o usuário que o processo é sigiloso por meio da regra MN231. | Funcionalidades:   Peticionar. |

## RN592

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Retorno da Consulta Pública contendo como critério de pesquisa Nome do Advogado. | O retorno desta consulta obedece primeiramente a regra RN589 desconsiderando apenas a aplicação de filtros que é responsabilidade desta regra RN592 cujas definições apresentamos a seguir:   \- A pesquisa pelo nome do advogado deve considerar somente os nomes dos advogados cadastrados nos polos ativo e passivo do processo.   \- Cada um dos processos judiciais retornados na consulta deve conter, pelo menos, um dos advogados cujo nome desse advogado possua as palavras descritas no parâmetro "Nome do Advogado" e na mesma ordem que foram descritas. Deve-se desconsiderar os acentos gramaticais e os tamanhos (caixa alta ou caixa baixa) dos caracteres das palavras.   \- A situação do advogado deve ser "ativa" ou "baixada" no processo; essa restrição da situação do advogado está em conformidade com as definições da regra RN562. | Funcionalidades:   Consulta pública. |

## RN593

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Retorno da Consulta Pública contendo como critério de pesquisa Nome da Parte. | O retorno desta consulta obedece primeiramente à regra RN589 desconsiderando apenas a aplicação de filtros que é responsabilidade desta regra RN593 cujas definições apresentamos a seguir:   \- A pesquisa pelo nome da parte deve considerar somente os nomes das partes cadastradas nos polos ativo e passivo do processo.   \- Cada um dos processos judiciais retornados na consulta deve conter, pelo menos, uma das partes cujo nome dessa parte possua as palavras descritas no parâmetro "Nome da Parte" e na mesma ordem que foram descritas. Deve-se desconsiderar os acentos gramaticais e os tamanhos (caixa alta ou caixa baixa) dos caracteres das palavras.   \- A situação da parte deve ser "ativa" ou "baixada" no processo; essa restrição da situação da parte está em conformidade com as definições da regra RN562. | Funcionalidades:   Consulta pública. |

## RN594

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Retorno da Consulta Pública contendo como critério de pesquisa CPF da Parte. | O retorno desta consulta obedece primeiramente a regra RN589 desconsiderando apenas a aplicação de filtros que é responsabilidade desta regra RN594 cujas definições apresentamos a seguir:   \- A pesquisa pelo CPF da parte deve considerar somente os CPFs das partes cadastradas nos polos ativo e passivo do processo.   \- Cada um dos processos judiciais retornados na consulta deve conter, pelo menos, uma das partes cujo CPF possua exatamente o valor descrito parâmetro "CPF";   \- A situação da parte deve ser "ativa" ou "baixada" no processo; essa restrição da situação da parte está em conformidade com as definições da regra RN562. | Funcionalidades:   Consulta pública. |

## RN595

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Retorno da Consulta Pública contendo como critério de pesquisa CNPJ da Parte. | O retorno desta consulta obedece primeiramente a regra RN589 desconsiderando apenas a aplicação de filtros que é responsabilidade desta regra RN595 cujas definições apresentamos a seguir:   \- A pesquisa pelo CNPJ da parte deve considerar somente os CNPJs das partes cadastradas nos polos ativo e passivo do processo.   \- Cada um dos processos judiciais retornados na consulta deve conter, pelo menos, uma das partes cujo CNPJ possua exatamente o valor descrito no parâmetro "CNPJ";   \- A situação da parte deve ser "ativa" ou "baixada" no processo; essa restrição da situação da parte está em conformidade com as definições da regra RN562. | Funcionalidades:   Consulta pública. |

## RN596

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Retorno da Consulta Pública contendo como critério de pesquisa OAB do Advogado. | O retorno desta consulta obedece primeiramente a regra RN589 desconsiderando apenas a aplicação de filtros que é responsabilidade desta regra RN596 cujas definições apresentamos a seguir:   \- A pesquisa pelo número de inscrição na OAB e seccional do advogado deve considerar somente os advogados cadastradas nos polos ativo e passivo do processo.   \- Cada um dos processos judiciais retornados na consulta deve conter, pelo menos, um dos advogados cujo número de inscrição na OAB e seccional desse advogado possua exatamente os valores descritos nos parâmetros "OAB" e "seccional". Caso não seja informada a seccional, cada um dos processos judiciais retornados na consulta deve conter, pelo menos, um dos advogados cujo número de inscrição na OAB desse advogado possua exatamente o valor descrito no parâmetro "OAB";   \- A situação do advogado deve ser "ativa" ou "baixada" no processo; essa restrição da situação do advogado está em conformidade com as definições da regra RN562. | Funcionalidades:   Consulta pública. |

## RN597

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Retorno da Consulta Pública contendo como critério de pesquisa Número do processo. | O retorno desta consulta obedece primeiramente a regra RN589 desconsiderando apenas a aplicação de filtros que é responsabilidade desta regra RN597 cujas definições apresentamos a seguir:   \- Cada um dos processos judiciais retornados na consulta deve conter em seu número, os valores correspondentes à parte do número informada como parâmetro, respeitando à regra RN275. | Funcionalidades:   Consulta pública. |

## RN598

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exibição das partes e advogados no resultado da consulta | A exibição das partes e de seus advogados no resultado da consulta deve exibir apenas o primeiro nome recuperado da consulta realizada para cada um dos itens a serem exibidos, observadas as seguintes restrições:   **\-** Quando o critério de busca utilizado for o nome da parte, a parte consultada deve ser exibida no polo onde houve o casamento da consulta, com os respectivos efeitos na parte vinculada.   **\-** Quando o critério de busca utilizado for o nome do advogado, o advogado consultado deve ser exibido no polo onde houve o casamento da consulta, com os respectivos efeitos na parte vinculada.   Exemplo para o primeiro caso:      O nome da parte "João da Silva" é fornecido como parâmetro. Os processos onde "João da Silva" for encontrado, respeitada a regra RN593 devem ser exibidos como resultado. Digamos que existem dois processos na base que atendam a esse filtro: o processo 1 com o nome da parte no polo ativo como sendo "João da Silva" e o processo 2 com o nome da parte no polo passivo como sendo "João da Silva". O resultado deve ser exibido da seguinte forma:   ![RN598!](https://docs.pje.jus.br/assets/images/RN598-a624306a5da3f43d1f748f8f6840822a.png "RN598")   Exemplo para o segundo caso:      O nome do advogado "João da Silva" é fornecido como parâmetro. Os processos onde "João da Silva" for encontrado, respeitada a regra RN592 devem ser exibidos como resultado. Digamos que existem dois processos na base que atendam a esse filtro: o processo 1 com o nome do advogado parte no polo ativo como sendo "João da Silva" e o processo 2 com o nome do advogado da parte no polo passivo como sendo "João da Silva". O resultado deve ser exibido da seguinte forma:   ![RN598.2!](https://docs.pje.jus.br/assets/images/RN598.2-196d5e8b7c81c370f06f39b8a733f3dd.png "RN598.2") | Funcionalidades:   Consulta pública. |

## RN599

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Unicidade de nome de parâmetro do software PJe. | O nome do parâmetro é um conteúdo alfanumérico e deverá ser único na tabela responsável pelo armazenamento dos dados dos parâmetros no banco de dados, ou seja, não poderá ter nomes de parâmetros repetidos, porque o nome do parâmetro é utilizado pela aplicação para recuperação do seu valor. Desconsidera-se o tamanho das letras (caixa alta e caixa baixa) e os acentos gráficos também, exemplificando: parâmetro com nome "chaveOAB", parâmetro com nome "CHAVEOAB" e parâmetro com nome "cháveoáb" são considerados nomes de parâmetros iguais e essa repetição não é permitida, somente um desses nomes poderá existir na tabela. | Funcionalidades:   Parâmetros. |

## RN600

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Identificação do CNPJ principal no cadastro de Pessoa Jurídica | \- Todo cadastro de Pessoa Jurídica deve possuir um (e apenas um) CNPJ marcado como documento principal, na lista de documentos de identificação.   \- No cadastro inicial da pessoa jurídica, quando for adicionado o CNPJ da matriz (final 0001), ver RN524, este CNPJ deve ser marcado automaticamente como o CNPJ principal da pessoa jurídica;   \- Não deve ser possível identificar um CNPJ de filial como um documento de identificação principal;   \- Quando uma pessoa jurídica já possuir um CNPJ marcado como principal e outro for marcado como CNPJ principal, o primeiro deixará de ser marcado como principal, mantendo-se apenas o último marcado;   \- Quando um CNPJ for marcado como principal, o nome relacionado ao registro do documento de identificação deverá ser utilizado para a alteração do campo "Nome" no formulário de cadastro da pessoa jurídica;   \- O único lugar do sistema em que deverá ser possível alterar a identificação de um CNPJ como um documento de identificação principal deverá ser o cadastro de pessoas jurídicas `(Configuração > Pessoa > Jurídica)`, ou seja, não deverá ser possível alterar esta marcação em telas como o cadastro de partes do processo. | Funcionalidade:   `Configuração > Pessoa > Jurídica`. |

## RN601

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Identificação da forma de utilização das salas de audiência (sugestão de audiências e audiências automáticas) | \- Quando só houver uma sala disponível para a designação de audiência (sugerida ou automática), a disponibilidade de horários desta sala fará com que seja definido (ou sugerido) o dia e o horário da audiência para um dado processo;   \- Quando houver no mesmo órgão julgador mais de uma sala candidata à designação da audiência, é possível configurar o modo como o sistema selecionará esta sala:      \-- Modo "sequencial" - neste modo o sistema buscará preencher todos os horários do dia de uma única sala antes de buscar horários na outra sala, exemplo: --- Sala 1 (horários disponíveis: 8h e 9h) / Sala 2 (horários disponíveis: 8h e 9h)      audiência 1: sala 1 - 8h   audiência 2: sala 1 - 9h   audiência 3: sala 2 - 8h   \--\* Ainda no modo 'sequencial' - caso haja mais de uma sala com audiências já agendadas, o sistema buscará o horário mais cedo entre elas, tendo o comportamento similar ao modo "concorrente" para as salas que já tenham algum agendamento. Assim, o sistema buscará preencher todos os horários primeiro das salas que já tenham algum agendamento antes de começar a agendar audiências para salas que estão até então vazias. -- Modo "concorrente" - neste modo o sistema buscará preencher os horários "mais cedo", independentemente da sala, exemplo: --- Sala 1 (horários disponíveis: 8h e 9h) / Sala 2 (horários disponíveis: 8h e 9h)      audiência 1: sala 1 - 8h   audiência 2: sala 2 - 8h   audiência 3: sala 1 - 9h   \-- Se não houver no sistema o parâmetro "pje:modoMarcacaoAutomatica", ou o valor deste parâmetro for diferente de "sequencial", o sistema utilizará o modo "concorrente", caso o parâmetro exista com o valor "sequencial" será utilizado o modo sequencial (que privilegia a ocupação das salas, ao invés do horário);      \- A lista de salas disponíveis obedecem à regra RN609. - As regras relativas à marcação automática de audiências no ajuizamento da ação constam na RN314. | Funcionalidade:   Tarefas de audiências. |

## RN602

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipos de documentos disponíveis na reclassificação de documentos | Pode-se restringir a lista de tipos de documentos disponíveis para reclassificação na tarefa respectiva (de Reclassificação). A restrição se dará por meio de variáveis de tarefa. Se a necessidade for que apenas determinados tipos de documentos sejam listados, deve-se utilizar a variável "pje:reclassificarDocumento:idsTipoDocumentoPermitidoAlterar" por meio de configuração de ação em evento de tarefa, conforme expressão disponível na classe TramitacaoProcessualService. Se a necessidade for que sejam listados todos os tipos ativos exceto alguns tipos determinados, deve-se utilizar a variável "pje:reclassificarDocumento:idsTipoDocumentoProibidoAlterar" por meio de configuração de ação em evento de tarefa, conforme expressão disponível na mesma classe. Caso tenham sido inseridas as duas listas, o sistema utilizará apenas a lista de documentos permitidos. Independente dessa configuração, só serão disponibilizados para seleção tipos de documentos ativos caso o tipo de documento atual esteja presente na lista. | Funcionalidade:   Reclassificação de documentos. |
| Regra válida a partir da pendência PJEII-21682 |  |  |

## RN603

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Documentos disponíveis na reclassificação de documentos | Só serão disponibilizados para reclassificação os documentos ativos do processo cujo tipo de documento associado não seja o mesmo configurado no parâmetro "pje:tipoDocumento:idTipoDocumentoProtocoloDistribuicao". Caso o parâmetro não tenha sido configurado, todos os documentos ativos serão disponibilizados para reclassificação. | Funcionalidade:   Reclassificação de documentos. |

## RN604

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Inversão de polos na evolução de classe | A evolução de classe pode ocorrer também em processos que contém partes que estão simultaneamente no polo ativo e no polo passivo. Quando for solicitada a inversão de polos para essa situação, a evolução deve acontecer normalmente, e a inversão consistirá na alteração do tipo de participação das partes nos polos (por exemplo, de "requerente" para "requerido", de "réu" para "autor"). Para as partes não duplicadas, a inversão deve ser feita normalmente. | Funcionalidade:   Evolução de classe (Referência em orientações de configuração do fluxo: Registrar evolução de classe) |

## RN605

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Remarcação de audiências na redistribuição | Ao redistribuir um processo, para as audiências marcadas e não realizadas (Situação da audiência = 'M'), serão obedecidas as seguintes regras: Se o novo órgão julgador pertence a uma jurisdição cujo município sede é diferente da jurisdição do órgão julgador de origem, a audiência é cancelada. Se os municípios forem os mesmos, caso haja sala de audiência vinculada ao novo órgão julgador e a mesma restrição utilizada para as salas referentes ao tipo de audiência (regra RN609) na tarefa de marcação seja obedecida, a marcação permanece. Se não houver sala ou se todas as salas disponíveis estiverem configuradas para tipos de audiência distintos da audiência original, a audiência será cancelada e deve ser emitida uma mensagem alertando o usuário do cancelamento. Para casos em que a audiência foi marcada mas há conflito de pauta, deve ser exibido alerta pertinente. | Funcionalidade:   Redistribuição |

## RN606

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipos de audiência na marcação (designação e redesignação) | Na marcação de audiência, os tipos de audiência disponíveis são todos os tipos de audiência ativos cadastrados ordenados pelo nome do tipo da audiência. | Funcionalidade:   Tarefas de audiência |

## RN607

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Efeito da seleção do tipo de audiência na marcação | Na marcação de audiência, após selecionar o tipo de audiência, caso o tipo selecionado seja diferente do configurado para a classe e órgão julgador do processo, o sistema exibirá alerta solicitando confirmação de que aquele será realmente o tipo utilizado na marcação. | Funcionalidade:   Tarefas de audiência |

## RN608

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Configuração de tipos de audiência para órgão julgador | Na configuração do órgão julgador para instalações de primeiro grau (parâmetro aplicacaoSistema), o usuário poderá configurar, para cada classe judicial da competência do órgão julgador, um tipo de audiência ativo configurado. Ao selecionar o tipo de audiência, o usuário poderá marcar a classe judicial e vincular os dois valores ao órgão julgador. O sistema realizará essa vinculação marcando a data de início como a data atual. Essa data não é exibida no sistema, mas é utilizada nas consultas relacionadas a essa funcionalidade. | Funcionalidade:   Órgão julgador |

## RN609

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Salas de audiência disponíveis na marcação (designação e redesignação) | Na marcação de audiência, as salas de audiência disponíveis são todas as salas ativas daquele órgão julgador configuradas como destinadas a audiências (Tipo de sala = "A') ordenadas pelo nome da sala. Caso a sala tenha sido configurada como vinculada a um tipo de audiência, só será retornada caso o tipo de audiência selecionado anteriormente na marcação seja o mesmo configurado para a sala. Esse parâmetro é obrigatório para designação manual. | Funcionalidade:   Tarefas de audiência |

## RN610

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Configuração de tipos de audiência para salas | Na configuração do sala para salas destinadas a audiências (Tipo de sala = "A'), quando houver mais de uma sala configurada para o órgão julgador, o usuário poderá configurar, para cada sala, o(s) tipo(s) de audiência aos quais a sala estará destinada. Os tipos que serão apresentados para seleção são todos os tipos ativos configurados. | Funcionalidade:   Salas |

## RN611

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Elaborar decisão colegiada - acesso por meio de ícone | Para que a opção de "Elaborar decisão colegiada" esteja disponível em processos por meio do ícone da pilha Pilha.png, o parâmetros "utilizaFluxoColegiado" deve estar marcado como "false", o usuário deve herdar do papel de "magistrado" ou estar associado ao papel cujo identificador seja "Asses" e a instalação deve ser de segundo (aplicacaoSistema = 2) ou terceiro (aplicacaoSistema = 3) grau. Essa opção não estará disponível para instalações da justiça do trabalho (tipoJustica = JT). | Funcionalidade:   Barra de tarefas da árvore de tarefas no painel do usuário |

## RN612

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Visualização de documentos do processo | De forma geral, as regras de visualização de documentos de um processo devem seguir as seguintes regras:   Sistema deve permitir que o usuário visualize os documentos do processo seguindo as regras:   Devem ser levados em consideração apenas documentos *ativos* e *juntados* ao processo;   *Usuários internos:*   *documentos não sigilosos* deve permitir visualizar qualquer documento não sigiloso;   *documentos sigilosos* deve permitir visualizar os documentos sigilosos se:   1\. o usuário tiver um dos papéis: *pje:visualizaSigiloso* ou *pje:manipulaSigiloso*, tiver feito o login usando *certificado digital* e pertencer ao mesmo Órgão julgador do relator do processo ou se o usuário não pertencer a nenhum Órgão julgador, mas pertencer ao mesmo Órgão julgador Colegiado do relator do processo;      2\. Ou se o usuário estiver na lista de visibilidade do documento sigiloso;      *Usuários externos*:   *documentos associados +diretamente+ aos expedientes pendentes de ciência* - `{color:red}+não+{color}` deve liberar a visibilidade do usuário a estes documentos;   Caso o documento seja o documento principal de vários expedientes ainda pendentes de ciência, mas se o expediente encaminhado ao usuário que consulta já tiver a data de ciência registrada - este usuário poderá visualizar o documentou;   *documentos sigilosos* - só deve permitir que o usuário visualize documentos sigilosos se ele estiver na lista de visibilidade, ou se sua Procuradoria/Defensoria estiver na lista de visibilidade do documento sigiloso. | Funcionalidade:   Visualização de documentos (geral) |

## RN613

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Consulta externa de documentos do processo | A visibilidade dos documentos do processo devem seguir as regras de visibilidade de documentos - RN558 para usuários externos.   Para documentos válidos e não excluídos/ativos, a consulta de documentos deve retornar a informação de que o código do documento é válido ou não.   Para os documentos válidos (ou seja, cujo código existe no sistema):   Se o documento for não sigiloso - deve dar a opção de visualização do seu conteúdo.   Se o documento for sigiloso - deve informar que o documento é sigiloso e solicitar que o usuário acesse o sistema com o certificado digital para poder visualizar seu conteúdo.   Para documentos excluídos/inativos, a consulta de documentos deve retornar a informação de que o código do documento é válido ou não, mas não deve dar a opção de visualização do seu conteúdo.   Quando um documento válido e excluído, exclusão lógica, do processo for pesquisado pela pesquisa pública de documentos, o sistema deverá retornar a informação: "A assinatura é válida para o documento. No entanto, este documento foi excluído do processo. Veja aqui o motivo da sua exclusão. (ícone da lupa vermelha)"   Quando o link for clicado o sistema deverá retornar o motivo da exclusão do documento, a data da exclusão e o responsável por esta exclusão, assim como é feito internamente nos detalhes do processo para um documento excluído/inativado. | Funcionalidade:   Visualização de documentos (geral) |

## RN614

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Feriados e suspensões de prazo | O controle de prazos no PJe leva em consideração o cadastro de eventos do calendário. Eles são cadastrados por meio da funcionalidade Calendário. A abrangência da ocorrência de prazo registrada (nacional, estadual, municipal ou do órgão julgador) será considerada para que o sistema não considere aquele dia ou período no fechamento do prazo ou na suspensão. Dessa forma, eventos de calendário nacionais são sempre considerados, estaduais são considerados para jurisdição vinculada ao estado informado no cadastro do Calendário, municipais para jurisdição vinculada ao município e, por fim, eventos de prazo para órgão julgador funcionarão para a jurisdição vinculada ao órgão cadastrado no calendário.   Para o fechamento dos prazos, se ao menos uma das seguintes situações tiver sido marcada, o sistema considerará o próximo dia útil:   \- Suspende prazo   \- Feriado Judiciário   \- Feriado   \- Indisponibilidade do sistema   Na contagem de prazos contínuos para o prazo processual (para manifestação), na hora do cálculo do prazo final, se houver eventos de calendário até o final do prazo com a marcação "Suspende prazo", o sistema suspende a contagem dos prazos no dia ou nos dias de sua ocorrência, devolvendo às partes os dias suspensos | Funcionalidade:   Calendário |

## RN615

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista de processos aptos para inclusão em mesa | O usuário com permissão poderá incluir processos em mesa desde que a sessão não tenha movimento lançado, ou seja, a data de realização esteja vazia.   Para inclusão em mesa, os processos precisam estar vinculados ao órgão julgador colegiado do secretário e têm que ter algum evento de conclusão lançado conforme parâmetro idEventoConclusao. Além disso, as classes judiciais dos processos não podem estar com a exigência de inclusão em pauta marcadas ("Exige inclusão em pauta") e os processos têm que ter sido marcado como aptos para julgamento pelo gabinete. Os processos também não podem estar vinculados a nenhuma sessão aberta, ou seja, ou eles não estão em nenhuma sessão, ou foram excluídos ou a sessão onde foram incluídos anteriormente foi fechada. Os processos devem ser de relatoria de órgãos julgadores vinculados ao órgão julgador colegiado do cadastro da sessão.   Se no papel+localização houver registro de órgão julgador e órgão julgador colegiado, só estarão disponíveis processos do órgão julgador referenciado no papel (Por exemplo: usuário está com o papel+localização Plenário/Direção da secretaria/Secretário da sessão não terá restrições quanto ao órgão julgador dos processos por causa de seu login, já que não está vinculado a órgão julgador (poderia ser Presidência), mas apenas a órgão julgador colegiado (Plenário)).   Caso contrário, não há restrição de processos por órgão julgador | Funcionalidades:   Processos aptos para inclusão em mesa na Relação de julgamento |

## RN616

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Aptos para publicação | A aba Aptos para publicação será exibida se o parâmetro pje:sessao:exibePublicacaoRelacaoJulgamento estiver configurado como true | Funcionalidades:   Processos aptos para publicação em pauta |

## RN617

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista de processos aptos para publicação | Os processos apresentados nessa lista são processos que estejam na pauta da sessão sem data de exclusão | Funcionalidades:   Processos aptos para publicação em pauta |

## RN618

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Publicação da pauta | A publicação da pauta utiliza os processos selecionados pelo usuário na aba Aptos para publicação e monta um documento de acordo com os seguintes parâmetros:   Pessoa que será utilizada para registrar ciência quando a publicação ocorrer no DJ conforme configuração do parâmetro pje:fluxo:publicacao:idDestinacaoPessoaCienciaPublica   Tipo de processo documento conforme configuração do parâmetro idTipoProcessoDocumentoIntimacaoPauta   Modelo de documento conforme configuração do parâmetro idModeloIntimacaoPauta   Para cada processo selecionado, o sistema construirá um documento de acordo com o modelo referenciado, e o utilizará para registrar o ato de comunicação eletronicamente via diário sem prazo para resposta. O movimento de código 60 conforme tabela unificada de movimentos do SGT no CNJ com complemento código 4 com elemento do tipo domínio de código 80 é lançado no processo associado ao documento gerado. Essas configurações de movimento dizem respeito ao registro final no processo "Expedição de outros documentos".   No modelo de documento utilizado nessa funcionalidade, as seguintes variáveis, e apenas elas, estão disponíveis para uso:   processoJudicial, contendo o número do processo;   classeJudicial;   orgaoJulgador;   poloAtivo, contendo a lista de partes do polo ativo com seus respectivos tipos e a lista de advogados que representam partes do polo ativo com seus respectivos números de OAB;   poloPassivo, contendo a lista de partes do polo passivo com seus respectivos tipos e a lista de advogados que representam partes do polo passivo com seus respectivos números de OAB;   localSessao;   dataSessao;   horaSessao;   tipoSessao   Para processos da justiça eleitoral:   estado;   municipio | Funcionalidades:   Processos aptos para publicação em pauta |

## RN619

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Visualização de documentos vinculados a expedientes | A construção de expedientes (incluindo intimações) pode ocorrer a partir de documentos criados na própria construção ou, como é mais comum, a partir de documentos já construídos e assinados do processo. Documentos assinados, com data de juntada e públicos, respeitando as regras de visibilidade, estão disponíveis para consulta pública no sistema para qualquer acesso, independente de identificação. De acordo com essa premissa, o seguinte deve ser observado:   \- Quando um documento for utilizado como documento principal de um expediente, não deverá ter a sua visibilidade alterada. Se já eram visíveis antes, permanecem visíveis aos usuários, mesmo que o expediente esteja pendente de ciência;   \- Documentos associados ao expediente não deverão ter a sua visibilidade alterada. Se já eram visíveis antes, permanecem visíveis aos usuários, mesmo que o expediente esteja pendente de ciência. | Funcionalidades:   Construção de expedientes, visualização de expedientes, consulta pública, consulta processual |

## RN620

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Notificações na habilitação | No caso de remoção de advogados, caso a pessoa que está sendo removida já tiver feito login no sistema, o sistema deverá encaminhar um expediente via sistema, "sem prazo" para esta pessoa; caso a pessoa que está sendo removida não tiver feito login no sistema ainda, o sistema deverá iniciar o fluxo dado pelo parâmetro: pje:fluxo:notificarHabilitacaoAutos, de forma a permitir que o tribunal possa comunicar o advogado removido por outros meios. | Funcionalidades:   Habilitação nos autos |