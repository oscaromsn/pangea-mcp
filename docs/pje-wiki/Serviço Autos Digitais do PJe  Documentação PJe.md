---
title: "Serviço Autos Digitais do PJe | Documentação PJe"
source: "https://docs.pje.jus.br/servicos-negociais/servico-autos-digitais"
author:
published:
created: 2025-09-30
description: "Introdução"
tags:
  - "clippings"
---
# Serviço Autos Digitais do PJe | Documentação PJe
Available at https://docs.pje.jus.br/servicos-negociais/servico-autos-digitais


[Pular para o conteúdo principal](https://docs.pje.jus.br/servicos-negociais/#__docusaurus_skipToContent_fallback)

## Serviço Autos Digitais do PJe

## Introdução

A partir da [arquitetura 2.1 do PJe](https://docs.pje.jus.br/manuais-basicos/arquitetura-pje#pje-21---uma-nova-proposta-arquitetural), que visa a transição gradual do sistema monolítico para um sistema de microsserviços, faz-se necessária a reescrita do código para as novas linguagens e tecnologias a serem implementadas. Dessa forma, será possível retirar a lógica emaranhada no monolito do PJe Legacy, criando serviços independentes e com responsabilidades bem definidas.

Para isso, por meio do [Programa Justiça 4.0](https://www.cnj.jus.br/tecnologia-da-informacao-e-comunicacao/justica-4-0/), desenvolvido em parceria com o Programa das Nações Unidas para o Desenvolvimento (PNUD), foi iniciado projeto para refatoração do módulo de visualização dos autos digitais do PJe, executado no âmbito de instrumento de *Long Term Agreement* daquela organização com a empresa DB Server. O objetivo é evoluir o PJe, visando prepará-lo para adoção, em larga escala, de uma arquitetura modular, baseada em microsserviços, e da separação estrutural dos artefatos de frontend e backend.

Em análise realizada pela Divisão de Gestão do Processo Judicial Eletrônico, setor do Departamento de Tecnologia da Informação e Comunicação do CNJ, observou-se que a funcionalidade de apresentação dos autos digitais é uma das que demandam maior quantidade de recursos de processamento e memória tanto do servidor de aplicação quanto do banco de dados. Isso se deve a diversos fatores, como a complexidade da funcionalidade, as tecnologias utilizadas e a arquitetura atual, que possui forte acoplamento entre os componentes, número elevado de dependências e blocos monolíticos, que dificultam correções e evoluções, além de prejudicar a escalabilidade do sistema como um todo.

Assim, optou-se por gerar um MVP (Mínimo Produto Viável) que contivesse as funcionalidades básicas da tela de autos digitais, migrando o frontend de Java JSF para Angular, como objetivo dessa primeira etapa da refatoração

## Proposta arquitetural

Inicialmente, será implementada arquitetura similar àquela do módulo de painel de usuário do [PJe-Web](https://docs.pje.jus.br/servicos-negociais/servico-pje-web) a partir da criação de componentes para implementação de uma Aplicação SPA (*Single Page Application*), utilizando Angular. No backend, será realizada a comunicação com o [PJe Legacy](https://docs.pje.jus.br/servicos-negociais/servico-pje-legacy) por meio da exposição de APIs REST, utilizando a linguagem Java (JBoss Seam).

A figura abaixo ilustra a arquitetura proposta:

![Arquitetura Autos Digitais](https://docs.pje.jus.br/assets/images/pje-autos-digitais-arquitetura-simplificada-56f525223618a2a68a61fb28a8a43934.png)

Futuramente, o módulo poderá ser evoluído para ter o backend independente do PJe Legacy, tornando-se um serviço autônomo e integrado aos demais módulos do PJe.

## Especificação negocial

Para a refatoração das funcionalidades de autos digitais, foi necessário realizar o levantamento de requisitos a partir do código existente no PJe Legacy, por meio de uma abordagem de análise composta das seguintes etapas:

1. Em um primeiro momento, foram especificadas as histórias de usuário unitárias dos autos digitais, utilizando a abordagem exploratória dos recursos dos autos, a partir da interface da versão de produção do PJe;
2. Na sequência, foi realizada a escrita preliminar dos critérios de aceitação das histórias de usuário, identificados a partir da mesma abordagem exploratória;
3. Depois disso, os desenvolvedores, com base na análise do código-fonte da aplicação e dos requisitos iniciais das histórias avaliadas, realizaram, por meio da engenharia reversa, o mapeamento de regras negociais adicionais, complementação das regras negociais preliminares e levantamento dos critérios técnicos envolvidos;
4. A partir da atividade de engenharia reversa, as histórias de usuário foram complementadas e tiveram os critérios de aceitação enriquecidos com o material gerado na engenharia reversa;

As **histórias de usuário** elaboradas estão documentadas no [Jira do CNJ](https://www.cnj.jus.br/jira/issues/?jql=project%20%3D%20PJEII%20AND%20issuetype%20%3D%20Refatora%C3%A7%C3%A3o%20AND%20labels%20%3D%20pje-refatoracao-autos-digitais). Por meio deste exercício, obteve-se um ganho significativo em documentação do PJe, além de garantir que as funcionalidades desenvolvidas viessem a reproduzir os critérios negociais documentados.

Todas as histórias se relacionam ao **Épico** "guarda-chuva" [PJEII-26798 - Reestruturação da visualização de Autos Digitais](https://www.cnj.jus.br/jira/browse/PJEII-26798).

Cada história foi desmembrada em diversas sub-tarefas, utilizadas pela equipe do projeto para controlar o progresso da implementação. Por estarem vinculadas às histórias de usuário, essas subtarefas podem ser visualizadas integralmente no Jira.

### Protótipos

A refatoração das telas teve como premissa manter a mesma estrutura de navegação e disposição dos componentes, de modo a não impactar a usabilidade do sistema. Foram realizados apenas pequenos ajustes de estilo, quando necessário, para melhorar a experiência do usuário.

Para subsidiar a implementação, foram elaborados protótipos de alta fidelidade, utilizando a ferramenta [Figma](https://www.figma.com/). Os protótipos foram anexados às respectivas histórias de usuário no Jira, e também estão disponíveis em [repositório público do Figma](https://www.figma.com/proto/JmOdMuIrR9PujlLKaXnevi/CNJ---Autos-Digitais?type=design&node-id=11-221&scaling=contain&page-id=8%3A2&starting-point-node-id=11%3A221).

Ao final do projeto, também foi realizado exercício de *design review*, com objetivo de validar os requisitos entregues, em comparação aos protótipos elaborados.

### Especificação técnicas

Cada história de usuário levantada também contou com a especificação de uma issue técnica, contendo o detalhamento da implementação da funcionalidade. Estas issues estão disponíveis no Jira e são vinculadas como subtarefas nas respectivas histórias de usuário..

## Execução do projeto

### Estratégia de Desenvolvimento

Adotou-se o [Processo de desenvolvimento de software do PJe](https://docs.pje.jus.br/manuais-basicos/processo-desenvolvimento-pje) como base para os trabalhos.

A implementação foi realizada de forma que o novo módulo possa ser utilizado em paralelo com a antiga implementação, permitindo, assim, que não haja impacto na estrutura atual. Dessa forma, inicialmente, ambos os módulos estarão disponíveis de forma paralela dentro do sistema, o que permite a realização de testes das novas telas, ao mesmo tempo garantindo que não haja quebras nas funções atuais. Após a devida homologação, será possível realizar a "virada de chave", com substituição completa do código antigo pelo novo.

Para viabilizar essa estratégia, optou-se por criar uma branch de desenvolvimento intermediária. Assim, cada história de usuário foi desenvolvida em uma feature branch específica, e depois incorporada à branch intermediária de refatoração. Com o objetivo que garantir que atualizações rotineiras da branch develop viessem a ser incorporadas à branch intermediária, adotou-se a prática da realização de rebase frequente entre ambas, mantendo, assim, a sincronicidade das branches mencionadas. Ao final do projeto, será possível realizar o merge da branch intermediária com a develop, e, posteriormente, com a master, para disponibilização em novo release do PJe.

### Sprints

Foram executadas 9 sprints para elaboração do MVP do novo módulo de autos digitais, de 2 semanas cada, entre 12/06 e 13/10/2023. As duas primeiras sprints focaram no levantamento inicial de requisitos e na especificação das histórias de usuário, bem como na arquitetura a ser utilizada. Na sequência, iniciou-se o trabalho de reescrita do código.

Os relatórios das sprints de desenvolvimento encontram-se disponíveis no Jira do CNJ.

### Entregas - Merge requests

Ao término de cada sprint de desenvolvimento, com a realização da cerimônia de *review*, houve a entrega de um incremento de software para o novo módulo. Para registro dessas entregas, foram abertos *merge requests* entre a branch intermediária de refatoração e a branch develop.

Segue a lista dos MRs abertos ao final de cada sprint:

- **Sprint 2**: [Backend](https://git.cnj.jus.br/pje/pje/-/merge_requests/13373) e [Frontend](https://git.cnj.jus.br/pje2/pje2-clientes/pje2-web/-/merge_requests/411)
- **Sprint 3**: [Backend](https://git.cnj.jus.br/pje/pje/-/merge_requests/13386) e [Frontend](https://git.cnj.jus.br/pje2/pje2-clientes/pje2-web/-/merge_requests/412)
- **Sprint 4**: [Backend](https://git.cnj.jus.br/pje/pje/-/merge_requests/13412) e [Frontend](https://git.cnj.jus.br/pje2/pje2-clientes/pje2-web/-/merge_requests/416)
- **Sprint 5**: [Backend](https://git.cnj.jus.br/pje/pje/-/merge_requests/13412) e [Frontend](https://git.cnj.jus.br/pje2/pje2-clientes/pje2-web/-/merge_requests/416)
- **Sprint 6**: [Backend](https://git.cnj.jus.br/pje/pje/-/merge_requests/13482) e [Frontend](https://git.cnj.jus.br/pje2/pje2-clientes/pje2-web/-/merge_requests/434)
- **Sprint 7**: [Backend](https://git.cnj.jus.br/pje/pje/-/merge_requests/13538) e [Frontend](https://git.cnj.jus.br/pje2/pje2-clientes/pje2-web/-/merge_requests/444)
- **Sprint 8**: [Backend](https://git.cnj.jus.br/pje/pje/-/merge_requests/13581) e [Frontend](https://git.cnj.jus.br/pje2/pje2-clientes/pje2-web/-/merge_requests/454)
- **Sprint 9**: [Backend](https://git.cnj.jus.br/pje/pje/-/merge_requests/13635) e [Frontend](https://git.cnj.jus.br/pje2/pje2-clientes/pje2-web/-/merge_requests/482)

## Homologação

Para garantir que o novo módulo atenda aos requisitos técnicos e negociais especificados, foi elaborada uma estratégia de testes para o projeto. O documento contempla a visão geral dos testes que deverão ser realizados, seus tipos, níveis, técnicas e ferramentas utilizadas.

### Testes unitários

Dentro do projeto do frontend, buscou-se estabelecer uma cobertura de testes unitários de 100% para os componentes e serviços desenvolvidos. Para isso, primeiramente foram removidas as bibliotecas nativas do projeto (Jasmine/Karma), que apresentavam erro em sua execução.

Foi então utilizada a ferramenta [Jest](https://jestjs.io/), tendo em vista que esta não necessita de um browser vinculado para executar os testes, diminuindo o consumo de memória na execução do projeto. É possível executar os testes por meio do comando `npm run test`.

### Testes funcionais e de usabilidade

Foram realizados testes funcionais e de usabilidade do novo módulo, a partir de um ambiente específico disponibilizado para tal.

Os cenários de teste foram mapeados a partir das histórias de usuário, e estão disponíveis no Jira dentro de sub-tarefas de cada issue principal.

### Testes automatizados

Os testes automatizados foram realizados utilizando a ferramenta Postman, de modo a garantir a integridade das APIs REST desenvolvidas. As coleções utilizadas estão disponíveis no [repositório pje-local-dev do Gitlab](https://git.cnj.jus.br/pje/pje-local-dev/pje-local-dev/-/tree/main/api-tests).

### Testes de performance

Foram executados testes de performance para averiguar o desempenho do novo módulo em comparação à implementação anterior. Os testes mostraram diminuição significativa no tempo de respostas das consultas, tornando a navegação mais dinâmica tendo um ganho muito expressivo. Os resultados estão registrados na issue [PJEII-27160](https://www.cnj.jus.br/jira/browse/PJEII-27160) no Jira.

Como exemplo, em um dos cenários executados foi obtido o tempo de carregamento de apenas 3 segundos para processos com mais de 10 mil documentos, enquanto para processos menores o ganho foi mais expressivo, tendo a abertura total levado em torno de 0,20 segundos. Os testes estão registrados no Jira e foram apresentados à mentoria do CNJ.

## Como utilizar e homologar o novo módulo?

Para homologar o novo módulo de autos digitais, é necessário apontar o backend e o frontend do PJe para as imagens das branches de refatoração utilizadas:

Após realizado o apontamento e configurado o ambiente para testes, será possível acessar o novo módulo por meio da página de pesquisa de processos do PJe, por meio de ícone adicionado à página de pesquisa de processos:

![Botão acesso autos digitais](https://docs.pje.jus.br/assets/images/pje-autos-digitais-botao-acesso-fe3cf5a05f7caed4974ade98860d0529.png)

Perceba que a nova aba direcionará para o caminho do novo módulo:

`/pje/ng2/dev.seam#/autos-digitais/{idProcesso}`

A implementação antiga ainda pode ser acessada normalmente, clicando no número do processo, e direcionará para o caminho tradicional:

`/pje/Processo/ConsultaProcesso/Detalhe/listAutosDigitais.seam?idProcesso={idProcesso}`

O apontamento de correções e melhorias necessárias pode ser feito por meio do sistema Jira, relacionando às [issues das histórias](https://docs.pje.jus.br/servicos-negociais/servico-autos-digitais#especifica%C3%A7%C3%A3o-negocial) implementadas, ou como sugestões nos [MRs abertos dentro do Gitlab](https://docs.pje.jus.br/servicos-negociais/servico-autos-digitais#entregas---merge-requests).