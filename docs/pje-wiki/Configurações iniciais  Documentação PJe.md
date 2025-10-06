---
title: "Configurações iniciais | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Configura%C3%A7%C3%B5es%20iniciais"
author:
published:
created: 2025-09-30
description: "Esse conteúdo foi migrado integralmente da antiga Wiki do PJe, e suas informações podem estar desatualizadas."
tags:
  - "clippings"
---
# Configurações iniciais | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Configura%C3%A7%C3%B5es%20iniciais


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/#__docusaurus_skipToContent_fallback)

## Configurações iniciais

Este documento se destina a instruir as equipes de tecnologia da informação e de negócio dos tribunais que utilizam o sistema PJe sobre os procedimentos necessários para a configuração de uma instalação inicial do sistema.

O presente documento tem por base a versão 1.4.1 do sistema PJe – Processo Judicial Eletrônico.

## Público-alvo

O presente documento deve ser utilizado pelas equipes de tecnologia da informação e de negócio do tribunal, especificamente por aqueles responsáveis por:

- instalar o sistema PJe nos servidores de aplicação
- manter a configuração do sistema, definindo os parâmetros internos de funcionamento

## Estrutura do documento

O presente documento está segmentado em quatro partes:

- configurações básicas
- competência jurisdicional
- regras de distribuição
- fluxos de trabalho

## Conhecimento prévio

Embora não seja essencial, o responsável pela execução dos passos descritos neste documento deve:

- conhecer o funcionamento básico de aplicações web
- conhecer os componentes mais comuns utilizados no PJe
- dispor de informações negociais sobre as regras de negócio principais do tribunal, em especial as de competência, organização judiciária e organização do trabalho
- ter acesso ao banco de dados em que está instalado o PJe e conhecer comandos básicos de SQL
- ter acesso à instalação do PJe alvo da configuração

## Softwares a serem instalados

É necessário que os responsáveis pela configuração do sistema tenham disponível os seguintes softwares em seus equipamentos:

- [Firefox 10+](https://www.mozilla.org/pt-BR/firefox/new/?redirect_source=getfirefox-com).
- [pgAdmin](https://www.pgadmin.org/).

## Guia rápido de verificação da configuração

Para que o PJe seja testado e homologado, algumas configurações e testes iniciais são necessários para seu perfeito funcionamento:

1. definição do escopo da pretensa homologação (competência, órgãos julgadores etc.);
2. instalação do PJe em ambiente local;
3. configuração básica do PJe em relação a:
	1. estruturas de órgãos;
	2. localizações dos órgãos;
	3. definição dos papéis.
	4. definição dos documentos
4. configuração de competência dentro do escopo;
5. configuração dos órgãos segundo as competências;
6. configuração dos fluxos para o escopo definido, reaproveitando os fluxos padronizados já definidos;
7. cadastro dos usuários básicos para o ciclo de homologação: pelo menos 4 advogados, 4 procuradores, servidores para cada um dos órgãos e magistrados para cada um dos órgãos;
8. distribuir os processos, tramitar por todos os fluxos e realizar as atividades principais de um processo judicial: protocolo inicial de processo, protocolo inicial de processo incidental, peticionamento incidental em processo em curso, preparar atos de comunicação nas diversas modalidades de envio, responder a atos de comunicação, preparar minuta de ato judicial, assinar minuta de ato judicial, reautuar o processo, redistribuir o processo, designar e realizar audiências, juntar documento internamente com lançamento de movimentação e, em instalações de colegiados, solicitar pauta, pautar, fechar pauta, julgar/adiar/pedir vista etc., lavrar acórdão.

## Configurações básicas

Nesta seção listaremos instruções de configuração que refletem em alterações nos valores dos parâmetros do PJe.

Lembrete: A alteração de valores nos parâmetros só terá efeito na aplicação após a reinicialização do servidor de aplicações (JBoss).

### Tipo de Justiça

No sistema PJe – Processo Judicial Eletrônico, é possível fazer tramitar processos de diferentes segmentos do Poder Judiciário, ou seja, é possível que a mesma aplicação seja utilizada para a Justiça dos Estados, para a Justiça do Trabalho e para a Justiça Federal.

A identificação do tipo de Justiça é importante para cada instalação porque disso depende a ativação de algumas características ou regras dentro do sistema. Exemplo de uma regra ativada segundo o tipo de justiça é a exigência, na autuação, de algumas informações suplementares feitas pela Justiça do Trabalho, tais como local da prestação do serviço pelo trabalhador e atividade econômica desempenhada pelo empregador. Isso também pode ter efeito sobre o que será exibido para as partes em diferentes telas do sistema.

Em razão disso, há um parâmetro do sistema destinado à identificação do segmento judiciário a que se destina a instalação.

| Nome | Descrição | Valores possíveis |
| --- | --- | --- |
| tipoJustica | Identificação do tipo de Justiça a que se aplica a presente instalação. É possível configurar o sistema para utilização na Justiça comum dos Estados (JC), na Justiça comum Federal (JF), na Justiça do Trabalho (JT) e na Justiça Militar dos Estados (JM). | JC, JF, JM, JT |

Para fazer a configuração do parâmetro, acesse, com perfil de administrador, **Configuração → Sistema → Parâmetro**, procure pelo parâmetro **tipoJustica** e edite seu valor para o desejado.

Diferentemente do que acontece com outros parâmetros, **é necessário reinicializar a aplicação para que esse parâmetro tenha pleno efeito.**

### Instância

O sistema PJe – Processo Judicial Eletrônico, em sua versão 1.4.1, tem uma estrutura de implantação segmentada de acordo com a instância de funcionamento da instalação. Isso significa dizer que, para cada instância de instalação – primeiro grau e segundo grau – é necessário existir uma instalação do PJe com seus respectivos bancos de dados.

A definição da instância de funcionamento é feita pelo seguinte parâmetro:

| Nome | Descrição | Valores possíveis |
| --- | --- | --- |
| aplicacaoSistema | Identificação do grau de jurisdição (1ª ou 2ª instância) em que a aplicação funcionará. | 1   2 |

Para fazer a configuração do parâmetro, acesse, com perfil de administrador, **Configuração → Sistema → Parâmetro**, procure pelo parâmetro **aplicacaoSistema** e edite seu valor para o desejado.

### Email

O PJe, em alguns casos, pode enviar mensagens eletrônicas para seus usuários ou administradores. Nesses casos, ele reporta o e-mail de origem como sendo aquele definido em um parâmetro específico do sistema. Atentem que esse e-mail não é, necessariamente, a conta de e-mail concretamente utilizada para o envio das mensagens, mas somente aquela reportada como sendo o endereço para onde eventual resposta será encaminhada.

A definição dessa característica é feita por pelo parâmetro **emailSistema**, conforme informações abaixo.

| Nome | Descrição | Valores possíveis |
| --- | --- | --- |
| emailSistema | Endereço de e-mail que será utilizado quando da preparação de mensagens eletrônicas pelo PJe | Qualquer endereço de e-mail válido. |

Para fazer a configuração do parâmetro, acesse, com perfil de administrador, Configuração → Sistema → Parâmetro, procure pelo parâmetro emailSistema e edite seu valor para o desejado.

A definição da conta de e-mail utilizada para o envio efetivo das mensagens deve ser feita no arquivo pje.war:/WEB-INF/components.xml, especificamente na tag `<mail:mail-session …/>` desse arquivo. Para mais informações a respeito dessa definição, acesse este \[link\].

### Identificação do órgão judiciário em relatórios

Ao emitir relatórios e certidões automatizadas, o PJe faz uso de um parâmetro identificador genérico do órgão judiciário, sem prejuízo de os modelos fazerem uso de informações mais específicas (comarca, vara etc.).

O parâmetro que define essa informação é:

| Nome | Descrição | Valores possíveis |
| --- | --- | --- |
| nomeSecaoJudiciaria | Texto identificador da subdivisão administrativa máxima referida pela instalação. Normalmente será o nome do Tribunal em que o sistema está instalado. | Texto descritor do órgão. Ex.: Tribunal de Justiça de Pernambuco. |

Para fazer a configuração do parâmetro, acesse, com perfil de administrador, **Configuração → Sistema → Parâmetro**, procure pelo parâmetro **nomeSecaoJudiciaria** e edite seu valor para o desejado.

### Subtítulo do sistema

A tela principal do PJe apresenta, na parte superior, o nome do sistema, seguido de um subtexto que é ordinariamente utilizado para identificar o tribunal em que instalado.

O parâmetro que define essa informação é:

| Nome | Descrição | Valores possíveis |
| --- | --- | --- |
| subNomeSistema | Texto exibido como subtítulo no cabeçalho do sistema. | Texto descritor do órgão. Ex.: Tribunal de Justiça de Pernambuco. |

Para fazer a configuração do parâmetro, acesse, com perfil de administrador, **Configuração → Sistema → Parâmetro**, procure pelo parâmetro subNomeSistema e edite seu valor para o desejado.

### Serviço de consulta à SRFB

O PJe, em operações ordinárias, faz uso de serviço de consulta à base de dados de contribuintes brasileiros disponibilizada, via convênio, pela Secretaria da Receita Federal do Brasil. Ordinariamente, o acesso é feito via sistema do CNJ, mas as instalações da Justiça Federal podem fazer uso de convênio próprio para concretizar a consulta. Em razão disso, é possível definir a sistemática de consulta à SRFB em parâmetro.

O parâmetro que define essa informação é:

| Nome | Descrição | Valores possíveis |
| --- | --- | --- |
| pNomeOrgaoWSReceita | Nome da sistemática de obtenção de informações da SRFB. Pode ser via Conselho Nacional de Justiça (CNJ) ou via Justiça Federal (CJF). | CNJ   CJF |

Para fazer a configuração do parâmetro, acesse, com perfil de administrador, **Configuração → Sistema → Parâmetro**, procure pelo parâmetro pNomeOrgaoWSReceita e edite seu valor para o desejado.

### Serviço de consulta ao Cadastro Nacional de Advogados

O PJe, em operações ordinárias, faz uso de serviço de consulta à base de dados de advogados brasileiros disponibilizada, via convênio, pelo Conselho Federal da Ordem dos Advogados do Brasil. Esse acesso é feito por meio de uma chave de acesso, obtida diretamente do CF-OAB, por cada tribunal.

O parâmetro que define essa informação é:

| Nome | Descrição | Valores possíveis |
| --- | --- | --- |
| chaveOAB | Chave de acesso ao serviço de consulta ao CNA-OAB, fornecida pelo Conselho Federal da Ordem dos Advogados do Brasil. | Campo texto contendo a chave fornecida pelo CF-OAB |

Para fazer a configuração do parâmetro, acesse, com perfil de administrador, Configuração → Sistema → Parâmetro, procure pelo parâmetro chaveOAB e edite seu valor para o desejado.

### Meio de login

O PJe, por definição do Comitê-Gestor Nacional, somente pode ser utilizado, em produção, fazendo uso de certificação digital. No entanto, em se tratando de instalações que não sejam de produção, deve ser possível o acesso sem o certificado digital, com o uso de usuário e senha.

O parâmetro que define essa configuração é:

| Nome | Descrição | Valores possíveis |
| --- | --- | --- |
| loginComCertificado | Configuração que define se o login será feito com certificação digital | true   false |

Para fazer a configuração do parâmetro, acesse, com perfil de administrador, **Configuração → Sistema → Parâmetro**, procure pelo parâmetro loginComCertificado e edite seu valor para o desejado.

### Modo de teste de certificado

Além da configuração relativa ao login, o PJe também permite que seja dispensado o uso de certificação digital na assinatura de documentos do sistema. Essa configuração, evidentemente, só deve estar ativa em situação de treinamento e testes, jamais em produção.

O parâmetro que define essa configuração é:

| Nome | Descrição | Valores possíveis |
| --- | --- | --- |
| modoTesteCertificado | Configuração que define que as assinaturas digitais de documentos será feita certificados de teste | true   false |

Para fazer a configuração do parâmetro, acesse, com perfil de administrador, **Configuração → Sistema → Parâmetro**, procure pelo parâmetro modoTesteCertificado e edite seu valor para o desejado.

### Utilização de nó de desvio

O PJe é um sistema fundado em um motor de fluxo de negócios. Os fluxos, embora maleáveis, são relativamente rígidos, especialmente quando comparados com a incerteza sobre a tramitação de processos judiciais. Em razão dessa característica, foi incluída no sistema uma característica que permite desviar o curso previsto de um fluxo para outros pontos do mesmo fluxo. Trata-se, porém, de uma opção do tribunal usar ou não essa característica.

O parâmetro que define essa configuração é:

| Nome | Descrição | Valores possíveis |
| --- | --- | --- |
| flagUtilizacaoNoDesvio | Parâmetro utilizado para indicar que a aplicação permitirá a realização de mudanças no curso dos fluxos | true   false |

Para fazer a configuração do parâmetro, acesse, com perfil de administrador, **Configuração → Sistema → Parâmetro**, procure pelo parâmetro **flagUtilizacaoNoDesvio** e edite seu valor para o desejado.

Definida a utilização do nó de desvio, é necessário republicar todos os fluxos dos sistema, o que deve ser feito alterando e publicando cada um deles na tela Configuração → Sistema → Fluxo.

### Número inicial dos processos

A numeração dos processos no PJe tem início a partir do número definido em um parâmetro específico. Uma vez distribuídos os primeiros processos, esse parâmetro não mais é utilizado.

O parâmetro que define essa configuração é:

| Nome | Descrição | Valores possíveis |
| --- | --- | --- |
| numeroInicialProcesso | Número do primeiro processo a ser distribuído para uma dada localização | Texto de 7 caracteres, contendo apenas dígitos. |

Para fazer a configuração do parâmetro, acesse, com perfil de administrador, **Configuração → Sistema → Parâmetro**, procure pelo parâmetro numeroInicialProcesso e edite seu valor para o desejado.

### Número inicial de requisições

A numeração dos precatórios e das requisições de pequeno valor no PJe tem início a partir do número definido em um parâmetro específico. Uma vez criadas as primeiras requisições, esse parâmetro não mais é utilizado.

O parâmetro que define essa configuração é:

| Nome | Descrição | Valores possíveis |
| --- | --- | --- |
| numeroInicialRpv | Número da primeira requisição a ser criada no sistema | Número inicial a ser utilizado |

Para fazer a configuração do parâmetro, acesse, com perfil de administrador, **Configuração → Sistema → Parâmetro**, procure pelo parâmetro numeroInicialRpv e edite seu valor para o desejado.

### Identificador da localização do tribunal

Toda instalação do PJe está vinculada, primariamente, a um tribunal. A localização que representa esse cadastro determinará o comportamento de algumas funcionalidades do sistema, dentre elas, a consulta de localizações do menu Configuração. Sendo assim, o identificador dessa localização, presente na tabela tb\_localizacao, deve ser cadastrado no parâmetro idLocalizacaoTribunal.

| Nome | Descrição | Valores possíveis |
| --- | --- | --- |
| idLocalizacaoTribunal | Localização do raiz do tribunal | número inteiro que referencia o identificador do cadastro da localização na tabela tb\_localizacao |

Para fazer a configuração do parâmetro, acesse, com perfil de administrador, **Configuração → Sistema → Parâmetro**, procure pelo parâmetro idLocalizacaoTribunal e edite seu valor para o desejado.

### Número do órgão judiciário na numeração única

Para a numeração única, é utilizada no sistema o código correspondente do Poder Judiciário extraído da Resolução [CNJ 65](https://www.cnj.jus.br/images/stories/docs_cnj/resolucao/rescnj_65.pdf).

O parâmetro que define essa configuração é:

| Nome | Descrição | Valores possíveis |
| --- | --- | --- |
| numeroOrgaoJustica | Numero do órgão judiciário para a numeração única de processos | O código JTR do tribunal conforme a Resolução [CNJ 65](https://www.cnj.jus.br/images/stories/docs_cnj/resolucao/rescnj_65.pdf) |

Para fazer a configuração do parâmetro, acesse, com perfil de administrador, **Configuração → Sistema → Parâmetro**, procure pelo parâmetro numeroOrgaoJustica e edite seu valor para o desejado.

## Controle de Acesso

O controle do acesso a funcionalidades e a processos judiciais no sistema PJe é feito por meio de dois mecanismos: o de papéis e o de localizações. Os conceitos de um e outro são explorados a seguir.

### Localização

A localização funciona no PJe como funcionam, nos diretórios do tipo LDAP, as unidades organizacionais: uma forma de organizar uma estrutura interna que, por sua própria natureza, é complexa. Para reduzir um pouco essa complexidade, há, além do conceito de localização “simples”, que representa uma concreta unidade, o conceito de estrutura de localização, que é, na realidade, uma espécie de esqueleto ou arquétipo possivelmente aplicável a várias localizações.

### Estrutura de localização

A estrutura de localização é uma localização que foi marcada como “localização estruturada” no cadastro de localizações **(Configuração → Sistema → Localização \[aba Formulário\])**.

A localização do tipo estruturada ou “estrutura de localização” é uma base sobre a qual se configura um esqueleto de localizações outras. Por meio dela, é possível definir os “setores” de um determinado órgão julgador, ou seja, indicar que uma vara será composta por um gabinete, pela direção de secretaria ou direção do cartório, e pelos setores de conhecimento, expedição de atos de comunicação, execução etc. É com base desse esqueleto ou arquétipo que, na definição de fluxos, poder-se-á definir as pessoas que terão a responsabilidade de concretizar uma determinada tarefa.

É possível, no PJe, criar várias estruturas diversas, conforme esteja organizado o tribunal. Em primeiro grau, por exemplo, pode-se criar estruturas diversas para os tipos de varas existentes: vara comum geral (de interior), vara especializada criminal, vara especializada de família etc. Uma estrutura bem simples pode ser utilizada para varas mais reduzidas, que contenha apenas gabinete, direção de cartório e Cartório.

Para criar uma estrutura tal, acesse Configuração → Sistema → Localização \[aba Formulário\], dê o nome para a estrutura no campo “Localização” (ex.: Vara simples), marque como “Sim” o campo “Localização estruturada” e grave a localização. A tela resultante deverá ser semelhante à seguinte:

![Localizacao](https://docs.pje.jus.br/assets/images/Localizacao-20e88a99a7d88c8ade386e7bcc8b8aaf.jpg)

Após, clique no botão “Novo” e crie as localizações vinculadas “Gabinete”, “Direção de cartório” e “Cartório”, mantendo como localizações não estruturadas, mas apontando que a localização superior é a localização “Vara simples”. A tela de exemplo resultante da criação da estrutura Gabinete será a seguinte:

![Localgabinete](https://docs.pje.jus.br/assets/images/Localgabinete-c16b7966b2ed589df22ff455c2ce79ea.jpg)

Ao final, dever-se-á ter uma estrutura no seguinte formato:

![Localestru](https://docs.pje.jus.br/assets/images/Localestru-5a99198e2b0e24f16a93ba9fedf7df11.jpg)

O mesmo procedimento pode ser adotado para a criação de estruturas mais complexas, inclusive eventuais estruturas de órgãos administrativos.

### Localizações simples

A localização simples é a unidade organizacional do PJe. Ela é utilizada tanto para a definição da estrutura hierárquica do tribunal quanto para a organização interna de outras “entidades” participantes do processo, tais como os advogados, seus escritórios de advocacia, as procuradorias e defensorias públicas. Concretamente, porém, para efeito de configuração, somente é necessário definir as localizações do tribunal, já que as localizações de advogados, procuradores e procuradorias são criadas automaticamente pelo sistema.

As localizações simples comportam sua hierarquização até o nível em que a localização tem uma estrutura. Para melhor vislumbrar tal contexto, imagine-se um tribunal em relação ao qual está sendo feita a configuração de primeiro grau do PJe. Esse tribunal tem comarcas, fóruns regionais e varas. Em um contexto tal, o administrador do PJe deve, em primeiro lugar, modificar o nome da localização base da aplicação – na instalação base, essa localização se chama “Tribunal”. Pode-se modificar esse nome para qualquer outro, mas sugere-se o uso da sigla correspondente do tribunal. Para prosseguir com a configuração, devem ser criadas todas as comarcas. A criação das comarcas é feita pelo mesmo caminho **(Configuração → Sistema → Localização \[aba Formulário\])**, só que apontando que não se trata de uma localização estruturada e apontando, como localização superior, a localização base do tribunal. **Não se deve adotar, nesse momento, uma estrutura modelo** para a comarca, já que ela é a localização superior dos fóruns regionais, onde aplicáveis, ou das varas, onde os regionais não existirem. O passo seguinte é criar os fóruns regionais e, por fim, as varas. A diferença, no caso das localizações das varas, é que será selecionada uma estrutura modelo para essas varas. **É imprescindível que as localizações das varas sejam definidas com seus respectivos endereços** para seu posterior reaproveitamento em cartas, ofícios e demais documentos judiciais.

A aba “Documento por localização” contém a lista de grupos de documentos que podem ser vinculados a uma dada localização.

### Funcionalidades

Enquanto a localização é o mecanismo para limitação do conjunto de processos visualizáveis pelos usuários do sistema, as funcionalidades **(Configuração → Controle de acesso → Funcionalidades)** ou recursos do sistema são o meio por que as operações possíveis no sistema são definidas. Em outras palavras, a tela em questão permite criar os pontos de acesso às funcionalidades do sistema, que depois serão reunidas nos papéis.

Ordinariamente, as funcionalidades do PJe virão pré-cadastradas e serão atualizadas à medida que surgirem e que as versões sejam evoluídas, de modo que muito raramente elas deverão ser manipuladas pelos tribunais.

### Papéis

Os papéis são conjuntos de funcionalidades que podem ser atribuídos aos usuários do sistema. No PJe, esses papéis têm uma estrutura hierarquizada, de modo que os papéis que são conjuntos de papéis recebem todas as funcionalidades que os papéis reunidos têm. Em outras palavras, os papéis mais superiores na hierarquia têm todas as funcionalidades que os papéis inferiores têm.

O critério identificador unívoco de um papel é sua sigla, de modo que é possível encontrar papéis com mesma descrição ou nome. O ideal, porém, é deixar os papéis com nomes igualmente unívocos para facilitar a configuração posterior do sistema.

Embora o PJe já venha pré-configurado com um conjunto bem expressivo de papéis, no caso de modificação da configuração pelos tribunais é importante definir/certificar os seguintes papéis:

| Papel | Identificador | Descrição |
| --- | --- | --- |
| Administrador de audiências | AdmAud | Papel responsável por realizar audiências de processos. |
| Administrador | admin e administrador | Papel responsável por configurar o sistema. |
| Administrador Conhecimento | AdmConh | Papel pertencente às pessoas que administram a fase de conhecimento do processo judicial; este papel é usado para Justiça do Trabalho. |
| Administrador triagem | AdmTr | Papel responsável por realizar triagens de processos. |
| Advogado | advogado e advogado\_procurador | Papel pertencente aos advogados. |
| Assessor | Asses | Papel pertencente às pessoas que atuam como assessor de juiz no desempenho de funções. |
| Assistente de advogado | assistAdvogado | Papel pertencente às pessoas que, embora não sejam advogados, devem poder preparar atos para que o advogado os finalize. |
| Assistente gestor de advogado | assistGestorAdvogado | Papel pertencente ao assistente de advogado que, além dessa função, também pode incluir ou excluir outros assistentes. |
| Assistente gestor de procuradoria | assistGestorProcuradoria | Papel pertencente ao assistente de procuradoria que, além dessa função, também pode incluir ou excluir outros assistentes. |
| Assistente de procuradoria | assistProcuradoria | Papel pertencente às pessoas que, embora não sejam procuradores, devem poder preparar atos para que o procurador os finalize. |
| Conciliador | conciliador | Papel pertencente às pessoas que atuam nas atividades de conciliação judicial. |
| Consulta | servidor | Papel pertencente às pessoas que podem consultar algumas funcionalidades do sistema. |
| Desentranha documento | pje:desentranhaDoc | O papel pje:desentranhaDoc cede permissões aos papéis que podem desentranhar documento; este papel é utilizado pelo PJe a partir da versão 1.6.0. |
| Diretor de secretaria ou cartório | dirSecretaria | Papel pertencente às pessoas que devem gerir a secretaria do órgão julgador colegiado, da vara ou do cartório. |
| Editor da ajuda | redator | Papel pertencente às pessoas que podem manipular a funcionalidade Editor da ajuda. |
| Estagiário Audiência | EstAud | Papel pertencente às pessoas que atuam como estagiários nas atividades que envolvem audiências de processos. |
| Estagiário Triagem | EstTr | Papel pertencente às pessoas que atuam como estagiários nas atividades de triagens de processos. |
| Funcionalidades de assistente de advogado | pje:assistenteAdvogado | O papel pje:assistenteAdvogado cede permissões aos papéis de assistente de advogado em uma instalação do PJe. Este papel é utilizado pelo PJe a partir da versão 1.6.0. |
| Funcionalidades de assistentes de procuradoria | pje:assistenteProcuradoria | O papel pje:assistenteProcuradoria cede permissões aos papéis de assistente de procuradorias em uma instalação do PJe. Este papel é utilizado pelo PJe a partir da versão 1.6.0 e é necessário conforme explicações em Acumulação de papéis. |
| Funcionalidade de fluxo de digitalização | pje:processo:fluxo:deflagrar:digitalizacao | O papel pje:processo:fluxo:deflagrar:digitalizacao cede permissões aos papéis que podem 'iniciar atividade de digitalização'. Esta atividade está relacionada ao fluxo de digitalização criado pela atender demanda do CNJ; mais informações aqui. Para o correto funcionamento do referido papel também é preciso criar a configuração do parâmetro pje:fluxo:digitalizacao:codigo (veja informações aqui). |
| Funcionalidades de procuradores | pje:procurador | O papel pje:procurador cede permissões aos papéis de procuradores públicos e membros do Ministério Público em uma instalação do PJe. Este papel é utilizado pelo PJe a partir da versão 1.6.0 e é necessário conforme explicações em Acumulação de papéis. |
| Funcionalidades de usuários internos | pje:auxiliarInterno | O papel pje:auxiliarInterno cede permissões aos papéis que atuam como servidores ou auxiliares internos em uma instalação do PJe. Este papel é utilizado pelo PJe a partir da versão 1.6.0. |
| Magistrado | magistrado | Papel pertencente às pessoas investidas de jurisdição que, por isso, podem tomar ciência de fatos específicos (normalmente sigilosos) e praticar atos exclusivos de juiz. |
| Oficial de justiça | Ofjus | Papel pertencente aos servidores da justiça que têm a responsabilidade da entrega de mandados. |
| Oficial de justiça distribuidor | OfjusDistr | Papel pertencente aos servidores da justiça que têm a responsabilidade de distribuir os mandados às centrais. |
| /OrgaoJulgador/abaCompetencia | /OrgaoJulgador/abaCompetencia | Papel pertencente às pessoas que podem manipular a aba 'Competência' do cadastro de Órgão Julgador; para este papel existe uma funcionalidade relacionada cujo identificador é /OrgaoJulgador/abaCompetencia (menu Configuração → Controle de acesso → Funcionalidades). |
| Papel de peticionante do tipo Jus Postulandi | jusPostulandi | Papel pertencente às pessoas físicas que podem ajuizar processos judiciais sem a participação de advogados, como nos casos de juizados especiais, habeas corpus e causas propostas junto à Justiça do Trabalho. |
| Perito | Perito | Papel pertencente às pessoas que colaboram com a administração da justiça por meio da produção de informações relevantes para o esclarecimento de questões fáticas específicas de suas especialidades relevantes para a identificação do direito aplicável ao processo. |
| Permite a visualização de processos sigilosos | pje:visualizaSigiloso | O papel pje:visualizaSigiloso cede permissões aos papéis que podem apenas visualizar processos judiciais sigilosos; este papel é utilizado pelo PJe a partir da versão 1.6.0. Informações sobre a importância desse papel consulte aqui. |
| Permite manipulação de processos sigilosos | pje:manipulaSigiloso | O papel pje:manipulaSigiloso cede permissões aos papéis que podem manipular processos judiciais sigilosos; este papel é utilizado pelo PJe a partir da versão 1.6.0. Informações sobre a importância desse papel consulte aqui. |
| Permite visualizar a aba características pessoais | pje:caracteristicasPessoais | O papel pje:caracteristicasPessoais cede permissões aos papéis que podem visualizar a aba 'características pessoais' da parte do tipo 'pessoa física' na consulta de processos; este papel é utilizado pelo PJe a partir da versão 1.6.0. |
| Permite visualizar a aba de expedientes | pje:processo:expedientes:visualizar | A aba "Expedientes" somente estará visível para os papéis que herdarem do papel pje:processo:expedientes:visualizar, este papel é utilizado pelo PJe a partir da versão 1.6.0. |
| pje:painel:liminarTutela:agrupador:manipula | pje:painel:liminarTutela:agrupador:manipula | O papel pje:painel:liminarTutela:agrupador:manipula cede permissões aos papéis que podem visualizar o agrupador "Processos com pedido de liminar/antecipação de tutela não apreciados"; este papel é utilizado pelo PJe a partir da versão 1.6.0. Consulte informações importantes sobre este papel na regra RN502. |
| pje:lancarMovimentacaoJuntada | pje:lancarMovimentacaoJuntada | O papel pje:lancarMovimentacaoJuntada cede permissões aos papéis que podem atuar nas atividades de juntada de documentos processuais; este papel é utilizado pelo PJe a partir da versão 1.6.0. A origem desse papel consta na demanda PJEII-7381. |
| pje:visualizaAbaAssociados | pje:visualizaAbaAssociados | O papel pje:visualizaAbaAssociados cede permissões aos papéis que podem visualizar a aba "Associados" da página "Detalhes do Processo"; este papel é utilizado pelo PJe a partir da versão 1.6.0. A origem desse papel consta na demanda PJEII-8348. |
| Pode inserir processo existente | pje:papel:podeInserirProcessoExistente | O papel pje:papel:podeInserirProcessoExistente cede permissões aos papéis que podem cadastrar processo judicial informando o número do processo de origem de forma manual, caso a classe judicial do processo em questão não exija numeração própria. Este papel é utilizado pelo PJe a partir da versão 1.6.0. |
| Pode reclassificar documentos | pje:papel:podeReclassificarDocumento | O papel pje:papel:podeReclassificarDocumento dá permissão de acesso à tarefa responsável pela reclassificação do tipo de documento; este papel é utilizado pelo PJe a partir da versão 1.6.0. É importante certificar se o recurso com nome "Reclassificar tipos de documentos" e identificador "/pages/Processo/Fluxo/documento/reclassificar.seam" foi cadastrado em Configuração → Controle de acesso → Funcionalidades. |
| Procurador | procurador | Papel pertencente às pessoas que representam o interesse público (Ministério Público), o interesse individual de pessoas beneficiárias de assistência judiciária pública (Defensoria Pública) ou um ou mais órgãos do Poder Público (procuradorias públicas). |
| Procurador/Gestor | procChefe | Este parâmetro tem o mesmo propósito do papel Procurador. |
| Procurador MP | procuradorMP | Este parâmetro tem o mesmo propósito do papel Procurador. |
| Procurador MP/Gestor | procChefeMP | Este parâmetro tem o mesmo propósito do papel Procurador. |
| /pages/Caixa/listView.seam | /pages/Caixa/listView.seam | Papel pertencente às pessoas que podem manipular a funcionalidade 'Nova Caixa' disponível na aba 'Caixas' do Painel do Usuário; o identificador da funcionalidade relacionada é /pages/Caixa/listView.seam (menu Configuração → Controle de acesso → Funcionalidades). |
| /pages/processo/relatorRevisado | /pages/processo/relatorRevisado | Papel pertencente às pessoas (ex.: juízes relatores) que podem controlar a inclusão em pauta, bem como outras atividades pertinentes ao julgamento de processos. O identificador da funcionalidade relacionada é /pages/processo/relatorRevisado (menu Configuração → Controle de acesso → Funcionalidades); consulte também aqui informações sobre o uso dessa funcionalidade. |
| /pages/Processo/ConsultaProcesso/editarModeloDocumento.seam | /pages/Processo/ConsultaProcesso/editarModeloDocumento.seam | Papel pertencentes às pessoas que podem editar documento; o identificador da funcionalidade relacionada é /pages/Processo/ConsultaProcesso/editarModeloDocumento.seam (menu Configuração → Controle de acesso → Funcionalidades). |
| /pages/Processo/Lote/listView.seam | /pages/Processo/Lote/listView.seam | Papel pertencente às pessoas que podem manipular a funcionalidade 'Criar lote de processos' (menu Processo → Outras ações → Criar lote de processos); o identificador da funcionalidade relacionada é /pages/Processo/Lote/listView.seam (menu Configuração → Controle de acesso → Funcionalidades). |
| Secretário de Audiência | Secretario | Papel pertencente às pessoas que podem secretariar audiências de processos. |
| Secretário da Sessão | idSecretarioSessao | Papel pertencente às pessoas que podem secretariar sessões de julgamento. |
| Servidor Audiência | ServAu | Papel pertencente às pessoas que atuam nas atividades que envolvem audiências de processos. |
| Servidor Conhecimento | ServConhe | Papel pertencente às pessoas que atuam na fase de conhecimento do processo judicial; este papel é usado para Justiça do Trabalho. |
| Servidor Distribuição | serv\_distrib | Papel pertencente às pessoas que atuam nas atividades que envolvem distribuição de processos. |
| Servidor do protocolo | protocolo | Papel pertencente às pessoas que atuam em atividades de protocolo da seção. |
| Servidor do Protocolo da Seção | protocoloSecao | Este parâmetro tem o mesmo propósito do papel Servidor do protocolo. |
| Servidor Malote | ServMalo | Papel pertencente às pessoas que atuam em atividades de malote da seção. |
| Servidor Geral | servgeral | Papel pertencente às pessoas que atuam nas atividades de caráter geral. |
| Servidor Retificador | ServRet | Papel pertencente às pessoas que podem retificar informações da aba 'características pessoais' da parte do tipo 'pessoa física'. |
| Servidor Triagem | ServTr | Papel pertencente às pessoas que atuam na atividade de triagens de processos. |
| Usuário Push | UsuPush | Papel pertencente às pessoas que utilizam a funcionalidade Push. Mais informações sobre a funcionalidade Push consulte aqui. |
| /updateRetificacaoAutuacao/abaCaracteristicaProcesso | /updateRetificacaoAutuacao/abaCaracteristicaProcesso | Papel pertencente às pessoas que podem manipular a aba 'Características do Processo' da tela 'Retificação de autuação'; o identificador da funcionalidade relacionada é /updateRetificacaoAutuacao/abaCaracteristicaProcesso (menu Configuração → Controle de acesso → Funcionalidades). |
| /updateRetificacaoAutuacao/abaComplementoClasse | /updateRetificacaoAutuacao/abaComplementoClasse | Papel pertencente às pessoas que podem manipular a aba 'Dados Específicos da Classe' da tela 'Retificação de autuação'; o identificador da funcionalidade relacionada é /updateRetificacaoAutuacao/abaComplementoClasse (menu Configuração → Controle de acesso → Funcionalidades). |
| /updateRetificacaoAutuacao/abaDadosIniciais | /updateRetificacaoAutuacao/abaDadosIniciais | Papel pertencente às pessoas que podem manipular a aba 'Dados Iniciais' da tela 'Retificação de autuação' e que também podem preparar remessa de processo ao 2º grau; o identificador da funcionalidade relacionada é /updateRetificacaoAutuacao/abaDadosIniciais (menu Configuração → Controle de acesso → Funcionalidades). |
| /updateRetificacaoAutuacao/abaAnexar | /updateRetificacaoAutuacao/abaAnexar | Papel pertencente às pessoas que podem manipular a aba 'Anexar' da tela 'Retificação de autuação'; para este papel existe uma funcionalidade relacionada cujo identificador é /updateRetificacaoAutuacao/abaAnexar (menu Configuração → Controle de acesso → Funcionalidades). |
| /updateRetificacaoAutuacao/abaAssunto | /updateRetificacaoAutuacao/abaAssunto | Papel pertencente às pessoas que podem manipular a aba 'Assuntos' da tela 'Retificação de autuação' e que também podem preparar remessa de processo ao 2º grau; para este papel existe uma funcionalidade relacionada cujo identificador é /updateRetificacaoAutuacao/abaAssunto (menu Configuração → Controle de acesso → Funcionalidades). |
| /updateRetificacaoAutuacao/abaProcesso | /updateRetificacaoAutuacao/abaProcesso | Papel pertencente às pessoas que podem manipular a aba 'Processo' da tela 'Retificação de autuação'; para este papel existe uma funcionalidade relacionada cujo identificador é /updateRetificacaoAutuacao/abaProcesso (menu Configuração → Controle de acesso → Funcionalidades). |

Os identificadores dos papéis (campo id\_papel da tabela acl.tb\_papel), **listados na tabela a seguir**, devem ser posteriormente armazenados como **parâmetros** ( **Configuração → Sistema → Parâmetro; Parâmetros - Papel**) com os seguintes nomes:

| Nome | Descrição |
| --- | --- |
| idOficialJusticaDistribuidor | Identificador numérico do papel Oficial de justiça distribuidor. |
| idPapelAdvogado | Identificador numérico do papel Advogado. |
| idPapelAssistenteAdvogado | Identificador numérico do papel Assistente de advogado. |
| idPapelAssistenteGestorAdvogado | Identificador numérico do papel Assistente gestor de advogado. |
| idPapelAssistenteGestorProcuradoria | Identificador numérico do papel Assistente gestor de procuradoria. |
| idPapelAssistenteProcuradoria | Identificador numérico do papel Assistente de procuradoria. |
| idPapelDiretorSecretaria | Identificadores numéricos, separados por vírgulas, do papéis equivalentes ao de Diretor de secretaria ou cartório. |
| idPapelMagistrado | Identificador numérico do papel Magistrado. |
| idPapelPush | Identificador numérico do papel Usuário Push. |
| idPapelPerito (até versão 1.4.6.x) pje:papel:id:perito (a partir da versão 1.6.x) | Identificador numérico do papel Perito. |
| idPapelProcurador | Identificador numérico do papel Procurador. |
| idPapelJusPostulandi (até versão 1.4.6.x) pje:papel:id:jusPostulandi (a partir da versão 1.6.x) | Identificador numérico do papel de peticionante do tipo Jus Postulandi. |

## Órgãos Judiciais

Os órgãos judiciais são a entidade base para a tramitação dos processos. Eles podem ser singulares ou colegiados (no caso de instalação de instância de revisão), e a eles são vinculados os processos e servidores.

### Jurisdição

Antes de criar órgãos judiciais, é imprescindível criar ao menos uma jurisdição no PJe. A jurisdição é a delimitação territorial de um segmento administrativo do Judiciário. Nesse contexto, ela é definida pela escolha de um nome, do grau da jurisdição aplicável e do conjunto de municípios que a compõem. É importante notar que a jurisdição exige a presença de um município sede, que servirá para o mecanismo de contagem automatizada de prazos identificar os possíveis feriados aplicáveis a essa contagem.

### As localizações dos órgãos

Cada órgão julgador deve ser vinculado à uma localização simples que contenha uma estrutura modelo. Em outras palavras, é necessário, para criar um órgão julgador, criar previamente uma localização à qual ele será vinculado.

### Estrutura de um órgão judicial

A estrutura de um órgão judicial é definida pela localização a que ele é vinculado quando de sua localização. Como já se apontou anteriormente, cada órgão julgador deve ser vinculado a uma localização previamente criada no sistema e essa localização deve ter uma estrutura modelo também previamente determinada.

A estrutura interna do órgão é o que permitirá a limitação da visibilidade de processos para os diversos servidores que compõem o órgão. Assim, se há apenas três localizações, como na estrutura de exemplo acima mencionada, a limitação em termos de visão será limitada à combinação dessas localizações com os possíveis papéis que os servidores desempenharão.

### Tipos de cargos judiciais

O PJe traz ínsita a ideia de que um órgão julgador pode ter mais de um magistrado atuante. Esse conceito, porém, foi ampliado para permitir que vários magistrados atuem em um ou mais cargos em um mesmo órgão julgador.

Em razão dessa característica, o PJe prevê a definição de tipos de cargos judiciais que serão vinculados aos diversos órgãos. Esses tipos servirão para a posterior criação de cargos concretos, nos órgãos julgadores. A criação desses tipos deve ser feita por meio da funcionalidade **Configuração → Tabelas judiciais → Tipo de cargo judicial**. Sugere-se a configuração que segue:

| Segmento | Tipos de cargos sugeridos |
| --- | --- |
| Justiça Comum dos Estados | Juiz de Direito   Juiz de Direito Substituto   Desembargador |
| Justiça Comum Federal | Juiz Federal   Juiz Federal Substituto   Desembargador Federal |
| Justiça do Trabalho | Juiz do Trabalho   Juiz do Trabalho Substituto   Desembargador do Trabalho |

### Criação de um órgão judicial e de seus cargos

Após criada a localização do órgão julgador, por meio da prévia definição da localização do tribunal e das subdivisões administrativas a qual estará vinculada (ex.: as comarcas ou subseções, no primeiro grau, e as seções de julgamento, no segundo grau), deve-se acessar a funcionalidade **Configuração → Órgão julgador \[aba Formulário\]** e definir, pelo menos, o seguinte:

- nome do órgão julgador
- sigla do órgão julgador – essa sigla poderá ser utilizada para extração posterior de dados
- código de origem (OOOO) – código da numeração única aplicável às Justiças do Trabalho, Eleitoral e Militar
- instância
- aplicabilidade – equivalente à instância
- data de criação
- jurisdição
- localização

Atente-se que a localização somente ficará disponível se houver uma localização de ponta, com estrutura modelo definida, não utilizada por outro órgão julgador. Criado o órgão julgador, surgem as abas pertinentes à competência, cargos, magistrados e visibilidade.

### Cargos e magistrados

Como apontado supra, o órgão julgador não é vinculado ao magistrado diretamente, como um vínculo pessoal. Em verdade, os magistrados são vinculados ao cargo concreto existente no órgão julgador, e este cargo é vinculado ao órgão. Mais que isso, os cargos judiciais são os efetivos destinatários da distribuição – ou seja, os processos não são distribuídos ao magistrado ou à vara ou órgão, mas sim aos cargos judiciais existentes no órgão julgador.

Em um contexto tal, é imprescindível que se crie, para cada um dos órgãos julgadores, seus respectivos cargos judiciais. Devem ser criados tantos cargos quantos destinatários concretos e legais da distribuição. Isso significa dizer que somente devem ser criados cargos quando esses cargos têm o objetivo de receber uma distribuição. Eventuais substituições de magistrados em um dado cargo da vara não justificam a criação de novos cargos. Em outras palavras, se o tribunal pretende simplesmente fazer um magistrado substituir outro que entrou em férias ou licença, não deve criar um novo cargo, mas vincular o magistrado substituto ao cargo ocupado pelo magistrado que está em férias ou licença. Somente se deve criar um outro cargo se existir um outro cargo no órgão julgador ou se excepcionalmente for criado um cargo tal em razão da necessidade do serviço.

A criação dos cargos de um órgão julgador se faz na aba **Cargos judiciais** do órgão julgador, que demandará a definição de uma descrição, de uma sigla, do tipo de cargo criado e de indicações que têm interesse para a distribuição de processos.

A vinculação de magistrados a esses cargos, por sua vez, é feita por meio das abas **Magistrado e Visibilidade**. Na primeira, faz-se a vinculação, com ou sem definição de limite temporal futuro, do magistrado a um dos cargos existentes no órgão. Na segunda, aponta-se o grau de visibilidade que o magistrado vinculado terá sobre os processos do órgão julgador, ou seja, se ele será capaz de ver todos os processos do órgão ou apenas de um dos cargos definidos.

## Regras de distribuição

Um dos pontos mais sensíveis na elaboração de um sistema de tramitação processual é a distribuição. Além de ser necessário evitar a previsibilidade da distribuição, é importante assegurar que a carga de trabalho destinada aos órgãos julgadores seja equitativamente balanceada entre eles. Com isso em mente, o CNJ formou um grupo de servidores e magistrados com grandes conhecimentos na área a fim de permitir identificar regras passíveis de automatização e que pudessem assegurar o atingimento desses objetivos.

As regras de distribuição do PJe se baseiam essencialmente na ideia de que cada processo representa uma determinada carga de trabalho, a que chamamos de peso, e que essa carga é resultado da composição de alguns aspectos inerentes ao processo judicial e que nele não se afiguram como meramente acidentais. As características adotadas foram: a classe processual, os assuntos processuais, a quantidade de partes componentes do processo, a existência ou não de situação de prevenção e circunstâncias próprias dos órgãos julgadores.

### Peso do processo e peso de distribuição

O processo judicial tem, no PJe, dois pesos: o peso do processo – que é igual em quaisquer circunstâncias, mantidos os dados básicos de autuação referentes à classe, assuntos e partes – e o peso de distribuição – aos quais são acrescentados os fatores pontuais da prevenção e de características do órgão distribuído.

O peso de distribuição é afetado ao cargo judicial distribuído e somente é modificado (implicitamente) nos casos de modificação da autuação. A redução do acumulador de peso distribuído do cargo somente ocorre quando o processo é redistribuído para outro órgão.

### Peso da classe

O peso da classe processual é definido classe a classe no sistema. Sugere-se que, inicialmente, seja adotado um peso padrão 2 para as classes cíveis e 3 para as classes criminais. A partir desse padrão, o ideal é que um grupo de magistrados da instância da instalação definam os pesos específicos das classes mais e menos trabalhosas mais frequentes no tribunal. Com isso, a equidade de carga de trabalho, considerando as classes, será atingida.

### Peso do assunto

O peso do assunto é considerado no cálculo do peso do processo, mas somente daquele assunto mais pesado dentre aqueles escolhidos pelo advogado quando da autuação. Sua definição deve seguir as mesmas sugestões do peso da classe, partindo-se de um peso padronizado 2.0.

### Peso das partes

O peso das partes do processo é definido por meio de intervalos aplicáveis aos polos processuais. Em outras palavras, o administrador deve definir que peso terá um processo quando ele apresentar, em um ou ambos os polos, uma quantidade definida de partes.

Sugere-se adotar a seguinte configuração para segmentos comuns do Judiciario:

| Intervalo | Polo | Peso |
| --- | --- | --- |
| Entre 0 e 10 autores | ativo | 1 |
| Entre 11 e 20 autores | ativo | 2 |
| Acima de 20 autores | ativo | 3 |
| Entre 0 e 5 réus | passivo | 1 |
| Entre 6 e 10 réus | passivo | 2 |
| Acima de 10 réus | passivo | 3 |

### Peso de prevenção

O peso de prevenção é, em verdade, um redutor do peso do processo para aqueles casos em que há um grande volume de processos sendo distribuídos por prevenção a um só juízo e que, em razão disso, já se sabe de antemão que a decisão de um muito provavelmente será reaproveitada por diversos outros processos.

O que acontecerá é que, atingido o critério do peso de prevenção quando de uma distribuição por prevenção, o peso distribuído aplicado em razão do processo prevento que foi distribuído será o resultado da multiplicação do peso original pelo redutor de prevenção, levando a um acréscimo inferior ao peso originário no cargo judicial.

Empiricamente, sugere-se a configuração abaixo:

| Intervalo | Peso |
| --- | --- |
| Entre 1 e 5 processos preventos distribuídos | 1 |
| Entre 6 e 10 processos preventos distribuídos | 0.75 |
| Acima de 10 processos preventos distribuídos | 0.5 |

### Peso do cargo judicial

O peso do cargo judicial é um mecanismo utilizado para viabilizar a estipulação de critérios diferenciados de distribuição para os cargos judiciais em razão de situações excepcionais definidas normativamente. É o caso, por exemplo, de implantação de novas varas em que o tribunal determina que a distribuição será majorada para a vara recém-instalada por um dado período, ou de quando o titular de um determinado cargo passa a exercer outra função administrativa com consequente redução de sua distribuição normal.

A definição desse peso é feita na própria configuração do cargo judicial no órgão julgador. Por meio dela, pode-se apontar que aquele cargo específico receberá 50% menos distribuição que os demais órgãos julgadores, ou até 200% da distribuição normal.

### Distância máxima de distribuição

A distância máxima de distribuição é um parâmetro destinado a reduzir a probabilidade de um cargo judicial receber um novo processo quando ele já está sobrecarregado em relação aos demais. Em outras palavras, é a medida numérica do que o tribunal considera como sobrecarga relativa de trabalho. Sua definição significa que o tribunal está apontando que um determinado cargo judicial não deve receber a distribuição por estar com um volume de trabalho muito superior aos cargos com igual competência.

Atualmente, a distância máxima de distribuição deve ser fixada em pelo menos 150, que representa três vezes o peso máximo teórico que um processo pode assumir no PJe. Desse modo, mantida a configuração padrão, a diferença máxima entre o acumulador do órgão com menor valor de acúmulo de processos e o acumulador dos demais órgãos julgadores igualmente competentes será 150. A ideia é que, havendo poucos órgãos igualmente competentes, esse valor possa ser majorados a fim de que a aleatoriedade seja mantida.

Atente-se que um cargo cujo acumulador supera a distância máxima de distribuição **não será excluído** da distribuição, mas sim ter a probabilidade de ser sorteável reduzida em 75%.

A definição da distância máxima de distribuição é feita pela funcionalidade **Configuração → Distribuição → Distância máxima de distribuição.**

## Definição de competência

A competência jurisdicional é outro ponto muito sensível na administração judiciária. A questão mais problemática é a multiplicidade de designações para a mesma “competência” e a existência de competências bem específicas em algumas localidades.

Para superar esses pontos, o PJe faz uso de dimensões na definição da competência, cujo nome deve ser dado pelo tribunal no intuito de assegurar que o advogado seja capaz de, sozinho, escolher a qual delas dirigir um processo nos casos em que há múltiplas competências possíveis para o processo que ele está ajuizando.

### Dimensões da competência

A competência tem seis dimensões para sua definição: territorial, procedimental, material, pessoal, funcional e de alçada. Essas dimensões são construídas no PJe por diferentes entidades, conforme se verá adiante.

### Dimensão territorial ou jurisdição

A dimensão territorial é definida por meio da jurisdição. Essa definição não traz consequências diretas no algoritmo de distribuição, especialmente por ser a jurisdição o primeiro momento em que o advogado prepara a ação a ser ajuizada.

### Dimensão pessoal

A dimensão pessoal permite que se determine que uma competência somente será aplicável quando uma determinada pessoa ou um determinado tipo de pessoa figura ou está ausente nos polos processuais. Isso se presta, por exemplo, a permitir que se defina que a competência de Juizados Especiais Comuns da Justiça Comum dos Estados e do Distrito Federal não acata o ajuizamento de processos em que uma unidade federativa ou suas autarquias e fundações figuram em qualquer dos polos. De igual modo, permite que se exija a presença desses órgãos em um dos polos quando se trate de competência da vara de Fazenda Pública.

A definição de dimensões pessoais deve ser feita na funcionalidade **Configuração → Competência → Dimensão pessoal \[aba Formulário\]**. Após a criação da dimensão, surgirão as abas de restrições por pessoa e de restrições por tipo de pessoa. Em cada uma delas, é possível indicar que um determinado polo ou ambos os polos processuais exigem a presença ou proíbem a presença de uma determinada pessoa ou de um tipo de pessoa. É importante salientar que os critérios adotados na dimensão pessoal são cumulativos, ou seja, aquela dimensão é aplicável quando todos os critérios nela inseridos ocorrem no processo judicial paradigma. Na composição da competência, porém, os critérios aplicados são alternativos, ou seja, se qualquer das dimensões pessoais estiver preenchida, a competência será considerada apta à distribuição.

### Dimensão funcional

A dimensão funcional é em tudo semelhante à dimensão pessoal, exceto pelo fato de ela se reger pela presença ou proibição de presença de uma autoridade nos polos processuais. Idealmente, essa dimensão somente deve ser aplicada quando se tratar de uma competência em razão da função desempenhada – como é o caso de mandados de segurança em face de juízos – e nos casos de autoridades impróprias (agentes privados atuando como públicos). No caso de processos em face de autoridades cujos órgãos estão sujeitos a uma competência específica, a verificação dos critérios pessoais de competência atuam como se o órgão a que está ligada a autoridade fizesse parte do processo.

A criação de dimensões funcionais é feita pela funcionalidade **Configuração → Competência → Dimensão funcional**. Os efeitos do acúmulo de critérios na dimensão funcional e de dimensões funcionais na competência são idênticos aos mencionados na dimensão pessoal.

### Dimensão material e procedimental

O critério mais amplamente utilizado pelos tribunais para a definição de competência é o critério material, ou seja, o tema a respeito do qual há a controvérsia no processo judicial. A par disso, também se faz um intenso uso do tipo de procedimento escolhido, ou seja, se o caso é um mandado de segurança, um procedimento criminal ou semelhantes. Considerando tais circunstâncias, o PJe prevê, na definição da competência, a composição de classes (critério procedimental) com os assuntos (critério material) para a definição da competência. Em verdade, a composição desses dois critérios é tão relevante que não há competência sem essa prévia definição.

Para definir a competência segundo tais critérios, deve-se acessar **Configuração → Competência → Competência**. Após a criação da competência, surge uma aba “Classe x assunto”, na qual devem ser combinadas as classes e assuntos que farão parte da competência. Juntamente com essa informação, deve-se, ainda, indicar para que instância se está fazendo a vinculação.

A respeito disso, é importante atentar que um órgão julgador pode ter mais de uma competência. Desse modo, o ideal, para o tribunal, é identificar as competências mais atômicas de sua organização judiciária e configurar cada uma delas separadamente. Ao final, basta compor a competência de seus órgãos julgadores combinando as competências que eles efetivamente têm.

### Dimensão de alçada

A dimensão de alçada é definida na própria definição de competência. Atualmente, somente a dimensão de alçada por valor está efetivamente funcional.

### Vinculação de competência a órgão julgador

A vinculação de competências a um órgão julgador pode ser feita de duas maneiras: a partir da competência, indicando-se na aba de órgãos julgadores quais os que a utilizam; e a partir do próprio órgão julgador, incluindo-se as competências na aba pertinente.

Uma vez definidas as competências dos órgãos regularmente, é possível ajuizar um processo judicial escolhendo uma jurisdição que tenha órgãos cuja competência encerra classes judiciais da instância da jurisdição que são iniciais e têm um fluxo definido.

## Definição de fluxos

O PJe faz intenso uso de um motor de gerenciamento de processos de negócios para viabilizar a tramitação processual. Em verdade, os processos judiciais tramitam seguindo o fluxo definido para a classe processual específica, percorrendo as tarefas e passos previamente determinados pela área judiciária do tribunal, sem prejuízo de se contemplar a possibilidade de o processo escapar do funcionamento normal do fluxo em situações excepcionais.

A definição dos fluxos, é, portanto, uma das mais relevantes tarefas do responsável pela configuração do PJe, já que disso depende o funcionamento ideal do sistema. O presente capítulo trata dos aspectos mais gerais da configuração de fluxos no PJe.

### A vinculação entre fluxos e classes judiciais

A vinculação de um fluxo a uma classe judicial é feita na configuração da classe **(Configuração → Tabelas judiciais → Classe judicial → Classe judicial)**. Na prática, essa definição significa que, após a distribuição, o PJe deflagrará, para a classe específica, o fluxo de trabalho ali escolhido.

### Fluxo como um novo conceito

Embora o processo judicial possa ser imprevisível em relação ao que pode surgir em seu curso, é certo que há um caminho relativamente ordinário para cada uma das classes processuais. Nesse sentido, o PJe procura trabalhar com o processo judicial seguindo o que é regular e tratando as exceções como o que elas efetivamente são: exceções. Isso não significa dizer que os processos são iguais, mas que os passos que levam a sua conclusão com a regular prestação jurisdicional são muito semelhantes e não só podem como devem ser organizados de modo a permitir que se explore, ao máximo, as características que separam os computadores dos magistrados, procuradores, advogados e servidores do Judiciário.

Tudo aquilo que pode ser automatizado por meio de instruções ao computador deve ser automatizado, deixando que as pessoas atuem somente quando há efetivamente a necessidade de uma intervenção inteligente de que os computadores são incapazes. Em um cenário tal, tem-se a soma da velocidade dos computadores aplicada às tarefas repetitivas com a inata capacidade de as pessoas avaliarem pontualmente situações complexas, para o que terão mais tempo e disponibilidade por terem sido exoneradas daqueles encargos repetitivos ou mecânicos.

A tudo isso se acrescenta a vantagem de se evitar erros crassos por encaminhamentos equivocados de processos a destinos indevidos, o que pode ser catastrófico no caso de processos eletrônicos em razão da facilidade de execução desse tipo de “remessa”.

### A tecnologia subjacente

O motor de gerenciamento de fluxos de negócios (BPM) do PJe é o [JBoss jBPM 3.2](https://www.jbpm.org/), especificamente fazendo uso da linguagem jPDL. A seguir, os conceitos principais dessa linguagem serão expostos, o que não dispensa a recomendável leitura, em inglês, do guia de usuário da tecnologia em questão.

### Introdução ao Business Process Management (BPM)

Um processo de negócio (ou business process, ou ainda fluxo, na terminologia utilizada neste manual) é uma sequência de tarefas que acontecem em uma ordem definida e repetível, executada por seres humanos e/ou por sistemas para atingir um objetivo negocial.

Por sequência, devemos entender uma ordem lógica esperada para a execução das tarefas componentes do fluxo, ordem essa que não deve ser subvertida ordinariamente. Em outras palavras, o fluxo deve ser preparado para seguir adiante, ainda que alguém tenha cometido um “erro” ao fazê-lo. Deve-se, portanto, identificar um padrão de trabalho e interação entre o sistema e as pessoas no intuito de atingir o objetivo negocial, e esse padrão deve ser o adotado e deve permanecer relativamente estável no tempo.

Por tarefa, devemos entender como uma atividade qualquer, atômica (indivisível) em seu contexto de execução, que contribui para a realização do objetivo negocial. Essa tarefa pode ser, por exemplo, aferir a existência de semelhanças entre processos judiciais, preparar uma certidão, preparar uma minuta de documento, realizar uma intimação etc.

A execução das tarefas previstas no fluxo deve ser feita por pessoas ou por sistemas. A distinção se deve, basicamente, pelo fato de o comportamento de pessoas ser substancialmente diferente do comportamento de sistemas. Os sistemas, idealmente, estão sempre disponíveis para a execução das tarefas e devem executá-las o mais rápido possível. As pessoas, por sua própria natureza, não. Logo, o que temos, no desenho de um fluxo, é uma combinação de comportamentos esperados em sua execução que considera essas diferentes realidades. Assim, em um dado fluxo, teremos uma sequência de comportamentos do tipo: execute o mais rápido possível, espere o responsável introduzir informações, espere o responsável introduzir informações, execute o mais rápido possível, execute o mais rápido possível, espere o responsável introduzir informações etc. A execução das tarefas previstas no fluxo deve ser feita por pessoas ou por sistemas. A distinção se deve, basicamente, pelo fato de o comportamento de pessoas ser substancialmente diferente do comportamento de sistemas. Os sistemas, idealmente, estão sempre disponíveis para a execução das tarefas e devem executá-las o mais rápido possível. As pessoas, por sua própria natureza, não. Logo, o que temos, no desenho de um fluxo, é uma combinação de comportamentos esperados em sua execução que considera essas diferentes realidades. Assim, em um dado fluxo, teremos uma sequência de comportamentos do tipo: execute o mais rápido possível, espere o responsável introduzir informações, espere o responsável introduzir informações, execute o mais rápido possível, execute o mais rápido possível, espere o responsável introduzir informações etc.

Concretamente, em um fluxo simples de decisão de magistrado, teríamos: (i) registre que o processo judicial está em processo decisório o mais rápido possível, (ii) aguarde que se minute o ato judicial e sua movimentação vinculada, (iii) aguarde que o responsável confirme o conteúdo do ato judicial, (iv) registre a movimentação previamente definida o mais rápido possível, (v) registre que o ato judicial foi concluído o mais rápido possível, (v) registre que o processo não está mais em processo decisório o mais rápido possível, (vi) devolva o processo judicial para o fluxo original. Nesse fluxo hipotético, as tarefas ou atividades (ii) e (iii) são atribuídas a pessoas e, por isso, demandam um período de espera; as demais, ao sistema.

O objetivo negocial é aquilo que se pretende ter por produto de um fluxo ou processo de negócio. Esse objetivo pode ser um objetivo mais amplo e abstrato, mais adequado a fluxos de mais alto nível, ou um objetivo mais concreto, adequado a subprocessos que são reiteradamente chamados a partir de fluxos de mais alto nível. No primeiro caso, poderíamos ter como objetivo negocial produzir uma decisão de conhecimento que resolva um conflito fático-jurídico entre duas partes. No segundo caso, poderíamos ter objetivos específicos, como produzir uma decisão monocrática não terminativa ou produzir atos de comunicação para ciência de partes. A delimitação do objetivo negocial é imprescindível para que se possa atingir mais eficiente e concretamente o sucesso no uso dos fluxos e deve ser bem pensada para evitar escopos excessivamente abertos. Em outras palavras, quanto menos ambicioso o objetivo negocial atribuído a um determinado fluxo, mais simples ele será e mais facilmente se conseguirá aproveitá-lo em fluxos mais ambiciosos.

Finalmente, o M do BPM significa management, ou seja, gerenciamento. Em verdade, a ideia é que, com base nas informações possivelmente providas pelos sistemas de gerenciamento de processos de negócio, os seus gerentes possam rever esses processos com o objetivo de deixá-los mais eficientes. Atualmente, no PJe, somente algumas exibições a esse respeito estão sendo providas.

### Como definir um fluxo

A definição de um fluxo deve passar por algumas etapas:

- identificação do processo de negócio real a ser gerenciado: o analista de negócio identifica os fluxos reais existentes no ambiente de trabalho e o descreve de uma forma pouco formal
- modelagem do processo de negócio: o analista de negócio verte a descrição do passo anterior para uma linguagem formal de descrição de processo de negócio. Há algumas linguagens disponíveis: BPMN 1.0, BPMN 2.0, jPDL etc. No caso do PJe, essa linguagem deve ser o jPDL
- executar o processo com a área de negócio: descrito e implantado o processo de negócio no sistema gerenciador de fluxos, ele deve ser executado com a área de negócio para se assegurar sua eficácia (aptidão de produzir o resultado negocial esperado) e eficiência (aptidão de atingir o resultado com o menor número de passos possível)
- melhoria do processo de negócio: revisar o processo de negócio até que ele esteja razoavelmente estável e com os patamares de eficácia e eficiência admissíveis pela área de negócio.

Essa última fase deve ser executada periodicamente para assegurar a evolução do sistema.

### Os processo de negócio no tempo

Os sistemas de BPM têm como características principais a possibilidade de uma definição abstrata do processo, aqui designada como definição de fluxo, que é desligada das instâncias desse fluxo, que são os fluxos já iniciados segundo uma definição de fluxo existente à época de sua inicialização. Isso significa que, uma vez iniciado uma instância de um dado fluxo, essa instância de fluxo seguirá a sequência de atividades ou tarefas existente na definição de fluxo **da época da instancialização**, não sendo, por padrão, afetada por modificações futuras.

O jBPM, que é utilizado no PJe, não foge dessa regra. Ocorre que a legislação processual brasileira tem por princípio de funcionamento exatamente o contrário, ou seja, alterações legais na forma de tramitação de um processo judicial devem afetar todos os processos judiciais em curso exceto se determinado em contrário. Em razão disso, **o PJe introduziu uma modificação a essa regra geral**, de modo a permitir que os processos judiciais que já tiveram fluxos iniciados segundo uma definição migrem para definições de fluxo novas. Para isso, é imprescindível que:

1. a nova definição de fluxo mantenha todas as tarefas (mesmos nomes) existentes na definição antiga que ainda tenham processos judiciais;
2. uma tarefa ou atividade somente seja excluída após se assegurar que não há mais processos judiciais nessas tarefas;
3. sejam mantidas as transições a partir da tarefa que se pretende excluir para as tarefas ou atividades seguintes até que ela seja suprimida.

### Nós, transições, ações e tipos de nós

Na definição de um fluxo, utilizamos dois conceitos principais: (i) **nó** e (ii) **transição**. Em verdade, uma definição de um fluxo (processo de negócio) nada mais é que um conjunto de nós ligados entre si por transições.

Além desses dois principais elementos, há ainda o conceito de ação, que é uma atividade executada pelo sistema em momentos específicos quer da execução do processo, quer da execução de atividades de pessoas.

### Nó de fluxo

O nó é a unidade essencial de definição de um processo de negócio. Ele representa a atividade ou tarefa que deve ser executada e a ele estão vinculadas transições de saída para outros nós, à exceção do nó de término, que não pode ter transições de saída.

A sequência de atividades de uma definição de fluxo nada mais é que o encadeamento de nós dos diferentes tipos por meio de suas transições. A depender do tipo de nó, é possível criar mecanismos de desvios automatizados, execução de atividades pelo sistema, execução de subprocessos e telas para a introdução de dados ou execução de atividades por pessoas. Os tipos de nós serão expostos logo a seguir.

Os nós têm um ciclo de vida que dispara eventos em momentos específicos de sua execução. Esse ciclo está descrito no seguinte gráfico:

![Nos](https://docs.pje.jus.br/assets/images/Nos-fd7cfaed27fcf68a8a2bda7efa224130.jpg)

Além desses eventos, também são lançados eventos antes e depois de se determinar a continuidade do fluxo (sinalização).

### Transição

Transição é uma vinculação entre um nó e outro, definida no nó de origem, que pode incluir condições para sua disponibilidade. Sem uma transição de saída, o processo de negócio instanciado não pode seguir no fluxo, ficando, portanto, paralisado naquele nó.

Conforme se verá adiante, alguns tipos de nós não aceitam a existência de transições e outros somente toleram a presença de uma transição funcional.

### Ações

Além dos nós e das transições, o BPM também encerra o conceito de ações, que são atividades de sistema passíveis de execução em momentos específicos do ciclo de vida de um nó. Esse padrão de atividade permite que algumas atividades sejam feitas dentro de um contexto específico da execução do fluxo de negócio.

As ações podem ser executadas dentro de um nó ou de uma transição, condicional ou incondicionalmente, e também podem ser executadas pela emergência de “eventos” de interesse do projetista do fluxo.

### Tipos de nós

Os nós, no PJe, podem ser:

a) início (start-state): é o nó imediatamente invocado pelo motor de fluxo quando inicializa uma instância de fluxo;

b) término (end-state): é o nó após o qual a execução da instância de fluxo é considerada terminada;

c) estado (state): é o nó simples que impede a continuidade do fluxo, ou seja, a instância é executada até chegar a este nó, mas a continuidade depende de uma sinalização expressa;

d) sistema (node): é um nó simples que executa seu conteúdo, quando existente, mas que segue para o nó subsequente independentemente de nova sinalização;

e) decisão (decision): é um nó que contém uma expressão que permite a seleção de uma dentre as várias transições de saída;

f) separação (fork): é um nó que permite a execução simultânea de vários caminhos de execução;

g) junção (join): é o nó que permite a continuidade da execução do fluxo após ter havido uma separação;

h) subprocesso (process-state): é um nó que permite a execução de um outro processo dentro de um processo-pai;

i) tarefa (task-node): é um nó que permite a criação de uma ou mais tarefas atribuíveis a pessoas.

### Nó de início

O nó de início, que deve ser único para cada definição de fluxo, é o nó a partir do qual é iniciada a execução de uma instância de fluxo. Ele não pode ser apontado como destino de nenhuma transição na definição de fluxo. A transição de saída será a primeira disponível na configuração do nó. No PJe, após a inicialização do fluxo, ele recebe a sinalização para seu início, ou seja, para que o fluxo saia do nó de início para o primeiro nó de saída disponível.

| Nó de Início |  |
| --- | --- |
| notação XML | start-state |
| Eventos de ciclo de vida | deixar o nó; após sinalização |
| Restrições | • só deve haver um nó de início em cada definição de processo   • idealmente, deve-se colocar apenas uma transição de saída a partir desse nó, a inclusão de mais de uma transição de saída fará com que a primeira transição disponível seja a adotada quando da sinalização   • esse nó não pode ser destino de nenhuma transição |

Na definição XML do fluxo, esse nó será indicado por:

```xml
<start-state name="Início">
        <transition to="Preparar comunicação" name="Preparar comunicação"/>
    </start-state>
```

### Nó de término

O nó de término é utilizado para indicar onde e como o fluxo terminará, ou seja, o momento em que a instância em execução não mais permitirá a realização de atividades ou tarefas. A restrição básica de um nó de término é de que ele não pode ter transições de saída. Além disso, ele não suporta execuções internas e seu ciclo de vida apenas dispara o evento de entrada no nó. Após a entrada em um nó de término, porém, o motor de fluxo dispara os eventos vinculados ao ciclo de vida do processo.

Atente-se que uma definição de fluxo pode ter múltiplos nós de término. O que vai diferenciar um de outro são seu nome e o comportamento a ele vinculado pelos eventos de seu ciclo de vida.

| Nó de término |  |
| --- | --- |
| notação XML | end-state |
| Eventos de ciclo de vida | Entrar no nó |
| Restrições | •esse nó não pode ter transições de saída |

O nó de término deve ser representado como:

```xml
<end-state name="Término"/>
```

### Nó de estado

O nó de estado é um nó que deve ser utilizado somente nas situações em que o fluxo não pode ter sua execução continuada enquanto uma atividade externa ao sistema não for concretizada. Em outras palavras, é um nó que fica aguardando uma sinalização de que pode continuar. No PJe, não há um mecanismo visual para concretizar essa sinalização e, além disso, os nós de estado não são exibidos nas listas de tarefas do sistema, dando a impressão de que o processo “desapareceu”. Por essa razão, sua inclusão em uma definição de fluxo somente deve ser feita quando se tiver certeza absoluta de que algum mecanismo será responsável por sinalizar a continuidade do processo.

| Nó de estado |  |
| --- | --- |
| Notação XML | state |
| Eventos de ciclo de vida | entrar no nó; deixar o nó; antes de sinalizar; após sinalizar |
| Restrições | • Não há execução neste nó, que apenas serve para "espera".   • Não há interface no PJe que permita visualizar ou sinalizar para nós como este. |

O nó de estado deve ser representado como:

```xml
<state name="Nó de estado">
        <transition to="Nó seguinte a ser definido"/>
    </state>
```

OBS: Não há como criá-lo através da ferramenta visual do PJe. Se for o caso, deve ser inserido o trecho diretamente no arquivo xml que representa o fluxo.

### Nó de sistema

O nó de sistema é o nó padrão para execução de tarefas pelo sistema. Na prática, esse nó realiza todo o ciclo de vida padrão e, ao final, toma a primeira transição disponível.

| Nó de sistema |  |
| --- | --- |
| Notação XML | node |
| Eventos de ciclo de vida | entrar no nó; deixar o nó; antes de sinalizar; após sinalizar |
| Restrições | • Não há restrições |

O nó de sistema deve ser representado como:

```xml
<node name="Nó de sistema">
       <event type="node-enter">
          <action expression="#{true}"/>
       </event>
       <transition to="Nó seguinte a ser definido"/>
    </node>
```

### Nó de decisão

O nó de decisão serve para permitir que o sistema, a partir de uma expressão dada, identifique qual das transições disponíveis deve ser tomada em seguida. É importante observar que o motor jBPM não verifica durante a definição do fluxo, quando de sua implantação ou na instancialização de um fluxo concreto, se os nomes das transições de saída definidos na expressão são válidos. Essa verificação somente acontece quando da efetiva execução do nó, de modo que é extremamente importante que se assegure que a transição resultado da execução da expressão seja idêntica às transições possíveis no nó de decisão.

| Nó de decisão |  |
| --- | --- |
| Notação XML | decision |
| Eventos de ciclo de vida | entrar no nó; deixar o nó; antes de sinalizar; após sinalizar |
| Restrições | • É necessário prover a expressão pela qual o sistema será capaz de identificar a transição a ser tomada.   • O resultado da expressão definida no nó deve ser uma sequência de caracteres idêntica ao nome de uma das transições de saída disponíveis no nó. |

O nó de decisão deve ser representado como:

```xml
<decision name="Nó de decisão" expression="#{variavelX ? 'Nada mais a ser feito' : 'Atividades várias'}">
        <transition to="Nó de término" name="Nada mais a ser feito"/>
        <transition to="Separação para execução de atividades" name="Atividades várias"/>
    </decision>
```

### Nó de separação

O nó de separação se destina a permitir que o fluxo de execução seja dividido em múltiplos e previamente definidos caminhos de execução. Desse modo, múltiplas atividades podem ser executadas paralelamente. Do ponto de vista negocial, deve-se adotar esse comportamento quando cada um dos caminhos de execução não tem interdependência com o outro.

Cada uma das transições de saída de um nó de separação será tomada pelo motor de BPM e o fluxo estará em todas elas. Cria-se uma espécie de relação de pai e filho entre o ponteiro da execução do processo principal (que fica apontando para o nó de separação) e os ponteiros de cada um dos caminhos deflagrados. Quando todos os caminhos chegarem ao fim (ou seja, ao nó de junção), o motor de fluxo faz com que o ponteiro do processo principal passe a apontar o nó de junção.

A grande restrição a ser observada em relação ao nó de separação é que os diversos caminhos de execução por ele iniciados devem ser reunidos posteriormente em um nó de junção. Em outras palavras, as transições existentes em nós pertencentes a um caminho de execução podem apontar exclusivamente para nós do próprio caminho de execução ou para o nó de junção.

| Nó de separação |  |
| --- | --- |
| Notação XML | fork |
| Eventos de ciclo de vida | entrar no nó; deixar o nó; antes de sinalizar; após sinalizar (somente há os eventos de saída quando todos os ponteiros dos caminhos filhos chegarem à junção) |
| Restrições | • Os caminhos gerados pela utilização dos nós de separação somente podem ter transições entre os nós do próprio caminho e para o nó de junção.   • Todo nó de separação deve ter um correspondente nó de junção. |

O nó de separação deve ser representado como:

```xml
<fork name="Exemplo de separação">
        <transition to="Primeiro nó do caminho A" name="Caminho A"/> <transition to="Primeiro nó do caminho B" name="Caminho B"/> <transition to="Primeiro nó do caminho C" name="Caminho C"/>
    </fork>
```

### Nó de junção

O nó de junção se presta a reunir os diversos caminhos disparados por um anterior nó de separação. Ele se comporta como um nó de estado até que o último dos caminhos da separação é finalizado, momento em que ele executa seu ciclo de vida e toma a única transição de saída que ele deve apresentar.

| Nó de junção |  |
| --- | --- |
| Notação XML | join |
| Eventos de ciclo de vida | entrar no nó; deixar o nó; antes de sinalizar; após sinalizar |
| Restrições | • Somente caminhos iniciados em uma mesma separação devem chegar a esse nó.   • Idealmente, deve-se colocar apenas uma transição de saída a partir desse nó. A inclusão de mais de uma transição de saída fará com que a primeira transição disponível seja adotada quando da sinalização. |

O nó de junção deve ser representado como:

```sql
<join name="Exemplo de reunião">
        <transition to="Primeiro nó depois das atividades paralelas" name="Saída única"/>
    </join>
```

### Nó de processo (sub-processo)

O nó de processo permite que um fluxo invoque outro fluxo em um determinado ponto de sua execução, retomando o fluxo invocante quando o fluxo invocado chega a seu término.

Do ponto de vista técnico, o ponteiro que indica a execução fica parado no nó de processo no fluxo invocante, sendo criado um novo fluxo invocado, que terá seu próprio ponteiro. Ao ser finalizado o fluxo invocado (seu ponteiro apontar para um nó de término), há a sinalização para que o ponteiro do fluxo invocante prossiga, sendo então tomada a primeira transição disponível.

Deve-se lembrar, ao utilizar um nó de processo, que é possível designar o nó de processo no fluxo invocado com nome totalmente diverso do nome do fluxo invocado, o que pode melhor contextualizar o usuário quanto ao momento de execução em que ele está. Desse modo, pode-se incluir um nó de processo chamado “Decidir pedido liminar”, sendo invocado um fluxo cujo nome é “Preparar decisão judicial”. Em outro ponto do fluxo pai, pode-se invocar o mesmo fluxo, mas em um nó de processo designado como “Julgar o processo”.

A verificação da existência do fluxo incluído no nó de subprocesso, no PJe, será feita somente no momento da execução do nó, e não quando da implantação do fluxo no sistema (publicação).

O nó de processo inclui dois novos eventos em sua execução: ao criar o subprocesso e ao finalizar o subprocesso.

| Nó de processo |  |
| --- | --- |
| Notação XML | process-state |
| Eventos de ciclo de vida | criar o subprocesso; entrar no nó; deixar o nó; antes de sinalizar; após sinalizar; ao finalizar o subprocesso |
| Restrições | • Idealmente, deve-se colocar apenas uma transição de saída a partir desse nó. A inclusão de mais de uma transição de saída fará com que a primeira transição disponível seja adotada quando da sinalização.   • Somente pode ser iniciado um subprocesso por nó de processo. |

O nó de processo deve ser representado como:

```xml
<process-state name="Apreciar admissibilidade recursal">
       <sub-process name="Decisão com possível recurso interno" binding="late"/>
       <transition to="Intimar da decisão de admissibilidade" name="Intimar para contrarrazões"/>
       <event type="node-enter">
          <action expression="#{preencherMovimento.deCodigo(123).comComplementoDeCodigo(18).doTipoDominio().preencherComElementoDeCodigo(40).
                comComplementoDeCodigo(7).doTipoLivre().preencherComTexto("Presidência").lancarMovimento()}"/>
          <action expression="#{preencherMovimento.deCodigo(51).comComplementoDeCodigo(3).doTipoDominio().preencherComElementoDeCodigo(6).
                lancarMovimento()}"/>
       </event>
    </process-state>
```

### Nó de tarefa

O nó de tarefa é o nó que permite a execução de uma tarefa por uma pessoa. Por meio desse tipo de nó é que se define como instâncias de tarefa devem ser criadas e atribuídas durante a execução de um fluxo.

| Nó de tarefa |  |
| --- | --- |
| Notação XML | task-node |
| Eventos de ciclo de vida | entrar no nó, deixar o nó; antes de sinalizar; após sinalizar   Ao criar a tarefa, ao atribuir a tarefa, ao iniciar a tarefa e ao finalizar a tarefa para cada uma das definições de tarefa |
| Restrições | • Deve haver ao menos uma tarefa definida em um nó de tarefa (task). |

Ordinariamente, a definição de uma tarefa em um nó tal implica que a execução do fluxo ficará aguardando sua conclusão para que possa prosseguir. Se mais de uma tarefa for definida em um mesmo nó de tarefa, o comportamento padrão é de que todas as tarefas sejam concluídas para que a execução possa prosseguir.

As tarefas, tal como os nós, devem ter nomes únicos em toda a definição de fluxo, ainda que estejam em nós diferentes. Cada instância de tarefa criada acrescenta quatro eventos ao ciclo de vida do nó: ao criar a tarefa; ao atribuir a tarefa; ao iniciar a tarefa e ao terminar a tarefa. No PJe, as tarefas recebem um controlador que contém variáveis utilizadas pelo sistema para construir a interface de usuário de modo a permitir que ele execute a atividade de interesse negocial. A definição dessas variáveis é feita diretamente na interface de definição de processo, com a indicação do tipo de variável, seu nome, um descritor e características internas.

O PJe também impõe uma restrição significativa ao funcionamento regular dos nós de tarefa do jPDL: enquanto, na especificação, é possível incluir mais de uma tarefa para cada um dos nós, o PJe não tolera esse comportamento, devendo ser incluída uma e apenas uma tarefa por nó de tarefa.

| Definição de tarefa |  |
| --- | --- |
| Notação XML | task |
| Eventos de ciclo de vida | Ao criar a tarefa, ao atribuir a tarefa, ao iniciar a tarefa e ao finalizar a tarefa |
| Restrições | • Para que algo seja exibido na tela do usuário, é necessário definir variáveis no controlador. |
| Tipos de variáveis de controlador | • Checkbox, Data, Data no passado, Editor, Editor com assinatura digital, Frame, Homologador de movimentos temporários, Numérico, Texto, Popup, Página |

A definição de tarefa será estudada mais adiante. Ao final, um nó de tarefa será representado tal como no seguinte trecho:

```xml
<task-node end-tasks="true" name="Preparar comunicação">
       <task name="Preparar comunicação" swimlane="Cartório">
          <controller>
             <variable name="Processo_Fluxo_prepararExpediente" mapped-name="frame:Processo_Fluxo_prepararExpediente" access="read,write"/>
          </controller>
       </task>
       <description><![CDATA[]]></description>
       <transition to="ForkComunicação" name="ForkComunicação"/>
       <transition to="Término" name="Não intimar"/>
    </task-node>
```

### Dinâmica da execução de um fluxo

Todas as vezes que um fluxo é sinalizado, seja inicialmente, seja após um nó de estado, o motor de processo de negócio executa todas as tarefas automatizadas até encontrar um novo nó de estado, momento em que ele interrompe a execução e grava as informações no banco de dados. Caso haja algum erro nesse ínterim, toda a operação é desprezada e o fluxo se mantém na posição originária.

Essa descrição significa que as atividades automatizadas do fluxo, estejam elas definidas nos nós, nos eventos dos nós, nos eventos de fluxo ou nos eventos de transição, serão sempre realizadas em uma situação de “tudo ou nada” após a sinalização da execução, que pode acontecer ao protocolar um processo inicial, ingressar em um subprocesso, finalizar uma tarefa ou apresentar uma petição.

Como observação final, deve-se apontar que, além dos eventos associados aos nós, o motor jBPM também dispara os eventos de: início de execução de processo, final de execução de processo, criação de subprocesso e final de execução de subprocesso.

### Variáveis de fluxo

A definição do motor de fluxo utilizado no PJe permite a utilização de dois tipos de variáveis de fluxo, ou seja, de pontos de gravação sob nomes específicos de valores que se pretende reutilizar no futuro. O primeiro desses tipos são as variáveis de tarefa, já mencionadas no tópico anterior, destinadas, no caso do PJe, a permitir a formação de interfaces de modo dinâmico a partir da definição do fluxo. Do ponto de vista de escopo, essas variáveis devem estar adstritas à própria tarefa em que foram criadas. TODO

## Parâmetros

Para saber mais quanto aos parâmetros, consulte:

[Parâmetros](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Configurando%20par%C3%A2metros)

## Quartz

O PJe utiliza o **Quartz** como serviço de agendamento para seus procedimentos automáticos. Os procedimentos automáticos, denominados jobs, têm uma série de configurações que podem ser verificadas, com a devida permissão, através da instalação do PJe pelo link `<url_aplicacao_2ºgrau>/pages/admin/quartzJobsInfo.seam` ou via menu Configuração → Ambiente → Jobs da aplicação. Se os jobs não aparecem listados (a lista de jobs da aplicação PJe é apresentada [aqui](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Configura%C3%A7%C3%B5es%20iniciais#pje-push)) nesse link, é preciso reconfigurá-los. Resumidamente, o procedimento apaga os jobs já cadastrados e, ao subir a aplicação novamente, faz com que o sistema configure-os automaticamente. Após a execução do procedimento, o servidor de aplicação onde está o PJe deve ser reiniciado. Abaixo estão os passos:

1. Verificar se a variável no banco de dados: 'bytea\_output' está definida para 'escape'. Se não estiver, ajuste-a ou a adicione. Para ajustar a variável, vá no PGAdmin e clique com o botão direito sobre os bancos do PJe, selecione "Properties" e vá para a aba "Variables".
	Você pode alterar esse parâmetro usando o seguinte comando SQL:
	```sql
	ALTER DATABASE <nome_banco> SET bytea_output='escape';
	    ALTER DATABASE <nome_banco_bin> SET bytea_output='escape';
	```
2. Limpar as tabelas de agendamento do quartz: No PGAdmin, clique com o botão direito sobre a tabela "public.qrtz\_triggers" e selecione a opção "Truncate cascaded" repetir o procedimento para a tabela "public.qrtz\_job\_details". Opcionalmente, pode-se executar os seguintes comandos SQL:
	```sql
	TRUNCATE public.qrtz_triggers CASCADE;
	    TRUNCATE public.qrtz_job_details CASCADE;
	```
3. Apagar os parâmetros gerados automaticamente pelo Quartz na tabela "core.tb\_parametro":
```sql
delete from core.tb_parametro where nm_variavel ilike '%timerparameter%';
```

### Lista de jobs da aplicação

Conforme explicado na seção Quartz, o PJe possui alguns procedimentos automáticos (jobs) responsáveis pela execução de tarefas específicas. Nesta seção, apresentamos esses jobs.

- consolidadorDocumentosService.execute(): é o serviço de sincronismo de documentos cuja responsabilidade é efetuar a transferência da parte binária dos documentos dos processos judiciais remetidos. Por exemplo: somente após a execução desse job será possível visualizar os documentos de processos judiciais remetidos à instância superior.
- envioMovimentoPushProcessor.enviarEmails(): é o serviço destinado ao acompanhamento automático de processos judiciais, relacionado ao PJe Push.
- remessaManifestacaoProcessual.execute(): é o serviço responsável por remeter as manifestações processuais.
- verificadorPeriodico.execute(): é o serviço destinado à verificação periódica de prazos processuais. O comportamento dessa funcionalidade consta aqui Verificador Periódico.

## PJe PUSH

O PJe Push é utilizado para distribuição de conteúdo informativo relativo às atualizações dos processos judiciais que estão transitando no sistema. Os informativos são enviados para o e-mail fornecido pelo usuário no cadastro.

### Manual

### Configuração do servidor de e-mail

Configurar o arquivo components.xml, com os dados (host, usuário e senha) do servidor de email, assim:

```xml
{'tls': 'false', 'debug': 'false', 'host':'correio.TRIBUNAL.jus.br', 'password': 'SENHA', 'port': '25', 'username': 'USUARIO'}
```

### Usuário não cadastrado no PJe

Para aquele cidadão não cadastrado no PJe, porém interessado no acompanhamento de algum processo via push, ter acesso ao serviço, deve ser efetuado um cadastro acessando o PJe. Para tanto, deve-se atentar para as seguintes instruções.

#### Pré-cadastro

Antes de realizar o cadastro propriamente dito, o usuário deve fazer um pré-cadastramento no sistema. Para isso deve-se, na página de acesso disponibilizada, acionar o botão “Informações”. Será habilitada uma nova página com informações referentes ao sistema. Nela, deve-se localizar a seguinte mensagem: “Para acesso ao PJe Push clique aqui!”. Em seguida, deve-se clicar no local indicado.

O sistema disponibiliza a página “PJe Push”. Nela, para realizar o pré-cadastro, deve-se localizar e clicar no local indicado na seguinte mensagem: “Ainda não é cadastrado? Clique aqui!”.

Após clicar no local indicado anteriormente, a página “Pré-Cadastro” é habilitada composta pelas tabelas “Informações Importantes” e “Preencha os campos abaixo”.

Na tabela “Informações Importantes”, tem-se acesso a informações relativas ao sistema. É imprescindível a ciência dessas informações para a utilização do push. Para efetuar o pré-cadastro, deve-se, na tabela “Preencha os campos abaixo”, preencher os seguintes campos:

- CNPJ / CPF – Deve ser preenchido, de forma alternativa CNPJ ou CPF. Por padrão, o sistema disponibiliza o campo para preenchimento de CNPJ. Caso a opção desejada seja CPF, deve-se marcar o check box disponível no campo.

Obs.: Caso o sistema não encontre o número de documento junto à base de dados da Receita Federal, é emitida uma mensagem de aviso

- E-mail – Deve ser informado um e-mail válido para que o serviço possa ser efetivado.

Obs.: O usuário deve atentar para o fato de que, conforme informação da tabela “Informações Importantes”, o e-mail informado nesse campo irá, no momento do cadastro, receber uma mensagem de confirmação com um link para efetivar o cadastro.

- Sequência de letras e números (Captcha) – Deve-se, por fim, informar a sequência de letras e números disponível na página. Caso haja dificuldades na visualização da figura apresentada, deve-se solicitar uma nova sequência por meio do botão correspondente..

Ao inserir o código, o usuário deve clicar no botão "Confirmar".. Quando a sequência inserida e confirmada não for idêntica à apresentada, é emitida a mensagem de "Código inválido":

O usuário deve inserir o novo código apresentado e clicar novamente no botão de confirmação. Informado o código correto, o sistema confirma o pré-cadastro emitindo a mensagem de sucesso.

Caso exista cadastro com um dos dados inseridos, é emitida mensagem, solicitando que o usuário reenvie o email de confirmação ou cancele o pré-cadastro.

#### Cadastro

Para validar a assinatura do Push, o usuário deve acessar seu correio eletrônico informado no pré-cadastro e clicar no link disponibilizado.

Obs.: Caso haja dificuldades na execução da confirmação, o usuário deve copiar e colar o referido link na barra de endereço do seu navegador e, em seguida, acionar a tecla Enter.

Acionado o link disponível no e-mail, o usuário será remetido à página de cadastro na qual devem ser preenchidos os campos requisitados. Alguns campos estão, por padrão, preenchidos com base nos dados informados no pré-cadastro e na pesquisa realizada no banco de dados da Receita Federal. Outros devem ser preenchidos. O usuário deve atentar para os seguintes campos:

- Estado / Cidade – O usuário deverá selecionar uma das opções indicadas no campo “Estado” e, em seguida, inserir o nome ou parte do nome da cidade a ser indicada, devendo o sistema apontar opções para a localidade desejada.
- OAB (UF 000000 A) – Campo facultativo. Deve ser preenchido quando o usuário for advogado.
- Digite a senha / Confirme a senha – O usuário deve inserir uma senha pessoal para que possibilite a execução do cadastro, bem como a edição de dados, caso seja necessário. A senha deve ser elaborada de acordo com os critérios de segurança estabelecidos no sistema: conter no mínimo 6, no máximo 15 caracteres; não utilizar o próprio nome como parte da senha; não utilizar sequências ou repetições de caracteres.

Obs.: Os caracteres componentes da senha devem ser variados: letras maiúsculas, letras minúsculas, números ou caracteres especiais (+;&%#@ ¬ª>). Dessas opções, 3 (três) devem ser escolhidas.

Caso o usuário insira uma senha fora dos padrões exigidos, visualizará uma mensagem contendo orientações sobre senhas seguras.

Obs.: Para que seja confirmada, a senha deve ser reinserida de forma idêntica no campo “Confirme a senha”.

Há um termo de ciência acerca do serviço oferecido pelo PJe Push. Trata-se de um informativo, sem caráter oficial. O conhecimento sobre esse termo deve ser obrigatoriamente expresso para que o PJe Push seja disponibilizado. A ciência é efetivada pela marcação do check box disponibilizado.

Para efetivar o cadastro, deve-se clicar no botão "Gravar". O sistema emite a mensagem de sucesso. Para descartar os dados informados, deve-se clicar em "Limpar".

#### Acesso ao Push

Para cadastrar os processos dos quais o usuário deseja acompanhar as atualizações de trâmite, o usuário deve abrir a página de acesso ao PJe Push, disponibilizada na página de informações do PJe.

Nela, além do acesso ao PJe Push, há outras funcionalidades importantes para o usuário: a possibilidade de redefinir a senha, no caso de o usuário esquecê-la; a possibilidade de exclusão do cadastro e, por conseguinte, exclusão do serviço.

Obs.: Há, ainda, a funcionalidade de pré-cadastro, conforme relatado anteriormente.

#### Redefinir Senha

Para redefinir sua senha, o usuário deve clicar no local correspondente. É habilitada a tabela “Redefinir Senha” na qual devem ser preenchidos os campos requisitados – “CNPJ / CPF” e “E-mail” – e, em seguida, para que seja enviado ao e-mail informações relativas àquele cadastro, deve-se clicar no botão "Enviar.

Após enviar os dados solicitados, é encaminhado ao e-mail do usuário uma mensagem de redefinição de senha, por meio da qual o usuário deve acessar o link para realizar a mudança solicitada.

- Caso o usuário não tenha solicitado a redefinição da senha e encontre essa mensagem em seu correio eletrônico, deve clicar nesse link disponível e encerrar a solicitação;
- Esse link deve ser acessado caso a redefinição da senha tenha sido realmente solicitada. Ao acioná-lo, é habilitada a página de redefinição na qual deve ser inserida uma nova senha em conformidade com aqueles critérios já apresentados: conter no mínimo 6, no máximo 15 caracteres; não utilizar o próprio nome como parte da senha; não utilizar sequências ou repetições de caracteres.

Inserida a nova senha nos campos disponíveis, deve-se, confirmar a alteração. Para cancelar o procedimento, deve-se acionar o botão "Cancelar".

- Caso o usuário não consiga acessar o link de redefinição, há a possibilidade de copiar e colar o endereço eletrônico disponibilizado nesta área da figura na barra de endereço do navegador e, em seguida, clicar na tecla Enter. É habilitada a página de redefinição da senha. Há, no entanto, um campo adicional a ser preenchido pelo usuário relativo ao código de segurança informado no e-mail.

Deve ser inserida uma nova senha em conformidade com aqueles critérios já apresentados.

Inserida a nova senha nos campos disponíveis, deve-se confirmar a alteração. Para cancelar o procedimento, deve-se acionar o botão "Cancelar".

#### Excluir Cadastro

Para excluir seu cadastro, o usuário deve clicar no local indicado.

É habilitada a tabela “Excluir Cadastro” na qual devem ser preenchidos os campos requisitados – “CNPJ / CPF” ou “E-mail”, bem como “Senha” – e, em seguida, para que seja enviado ao e-mail informações relativas àquele cadastro, deve-se clicar no botão. Caso deseje apagar os dados informados, o usuário deve acionar o botão.

Obs.: O usuário deve atentar para a consequência associada à exclusão do cadastro, ou seja, a exclusão de todos informativos, via Push, acerca dos processos cadastrados. Para voltar a utilizar o serviço, deve ser realizado um novo cadastro.

#### Acessar PJe Push

Para cadastrar os processos os quais o usuário deseja receber informações acerca das atualizações do trâmite de algum processo, bem como para editar os dados cadastrais, é fundamental que o usuário acesse ao PJe Push. Para este fim, devem ser preenchidos os seguintes campos:

CNPJ / CPF ou E-mail – Deve ser informado CNPJ/CPF ou e-mail que foi cadastrado pelo usuário. Senha – A mesma senha atribuída no cadastro pelo usuário.

Para apagar os dados informados a fim de reinserir novos dados, deve-se clicar no botão "Limpar". Para acessar ao PJe Push, após a inserção dos dados, deve ser acionado o botão "Confirmar".

O sistema habilita a página do usuário do PJe Push composta pelos seguintes campos:

1. Ferramenta de Auxílio - Esse campo permite ao usuário do PJe Push realizar consulta indexada e alterar a cor de visualização e o tamanho da fonte.
	Para realizar uma pesquisa indexada, informe o filtro da pesquisa no campo correspondente e clique no ícone indicado.
	Para alterar o esquema de cores do sistema, clique em. O sistema habilitar uma nova tela para a escolha da nova cor.
	Obs.: Selecionada a cor, o sistema fará a mudança em seguida. Para sair da tela de escolha de cores, clique no "X" do topo direito da janela.
	Para alterar o tamanho da letra, selecione entre as opções disponíveis através dos ícones da letra "A". O sistema fará a alteração em seguida.
2. Menu “Home” - Deve ser utilizada para retornar à página inicial.
3. “Logout ” - Deve ser utilizado para sair do sistema.
4. Menu “PJe Push” > “Meus dados Cadastrais” - Por meio desse menu, é possível modificar os dados informados no cadastro.
	Após as alterações, para registrá-las, deve-se clicar no botão "Gravar". Caso o usuário deseje cancelar a ação, deve-se clicar no botão correspondente.
	OBS: Ao modificar o e-mail, o usuário receberá uma mensagem de confirmação em seu novo endereço eletrônico, no qual deverá ratificar a mudança por meio do link disponibilizado. Caso não consiga acessar o link, o usuário poderá copiar e colar o endereço eletrônico na barra de endereços do navegador e, em seguida, clicar no botão Enter.
	OBS: Para modificar a senha de acesso ao sistema, basta preencher os campos relativos à senha e depois gravar as informações. Para modificar os demais dados sem modicar a senha, deve-se ignorar os campos referentes a ela.
5. Menu “PJe Push” > “Minhas assinaturas” - Por meio desse menu, o usuário cadastrará os processos dos quais deseja receber as atualizações processuais.

2.4.1 Cadastrando processos no PJe Push

Para o usuário do PJe Push cadastrar os processos dos quais deseja receber os informativos, deve acessar o menu “PJe Push” e selecionar “Minhas assinaturas”.

É habilitada a página “Minhas assinaturas”, que contém a tabela “Inclusão de processos para acompanhamento” e as abas “Processos cadastrados” e “Processos relacionados”.

Na tabela "Inclusão de processos para acompanhamento", há dois campos, a serem preenchidos:

Número do Processo - Deve ser inserido, obrigatoriamente, o número do processo que se deseja acompanhar; Observação - Pode ser inserida qualquer observação que o usuário deseje junto ao processo a ser incluso na lista de processos cadastrados.

Após o preenchimento dos campos, deve ser acionado o botão "Incluir".

Quando o número de processo inserido e confirmado não estiver correto, é emitida a seguinte mensagem: "O processo informado não é válido."

Informado o número correto, o sistema confirmará a inclusão: "O processo xxxx incluído com sucesso."

Na aba "Processos cadastrados", estão arrolados todos os processos cadastrados pelo usuário. Nela pode-se excluir processos, visualizá-los e editar as observações inseridas.

Para excluir algum processo da lista, o usuário deve marcar o respectivo check box.

Para excluir todos os processos da lista, o usuário deve marcar o checkbox localizado na parte superior da tabela “Processos Cadastrados”.

Após a seleção dos processos, deve ser acionado o botão "Excluir".

Para desmarcar os processos, clicar em "Limpar".

O usuário poderá detalhar o processo por meio do ícone do óculos.

Através do ícone do lápis, o usuário pode editar a observação inserida no momento da inclusão do processo. Ao clicá-lo, o sistema lançará as informações do processo para a tabela “Inclusão de processos para Acompanhamento”, sendo possível a edição.

Após a edição, o usuário poderá descartar as informações por meio do botão "Novo", ou poderá confirmá-las, clicando em "Gravar".

Na aba “Processos relacionados”, estão arrolados, automaticamente, todos os processos que o usuário faz parte, efetivamente; seja como autor, réu, advogado, procurador etc. Nela o usuário pode incluir processos na lista de “Processos cadastrados”, visualizá-los e adicionar observações.

Para receber as atualizações, por meio do push, de algum dos processos da lista de processos relacionados, deve o usuário, obrigatoriamente, inclui-lo no rol de processos cadastrados.

Para cadastrar um processo relacionado ao usuário, deve-se marcar seu respectivo check box.

Para cadastrar todos os processos relacionados ao usuário, deve-se marcar o check box localizado na parte superior da tabela “Processos Relacionados”.

Para confirmar a operação, acionar o botão "Incluir".

O usuário pode detalhar o processo por meio do ícone que contém o óculos.

Através do ícone do lápis, o usuário pode adicionar qualquer observação que deseje, anexo ao “processo relacionado”. Ao clicá-lo, o sistema lançará as informações do processo para a tabela “Inclusão de processos para acompanhamento”, sendo possível inserir a observação.

Após a edição, o usuário pode descartar as informações por meio do botão "Novo", ou pode confirmá-las, clicando em "Gravar".

Após o cadastramento dos processos, o usuário passará a receber os informativos de movimentações processuais pelo e-mail, semelhantes ao da imagem seguinte:

Além do cancelamento da inscrição do serviço por meio da exclusão do processo da lista de “Processos cadastrados”, o usuário também pode fazê-lo clicando no link que acompanha todos os informativos enviados. Ao acessá-lo, o usuário cancela, de imediato, o recebimento das atualizações do processo em questão.

#### Usuário Cadastrado no PJe

Para advogados/procuradores, magistrados e servidores que já são usuários cadastrados do PJe, não há necessidade de cadastrar-se também no PJe Push para utilizar o serviço. Para essa finalidade, basta que acessem o menu “PJe Push” em seus respectivos painéis de usuário.

OBS: A assinatura dos processos no PJe Push pelo advogado/procurador pode ocorrer, também, de outra maneira: por meio do cadastro de usuário, realizado anteriormente ao seu efetivo uso do PJe. Ao preencher o cadastro de acesso ao PJe, o advogado/procurador poderá selecionar a assinatura automática de todos os processos em que atua como causídico. Para isso, basta marcar o check box correspondente (Incluir processos no Push automaticamente). Dessa forma, o advogado/procurador receberá de forma automática as atualizações de todos aqueles processos.

#### Cadastrando processos no PJe Push

Para que o usuário do PJe Push possa cadastrar os processos que deseja receber os informativos, deve acessar ao menu “PJe Push” e clicar em “Minhas assinaturas”.

OBS: O usuário advogado/procurador poderá cadastrar quaisquer processos que tenha interesse e não apenas aqueles que atua como causídico. Será habilitada a página “Minhas assinaturas”, que contém a tabela “Inclusão de processos para acompanhamento” e as abas “Processos cadastrados” e “Processos relacionados".

Na tabela Inclusão de processos para acompanhamento, há dois campos, a serem preenchidos:

“Número do Processo” - Deve ser inserido, obrigatoriamente, o número do processo que se deseja acompanhar;

“Observação” - Pode ser inserida qualquer observação que o usuário deseje junto ao processo a ser incluso na lista de processos cadastrados.

Para validar a inclusão dos processo, deve ser acionado o botão "Incluir".

Quando o número do processo inserido e confirmado não estiver correto, é emitida a seguinte mensagem: "O processo informado não é válido". Informado o número correto, o sistema confirmará a inclusão através da mensagem "O processo xxx incluído com sucesso".

Na aba “Processos Cadastrados”, estão arrolados todos os processos cadastrados pelo usuário. Nela pode-se excluir processos, visualizá-los e editar as observações inseridas.

#### Configuração rápida

Alguns procedimentos são necessários para que essa funcionalidade esteja disponível.

No arquivo de configuração disponível no servidor jboss components.xml, possivelmente em (...)jboss-5.1.0.GA/server/deploy/pje.war/WEB-INF/components.xml, deve-se acrescentar a seguinte linha:

```xml
<mail:mail-session tls="false" debug="false" host="servidor de envio de email do tribunal" password="inserir a senha" port="587" 
username="usuário da conta de email"/>
```

Configurar, no PJe, o parâmetro relacionados a envio de email:

```xml
emailSistema - no atributo valor informe o email do tribunal. Esse email virá como remetente quando o usuário que se cadastra recebe as 
notificações no campo é o e-mail que o usuário receberá para a confirmação do e-mail.
```

Os valores abaixo são os valores padrões para o perfeito funcionamento do sistema push, porém os valores que vêm na base limpa estão errados.

![Parametrospjepush](https://docs.pje.jus.br/assets/images/Parametrospjepush-12203662291bba1a07d4464dad53f868.jpeg)

Link para usuários se cadastrarem:

exemplo [http://www.tribunal.jus.br/pje/informacoes.seam](http://www.tribunal.jus.br/pje/informacoes.seam)

No rodapé existe um link "Para acesso ao PJe Push clique aqui!" exemplo de link a ser redirecionado [http://www.tribunal.jus.br/pje/Push/loginPush.seam](http://www.tribunal.jus.br/pje/Push/loginPush.seam)

Nesse link vai existir 3 informações conforme abaixo:

Ainda não é cadastrado? Clique aqui! Esqueceu sua senha? Clique aqui! Excluir seu cadastro? Clique aqui!

Escolha uma delas.

caso não seja cadastrado, acessar o link do pré-cadastro. Exemplo: [http://www.tribunal.jus.br/pje/Push/preCadastro.seam](http://www.tribunal.jus.br/pje/Push/preCadastro.seam)

informe o cfp,email e o código do captcha, em seguida será validado se o usuário existe cadastrado no pje e se o email já é cadastrado.

Em seguida o sistema enviará um e-mail padrão conforme abaixo.

Prezado Sr(a). JOSÉ DA SILVA,

Por favor, leia esta mensagem com atenção: Você realizou um pré-cadastro no serviço PJe Push sob a conta de e-mail: `<josedasilva@gmail.com.br>`

Para completar seu cadastro e receber mensagens do PJe Push é necessária a confirmação da sua assinatura, clicando no endereço mais abaixo. Você será redirecionado a uma página no Portal do TRIBUNAL DE JUSTIÇA e receberá a confirmação da sua assinatura. Caso você não seja redirecionado, copie e cole o link na barra de endereço do seu navegador, pressionando a tecla Enter em seguida.

[http://www.tribunal.jus.br/pje/Push/confirmarCadastro.seam?hash=99353ad2c3d10591e2cda645221fc8abd93rekkkjkfhhjwee919c](http://www.tribunal.jus.br/pje/Push/confirmarCadastro.seam?hash=99353ad2c3d10591e2cda645221fc8abd93rekkkjkfhhjwee919c)

Para a sua segurança, atenção: Certifique-se que a página para onde você foi redirecionado é realmente do Portal do tribunal; Favor desconsiderar esta mensagem, caso você não tenha solicitado essa operação. Em caso de persistência, favor entrar em contato, conforme as instruções abaixo.

Este é um e-mail automático. Por favor não responda. Para entrar em contato, utilize o serviço 'Fale Conosco' situado na página de acesso ao PJe Push no site [http://www.tribunal.jus.br/pje/faleConosco.seam](http://www.tribunal.jus.br/pje/faleConosco.seam) Este é um serviço meramente informativo, não tendo, portanto, cunho oficial.

Depois que clicar no link para confirmação basta informar o dados com \* (obrigatórios) e confirmar o cadastro.