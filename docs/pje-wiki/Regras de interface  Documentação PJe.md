---
title: "Regras de interface | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Regras%20de%20interface"
author:
published:
created: 2025-09-30
description: "Esse conteúdo foi migrado integralmente da antiga Wiki do PJe, e suas informações podem estar desatualizadas."
tags:
  - "clippings"
---
# Regras de interface | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Regras%20de%20interface


## Regras de interface

## RI1

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel "Legislação penal" | O painel “Legislação penal” possui a finalidade de cadastrar uma norma penal. Esse painel deve obedecer as seguintes especificações:   • 1° campo, denominado “Tipo”, será uma lista de preenchimento obrigatório e deve estar de acordo com a regra de domínio RD1;   2° campo, denominado “Número” será um campo texto e de preenchimento obrigatório;   • 3° campo, denominado “Nome” será um campo texto com o tamanho máximo de 100 caracteres;   • 4° campo, denominado “Sigla” será um campo texto com o tamanho máximo de 10 caracteres;   • 5° campo, denominado “Iniciada a vigência em” será um campo data, de preenchimento obrigatório e coerente com as regras RI2 e RI207;   • 6° campo, denominado “Encerrada a vigência em” será um campo data, de preenchimento obrigatório e coerente com as regras RI2 e RI207;   • 7° campo, denominado “Situação” será um campo de seleção única e composto pelos domínios da regra RD14. Abaixo desse campo haverá um ícone com um ponto de exclamação dentro de um triângulo, e ao lado dessa imagem deve ser apresentado o texto “\*Campos obrigatórios”.   •Exibir no canto inferior esquerdo, abaixo dos campos mencionados, o botão “Incluir”. | Funcionalidades:   Legislação penal   Casos de teste:   PJe-742 |

## RI2

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| "Data" | Todos os campos "Data" devem apresentar a data no formato dd/mm/aaaa, onde "d" representa o dia, o "m" representa o mês e "a" representa o ano. | Casos de uso:   PJE\_UC001;   PJE\_UC002;   PJE\_UC012;   PJE\_UC016;   PJE\_UC021;   PJE\_UC022;   PJE\_UC023;   PJE\_UC024;   PJE\_UC027;   PJE\_UC029;   PJE\_UC042;   PJE\_UC043;   PJE\_UC044;   PJE\_UC059;   Funcionalidades:   Nó de desvio;   Legislação penal;   Cadastro de processo - aba "Partes" (Informações pessoais);   Relatório de produtividade órgão julgador/ magistrado   Casos de teste:   PJe-622   PJe-749;   PJe-353 |

## RI3

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data do delito.   Data de expedição.   Data da prisão.   Data da soltura.   Data da fuga.   Data do indiciamento.   Data que transitou em julgado.   Data oferecimento da denúncia.   Data do recebimento da denúncia.   Data do aditamento da denúncia.   Data do aditamento da queixa.   Data aditamento.   Data da pronúncia.   Data da impronúncia | A data informada deverá ser igual ou inferior a data atual do sistema.   A data informada deverá ser apresentada no formato: 99/99/9999. | Casos de uso:   PJE\_UC009;   PJE\_UC011;   PJE\_UC012;   PJE\_UC013;   PJE\_UC014;   PJE\_UC017;   PJE\_UC018;   PJE\_UC025;   PJE\_UC041;   PJE\_UC042;   PJE\_UC045;   PJE\_UC046.   Funcionalidade(s):   Cadastro de processo.   Cadastro do processo com Jus postulandi.   IPC do tipo prisão.   IPC do tipo fuga.   IPC do tipo soltura.   IPC do tipo indiciamento.   IPC do tipo obrigações a pagar.   IPC do tipo oferecimento da denúncia.   IPC do tipo aditamento da denúncia.   IPC do tipo aditamento da queixa.   IPC do tipo atribuição de autoria dos fatos.   IPC do tipo desclassificação.   IPC do tipo queixa   IPC do tipo recebimento da denúncia.   IPC do tipo atribuição de autoria de fatos. |

## RI4

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da janela responsável pela tarefa que prepara remessa de manifestação processual para envio ao 2º grau | Comportamento da janela responsável pela tarefa que prepara remessa de manifestação processual para envio ao 2º grau:   **1.** Para preparar os dados da remessa algumas abas devem ser disponibilizadas:   \- Aba "Dados Iniciais", a especificação dessa aba é definida na regra RI5).   \- Aba "Assuntos", a especificação dessa aba é definida na regra RI21).   \- Aba "Partes", a especificação dessa aba é definida na regra RI22).   \- Aba "Visualizar Último Despacho", a especificação dessa aba é definida na regra RI88).   \- Aba "Características do Processo", a especificação dessa aba é definida na regra RI249).   \- Aba "Processo", a especificação dessa aba é definida na regra RI248).   **2.** Antes de enviar a remessa, os dados dessa remessa podem ser gravados em uma variável de fluxo (conforme responsabilidade do botão "Gravar" definida na regra RI248) e essa operação não pode modificar os dados do processo judicial originário (isto é, processo que dá origem a remessa em questão) conforme regra RN329. | Funcionalidade(s):   Preparar remessa para o 2º grau.   Casos de teste:   PJe-846. |

## RI5

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação dos campos da aba "Dados Iniciais" da tarefa que prepara remessa de manifestação processual para envio ao 2º grau. | A aba "Dados Iniciais" deve conter o(s) seguinte(s) campo(s):   **\-** Uma caixa de combinação (comboBox) denominada "Seção/Subseção", essa caixa deve ser preenchida com as jurisdições ativas da instância superior (neste caso, do 2º grau). É obrigatório escolher uma seção/subseção.   **\-** Uma caixa de combinação (comboBox) denominada "Classe Judicial", essa caixa deve ser preenchida com as classes judiciais da instância superior (neste caso, do 2º grau) cujas classes são recursais/internas (àquelas com a marcação "Recursal/interna?" em seu cadastro), devem ter fluxo associado e devem estar ativas. Essas classes devem estar em alguma competência e as competências recursais devem estar associadas a algum órgão julgador. Deve ser exibida a descrição da classe e o código da classe da seguinte forma: "RECURSO DE MEDIDA CAUTELAR(1271)". É obrigatório escolher uma classe judicial.   **\-** Uma caixa de combinação (comboBox) denominada "Motivo da remessa", essa caixa é carregada com as descrições dos elementos do domínio de complemento motivo\_da\_remessa por meio de um evento em uma tarefa de fluxo previamente configurada conforme determina em uma das etapas da configuração de preparar remessa para o 2º grau. É obrigatório escolher um motivo da remessa. | Funcionalidade(s):   Preparar remessa para o 2º grau.   Casos de teste:   PJe-846. |

## RI6

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pesquisa por: | Serão apresentadas as opções para selecionar o tipo de pesquisa da Norma.   Por padrão o sistema deve exibir o campo "Norma" selecionado.   O campo de pesquisa deve ter característica de seleção única. | PJE\_UC011. |

## RI7

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Justiça Gratuita. | Caso o processo possua indicação de "Justiça Gratuita",   será apresentada uma imagem, ao lado dos dados do processo, para representar esta existência. | PJE\_UC019. |

## RI8

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Segredo de Justiça. | Caso o processo possua indicação de "Segredo de Justiça",   será apresentada uma imagem, ao lado dos dados do processo, para representar esta existência. | PJE\_UC019. |

## RI9

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Prioridade do Processo. | Caso o processo possua indicação de alguma "Prioridade do Processo",   será apresentada uma imagem, ao lado dos dados do processo, para representar esta existência. | PJE\_UC019. |

## RI10

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Ordenação de Coluna. | Caso a lista (gride) apresente colunas com opção para ordenar,   então a coluna selecionada será ordenada de forma crescente ou decrescente conforme a necessidade do ator. | PJE\_UC010;   PJE\_UC019 |

## RI11

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Número do documento. | Este campo somente será habilitado e obrigatório quando o tipo de documento (CNPJ ou CPF) for selecionado. | PJE\_UC019. |

## RI12

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Caminho de menu do Cadastro de ICR. | Processo → Cadastro → Informação criminal relevante. | PJE\_UC019. |

## RI13

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Norma referenciada. | Deverá ser copiado o tipo da norma concatenado com o número da norma que está sendo referenciada. | PJE\_UC001;   PJE\_UC002. |

## RI14

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Coluna de dispositivos da norma. | Deverão ser identados os níveis mais baixos de tipos de dispositivos.   Cada nível deve ser ordenado de forma crescente. | PJE\_UC001;   PJE\_UC002. |

## RI15

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Coluna de dispositivos da norma. | Concatenação das informações:   símbolo do dispositivo, identificador do dispositivo, texto do dispositivo. | PJE\_UC001;   PJE\_UC002. |

## RI16

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Caminho de menu do Cadastro de Normas Penais. | Cadastro Auxiliares → Criminal → Norma Penal. | PJE\_UC001. |

## RI17

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Botões da tela de alteração. | O que muda na tela entre a inclusão e a edição são os botões que no caso de incluir aparece   o botão “Incluir” e no caso de editar aparecem dois botões:   “Gravar” e “Novo”. | PJE\_UC001.      Funcionalidades:      Legislação Penal;      Cadastro de processo - aba "Endereço";      Cadastro de processo - aba "Meios de contato";      Tipo de procedimento de origem;      Órgão do procedimento de origem |

## RI18

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Definição para opção. | Valor default para alguns campos que possuem as opções SIM ou NÃO será de NÃO. | PJE\_UC002. |

## RI19

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Aba tipificação do delito. | Na inclusão ou edição a aba o ou aparece junto com a aba "Formulário". | PJE\_UC009;   PJE\_UC012;   PJE\_UC013;   PJE\_UC014;   PJE\_UC016;   PJE\_UC018;   PJE\_UC021;   PJE\_UC022;   PJE\_UC023;   PJE\_UC024;   PJE\_UC025. |

## RI20

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lançador de movimentações | O lançador de movimentações é um componente inserido em telas de fluxo disposto da seguinte maneira:   **\-** Caso tenha sido configurado como de lançamento temporário, é exibida uma mensagem notificando o usuário de que o lançamento deve ser confirmado em tarefa posterior ("Os movimentos e complementos indicados abaixo são provisórios. Eles serão lançados, em definitivo, após sua validação em uma tarefa posterior.")   **\-** Um quadro do lado esquerdo contendo a árvore de movimentações disponível para lançamento   **\-** Um quadro do lado direito de conteúdo vazio inicialmente, apresentando barra de paginação cujos botões serão habilitados a partir de 10 movimentos, contendo, após seleção de movimentos, para cada movimento selecionado, as seguintes colunas   **\-** ícone disponível para excluir o movimento selecionado   **\-** ícone de preenchimento de complementos, que aparece se o movimento selecionado tiver complemento   **\-** ícone de validação do movimento cadastrado (se não estiver presente é porque o complemento precisa ser cadastrado)   **\-** movimento cadastrado para ser lançado   **\-** campo contendo quantidade de vezes que o movimento deve ser lançado, com possibilidade de alteração da quantidade ou utilização de setinhas para acréscimo ou decréscimo da quantidade já preenchida, que inicialmente é o valor 1 | Funcionalidades:   Tarefas configuradas para lançamento manual de movimentações      Regras: |

## RI21

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação dos campos da aba "Assuntos" da tarefa que prepara remessa de manifestação processual para envio ao 2º grau. | A aba "Assuntos" deve conter o(s) seguinte(s) campo(s):   **\-** Uma tabela de seleção (ou grid) contendo todos os assuntos da competência da classe judicial em questão (essa classe diz respeito ao campo "Classe Judicial" explicado na regra RI5); essa tabela é formatada com colunas assim organizadas:   **1.** 1ª coluna não contém rótulo e deve conter um campo de seleção (ou checkBox) para cada assunto exibido de forma que permita a seleção múltipla de assuntos exibidos na tabela. Quando um assunto for selecionado, uma mensagem deve ser exibida conforme a regra MN142. Somente quando o primeiro assunto for selecionado na tabela, o campo de opção (ou optionBox) também deverá ser selecionado.   **2.** 2ª coluna com rótulo denominado "Assunto principal" deve conter um campo de opção (ou optionBox) para cada assunto exibido de forma que permita a seleção exclusiva de um assunto da tabela. É obrigatório escolher no mínimo um assunto. Deve-se escolher também um assunto principal. Caso seja desfeito a seleção do assunto principal, uma mensagem deve ser exibida conforme a regra MN144.   **3.** 3ª coluna com rótulo denominado "Assunto" e em cada linha dessa coluna devem ser exibidos os dados do assunto (descrição e código).   **4.** Na 1ª linha da tabela não deve conter exibição de dados, exceto na primeira célula da coluna "Assunto" que deve conter um campo de texto livre com rótulo denominado "Pesquisar assunto"; nesse campo o usuário poderá digitar uma parte da descrição textual de um assunto e, após concluída a digitação, os assuntos cuja descrição inicia-se com o texto digitado deverão ser exibidos na tabela. Se o conteúdo digitado no campo "Pesquisar assunto" for apagado, a tabela deverá exibir novamente todos os assuntos da competência da classe judicial em questão.   Dentre os assuntos listados na tabela de seleção (ou grid) especificada nesta regra, deve-se verificar quais desses assuntos também constam na lista de assuntos do processo originário. Caso existam assuntos em comum, esses assuntos deverão ser marcados automaticamente na tabela de seleção (ou grid) e estarem habilitados para edição. Referência deste comportamento: issue PJEII-19011. | Funcionalidade(s): Preparar remessa para o 2º grau.   Casos de teste:   PJe-846. |

## RI22

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação dos campos da aba "Partes" da tarefa que prepara remessa de manifestação processual para envio ao 2º grau. | A aba "Partes" deve conter o(s) seguinte(s) campo(s) nessa ordem:   **1.** Um painel denominado "Polo Ativo" e dentro desse painel deve ser exibida uma tabela (ou *grid*) contendo a lista de todas as partes (independente da situação) do 'polo ativo' do processo judicial em questão ou da respectiva remessa (caso a remessa já tenha sido preparada).   **2.** Um painel denominado "Polo Passivo" e dentro desse painel deve ser exibida uma tabela (ou *grid*) contendo a lista de todos as partes (independente da situação) do 'polo passivo' do processo judicial em questão ou da respectiva remessa (caso a remessa já tenha sido preparada).   **3.** Formatações das tabelas que exibem as partes:   **\-** Não permitem edição dos dados da parte, apenas permitem exclusão de uma parte do polo ativo por meio do ícone "Excluir registro" (que deverá estar disponível para excluir a parte que for selecionada).   **\-** Os dados da parte, tanto no Polo Ativo quanto no Polo Passivo, que deverão ser exibidos: nome completo da parte, documento (cpf ou cnpj ou, caso exista, o documento que foi informado no cadastro da parte no cadastro do processo), descrição do tipo da parte (esse tipo deve estar compatível com o tipo definido na classe judicial escolhida previamente, essa classe diz respeito ao campo "Classe Judicial" explicado na regra RI5).   **\-** Caso a parte seja representante de alguma outra parte, o nome dessa parte deve ser exibido com tabulação à esquerda.   **\-** A exibição das partes no *grid* é semelhante à exibição das partes no Cadastro do Processo, a única diferença é que não contém o ícone de exibição da parte somente o ícone "Excluir registro".   **\-** A imagem ![PartesRemessa!](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-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 "ParteRemessa") exemplifica a formatação.   **4.** Um botão denominado "Inverter polo" cuja operação é definida pela regra RN491 e a inversão deverá ser exibida nos *grids* correspondentes aos polos, ativo e passivo.   **5.** Um botão denominado "Duplicar" cuja operação é definida pela regra RN336 e a duplicação deverá ser exibida nos *grids* correspondentes aos polos, ativo e passivo.   **6.** Um painel denominado "Outros interessados" e dentro desse painel deve ser exibida uma tabela (ou *grid*) contendo a lista de todas as partes (independente da situação) que compõem o polo 'outros participantes' (ou terceiros interessados) do processo judicial em questão ou da respectiva remessa (caso a remessa já tenha sido preparada). Essa tabela não permite edição, somente permite a escolha de uma parte em "Outros interessados" para participar de um dos polos, ativo ou passivo. A tabela é formatada com colunas organizadas nessa ordem:   **\-** coluna "Nome da parte" responsável por exibir o nome completo junto com seu respectivo documento (CPF, CNPJ, outros). Caso a parte seja representante de alguma outra parte, o nome dessa parte deve ser exibido com tabulação à esquerda.   **\-** coluna "Tipo da parte" responsável por exibir a descrição do tipo de parte.   **\-** coluna "Participar no Polo" responsável por exibir dois botões de ação denominados, respectivamente, "Ativo" e "Passivo". A ação do botão "Ativo" é responsável por transferir a parte em questão para o polo do painel "Polo Ativo". E a ação do botão "Passivo" é responsável por transferir a parte em questão para o polo do painel "Polo Passivo".   **7.** Caso não tenham partes no painel "Outros interessados", deve-se exibir no cabeçalho do painel "Outros interessados" a informação "Não existem partes cadastradas a 'Outros Interessados'." | Funcionalidade(s):   Preparar remessa para o 2º grau.   Casos de teste:   PJe-846. |

## RI23

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Nome do dispositivo (apelido) | O campo "Nome do dispositivo (apelido)" deverá ser apresentado no painel de cadastro do "Dispositivo da norma" e no painel "Pesquisar dispositivo".   No painel de pesquisa (pesquisar dispositivo), o campo deverá ser utilizado como parâmetro de busca para os registros de dispositivos da norma. | Manual de referência - Norma penal. |

## RI24

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Seleciona todos os itens. | O sistema deverá apresentar uma opção “TODOS”, no topo da lista, para que todos os itens sejam selecionados.   Se os itens da lista não estiverem selecionados, o sistema deve marcar todos os itens.   Caso os itens já estejam com o check marcado, ao clicar na opção o sistema deve desmarcar todos os itens. | PJE\_UC009;   PJE\_UC012;   PJE\_UC013;   PJE\_UC014;   PJE\_UC016;   PJE\_UC023;   PJE\_UC026;   PJE\_UC027;   PJE\_UC036;   PJE\_UC042;   PJE\_UC043;   PJE\_UC045;   PJE\_UC046;   PJE\_UC057;   PJE\_UC077.      Funcionalidades:   IPC do tipo indiciamento.   IPC do tipo oferecimento da denúncia.   IPC do tipo aditamento da denúncia.   IPC do tipo aditamento da queixa.   IPC do tipo atribuição de autoria dos fatos.   IPC do tipo queixa   IPC do tipo recebimento da denúncia.   IPC do tipo atribuição de autoria de fatos. |

## RI25

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Classe judicial no cadastro de processo. | O sistema deve recuperar o nome de todas as classes judiciais ordenados em ordem   alfabética e obedecendo a regra de configuração das classes conforme pertinência, ou seja,   RN402 para protocolo de processos e RN403 para o protocolo de processos incidentais. | Funcionalidades:   Seleção de classes no cadastro de processo;   Seleção de classes no cadastro de processo incidental |

## RI26

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Prazo mínimo para medida de segurança. | O campo "Mês" deverá ser desabilitado caso seja informado o prazo de 3 anos. | PJE\_UC023;   PJE\_UC034. |

## RI27

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data de término. | O campo "Data de término" somente será apresentado quando a situação da condição for informada como cumprido. | PJE\_UC028 |

## RI28

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Aba acompanhar transação penal. | Na inclusão ou edição a aba "Acompanhar transação penal" aparece junto com a aba "Formulário". | PJE\_UC027 |

## RI29

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Réu. | Após selecionar um réu, caso o réu possua mais de uma sentença, o sistema apresentará uma lista em modal panel. | PJE\_UC029;   PJE\_UC030;   PJE\_UC032;   PJE\_UC034;   PJE\_UC035;   PJE\_UC037. |

## RI30

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Situação | No campo “Situação” deverá conter, além do(s) domínio(s), o valor igual a “Todos” e este valor ficará como default. | PJE\_UC031.   Funcionalidades:   Tipo de suspensão   Tipo de Pena   Casos de teste:   PJe-744. |

## RI31

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Prazo para suspensão? | Poderá ser selecionado mais de um valor do domínio. | PJE\_UC031. |

## RI32

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista de condições para a suspensão? | Se o valor da condição “Lista de Condições para a Suspensão?”   for igual a "SIM”, então será habilitada a aba “Condições para suspensão”. | PJE\_UC031. |

## RI33

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Acompanhamento da suspensão. | O tipo de suspensão escolhida possui parâmetros que   informam se habilitará ou não a aba “Acompanhar de Suspensão”. | PJE\_UC031;   PJE\_UC026 |

## RI34

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campos ocultos da suspensão do processo. | Os campos: “Prazo para Suspensão”, “Data Prevista para Término” e “Lista de Condições”,   estarão visíveis conforme o tipo de suspensão selecionado (conforme parâmetros cadastrados no tipo de suspensão selecionado). | PJE\_UC026 |

## RI35

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Situação da tarefa. | O valor default da "Situação das tarefas" da suspensão deve ser igual a “Em Andamento”. | PJE\_UC033. |

## RI36

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campos do atributo "Quantidade de dias multa". | Os campos: “Qtde. de dias”, “Valor do dia multa em frações do salário mínimo”,   “Multiplicador”, “Valor histórico previsto” estarão visíveis se no cadastro   Tipo Pena o campo: “Quantidade de dias multa” for igual a “SIM”. | PJE\_UC027;   PJE\_UC039;   PJE\_UC040. |

## RI37

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campos do atributo Valor. | Os campos: “Unidade monetária”, “Valor” estarão visíveis se no cadastro "Tipo pena" o campo: “Valor” for igual a “SIM”. | PJE\_UC027;   PJE\_UC039;   PJE\_UC040. |

## RI38

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo multa. | Se no cadastro do caso de uso PJE\_UC003 - Manter tipos de pena, ambos os campos: “Valor”,   “Quantidade de dias multa” for igual a “SIM”, deverá ser habilitada os campos: “Dias multa/valor”. | PJE\_UC027;   PJE\_UC039;   PJE\_UC040. |

## RI39

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tarefas das condições. | O sistema deverá listar sequencialmente todas as tarefas da condição na aba de "Acompanhamento da transação penal". | PJE\_UC028 |

## RI40

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Dados de cadastro da suspensão. | Os campos: "Data da suspensão", "Tipo da suspensão" e "Data de término da suspensão" devem ter   os dados recuperados e apresentados na tela apenas após a seleção de um réu. |  |

## RI41

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pena. | O campo "Pena" deverá recuperar e apresentar de forma concatenada o "Gênero" e "Espécie da pena". | PJE\_UC039;   PJE\_UC040. |

## RI42

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campos do atributo "Delito". | Os campos: "Data do delito", "Delito", "Qtd. de incidência" serão apresentado caso a pena seja "Por delito".   Os campos: “Delito agrupados", "Concurso do crime” serão apresentado caso a pena seja "Por crime agrupado". | PJE\_UC037 |

## RI43

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regime. | O campo "Regime" somente será apresentado quando o tipo de pena for do tipo “Privativa de liberdade”. | PJE\_UC040 |

## RI44

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data inicial da vigência. | Deve ser carregado com o mesmo valor (data) informado pelo usuário no caso de uso   PJE\_UC001 - Manter norma penal, no campo “Data inicial da vigência da norma. Deve continuar editável. | PJE\_UC002 |

## RI45

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Permitir seleção múltipla. | Deve ser habilitado quando o usuário selecionar “Norma de extensão” ou “Tipo penal”   no campo “Uso do dispositivo” e desabilitado quando o usuário selecionar “Nenhum dos tipos”. | PJE\_UC002 |

## RI46

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Assunto. | Deve listar todos os “Assuntos” da tabela do SGT.   O usuário pode vincular apenas um assunto.   Se o campo “Uso do dispositivo” for “Tipo penal” o preenchimento do campo “Assunto” é obrigatório. Se não, o preenchimento é facultativo.   Deve ser apresentado o “Código” e “Nome” dos assuntos, conforme tabela SGT. | PJE\_UC002 |

## RI47

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Uso do dispositivo. | Valor default: Nenhum dos tipos. | PJE\_UC002 |

## RI48

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pena individualizada cadastrada | O sistema deverá recuperar e apresentar a lista de pena individualizada   cadastrada de acordo com os "Gênero" e "Espécie de pena" informada. | PJE\_UC040 |

## RI49

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de pena. | Deverá recuperar se a pena definitiva é original ou uma pena substitutiva. | PJE\_UC040 |

## RI50

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pena após substituição. | Caso exista pena substitutiva então será habilitada a aba “Após substituição”. | PJE\_UC040 |

## RI51

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Procedimento de origem. | A informação deve ser recuperada do cadastro do processo | PJE\_UC060 |

## RI52

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Assunto do delito principal. | O sistema deve recuperar todos os assuntos vinculados aos delitos listados   na última tipificação cadastrada para o processo. E todos os assuntos vinculados ao processo. | PJE\_UC060 |

## RI53

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data do delito principal. | Este campo é de preenchimento obrigatório, mas caso o campo   “Data do delito desconhecida” seja marcado, ele deixar de ser obrigatório. | PJE\_UC060 |

## RI54

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Assunto do delito principal. | Conforme assuntos listados (RN156), o sistema deve marcar como sendo o assunto do delito principal:   **\-** Assuntos recuperados da última ICR com tipificação de delito vinculada à parte: o sistema deve assinalar como assunto do delito principal, o assunto que tiver o delito associado com maior pena prevista (pena máxima – cadastro legislação penal).   **\-** Processo sem ICR com tipificação vinculada à parte, o sistema recupera todos os assuntos associados ao processo: o sistema deve assinalar como assunto do delito principal, o assunto principal selecionado no cadastro do processo. | PJE\_UC059;   PJE\_UC060;   PJE\_UC062. |

## RI55

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Causa da absolvição sumária. | Quando for selecionado o valor “extinta a punibilidade do agente” deverá ser habilitado o campo “Tipo da extinção da punibilidade” | PJE\_UC044 |

## RI56

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Mandado com publicidade restrita. | Se a opção “Mandado com publicidade restrita” for selecionado,   o sistema deve marcar automaticamente a opção “Solicitar sigilo?” na aba “Finalização” | PJE\_UC059;   PJE\_UC060;   PJE\_UC062. |

## RI57

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Documento. | O sistema deve recuperar os dados do documento, conforme “Modelo do documento” selecionado | PJE\_UC059;   PJE\_UC060;   PJE\_UC061;   PJE\_UC062. |

## RI58

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Número do mandado. | Este campo deve ser carregado com o "Número do mandado de prisão" que esteja cumprido.   Este campo é referente ao réu e ao número de "Mandado de prisão" que estão vinculados ao "Contramandado de prisão" ou "Alvará de soltura", quando for o caso.   Caso exista mais de um número de "Mandado de prisão" vinculado, o sistema de exibir uma combo box com a lista. | PJE\_UC061;   PJE\_UC062. |

## RI59

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Mandado de prisão;   Alvará de soltura;   Contramandado. | Após ser gravado o documento o sistema deve recuperar o número do documento gerado na coluna “Número do ”.   Também deve ser exibido um check de confirmação do cadastro na coluna “Ações” | PJE\_UC059;   PJE\_UC063;   PJE\_UC064. |

## RI60

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Detalhes da pena total. | O sistema deverá recuperar e apresentar as informações pertinentes à pena total cadastrada. Os valores exibidos no Grid   deverão ser os mesmos atributos cadastrados no caso de uso PJE\_UC003 - Manter tipos de pena, e informados no cadastro da Penal total. | PJE\_UC040 |

## RI61

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Copiar dados. | O ícone para copiar dados de um documento para outro, só poderá ser exibido   na frente do documento que tive com os dados já preenchidos (documento gerado) | PJE\_UC059;   PJE\_UC060;   PJE\_UC061;   PJE\_UC062;   PJE\_UC063;   PJE\_UC064. |

## RI62

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Situação do documento. | O sistema deve mudar a “Situação” interna do documento para “Enviado para assinatura”. | PJE\_UC059;   PJE\_UC060;   PJE\_UC061;   PJE\_UC062;   PJE\_UC063;   PJE\_UC064; |

## RI63

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Informar cumprimento do alvará / mandado. | Se o documento possui a situação “Pendente de cumprimento”, o botão “Informar cumprimento do alvará” deve ser apresentado.   Deve ser observado qual o tipo de documento que será cumprido, para "Mandado de prisão" o botão deverá ter o nome “Informar cumprimento de mandado”. | PJE\_UC065;   PJE\_UC066. |

## RI64

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Não é permitido edição do campo. | O sistema não deve permitir que o usuário altere os dados recuperados. | PJE\_UC065 |

## RI65

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Dados. | O sistema deve recuperar os dados do campo: Número do documento, Nome da parte,   Documento de identificação da parte, Classe judicial e Órgão julgador, conforme processo e documento selecionado anteriormente | PJE\_UC065:   PJE\_UC067. |

## RI66

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Órgão julgador colegiado. | Recuperar o nome de todos os órgãos julgadores colegiados ordenados   em ordem alfabética que estão ativos e que pertencem à jurisdição em questão. | Funcionalidades:   aba "Dados Iniciais" (Cadastro de Processo Incidente). |

## RI67

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| UF. | Devem ser listados todos os estados do Brasil. | PJE\_UC065 |

## RI68

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Cidade. | Conforme “UF” selecionada, o sistema deve recuperar a lista de “Cidade” | PJE\_UC065 |

## RI69

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Estabelecimento Prisional. | Conforme “Cidade” selecionada, o sistema deve recuperar a lista de “Estabelecimento Prisional” | PJE\_UC065:   PJE\_UC075. |

## RI70

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pesquisar movimentação processual. | O sistema deve listar apenas as movimentações processuais vinculadas ao processo do documento que está sendo cumprido | PJE\_UC065;   PJE\_UC066. |

## RI71

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Alvará cumprido com ou sem soltura. | O sistema deve marcar como default a opção “Cumprido com soltura”. | PJE\_UC066 |

## RI72

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Órgão julgador | Recuperar o nome de todos os órgãos julgadores ordenados em ordem alfabética que estão ativos e que pertencem à jurisdição em questão. | Funcionalidades:   aba "Dados Iniciais" (Cadastro de Processo Incidente);   Associar processos (aba "Formulário")   Casos de teste:   PJe-593 |

## RI73

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Classe Judicial   \[REVISAR\_REGRA\] | Esse campo será utilizado em dois momentos, onde:   1° - O sistema deve recuperar o nome de todas as classes judiciais ativas que foram cadastradas em "Configuração → Tabelas judiciais → Classe judicial → Classe judicial", listadas em ordem alfabética.   2°- Ao protocolizar o processo, esse campo deverá retornar a classe escolhida nos dados iniciais. | Funcionalidades:   Cadastro de processo (aba "Dados iniciais");   Cadastro de processo jus postulandi (aba "Dados iniciais");   Cadastro de processo (aba "Processo");   Associar processos   Casos de teste:   PJe-451;   PJe-629 |

## RI74

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campo Classe Judicial   (Cadastro de processo com Jus postulandi)   \[REVISAR\_REGRA\] | O sistema deve recuperar o nome de todas as classes judiciais que foram cadastradas em "Configuração → Tabelas judiciais → Classe judicial → Classe judicial", listadas em ordem alfabética.   O campo "Processo referência" deverá ser apresentado no cadastro do processo se:   **\-** Estiver selecionado como obrigatório ou facultativo, na funcionalidade "Classe judicial".   Se no cadastro da classe judicial o campo "Processo referência" for selecionado como "Não exigir", ele não deverá ser apresentado na funcionalidade de "Cadastro de processo". | Funcionalidades:   Cadastro de processo com Jus postulandi |

## RI75

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Seção/Subseção \[do Cadastro de processo incidente/do Cadastro de processo Jus Postulandi\]. | Recuperar o nome de todas as jurisdições ativas ordenados em ordem alfabética. | Funcionalidades:   aba "Dados Iniciais" (Cadastro de processo incidente);   aba "Dados Iniciais" (Cadastro de processo com Jus Postulandi). |

## RI76

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Processo referência   \[REVISAR\_REGRA\] | O campo "Processo referência" deverá ser apresentado no cadastro do processo se:   **\-** Estiver selecionado como obrigatório ou facultativo, na funcionalidade "Classe judicial".   Se no cadastro da classe judicial o campo "Processo referência" for selecionado como "Não exigir", ele não deverá ser apresentado nas funcionalidades de "Cadastro de processo" e de "Cadastro de processo jus postulandi". | Funcionalidades:   Cadastro de processo (aba "Dados iniciais");   Cadastro de processo jus postulandi (aba "Dados iniciais") |

## RI77

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campo Profissão   \[REVISAR\_REGRA\] | O campo profissão deve retornar os dados cadastrado em "Configuração → Tabelas básicas → Profissão (CBO)".   Todos os dados cadastrados devem ser apresentados em ordem alfabética. | Funcionalidades:   Cadastro de processo (aba "Partes") |

## RI78

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Justificativa do motivo de encerramento da suspensão. | O campo Justificativa do motivo de encerramento da suspensão somente será   apresentado caso o “Motivo de encerramento da suspensão” seja outros. | PJE\_UC038 |

## RI79

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar data da movimentação. | O sistema deve recuperar a “Data da movimentação” nos campos “Data da sentença (ou decisão)” e “Data da publicação” | PJE\_UC022;   PJE\_UC023;   PJE\_UC024;   PJE\_UC027;   PJE\_UC030;   PJE\_UC032;   PJE\_UC034;   PJE\_UC035;   PJE\_UC045;   PJE\_UC046; |

## RI80

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar os réus da tela de sentença condenatória. | O sistema deve recuperar os réus cadastrados na tela do caso de uso PJE\_UC036 - Cadastrar sentença condenatória. | PJE\_UC039 |

## RI81

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar os delitos da sentença condenatória. | O sistema deverá recuperar e exibir a lista de todos os delitos cadastrados na aba de tipificação do delito da sentença condenatória. | PJE\_UC039 |

## RI82

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campos associados a cada medida cautelar diversa da prisão. | O sistema deverá apresentar os campos de acordo com a medida cautelar escolhida. | PJE\_UC057 |

| Medida cautelar diversa da prisão | Campos a serem apresentados |
| --- | --- |
| “Art. 319, I - comparecimento periódico em juízo, no prazo e nas condições fixadas pelo juiz, para informar e justificar atividades”; | \*Prazo (ano, mês e dia)   \*Frequência   \*Condição   \*Observação |
| “Art. 319, II - proibição de acesso ou freqüência a determinados lugares quando, por circunstâncias relacionadas ao fato, deva o indiciado ou acusado permanecer distante desses locais para evitar o risco de novas infrações”; | \*Tipo de Local   \*Flag para informar a necessidade de especificar um determinado local   \*Observação |
| “Art. 319, III - proibição de manter contato com pessoa determinada quando, por circunstâncias relacionadas ao fato, deva o indiciado ou acusado dela permanecer distante”; | \*Pessoa de quem deve manter-se afastada   \*Distância mínima de afastamento ou máxima de aproximação (por pessoa)   Observação |
| “Art. 319, IV - proibição de ausentar-se da Comarca quando a permanência seja conveniente ou necessária para a investigação ou instrução”; | Observação |
| “Art. 319, V - recolhimento domiciliar no período noturno e nos dias de folga quando o investigado ou acusado tenha residência e trabalho fixos”; | \*Horário de recolhimento ao domicilio   Observação |
| “Art. 319, VI - suspensão do exercício de função pública ou de atividade de natureza econômica ou financeira quando houver justo receio de sua utilização para a prática de infrações penais”; | \*Descrição das funções e atividade vedadas   Observação |
| “Art. 319, VII - internação provisória do acusado nas hipóteses de crimes praticados com violência ou grave ameaça, quando os peritos concluírem ser inimputável ou semi-imputável (art. 26 do Código Penal) e houver risco de reiteração”; | \*Prazo (ano, mês e dia)   \*Estabelecimento Prisional   Observação |
| “Art. 319, VIII - fiança, nas infrações que a admitem, para assegurar o comparecimento a atos do processo, evitar a obstrução do seu andamento ou em caso de resistência injustificada à ordem judicial”; | \*Valor   \*Autoridade concedeu fiança   \*Paga a fiança   Espécie de bem   Local do deposito do bem   Observação |
| “Art. 319, IX - monitoração eletrônica”; | Observação |
| “Art. 320 - A proibição de ausentar-se do País será comunicada pelo juiz às autoridades encarregadas de fiscalizar as saídas do território nacional, intimando-se o indiciado ou acusado para entregar o passaporte, no prazo de 24 horas”; | \*Passaporte entregue   Observação |

## RI83

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exibir campo de local específico. | Ao marcar o campo “Local específico” o sistema deverá habilitar o campo “Descrição do local específico”. | PJE\_UC057 |

## RI84

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Máscara de hora. | O sistema deverá apresentar o campo com a máscara HH:MM. | PJE\_UC057 |

## RI85

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Apresentação do campo “Data do 1º comparecimento”. | O campo “Data do 1º comparecimento” será apresentado caso o ator vincule a medida cautelar   “Art. 319, I - comparecimento periódico em juízo, no prazo e nas condições fixadas pelo juiz, para informar e justificar atividades” |  |

## RI86

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Acompanhamento da “Art. 319, I - comparecimento periódico em juízo,   no prazo e nas condições fixadas pelo juiz, para informar e justificar atividades”. | Caso o ator associe a medida “Art. 319, I - comparecimento periódico em juízo, no prazo e nas condições fixadas pelo juiz,   para informar e justificar atividades”, ao gravar, o sistema deverá apresentar a aba “Acompanhar comparecimento periódico em juízo”. | PJE\_UC057 |

## RI87

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperar e apresentar os campos do “acréscimo de pena” na pena individualizada. | O campo "Acréscimo" de pena deve ser apresentado, quando o delito da pena individualizado tenha sido   definido como concurso de crime (Concurso formal/ Crime continuado). | PJE\_UC039 |

## RI88

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da aba "Visualizar Último Despacho"   da tarefa que prepara remessa de manifestação processual   para envio ao 2º grau. | A aba "Visualizar Último Despacho" deve conter o(s) seguinte(s) comportamento(s):   **\-** Caso exista, exibir o último documento do tipo "despacho" anexado ao processo judicial em questão; os dados a serem exibidos do documento são: descrição do documento, identificador (id) do documento, identificador (id) do último usuário que alterou o documento e data de inclusão do documento no processo.   **\-** Caso não exista nenhum último documento do tipo "despacho", deverá ser exibido a mensagem MN195 no espaço disponível da aba "Visualizar Último Despacho". | Funcionalidade(s):   Preparar remessa para o 2º grau.   Casos de teste:   PJe-846. |

## RI89

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Número seqüencial da tarefa da condição de suspensão. | O sistema deverá gerar um seqüencial numérico para o número de tarefas da condição de suspensão do processo. | PJE\_UC033 |

## RI90

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data do trânsito em julgado. | O preenchimento dos campos de trânsito julgado é facultativo. Caso algum campo do painel de trânsito julgado   tenha sido informado o sistema deverá torna obrigatório o preenchimento de todos os campos. | PJE\_UC025 |

## RI91

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campos associados a cada medida de urgência que obriga o agressor. | O sistema deverá apresentar os campos de acordo com a medida protetiva de urgência vinculada | PJE\_UC069 |

| Medida protetiva de urgência | Campos a serem apresentados |
| --- | --- |
| "Art. 22, I - suspensão da posse ou restrição do porte de armas, com comunicação ao órgão competente, nos termos da Lei nº 10.826/2003;" | \*Número de identificação do documento de porte   Observação |
| "Art. 22, II - afastamento do lar, domicílio ou local de convivência com a ofendida;" | \*Identificação da ofendida   Observação |
| "Art. 22, III, a) proibição de aproximação da ofendida, de seus familiares e das testemunhas, fixando o limite mínimo de distância entre estes e o agressor;" | \*Pessoa de quem deve manter-se afastada   \*Distância   Observação |
| "Art. 22, III, b) proibição de contato com a ofendida, seus familiares e testemunhas por qualquer meio de comunicação;" | \*Identificação da ofendida   Observação |
| "Art. 22, III, c) proibição de frequência de determinados lugares a fim de preservar a integridade física e psicológica da ofendida;" | \*Tipo de Local   Flag Local Específico   Descrição do Local Específico   Observação |
| "Art. 22, IV - restrição ou suspensão de visitas aos dependentes menores, ouvida a equipe de atendimento multidisciplinar ou serviço similar;" | \*Observação |
| "Art. 22, V - prestação de alimentos provisionais ou provisórios." | \*Favorecidos   \*Valor   Observação |
| "Art. 22, § 1º - Outras Medidas" | \*Descrição da medida   Observação |

## RI92

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| CPF. | O CPF deverá ser apresentado no formato: 999.999.999-99. | PJE\_UC064;   Pesquisar processo.;   Novo processo;   Novo processo incidental;   Novo processo com Jus Postulandi |

## RI93

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Remover pessoa da “Lista de pessoas com as quais o réu não deve manter contato” e acrescentar na lista “Pessoas participantes do processo” | Ao remover a pessoa da lista “Lista de pessoas com as quais o réu não deve manter contato” e, se a pessoa removida tiver vínculo ao processo, será acrescentada a lista “Pessoas participantes do processo”. Se a pessoa não possuir vínculo ao processo (polo/ testemunha/ vítima/ etc), será apenas removida da lista. | PJE\_UC069 |

## RI94

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Carregar primeira pessoa física da lista. | Caso a lista não esteja vazia, ao apresentar a tela, o sistema deverá carregar as informações da primeira pessoa da lista. | PJE\_UC069 |

## RI95

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Detalhes da pessoa física selecionada. | Ao selecionar uma pessoa da lista, o sistema carregará as informações, em modo de leitura, do cadastro de pessoas.   (O sistema deverá usar a funcionalidade de detalhe da pessoa física do caso de uso PJE\_UC070 - Cadastrar pessoa) | PJE\_UC069 |

## RI96

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data Desconhecida. | Ao selecionar o campo “Data desconhecida”, o campo “Data do delito” deve ser desabilitado. | PJE\_UC011 |

## RI97

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Delito. | A norma nunca poderá ser selecionada, apenas os dispositivos que possuem a característica de uso de dispositivo como tipo penal | PJE\_UC011 |

## RI98

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Dispositivo. | Caso o dispositivo tenha a característica de seleção múltipla, ele pode ser selecionado junto a um dispositivo do mesmo nível.   Por exemplo: dois artigos ou duas alíneas podem ser selecionados juntos para o mesmo delito. | PJE\_UC011 |

## RI99

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Composição do texto a ser apresentado no campo “Delito”. | No inicio deve ser apresentado os dados do dispositivo da norma, na seguinte ordem: Símbolo do artigo, Identificador do artigo, Símbolo do parágrafo, Identificador do parágrafo, Inciso, Alínea, Parte, Item...   No final deve ser apresentado os dados da norma, com as seguintes regras:   **\-** Se tem sigla – apresenta só os dados da sigla;   **\-** Se não tem sigla, mas tem o nome – apresenta só o nome;   **\-** Se não tem sigla e não tem o nome – apresenta o “Tipo” e o “Número”;   Exemplo: Art. 121, § 2º, I, II e III do CP | PJE\_UC011 |

## RI100

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Combinação. | A norma nunca poderá ser selecionada, apenas os dispositivos que possuem a característica de uso de dispositivo como norma de extensão | PJE\_UC011 |

## RI101

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Composição do texto a ser apresentada no campo “Combinação”. | No inicio deve ser apresentado os dados do dispositivo da norma, na seguinte ordem: Símbolo do artigo, Identificador do artigo, Símbolo do parágrafo, Identificador do parágrafo, Inciso, Alínea, Parte, Item...   No final deve ser apresentado os dados da norma, com as seguintes regras:   **\-** Se tem sigla – apresenta só os dados da sigla;   **\-** Se não tem sigla, mas tem o nome – apresenta só o nome;   **\-** Se não tem sigla e não tem o nome – apresenta o “Tipo” e o “Número”;   O primeiro registro apresentado deve apresentar a frase: `Combinado com <texto-do-dispositivo> `. Os registros seguintes devem apresentar a frase: `e com <texto-do-dispositivo>`   Exemplo:   Combinado com Art. 121, § 2º, I, II e III do CP   e com Art. 122, § 5º, I do CP | PJE\_UC011 |

## RI102

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Composição do texto a ser apresentado na aba “Visualizar tipificação completa”. | Código do Delito - O sistema deve recuperar o código do delito adicionado (entre parêntese)   Delito adicionado - O sistema apresenta os dados dos delitos (art, parágrafo, inciso, alínea.... (conforme RI099))   Combinações - O sistema deve recuperar todas as combinações   Qtd de incidências - O sistema apresenta o número de incidências (acompanhado da palavra "VEZ" ou "VEZES")   "Tentado" ou "Consumado" - Conforme informação do delito (entre parêntese)   Concurso de crime - Caso o delito seja agrupado com outro delito ou sozinho, o sistema apresentar a informação do tipo de concurso;   Crime continuado - Caso o crime seja continuado, na visualização completa o sistema deve apresentar o texto "em continuidade delitiva"   No final da visualização deve apresentar o texto "em concurso material" para o caso de apenas um delito, e "todos em concurso material" para mais delitos. | PJE\_UC011 |

## RI103

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista de característica de causas e efeitos na ICR. | O sistema deverá recuperar a lista de característica de causa e efeito de acordo com o tipo de efeito selecionado: | PJE\_UC072 |

| Característica de causas e efeitos cadastrados | Campos a serem apresentados na lista |
| --- | --- |
| Efeito sobre a parte no processo | "Ativa", "Inativa", "Suspender", "Nenhum". |
| Efeito sobre o controle de pena/prisão | "Nenhum", "Inicia / Reiniciar controle", "Encerra controle". |
| Efeito sobre a prescrição | "Nenhum", "Inicia contagem de prazo", "Suspende contagem de prazo", "Interrompe contagem de prazo", "Reinicia contagem de prazo". |

## RI104

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da janela responsável pela tarefa que prepara a **baixa** de manifestação processual para envio à instância de origem. | Comportamento da janela responsável pela tarefa que prepara a baixa de manifestação processual para envio à instância de origem:   **\-** Uma caixa de combinação (*comboBox*) denominada "Motivo da remessa", essa caixa é carregada com as descrições dos elementos do domínio de complemento **motivo\_da\_remessa** por meio de um evento configurado conforme definido por uma das etapas da configuração de preparação da baixa. É obrigatório escolher um motivo da remessa.   **\-** Exibir um botão denominado **"Retornar para instância de origem"** responsável por enviar a **baixa** para a instância de origem somente se as restrições de negócio forem obedecidas com sucesso conforme rege a regra RN494.   Caso a baixa tenha sido enviada com sucesso, as regras RN512 e RN550 (no que diz respeito à baixa de processo) devem ser atendidas e a mensagem MN213 deve ser exibida.   O sistema registra o alerta "Processo enviado à instância inferior." vinculado ao processo judicial em questão e, ao entregar a baixa na instância de origem, o sistema também registra o alerta "Processo recebido da instância superior.".   **Por padrão**, a baixa não pode modificar os dados do processo judicial originário (isto é, processo que deu origem à baixa em questão e que foi protocolado na instância inferior) conforme regra RN329. | Funcionalidade(s): Preparar remessa.   Casos de teste:   PJe-851. |

## RI105

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Situação da causa e efeito. | Na Pesquisa de causa e efeito o campo “Situação” deverá conter, além do domínio, o valor igual a “Todos” e este valor ficará como default. Caso nenhum tipo de situação seja informado o sistema terá que recuperar as causas e efeitos de todas as situações. | PJE\_UC073 |

## RI106

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Valor histórico previsto. | O sistema deve realizar o seguinte cálculo:   • (valor histórico previsto x valor do salário mínimo (salário mínimo ativo para a data do delito)) x Qtd. de dias/multa x multiplicador | PJE\_UC039 |

## RI107

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Classificação da falta. | Ao selecionar a opção “Grave”, o sistema deve apresentar os campos “Detalhe da falta”, “Detalhes da falta adicionada”,   “Efeito sobre a falta (‘Perda de dias remidos e Interrupção do prazo de benefícios)” e o botão “Adicionar”, conforme protótipo. | PJE\_UC073 |

## RI108

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Detalhes da falta. | Ao selecionar a opção “Outros...”, o sistema deve apresentar o campo “Descrever falta” | PJE\_UC073 |

## RI109

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Detalhes da falta adicionada. | Este campo deve apresentar o mesmo valor selecionado no campo “Detalhes da falta”.   Caso o valor selecionado seja “Ouros...”, este campo deve receber o valor informado no campo “Descrever falta” | PJE\_UC073 |

## RI110

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Perda dos dias remidos. | Ao selecionar este campo, o sistema deve apresentar os campos “Quantidade de dias remidos” e “Quantidade de dias revogados”.   Ao selecionar este campo, a informação dos campos “Quantidade de dias remidos” e “Quantidade de dias revogados” se torna obrigatória | PJE\_UC073 |

## RI111

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Interrupção do prazo de benefícios. | Ao selecionar este campo, o sistema deve apresentar o campo “Data base referente ao efeito selecionado” | PJE\_UC073 |

## RI112

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Quantidade de dias remidos. | Este campo apresenta um somatório da quantidade de dias remidos. Os dias remidos estão presentes em todas as ICRs de remissão, dessa forma, deve-se verificar em todas estas ICRs o campo “Quantidade de dias remidos”, somá-lo e apresentar ao usuário. Neste caso, o usuário não pode editar o valor apresentado.   Caso o usuário deseje cadastrar uma ICR de falta sem anteriormente cadastrar uma ICR de remissão, este campo torna-se editável. | PJE\_UC073 |

## RI113

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data base referente ao efeito selecionado. | Este campo só será exibido caso o usuário selecione o campo “Interrupção do prazo de benefícios” e sua informação torna-se obrigatória.   Este campo deve apresenta o mesmo valor do campo “Data da falta”, mas o usuário pode editá-lo. | PJE\_UC073 |

## RI114

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Dados do processo. | Os campos recuperados para o painel “Dados do processo” serão apresentados de acordo com o tipo de processo selecionado: | PJE\_UC019 |

| Tipo de processo | Campos a serem apresentados no painel de processo |
| --- | --- |
| Processo da área de conhecimento | "Número do processo", "Data da autuação", "Data da distribuição", "Classe judicial", "Órgão julgador" |
| Processo da área de execução penal | "Número do processo", "Nome do réu", "Documento de identificação", "Regime" |

## RI115

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campos da pesquisa de informação criminal relevante. | O campo "Processo de lançamento" somente será apresentado caso o processo seja de execução penal. | PJE\_UC019 |

## RI116

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campos da pesquisa de informação criminal relevante. | O campo "Réu do processo" somente será apresentado caso o processo seja da área de conhecimento. | PJE\_UC019 |

## RI117

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Motivo da permissão de saída. | Caso seja selecionado o domínio “Outros” o sistema deverá permitir que o usuário descreva   em campo livre o motivo da "Permissão de saída". O sistema deverá habilitar o campo de texto livre. | PJE\_UC074 |

## RI118

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Novo regime. | Caso o valor apresentado no campo “Regime” seja “Fechado”, este campo deve apresentar os valores “Semi-aberto” e “Aberto”   Caso o valor apresentado no campo “Regime” seja “Semi-aberto”, este campo deve apresentar o valor “Aberto”. O campo deixa de ser do tipo radio button e passa a ser check box. | PJE\_UC075 |

## RI119

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Descrição de outros. | Caso o atributo “Outros” seja selecionado o campo de texto aberto será de preenchimento obrigatório. | PJE\_UC074;   PJE\_UC076;   PJE\_UC079. |

## RI120

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Réus da pendência de ICR. | O sistema deverá apresentar todos os nomes do polo passivo do processo, em ordem alfabética, juntamente com a opção “Selecionar todos (RI24)”. | PJE\_UC077 |

## RI121

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Seleção dos nomes do polo passivo da pendência de ICR. | O sistema deverá apresentar a tela com todos os nomes do polo passivo selecionados. | PJE\_UC077 |

## RI122

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Obrigatoriedade de seleção de, pelo menos, um nome do polo passivo. | O sistema deverá garantir que o ator selecione pelo menos um nome do polo passivo. | PJE\_UC077 |

## RI123

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pena total original. | Este campo deve apresentar um somatório do tempo original de penas do réu.   O tempo original da pena é encontrado em cada guia de recolhimento vinculada ao réu. | PJE\_UC082;   PJE\_UC083. |

## RI124

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Regime Original. | Este campo apresenta o regime original de cumprimento da pena do réu.   Ele é encontrado na primeira guia de recolhimento do réu. | PJE\_UC082;   PJE\_UC083. |

## RI125

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pena a cumprir. | Este campo apresenta o quanto tempo da pena ainda falta para o réu cumprir.   Para apresentar este campo deve ser subtraído o tempo de pena cumprida do tempo de pena total.   Pena a cumpri = Pena total original – Pena cumprida | PJE\_UC082;   PJE\_UC083. |

## RI126

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Selecione a guia de recolhimento. | Este campo lista todas as guias de recolhimento vinculadas ao réu. Caso uma guia de recolhimento   esteja listada no campo “Dados básicos da guia de recolhimento”, então não deve ser apresentada nesta lista. | PJE\_UC082. |

## RI127

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pena total resultante. | Este campo apresenta a soma da pena total original e pena total da guia.   Pena total resultante = Pena total original + Pena total da guia | PJE\_UC082;   PJE\_UC083. |

## RI128

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Resolver pendência de ICR. | A movimentação associada à pendência de ICR deverá ser apresentada na lista das movimentações associadas. | PJE\_UC086 |

## RI129

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Condições facultativas. | O sistema deverá recuperar as informações do caso de uso   PJE\_UC079 - Cadastrar livramento condicional, e no campo "Condições facultativas"   caso o valor recuperado seja “outras“ o sistema deverá recuperar e apresenta as informações digitadas no campo de texto livre. | PJE\_UC081 |

## RI130

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data de validade. | A data informada deve ser superior a data atual. | PJE\_UC059 |

## RI131

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Copiar de. | Este campo deve ser ordenado pela data que é apresentada na combo. | PJE\_UC011 |

## RI132

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Apresentar aba de tipificação. | O sistema deverá apresentar a aba de tipificação de acordo com o valor escolhido para o campo “Tipo de extinção de punibilidade” seguindo a regra da tabela abaixo: | PJE\_UC024;   PJE\_UC035 |

| Valores do campo para os quais a aba deve ser apresentada | Valores do campo para os quais a aba NÃO deve ser apresentada |
| --- | --- |
| Anistia, Graça ou Indulto   Pagamento integral do débito   Perdão judicial   Prescrição   Decadência   Perempção   Renúncia do queixoso ou Perdão aceito   Retratação do agente   Retroatividade de Lei | Cumprimento da pena   Cumprimento da suspensão condicional do processo   Morte do agente |

## RI133

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Modificação do nome do botão. | O sistema deverá modificar o nome do botão “incluir” para “próximo passo” de acordo com o valor escolhido para   o campo “Tipo de extinção de punibilidade” seguindo a regra da tabela abaixo: | PJE\_UC024;   PJE\_UC035 |

| Valores do campo para os quais o nome do botão deve ser modificado | Valores do campo para os quais o nome do botão NÃO deve ser modificado |
| --- | --- |
| Anistia, Graça ou Indulto   Pagamento integral do débito   Perdão judicial   Prescrição   Decadência   Perempção   Renúncia do queixoso ou Perdão aceito   Retratação do agente   Retroatividade de Lei | Cumprimento da pena   Cumprimento da suspensão condicional do processo   Morte do agente |

## RI134

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Seleciona todos os itens. | O sistema deverá apresentar uma opção “Marcar todos”, no topo da lista, para que todos os itens sejam selecionados.   Ao clicar nesta opção, se os itens da lista não estiverem selecionados, o sistema deve marcar todos os itens.   Caso os itens já estejam selecionados, ao clicar na opção, o sistema deve desmarcar todos os itens. | PJE\_INF\_UC006;   PJE\_INF\_UC008;   PJE\_INF\_UC009;   PJE\_INF\_UC010;   PJE\_INF\_UC012;   PJE\_INF\_UC013. |

## RI135

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Inabilitar alteração de "Privação de liberdade" já encerrada. | O sistema deverá desabilitar a edição de TODOS os campos da tela, caso a "Privação de liberdade" selecionada já esteja encerrada. | PJE\_INF\_UC001 |

## RI136

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Prazo da internação. | Este campo só será apresentado caso seja selecionada o valor “Internação sanção” para o campo “Natureza da privação de liberdade”.   Dessa forma, o campo “Prazo da Internação” tornar-se-á de preenchimento obrigatório. | PJE\_INF\_UC001 |

## RI137

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data da privação de liberdade;   Data da liberação;   Data da evasão;   Data do oferecimento de representação;   Data do aditamento de representação;   Data do recebimento de representação;   Data da transferência do adolescente. | A data informada deverá ser igual ou anterior a data atual. | PJE\_INF\_UC001;   PJE\_INF\_UC002;   PJE\_INF\_UC003;   PJE\_INF\_UC008;   PJE\_INF\_UC009;   PJE\_INF\_UC010. |

## RI138

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data da liberação   Data da evasão   Data da transferência do adolescente. | A data da liberação, evasão e transferência do adolescente não podem   ser anteriores à data da "Privação de liberdade" dele. | PJE\_INF\_UC001;   PJE\_INF\_UC002;   PJE\_INF\_UC003;   PJE\_INF\_UC004. |

## RI139

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campos obrigatórios. | Todos os campos obrigatórios devem ser preenchidos. | PJe:PJE\_INF\_UC001;   PJe:PJE\_INF\_UC002;   PJe:PJE\_INF\_UC003;   PJe:PJE\_INF\_UC004;   PJe:PJE\_INF\_UC006;   PJe:PJE\_INF\_UC007;   PJe:PJE\_INF\_UC008;   PJe:PJE\_INF\_UC009;   PJe:PJE\_INF\_UC010;   PJe:PJE\_INF\_UC012;   PJe:PJE\_INF\_UC013. |

## RI140

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data da privação de liberdade. | A data do encerramento da privação de liberdade do adolescente não pode ser anterior à da privação de liberdade. | PJE\_INF\_UC001 |

## RI141

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Encerramento da privação de liberdade (Preenchimento automático). | Ao cadastrar/alterar IPR de evasão ou de liberação de um adolescente do processo, o sistema deverá gravar na IPR de privação de liberdade:   •No campo “Data do encerramento”:   **\-** “Data da evasão”, no caso do cadastramento do IPR de evasão;   **\-** “Data da liberação”, no caso do cadastramento do IPR de liberação.   •No campo “Motivo de encerramento da privação de liberdade” a seguinte informação:   **\-** “Evasão”, no caso do cadastramento do IPR de evasão;   **\-** A descrição do campo “Tipo de Liberação” selecionado pelo ator, no caso do cadastramento de IPR de liberação. | PJE\_INF\_UC002;   PJE\_INF\_UC003. |

## RI142

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Adolescentes do processo. | O sistema deve listar apenas os adolescentes do processo que possuem uma privação de liberdade não encerrada. | PJE\_INF\_UC002;   PJE\_INF\_UC003. |

## RI143

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Máscara de data. | A data informada deverá ser apresentada no formato: 99/99/9999. | PJE\_INF\_UC001;   PJE\_INF\_UC002;   PJE\_INF\_UC003;   PJE\_INF\_UC004;   PJE\_INF\_UC008;   PJE\_INF\_UC009;   PJE\_INF\_UC010.      Funcionalidades   Cadastro de processo;   Cadastro de processo jus postulandi;   Cadastro de processo;   Tipo de suspensão;   Soltura;   Transferência do réu |

## RI144

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Unidade de internação. | A unidade de internação deve ser listada e ordenada por UF, cidade e estabelecimento. | PJE\_INF\_UC001;   PJE\_INF\_UC004. |

## RI145

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Adolescente(s) com privação de liberdade(s). | O sistema deverá listar todos os adolescentes do processo em questão, desde que:   • Estejam em privação de liberdade;   • Não tenham registro de privação de liberdade encerrada vinculada à última privação de liberdade;   • Não tenham registro de liberação da à última privação de liberdade;   • Não tenham registro de evasão vinculada à última privação de liberdade. | PJE\_INF\_UC005 |

## RI146

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| “Data da privação de liberdade”;   “Tipo da privação de liberdade”. | De acordo com o adolescente selecionado o sistema deverá recuperar as informações dos campos:   “Data da privação de liberdade”, “Natureza da privação de liberdade” da ultima IPR de privação de liberdade do adolescente. | PJE\_INF\_UC005 |

## RI147

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Unidade de internação. | Deverá ser carregada a última unidade de internação (ATUAL) no qual o adolescente selecionado se encontre.   A unidade de internação atual não será, necessariamente, o estabelecimento cadastrado na IPR de privação de liberdade,   podendo ser uma transferência do adolescente de estabelecimento para outro vinculado à mesma privação de liberdade.   A unidade de internação deve ser apresentada e por UF, cidade e estabelecimento. | PJE\_INF\_UC005 |

## RI148

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data da privação de liberdade;   Data da liberação;   Data da evasão;   Data do oferecimento de representação;   Data do recebimento de representação;   Data do aditamento de representação;   Data da sentença. | O campo deve ser carregado com a data da última movimentação. | PJE\_INF\_UC001;   PJE\_INF\_UC002;   PJE\_INF\_UC003;   PJE\_INF\_UC008;   PJE\_INF\_UC009;   PJE\_INF\_UC010;   PJE\_INF\_UC011;   PJE\_INF\_UC018. |

## RI149

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Adolescente no processo. | Recupera os adolescentes do processo que tiverem “Situação” igual a   “Ativo” ou diferente de “Suspenso”. | PJE\_INF\_UC006 |

## RI150

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Assuntos no cadastro de processo | Recuperar os assuntos em ordem alfabética pela descrição cujas classes judiciais desses assuntos   possuem órgãos julgadores ou órgãos julgadores colegiados com competência vigente   na juridisção em questão; não recuperar assuntos já vinculados ao processo em questão. | Funcionalidades:   Cadastro de processo |

> Nota: a fonte de pesquisa desta RI é o componente processoAssuntoCadProcessoGrid.component.xml.

## RI151

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Adolescente(s) com processo suspenso. | Deverá recuperar todos o(s) adolescente(s) do processo que possuem   suspensão do processo cadastrada, sem um encerramento de processo vinculado. | PJE\_INF\_UC007 |

## RI152

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data da suspensão;   Tipo da suspensão. | De acordo com o adolescente selecionado o sistema deverá recuperar as informações dos campos   “Data da suspensão” e “Tipo da suspensão” da ultima IPR de suspensão do processo. | PJE\_INF\_UC007 |

## RI153

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Ordenação crescente. | Os registros apresentados devem ser exibidos em ordem crescente. | PJE\_INF\_UC011;   PJE\_INF\_UC012;   PJE\_INF\_UC013;   PJE\_INF\_UC014. |

## RI154

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Data encerramento da suspensão. | A data para encerramento da suspensão deve ser posterior a data de cadastro da suspensão do processo. | PJE\_INF\_UC007 |

## RI155

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Motivo do encerramento da suspensão. | Caso seja selecionado o domínio “Outros” o sistema deverá permitir que o usuário informe em campo livre   o motivo do encerramento da suspensão do processo. O sistema deverá apresentar o campo   “Justificativa do motivo de encerramento” e o mesmo será de preenchimento obrigatório. | PJE\_INF\_UC007 |

## RI156

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Detalhamento da medida socioeducativa. | O sistema deve recuperar os campos informados no cadastro   da medida socioeducativa. Os dados deverão ser apresentados de forma concatenados. | PJE\_INF\_UC014 |

## RI157

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| CNPJ. | O CNPJ deverá ser apresentado no formato: 99.999.999/9999-99. | Pesquisa de processo |

## RI158

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Processo | A máscara de formatação para numeração de Processo é: **NNNNNNN-DD.AAAA.J.TR.OOOO**.   Essa máscara deve atender a expressão regular **\[0-9\]7-\[0-9\]2.\[0-9\]4.\[0-9\]1.\[0-9\]2.\[0-9\]4**; um exemplo de uma numeração de Processo ficaria assim: 0800002-22.2012.4.02.0000;   o significado de cada parte da máscara de formatação é:   "NNNNNNN" = número seqüencial do processo no ano composto por 7 dígitos numéricos;   "DD" = dígitos verificadores composto por 2 dígitos numéricos;   "AAAA" = ano composto por 4 dígitos numéricos;   "JTR" = identificação do Órgão Judiciário composto por 3 dígitos numéricos;   "OOOO" = origem do processo composto por 4 dígitos numéricos. | Funcionalidades:   Consulta de Localização de Processo. |

> Nota: não é de responsabilidades desta RI detalhar cada parte da máscara para numeração de Processo,  
> os detalhes específicos sobre a formação de cada parte da numeração de Processo são descritos na RN RN275).

## RI159

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Autoridade;   Assuntos do agrupamento;   Assunto Criminal | Após inserir o primeiro digito, o sistema deverá retornar os dados equivalentes ao digitado. Ex: Inserindo a letra "a",   o sistema deve retornar todas as palavras que possuem a letra "a". A seleção será reduzida conforme a quantidade   de combinações de dígitos. Se não houver nenhum registro, o sistema deve exibir a mensagem MN150. | Funcionalidades:   Cadastro de processo;   Preparar remessa de manifestação processual para envio à instância superior;   Dispositivo da norma;   Cadastro de processo - aba "Partes" (Informações pessoais)      Casos de teste:   PJe-357;   PJe-737;   PJe-764;   PJe-737;   PJe-35 |

## RI160

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo da parte | O sistema deverá recuperar no campo "Tipo da Parte" o nome do polo( \* ) definido no cadastro da classe judicial do processo em questão.      ( \* ) = conforme contexto da funcionalidade, pode ser polo ativo, passivo ou outros participantes. | Funcionalidades:   Cadastro de processo;   Cadastro de processo incidental;   Cadastro de processo jus postulandi.   Casos de teste:   PJe-355;   PJe-364;   PJe-401. |

## RI161

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pessoa jurídica (órgão público). | O sistema deverá recuperar uma lista contendo todas as pessoas jurídicas ativas e que sejam órgão público cadastradas,   e no nome da pessoa jurídica contenha o conjunto de caracteres digitados no campo "Nome" e que não estejam vinculadas   ao processo em questão; essa lista deve ser mostrada em ordem alfabética. | Funcionalidades:   Cadastro de processo;   Cadastro de processo incidental;   Cadastro de processo com jus postulandi.      Casos de teste:   PJe-364. |

## RI162

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Associar parte ao processo. | O sistema deverá recuperar os campos de acordo com valor informado no campo "Brasileiro?": | Funcionalidades:   Cadastro de processo;   Cadastro de processo incidental;   Cadastro de processo com jus postulandi. |

| Brasileiro? | Campos a serem apresentados no painel |
| --- | --- |
| Sim | "CPF" |
| Não | "Passaporte", "País" |

## RI163

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de pessoa | O sistema deverá recuperar os campos de acordo com valor informado no campo "Tipo de pessoa?": | Funcionalidades:   Cadastro de processo;   Cadastro de processo incidental;   Cadastro de processo com jus postulandi. |

| Tipo de pessoa | Campos a serem apresentados no painel |
| --- | --- |
| Física | "Brasileiro", "CPF" |
| Não | "Passaporte", "País" |

## RI164

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Órgão de Vinculação | O sistema deve recuperar os órgãos cadastrados na funcionalidade "Pessoa jurídica".   Ao inserir a primeira letra, o sistema deve sugerir órgão(s) abaixo do campo. | Funcionalidades:   Cadastro de processo;   Cadastro de processo incidental;   Cadastro de processo com jus postulandi. |

## RI165

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Segredo de Justiça? | Ao acessar a aba "Características", o sistema deve apresentar a opção do campo "Segredo de Justiça" marcada como "Não".   Se a opção "Sim" for selecionada, o sistema deverá apresentar o campo "Motivo" com seus respectivos domínios (RD35). | Funcionalidades:   Cadastro de processo;   Cadastro de processo incidental;   Cadastro de processo com jus postulandi. |

## RI166

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Possui algum outro documento que o identifique? | identifique? Caso seja selecionado a opção: “Não possui este documento” o sistema deverá habilitar   o campo “possui algum outro documento que o identifique?” com seus respectivos domínios (RD38). | Funcionalidades:   Cadastro de processo;   Cadastro de processo incidental;   Cadastro de processo com jus postulandi. |

## RI167

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Prioridade de processo | O campo deverá listar os registros cadastrados na funcionalidade "Prioridade do processo". | Funcionalidades:   Cadastro de processo;   Cadastro de processo incidental;   Cadastro de processo com jus postulandi. |

## RI168

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Descrição | O campo deverá apresentar o nome "Petição Inicial" dentro do campo "Descrição", com possibilidade para edição. | Funcionalidades:   Cadastro de processo (aba "Anexar petições e documentos");   Cadastro de processo incidental (aba "Anexar petições e documentos");   Cadastro de processo com jus postulandi (aba "Anexar petições e documentos"). |

## RI169

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de documento | Ao cadastrar um novo processo, a Petição Inicial será um documento obrigatório para protocolar o processo, ou seja,   o campo “Tipo de documento” deverá retornar a “Petição Inicial” sem possiblidade de alteração. | Funcionalidades:   Cadastro de processo (aba "Anexar petições e documentos");   Cadastro de processo incidental (aba "Anexar petições e documentos");   Cadastro de processo com jus postulandi (aba "Anexar petições e documentos"). |

## RI170

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Descrição | O campo deverá apresentar a lista "Tipo de documento" dentro do campo "Selecione o tipo do documento". Os dados do combo deverão   ser recuperados do cadastro de Tipo do documento de identificação.O sistema deverá apresentar na lista apenas os registros ativos e que possuam a identificação de pessoas físicas. | Funcionalidades:   Cadastro de processo;   Cadastro de processo incidental;   Cadastro de processo com jus postulandi. |

## RI171

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Arquivo | Se os campos "Descrição" e "Tipo de documento" do painel "Incluir anexos" forem informados, o campo "Arquivo" deverá se tornar obrigatório. | Funcionalidades:   Cadastro de processo (aba "Anexar petições e documentos") |

## RI172

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Situação RFB | Após a validação do CPF ou CNPJ por meio de acesso à base de dados da Receita Federal,a situação da parte   deverá ser apresentada na coluna "Situação RFB". Ex: CNPJ - Não validado; CPF - Regular; CPF - Suspenso. | Funcionalidade:   Cadastro de processo (aba "Processo") |

## RI173

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Origem | A coluna deve ser preenchida conforme o grau de jurisdição aplicado na seção/subseção. | Funcionalidade:   Cadastro de processo (aba "Processo", painel "Documentos") |

## RI174

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Validação | Retornar a situação do documento, ou seja:   Se estiver assinado, apresentar "Validado",   senão apresentar "Não Validado". | Funcionalidade:   Cadastro de processo (aba "Processo", painel "Documentos") |

## RI175

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Período | Ao lado dos campos "De" ou "Até", o sistema deve apresentar o ícone de um calendário,   que quando acionado possibilitará ao ator escolher uma data. | Funcionalidade:   Cadastro de processo (aba "Processo");   Relatório de produtividade órgão julgador/ magistrado. |

## RI176

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de documento | Campo composto por itens cadastrados na funcionalidade "Petição ou documento" (Configuração → Documento → Tipo de documento). Para que um documento seja vinculado a uma petição ou documento, deve-se:   **1.** Marcar a opção “Todos” do campo “Uso”;   **2.** Informar o tamanho máximo por página;   **3.** Não indicar nenhum dado para o campo “Agrupamento”;   **4.** Indicar a aplicação da classe, na aba “Aplicação de classe”;   **5.** Associar o papel que irá visualizar o documento na aba “Associar Papel”. | Funcionalidade:   Cadastro de processo (aba "Anexar petições e documentos"). |

## RI177

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Valor da Causa | Retornar o valor informado no campo de mesmo nome, da aba "Características". | Funcionalidade:   Cadastro de processo (aba "Processo")      Casos de teste:   PJe-450   PJe-451 |

## RI178

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Jurisdição | Retornar a seção/subseção que foi escolhida na aba "Dados iniciais",   no momento do cadastro do processo. Ela estará vinculada a uma Classe Judicial. | Funcionalidade:   Cadastro de processo (aba "Processo")      Casos de teste:   PJe-450   PJe-451 |

## RI179

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Órgão Julgador   \[REVISAR\_REGRA\] | Retornar o nome do Órgão Julgador que está associado a Sessão/subsessão informada no cadastro do processo. | Funcionalidade: Cadastro de processo (aba "Processo")      Casos de teste:   PJe-450 |

## RI180

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Dados retornados da Receita Federal | Após a validação do CPF por meio do acesso à base de dados da Receita Federal, o campo “Nome”   deve ser preenchido com o nome do proprietário do CPF, e sem possibilidade de edição.   Além do campo "Nome", os campos "Nome da genitora","Data de nascimento" e "Sexo"   devem ser retornados da Receita Federal, no entanto, poderão ser alterados. | Funcionalidade:   Cadastro de processo   Cadastro do processo com Jus postulandi: |

## RI181

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Nome da genitora | O nome da genitora deverá ser recuperado da tabela de pessoas,   conforme o CPF informado. E não é permitido a edição. | Funcionalidade:   Cadastro de processo   Cadastro do processo com Jus postulandi: |

## RI182

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Resultado da pesquisa   \[REVISAR\_REGRA\] | Após utilizar os campos de pesquisa, o grid deve listar os processos em ordem decrescente e conforme a data de inclusão.   Ex: 1° - processo incluído no dia 3/22/2013; 2°- Processo incluído no dia 3/21/2013. | Funcionalidade:   Associar processos |

## RI183

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Estado   Cidade   Bairro   Logradouro | O Estado, Cidade, Bairro e Logradouro,deverá ser recuperado da tabela de CEP, conforme o CEP informado. Os campos não devem permitir a edição. | Funcionalidades:   Cadastro de processo   Cadastro do processo com Jus postulandi: |

## RI184

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Processo Principal | O número do processo será retornado da tela anterior (resultado da pesquisa de processos). | Funcionalidades:   Associar processos      Casos de teste:   PJe-593 |

## RI185

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Número do Processo Associado | Retornar todos os processos que estão associados ao órgão julgador, escolhido   no campo "Órgão Julgador Associado". O processo principal não deve fazer parte da lista. | Funcionalidades:   Associar processos (aba "Formulário")      Casos de teste:   PJe-593 |

## RI186

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campos associados Tipos de característica e características. | O sistema deverá recuperar as "características" conforme o "tipo de característica" informado. | Funcionalidades:   Cadastro de processo   Cadastro do processo com Jus postulandi: |

| Tipos de Característica | Valores a serem apresentados |
| --- | --- |
| “Altura” | Altura até 1,60   Altura até 1,70   Altura até 1,80   Altura até 1,90   Altura maior que 1,90 |
| “Barba” | Barba cavanhaque   Barba cheia   Barba imberbe   Barba rala   Barba raspada |
| “Bigode” | Bigode comprido   Bigode curto   Bigode fino   Bigode grosso   Bigode normal   Bigode raspado |
| “Boca” | Boca grande   Boca média   Boca pequena |
| “Compleio” | Compleio gordo   Compleio magro   Compleio raquítico   Compleio troncudo |
| “Tipo de Cabelo” | Calvo   Cabelo crespo   Cabelo encaracolado   Cabelo liso   Cabelo ondulado |
| “Formato dos olhos” | Olhos grandes   Olhos orientais   Olhos pequenos   Olhos redondos |
| “Cor dos olhos” | Olhos Azuis   Olhos Castanhos   Olhos mistos   Olhos pretos   Olhos verdes |
| “Cor da pele” | Cor da pele amarela   Cor da pele branca   Cor da pele indígena   Cor da pele negra   Cor da pele outra   Cor da pele parda |
| “Lábios” | Lábios finos   Lábios grossos   Lábios leporinos   Lábios médios |
| “Nariz” | Nariz achatado   Nariz afilado   Nariz arrebitado   Nariz cumprido   Nariz curvo adunco |
| “Orelha” | Orelha aberta   Orelha coladas   Orelha grandes   Orelha médias   Orelha pequenas |
| “Pescoço” | Pescoço comprido   Pescoço curto   Pescoço fino   Pescoço grosso   Pescoço médio |
| “Rosto” | Rosto oval   Rosto quadrado   Rosto redondo   Rosto triangular |
| “Sobrancelha” | Sobrancelha finas   Sobrancelha grossas   Sobrancelha separadas   Sobrancelha unidas |
| “Testa” | Testa alta   Testa com entradas   Sombrancelhas separadas   Testa curta |

## RI187

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Caracterização de documento como 'documento principal'. | O sistema deverá caracterizar um ou mais documentos indicados como 'documento principal'. | Funcionalidades:   Preparar remessa de manifestação processual para envio à instância superior |

## RI188

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel pesquisar Tipo de pena | Os campos responsáveis por filtrar os dados da funcionalidade “Tipo de pena” devem ser apresentados no painel “Pesquisar Tipo de pena”, que será posicionado ao lado esquerdo da tela. Os seguintes campos devem ser apresentados no painel:      **A-** Descrição - Campo do tipo texto, permite que o usuário informe a descrição do tipo de pena. A pesquisa a partir desse campo deve ser fonética.   **B-** Sigla - Campo do tipo texto,permite que o usuário informe a sigla do tipo de pena. A pesquisa a partir desse campo deve ser fonética.   **C-** Gênero – Campo do tipo lista, permite o usuário selecionar o tipo de pena(gênero), devendo comportar-se de acordo com a regra de domínio RD001.   **D-** Situação – Campo do tipo lista, permite o usuário informar a situação do registro, devendo obedecer à regra de domínio RD054. O campo deverá recuperá como default a opção "Todos", conforme detalhado na RI30   No final do painel devem ser apresentados os botões “Pesquisar” e “Limpar” | Funcionalidades:   Tipo de pena   Casos de teste:   PJe-749 |

## RI189

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel Tipo de pena | A exibição da lista de Tipo de pena deve ser em uma grid denominada "Tipo de pena" com as seguintes características:   \*\*-\*\*Listar todos os Tipos de pena ativos e inativos incluídos no sistema, ordenando da mais antiga para a mais recente;   **A-** 1° coluna, - 1a coluna deverá conter o ícone: "Ver detalhes" e “Inativar registro”;   **B-** 2° coluna, denominada “Descrição” deve retornar a descrição do tipo de pena;   **C-** 3° coluna, denominada “Sigla” pode retornar a sigla da norma penal, já que o campo “Sigla” não é de preenchimento obrigatório. Ou seja, se o campo for informado no cadastro do tipo de pena, ele deverá ser retornado nessa coluna;   **D-** 3° coluna, denominada “Tipo de pena pai” pode retornar o Tipo de pena pai, já que o campo “Tipo de Pena Pai” não é de preenchimento obrigatório. Ou seja, se o campo for informado no cadastro do tipo de pena, ele deverá ser retornado nessa coluna;   **E-** 5° coluna, denominada “Tipo” deve retornar o gênero do tipo de pena;   **F-** 8° coluna, denominada “Situação” deve apresentar se o registro está ativo ou inativo;   **G-** exibir abaixo da grid "Tipo de pena" no canto inferior direito a mensagem `Foram encontrados: <incluir aqui a quantidade de registros encontrados> resultados`. | Funcionalidades:   Tipo de pena      Casos de teste:   PJe-751 |

## RI190

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Caixa de listagem "Tipo de documento". | A caixa de listagem "Tipo de documento" deve conter os tipos de documentos ativos no sistema, independentemente do tipo de documento pertencer à instância (1o grau/2o grau/3o grau) ou pertencer ao papel do usuário logado, além disso, a caixa de listagem "Tipo de documento" deve estar disponível para edição caso o usuário decida alterar para um outro tipo de documento. | Funcionalidades:   Reclassificar tipo de documento. |

## RI191

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Ícones relacionados à lista de documentos juntados em um processo judicial. | Alguns ícones são exibidos em uma lista de documentos juntados em um processo judicial de acordo com as seguintes instruções:   **\-** Exibir o ícone chamado "Visualizar" caso o documento esteja no formato HTML ou o ícone Pdf.jpg caso esteja no formato PDF.   **\-** Exibir o ícone chamado "Assinar Documento" para disponibilizar a assinatura digital do documento caso o documento   não foi assinado ou o ícone chamado "Verificar assinaturas digitais" caso o documento esteja assinado.   **\-** Exibir o ícone chamado "Remover registro" para disponibilizar a remoção do documento da lista em questão. | Funcionalidades:   Preparar remessa de manifestação processual para envio à instância superior |

## RI192

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel Cadastrar Tipo de pena | Os campos responsáveis por cadastrar os dados da funcionalidade “Tipo de pena” devem ser apresentados no painel “Cadastrar Tipo de pena”. O seguintes campos devem ser apresentados no painel:      • a)Espécie de pena - Campo do tipo texto e de preenchimento obrigatório, permite que o usuário informe a descrição(Espécie) do tipo de pena.   • b)Sigla - Campo do tipo texto e não é de preenchimento, permite que o usuário informe a sigla do tipo de pena.   • c)Tipo de pena pai - Campo do tipo lista e não é de preenchimento obrigatório, permite que o usuário informe Tipo de pena Pai, devendo comporta-se de acordo com a regra de interface RIXX   • d)Gênero da pena – Campo do tipo lista e de preenchimento obrigatório, permite ao usuário selecionar o tipo de pena(gênero), devendo comportar-se de acordo com a regra de domínio RD54.   • e)Tempo em anos? - Campo do tipo lista e de preenchimento obrigatório, permite ao usuário selecionar se o tempo do tipo de pena será em anos, devendo comporta-se de acordo com a regra de domínio RD92.   • f)Tempo em meses? - Campo do tipo lista e de preenchimento obrigatório, permite ao usuário selecionar se o tempo do tipo de pena será em meses, devendo comporta-se de acordo com a regra de domínio RD92.   • g)Tempo em dias? - Campo do tipo lista e de preenchimento obrigatório, permite ao usuário selecionar se o tempo do tipo de pena será em dias, devendo comporta-se de acordo com a regra de domínio RD92.   • h)Tempo em horas? - Campo do tipo lista e de preenchimento obrigatório, permite ao usuário selecionar se o tempo do tipo de pena será em horas, devendo comporta-se de acordo com a regra de domínio RD92.   • i)Valor? - Campo do tipo lista e de preenchimento obrigatório, permite ao usuário selecionar se o tipo de pena será em valor, devendo comporta-se de acordo com a regra de domínio RD92.   • j)Quantidade de dias-multa? - Campo do tipo lista e de preenchimento obrigatório, permite ao usuário selecionar se o tipo de pena será em Quantidade, devendo comporta-se de acordo com a regra de domínio RD92.   • XX)Situação – Campo do tipo lista, permite o usuário informar a situação do registro, devendo obedecer à regra de domínio RD14. |  |
| No final do painel deve ser apresentado o botão“Incluir”. | Casos de teste:   PJe-751 |  |

## RI193

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exibição da lista de processos judiciais que se encontram em uma tarefa. | A lista de processos deve ser exibida ao lado direito da aba "Caixas" em um painel denominado "Processos - `<exibir aqui o nome da tarefa>` e, dentro desse painel, deve ser exibido uma "grid" contendo todos os processos judiciais que se encontram na tarefa em questão, essa "grid" deve conter 4 colunas com as seguintes características:      • 1a coluna - na 1a linha dessa coluna deve ser exibido o ícone "Mover todos os processos para caixa" e, para cada processo listado nas demais linhas deve-se exibir os ícones "Mover para caixa", "Abrir a tarefa", "Ver Detalhes";   • 2a coluna - a 1a linha dessa coluna deve ser denominada "Processo" e, para cada processo listado nas demais linhas deve-se exibir os dados do cabeçalho de um processo (órgão julgador colegiado, órgão julgador, sigla da classe judicial, número do processo, assunto principal, nome da parte no polo ativo versus nome da parte polo passivo; Autuado em:), com o número do processo sendo utilizado como link para acesso aos detalhes do processo. Caso o parâmetro pje:painel:visualizaUltimaMovimentacao esteja configurado, apresentar a 'Última movimentação:' logo após 'Autuado em:';   • 3a coluna - a 1a linha dessa coluna deve ser denominada "Pendente desde" e, para cada processo listado nas demais linhas deve-se exibir a data e a hora desde quando o processo está pendente na tarefa;   • exibir acima da "grid" o painel "Pesquisar" que deve permitir o preenchimento de campos para pesquisar processos na "grid" em questão;   • exibir abaixo da "grid" no canto inferior direito a mensagem `Foram encontrados: <incluir aqui a quantidade de processos pendentes da tarefa> resultados`. | Casos de teste:   PJe-711   PJe-777   PJe-806   PJe-826   PJe-846. |

## RI194

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exibição da lista de documentos de um processo judicial que se encontra na tarefa responsável pela reclassificação do tipo de documento. | A exibição da lista de documentos deve ser em uma grid denominada "Documentos" e essa grid deve ter as seguintes características:      • exibir todos os documentos juntados ao processo em questão e que são visíveis para o usuário logado;   • os documentos juntados devem ser apresentados ordenados pela data de juntada, da mais recente para mais antiga;   • exibir abaixo da grid "Documentos" 2 botões assim denominados e nessa ordem "Descartar alterações" e "Reclassificar e prosseguir";   • exibir na grid "Documentos" 4 colunas com as seguintes configurações:   a) as informações contidas na grid devem ser dispostas conforme esboço da janela proposto para tarefa responsável pela reclassificação do tipo de documento;   b) somente a 4a coluna deve ser editável;   c) 1a coluna - a 1a linha dessa coluna não deve ter nenhuma informação ou ícone, porém em cada linha restante deverá conter o ícone "Visualizar";   d) 2a coluna - a 1a linha dessa coluna deve ser denominada "Informações do documento" e em cada linha restante deve ser exibido algumas informações do documento (identificador, nome, data de juntada (se esta existir) e o identificador do documento vinculado (se este existir);   e) 3a coluna - a 1a linha dessa coluna deve ser denominada "Signatário(s)" e em cada linha restante devem ser exibidos os signatários de cada documento do processo;   f) 4a coluna - a 1a linha dessa coluna deve ser denominada "Tipo de documento" e em cada linha restante deve ser exibido o tipo de documento de cada documento do processo judicial. Além de mostrar o tipo de documento atual de um documento, a caixa de listagem "Tipo de documento" deve obedecer a regra RI190;   g) exibir abaixo da grid "Documentos" no canto inferior direito a mensagem `Foram encontrados: <incluir aqui a quantidade de documentos relacionados ao processo em questão> resultados`. | Funcionalidades:   Reclassificar tipo de documento   Casos de teste:   PJe-711. |

## RI195

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da janela responsável pela tarefa que prepara remessa de manifestação processual para envio à instância superior. | O comportamento da janela responsável pela tarefa que prepara remessa de manifestação processual para envio à instância superior deve obedecer as seguintes regras nessa ordem: RI196, RI197, RI198, RI199 e RI204.   Entre a apresentação do painel "Partes" (que é uma das definições da RI199) deve ser exibido dois botões assim denominados **"Inverter polo"** e **"Duplicar"**.   Após a apresentação do painel "Documentos do processo" (que é uma das definições da RI204) devem ser exibidos os botões **"Gravar"** e **"Reiniciar"** (este botão limpa todo o conteúdo da remessa em questão). | Funcionalidade(s):   Preparar remessa de manifestação processual para envio à instância superior.      Casos de teste:   PJe-777. |

## RI196

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos do painel Detalhes do processo. | Esta regra descreve a especificação de campos e comportamento esperado do painel "Detalhes do processo".   Painel: Detalhes do processo | Funcionalidades:   Preparar remessa de manifestação processual para envio à instância superior. |

| Campo | Descrição | Tipo | Tamanho | Obrigatório | Editável | Regras | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jurisdição | Recupera a jurisdição cadastrada no processo. | Texto | N/A | N/A | Label | N/A | \- |
| Órgão Julgador | Recupera o órgão julgador cadastrado no processo. | Texto | N/A | N/A | Label | N/A | \- |
| Valor da Causa | Recupera o valor da causa calculado para o processo. | Texto | N/A | N/A | Label | N/A | \- |
| Número do processo | Recupera o número do processo judicial. | Texto | N/A | N/A | Label | N/A | \- |

## RI197

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos do painel Dados do processo. | Esta regra descreve a especificação de campos e comportamento esperado do painel "Dados do processo".   Painel: Dados do processo | Funcionalidades:   Preparar remessa de manifestação processual para envio à instância superior. |

| Campo | Descrição | Tipo | Tamanho | Obrigatório | Editável | Regras | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Classe judicial | Recupera a classe judicial conforme definido na regra RN330. O preenchimento da lista deve obedecer a regra RN332. | Lista | N/A | Sim | I/A | RN330; RN332 | \- |

## RI198

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos do painel Assuntos do agrupamento. | Esta regra descreve a especificação de campos e comportamento esperado do painel "Assuntos do agrupamento". | Funcionalidades:   Preparar remessa de manifestação processual para envio à instância superior.      Casos de teste:   PJe-737. |

| Campo | Descrição | Tipo | Tamanho | Obrigatório | Editável | Regras | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Assuntos do agrupamento | O preenchimento da lista deve obedecer a regra RN349. | Lista | N/A | N/A | Label | RN349 | \- |
| Assuntos associados | A exibição da lista de assuntos deve ser em uma grid contendo 2 colunas sendo: a 1a coluna contendo o ícone padrão de remoção denominado "Remover" e a 2a coluna contendo a descrição do respectivo assunto. Na última linha dessa grid deve ser exibido no canto inferior direito a mensagem "Foram encontrados: `<incluir aqui a quantidade de assuntos>` resultados". O conteúdo dessa lista de assuntos deve obedecer a regra RN350. | Lista | N/A | N/A | Label | RN350 | \- |

## RI199

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos do painel Partes. | Esta regra descreve a especificação de campos e comportamento esperado do painel "Partes".   Painel: Outros destinatários | Funcionalidades:   Preparar remessa de manifestação processual para envio à instância superior.      Casos de teste:   PJe-729. |

| Campo | Descrição | Tipo | Tamanho | Obrigatório | Editável | Regras | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Digite o nome, o CPF ou o CNPJ do destinatário | Recupera o(s) nome(s) da(s) parte(s) | Alfanumérico | N/A | N/A | I/A | N/A | \- |
| Nome da Parte (do grid "Polo Ativo") | Apresenta as características do polo Ativo. | Texto | N/A | N/A | Label | RI201 | \- |
| Tipo da Parte (do grid "Polo Ativo") | Apresenta as características do tipo da parte do polo Ativo. | Texto | N/A | N/A | Label | RI205 | \- |
| Nome da Parte (do grid "Polo Passivo") | Apresenta as características do polo Passivo. | Texto | N/A | N/A | Label | RI201 | \- |
| Tipo da Parte (do grid "Polo Passivo") | Apresenta as características do tipo da parte do polo Passivo. | Texto | N/A | N/A | Label | RI205 | \- |
| 1a coluna dos grids "Polo Ativo" e "Polo Passivo" | Apresenta o ícone padrão de remoção denominado "Remover". | Ícone | N/A | N/A | N/A | N/A | \- |
| Última linha dos grids "Polo Ativo" e "Polo Passivo" | Exibir no canto inferior direito a mensagem "Foram encontrados: `<incluir aqui a quantidade de partes>` resultados". | Texto | N/A | N/A | Label | N/A | \- |

## RI200

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Remontagem de árvore com base em filtros | A remontagem de árvore com base em filtros é disparada ao acionamento do botão pesquisar. | Funcionalidades:   Lançador de movimentações;   Relatório de produtividade órgão julgador/ magistrado      Casos de teste:   PJe-725 |

## RI201

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Apresentação dos polos: Ativo e Passivo. | O sistema deverá recuperar os dados (nome e documento de identificação) da parte cadastrada no processo judicial em questão ou,   se existir uma remessa de manifestação processual para esse processo, deverá recuperar os dados da parte informados nessa manifestação.   Caso exista mais de um documento de identificação vinculado à parte, o sistema deverá recuperar o documento cadastrado como documento principal. | Funcionalidades:   Preparar remessa de manifestação processual para envio à instância superior |

## RI202

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel pesquisar legislação penal | Os campos responsáveis por filtrar os dados da funcionalidade “Legislação penal” devem ser apresentado em um painel denominado “Pesquisar Legislação penal”, que será posicionado ao lado direito da tela. O painel deve conter os campos abaixo:   **A-** Tipo de Norma – Campo do tipo lista, devendo comportar-se acordo com a regra de domínio RD001.   **B-** Número – Permite inserir o numero da norma.   **C-** Situação – Campo do tipo lista, devendo obedecer à regra de domínio RD014.   **D-** Nome – Campo texto, onde será informado o nome da norma.   **E-** Sigla - Campo texto, onde será informada a sigla da norma.   No final do painel devem ser apresentados os botões “Pesquisar” e “Limpar”. | Funcionalidades:   Legislação penal      Casos de teste:   PJe-749 |

## RI203

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel legislação penal | A exibição da lista de normas penais deve ser em uma grid denominada "Legislação penal" e essa grid deve ter as seguintes características:   • exibir todas as normais penais que foram incluídas no sistema;   • a listagem das normas penais deve obedecer a ordem de inclusão, da mais antiga para a mais recente;   • a grid deve conter oito colunas com as seguintes configurações:   **A-** 1° coluna - a 1a linha dessa coluna não deve ter nenhuma informação ou ícone, porém em cada linha restante deverá conter o ícone "Ver detalhes", “Inativar registro” e "Gerar Planilha da Norma";   **B-** 2° coluna, denominada “Tipo” deve retornar o tipo da norma penal;   **C-** 3° coluna, denominada “Número” deve retornar o número da norma penal;   **D-** 4° coluna, denominada “Sigla” pode retornar a sigla da norma penal, já que o campo “Sigla” não é de preenchimento obrigatório. Ou seja, se o campo for informado no cadastro da norma, ele deverá ser retornado nessa coluna;   **E-** 5° coluna, denominada “Nome” pode retornar o nome da norma penal, já que o campo “Nome” não é de preenchimento obrigatório. Ou seja, se o campo for informado no cadastro da norma, ele deverá ser retornado nessa coluna;   **F-** 6° coluna, denominada “Data Inicial da Vigência” deve retornar a data que inicia a vigência da norma. A data retornada na coluna deve estar de acordo com a regra de interface RI2;   **G-** 7° coluna, denominada “Data Final da Vigência” deve retornar a data final do período da vigência da norma. A data retornada na coluna deve estar de acordo com a regra de interface RI2;   **H-** 8° coluna, denominada “Situação” deve apresentar se o registro está sendo usado, conforme a regra de domínio RD14;   **I-** exibir abaixo da grid "Legislação penal" no canto inferior direito a mensagem `Foram encontrados: <incluir aqui a quantidade de registros da grid> resultados`. | Funcionalidades:   Legislação penal      Casos de teste:   PJe-749 |

## RI204

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Lista de documentos na tarefa responsável pela preparação de remessa de manifestação processual para envio à instância superior. | A exibição da lista de documentos deve ser em uma grid dentro de um painel denominado "Documentos do processo" e essa grid deve ter as seguintes características:   • exibir todos os documentos juntados ao processo judicial em questão, além disso, devem ser os documentos visíveis para o usuário logado;   • os documentos juntados devem ser apresentados ordenados pela data de juntada, da mais recente para mais antiga;   • exibir na grid 5 colunas com as seguintes configurações:   **A-** as informações contidas na grid devem ser dispostas conforme esboço da janela proposto para tarefa responsável pela preparação de remessa de manifestação processual para envio à instância superior;   **B-** a primeira coluna e a terceira coluna não são editáveis;   **C-** 1a coluna - a 1a linha dessa coluna deve ser denominada "Informações do documento" e em cada linha restante deve ser exibido algumas informações do documento:   Id:`<exibir número identificador do documento>`,   `<exibir a instância na qual o documento foi juntado>`,   `<exibir a data de juntada, se esta existir>`,   `<exibir descrição do documento>`,   `<exibir o tipo do documento>`;   **D-** 2a coluna - a 1a linha dessa coluna deve ser denominada "Tipo de documento" e em cada linha restante deve ser exibido na caixa de listagem o tipo de documento do documento juntado ao processo em questão ou, se existir uma remessa de manifestação processual para esse processo, deverá recuperar o tipo de documento desse documento nessa remessa; as duas situações devem estar em conformidade com a regra RN337.   **E-** 3a coluna - a 1a linha dessa coluna deve ser denominada "Anexos" e em cada linha restante devem ser exibidos ícones de acordo com as características do documento conforme define a regra RI191 e com a exceção de não mostrar o ícone "Remover";   **F-** 4a coluna - a 1a linha dessa coluna deve ser denominada "Documento principal" e em cada linha restante deve ser exibido um 'check' que deverá estar setado ou não conforme orienta a regra RI187. A característica 'documento principal' de um documento deverá ser obtida do cadastro do processo em questão ou da remessa de manifestação caso exista para esse processo;   **G-** 5a coluna - a 1a linha dessa coluna deve ser denominada "Incluir documento?" e em cada linha restante deve ser exibido um 'check' que permitirá indicar se o documento será incluído ou não na remessa. Esse 'check' somente será setado se o documento foi incluído na remessa de manifestação processual do processo judicial em questão;   **H-** exibir abaixo da grid no canto inferior direito a mensagem `Foram encontrados: <incluir aqui a quantidade de documentos relacionados ao processo em questão> resultados`. | Funcionalidades:   Preparar remessa de manifestação processual para envio à instância superior. |

## RI205

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperação do tipo da parte. | O sistema deverá recuperar a informação "Tipo da parte" que está vinculada à parte de um respectivo polo (ativo ou passivo).   Essa informação deverá ser recuperada do processo judicial em questão ou, se existir uma remessa de manifestação processual   para esse processo, deverá ser recuperada dessa manifestação. | Funcionalidades:   Preparar remessa de manifestação processual para envio à instância superior |

## RI206

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Filtro na árvore de movimentações | Para filtrar a árvore de movimentações, pelo menos um caractere deve ser utilizado.   O comportamento é o seguinte:      • O usuário insere o parâmetro de pesquisa e aciona o botão pesquisar   resultado esperado: a árvore de movimentações é remontada contendo apenas as movimentações que parte do código coincida com o código inserido ou que a descrição coincida com o trecho de descrição fornecido. Caso não haja coincidência, a árvore permanece a mesma.      Em todos os casos, só movimentações vinculadas ao(s) agrupamento(s) configurado na tarefa deverão ser exibidas, salvo na exibição da árvore para geração de relatório, que deve retornar todas as movimentações pertencentes aos magistrados. Ao não encontrar resultados, o sistema exibe um alerta. Após uma pesquisa (filtro) bem-sucedida, a árvore é expandida automaticamente para apresentar os resultados da busca. | Funcionalidades:   Lançador de movimentações;   Relatório de produtividade órgão julgador/ magistrado      Casos de teste:   PJe-725 |

## RI207

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Calendário | Será representado por um ícone, no formato de um calendário. Quando acionado, o calendário será apresentado ao usuário no formato de uma tabela, e deverá conter as seguintes características:   • A primeira linha da tabela conterá o nome do mês e ano atual, com opções para retornar/prosseguir para anos ou meses anterior ou posterior à data atual;   • A segunda linha apresenta os dias da semana (Seg, Ter, Qua, Qui, Sex, Sáb, Dom), sendo que o fim de semana será representado na cor vermelha, e o restante dos dias na cor preta;   • As linhas seguintes apresentam os dias do mês, ordenados conforme os dias da semana;   • A ultima linha possibilita ao usuário selecionar a data atual em “Hoje”. Se existir uma data no campo, essa poderá ser excluída pela opção “Limpar”. | Funcionalidades:   Norma penal;   Cadastro de processo - aba "Partes" (Informações pessoais)      Casos de teste:   PJe-742;   PJe-353 |

## RI208

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel "Dispositivo da norma" | O painel “Dispositivo da norma” possuirá três agrupadores. Esses agrupadores devem estar de acordo com as considerações abaixo:   1.Primeiro agrupador, denominado “Dados do Dispositivo”, deve esta expandido, e conterá os seguintes campos:   • a) Tipo – campo do tipo lista, obrigatório e composto pelos domínios da RD2;   • b) Dispositivo pai – será uma estrutura em árvore, composta com os dispositivos já cadastrados. Esse campo deve obedecer ao estabelecido na regra de negócio RN13;   • c) Símbolo – campo do tipo lista, constituído pelos domínios da regra RD4, e em conformidade com a regra de negócio RN35;   • d) Identificador do Dispositivo – campo alfanumérico, com capacidade para 100 caracteres, sendo de preenchimento obrigatório e deve esta alinhado a regra de negócio RN126;   • e) Data Inicial da Vigência - será um campo data, de preenchimento obrigatório, preenchido com a data inicial da vigência da norma, e coerente com as regras RI2, RI207 e RI44;   • f) Data Final da Vigência - será um campo data e deve esta coerente com as regras RI2 e RI207;      2\. Segundo agrupador, denominado “Texto do Dispositivo”, deve estar expandido, e conterá um editor de textos padrão. Esse agrupador será de preenchimento obrigatório.      3\. Terceiro agrupador, denominado “Características do Dispositivo” deve estar expandido, e conterá os seguintes campos:   • a)Uso do Dispositivo – campo do tipo lista, de preenchimento obrigatório, composto pelos domínios da regra RD41, apresentado o valor default definido na RI47, e coerente com as regras de negócio RN37 e RN119;   • b)Hediondo? – campo de seleção única, obrigatório somente quando estiver condizente com a regra de interface RI209, caso contrário, o campo estará desabilitado. É composto pelos domínios da regra RD28, e possuindo o valor default da regra de interface RI18;   • c)Data no Qual o Crime Passou a Ser Considerado Hediondo – campo data, coerente com as regras RI2 e RI207. Obrigatório somente quando estiver condizente com a regra de negócio RN14, caso contrário, o campo estará desabilitado;   • d)Previsão de Pena Restritiva de Direito Autônoma? – campo de seleção única, obrigatório somente quando estiver condizente com a regra de interface RI209, caso contrário, o campo estará desabilitado. É composto pelos domínios da regra RD28, e possuindo o valor default da regra de interface RI18;   • e)Previsão de Pena Privativa de Liberdade? – campo de seleção única, obrigatório somente quando estiver condizente com a regra de interface RI209, caso contrário, o campo estará desabilitado. É composto pelos domínios da regra RD28, e possuindo o valor default marcado em "Sim";   • f)Previsão de Pena de Multa? – campo de seleção única, obrigatório somente quando estiver condizente com a regra de interface RI209, caso contrário, o campo estará desabilitado. É composto pelos domínios da regra RD28, e possuindo o valor default da regra de interface RI18;   • g)Tipo de Pena Privativa de Liberdade – será uma estrutura em árvore, composta com os nomes das penas privativas de liberdade já cadastrada. Obrigatória somente quando estiver condizente com a regra de interface RI209, caso contrário o campo estará desabilitado. Esse campo deve estar de acordo com a regra de negócio RN51;   • h)Pena Privat. de Lib. Mínima Cominada – deve possuir os subcampos “Anos”, “Meses” e “Dias”. Os três subcampos são obrigatórios somente quando estiver condizente com a regra de interface RI209 e com a regra de negócio RN15, caso contrário o campo estará desabilitado;   • i)Pena Privat. de Lib. Máxima Cominada – deve possuir os subcampos “Anos”, “Meses” e “Dias”. Os três subcampos são obrigatórios somente quando estiver condizente com a regra de interface RI209 e com a regra de negócio RN15, caso contrário o campo estará desabilitado;   • j)Ativo? – campo de seleção única, obrigatório e composto pelos domínios da RD28. Esse campo possuirá o valor default marcado em "Sim";   • k)Multa x Pena Privativa de Liberdade – campo de seleção única, composto pelos domínios da RD5 e coerente com a regra RN36.   • l)Permitir Seleção Múltipla? – campo de seleção única, composto pelos domínios da RD28, usando o default da RI18. Esse campo deve estar em concordância com a regra de interface RI45, e nos demais casos deverá estar desabilitado.   • m)Assunto Criminal – campo do tipo pesquisa, coerente com as regras de interface RI159 e RI46;   • n)Assunto Ato Infracional –      • Exibir no canto inferior esquerdo, abaixo do painel “Dispositivo da norma”, o botão “Incluir”, que será o responsável por finalizar a ação desse painel | Funcionalidades:   Dispositivo da norma      Casos de teste:   PJe-764 |

## RI209

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Hediondo? | Campo desabilitado para edição. Somente estará disponível se o uso do dispositivo da norma for equivalente à "Tipo penal". | Funcionalidades:   Dispositivo da norma      Casos de teste:   PJe-764 |

## RI210

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Aba "Informações pessoais" | A aba “Informações pessoais” será a primeira aba apresentada no painel “2° Passo – Complementação do cadastro”, chamado a partir do cadastro ou edição de uma parte do processo. Ela deve possuir os seguintes campos e descrições:      **Para pessoas físicas, seguir as descrições e os campos abaixo:**   **•Nome:** campo do tipo texto e de preenchimento obrigatório. Esse campo deve estar desabilitado para edição, conforme as definições da regra de interface RI180;   **•Nome da genitora** – campo do tipo texto, e coerente com a regra de interface RI180;   **•Nome do genitor** – campo do tipo texto;   **•Sexo** – campo do tipo lista, e composto pelos domínios da RD44 e de acordo com a regra de interface RI180;   **•Data de nascimento** – campo do tipo data, devendo retornar a data de nascimento do portador do CPF, conforme a regra de interface RI180. Esse campo deve estar no formato definido nas regras de interface RI2 e RI207;   **•Data de óbito** – campo do tipo data, e coerente com a máscara definida na regra de interface RI2. Esse campo deverá possuir um ícone, conforme descrito na regra de interface RI207;   **•Etnia** – campo lista e coerente com a regra de negócio RN315;   **•Estado civil** – campo lista e coerente com a regra de negócio RN317;   **•Escolaridade** – campo do tipo lista e coerente com a regra de negócio RN318;   **•Profissão** – campo do tipo pesquisa, coerente com as regras de interface RI159. Esse campo deve recuperar os registros definidos na regra de negócio RN316;   **•País de nascimento** – campo lista, possuindo os domínios da regra RDXX;      **Para pessoas jurídicas, seguir as descrições e os campos abaixo:**   **•Nome** – campo texto e coerente com a regra de interface RI211;   **•Nome de fantasia** – campo texto e coerente com a regra de interface RI211;   **•Tipo de pessoa** – campo de estrutura em árvore, de acordo com a regra RI212;   **•Nome do responsável** – campo texto.   **•CPF do responsável** – campo numérico e padronizado com a máscara da RI92;   **•Data de abertura** – campo data, coerente com as regras de interface RI2, RI207 e RI211;   **•Data de encerramento de atividades** - campo do tipo data, e coerente com a máscara definida na regra de interface RI2. Esse campo deverá possuir um ícone, conforme descrito na regra de interface RI207;      **Para entes ou autoridades, seguir as descrições e os campos abaixo:**   **•Nome** – campo de texto livre;   **•Órgão de vinculação** – campo de sugestão e coerente com a regra de interface RI211;      Abaixo dos campos mencionados, exibir o botão “Salvar”, localizado no canto inferior esquerdo da aba “Informações pessoais” para informações de um registro já inserido ou o botão "Incluir" para informações a serem inseridas. O botão tem como objetivo finalizar a inclusão/ alteração de dados da referente aba. | Funcionalidades:   Cadastro de processo;      Casos de teste:   PJe-353 |

## RI211

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperação de dados - CNPJ | Após a validação do CNPJ por meio do acesso a base de dados da Receita Federal, os campos “Nome” e “Nome de fantasia” devem ser preenchidos e sem possibilidade de edição.   Além dos campos mencionados, o campo “Data de abertura” será preenchido de acordo com os dados da base da Receita Federal, e poderá ser editado. | Funcionalidades:   Cadastro de processo;      Casos de teste:   PJe-353 |

## RI212

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de pessoa | Para instalações da Justiça Federal, o campo irá apresentar o tipo de pessoa “Pessoa jurídica” selecionado por padrão   no polo passivo, podendo ser alterado. Para outros ramos, estará selecionado por padrão o tipo "Pessoa física"   em todos os polos. A lista de registros deve retornar os dados ativos pertinentes da funcionalidade “Tipo de pessoa”.   O ícone “limpar” deve está localizado à direita do campo. | Funcionalidades:   Cadastro de processo;      Casos de teste:   PJe-353 |

## RI213

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Aba "Documentos de identificação" | A aba “Documentos de identificação” possuirá um painel denominado `Adicionar Documento -  <<nome da pessoa física ou pessoa jurídica>>`, e será composto pelos seguintes campos para pessoa física:   **•Tipo do documento** – campo do tipo lista, obrigatório, e listando os registros cadastrados segundo a regra de interface RN319 separando os registros de acordo com o tipo de pessoa selecionado, cadastrados em \[Tipo de documento de identificação\];   **•Número** – campo alfanumérico e obrigatório. A máscara desse campo será definida em \[Tipo de documento de identificação\];   **•Data de expedição** – campo data, obrigatório e de acordo com a máscara definida na regra de interface RI2. Esse campo deverá possuir um ícone, conforme descrito na regra de interface RI207. Além das regras mencionadas, o campo deve estar coerente com a regra de negócio RN249;   **•Expedidor** – campo alfanumérico e obrigatório. Se o tipo de documento escolhido for “CPF”, recuperar o nome do órgão expedidor e desabilitar o campo. Esse campo não será apresentado quando o tipo de documento for “PASSAPORTE” ou “TIT”.   **•Estado** – campo lista, obrigatório e coerente com a regra RN320;   **•Nome** – campo texto e obrigatório;   **•Documento principal** – campo de marcação;   **•Situação** – campo de seleção única, e composto pelos itens da regra de domínio RD14. A marcação default será “Ativo”; •Falso – campo de marcação;   **•Tipo de inscrição** – campo lista quando o documento selecionado for “OAB”. Recuperar os registros da regra de domínio RD91.   Exibir abaixo do painel `Adicionar Documento -  << nome da pessoa física ou pessoa jurídica >>` no canto inferior esquerdo o botão “Incluir”, que será o responsável por adicionar documento no grid abaixo do painel.      Abaixo do painel `Adicionar Documento -  << nome da pessoa física ou pessoa jurídica >>`, uma grid denominada `Documentos –  << nome da pessoa física ou pessoa jurídica >>` exibirá a lista de documentos relacionados à pessoa em questão, devendo ter as seguintes características:   **•** a listagem dos documentos deve obedecer a ordem de inclusão, da mais antiga para a mais recente;   **•** a grid deve conter quatro colunas com as seguintes configurações:   **A-** 1° coluna, denominada “Nome” deve retornar o nome da pessoa física ou pessoa jurídica;   **B-** 2° coluna, denominada “Tipo do documento” retorna o tipo do documento selecionado no painel `Adicionar Documento - << nome da pessoa física ou pessoa jurídica >>`;   **C-** 3° coluna, denominada “Número”, deve apresentar o número do tipo do documento inserido;   **D-** 4° coluna, denominada “Situação”, irá apresentar se o documento incluído está ativo ou inativo.   **•** exibir abaixo da grid `Documentos – -  << nome da pessoa física ou pessoa jurídica >>` no canto inferior direito a mensagem `Foram encontrados: <incluir aqui a quantidade de documentos relacionados ao processo em questão> resultados`. | Funcionalidades:   Cadastro de processo;      Casos de teste:   PJe-706 |

## RI214

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Aba "Endereços" | A aba “Endereços” possuirá um painel denominado `Adicionar endereço -  << nome da pessoa física ou pessoa jurídica >>`, e será composto pelos seguintes campos:   **•CEP (99999-999)** – campo pesquisa, obrigatório e coerente com as regras RN321 e RN327;   **•Estado** – tipo texto, obrigatório e coerente com a regra RN327. Após a validação do CEP, o campo ficara desabilitado;   **•Cidade** – tipo texto, obrigatório e coerente com a regra RN327. Após a validação do CEP, o campo ficara desabilitado;   **•Bairro** – campo tipo alfanumérico, obrigatório e coerente com a regra RN327. Após a validação do CEP, o campo ficara desabilitado;   **•Logradouro** - campo tipo alfanumérico, obrigatório e coerente com a regra RN327. Após a validação do CEP, o campo ficara desabilitado;   **•Número** – campo alfanumérico;   **•Complemento** – campo alfanumérico.   **•Endereço apenas para correspondência?** – campo de marcação.   Exibir abaixo do painel `Adicionar endereço -  << nome da pessoa física ou pessoa jurídica >>` no canto inferior esquerdo o botão “Incluir”, que será o responsável por adicionar o endereço no grid abaixo do painel.      Entre o painel e a grid de resultados, o campo de marcação **“Endereço desconhecido”** deve estar disponível na tela. Se marcado, o endereço não será obrigatório para a inclusão da pessoa física ou jurídica.      Abaixo do painel `Adicionar endereço -  << nome da pessoa física ou pessoa jurídica >>`, uma grid denominada `Endereços –  << nome da pessoa física ou pessoa jurídica >>` exibirá a lista de endereços relacionados à pessoa em questão. A primeira linha do grid retorna o endereço vinculado ao CPF ou CNPJ. Essa grid deverá ter as seguintes características:   **•** a listagem dos endereços deve obedecer a ordem de inclusão, da mais antiga para a mais recente;   **•** a grid deve conter sete colunas com as seguintes configurações:   **A-** 1° coluna deve listar, para cada endereço da grid, os ícones "Selecionar registro" e “Remover registro”;   **B-** 2° coluna, denominada “Usar no processo” deve disponibilizar um botão de seleção única, que será responsável por marcar o endereço principal da pessoa em questão. O endereço marcado será usado no processo;   **C-** 3° coluna, denominada “CEP” listará o CEP de acordo com a inclusão do painel anterior;   **D-** 4° coluna, denominada “Logradouro” listará o logradouro do endereço, de acordo com a inclusão do painel anterior;   **E-** 5° coluna, denominada “Bairro” listará o bairro do endereço, de acordo com a inclusão do painel anterior;   **F-** 6° coluna, denominada “Número” listará o número do endereço, de acordo com a inclusão do painel anterior;   **G-** 7° coluna, denominada “Complemento” listará o complemento do endereço, de acordo com a inclusão do painel anterior.   • exibir abaixo da grid `Endereços – -  << nome da pessoa física ou pessoa jurídica >>` no canto inferior direito a mensagem `Foram encontrados: <incluir aqui a quantidade de endereços> resultados`. | Funcionalidades:   Cadastro de processo - aba "Partes";      Casos de teste:   PJe-595 |

## RI215

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo | Recuperar todos os registros ativos da funcionalidade "Tipo de contato",   disponível em "Configuração → Tabelas básicas → Tipo de contato". | Funcionalidades:   Cadastro de processo - aba "Partes" (Meios de contato);      Casos de teste:   PJe-704 |

## RI216

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Aba "Meios de contato" | A aba “Meios de contato” possuirá um painel denominado `Meios de contato -  << nome da pessoa física ou pessoa jurídica >>`, e será composto pelos seguintes campos:   **•Tipo** – campo lista, obrigatório e coerente com as regras RI215;   **•Identificação** – campo alfanumérico e obrigatório.   Abaixo do campo Tipo, exibir a imagem de um ponto de exclamação dentro de um triângulo amarelo, com o seguinte texto ao lado “\* Campos Obrigatórios”.   • exibir, entre o painel e o grid, o botão **“Incluir”**.      Abaixo do painel `Meios de contato -  << nome da pessoa física ou pessoa jurídica >>`, uma grid denominada `Meios de contato –  << nome da pessoa física ou pessoa jurídica >>` exibirá a lista de contatos relacionados à pessoa em questão. Essa grid deverá ter as seguintes características:   **•** a listagem dos contatos deve obedecer a seguinte ordem: a primeira ordem obedecerá os registros do campo “Tipo”. A segunda ordem será regida pela inclusão (da mais antiga para a mais recente), porém considerando a primeira ordem.   **•** a grid deve conter quatro colunas com as seguintes configurações:   **A-** 1° coluna deve listar, para cada contato da grid, os ícones "Selecionar registro" e “Remover registro”;   **B-** 2° coluna, denominada “Meios de contato” recupera o registro inserido no campo “Identificação” do painel acima;   **C-** 3° coluna, denominada “Tipo” recupera o tipo selecionado pelo usuário, de acordo com o painel acima;   **D-** 4° coluna, denominada “Identificação” recupera o registro inserido no campo “Identificação” do painel acima.   **•** exibir abaixo da grid `Meios de contato – -  << nome da pessoa física ou pessoa jurídica >>` no canto inferior direito a mensagem `Foram encontrados: <incluir aqui a quantidade de endereços> resultados`. | Funcionalidades:   Cadastro de processo - aba "Partes" (Meios de contato);      Casos de teste:   PJe-704 |

## RI217

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Aba "Características pessoais" | A aba “Características pessoais” possuirá um painel denominado “Características pessoais”, composto pelos seguintes campos:   **•** Outras características – campo texto;   **•** Tipos de Característica – campo lista, obrigatório, e listando os registros da regra RI186;   **•** Características – campo lista, obrigatório, e listando os registros da regra RI186.   Exibir dentro do painel “Características pessoais”, ao lado do campo “Característica”, o botão “Adicionar”, que será o responsável por incluir a característica na grid abaixo do painel.      Abaixo do painel “Características pessoais”, uma grid exibirá a lista de características relacionadas à pessoa em questão. Essa grid deverá ter as seguintes características:   **•** a listagem das características deve obedecer a ordem de inclusão, da mais antiga para a mais recente;   **•** a grid deve conter três colunas com as seguintes configurações:   **A-** 1° coluna, denominada “Remover” conterá o ícone de uma lixeira, que possuirá a finalidade de remover uma característica da grid.   **B-** 2° coluna, denominada “Tipo” recupera o registro inserido no campo “Tipos de Característica” do painel acima;   **C-** 3° coluna, denominada “Característica” recupera o registro inserido no campo “Característica” do painel acima. | Funcionalidades:   Cadastro de processo - aba "Partes" (Características pessoais);      Casos de teste:   PJe-705 |

## RI218

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Aba "Outros nomes" | A aba “Outros nomes” possuirá um painel denominado `Adicionar Nome –  << nome da pessoa jurídica >>`, composto pelo seguinte campo:   **•** Nome – campo alfanumérico e obrigatório.   Abaixo do campo Nome, exibir a imagem de um ponto de exclamação dentro de um triângulo amarelo, com o seguinte texto ao lado: “\* Campos Obrigatórios”.      **•** Exibir, entre o painel e o grid, o botão “Incluir”.      Abaixo do painel “Outros nomes”, uma grid exibirá a lista de outros nomes relacionados à pessoa jurídica. Essa grid deverá ter as seguintes características:   **•** a listagem dos nomes deve obedecer a ordem de inclusão, do mais antigo para o mais recente;   **•** a grid deve conter duas colunas com as seguintes configurações:   **A-** 1° coluna deve listar, para cada nome da grid, o ícone “Remover registro”;   **B-** 2° coluna, denominada “Nome” recupera o registro inserido no campo “Nome” do painel acima. | Funcionalidades:   Cadastro de processo - aba "Partes" (Outros nomes);      Casos de teste:   PJe-775 |

## RI219

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Quantidade máxima de caracteres - campo "Número" | Se o campo número não possui nenhuma máscara associada a ele, permitir a inclusão de apenas 30 caracteres. | Funcionalidades:   Cadastro de processo - aba "Partes" (Documentos de identificação);      Casos de teste:   PJe-706 |

## RI220

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tipo de pena pai | Na funcionalidade tipo de pena, no momento de inclusão e edição o sistema deverá permitir que o registro de   Tipo de pena, seja vinculado a um Tipo de pena já cadastrado no sistema. Por tanto, no campo "Tipo de pena pai"   o sistema deverá recuperar e exibir em uma lista os tipos de penas já cadastrados e ativos. | Funcionalidades:   Tipo de pena      Casos de teste:   PJe-751 |

## RI221

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel pesquisar Tipo de suspensão | Os campos responsáveis por filtrar os dados da funcionalidade “Tipo de suspensão” devem ser apresentados no painel “Pesquisar Tipo de suspensão”, que será posicionado ao lado esquerdo da tela. Os seguintes campos devem ser apresentados no painel:      **A-** Situação – Campo do tipo lista, permite o usuário informar a situação do registro, devendo obedecer à regra de domínio RD14. O campo deverá recuperá como default a opção "Todos", conforme detalhado na RI30   **B-** Descrição - Campo do tipo texto, permite que o usuário informar a descrição do tipo de suspensão. A pesquisa a partir desse campo deve ser fonética.      No final do painel devem ser apresentados os botões “Pesquisar” e “Limpar”. | Funcionalidades:   Tipo de suspensão      Casos de teste:   PJe-767 |

## RI222

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Exibição de processos possíveis preventos | Observado a restrição para processos sigilosos, a exibição dos processos com possível prevenção deverá   ser feita por meio de tabela em que a primeira coluna constará o número do processo analisado, a segunda   o número do processo possível prevento e a terceira o(s) critério(s) de prevenção causadores da avaliação.   A lista deverá ser ordenável por qualquer um dos parâmetros da coluna. | Funcionalidades:   Prevenção |

## RI223

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Grid Tipos de suspensão | A exibição da lista de Tipo de suspensão deve ser em uma grid denominada "Tipo de suspensão" com as seguintes características:   **\-** Listar todos os Tipos de suspensão ativos e inativos incluídos no sistema, ordenandos do mais antigo para o mais recente;   **A-** 1° coluna, - 1a coluna deverá conter o ícone: "Selecionar" e “Inativar registro”;   **B-** 2° coluna, denominada “Descrição” deve retornar a descrição do tipo de suspensão;   **C-** 3° coluna, denominada “Situação” deve apresentar se o registro está ativo ou inativo;   **G-** exibir abaixo da grid "Tipo de suspensão" no canto inferior direito a mensagem `Foram encontrados: <incluir aqui a quantidade de registros encontrados> resultados`. | Funcionalidades:   Tipo de suspensão      Casos de teste:   PJe-751 |

## RI224

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel Cadastrar Tipo de suspensão | Os campos responsáveis por cadastrar os dados da funcionalidade “Tipo de suspensão” devem ser apresentados no painel “Cadastrar Tipo de suspensão”. Os seguintes campos devem ser apresentados no painel:      **• a)** Descrição - Campo do tipo texto e de preenchimento obrigatório, permite que o usuário informe a descrição do tipo de suspensão do processo.   **• b)** Data de início da vigência - Campo do tipo data e de preenchimento obrigatório, permite que o usuário informe a data de início de vigência do tipo de suspensão do processo.   **• c)** Data de término da vigência - Campo do tipo data e não preenchimento obrigatório. Permite que o usuário informe à data que finaliza a vigência do tipo de suspensão do processo.   **• d)** Prazo para suspensão - Campo de marcação e de preenchimento obrigatório. Permite ao usuário informar como será apresentado o prazo do tipo de suspensão do processo, devendo comporta-se de acordo com a regra de interface RI31 e a regra de domínio RD27.   **• e)** Prazo da suspensão obrigatório? – Campo de seleção única e de preenchimento obrigatório. Deve se comportar de acordo com a regra de interface RN105 e a regra de domínio RD28   **• f)** Data prevista para término - Campo de seleção única e de preenchimento obrigatório. Permite ao usuário selecionar se haverá data de previsão para o término da suspensão, devendo comporta-se de acordo com a regra de domínio RD28.   **• g)** Acompanhamento da condição? - Campo de seleção única e de preenchimento obrigatório. Permite ao usuário selecionar se haverá acompanhamento da suspensão do processo. Deve se comportar de acordo com a regra de domínio RD28e a regra de negócio RN106 e regra de interfaceRI33.   **• h)** Situação – Campo de seleção única. Permite o usuário informar a situação do registro, devendo obedecer à regra de domínio RD14.   No final do painel deve ser apresentado o botão “Incluir”. | Funcionalidades:   Tipo de suspensão      Casos de teste:   PJe-778 |

## RI225

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel Condição da suspensão do processo | Os campos responsáveis por cadastrar os dados da funcionalidade “Tipo de suspensão” Aba "Condição da suspensão" devem ser apresentados no painel “Cadastrar Tipo de suspensão”. Os seguintes campos devem ser apresentados no painel:      **A-** Descrição - Campo do tipo texto e de preenchimento obrigatório, permite que o usuário informe a descrição da condição de suspensão do processo.   **C-** Situação – Campo do tipo lista, permite o usuário informar a situação do registro, devendo obedecer à regra de domínio RD14.   No final do painel deve ser apresentado o botão“Incluir”. | Funcionalidades:   Tipo de suspensão      Casos de teste:   PJe-XXX |

## RI226

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel Pesquisar Tipo de procedimento de origem | Os campos responsáveis por filtrar os dados da funcionalidade “Tipo de procedimento de origem” devem ser apresentado em um painel denominado “Pesquisar Tipo de procedimento de origem”, que será posicionado ao lado direito da tela. O painel deve conter os campos abaixo:   **A-** Tipo de Procedimento de Origem – campo texto.   **B-** Situação – campo do tipo lista, devendo obedecer à regra de domínio RD14.   No final do painel devem ser apresentados os botões “Pesquisar” e “Limpar” (nessa ordem). | Funcionalidades:   Tipo de procedimento de origem      Casos de teste:   PJe-781 |

## RI227

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Grid "Tipo de procedimento de origem" | A exibição da lista de procedimentos de origem deve ser em uma grid denominada "Tipo de procedimento de origem" e essa grid deve ter as seguintes características:   **•** exibir todos os procedimentos de origem que foram incluídos no sistema;   **•** a listagem dos registros deve obedecer à ordem de inclusão, do mais antigo para a mais recente;   **•** a grid deve conter três colunas com as seguintes configurações:   **A-** 1° coluna - a 1a linha dessa coluna não deve ter nenhuma informação ou ícone, porém em cada linha restante deverá conter o ícone "Selecionar" e “Inativar registro”;   **B-** 2° coluna, denominada “Tipo de Procedimento de Origem” deve retornar o tipo dos procedimentos cadastrados;   **C-** 3° coluna, denominada “Situação” deve apresentar se o registro está sendo usado, conforme a regra de domínio RD14;   **•** exibir abaixo da grid "Tipo de procedimento de origem" no canto inferior direito a mensagem `Foram encontrados: <incluir aqui a quantidade de registros da grid"> resultados`. | Funcionalidades:   Tipo de procedimento de origem      Casos de teste:   PJe-781 |

## RI228

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Seleção automática de tipo de pessoa | Dependendo do tipo de justiça configurado nos parâmetros do sistema, o tipo de pessoa automaticamente   selecionado ao adicionar parte no cadastro do processo é alterado. Para Justiça Federal e Justiça do Trabalho,   o tipo de pessoa é "Jurídica" e para os outros casos, o tipo de pessoa é "Física". |  |

## RI229

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel "Tipo de procedimento de origem" - Inclusão e Alteração | A inclusão (ou edição) de procedimentos de origem ficará disponível por meio do painel “Tipo de procedimento de origem”. Esse painel deve conter os seguintes campos:   **A-** Tipo de procedimento de origem– Campo texto e de preenchimento obrigatório.   \*\*B-\* *Situação? – Campo de seleção única, devendo obedecer à regra de domínio RD14.   Abaixo do campo Tipo de procedimento de origem, exibir a imagem de um ponto de exclamação dentro de um triângulo amarelo, com o seguinte texto ao lado: “* Campos Obrigatórios”.   No final do painel deve ser apresentado o botão “Incluir”.   Para edições, alterar os botões da funcionalidade, de acordo com a regra RI17. | Funcionalidades:   Tipo de procedimento de origem      Caso de teste:   PJe-780;   PJe-784 |

## RI230

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel "Pesquisar Dispositivo" | O painel “Pesquisar Dispositivo” tem a finalidade de filtrar os dados cadastrados para o dispositivo da norma. Ele será posicionado no canto inferior esquerdo da tela e possuirá os seguintes campos e descrições:   **A-** Tipo – campo lista, coerente com a regra RD2;   **B-** Identificador – campo alfanumérico;   **C-** Situação – campo lista, sendo constituído pelos domínios da regra RD14.   No final do painel devem ser apresentados os botões **“Pesquisar”** e **“Limpar”**. | Funcionalidades:   Legislação penal - Dispositivo da norma      Caso de teste:   PJe-764 |

## RI231

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Grid "Dispositivo da norma" | A exibição dos dispositivos já cadastrados no sistema será apresentada em uma grid, denominada `Dispositivo da norma -  << tipo da legislação penal >> -  << número da legislação penal >>`. A grid deverá possuir as seguintes regras e definições:   **•** Exibir todos os dispositivos da norma que foram incluídos na funcionalidade.   **•** Os registros incluídos deverão seguir a seguinte ordem:   Se o tipo de dispositivo de norma for “Artigo”, os registros serão ordenados conforme a inclusão, ou seja, do mais antigo para o mais recente;   Parágrafos – Serão vinculados ao artigo, do mais antigo para o mais recente;   Incisos –   Alínea –   Item –   Parte –   **•** A grid deverá conter quatro colunas, e coerentes com as seguintes definições:   **A-** 1° coluna - a 1a linha dessa coluna não deve ter nenhuma informação ou ícone, porém em cada linha restante deverá conter os ícones "Selecionar registro", “Inativar registro”, “Descer” e “Subir”;   **B-** 2° coluna, denominada **Dispositivo** irá listar o tipo, identificador e texto do dispositivo da norma;   **C-** 3° coluna, denominada **Período de Vigência** retorna o período de vigência da norma. Se o campo "Data final da vigência" (Painel "Dispositivo da norma") não for informado, apresentar a mensagem "em aberto";   **D-** 4° coluna, denominada **Situação** ”deve apresentar se o registro está sendo usado, conforme a regra de domínio RD14;   **•** exibir abaixo da grid `Dispositivo da norma -  << tipo da legislação penal >> -  << número da legislação penal >>` no canto inferior direito a mensagem `Foram encontrados: <incluir aqui a quantidade de registros da grid> resultados`.   Já no canto inferior esquerdo, um paginador estará disponível, possibilitando ao usuário navegar entre as páginas da grid. | Funcionalidades:   Legislação penal - Dispositivo da norma      Caso de teste:   PJe-764 |

## RI232

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel "Pesquisar Tipo de origem" | O painel “Pesquisar Tipo de origem” tem a finalidade de filtrar os tipos de origem cadastrados. Ele será posicionado no canto superior esquerdo da tela e possuirá os seguintes campos e descrições:   **a) Tipo de origem** – campo alfanumérico;   **b) Situação** – campo lista, sendo constituído pelos domínios da regra RD14.   No final do painel devem ser apresentados os botões **“Pesquisar”** e **“Limpar”**. | Funcionalidades:   Tipo de origem      Caso de teste:   PJe-789 |

## RI233

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Grid "Tipo de origem" | A exibição da lista de origens deve ser em uma grid denominada "Tipo de origem" e essa grid deve ter as seguintes características:   **•** exibir todos os procedimentos de origem que foram incluídos no sistema;   **•** a listagem dos registros deve obedecer à ordem de inclusão, do mais antigo para a mais recente;   **•** a grid deve conter três colunas com as seguintes configurações:   **A-** 1° coluna - a 1a linha dessa coluna não deve ter nenhuma informação ou ícone, porém em cada linha restante deverá conter o ícone "Selecionar" e “Inativar registro”;   **B-** 2° coluna, denominada “Tipo de Origem” deve retornar os tipos de origem cadastrados;   **C-** 3° coluna, denominada “Situação” deve apresentar se o registro está sendo usado, conforme a regra de domínio RD14;   **•** exibir abaixo da grid "Tipo de origem" no canto inferior direito a mensagem `Foram encontrados: <incluir aqui a quantidade de registros da grid> resultados`. | Funcionalidades:   Tipo de origem      Caso de teste:   PJe-789 |

## RI234

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel " Cadastrar tipo de origem" | Os campos responsáveis por cadastrar os dados da funcionalidade “Tipo de origem” devem ser apresentados no painel “Cadastrar Tipo de origem”. Os seguintes campos devem ser apresentados no painel:   **• a)** Tipo de Origem - Campo do tipo texto e de preenchimento obrigatório. Permite ao usuário digitar o tipo de origem da ocorrência. Exemplo: Delegacia de polícia.   **• b)** Obrigatório Informar Número do Procedimento de Origem - Campo de seleção única, contendo os domínios da regra RD28, e coerente com a regra RI18.   **• c)** Situação – Campo de seleção única, contendo os domínios da regra RD14.   Abaixo do campo "Tipo de origem", exibir a imagem de um ponto de exclamação dentro de um triângulo amarelo, com o seguinte texto ao lado: “\* Campos Obrigatórios”.   No final do painel deve ser apresentado o botão “Incluir”.   Para os casos onde será necessário editar o tipo de origem, aplicar a regra RI17. | Funcionalidades:   Tipo de origem      Caso de teste:   PJe-790 |

## RI235

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel "Vincular tipo de Procedimento de Origem" | A aba **“Tipo de Procedimento de Origem”** será apresentada ao lado direito da aba “Formulário”, dentro da funcionalidade “Tipo de Origem”. Essa aba possui o papel de vincular e desvincular os procedimentos de origem a um tipo de origem. Sendo assim, essa aba deverá conter as seguintes especificações:   **•** O primeiro campo apresentado possui o objetivo de pesquisar os tipos de procedimentos de origem listados no quadro abaixo. Esse campo deve estar localizado acima do primeiro quadro (lado esquerdo da tela);   **•** Abaixo do campo de pesquisa, serão apresentados dois quadros. O primeiro quadro listará todos os procedimentos de origem a serem vinculados (RN121). O segundo quadro, denominada “Tipos de Procedimento de Origem Adicionados” e localizado à direita da primeiro, lista os procedimentos de origem adicionados a um tipo de origem;   **•** Entre as duas caixas serão exibidos os botões “Vincular” e “Desvincular”. O botão “Vincular” deve estar de acordo com as definições da regra RN122. Já o botão “Desvincular” deve obedecer à regra RN123.   **•** Exibir o botão “Gravar” abaixo dos quadros “Tipo de Procedimento de Origem” e “Tipo de Procedimento de Origem Adicionado”. | Funcionalidades:   Tipo de origem      Caso de teste:   PJe-793 |

## RI236

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Botões "Vincular" e "Desvincular" | Os botões “Vincular” e “Desvincular” devem ser habilitados e desabilitados de acordo com as seguintes definições:   **•** Existindo dados a ser vinculado, habilitar o botão “Vincular”. Caso contrário, desabilitar o botão.   **•** Existindo dados a ser desvinculado, habilitar o botão “Desvincular”. Caso contrário, desabilitar o botão.   **•** Existindo dados em ambos os quadros, habilitar os dois botões. | Funcionalidades:   Tipo de origem      Caso de teste:   PJe-793 |

## RI237

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campos da aba "Condição da suspensão" | Os campos responsáveis por cadastrar os dados da aba “Condição da Suspensão” devem ser apresentados no painel “Condição da Suspensão”, que conterá os seguintes definições:   **• a)** Descrição - Campo texto e de preenchimento obrigatório. Permite ao usuário digitar a descrição da condição da suspensão.   **• b)** Campo de texto livre - Campo de seleção única e de preenchimento obrigatório, contendo os domínios da regra RD28, e coerente com a regra de interface RI18   **• c)** Situação – Campo de seleção única, contendo os domínios da regra RD14.   Ao lado do campo “Situação”, exibir o botão “Adicionar”. | Funcionalidades:   Tipo de suspensão      Caso de teste:   PJe-783 |

## RI238

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campos da grid "Condições da suspensão" | A exibição da lista de condições de suspensão deve ser em uma grid denominada "Condições da suspensão" com as seguintes características:   \- Listar todos os tipos de suspensão ativos e inativos incluídos no sistema, ordenando do mais antigo para a mais recente;   **A-** 1° coluna, - 1a coluna deverá conter os ícones: **"Selecionar registro"** e **“Remover registro”**;   **B-** 2° coluna, denominada **“Lista de condições para suspensão”** deve retornar os dados informados no campo “Descrição” do painel acima;   **C-** 3° coluna, denominada **“Campo de texto livre”** deve retornar os dados informados no campo “Campo de texto livre” do painel acima;   **D-** 4° coluna, denominada **“Situação”** deve apresentar se o registro está ativo ou inativo; | Funcionalidades:   Tipo de suspensão      Caso de teste:   PJe-783 |

## RI239

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel "Pesquisar Órgão do procedimento de origem" | O painel “Pesquisar Órgão do procedimento de origem” tem a finalidade de filtrar os tipos de procedimentos de origem cadastrados. Ele será posicionado no canto superior esquerdo da tela e possuirá os seguintes campos e descrições:   **a) Nome do Órgão do Procedimento de Origem** – campo alfanumérico;   **b) Estado:** - campo lista, apresentando os domínios especificados na regra RN320;   **c) Tipo de Origem** - campo lista, sendo composto pelos tipos de origens cadastrados na funcionalidade “Tipo de origem” (PJE\_UC006 ). O campo deve apresentar o valor default definido na regra RD93;   **d) Situação** – campo lista, sendo constituído pelos domínios da regra RD14. O campo deve apresentar o valor default definido na regra RD94;      No final do painel devem ser apresentados os botões **“Pesquisar”** e **“Limpar”**. | Funcionalidades:   Órgão do procedimento de origem      Caso de teste:   PJe-798 |

## RI240

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Grid "Órgão do procedimento de origem" | A exibição da lista de órgãos de procedimento de origem deve ser em uma grid denominada "Órgão do procedimento de origem" e essa grid deve ter as seguintes características:   **•** exibir todos os órgãos do procedimento de origem que foram incluídos no sistema;   **•** a listagem dos registros deve obedecer à ordem de inclusão, do mais antigo para a mais recente;   **•** a grid deve conter seis colunas com as seguintes configurações:   **A-** 1° coluna - a 1a linha dessa coluna não deve ter nenhuma informação ou ícone, porém em cada linha restante deverá conter o ícone "Selecionar" e “Inativar registro”;   **B-** 2° coluna, denominada “Nome do Órgão do Procedimento de Origem” deve retornar os nomes dos órgãos dos procedimentos de origem cadastrados;   **C-** 3º coluna, denominada ”Tipo de origem” deve retornar qual o tipo de origem daquele órgão de procedimento;   **D-** 4° coluna, denominada ”UF”, retorna qual o Estado do órgão do procedimento de origem;   **E-** 5° coluna, denominada ”Cidade”, deve apresentar qual a cidade do órgão do procedimento de origem;   **F-** 6° coluna, denominada “Situação” deve apresentar se o registro está sendo usado, conforme a regra de domínio RD14;   **•** exibir abaixo da grid "Órgão do procedimento de origem" no canto inferior direito a mensagem `Foram encontrados: <incluir aqui a quantidade de registros da grid> resultados`. | Funcionalidades:   Órgão do procedimento de origem      Caso de teste:   PJe-798 |

## RI241

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Máscara do campo "Telefone" | A máscara do campo deve estar no formado 99 999999999, onde os dois primeiros dígitos serão separados   em um campo numérico de apenas dois caracteres. O segundo campo permite a inclusão de até nove caracteres numéricos. | Funcionalidades:   Órgão do procedimento de origem      Caso de teste:   PJe-799 |

## RI242

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel cadastrar "Órgão do procedimento de origem" | Painel cadastrar "Órgão do procedimento de origem"Os campos responsáveis por cadastrar os dados da funcionalidade “Órgão do procedimento de origem” devem ser apresentados no painel **“Órgão do procedimento de origem”**, aba **“Formulário”**, devendo obedecer as seguintes definições:   **• a) Tipo de origem** - Campo lista e de preenchimento obrigatório. Esse campo deve ser composto pelos tipos de origens cadastrados no sistema (PJE\_UC006);   **• b) Código na origem** - Campo alfanumérico, coerente com a regra RN32. Esse campo permite a inserção de caracteres especiais e pode possuir a numeração especificada na regra RN31;   **• c) Nome órgão do procedimento de origem** - Campo alfanumérico e obrigatório.   **• d) CEP (99999-999)** - campo pesquisa, obrigatório e coerente com as regras RN321 e RN327;   **• e) Logradouro** - campo tipo alfanumérico, obrigatório e coerente com a regra RN327. Esse campo será preenchido conforme o CEP informado, podendo ser alterado;   **• f) Número** - campo alfanumérico;   **• g) Complemento** - campo alfanumérico.   **• h) Bairro** - campo tipo alfanumérico e coerente com a regra RN327. Após a validação do CEP, o campo poderá ser alterado;   **• i) Cidade** -Campo texto, obrigatório e coerente com a regra RN327. Após a validação do CEP, o campo ficara desabilitado;   **• j) UF** - Campo lista, sendo constituído pelos domínios da regra RI242;   **• k) Telefone** - Campo numérico e contendo a máscara definida na regra RI241;   **• l) Situação** – Campo de seleção única, contendo os domínios da regra RD14.   Abaixo do campo “Telefone”, exibir a imagem de um ponto de exclamação dentro de um triângulo amarelo, com o seguinte texto ao lado “Campos Obrigatórios”.   Abaixo da mensagem acima (\* Campos Obrigatórios), exibir o botão **“Incluir”**. | Funcionalidades:   Órgão do procedimento de origem      Caso de teste:   PJe-799 |

## RI243

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| UF | O campo UF deverá recuperar os registros da tabela **tb\_estado**. | Funcionalidades:   Órgão do procedimento de origem      Caso de teste:   PJe-799 |

## RI244

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Uso do dispositivo - Tipo penal | Se o dispositivo da norma prevê **tipo penal**, o assunto do criminal será obrigatório para concluir o cadastro. | Funcionalidades:   Legislação penal      Caso de teste:   PJe-764;   PJe-786 |

## RI245

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Registros de documentos anexados ao processo | Um documento será visível às partes quando ele for protocolado, ou seja, quando o processo é cadastrado na base e recebe uma numeração gerada pelo sistema. Se a parte vinculada ao processo for uma pessoa física, os documentos somente serão visualizados caso a PF se cadastre no sistema como Jus Postulandi.   Cabe apenas ao usuário que está efetuando o cadastro do processo visualizar as datas e horas de gravação ou de assinatura, conforme as seguintes situações:   **1.** Caso o documento seja apenas gravado, será possível sua visualização em “Assinar documentos pendentes”.   **2.** Se o documento for assinado, visualize-o em “Processo não protocolado”.   **3.** Após o processo ser protocolado, o documento do processo será visível no painel do usuário, aba “Acervo Geral”.   Se não ocorrer nenhuma das situações, o processo segue seu fluxo e os documentos (juntamente com suas datas e horas) serão visualizados na aba “Processo”, grid “Documentos”, coluna “Anexos”, ícone “Verificar assinaturas digitais”, pelo perfil que está recebendo o processo em questão. | Funcionalidades:   Acervo geral;   Assinar documentos pendentes;   Processo não protocolado |

## RI246

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Movimentações e complementos de movimentações | As movimentações podem ter complementos. Quando um complemento estiver associado a um movimento, ambos devem   ser apresentados unidos na coluna “Último movimento” do painel de listagem de processos, e na aba “Movimento” do processo. | Funcionalidades:   Painéis;   Fluxo;   Movimentações processuais;   RI193 |

## RI247

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Cadastro de autoridade | O cadastro de autoridades é facilitado através de um campo de sugestão. A lista de sugestões de partes exibe os primeiros 30 elementos do filtro digitado em duas colunas de 15 elementos. | Funcionalidades:   Cadastro de partes |

## RI248

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da aba "Processo" da tarefa que prepara remessa de manifestação processual para envio ao 2º grau. | A aba "Processo" deve conter o(s) seguinte(s) comportamento(s):   **1.** Ao ser exibida a aba "Processo", o sistema deverá consultar as competências da instância superior (neste caso, do 2º grau) para **verificar se há conflito de competência**, isto é, se há mais de uma competência possível na jurisdição referente à classe versus assunto ou referente às partes da remessa em questão.   Se houver conflito de competência, a mensagem MN204 deve ser exibida no rótulo de um painel e dentro desse painel deve ser exibido uma caixa de combinação (comboBox) contendo a lista de competências da instância superior em questão. Nessa situação, é obrigatório escolher uma nova competência.   **2.** Exibir **os dados da remessa**, apenas para conferência/consulta desses dados (sem edição), por meio do(s) seguinte(s) campo(s):   **1-** Um painel denominado **"Detalhes do Processo"** que deverá agrupar a exibição dos dados:   **\-** Rótulo **"Jurisdição"** seguido da descrição da jurisdição.   **\-** Rótulo **"Valor da Causa"** seguido do valor monetário da causa.   **\-** Rótulo **"Número Processo"** seguido do número do processo.   **2-** Uma tabela (ou grid) contendo a lista dos assuntos (escolhidos na aba "Assuntos" especificada na regra RI21); essa tabela é formatada com duas colunas:   **\-** 1ª coluna com rótulo denominado **"Assunto Principal"** e conterá um campo de opção (ou optionBox) para cada assunto exibido; somente o campo de opção do assunto principal deverá estar com marcação.   **\-** 2ª coluna com rótulo denominado **"Assunto"** e em cada linha dessa coluna devem ser exibidos os dados do assunto (descrição e código).   **3.** Um painel denominado **"Polo Ativo"** e dentro desse painel deve ser exibida uma tabela (ou grid) contendo a lista de todas as partes ativas do 'polo ativo' da remessa.   **4.** Um painel denominado **"Polo Passivo"** e dentro desse painel deve ser exibida uma tabela (ou grid) contendo a lista de todos as partes ativas do 'polo passivo' da remessa.   **5.** Os dados da parte, tanto no Polo Ativo quanto no Polo Passivo, que deverão ser exibidos: nome completo da parte, documento (cpf ou cnpj ou, caso exista, o documento que foi informado no cadastro da parte no cadastro do processo), descrição do tipo da parte (esse tipo deve estar compatível com o tipo definido na classe judicial escolhida previamente, essa classe diz respeito ao campo "Classe Judicial" explicado na regra RI5). Caso a parte seja representante de alguma outra parte, o nome dessa parte deve ser exibido com tabulação à esquerda.      A imagem ![ParticipanteAbaProcesso_NaRemessa!](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-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 "ParticipanteAbaProcesso_NaRemessa") exemplifica a formatação.      **6.** Se não houver partes ativas no polo "Outros interessados" da remessa, um painel deve ser exibido cujo rótulo deve ter a mensagem MN205.   **7.** Se houver partes ativas no polo "Outros interessados" da remessa, um painel deve ser exibido com rótulo "Outros interessados" e dentro desse painel deve ser exibida uma tabela (ou grid) contendo a lista de todas as partes ativas que compõem o polo "Outros interessados" da remessa. A tabela é formatada com duas colunas:   **1-** exibir o ícone e, quando acionado, deverá exibir os detalhes da parte;   a imagem ![OutrosInteressados!](https://docs.pje.jus.br/assets/images/OutrosInteressados-bb7b0d2192733a46f5594e8049e10b1a.png "OutrosInteressados") exemplifica a formatação dos detalhes da parte.   **2-** coluna "Participante" responsável por exibir o nome completo da parte, documento (cpf ou cnpj ou, caso exista, o documento que foi informado no cadastro da parte no cadastro do processo), descrição do tipo da parte (esse tipo deve estar compatível com o tipo definido na classe judicial escolhida previamente, essa classe diz respeito ao campo "Classe Judicial" explicado na regra RI5). Caso a parte seja representante de alguma outra parte, o nome dessa parte deve ser exibido com tabulação à esquerda.      A imagem ![ParticipanteOutrosInteressadosAbaProcesso_NaRemessa!](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-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 "ParticipanteOutrosInteressadosAbaProcesso_NaRemessa") exemplifica a formatação.      **8.** Um painel denominado **"Documentos"** e dentro desse painel deve ser exibida uma tabela (ou *grid*) contendo a lista de todos os documentos juntados ao processo judicial em questão e são ordenados pela data de juntada, da mais recente para mais antiga.   Essa lista de documentos também fará parte da remessa.   A tabela é formatada com colunas organizadas nessa ordem:   **1-** coluna "Id" responsável por exibir o identificador do documento.   **2-** coluna "Juntado em" responsável por exibir a data e a hora da assinatura do documento.   **3-** coluna "Documento" responsável por exibir a descrição do documento.   **4-** coluna "Tipo de documento" responsável por exibir o tipo de documento.   **5-** coluna "Visualizar" responsável por exibir o ícone chamado "Visualizar" caso o documento esteja no formato HTML ou o ícone caso esteja no formato PDF.   **6-** coluna "Certidão" responsável por exibir o ícone chamado "Visualizar" para visualização da certidão (recibo) do documento.   **7-** coluna "Validação" responsável por exibir a situação atual do documento.   **9.** Um painel denominado **"Características do Processo"** e dentro desse painel deve ser exibida uma tabela (ou *grid*) contendo as colunas nessa ordem (como especificado na regra RI249):   **1-** Rótulo **"Segredo Justiça?"** seguido do texto **Sim** (caso a tramitação do processo judicial seja sob segredo de justiça) ou do texto **Não** (caso a tramitação do processo judicial não seja sob segredo de justiça).   **2-** Rótulo **"Justiça Gratuita?"** seguido do texto **Sim** (caso o processo judicial tenha concessão de gratuidade judiciária) ou do texto **Não** (caso o processo judicial não tenha concessão de gratuidade judiciária).   **3-** Rótulo **"Pedido de Liminar/Antecipação de Tutela?"** seguido do texto **Sim** (caso o processo judicial tenha concessão de pedido de liminar/antecipação de tutela) ou do texto **Não** (caso o processo judicial não tenha pedido de liminar/antecipação de tutela).   **10.** Um painel denominado **"Prioridade em Processo"** e dentro desse painel deve ser exibida uma tabela (ou grid) contendo a lista de todas as prioridades processuais da remessa. A única coluna da tabela denominada "Prioridade de processo" deverá exibir a descrição da prioridade.   **3-** Exibir um botão denominado **"Gravar"** responsável por gravar os dados da remessa. Os dados da remessa e os respectivos documentos (conforme regra RN495) devem ser gravados em variável (eis) de fluxo para posterior envio e a mensagem MN209 deve ser exibida.   A ação do botão **"Gravar"** não pode modificar os dados do processo judicial originário (isto é, processo que dá origem a remessa em questão) conforme regra RN329.   **4-** Exibir um botão denominado **"Remeter"** responsável por enviar a remessa para a instância de 2º grau somente se as restrições de negócio forem obedecidas com sucesso conforme rege a regra RN494.   Caso a remessa tenha sido enviada com sucesso, as regras RN546, RN547, RN496 e RN550(no que diz respeito ao envio de remessa) devem ser atendidas e a mensagem MN210 deve ser exibida.   O sistema registrará o alerta "Processo enviado à instância superior." vinculado ao processo judicial em questão e também aplicará as proibições de acordo com a regra RN549.   A ação do botão **"Remeter"** não pode modificar os dados do processo judicial originário (isto é, processo que dá origem a remessa em questão) conforme regra RN329.   **5-** Exibir um botão denominado **"Deletar"** responsável por apagar/limpar o conteúdo da(s) variável(eis) de fluxo que armazenam os dados da remessa e após concluída essa operação a mensagem MN211 deve ser exibida.   A ação do botão **"Deletar"** não pode modificar os dados do processo judicial originário (isto é, processo que dá origem a remessa em questão) conforme regra RN329. | Funcionalidade(s):      Preparar remessa para o 2º grau.      Casos de teste:   PJe-846. |

## RI249

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da aba "Características do Processo" da tarefa que prepara remessa de manifestação processual para envio ao 2º grau. | A aba "Características do Processo" (exclusivo da tarefa que prepara remessa de manifestação processual para envio ao 2º grau) deve conter o(s) seguinte(s) campo(s) **não editáveis:**   **1.** Um painel denominado **"Característica"** que deverá agrupar a exibição de alguns dados do processo:   **1-** Campo de opção **"Segredo Justiça?"** contendo as opções **Sim** (caso o usuário queira solicitar que a tramitação do processo judicial seja sob segredo de justiça) ou **Não** (caso contrário).   **2-** Campo de opção **"Justiça Gratuita?"** contendo as opções **Sim** (caso o usuário queria solicitar que o processo judicial tenha concessão de gratuidade judiciária) ou **Não** (caso contrário).   **3-** Campo de opção **"Pedido de liminar ou de antecipação de tutela?"** contendo as opções **Sim** (caso o usuário queira solicitar que o processo judicial tenha concessão de pedido de liminar/antecipação de tutela) ou **Não** (caso contrário).   **4-** Campo de texto restrito com máscara monetária **"Valor da Causa:"**.   **5-** O painel "Local da prestação de serviços e atividade econômica" é usado pela Justiça do Trabalho.   **2.** Um painel denominado **"Prioridade processual"** contendo uma tabela (ou grid) com a lista de todas as prioridades processuais do processo judicial em questão. Essa tabela não permite edição dos dados exibidos. A coluna denominada "Prioridade de processo" deverá exibir a descrição da prioridade. | Funcionalidade(s):      Preparar remessa para o 2º grau.      Casos de teste:   PJe-846. |

## RI250

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Comportamento para janela de incluir   informação processual | O comportamento da janela responsável pela tarefa que inclui informação processual   complementar de prisão deve obedecer as seguintes regras: RIXX, RIXX. | Funcionalidades:   Informação processual complementar - prisão.      Casos de teste:   PJe-777. |

## RI251

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campo "Entidade" do grid "Pesquisar"   exibido acima do grid que apresenta a lista de processos judiciais nos painéis de usuário. | O campo "Entidade" lista todos os tipos de pessoa (menu Configuração → Pessoa → Tipo de Pessoa) ativos do sistema. | Funcionalidade(s):      Cadastro de tipo de pessoa.   Painel do usuário. |

## RI252

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Situação do processo na sessão. | Especificação do campo "Situação do processo na sessão" da aba "Pesquisar processos da sessão do dia dd/mm/aaaa": este campo é responsável por exibir as situações possíveis em que um processo judicial pode ser caracterizado nas sessões de julgamento. Essa lista é preenchida conforme domínio definido na regra RD109.   A critério do usuário, a escolha de uma das situações exibidas poderá fazer parte do filtro de processos na tela "Sessão de julgamento". Exemplificando: se a situação "Pedido de sustentação oral" for escolhida, isto implica que, após acionar o botão "Pesquisar", serão exibidos todos os processos judiciais que se encontram na situação "Pedido de sustentação oral" da respectiva sessão de julgamento. | Funcionalidades:      Painel do secretário da sessão.   Sessão de julgamento. |

## RI253

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| "Tipo de petição ou documento" da tela "Modelo de documento"   (menu Configuração → Documento → Modelo → Modelo). | Listar todos os tipos de petição/documento ativos do sistema e que também pertençam ao tipo da aplicação do sistema (isto é: 1º, 2º ou 3º grau). | Funcionalidade(s):      Modelo de documento. |

## RI254

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos do painel Pesquisar relatório de produtividade. | Esta regra descreve a especificação de campos e comportamento esperado do painel "Pesquisar relatório de produtividade". Esse painel irá alterar seus campos de acordo com o tipo de pesquisa selecionada, ou seja **"Pesquisa por órgão julgador"** ou **"Pesquisar por magistrado"**.   Painel: Pesquisar relatório de produtividade | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado.- |

| Campo | Descrição | Tipo | Tamanho | Obrigatório | Editável | Regras | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pesquisar por: | Apresenta os domínios definidos na regra RD101. | Fixo | N/A | Não | C | RD101 | \- |
| Magistrado | Apresentado somente quando o tipo de pesquisa for por "Magistrado". O campo deve estar de acordo com a regra RI255. | Lista | N/A | Não | C | RI255 | \- |
| Comarca | Recupera as jurisdições ativas do sistema, conforme definido na regra RI256. | Lista | N/A | Não | C | RI256 | \- |
| Competência | Recupera as competências ativas do sistema, conforme definido na regra RI257. | Lista | N/A | Não | C | RI257 | \- |
| Órgão Julgador | Recupera os órgãos julgadores ativos do sistema e vinculados à jurisdição escolhida no campo "Comarca", conforme definido na regra RI258. | Lista | N/A | Não | C | RI258 | \- |
| Classe Judicial | Recupera as classes ativas do sistema, coerentes com as definições da regra RI259. | Lista | N/A | Não | C | RI259 | \- |
| Assuntos | Recupera os assuntos ativos do sistema, conforme definido na regra RI261. | Lista | N/A | Não | C | RI261 | \- |
| Selecione os movimentos processuais | Sub-painel que recupera as movimentações processuais, de acordo com as definições das regras RI206, RN342 e RI200. | Alfanumérico | N/A | Não | C | RI206; RN342; RI200 | \- |
| Período | Possibilita a inserção de uma data, conforme regras RI175 e RI2. | Data | N/A | Não | C | RI175; RI2 | \- |

## RI255

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Magistrados | O sistema deverá recuperar os nomes de todos os magistrados que estão ativos, com a possibilidade de selecionar   um ou mais magistrados. O campo deve estar de acordo com as definições da regra RI200. | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado. |

## RI256

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Comarca | Uma Comarca (ou Jurisdição) é o território ou circunscrição territorial em que o juiz de direito de primeira instância exerce sua jurisdição. Assim, o sistema deverá recuperar todas as jurisdições ativas de instâncias de 1° Grau. Essa recuperação de dados será distinta para os dois tipos de pesquisa da funcionalidade. Para pesquisas por magistrado, o campo deve possibilitar ao usuário selecionar uma, mais de uma, ou todas as jurisdições recuperadas dentro do campo, além de estar em conformidade com a regra RI200. Para pesquisas por órgão julgador, o campo recupera as jurisdições sem nenhuma opção adicional. | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado. |

## RI257

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Competência | O sistema deverá recuperar as competências ativas. Essa recuperação de dados será distinta para os dois tipos de pesquisa da funcionalidade. Para pesquisas por magistrado, o campo deve possibilitar ao usuário selecionar uma, mais de uma, ou todas as competências recuperadas dentro do campo, além de estar em conformidade com a regra RI200. Para pesquisas por órgão julgador, o campo recupera as competências sem nenhuma opção adicional. | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado. |

## RI258

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Órgão Julgador | O sistema deverá recuperar somente os órgãos julgadores da competência selecionada. Essa recuperação de dados será distinta para os dois tipos de pesquisa da funcionalidade. Para pesquisas por magistrado, o campo deve possibilitar ao usuário selecionar um, mais de um, ou todos os órgãos julgadores recuperados dentro do campo, além de estar em conformidade com a regra RI200. Para pesquisas por órgão julgador, o campo recupera os órgãos julgadores sem nenhuma opção adicional. | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado. |

## RI259

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Classe Judicial | O sistema deverá trazer somente as classes vinculadas a aplicação de classe de primeiro grau e a competência selecionada. Essa recuperação de dados será distinta para os dois tipos de pesquisa da funcionalidade. Para pesquisas por magistrado, o campo deve possibilitar ao usuário selecionar uma, mais de uma, ou todas as classes recuperadas dentro do campo, além de estar em conformidade com a regra RI200. Para pesquisas por órgão julgador, o campo recupera as classes judiciais sem nenhuma opção adicional. | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado. |

## RI260

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da janela responsável pelo registro manual de ciência de expedientes. | Comportamento da janela responsável pelo registro manual de ciência de expedientes:   **\-** Uma tabela de seleção (ou *grid*) é exibida contendo todos os expedientes (atos de comunicação) do processo judicial em questão que não possuem data de ciência e que não estão fechados e, além disso, somente àqueles expedientes cujo meio de comunicação é um dos seguintes meios de comunicação permitidos:   • P("Diário Eletrônico");   • L("Carta") - exemplos: carta rogatória, de ordem ou precatória;   • D("Edital");   • N("Comunicação");   • S("Pessoalmente");   • T("Telefone").   **\-** Cada expediente do processo é exibido em uma linha dessa tabela e a tabela é formatada com colunas assim organizadas:   • 1ª coluna (ícone e título "Ações"): exibe o ícone chamado "Visualizar" e, ao ser acionado, uma nova aba no navegador será aberta e exibirá somente o documento elaborado para o expediente, esse documento pode ser 'documento novo' ou 'documento do processo'. Os documentos do processo vinculados ao referido expediente não são exibidos.   • 2ª coluna (título "Ato de comunicação"): exibe os seguintes dados - tipo do documento, identificador do expediente, nome do destinatário (nome da parte que recebeu o ato de comunicação/expediente) e o meio de comunicação (data e hora de criação do ato de comunicação/expediente).   • 3ª coluna (título "Registro"): apresenta um campo data chamado "Data de ciência" o qual deve permitir a digitação da data. A data também pode ser escolhida graficamente, a partir de um calendário exibido ao ser clicado no ícone disponível ao lado do campo data. A data de ciência é de preenchimento obrigatório pelo usuário. Um botão chamado "Registrar" deve estar disponível logo abaixo do campo data e o seu comportamento é regido pela regra RI271.   • Após concluída a exibição dos expedientes na tabela, um botão chamado "Registrar todos" deve estar disponível e o seu comportamento é regido pela regra RI272.   • Um esboço gráfico da janela descrita acima é exibido a seguir:      ![Tela_RegistroManual!](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/y+YZvn/EF22/3ncvuO7Pv7OzZc/b7Zs55Humnc3Yu78zssb+d+Z3Zs5OPX/1gAAAAAACOVuzdlG8AAAAAsAXKNwAAAADYEuUbAAAAAGyJ8g0AAAAAtkT5BgAAAABbonwDAAAAgC1RvgEAAADAlijfAAAAAGBLlG8AAAAAsCXKNwAAAADYEuUbAAAAAGyJ8g0AAAAAtkT5BgAAAABbonwDAAAAgC1RvgEAAADAlijfAAAAAGBLlG8AAAAAsCXKNwAAAADYEuUbAAAAAGyJ8g0AAAAAtkT5BgAAAABbonwDAAAAgC1RvgEAAADAlijfAAAAAGBLlG8AAAAAsCXKNwAAAADYEuUbAAAAAGzJRuXbJZdcIiIiIiIiIiIiciyyTRuXb3ecfuzE5KQdr4iIiIiIyCZx7SQiY4zybQDxAiIiIiIiItIf104iMsYo3wYQLyAiIiIiIiL9ce0kImOM8m0A8QIiIiIiIiLSH9dOIjLGKN8GEC8gIiIiIiIi/XHtJCJjzIkt3973+38YXvmmN4dXvfVt4VW7v57PbF5c5vd+/6LsGEcVLyAiIiIiIiL9ce0kImPMiS3f3vL+D4aLP3nFWnnrbNncGEcVLyAiIiIiIiL9ce0kImPMiSzf/uS5zw2fmEzCxx83CRd/8yx/uZmPz6Z94psm4dLZMpfNcvksn/3ev5cd6yjiBUREROTw+cz5O2EymYb3nL4wPO/ct4bPZJYREZFxx7WTiIwxJ7J8u/jxk3DLBe8I177sRbO8OFz78heH637pJeG6V5S5/mU/H679xReF33rXb4RXvf2C8Jp3/EZ4xwt/LjvWUcQLiIjIMchVbw3nTCZhkit94rznX9icdtB8YBoms/Gf94HMvLGleq6O+lje8/xYvP1ZOO/cSTjn/D/LLiMiIuOOayeZn3OlOex51kHOTY7ivE5OXE5s+XbrBW8Pn/62bwqfftIkfOZbJ+GKpzwhXPGdfz1c8R1PDJ978uPCu3/0R8LH/u8V4b6HHg433npb+KM//nQ478272fEOGy8gIiLjT3HX1bk7sxO3nXDeVem8sgw69EnhcSrfRERENoxrJ1kqys7oOdIRndfJicvJLN+eOAkXzf7n/INZog9+/gvho7PvL/pL5fT9//Dj4SVvfEu44ZZT4YMfvjD8yq+9Nbz6vPPDG974pux4h40XEBGRsefC8LzZ68c551/YuuuqOkGbzStS3xVXnSTW6TpZLN9GWS3z/NaJ5QZjNE4Uu9avT2ir7RWZ7fd5z18sOz++1snve4pl4t1ni3nnzMaJX4t16+231uvax3K8KskdhQddft3nSkREhh/XTrJUvtXnHPX5yYrX/c5zq1XnJvPpufO66hxwfr5TnQc595BWTmT59rEnTMJNP/u8cOrlPxdunG3vg1deFW575YvCqde/NNz62peEr730BeFl5785XL1/Tbjk0svDy17zunDbv/5nxYcv5MY7bLyAiIiMPMUJVnnHW3myVp14FWn9hrTjBHHppKw1vS6Wisftk85k+8tjVNPT7a7ah2pevb/1yWe9bOP4WvuRK9+a4zT3pVivax/j9EZZWS1z0OXTZebzkudORERGFddO0jiPiI/T1/bsvPQcYjGv89yqde5QLDf/pV77zreyfGv80s+5h2RyIsu3j/6VSbjrP7897D/9W8LF3/mE8PGnPjFc8z3fFq77nieHG57+18LNT5mE91z4kbB/zXXhyj+5Krz4pa8IL33168OrXn9edrzDxguIiMi40zgpa5/0tU7Slsu5+q656gStytJyyYlbXYi10z6pW95W1/RkH7InrYvH5brNYquelyvfmieey+t17WORarn0+A6/fP75FhGRccS1k7Rf72Pq1/Xydb85LyZ7TpCe4yTnJu073MppdTrKt/lj5x6Sz8kt3974S+H6v//t4c+f+dRww7lPDTef8x3h7md8S/g3P/Or4bxXvC3ccPUXwuev+kL44tVfDnfcc284dedd4eWvfm12vMPGC4iIyJhTnXS1Mz8J21b5VhVZyTrtLG+ra3qyD42Tz1nS0my+7vbLt8Z2lo79MMs7ARYRGXNcO0nj/KN1vtE4H2itt3ROkJwvtM9pyqTnePV6+fItPa9w7iG5nMjy7aLHT8JdL52GG//R08JN3/+3wqnve1q4/5lPDv/uBb8cHv/Oa8Kn7g/hhR+5IXzst98dXvCyV4afecXrwht+/Me87VRERJaSO8lrlFDtk7RVpVS1frpcfRJYjrnqRDM9yauSnlRmCrbsPrRPPlv71zjexjj1b4mr/Vh3Gx37mD6H5TY3XH7VfsTHIiIyqrh2kva5Sve5SescqXEOkT+36j936C/fnHtILiezfHvCJNz90z8Sbv3HTw+3P+e7w/3f/13heS88P/z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 "Tela_RegistroManual")   • A mensagem de aviso definida na regra MN222 deve ser exibida (antes da exibição da tabela) caso exista na lista de expedientes exibidos na tabela algum expediente cujo meio de comunicação é "Edital". | Funcionalidade(s):   Registro manual de ciência de expedientes |

## RI261

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Assunto | O sistema deverá recuperar somente os assuntos que são vinculados à classe judicial selecionada. Essa recuperação de dados será distinta para os dois tipos de pesquisa da funcionalidade. Para pesquisas por magistrado, o campo deve possibilitar ao usuário selecionar um, mais de um, ou todos os assuntos recuperados dentro do campo, além de estar em conformidade com a regra RI200. Para pesquisas por órgão julgador, o campo recupera os assuntos sem nenhuma opção adicional. | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado. |

## RI262

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos do painel Relatório de produtividade. | Esta regra descreve a especificação de campos e comportamento esperado do painel "Relatório de produtividade". Esse painel apenas apresenta o resultado da pesquisa genérica, ou seja, apenas permite acesso ao resultado do relatório detalhado (sintético ou analítico).   Painel: Relatório de produtividade | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado. |

| Campo | Descrição | Tipo | Tamanho | Obrigatório | Editável | Regras | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Processo | Recupera o número do processo, conforme os filtros utilizados no painel de pesquisa. | Texto | N/A | N/A | Label | N/A | \- |
| Classe Judicial | Recupera a classe judicial cadastrada no processo, conforme os filtros utilizados no painel de pesquisa. | Texto | N/A | N/A | Label | N/A | \- |
| Assunto | Recupera os assuntos cadastrados no processo, conforme os filtros utilizados no painel de pesquisa. | Texto | N/A | N/A | Label | N/A | \- |
| Polo ativo | Recupera o polo ativo cadastrado no processo. | Texto | N/A | N/A | Label | N/A | \- |
| Polo passivo | Recupera o polo passivo cadastrado no processo. | Texto | N/A | N/A | Label | N/A | \- |
| Data do último movimento | Recupera a data e a hora do último movimento gerado dentro do processo. | Texto | N/A | N/A | Label | N/A | \- |

## RI263

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Recuperação de dados para painéis de resultado de pesquisa | Ao acessar a funcionalidade, o painel que retorna o resultado da pesquisa deve ser apresentado em branco, contendo apenas os nomes das colunas. Preencher as colunas apenas quando o botão "pesquisar", do painel de pesquisa, for acionado. | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado. |

## RI264

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Habilitação dos botões de geração de relatório de produtividade por órgão julgador/ magistrado | Os botões denominados **“Gerar relatório sintético”** e **“Gerar relatório analítico”** serão habilitados somente após o resultado da pesquisa genérica, ou seja, após a pesquisa apresentada no painel “Relatório de produtividade”. | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado. |

## RI265

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da janela do relatório de produtividade analítico | O comportamento da janela que apresenta o relatório de produtividade analítico (por órgão julgador ou por magistrado) será composto pelas seguintes regras, definidas nessa ordem: RI266 e RI267. Entre a apresentação do cabeçalho do relatório (definido pela RI266) e os agrupadores de movimentos, devem ser exibidos dois botões, denominados "Gerar PDF" e "Gerar XLS", nessa ordem. Após o último agrupador de movimentações, exibir o quantitativo de movimentos do relatório e o total de processos do relatório.   Nos casos onde o tipo de pesquisa for por "Magistrado", o sistema deverá organizar os relatórios por meio de abas. Por exemplo, no momento da pesquisa, o usuário seleciona dois magistrados para geração do relatório. Ao apresentar o relatório, cada magistrado possuirá uma aba (com o seu nome), que conterá o relatório (cabeçalhos e agrupadores de movimentações). | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado. |

## RI266

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos do painel Dados do relatório sintético ou relatório analítico. | Esta regra descreve a especificação de campos e comportamento esperado do painel "Dados do relatório sintético" ou "Dados do relatório analítico". Esse painel representa o cabeçalho do relatório de produtividade.   Painel: Dados do relatório sintético ou analítico | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado. |

| Campo | Descrição | Tipo | Tamanho | Obrigatório | Editável | Regras | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tribunal | Recupera o nome do tribunal da instalação do sistema. | Texto | N/A | N/A | Label | N/A | \- |
| Comarca | Recupera a jurisdição selecionada para a geração do relatório. | Texto | N/A | N/A | Label | N/A | \- |
| Competência | Recupera a competência selecionada para a geração do relatório. | Texto | N/A | N/A | Label | N/A | \- |
| Órgão Julgador | Recupera o órgão julgador selecionado para a geração do relatório. | Texto | N/A | N/A | Label | N/A | \- |
| Magistrado | Será retornado apenas quando o relatório gerado for do tipo "Magistrado", recuperando o nome do magistrado selecionado para a geração do relatório. | Texto | N/A | N/A | Label | N/A | Será retornado apenas quando o relatório gerado for do tipo "Magistrado". |
| Período | Recupera o período informado para a geração do relatório. | Texto | N/A | N/A | Label | N/A | \- |

## RI267

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da tabela que compõe os dados do relatório analítico. | Esta regra descreve a especificação de colunas que geram a tabela de informações do processo, sendo separadas pela movimentações processuais (eventos de fluxo).   `<nome da movimentação processual>`, conforme definições da regra RI268.   O relatório contendo as movimentações processuais será separado pelos processos que passaram pelo nó de tarefa. Esses movimentos serão listados em agrupadores, e dentro deles haverá uma "grid" que lista todos os processos que passaram pela movimentação em questão. Essa grid deve conter 6 colunas com as seguintes características:   • 1a coluna - a 1a linha dessa coluna deve ser denominada "Processo" e, para cada linha restante deve-se retornar os números dos processos que passaram pela movimentação;   • 2a coluna - a 1a linha dessa coluna deve ser denominada "Classe judicial" e, para cada processo listado nas demais linhas deve-se exibir a classe judicial cadastrada no processo;   • 3a coluna - a 1a linha dessa coluna deve ser denominada "Assunto" e, para cada processo listado nas demais linhas deve-se exibir o assunto cadastrada no processo;   • 4a coluna - a 1a linha dessa coluna deve ser denominada "Polo Ativo" e, para cada processo listado nas demais linhas deve-se exibir o nome da parte do polo ativo cadastrado no processo;   • 5a coluna - a 1a linha dessa coluna deve ser denominada "Polo Passivo" e, para cada processo listado nas demais linhas deve-se exibir o nome da parte do polo passivo cadastrado no processo;   • 6a coluna - a 1a linha dessa coluna deve ser denominada "Último movimento" e, para cada processo listado nas demais linhas deve-se exibir a data e a hora do movimento;   exibir abaixo da "grid" no canto inferior direito a mensagem `Foram encontrados: <incluir aqui a quantidade de processos que passaram pela movimentação> resultados`. | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado |

## RI268

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Movimentações processuais separadas por agrupadores para geração de relatório analítico | Quando o resultado do relatório de produtividade for do tipo analítico, o sistema deve separar os dados do relatório por agrupadores. Esses agrupadores terão como título o nome do movimento, e serão compostos pelos detalhes dos processos que passaram por essa movimentação (nó de fluxo). Os agrupadores permitem a expansão e recolhimento das informações que compõem a movimentação, especificadas na RI267. |  |
| Após a geração do relatório, apresentar apenas o primeiro agrupador expandido, e os demais devem ser apresentados retraídos. | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado. |  |

## RI269

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da janela do relatório de produtividade sintético | O comportamento da janela que apresenta o relatório de produtividade sintético (por órgão julgador ou por magistrado) será composto pelas seguintes regras, definidas nessa ordem: RI266 e RI270. Entre a apresentação do cabeçalho do relatório (definido pela RI266) e a tabela de movimentos, devem ser exibidos dois botões, denominados "Gerar PDF" e "Gerar XLS", nessa ordem.   Nos casos onde o tipo de pesquisa for por "Magistrado", o sistema deverá organizar os relatórios por meio de abas. Por exemplo, no momento da pesquisa, o usuário seleciona dois magistrados para geração do relatório. Ao apresentar o relatório, cada magistrado possuirá uma aba (com o seu nome), que conterá o relatório (cabeçalhos e tabelas de movimentações). | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado. |

## RI270

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da tabela que compõe os dados do relatório sintético. | Esta regra descreve a especificação das colunas que geram a tabela de movimentos por órgão julgador ou por magistrado.   O relatório sintético apresenta apenas o total de movimentos que ocorreram nos processos, de acordo com os filtros de pesquisa selecionados. Esse relatório será organizado por meio de uma "grid" que lista apenas os nomes das movimentações e seu quantitativo. A "grid" deve conter 2 colunas com as seguintes características:   • 1a coluna - a 1a linha dessa coluna deve ser denominada "Movimento" e, para cada linha restante deve-se retornar os nomes dos movimentos utilizados pelo órgão julgador ou magistrado (de acordo com o filtro informado);   • 2a coluna - a 1a linha dessa coluna deve ser denominada "Total de movimentos" e, para cada movimento listado nas demais linhas deve-se exibir o total de processos que passam pelo movimento;   • exibir ao final do relatório o total geral de movimentos da coluna "Total de movimentos". | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado |

## RI271

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| botão "Registrar". | Ao ser acionado, deverá registrar que o expediente/ato de comunicação em questão foi considerado como comunicado a seu destinatário pelo sistema. Essa operação registra no campo "dt\_ciencia\_parte" a data informada e o usuário que registrou a ciência. Caso a data de ciência não seja informada, a mensagem de aviso MN221 deve ser exibida ao usuário e a operação de registro de ciência não é efetivada. | Funcionalidade(s):   Registro manual de ciência de expedientes |

## RI272

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| botão "Registrar todos". | Ao ser acionado, terá o mesmo comportamento do botão "Registrar" definido na regra RI271, porém envolverá mais de um expediente, serão os expedientes exibidos na tabela especificada na regra RI260. | Funcionalidade(s):   Registro manual de ciência de expedientes |

## RI273

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campo data disponível na coluna "Prazo" quando o "Tipo do Prazo" é 'data certa'. | Na preparação de um ato de comunicação (expediente), caso a escolha do "Tipo do Prazo" seja 'data certa', o campo data ficará disponível na coluna "Prazo". Somente é permitido a digitação ou escolha de uma data válida no formato dd/mm/aaaa e, além disso, a data não pode ser uma data retroativa, ou seja, somente é permitido uma data que seja superior ou igual a data atual (data que está preparando o expediente), caso essa restrição não seja atendida a mensagem MN223 deve ser exibida e o expediente não poderá ser concluído. | Funcionalidade(s):      Preparar ato de comunicação. |

## RI274

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Relatórios gerados em PDF | O cabeçalho do documento pdf deve conter o brasão da republica federativa do brasil posicionado ao lado esquerdo do documento.   No centro do cabeçalho deverá conter as seguintes informações:   1° nome do sistema, denominado "Processo Judicial Eletrônico";   2° abaixo do item anterior, retornar o nome do parâmetro "nomeSecaoJudiciaria";   3° em seguida, apresentar o título do relatório, denominado "Relatório de produtividade".   Abaixo do cabeçalho do documento pdf, os dados do relatório serão organizados de forma sequencial, conforme definições da regra RI266.   Em seguida, o documento pdf irá retornar o resultado do relatório analítico ou sintético. Para cada um, serão listadas suas respectivas definições, a saber:   **Para relatórios analíticos:**   Serão listados os movimentos e seus respetivos processos, contendo os mesmos campos definidos na regra RI267.   Ao final do relatório, apresentar o quantitativo de movimentos e o total geral, ambos posicionados ao lado direito do relatório.   **Para relatórios sintéticos:**   Listar os movimentos e seus respectivos quantitativos, conforme as definições de colunas da regra RI270.      A data e a hora da geração do relatório será recuperada após as informações anteriores, e o rodapé do relatório deverá conter um paginador de acordo com o padrão "Pág.1". | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado |

## RI275

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Relatórios gerados em XLS | Os relatórios apresentados no formato XLS deverão recuperar todos os campos da janela do sistema, sendo ordenados seguinte forma:   **Cabeçalho** - deve recuperar todos os campos e seus valores, sendo ordenados um ao lado do outro, na primeira linha do relatório.   **Relatórios**   Para relatórios analíticos: a primeira linha desse relatório conterá o título "Relatório de Produtividade". A segunda linha retorna o nome da movimentação. A terceira apresenta as colunas: N° Processo, Classe Judicial, Assunto, Polo Ativo, Polo Passivo e Data da última movimentação, ordenados nessa sequencia. Para cada uma dessas linhas, o relatório conterá os processos e suas respectivas informações, conforme foi estabelecido pela regra RI267. A ultima linha deverá apresentar o total de movimentos e total geral de processos. Cabe ressaltar que o relatório no formato XLS obedece ao relatório apresentado na janela do sistema.   Para relatórios sintéticos: a primeira linha desse relatório conterá o título "Relatório de Produtividade". A segunda linha, separada em duas colunas, apresenta o nome das movimentações e o total de movimento de cada uma delas, conforme foi estabelecido pela regra RI270. Assim como no relatório analítico, o sintético também obedece à janela do sistema. | Funcionalidades:   Relatório de produtividade órgão julgador/ magistrado |

## RI276

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| disponível | disponível | disponível |

## RI277

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| disponível | disponível | disponível |

## RI278

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Formato das etiquetas de expedientes do tipo correios | Para cada expediente do tipo "Correios" gravado no PJE, haverá um Objeto Postal correspondente gravado na base "POSTAGEM", sendo o relacionamento mantido pelo número de etiqueta.   O AR deve seguir o layout:   ![Modelo_AR_Integrado!](https://docs.pje.jus.br/assets/images/Modelo_AR_Integrado-3a097ccf60f5cbf426de4baabfd916e7.png "Modelo_AR_Integrado")   serão: endereço do destinatário, endereço do remente e número da etiqueta. Essas informações serão separadas em dois quadros, sendo que o primeiro quadro será a etiqueta que comprova o recebimento (fica em poder do destinatário), e o segundo será a etiqueta do remente. Abaixo seguem os campos a serem recuperados:   **Primeiro quadro** (posicionado a esquerda):   • O cabeçalho deverá possuir o a nomenclatura fixa **DESTINATÁRIO**, e abaixo dele retornar o nome, endereço, CEP, Cidade e UF do destinatário. As informações sobre endereço estão disponíveis na regra RN435.   • No canto superior direito apresentar o tipo de chancela (sendo inicialmente do tipo Carta), juntamente com o numero do contrato/ano/DR, e o nome fantasia do tribunal. Logo abaixo da chancela, a data da postagem deverá ser recuperada pelo sistema, ou seja, apresentar a data do dia do envio da etiqueta, conforme regra RN434.   • No centro do quadro, apresentar o código de barras (padrão 128) juntamente com o número da etiqueta postal, conforme regra RN417.   • O rodapé deverá possuir a nomenclatura fixa **Remetente**, e abaixo dele retornar o nome, endereço, CEP, Cidade e UF do Tribunal que está enviando o expediente.   • **Segundo quadro** (posicionado a direita):   • O cabeçalho deverá conter a logomarca dos Correios, o nome do Web Service (denominado SIGEP), o tipo do serviço adicional (Aviso de Recebimento) e o número do contrato do tribunal com a ECT.   • O corpo do quadro será dividido em nove subquadros, onde:   1° subquadro, no seu cabeçalho, conterá o nome, endereço e CEP do destinatário (RN435). O centro apresentará o código de barras (padrão 128) e o número da etiqueta (RN417). Abaixo, retornar o nome do remetente, e o endereço para devolução do objeto;   2° subquadro deverá apresentar as informações fixas para as tentativas de entrega;   3° subquadro retorna apenas o título fixo “Carimbo Unidade de Entrega”;   4° subquadro retorna o título fixo “Rubrica e Matrícula do Carteiro”;   5° subquadro retorna o título fixo “Declaração de conteúdo”;   6° subquadro retorna o título fixo “Assinatura do recebedor”;   7° subquadro retorna o título fixo “Data de entrega”;   8° subquadro retorna o título fixo “Nome legível do recebedor”;   9° subquadro retorna o título fixo “N°. Doc. de Identidade”. | Funcionalidades:   Conector ECT |

## RI279

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Campos do objeto postado atualizados pelo temporizador | A RN420 afirma que, enquanto o status do processamento não estiver encerrado, o temporizador irá atualizar os campos de um objeto. Abaixo seguem os campos que serão atualizados diariamente pelo temporizador:   • Peso;   • Valor;   • Status da postagem (processamento);   • Status do rastreio (objeto);   • Tipo de serviço;   • Cubagem;   • Dimensões do objeto (altura, largura, comprimento, diâmetro);   • Data da postagem;   • Número do comprovante de postagem.   Esses campos não serão visíveis ao usuário, sendo apenas armazenados em banco. Esses dados servirão apenas para controle dos Correios, no momento de emitir a cobrança pelos serviços prestados ao Tribunal. | Funcionalidades:   Conector ECT |

## RI280

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos da tabela **Rastreio de Objeto Postal** | Esta regra descreve a especificação de campos e o comportamento esperado da tabela "Rastreio de Objeto Postal" quando um objeto postal tem seu rastreio solicitado pelo usuário. Todos os campos apresentados na tabela serão recuperados do SRO.   Tabela: Documentos postados pela ECT | Funcionalidades:   Consultar detalhes do processo. |

| Campo | Descrição | Tipo | Tamanho | Obrigatório | Editável | Regras | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Data do Evento | Retorna a data de ocorrência de um evento do rastreio. | Date | N/A | N/A | Label | N/A | \- |
| Hora do Evento | Retorna a hora de ocorrência de um evento do rastreio. | Time | N/A | N/A | Label | N/A | \- |
| Evento | Descrição do evento ocorrido. | Texto | N/A | N/A | Label | N/A | \- |
| Cidade | Cidade onde o evento ocorreu. | Texto | N/A | N/A | Label | N/A | \- |
| UF | UF onde o evento ocorreu. | Texto | N/A | N/A | Label | N/A | \- |

## RI281

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Objetos Postais Disponíveis | Com o cartão de postagem previamente selecionado, todos os Objetos Postais cadastrados para o cartão e que ainda não fazem parte de uma PLP, deverão ser listados no quadro "Objetos Postais Disponíves".   Enquanto uma PLP não for postada, os Objetos Postais poderão ser associados e desassociados. | Funcionalidades:   Conector ECT |

## RI282

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da aba responsável por pesquisar as PLPs criadas pelo Conector ECT | O comportamento da aba responsável por pesquisar as PLPs criadas pelo Conector ECT deverá obedecer as seguintes regras nessa ordem: RI283 e RI284. Essas regras definem as especificações de dois painéis que irá compor a aba Pesquisa. A regra RI283 será posicionada ao lado esquerdo da aba, enquanto a regra RI284 será posicionada do lado direto da aba. | Funcionalidades:   Conector ECT |

## RI283

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos do painel Pesquisar PLP | Esta regra descreve a especificação de campos e comportamento esperado do painel “Pesquisar PLP”.   Painel: Pesquisar PLP | Funcionalidades:   Conector ECT |

| Campo | Descrição | Tipo | Tamanho | Obrigatório | Editável | Regras | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Período De: | Campo data para informar uma data inicial. | Data | N/A | N/A | Consulta | RI2 | \- |
| Período Até: | Campo data para informar a data final. | Data | N/A | N/A | Consulta | RI2 | \- |
| Identificador PLP | Campo numérico para informar o número do identificador PLP. | Numérico | N/A | N/A | Consulta | N/A | \- |

## RI284

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos do painel Pré-Lista de Postagem | O resultado da pesquisa de PLPs deverá ser exibido no painel ao lado, denominado "Pré-Lista de Postagem" e, dentro desse painel, deve ser exibido uma "grid" contendo todas as PLPs criadas. Essa "grid" deve conter 4 colunas com as seguintes características:      • 1a coluna - na 1a linha dessa coluna deve ser exibido o ícone "Selecionar";   • 2a coluna - a 1a linha dessa coluna deve ser denominada "Data da criação" e, para cada linha deve-se retornar a data da criação da PLP.   • 3a coluna - a 1a linha dessa coluna deve ser denominada "Identificador PLP" e, para cada linha deve-se retornar o número identificador da PLP;   • 4a coluna – a 1a linha dessa coluna deve ser denominada "Número da PLP", devendo listar o número de uma PLP que já foi enviada aos Correios. Nos casos onde essa coluna for apresentada vazia, ver regra RN434   • exibir abaixo da "grid" no canto inferior direito a mensagem `Foram encontrados: <incluir aqui a quantidade de PLPs listadas> resultados`.   • exibir um paginador no final da grid descrita anteriormente. | Funcionalidades: |
| Conector ECT |  |  |

## RI285

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos do painel Dados do documento | O comportamento da janela que atualiza o status de um objeto postal (expediente com etiqueta AR enviado aos Correios) deverá seguir as seguintes especificações:   Um painel, denominado “Dados do documento” deverá retornar:      • O id do documento gerado pelo PJe, numa linha denominada “Identificador do documento: `<< retornar aqui o id do documento >>`;   • O nome do detentor do certificado digital que assinou o documento, numa linha denominada “Responsável pela inclusão: `<< nome do detentor do certificado digital >>`;   • A data em que o documento foi anexado no sistema, numa linha denominada “Data da inclusão: `<< nome do dia da semana, data e hora da inclusão do documento >>`.   Além dos dados descritos acima, a janela deverá retornar a grid que contem as informações sobre a postagem do expediente, de acordo com as especificações da regra RI280. | Funcionalidades:   Consultar detalhes do processo |

## RI286

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da aba responsável por montar PLPs e enviá-las aos Correios | O comportamento da aba responsável por montar PLPs e enviá-las aos Correios, denominada "Pré-Lista de Postagens (PLP)", deve obedecer as seguintes regras nessa ordem: RI287 e RI288. Ao final da apresentação dos painéis “PLP” e “Objeto Postal”, deverão ser exibidos os botões “Salvar”, “Enviar” e “Imprimir”, todos obedecendo a essa ordem. O botão "Imprimir" será habilitado somente quando a PLP for enviada aos Correios. | Funcionalidades:   Conector ECT |

## RI287

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos do painel PLP | Esta regra descreve a especificação de campos e comportamento esperado do painel "PLP".   Painel: PLP | Funcionalidades: Conector ECT |

| Campo | Descrição | Tipo | Tamanho | Obrigatório | Editável | Regras | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Data da criação das PLPs | Campo de data, que retorna a data de criação de uma PLP | Campo de data | N/A | N/A | Label | N/A | Se não existir PLP criada, apresentar o campo vazio. Ao salvar uma PLP, o campo será preenchido automaticamente com a data de criação da PLP. |
| Identificador PLP | Campo numérico, responsável por apresentar o identificador da PLP | Numérico | N/A | N/A | Label | RN432 | O número será gerado ao se criar uma PLP. Se não existir PLP criada, apresentar o campo vazio. |
| Número da PLP | Campo numérico, responsável por apresentar o número da PLP | Numérico | N/A | N/A | Label | RN434 | A numeração será gerada pelo SIGEP, quando uma PLP for enviada. Se a PLP não tiver sido enviada, apresentar o campo vazio. |

## RI288

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos do painel Objeto Postal | Esta regra descreve a especificação de campos e comportamento esperado do painel "Objeto Postal".   Painel: Objeto Postal | Funcionalidades:   Conector ECT |

| Campo | Descrição | Tipo | Tamanho | Obrigatório | Editável | Regras | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Data da criação | Campo de data, responsável por filtrar uma data de criação de uma etiqueta postal | Campo de data | N/A | N/A | Consulta | N/A | \- |
| Número do AR | Campo alfanumérico, responsável por buscar o número da etiqueta do AR | Alfanumérico | N/A | N/A | Consulta | N/A | \- |
| Número do cartão | Campo alfanumérico, responsável por buscar o número do cartão utilizado no contrato entre a ECT e o Tribunal | Alfanumérico | N/A | N/A | Consulta | N/A | \- |
| Quadro de listagem de ARs | Quadro que listará os dados filtrados pelos parâmetros "Data da criação", "Número do AR" e/ou "Número do cartão". Deverá conter três colunas, conforme regra RI289 | Alfanumérico | N/A | N/A | Label | N/A | Representam todos os números de etiquetas que ainda não foram enviados a ECT. |
| Avisos de recebimento enviados a ECT | Quadro que exibe os números de etiquetas que já foram enviadas à ECT, ou que ainda serão enviadas. Deverá conter três colunas, conforme regra RI289 | Alfanumérico | N/A | N/A | Label | N/A | \- |

## RI289

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tabela de números de etiquetas | Os números de etiquetas (ARs gerados) serão listados dentro dos quadros de associações, sendo que cada um desses quadros deverá conter uma tabela no seu interior. Essa tabela conterá 3 colunas com as seguintes características:   • 1ª coluna - a primeira linha dessa coluna será denominada de “Número do AR”. Essa coluna irá se comportar de duas formas distintas: uma para montagem de PLP e outra para uma edição de PLP. Para montar uma PLP, a coluna seguirá a regra RI281. Para editar uma PLP, a coluna irá apresentar o resultado da ação do botão Pesquisar, sendo que a ordem de listagem obedecerá à numeração sequencial. Ex: SO000357574BR; SO000357575BR; SO000357576BR;   • 2ª coluna – a primeira linha dessa coluna será denominada de “Tipo de serviço”. Essa coluna irá listar qual o tipo de serviço utilizado pelo Tribunal. A priori, somente o serviço de Carta será utilizado;   • 3ª coluna – a primeira linha dessa coluna será denominada de “Número do cartão”, e as demais linhas deverão apresentar qual o número do cartão que é utilizado pelo Tribunal. | Funcionalidades:   Conector ECT      Regras:   RI288 |

## RI290

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Impressão de objetos postais | Após o envio eletrônico da PLP, as etiquetas postais e os expedientes deverão ser impressos e encaminhados fisicamente à ECT. Esses dados serão organizados em um arquivo, no formato PDF, contendo a etiqueta PLP (RI291), o expediente do processo (RI292) e as etiquetas postais (RI278), todos seguindo essa mesma ordem.   Apenas uma etiqueta PLP será gerada, porem várias etiquetas postais deverão ser listadas, ou seja, para cada expediente produzido pelo PJe deverá ter uma etiqueta postal. Dessa forma, o arquivo gerado irá listar cada um dos expedientes, e logo em seguida, suas etiquetas (com a mesma ordem dos expedientes). Por exemplo: Primeiramente a etiqueta PLP virá na primeira página do PDF, logo vem o expediente "A", o expediente "B" e o expediente "C". Por último, a etiqueta postal do expediente "A", etiqueta postal do expediente "B" e a etiqueta postal do expediente "C". | Funcionalidades:   Conector ECT |

## RI291

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Resumo da PLP | Deverá seguir o seguinte layout em duas vias:   ![Modelo_PLP!](https://docs.pje.jus.br/assets/images/Modelo_PLP-de33056885bfe57f190792e9a38857e6.png "Modelo_PLP")   O titulo da etiqueta será denominado de: **“PRÉ-LISTA DE POSTAGEM - PLP”**, e logo abaixo desse título, um quadrante retornará as informações do Tribunal, devendo seguir as regras abaixo (obedecendo a mesma ordem apresentada aqui):      • Apresentar o nome do sistema dos Correios, denominado: **“SIGEP WEB – Gerenciador de Postagens dos Correios”**;   • Apresentar o número do contrato utilizado pelo Tribunal;   • Apresentar o nome do Tribunal;   • Apresentar o telefone do Tribunal;   • Apresentar o e-mail para contato do Tribunal;   Ao lado dos dados descritos anteriormente, serão apresentados o código de barras e o número de protocolo da PLP, ambos gerados pelo SIGEP e armazenados no SGP - Sistema Gerenciador de Postagens.   O último quadrante irá listar os dados dos objetos postais, de acordo com as especificações abaixo:      • Uma tabela (sem grade), conterá três colunas com os seguintes títulos: **Cód. Serviço:**, **Quantidade:** e **Serviço:**. Para cada linha dessas colunas, retornar as informações de acordo com o titulo das mesmas.   • Ao lado da tabela, apresentar o texto fixo **“Data da entrega: ***/*** /\_\_\_\_”**, permitindo a escrita manual da data, e abaixo do texto fixo, exibir uma linha com o texto **“Assinatura / Matrícula dos Correio”**, que também permitirá a escrita de uma assinatura manual. | Funcionalidades:   Conector ECT |

## RI292

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Expediente do tipo Correios | O expediente a ser enviado aos Correios seguirá a configuração de documentos do PJe. Sendo assim, ao imprimir um pacote PLP, o documento apresentado será composto pelo modelo, pelas variáveis, e pelas prováveis alterações feitas pelo usuário no momento de edição do documento, bem como seus anexos. | Funcionalidades:   Conector ECT |

## RI293

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos da funcionalidade Certidão Judicial | A funcionalidade responsável pela emissão de certidões será denominada Certidão Judicial, e conterá apenas um painel, o painel “Pesquisar”. Esse painel deverá seguir as seguintes regras e especificações:   Painel: Pesquisar certidão judicial | Funcionalidades:   Certidão Interna |

| Campo | Descrição | Tipo | Tamanho | Obrigatório | Editável | Regras | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tipo de Certidão | Recupera as certidões cadastradas em tipo de certidões | Lista | N/A | Sim | N/A | N/A | \- |
| \* CNPJ/ CPF | Indica qual parâmetro será usado na pesquisa. A opção de pesquisa por "Nome" será visível apenas para usuários internos | RadioButton | N/A | Sim | N/A | RI294 | \- |
| Informe o texto abaixo: | Código gerado pelo sistema para certificar que a pesquisa não é realizada por um programa-robô. Apresentado somente para pesquisas externas | Texto | N/A | Sim | N/A | RI296 | \- |

## RI294

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Definições padrão para o tipo de pesquisa por CNPJ/CPF ou Nome | Ao indicar o tipo de pesquisa (CNPJ/CPF ou Nome) para emissão de certidões judiciais, o campo que permite a inclusão do Nome ou do CNPJ/CPF deve possuir um botão do tipo checkbox, permitindo a indicação de um CPF ou CNPJ, e para as pesquisas por Nome, o checkbox deverá indicar se a pesquisa irá utilizar o nome fonetizado. Por default, o checkbox estará marcado para a busca fonetizada e para a pesquisa por CPF. | Funcionalidades:   Certidão Interna |

## RI295

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Resultado da pesquisa de certidões | O resultado da busca de uma certidão deverá ser apresentado de forma distinta para pesquisas internas e externas, conforme abaixo:      **Consulta Interna:** será apresentado o botão padrão do sistema, contendo o nome do tipo da certidão e o CPF (ou CNPJ ou Nome) da pessoa pesquisada, conforme exemplo:   **Gerar Certidão Negativada para o CPF 030.174.284-78**      **Consulta Externa:** após preencher os campos obrigatórios e acionar o botão "Pesquisar", a certidão será emitida no formato PDF. | Funcionalidades:   Certidão Interna |

## RI296

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Código captcha para certidões judiciais | O sistema deve exigir que, ao solicitar uma certidão via web (certidão pública), o usuário externo informe um código (CAPTCHA gerado aleatoriamente pelo sistema), a fim de garantir que a requisição não seja realizada por um programa-robô. O preenchimento desse campo será obrigatório e deve conter apenas caracteres numéricos, de 1 a 9. | Funcionalidades:   Certidão Interna |

## RI297

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Configuração para certidões externas | No cadastro de certidões, será possível indicar se a certidão que está sendo configurada poderá ser emitida externamente, ou seja, se os usuários sem login poderão emitir o tipo de certidão configurado por meio da funcionalidade tipo de certidão. Para tanto, será necessário marcar o campo "Emissão na Internet?". | Funcionalidades:   Certidão Interna |

## RI298

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da aba "Características do Processo" para a criação de um novo processo | A aba "Características do Processo", da criação de um novo processo, deve conter os seguintes campos:   **1.** Um painel denominado ****"Adicionar características do processo"**** que deverá agrupar a exibição de alguns dados do processo:   **\-** Campo de opção **"Segredo Justiça?"** contendo as opções **Sim** (caso o usuário queira solicitar que a tramitação do processo judicial seja sob segredo de justiça) ou **Não** (caso contrário).   **\-** Campo de opção **"Justiça Gratuita?"** contendo as opções **Sim** (caso o usuário queria solicitar que o processo judicial tenha concessão de gratuidade judiciária) ou **Não** (caso contrário).   **\-** Campo de opção **"Pedido de liminar ou de antecipação de tutela?"** contendo as opções **Sim** (caso o usuário queira solicitar que o processo judicial tenha concessão de pedido de liminar/antecipação de tutela) ou **Não** (caso contrário).   **\-** Campo de texto restrito com máscara monetária **"Valor da Causa:"**.   **2.** Um painel denominado **"Adicionar prioridades ao processo"**. O painel conterá uma caixa de combinação denominada **"Prioridade de processo"** cujo conteúdo obedece à regra RD107. Abaixo da caixa de combinação, deve haver o botão "Incluir". Abaixo desses campos, deve ser exibida uma tabela (ou grid) contendo a lista de todas as prioridades processuais do processo judicial em questão. Essa tabela não permite edição dos dados exibidos, apenas permite exclusão de uma prioridade por meio do ícone "Remover registro" (que deverá estar disponível para excluir a prioridade que for selecionada) localizado na 1ª coluna da tabela. A 2ª coluna denominada "Prioridade de processo" deverá exibir a descrição da prioridade. | Funcionalidade(s):      Cadastro de processo. |

## RI299

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Número do processo | Ao acessar a funcionalidade "Peticionar", somente o campo "Número do processo", juntamente com o botão "Pesquisar" serão apresentados ao usuário. O campo "Número do processo" deve seguir as definições da regra RN530. | Funcionalidade(s):      Peticionamento avulso. |

## RI300

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Painel "Pesquisar" | A funcionalidade responsável pela consulta de processos que possuem pedidos de petição será denominada de "Pedido de petições", e conterá um painel, o painel “Pesquisar”. Esse painel deverá seguir as seguintes regras e especificações:   Painel: Pesquisar | Funcionalidade(s):      Peticionamento avulso. |

| Campo | Descrição | Tipo | Tamanho | Obrigatório | Editável | Regras | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Processo | Permite a inclusão do número do processo para realização da pesquisa | Alfanumérico | N/A | Sim | N/A | N/A | \- |

## RI301

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Grid de processos com pedidos de petição | A lista de processos que tiveram pedidos de petição deve ser exibida ao lado direito do painel "Pesquisar" (RN300). A "grid" retorna processos judiciais que tiveram pedidos de petições. Essa "grid" deve conter 3 colunas com as seguintes características:      • 1a coluna - a 1a linha dessa coluna deve ser denominada "Processo", devendo retornar o número do processo de acordo com o que foi solicitado por meio do painel "Pesquisa";   • 2a coluna – a 1a linha dessa coluna deve ser denominada "Anexo", e para cada linha restante deverão ser apresentados os ícones "Visualizar" e "Verificar assinaturas digitais".   • 3a coluna – a 1a linha dessa coluna deve ser denominada "Certidão", onde será recuperada a certidão que comprova a assinatura do documento. | Funcionalidade(s):      Peticionamento avulso. |

## RI302

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Resultado da pesquisa de petições | Ao solicitar uma busca por documentos de petição de um processo, o sistema verifica se houve anexos inseridos no momento da petição. Quando existir, a grid deve separar os documentos nas respectivas linhas, repetindo o número do processo, a validação da assinatura e a certidão.   Por exemplo: | Funcionalidade(s):      Peticionamento avulso. |

| Processo | Anexo | Certidão |
| --- | --- | --- |
| 002499-93.2014.2.00.0000 |  |  |
| 002499-93.2014.2.00.0000 |  |  |

## RI303

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Pedido de petição (documento) | Ao solicitar uma petição, o usuário poderá visualizar o documento criado por meio do painel do usuário, aba "Pedido de petição". Além do texto inserido pelo usuário, o nome do detentor da assinatura, o endereço da aplicação e o número do documento (gerado no momento da assinatura) deverão fazer parte do documento. | Funcionalidade(s):      Peticionamento avulso. |

## RI304

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos do painel Dados do documento | O comportamento da janela que permite visualizar dados sobre a assinatura digital, deverá seguir as seguintes especificações:   Um painel, denominado “Dados do documento” deverá retornar:      • O id do documento gerado pelo PJe, numa linha denominada “Identificador do documento: `<< retornar aqui o id do documento >>` ”;   • O nome do detentor do certificado digital que assinou o documento, numa linha denominada “Responsável pela inclusão: `<< nome do detentor do certificado digital >>` ”;   • A data em que o documento foi anexado no sistema, numa linha denominada “Data da inclusão: `<< nome do dia da semana, data e hora da inclusão do documento >>` ”;   • A quantidade de assinaturas, numa linha denominada "Assinaturas presentes": `<< quantidade de assinaturas para esse documento >>`.   Além dos dados descritos acima, a janela deverá retornar a grid que contem as informações sobre a assinatura do documento, de acordo com as especificações da regra RI305. | Funcionalidade(s):      Peticionamento avulso. |

## RI305

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos da tabela **Assinaturas do documento** | Esta regra descreve a especificação de campos e o comportamento esperado da tabela "Assinaturas do documento", que recupera dados sobre a certificação digital.   Tabela: Assinaturas do documento | Funcionalidade(s):      Peticionamento avulso. |

| Campo | Descrição | Tipo | Tamanho | Obrigatório | Editável | Regras | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Signatário | Indica o nome do detentor do certificado digital | Texto | N/A | N/A | Label | N/A | \- |
| Data | Apresenta a data da assinatura digital (dia da semana, data no formato dd/mm/aaaa, e a hora no formato hh:mm:ss) | Alfanumérico | N/A | N/A | Label | N/A | \- |
| CN Certificado | Verificar | Alfanumérico | N/A | N/A | Label | N/A | \- |
| Emissor | Verificar | Alfanumérico | N/A | N/A | Label | N/A | \- |

## RI306

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Certidão de documentos | A certidão do documento assinado deve seguir as seguintes especificações, todas na ordem apresentada:   • Cabeçalho   \*\*-\*\*A imagem do brasão da República Federativa do Brasil;   \*\*-\*\*Nome da jurisdição onde o PJe esta instalado. Exemplo: Conselho Nacional de Justiça;   \*\*-\*\*Nome do sistema, denominado "Processo Judicial Eletrônico";   • Data (formato dd/mm/aaaa) e hora (formato hh:mm:ss) quando o documento foi assinado, com a seguinte nomenclatura: Petição/ Documento cadastrado com sucesso em `<< data e hora >>`;   • Número do processo, com a seguinte nomenclatura: Número do processo: `<< número do processo >>`;   • Nome do órgão julgador, com a seguinte nomenclatura: Órgão Julgador: `<< nome do órgão julgador >>`;   • Número do processo de origem. Essa numeração não é obrigatória, portanto, somente apresenta o número se o usuário tiver informado no momento da petição. Sua nomenclatura será: Processo de Origem: `<< número >>`;   • Nome do documento digitado pelo usuário na criação da petição, com a seguinte nomenclatura: Documento: `<< nome >>`;   • Tipo do documento informado pelo usuário na criação da petição, com a seguinte nomenclatura: Tipo de documento: `<< tipo >>`;   Em seguida, serão apresentadas duas tabelas, onde:      • 1° tabela, onde a primeira linha será denominada REQUERENTE, e nas demais linhas serão retornados os nomes do polo ativo do processo. Exemplo: Conselho Nacional de Justiça - CNJ (na segunda linha), Tassio Vinicius Gomes de Azevedo (terceira linha).   • 2° tabela, onde a primeira linha será denominada REQUERIDO, e nas demais linhas serão retornados os nomes do polo passivo do processo. Exemplo: Tribunal de Justiça do Estado do Mato Grosso.   No final do documento o nome do responsável pela assinatura do documento e o nome do responsável pela juntada do documento serão apresentados conforme exemplo:   Assinado por: `<< nome >>`   Juntado por: `<< nome >>` | Funcionalidade(s):      Peticionamento avulso. |

## RI307

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos da funcionalidade "Peticionar" | Esta regra descreve a especificação de campos e o comportamento esperado da funcionalidade "Peticionar". É importante ressaltar que os campos aqui descritos serão apresentados somente após a ação da regra RI299.   Funcionalidade: Peticionar | Funcionalidade(s):      Peticionamento avulso. |

| Campo | Descrição | Tipo | Tamanho | Obrigatório | Editável | Regras | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tipo de documento | Recuperado conforme configurado em tipo de documento | Lista | N/A | N/A | Label | N/A | \- |
| Descrição | Permite ao usuário denominar o nome do documento. Ao selecionar o tipo de documento, esse campo será preenchido com o nome do tipo de documento que foi selecionado pelo usuário | Alfanumérico | N/A | Sim | Sim | N/A | \- |
| Número (opcional) | Verificar | Alfanumérico | N/A | N/A | Sim | N/A | \- |
| Sigiloso | Permite ao usuário indicar se o documento a ser elaborado será sigiloso | Checkbox | N/A | N/A | Sim | N/A | \- |
| Editor rico | Permite a inclusão do documento (petição) | Alfanumérico | N/A | N/A | Sim | N/A | \- |

## RI308

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da tabela que compõe os dados sobre os anexos. | Esta regra descreve a especificação de colunas que geram a tabela de informações de anexos.   A grid deve conter 2 colunas com as seguintes características:   • 1a coluna - a 1a linha dessa coluna deve ser denominada "Arquivo original" e, para cada linha restante deve-se retornar o nome do documento inserido (junto com seu formato), o tamanho do arquivo, e o nome do formato do arquivo (ex: Arquivo PDF). Ao lado dessas informações, disponibilizar o botão "excluir";   • 2a coluna - a 1a linha dessa coluna deve ser denominada "Documento" e, para cada linha restante deve-se apresentar a combo "Tipo de documento" (retornando dados conforme o cadastrado em tipo de documento), o campo "Descrição (sendo preenchido com o nome do arquivo, porém com a possibilidade de edição)", o campo "Número (opcional)" (Verificar) e o checkbox "Sigiloso". Além desses dados, uma imagem será apresentada para validar a inclusão do documento. Se a imagem estiver na cor amarela com um "!" dentro do círculo, significa que o documento ainda não foi validado. Nesses casos, selecionar a opção "Tipo de documento" para que o sistema possa validar o documento, tornando a imagem do círculo na cor verde;   • Após a validação do documento, o botão de assinatura será apresentado. | Funcionalidade(s):      Peticionamento avulso. |

## RI309

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação de campos do painel Documentos. | Esta regra descreve a especificação de campos e comportamento esperado do painel "Documentos".   Painel: Documentos | Funcionalidades:   Documentos do processo. |

| Campo | Descrição | Tipo | Tamanho | Obrigatório | Editável | Regras | Observação |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Id | Recupera o identificador único gerado no momento da inclusão do documento no processo. | Numérico | N/A | N/A | Label | N/A | \- |
| Número | Número informado pelo usuário | Alfanumérico | N/A | N/A | Label | N/A | \- |
| Origem | Recupera a instância do processo (1° ou 2° Grau) | Alfanumérico | N/A | N/A | Label | N/A | \- |
| Juntado em | Recupera a data e hora da inclusão do documento no processo, conforme especificação da regra RN287 | Numérico | N/A | N/A | Label | N/A | \- |
| Juntado por | Recupera o nome do usuário que incluiu o documento, ou seja, o nome do usuário logado no sistema. | Texto | N/A | N/A | Label | N/A | \- |
| Documento | Recupera o nome (descrição) do documento informado pelo usuário. | Alfanumérico | N/A | N/A | Label | N/A | \- |
| Tipo | Recupera o tipo do documento selecionado por meio de uma lista de opções. | Texto | N/A | N/A | Label | N/A | \- |
| Anexos | Apresenta os ícones "Visualizar", "Verificar assinaturas digitais", "Excluir", "PDF". Ver regra RN540 | Imagem | N/A | N/A | N/A | N/A | \- |
| Certidão | Recupera o protocolo da inclusão e/ou assinatura do documento. | Texto | N/A | N/A | N/A | N/A | \- |
| Validação | Apresenta o status da assinatura do documento, de acordo com a regra RI174 | Texto | N/A | N/A | Label | N/A | \- |

## RI310

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Especificação da aba "Expedientes" do Detalhes do Processo. | A aba "Expedientes" deve conter os seguintes comportamentos:   **1.** Ao ser acionada a aba "Expedientes", um painel denominado **"Partes"** será exibido com uma tabela (ou grid) no seu interior. Essa tabela tem a função de listar todos os expedientes elaborados para o processo em questão. A tabela é formatada com colunas organizadas na seguinte ordem:      • **1-** coluna "Ato de comunicação", que retorna os principais dados do expediente, conforme dados abaixo:   • Primeira linha - Nome do ato de comunicação elaborado pela autoridade judiciária. Ex: Intimação, Notificação, Citação, etc.   • Segunda linha - Nome da parte destinatária do expediente;   • Terceira linha - Nome do tipo de comunicação, bem como a data e a hora que a mesma foi elaborada pela autoridade judiciária;   • Quarta linha - Nome do usuário que registrou a ciência da comunicação, bem como a data e a hora que a mesma foi registrada. Essa linha somente será visível quando o representante registrar a ciência do ato;   • Quinta linha - Denominada de "Prazo:", sempre retorna o prazo estabelecido pela autoridade judiciária no momento da criação do ato de comunicação.   • **2-** coluna "Data limite prevista para ciência ou manifestação", onde exibe a data fim de uma intimação. A data para manifestação e a data para ciência expressa nunca serão apresentadas juntas para o mesmo expediente, conforme descrições abaixo:   • (para ciência expressa) - O usuário ainda não tomou a ciência do ato de comunicação. Os processos também ficam disponíveis no agrupador "Pendentes de ciência ou de seu registro" do painel do usuário. A data apresentada segue o estabelecido pela regra RN384, e a contagem deve estar de acordo com as regras RN322 e RN543;   • (para manifestação) - indica que já houve ciência da intimação, podendo estar dentro do prazo ou com prazo encerrado. Quando o prazo estabelecido for para horas, o tipo de intimação é feita de forma eletrônica, e o usuário ainda não tenha tomado ciência, o PJe estende o prazo de manifestação para as 23:59:59 daquele dia. Nos casos onde a intimação é feita de forma eletrônica, seguir a regra RN385. Para os casos onde a comunicação foi feita por meios físicos, seguir a regra RN386. Independente do meio, o sistema deve estar de acordo com a regra de prazos, estabelecida por meio da regra RN543.   **Observação:** Quando não existir prazo para o expediente (Sem prazo), a coluna "Data limite prevista para ciência ou manifestação" será apresentada vazia.   **3.** coluna "Documentos" responsável por exibir os seguintes ícones:   • Sem permissão para visualizar essa intimação (ícone ): Apresentado quando o usuário logado não corresponder ao destinatário da comunicação e quando o destinatário ainda não tomou ciência ou manifestação do ato;   • Visualizar ato (ícone ): Permite que o conteúdo do expediente seja aberto para visualização.   • Validar assinatura digital (ícone ): Nova janela que retorna os dados de assinatura do usuário que assinou o expediente.   • Resposta (ícone ): Permite a visualização da resposta do expediente. Apresentado somente se o destinatário respondeu ao expediente.   • Elaborar certidão (ícone ): Permite a elaboração de uma certidão. Para que seja permitida a elaboração de certidão, o meio de comunicação deve ter sido "Correios" ou "Carta".   • Documento do recebimento (ícone ): Comprovante do AR quando o tipo de expediente for "Correios". Ver regra RN386.   **\-** O destinatário terá a opção de tomar ciência do ato de comunicação por meio da aba Expedientes do processo, se o expediente for destinado a ele. Nesses casos, o ícone "Tomar ciência do ato de comunicação" será apresentado na forma de uma lupa vermelha. Nesse caso, não há opção de responder ao ato, somente será possível por meio do agrupador "Pendentes de ciência ou de seu registro".   **4.** coluna "Fechado", indica a situação do expediente. Caso o expediente esteja aberto, retorna a palavra "Não", senão retorna "Sim". | Funcionalidade(s):   Aba Expedientes |

## RI311

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Ícone "Download dos documentos dos processo" | O ícone **Download dos documentos dos processos**, posicionado ao lado do ícone "Gerar PDF", possibilitará que todos os documentos dos processos sejam exibidos no formato PDF, tal como ocorre no ícone "Download dos documentos em PDF" da tela de detalhes do processo. A diferença se concentra na junção de todos os PDFs gerados em um arquivo ZIP, ou seja, cada processo terá um arquivo PDF, que conterá seus documentos, e todos os PDFs serão convertidos dentro do arquivo ZIP. | Funcionalidade(s):   Pauta de Audiência   PJEII-18075 |

## RI312

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Consulta por número do processo | O parâmetro "Processo", quando usado em consultas, deverá ser exibido no seguinte formato:   ![Campoprocesso!](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/I+lyb2LpzXvPSJ9/0M9d7nzZvLe2/55fWSNtdut8cAADY80Z8AAAMIZQAwhFAGAEMIZQAwhFAGAEMIZQAwJPIrcbvV5c2aHqvV93tbK3oMAPAk6U65trn2paHHAABP4kO5srG9p96vSvvw246kcuPL2vLy8lq1GvyQA5fUrur0h3dvT3VXi4FEHb09cfXYs8t+X/Q9EgCMS3dP+bBWOwx+Vl6+mA/C79WHTrPj8MOrMAklLXt7apthx70h0hGG6W61t+PPBj2uPuDsADCC2hF23j3/2+vPdemqf37dab3bcQ8NC65XuLGdpnbpQ11H0HD17ghtdx52vys0uB55dgAYQQl3ypWN7a/r89oImm/CT/1+/Qy2qatvw96VNxsV2bD+/KVd3YeubAV3QoJPC92QYE/ruJ3uj7psfecXnvV1hZveuPqAswPACEp0T3lvrzeRH+aBAbmytR3Eaqh7YyOuDgCPSrp7yj2eloOsrH0MI3L3U7DvrZSfdru+d28wyxY3iFJX7wt9Eeb+/PpXregHjJrqkfUBZweAERT/PeV7dyyU++yur6/zaD1W+q3mex/0Ce2IGOKe8u8RbkhcfdDZXY82AGAk/PNOuXOzuPfWQrAD1hgMNredXa0jPdohQ3rqYSLLgYzou00RDomrDzo7AIwe/pN7ADBkCDtlAMCwEMoAYAihDACGEMoAYAihDACGEMoAYAihDACGEMoAYAihDACGRP+LvmazeXx8fHV11Wq1tIRhKBQKpVJpdnZWDrSUmLVFYS4Oc/Eks4sSEcoyn4ODg6mpKXmW8fFxrWIY7u7ubm5uLi4uFhcXH/RXzeCiMBfBXPzJ7KJEhHK9Xs/n89PT0/JnLpfTKoZBrra8dZ+fn8ufCwsLWk3A4KIwF8Fc/MnsokSE8v7+frlcnpiYkDcZI1N6NORqy3vm7e1to9FYWlrSagIGF4W5CObiT2YXJeKDPsnyYrFoZz6PiVxSubByeeU3LC0lY3BRmItgLv5kdlGiv30hT2FnPo9M6mubeqA/qV9S6oH+pH5JqQf6k/olpR7oSerXk3qgP8lfEl+JAwBDCGUAMIRQBgBDCGUAMIRQBgBDCGUAMIRQBgBDCGUAMIRQBgBDCGUAMIRQBgBDCGUAMIRQBgBDCGUAMIRQBgBDCGUAMIRQBgBDCGUAMIRQBgBDCGUAMIRQBgBDCGUAMIRQBgBDCGUAMCQilPP5fKvV0gY8kMtbKBS0kYzZRWEuzMWrDC5KRChPTk5eXl62221tY6jkwsrlLZVK2k7G5qIwF+biVTYXJSKU5+bmzs7OTk5Oms2mljAkcklPT0/l8s7MzGgpGYOLwlwEc/Ens4uSi3w/kac4Ojq6vr62+VvA6JJfXuStUhamWCxqKTFri8JcHObiSWYXJTqUAQD/Bd++AABDCGUAMIRQBgBDCGUAMIRQBgBDCGUAMIRQBgBDCGUAMIRQBgBDCGUAMGNs7DdLSC6uqGWczgAAAABJRU5ErkJggg== "Campoprocesso")   O parâmetro "Processo" espera receber um valor que obedeça à regra RN275. O usuário poderá pesquisar por parte do número, inserindo em cada caixinha valores correspondentes ao definido na regra RN275.      Caso o usuário utilize o recurso de copiar e colar disponível nos sistemas operacionais, ele poderá copiar um número de processo completo formatado e colar na primeira caixinha do parâmetro de número de processo. O sistema deverá colar cada parte do número nas caixinhas subsequentes conforme pertinência. Por exemplo, para o número formatado "0000548-05.2014.7.00.0000", ao colar o número na primeira caixinha do campo, o sistema deverá apresentá-lo da seguinte forma:   ![Campoprocessocolado!](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-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 "Campoprocessocolado")   Se o usuário digitar o número sequencialmente, para cada parte do número digitado, o cursor deve ser posicionado automaticamente na caixinha subsequente ao ser completado o tamanho máximo do campo correspondente à parte do número em questão. | Funcionalidades:   Consulta pública. |

## RI313

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Consulta por nome | Quando utilizado em consultas campos de texto livre, o usuário deverá fornecer ao menos dois nomes como parâmetro. Por exemplo, a consulta por "Nome da parte" utilizando o valor "CNJ" não retornará resultados, apresentando ao usuário a mensagem MN226. Já o valor "Conselho Nacional" não sofrerá impedimentos, retornando os valores consultados, respeitadas as restrições negociais da consulta específica. Essa restrição visa mitigar os problemas de performance inerentes às consultas. | Funcionalidades:   Consulta pública. |

## RI314

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tela da consulta pública | A consulta pública deve ser apresentada inicialmente ao usuário conforme tela abaixo:      ![Consultapublica!](https://docs.pje.jus.br/assets/images/Consultapublica-a58ca8f58b002460c9b9c70ac1ae6f46.png "Consultapublica") | Funcionalidades:   Consulta pública. |

## RI315

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Consulta por CPF/CNPJ | Quando utilizado em consultas o campo CPF/CNPJ, o usuário deverá inserir o número completamente. Ao final da digitação do número, o sistema detectará, pelo tamanho do número informado, se o usuário informou um CPF ou um CNPJ. O campo receberá no máximo 14 caracteres.      A máscara de preenchimento utilizada será para:      • CPF se o número digitado contiver até 11 caracteres. O número será complementado com pontos e traço à medida que for sendo preenchido, conforme padrão a seguir: 999.999.999-99   • CNPJ se o número digitado contiver mais que 11 caracteres. O número será complementado com pontos, traço e barra à medida que for sendo preenchido, conforme padrão a seguir: 99.999.999/9999-99 | Funcionalidades:   Consulta pública. |

## RI316

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Consulta por registro junto à OAB | O parâmetro "OAB", quando usado em consultas, deverá ser exibido separando o número da seccional, conforme formato abaixo:   ![Campooab!](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-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 "Campooab")   Para consulta pelo registro, o usuário deverá informar o número completo para consulta, mas a seccional é opcional. Para o registro, poderão ser informados apenas letras, números e o caracter '-'. A caixa de combinação referente à seccional deverá vir automaticamente preenchida de acordo com o parâmetro pje:sistemas:uf, ou seja, a unidade da federação padrão da instalação, quando houver. | Funcionalidades:   Consulta pública. |

## RI317

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tela de resultado da consulta pública. | O resultado da consulta pública deve ser apresentado ao usuário conforme desenho da tela apresentado abaixo:      Além da definição gráfica apresentada, seguem as definições descritivas complementares sobre a tela:   ![Resultadoconsultapublica!](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Resultadoconsultapublica.jpeg "Resultadoconsultapublica.jpeg")   **\-** O botão de "impressão" deverá permitir a impressão do resultado apresentado em conjunto com o(s) filtro(s) informado(s) para realização da consulta.   **\-** A consulta do detalhamento de um processo deve ocorrer por meio de clique/acionamento de qualquer coluna da linha que conste o processo escolhido. Nesta situação, uma nova aba será adicionada para exibição dos detalhes do processo em questão. | Funcionalidades:   Consulta pública. |

## RI318

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tela de detalhamento do resultado da consulta pública. | O detalhamento do resultado da consulta pública deve ser apresentado ao usuário conforme tela abaixo e os dados exibidos nessa tela devem estar de acordo com a regra RN381.   ![Detalhamentoconsultapublica!](https://docs.pje.jus.br/assets/images/Detalhamentoconsultapublica-67a3268542f1ea5b05978e0bc388b428.jpg "Detalhamentoconsultapublica")   Além da definição gráfica apresentada, seguem as definições descritivas complementares sobre a tela:   **1.** Campo **Jurisdição:** deverá receber a jurisdição do processo, isto é, local onde o processo judicial foi peticionado.   **2.** Campo com rótulo variável que recebe o tipo de participação das partes do **polo ativo** do processo. Em seguida, é exibida a lista de partes desse polo incluindo os advogados dessas partes.   **3.** Campo com rótulo variável que recebe o tipo de participação das partes do **polo passivo** do processo. Em seguida, é exibida a lista de partes desse polo incluindo os advogados dessas partes.   **4.** Opção para consultar mais detalhes do processo denominado assim **"+ detalhes"** com o seguinte comportamento:   **1-** Ao expandir o ícone **"+"**, deverá listar um conjunto de campos com dados do processo, que são:   **\-** Um campo denominado **"Data da distribuição"** seguido da data da distribuição do processo.   **\-** Um campo denominado **"Classe Judicial"** seguido da descrição da classe judicial do processo.   **\-** Um campo denominado **"Assunto(s)"** seguido da lista de assuntos do processo.   **\-** Um campo denominado **"Órgão Julgador"** seguido do nome do órgão julgador do processo.   **\-** Um campo denominado **"Órgão Julgador Colegiado"** seguido do nome do órgão julgador colegiado do processo.   **\-** Um campo denominado **"Outros Participantes"** seguido da lista dos outros participantes do processo; essa lista deve ser agrupada por tipo de participação. Veja um exemplo:   **Réu(s):**   Fulano da Silva.   Ciclano José.   **Testemunha(s):**   Ana Xpto.   João Wyxt.   **5.** Campo denominado **"Pesquisar documento/movimento"** cujo comportamento é: pesquisar documentos ou movimentações que constam na tela de detalhamento sendo que essa pesquisa deverá ocorrer a partir da terceira letra digitada. Exemplo: quando digitar a palavra 'pet', ao término da digitação da letra 't', deverá ser feito um filtro e exibir na tela somente os documentos e movimentos que possuem a palavra 'pet' no nome do tipo do documento ou no nome do movimento. Não importa a posição que a palavra 'pet' apareça no nome do tipo do documento ou no nome do movimento, desde que apareça da forma como foi digitada, ou seja, 'pet'. Ao apagar a palavra 'pet' do campo **"Pesquisar documento/movimento"**, deverá exibir novamente a lista de processos que existia antes da realização do filtro.   **6.** A exibição dos movimentos e documentos deve usar o recurso gráfico denominado *timeline* (ou visualização em linha do tempo). A ordem apresentada no *timeline* é: inicia-se com a data mais recente e termina com a data mais antiga. Essa data é: a data do movimento (quando for movimento) e data de juntada (quando for documento). Apresentamos um exemplo da exibição dos dados (dos movimentos e dos documentos) em um *timeline*:   ![Item_timeline!](https://docs.pje.jus.br/assets/images/Item_timeline-0977637605e0c6a896755a58eb029455.jpg "Item_timeline")   **7.** Segue explicação dos dados exibidos no *timeline*:   \*\*-\*\*Um campo data (data do movimento ou data de juntada do documento).   \*\*-\*\*Um campo hora (hora do movimento ou hora de juntada do documento). Em seguida, apresenta-se a descrição do movimento ou a descrição do documento e, também, o identificador único do movimento ou documento. Quando for documento, deverá constar antes do nome do documento o ícone que caracteriza o tipo PDF. Para cada documento deverá ter um link e, ao acionar esse *link*, deverá ser exibido o conteúdo do documento e também deverá ser permitido a impressão desse documento.   **8.** Exibir dois botões que terão a função de "imprimir", um botão no topo da tela e outro no rodapé. Ao acionar um desses botões, deverá ocorrer a impressão de todos os dados exibidos na tela dos detalhes do processo da consulta pública. | Funcionalidades:   Consulta pública. |

## RI319

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tela de inclusão/modificação de "Parâmetros" do software. | A definição gráfica da tela é:   ![Tela_Inclusao_Parametro!](https://docs.pje.jus.br/assets/images/Tela_Inclusao_Parametro-1d30168c0faf51f123ac21384afa6c59.jpg "Tela_Inclusao_Parametro")   As definições descritivas complementares da tela são:   • Esta tela é responsável pelas seguintes operações principais: exibir os dados do registro que foi selecionado em uma tela anterior e permitir a modificação desse registro; limpar os conteúdos dos campos da tela e permitir a entrada dos dados de um novo parâmetro para inclusão.   • Para operação de inclusão de um novo parâmetro:   • O conteúdo de cada campo da tela deverá ser limpo ou, dependendo da característica gráfica do campo, deverá ser marcado a opção padrão desse campo e, em seguida, será permitido ao usuário informar/selecionar dados nos campos disponíveis da tela. Esse comportamento ocorre quando essa tela é acessada, em um primeiro momento, pelo usuário ou quando o botão "Limpar" é acionado.   • Alguns campos são "destacados" como 'obrigatório', isso implica que é obrigatório que algum conteúdo seja informado/selecionado no campo. Os campos obrigatórios são assim denominados: "Nome", "Valor", "Sistema", "Situação" e "Descrição".   • O botão "Incluir" está diretamente relacionado à operação de inclusão; este botão é responsável por incluir no banco de dados os dados do parâmetro assim que for acionado; esses dados também devem ser mantidos na tela.   • Se algum dos campos obrigatórios não tiver conteúdo após o acionamento do botão "Incluir", deverá ser exibida uma mensagem ao usuário conforme definido na regra MN6 e a operação de inclusão não deve ser realizada.   • O campo "Nome" também deverá obedecer a regra RN599; se essa regra for violada a seguinte mensagem MN16 deverá ser exibida ao usuário e esse parâmetro não poderá ser incluído no banco de dados.   • Se a operação de inclusão for concluída com sucesso, deverá ser exibida uma mensagem ao usuário conforme definido na regra MN1 e alterar o rótulo do botão "Incluir" para "Gravar".   • Para operação de modificação de um parâmetro existente:   • Os dados atuais desse parâmetro serão exibidos na tela e todos esses campos estarão disponíveis para modificação.   • O botão rotulado "Gravar" está diretamente relacionado à operação de modificação; nessa operação, ao acionar o botão "Gravar", os dados modificados do parâmetro serão efetivamente modificados no banco de dados e também modificados e mantidos na tela.   • Se algum dos campos obrigatórios não tiver conteúdo após o acionamento do botão "Gravar", deverá ser exibida uma mensagem ao usuário conforme definido na regra MN6 e a operação de modificação não deve ser realizada.   • Se a regra RN599 for violada a seguinte mensagem MN16 deverá ser exibida ao usuário e esse parâmetro não poderá ser incluído no banco de dados.   • Se a operação de modificação for concluída com sucesso, deverá ser exibida uma mensagem ao usuário conforme definido na regra MN43 e manter o rótulo do botão como "Gravar" (neste caso é o botão que foi acionado na operação de modificação).   • Responsabilidades do botão "Limpar" quando for acionado: limpar o conteúdo de cada campo da tela e, dependendo da característica gráfica do campo, marcar a opção padrão desse campo; posicionar o cursor no campo "Nome"; alterar rótulo do botão responsável pela operação de inclusão para "Incluir"; exibir uma mensagem ao usuário informando que os conteúdos dos campos foram limpos conforme definido na regra MN236.   • Sobre marcação padrão de campo na tela: o campo "Sistema" deverá ter marcação padrão "Sim"; o campo "Situação" deverá ter a marcação padrão "Ativo".   • Responsabilidades do botão "Voltar" quando for acionado: fechar a tela atual (tela de inclusão/modificação de "Parâmetros" do software) e retornar para a tela anterior à essa tela atual.   • Sobre a quantidade máxima de caracteres em cada campo da tela: para cada campo deve-se obedecer ao tamanho máximo de caracteres permitido para o campo conforme definido na tabela do banco de dados destinada ao armazenamento dos parâmetros; essa restrição de tamanho deve ser obedecida tanto na operação de inclusão quanto na operação de modificação. Caso a quantidade máxima de caracteres informada no campo for violada, deverá ser exibida uma mensagem ao usuário conforme definido na regra MN235.   • Sobre a manutenção dos dados não exibidos na tela de inclusão/modificação:   • Além dos campos já exibidos na tela de inclusão/modificação, outros campos que constam na tabela do banco de dados destinada ao armazenamento dos parâmetros devem ter seus dados mantidos pelas operações inclusão e modificação:   • Data e hora de atualização do parâmetro;   • Identificador do usuário que incluiu/modificou o parâmetro;   • Todo parâmetro deve ter um identificador único cujo conteúdo deve ser controlado pelo banco de dados; esse identificador único representa a chave primária. | Funcionalidades:   Parâmetros. |

## RI320

| Campo | Descrição da regra | Itens relacionados |
| --- | --- | --- |
| Tela de consulta de "Parâmetros" do software. | A definição gráfica da tela é:   ![Tela_Consulta_Parametro!](https://docs.pje.jus.br/assets/images/Tela_Consulta_Parametro-273b578b2fd541aa2351c4284d76af82.jpg "Tela_Consulta_Parametro")   As definições descritivas complementares da tela são:   • Esta tela é responsável pelas seguintes operações principais: exibir os parâmetros cadastrados no banco de dados; permitir a pesquisa de parâmetros a partir de filtros informados; permitir a escolha de um parâmetro para modificação ou para inativação.   • **Comportamento da tela quando acessada:** limpar o conteúdo do campo "Nome"; marcar a opção "Todos" no campo "Situação"; exibir na tabela de resultados todos os parâmetros (com situação "ativo" ou "inativo") cadastrados no banco de dados em ordem alfabética pelo campo "Nome"; posicionar o cursor no campo "Nome"; caso não tenham parâmetros (com situação "ativo" ou "inativo") cadastrados no banco de dados, deverá exibir a mensagem "Nenhum parâmetro encontrado" dentro da tabela de resultados.   • Responsabilidades do botão **"Limpar"** quando for acionado: repetir o mesmo comportamento descrito em "Comportamento da tela quando acessada" e, ainda, exibir uma mensagem ao usuário informando que os conteúdos dos campos foram limpos conforme definido na regra MN236.   • Responsabilidades do botão **"Novo"** quando for acionado: exibir uma nova tela gráfica cujas definições e comportamentos constam na regra RI319.   • Responsabilidades do botão **"Pesquisar"** quando for acionado: exibir na tabela de resultados somente os parâmetros que atendem aos filtros informados. Os filtros disponíveis são:   • Campo "Situação": a opção "Todos", que é a opção padrão desse campo, significa que os parâmetros cuja situação é "ativo" ou "inativo" deverão ser exibidos; a opção "Ativo" significa que somente os parâmetros cuja situação é "ativo" deverão ser exibidos; a opção "Inativo" significa que somente os parâmetros cuja situação é "inativo" deverão ser exibidos.   • Campo "Nome": por meio desse campo é possível pesquisar os parâmetros cujo nome do parâmetro possui a sequência de caracter(es) informada. O filtro pelo campo "Nome" somente deverá ocorrer caso conste, pelo menos, um caracter informado no campo "Nome". Deve-se considerar os acentos gramaticais e desconsiderar os tamanhos (caixa alta ou caixa baixa) dos caracteres. Exemplificando: se for informado a palavra 'GrU' e, em seguida, acionar o botão "Pesquisar" deverá ser feito um filtro e exibir na tabela de resultados somente os parâmetros que possuem a palavra 'GrU' no nome do parâmetro. Não importa a posição que a palavra 'GrU' apareça no nome parâmetro, desde que apareça na ordem que foi informada, ou seja, 'GrU'. Nesse exemplo dado, também deve-se considerar a opção selecionada no campo "Situação".   • Caso não tenham parâmetros conforme filtros informados, deverá exibir a mensagem "Nenhum parâmetro encontrado" dentro da tabela de resultados.   • Responsabilidades do ícone denominado "Editar": este ícone é exibido para cada parâmetro exibido na tabela de resultados; quando o ícone for acionado deverá exibir uma nova tela contendo os dados do parâmetro (correspondente à linha que foi escolhida) conforme orienta a regra RI319 em relação à operação de modificação de um parâmetro.   • Responsabilidades do ícone denominado "Inativar": este ícone é exibido somente para os parâmetros da tabela de resultados que tiverem a "Situação" igual a "Ativo"; quando o ícone estiver exibido e for acionado, deverá ser exibida uma mensagem ao usuário de pedido de confirmação conforme regra MN191. Se o usuário confirmar a operação de inativação do parâmetro (que foi previamente escolhido), o parâmetro deverá ter o campo "Situação" modificado para "Inativo" e o ícone "Inativar" deve ser ocultado para esse parâmetro. Caso o usuário não confirme a operação de inativação do parâmetro, o parâmetro não deverá ser inativado e a mensagem de pedido de confirmação deixa de ser exibida nesse momento.   • **Tabela de resultados encontrados** deverá exibir os dados dos parâmetros por meio das seguintes colunas:   • "Nome", esta coluna diz respeito ao nome do parâmetro.   • "Descrição", esta coluna diz respeito à descrição do parâmetro.   • "Valor", esta coluna diz respeito ao valor do parâmetro.   • "Data de atualização", esta coluna diz respeito à última data e hora de atualização do parâmetro.   • "Sistema", esta coluna diz respeito ao indicativo se o parâmetro é ou não um parâmetro de sistema.   • "Modificador", esta coluna diz respeito ao nome do usuário que modificou o parâmetro pela última vez.   • "Situação", esta coluna diz respeito ao indicativo se o parâmetro está ou não ativo no sistema.   • Em uma coluna após a coluna "Situação", deverá, para cada parâmetro exibido na tabela de resultados, exibir o ícone denominado "Editar" e, quando a "Situação" do parâmetro for verdadeira deverá exibir também o ícone denominado "Inativar".   • **Paginação dos resultados encontrados:** no rodapé da tabela de resultados deverá ser disponibilizado um paginador, o qual deverá possibilitar ao usuário navegar entre as páginas de resultados da tabela; também, no rodapé, deverá ser exibido a quantidade total de parâmetros exibidos na tabela de resultados. | Funcionalidades:   Parâmetros. |