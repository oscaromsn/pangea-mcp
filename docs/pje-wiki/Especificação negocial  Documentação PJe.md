---
title: "Especificação negocial | Documentação PJe"
source: "https://docs.pje.jus.br/manuais-basicos/especificacao-negocial"
author:
published:
created: 2025-09-30
description: "Grupo negocial do PJe"
tags:
  - "clippings"
---
# Especificação negocial | Documentação PJe
Available at https://docs.pje.jus.br/manuais-basicos/especificacao-negocial


[Pular para o conteúdo principal](https://docs.pje.jus.br/manuais-basicos/#__docusaurus_skipToContent_fallback)

## Especificação negocial

## Grupo negocial do PJe

### Introdução

Este documento tem por objetivo auxiliar a atuação os integrantes do Grupo Negocial do PJe, criado por iniciativa do Comitê Executivo nacional e composto por magistrados e servidores indicados pelos Tribunais que compõem a Comunidade do PJe.

A criação do Grupo Negocial foi inspirada na formação, no ano de 2019, do Grupo Revisor de código, também formado por integrantes indicados pelos Tribunais, responsável por validar as implementações de melhorias e correções de erro no sistema PJe.

Assim como a Comunidade, por meio do Grupo Revisor, tornou-se responsável pelas mudanças no PJe, sem prejuízo de iniciativas do próprio do CNJ, o objetivo com a criação do Grupo Negocial é dar à Comunidade do PJe as condições para definir quais regras negociais devem ser incorporadas ao funcionamento do sistema, atribuição hoje exercida exclusivamente pelo CNJ.

Dito de outro modo, o objetivo é empoderar a Comunidade para que essa participe ativamente na definição das regras negociais a serem adotadas pelo PJe.

Obviamente, essas atribuições estarão sujeitas às regras estabelecidas na Resolução CNJ nº 185/2013, em especial às diretrizes emanadas do Comitê Gestor Nacional do PJe.

### O que é uma regra negocial?

Apesar da maioria dos integrantes do grupo, provavelmente, saber o que significa o termo “regra negocial”, às vezes é bom repetir o óbvio.

Em engenharia de software, regra negocial diz respeito às regras do negócio subjacente que será beneficiado pela informatização. No caso do PJe, “o negócio” é a tramitação de processos em meio eletrônico.

A título exemplificativo, ao se desenvolver um novo sistema de informática para gestão de pessoas de um Tribunal, pode surgir a dúvida de qual linguagem de programação deve o sistema ser escrito (Java, Python, etc). Essa é uma dúvida não negocial, pois é irrelevante para o comportamento do sistema.

Porém, no exemplo em tela, definir se o sistema deverá calcular automaticamente quantos dias de folga o servidor deverá gozar por dia de plantão cadastrado é uma questão de caráter negocial, pois diz respeito diretamente ao “negócio” que está sendo informatizado.

Assim, o objetivo primordial do Grupo Negocial é definir qual o comportamento que o PJe deve possuir, tendo em vista as normas jurídicas aplicáveis e as expectativas dos usuários, validando, assim, os pedidos de melhoria ou a criação de novas funcionalidades no sistema.

### A arquitetura do PJe

A partir da versão 2.1, o PJe adotou uma arquitetura voltada à microsserviços, a fim de que se possa remover da versão “monolítica”, que atualmente opera nos Tribunais, as funcionalidades não essenciais à tramitação processual eletrônica de feitos judiciais (que consiste no core do PJe).

O objetivo de longo prazo é enxugar a versão legada do PJe, que está instalada em cada Tribunal, tornando-o mais leve e fácil de manter, bem como migrar o PJe para tecnologias mais atuais e eficientes.

A versão do PJe que opera instalada em cada Tribunal é considerado um sistema legado (legacy system), tendo em vista sua longevidade, razão pela qual suas funcionalidades, que não digam respeito ao seu núcleo duro, serão gradativamente migradas para a nuvem.

Todavia, enquanto essa visão de futuro não se concretiza integralmente, melhorias pontuais no PJe legacy ainda precisam ser realizadas, sendo que será papel do Grupo Negocial validar negocialmente se as melhorias solicitadas devem ser implementadas, ou como devem ser implementadas.

Além disso, os novos serviços e módulos do PJe, a serem hospedados na nuvem, também precisarão ter suas regras negociais validadas pela comunidade, a fim de garantir que o seu comportamento esteja condizente com o caráter nacional do PJe. Nesse caso, o Grupo Negocial poderá ser chamado a atuar, como adiante será descrito.

### Ferramenta de acompanhamento de demandas (JIRA)

Todo novo pedido de melhoria no PJe legacy, e todo novo projeto de serviço ou módulo na nuvem, é formulado ao CNJ por meio da ferramenta Jira, no bojo da qual os pedidos são triados, homologados e acompanhados até sua efetiva implementação e integração na versão nacional do PJe, ou eventualmente arquivados por qualquer motivo.

A referida ferramenta é acessível por meio do endereço [https://cnj.jus.br/jira](https://cnj.jus.br/jira), e todos os membros do Grupo Negocial, bem como qualquer outra pessoa indicada pelo Tribunal, em particular suas equipes de desenvolvimento, podem ter acesso para formular pedidos, ou simplesmente acompanhá-los.

#### O que é uma issue?

A fim de familiarizar os integrantes do Grupo Negocial do “jargão” do Jira, é importante falar do conceito básico de *issue*.

Uma *issue* corresponde ao registro de uma demanda no Jira, efetuado por um tribunal ou seu representante, seja o pedido de uma nova funcionalidade, uma melhoria de tela, mudança de regra de negócio, defeitos ou mau funcionamento, podendo, inclusive, se resumir a uma simples dúvida ou consulta.

Uma vez aberta, uma *issue* pode ser tramitada para status subsequentes (de Aberta para Aguardando início do desenvolvimento, por exemplo), e nela ficam registrados comentários, arquivos e demais informações pertinentes à demanda.

#### Abrindo uma issue

Qualquer tribunal ou o próprio CNJ podem abrir *issues* no Jira. É necessário, para tanto, possuir um usuário cadastrado, seja individual, seja em nome do Tribunal.

O registro da *issue* precisa ser efetuada dentro do projeto PJEII ([https://www.cnj.jus.br/jira/projects/PJEII](https://www.cnj.jus.br/jira/projects/PJEII)), e seguir as orientações descritas no Anexo (Instruções para abertura de *issues* no Jira), também disponível em docs.pje.jus.br.

![Imagem de criação de nova issue](https://docs.pje.jus.br/assets/images/nova-issue-1fc7fc91df6bbcd6083654758bda15f5.png)

![Imagem de criação de nova issue 2](https://docs.pje.jus.br/assets/images/nova-issue-2-2f9ad06aa20c23829072118210d256c6.png)

O ideal é que o registro seja o mais detalhado possível, a fim de facilitar o entendimento da triagem, do Grupo Negocial, da equipe de desenvolvimento, enfim, de todos os envolvidos no projeto.

É importante ressaltar que, antes de se criar uma *issue*, o demandante deve buscar dentro da ferramenta se já não há registro semelhante (do erro ou da melhoria), uma vez que deve-se evitar a existência de *issues* repetidas para não atrasar o processamento das mesmas ou ainda o atendimento de solicitações conflitantes.

### Analisar negocialmente uma issue

O principal aspecto da análise negocial de uma issue, além da sua conformidade jurídica, é o aspecto da **necessidade**. Ou seja, a primeira pergunta a ser feita é: qual o problema se está buscando resolver?

Caso a issue não esteja descrita de modo a deixar clara a resposta a esse questionamento, é necessário pedir complementação por parte do Tribunal que fez a solicitação da demanda, por meio de comentário no Jira.

Estando clara a necessidade, o próximo passo é verificar se ela já não é atendida por outra funcionalidade do PJe. O PJe, como é cediço, é um sistema relativamente grande e cheio de detalhes, sendo obra coletiva do esforço de diversos Tribunais e do CNJ ao longo de mais de dez anos.

Assim, é plenamente possível que o criador da issue talvez não esteja ciente de alguma opção disponível no sistema que atenda sua necessidade, mas que outros integrantes do grupo negocial possuem conhecimento a respeito.

No mínimo, deve-se sempre cogitar da possibilidade de se utilizar o mecanismo de configuração de fluxo do BPM utilizado pelo PJe, que permite que muitas tarefas sejam automatizadas ou que a criação de alguns tipos de novas telas sejam feitas sem a necessidade de codificação (programação).

Não sendo possível utilizar-se o que já existe no PJe para atender à necessidade descrita na issue, devemos nos perguntar se a proposta de implementação sugerida atende os padrões visuais e de funcionamento das telas do PJe, bem como se o que se pretende implementar respeita o caráter nacional do PJe.

Nesse ponto, caso se trate de necessidade específica daquele ramo de Justiça, ou necessidade específica daquele Tribunal, é preciso analisar a melhor forma da proposta ser implementada sem prejuízo dos demais ramos e Tribunais.

Além disso, deve-se sempre buscar trazer as observações e discordâncias sobre as issues para discussão na ferramenta de troca de mensagens comunitária do CNJ (atualmente o Rocket.chat). **O objetivo do canal criado na referida ferramenta é exatamente permitir que os integrantes do grupo negocial “troquem figurinhas” no dia-a-dia, permitindo assim uma tomada de decisão mais bem informada e democrática**.

Em suma, propomos que seja seguido o seguinte “roteiro” de análise:

| Pergunta | Observação |
| --- | --- |
| Qual a necessidade? | Se não estiver bem explicada, pedir esclarecimentos no Jira |
| É possível atender com alguma funcionalidade já existente no PJe? | Ex: usando configuração de fluxo do BPM. Sempre que possível, deve-se evitar a codificação no legacy, e se imprescindível, deve ser a mínima possível |
| A proposta segue os padrões visuais e de funcionamento do PJe? | A ideia é que nenhuma mudança mude radicalmente a expectativa criada nos usuários, tendo em vista a usabilidade do restante do sistema |
| A proposta atende a realidade de todos os ramos da Justiça? | O PJe é uma ferramenta nacional e deve ser o mais genérico possível, a fim de atender o objetivo de um sistema único brasileiro de processo judicial eletrônico |
| Se for muito específico de um ramo da Justiça ou Tribunal, qual a melhor forma de implementar? | Ex: parametrização por ramo de justiça ou Tribunal |
| Existe alguma proposta alternativa mais interessante para atender a necessidade? | Não raro simples troca de ideias entre os integrantes de Tribunais diversos pode trazer à luz uma proposta de melhoria que atende de forma melhor a necessidade trazida pelo criador da issue |

### Fluxo de tratamento de demandas do PJe

Aberta a demanda pelo Tribunal ou pelo CNJ, ela passa por diversas fases.

A primeira é a triagem, onde o CNJ verifica se a demanda atende os requisitos mínimos de uma nova issue, conforme explicado na seção anterior.

Se a demanda diz respeito a um erro/defeito de funcionamento do sistema, ela é automaticamente atribuída para desenvolvimento pelo Tribunal solicitante.

Caso se trate de uma demanda de melhoria, que não diga respeito a questão estritamente técnica sem impacto de funcionalidade, ela é encaminhada para homologação negocial, momento é que entra em cena o Grupo Negocial.

Se o Grupo concordar com o pedido de melhoria, o desenvolvimento da demanda é atribuída, ordinariamente, ao Tribunal solicitante, mas nada impede que outro Tribunal assuma a codificação, a depender da vontade dos interessados.

Finalizada a implementação, a demanda segue para homologação técnica, ocasião em que o Grupo de Revisão passa a atuar, a fim de garantir a correção técnica do código escrito pelo Tribunal.

Neste momento, podem surgir novas dúvidas negociais (isso é muito comum), e o Grupo Negocial pode vir a ser chamado a dirimi-las.

Homologada tecnicamente a implementação, o que se dá quando ao menos três Tribunais integrantes do Grupo Revisor aprovam a codificação, a melhoria ou correção de defeito é automaticamente integrada à versão nacional do PJe.

O Grupo Negocial também pode vir a ser chamado a formar grupos temáticos para definir as regras negociais de novos serviços ou módulos, na fase de levantamento de requisitos.

Assim, o fluxo de demandas (issues) do PJe é a seguinte:

- *Nova issue de melhoria com impacto negocial → Triagem → Homologação negocial → Codificação → Homologação técnica → Integração à versão nacional;*
- *Nova issue de melhoria sem impacto negocial → Triagem → Codificação → Homologação técnica → Integração à versão nacional;*
- *Nova issue de defeito → Codificação → Homologação técnica → Integração à versão nacional.*

### Proposta de funcionamento do grupo negocial

a prática, como se dará o funcionamento do Grupo Negocial?

Foi elaborada um conjunto de sugestões, baseado no modelo atualmente já adotado pelo Grupo Revisor, mas a forma de atuação do Grupo Negocial poderá ser revista livremente pelos seus integrantes.

A sugestão é adotar o modelo de *sprints*, ou seja, definir previamente um período temporal, geralmente composto de 15 dias, onde o Grupo analisará as issues escolhidas para aquela *sprint* (o *backlog* da *sprint*).

Assim, feita a triagem pelo CNJ, as issues de melhoria que requeiram análise negocial são submetidas ao Grupo Negocial que, em data acertada para esse fim (geralmente um dia útil antes do início da *sprint*), escolhe quais acredita conseguirá dar conta no período da *sprint*. As issues não escolhidas ficam como pendentes para a *sprint* seguinte.

Ao analisar uma issue, os integrantes do Grupo podem pedir ao solicitante informações pelo Jira (nesse caso, a situação da issue deveria ser mudada de “Aberto” para “Aguardando informações”).

A fim de facilitar a comunicação diária, será utilizado um canal na ferramenta de comunicação do CNJ, assim como já ocorre com o Grupo Revisor.

Um ou mais membros do grupo negocial de cada tribunal terão acesso ao Jira, a pedido de cada Tribunal.

Validada negocialmente a issue, um representante do Tribunal registra sua aprovação na issue do Jira (chamado carinhosamente de “deixar um joinha”), sendo necessário, à semelhança de como funciona o Grupo Revisor, pelo menos três aceites para que uma issue seja considerada homologada.

Ao fim da *sprint*, as *issues* não homologadas ficam para a próxima *sprint* ou são consideradas rejeitadas, conforme orientação do próprio grupo.

Encerrado o período da *sprint*, o grupo coloca a compilação do resultado na ferramenta de comunicação do CNJ, informando o que foi aprovado, o que foi rejeitado, o que está aguardando informações e o que ficou para a próxima *sprint*.

O CNJ, de posse dessa compilação, movimenta as *issues* no Jira (movimenta para “Em desenvolvimento” se aprovada, recusa a demanda, se rejeitada, ou coloca “Aguardando informação”, se o Tribunal que pediu as informações já não o fez).

Dois dias úteis após o fim da *sprint*, começa uma nova, com a definição do *backlog*.

O interessado na *issue* rejeitada poderá pedir reabertura, com novos argumentos.

Se a *issue* ficar parada mais de 30 dias aguardando informações do solicitante feito pelo Grupo Negocial, ela será fechada por inatividade, sem prejuízo de ser reaberta no futuro.

Por fim, o Grupo Negocial pode ser acionado a qualquer momento por meio do canal na ferramenta de comunicação do CNJ para esclarecer dúvidas negociais do grupo revisor ou de qualquer desenvolvedor sobre *issue* em curso.

## Instruções para abertura de issues no Jira

### Informações iniciais

Este documento tem a finalidade de padronizar e orientar os usuários do PJe para abertura de issues no JIRA.

Para abrir a issue, deve ser indicado o “Tipo de pendência”:

**Bug em produção**: Erros encontrados no ambiente de produção;

**Defeito**: Erros encontrados, geralmente, no ambiente de homologação ou desenvolvimento;

**Nova funcionalidade**: Sugestão de uma funcionalidade que não existe no sistema;

**Melhoria**: Mudança negocial numa funcionalidade que já existe;

**Dúvida**: Questionamento sobre alguma funcionalidade ou configuração do sistema.

### Instruções para abertura da issue

Antes de abrir uma pendência no Jira, todo solicitante deve analisar, dentre as pendências já existentes, o tratamento prévio da pendência identificada, evitando a abertura de demandas duplicadas. Ao abrir uma pendência que tenha relação com alguma anterior já aberta, o solicitante deve mencioná-la na abertura, de forma que as soluções possam ser compatibilizadas no que for pertinente.

**Observação**: Issues com informações incompletas serão automaticamente devolvidas ao solicitante.

#### Bug em produção ou defeito

Deve ser seguido o seguinte padrão apresentado abaixo:

| Campo | Orientação | Obrigatório? |
| --- | --- | --- |
| **Resumo** | Seguir o seguinte padrão:   `[Sigla do tribunal]` – Resumo do assunto tratado      Exemplo:   **\[TJMG\] – Erro inesperado no painel do usuário advogado** | Sim |
| **Prioridade** | Indicar a prioridade, conforme gravidade do erro.      ![Imagem de classificação da prioridade](https://docs.pje.jus.br/assets/images/prioridade-jira-444cf636592f7b27bfc2a33230db1e80.png) | Sim |
| **Versão Afetada(s)** | Indicar a versão que o erro ocorre.      A informação é apresentada na tela de login do PJe, canto inferior direito: | Sim |
| **Responsável** | Delegar a demanda para `Assistência em Atendimento e Qualidade do PJe` | Sim |
| **Ambiente** | Informar o link da aplicação com acesso externo, se existir. E a instância (1º, 2º ou 3º grau).      Exemplo:   **Link:** vanadiod02.cnj.jus.br:8080/pje1g   **Instância:** 1º grau | Não |
| **Descrição** | Informar o caminho para acessar a página, o perfil do usuário que o erro ocorre, descrever detalhadamente como reproduzir o erro, e informar o nome (no caso da issue ser aberta com login padrão do tribunal) e telefone para contato do responsável pela issue, caso surja alguma dúvida.      Exemplo:   **Menu**: Painel > Painel do usuário   **Perfil**: Magistrado   **Descrição do erro**: Ao clicar em qualquer caixa do painel do usuário magistrado, o sistema apresenta “erro inesperado”. Verificar vídeo anexo.   **Login**: `<informar o usuário + senha que foi usado quando ocorreu o problema>`.   **Contato**: `<informar o nome do contato>` – `<informar o telefone de contato>`. | Sim |
| **Anexo** | Anexar o print da tela ou vídeo reproduzindo passo a passo a divergência. O vídeo deve ser gerado desde o login no sistema.   O nome do anexo deve conter o prefixo **\[XXXXX\_ERRO\]**, onde XXXXX significa o número da issue no Jira.      Exemplo: `[111111_ERRO]Nome_do_vídeo.mp4` | Sim |
| **Rótulos (Label)** | Informar a "tag" da versão em que ocorreu o erro. Por exemplo, pode estar sendo testada a versão 1.4.7, mas a tag da versão é a "h0". Utilizar sempre os nomes das tags no padrão que são criadas, ou seja, letras minúsculas. | Não |
| **Epic/Theme** | Informar o assunto ou tema a que se refere o erro. Por exemplo, o tema de um defeito pode ser "advogado". | Não |

#### Nova funcionalidade ou melhoria

| Campo | Orientação | Obrigatório? |
| --- | --- | --- |
| **Resumo** | Seguir o seguinte padrão:   `[Sigla do tribunal]` – Resumo do assunto tratado      Exemplo:   **\[TJMG\] – Erro inesperado no painel do usuário advogado** | Sim |
| **Prioridade** | Indicar a prioridade, conforme gravidade do erro.      ![Imagem de classificação da prioridade](https://docs.pje.jus.br/assets/images/prioridade-jira-444cf636592f7b27bfc2a33230db1e80.png) | Não |
| **Versão Afetada(s)** | Indicar a versão que o erro ocorre.      A informação é apresentada na tela de login do PJe, canto inferior direito: | Sim |
| **Responsável** | Delegar a demanda para `Assistência em Atendimento e Qualidade do PJe` | Sim |
| **Ambiente** | Informar o link da aplicação com acesso externo, se existir. E a instância (1º, 2º ou 3º grau).      Exemplo:   **Link:** vanadiod02.cnj.jus.br:8080/pje1g   **Instância:** 1º grau | Não |
| **Descrição**   ***(Item mais importante)*** | Informar o caminho para acessar a página, o perfil do usuário, a necessidade negocial, as regras de negócio, uma sugestão de implementação (opcional), e informar o nome (no caso da issue ser aberta com login padrão do tribunal) e telefone para contato do responsável pela issue, caso surja alguma dúvida. Enviar documentação que auxilie no desenvolvimento: protótipo, caso de uso e demais documentos que julgar necessário.      Exemplo:   **Menu**: Configuração > Pessoa > Magistrado   **Perfil**: Administrador   **Necessidade negocial:** Criar uma forma de permitir que quem prepare modelos de documentos possa incluir listas ou tabelas nos documentos indicando apenas listas de objetos como a fonte de informação.   **Regras de negócio**:   \- o configurador de modelos deve poder invocar componente que transformará uma lista repassada por parâmetro ao método em uma sequência de caracteres separados por vírgula ou uma tabela html contendo um campo por linha;   \- o configurador de modelos deve poder indicar no método de transformação as propriedades dos objetos da lista que serão exibidas   **Implementação sugerida (opcional):**: Criar o componente "formatador" na classe br.jus.cnj.pje.util.Formatador, com escopo de evento e que tenha o seguinte método:      public String lista(Collection list, char separador, boolean conectorFinal, String…propriedades): Retorna uma String contendo o resultado, para cada um dos objetos da lista dada, da recuperação das propriedades indicadas na lista, sendo a primeira incluída como informação principal e as demais incluídas como informações secundárias, dentro de parênteses, estas separadas por hífens. As informações de cada item da lista são separadas pelo separador dado seguida de espaço e, caso seja verdadeiro o parâmetro conectorFinal, incluindo a expressão " e " entre o penúltimo e o último item da lista.      Exemplo: listar(processos, ';', false, "numeroProcesso", "orgaoJulgador", "dataAutuacao") em que há três ProcessoTrf na lista processos deverá retornar "0000001-23.2012.2.00.0000 (1ª Vara Cível de Campina Grande - 01/01/2012); 0000002-23.2012.2.00.0000 (2ª Vara Criminal de João Pessoa - 03/01/2012);0000002-23.2012.2.00.0000 (Vara Única de São José da Lagoa Tapada - 15/08/2012)".   **Contato**: `<informar o nome do contato>` – `<informar o telefone de contato>`. | Sim |
| **Anexo** | Anexar o print da tela ou vídeo reproduzindo passo a passo a divergência. O vídeo deve ser gerado desde o login no sistema.   O nome do anexo deve conter o prefixo **\[XXXXX\_ERRO\]**, onde XXXXX significa o número da issue no Jira.      Exemplo: `[111111_ERRO]Nome_do_vídeo.mp4` | Não |

### Informações complementares

#### Ferramenta para gravação de vídeo

Utilizamos no CNJ a ferramenta [http://www.screencast-o-matic.com](http://www.screencast-o-matic.com/) para gravação dos vídeos.

Os vídeos devem ser gravados e anexados às issues com as seguintes configurações:

Save to video file

Video type: MP4

Rescale width: 800px

#### Dúvida no procedimento para abertura da issue

Em caso de dúvida durante a abertura das issues, entre em contato:

(61) 2326-5322 (61) 2326-5339 (61) 2326-5438 Email: [g-assistencia.qualidade.pje@cnj.jus.br](https://docs.pje.jus.br/manuais-basicos/)

### Checklist de triagem

- O problema já foi resolvido em uma outra Issue recente (versão superior a afetada)?
	- Triagem fecha a demanda informando a issue de resolução.
- Existe issue sobre o mesmo problema relatado?
	- Triagem efetua link entre as issues, ou fecha uma das issues, se for o caso.
- O campo versão afetada foi preenchido com a versão do tribunal?
	- Triagem solicita ao demandante a versão afetada.
- A descrição da issue é suficiente para direcionar seu atendimento?
	- Triagem solicita complemento de informações para atendimento da demanda.
		- Vídeos, logs, imagens e etc.
- O tipo da issue foi atribuído corretamente?
	- Triagem categoriza a Issue.
- A prioridade da issue foi atribuída corretamente?
	- Triagem define nova prioridade da issue.
- A alteração/correção solicitada pode afetar o comportamento padrão do sistema ou regra de negócio?
	- Triagem encaminha issue para Assistência de Requisitos e Capacitação. (Atualmente, função do Grupo Negocial)
	- Assistência de Requisitos e Capacitação complementa as informações e encaminha para triagem.
- Triagem encaminha a demanda para a equipe responsável pelo tratamento