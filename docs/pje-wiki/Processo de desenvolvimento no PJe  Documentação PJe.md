---
title: "Processo de desenvolvimento no PJe | Documentação PJe"
source: "https://docs.pje.jus.br/manuais-basicos/processo-desenvolvimento-pje"
author:
published:
created: 2025-09-30
description: "Imagem do processo de desenvolvimento do PJe"
tags:
  - "clippings"
---
# Processo de desenvolvimento no PJe | Documentação PJe
Available at https://docs.pje.jus.br/manuais-basicos/processo-desenvolvimento-pje


[Pular para o conteúdo principal](https://docs.pje.jus.br/manuais-basicos/#__docusaurus_skipToContent_fallback)

## Processo de desenvolvimento no PJe

![Imagem do processo de desenvolvimento do PJe](https://docs.pje.jus.br/assets/images/processo_desenvolvimento_pje-a221d51eb4e05287d44bf64af02f839e.png)

## Etapas

### (1) Criar Demanda

- A necessidade do Tribunal é transformada em demanda no sistema gerenciador de demandas ([Jira](https://www.cnj.jus.br/jira));
- Demandas podem ser criadas por qualquer pessoa participante dos times de desenvolvimento do PJe;
- Antes da criação deve-se fazer uma pesquisa preliminar no Jira em busca de demandas já relacionadas, demandas duplicadas ou até de informações de configuração para resolver a necessidade do tribunal.

### (2) Triar

- Etapa de responsabilidade da Equipe de Triagem do CNJ;
- Caso a demanda seja aceita, ela receberá o status **Aguardando Início da Implementação** e o usuário que a criou será associado ao campo **Responsável**. Do contrário, será devolvida ao demandante assumindo o status **Aguardando Informações**;

### (3) Atribuir

- O **Responsável** pela demanda deverá incluir no campo **Responsável pela Codificação** o usuário (Desenvolvedor) que irá assumir o desenvolvimento da demanda;

### (4) Desenvolver

- Tarefa realizada pelo Desenvolvedor da Fábrica de Desenvolvimento do Tribunal.
- Antes de iniciar a implementação o Desenvolvedor deve mudar o status da demanda de "Aguardando Início da Implementação" para "Em Progresso";
- O desenvolvimento deve seguir os padrões do projeto, de acordo com as informações disponíveis na wiki do projeto em [http://www.pje.jus.br/wiki/index.php/Desenvolvedor](http://www.pje.jus.br/wiki/index.php/Desenvolvedor);
- O desenvolvedor deve ficar atento à descrição da própria demanda, às regras de negócio do projeto e caso haja o planejamento dos cenários de teste incluídos na issue do jira;
- Ao final do processo de desenvolvimento, o desenvolvedor deverá:
	- Incluir evidência (preferencialmente um vídeo) exibindo o funcionamento da solução dada.
	- Abrir um Merge Request no [GitLab](https://git.cnj.jus.br/pje/pje) tendo como target branch o branch develop;

### (5) Revisar / Integrar

- Tarefa realizada pelo Grupo Revisor Técnico.
- Este grupo é formado por desenvolvedores de diversos tribunais;
- Nesta etapa devem ser feitos testes gerais da solução e será cobrada a evidência e a explicação técnica da solução dada pelo desenvolvedor;
- Mais detalhes deste processo e as boas práticas que são avaliadas encontram-se [aqui](http://www.pje.jus.br/wiki/index.php/Desenvolvedor#Revis%C3%A3o_de_C%C3%B3digo);
- Ao final desta etapa o revisor poderá solicitar ajustes ao desenvolvedor ou poderá aprovar a solução dada.
- A identificação da aprovação é feita por meio da inclusão de um "Label de Aprovação" correspondente ao tribunal que o Revisor representa. Exemplo: Caso um Revisor do CNJ aprove um Merge Request ele deverá incluir o label "Aprovado CNJ".

Aqui cabe uma observação: A atividade de integração do branch da demanda (source branch) ao branch develop (target branch) é realizada automaticamente pelo Bot Revisor. Essa integração tem algumas regras: Para demandas de defeito, basta uma aprovação. Demandas de melhoria, duas. E demandas de Nova Funcionalidade, três aprovações. Essas aprovações devem ser de diferentes tribunais. Após a integração, a demanda assumirá o status "Fechada" e terá a informação de quem a aprovou e qual será a versão do PJe que será lançada.

### (6) Homologar

- Tarefa realizada pelos Tribunais.
- Após o lançamento da versão *release* os Tribunais têm o prazo de 15 dias para homologar a versão;
- O processo de homologação consiste na validação da versão que será lançada;
- Finalizado o prazo e não havendo nenhuma manifestação por parte dos homologadores, a versão estará pronta para ser empacotada e distribuída.

### (7) Versionar

- Tarefa realizada pela Equipe Técnica do CNJ;
- O *branch* ***develop*** é integrado (*merged*) ao *branch* ***master*** (*stable*);
- É criada uma *Tag* da versão;
- É feito o comunicado do lançamento da nova versão no *Rocket.Chat* e no *Telegram*.

## Bot revisor do PJe

Neste momento, a figura do Bot Revisor (*web robot*) entrará em ação. Este usuário irá verificar alguns aspectos formais do *Merge Request* com o objetivo de validar a sua abertura:

### Critérios de validação

### SonarQube

Durante o processamento do CI/CD é executada uma análise estática do código pelo SonarQube. O escopo da análise compreende apenas o **código alterado** pelo Desenvolvedor. Ao final deste processo é inserido nos comentários do MR o resultado da análise.

A imagem abaixo mostra as configurações do *Quality Gate* para o PJe.

![Imagem do Quality Gate para o PJe](https://docs.pje.jus.br/assets/images/sonarqube_quality_gate-0f5c44c2a9cd6dbe46a200b7ec99e227.png)

Após o *Merge Request* ser fechado, a demanda assumirá o status de **MR Reprovado** e o campo **Responsável** será atribuído ao Desenvolvedor da demanda.

## Fluxo de lançamento de versões

Estamos utilizando o Gitflow Workflow que foi desenvolvido e foi publicado pela primeira vez por [Vincent Driessen](https://nvie.com/posts/a-successful-git-branching-model). O Gitflow Workflow define um modelo de branches desenvolvido para as releases de projetos, provendo um framework robusto para o gerenciamento de grandes projetos. Pode-se encontrar mais informações sobre essa abordagem [aqui](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04) e [aqui](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

![Imagem do fluxo do gitflow](https://docs.pje.jus.br/assets/images/gitflow-7c44416894d064af9c20c3bc56c643e5.png)

### Branchs principais

![Imagem do fluxo das branchs master e develop &gt;](https://docs.pje.jus.br/assets/images/main-branches-b5b6fa29eac6015ff777f588df7bf1fb.png#right)

O repositório central do CNJ armazena dois branches principais e perenes:

- master
- develop

Considera-se o *branch* **origin/master** o *branch* do qual o código da sua cabeça **HEAD** sempre refletirá um estado pronto para produção.

Considera-se o *branch* **origin/develop** o branch do qual o código da **HEAD** sempre refletirá um estado com as últimas alterações aprovadas para a próxima release. Pode-se chamá-lo de " *branch* de integração". A partir daqui derivam-se os branches candidatos à nova versão (release branches).

Quando o código integrado ao *branch* **develop** chegar a um ponto de estabilização e estiver pronto para ser lançado, todas as alterações deverão ser mergeadas diretamente no *branch* **master** e com isso deverá ser gerada uma nova tag com final.0, por exemplo: 2.1.3.0. Falaremos deste processo com detalhes mais a frente.

Toda vez que houver um novo merge no *branch* **master**, por definição, pode-se lançar uma nova versão de produção. E, em teoria, podemos criar gatilhos para lançar essa nova versão, disponibilizar o binário e comunicar aos servidores de produção dos tribunais sempre que isso acontecer, para que sejam atualizados automaticamente.

### Branchs de suporte

Auxiliando os *branchs* principais **master** e **develop**, nosso modelo de desenvolvimento utiliza outros tipos de *branchs* de suporte para permitir o desenvolvimento das demandas, a estabilização das releases e para auxiliar na rápida resolução de problemas em produção. Diferentemente dos *branchs* principais, os *branchs* de suporte não são perenes e devem ser removidos em algum momento.

Os principais tipos de branch que deverão ser utilizados são:

- *feature* branches
- *release* branches
- *hotfix* branches

Cada um desses *branches* possui um propósito e segue regras específicas, como qual deve ser seu *branch* originário e para quais *branchs* devem ser feitos seus merges.

#### Feature branches

##### Propósito

O feature branch é efetivamente o branch no qual será feito o desenvolvimento das issues, uma vez que ao desenvolvedor foi atribuída uma issue no Jira e este a colocou na situação "Em progresso", deverá criar o novo branch com a identificação da issue, exemplo: PJELEG-123, fazer o desenvolvimento e ao final submeter o merge ao branch develop. O branch será removido quando, eventualmente, seu código for integrado ao branch develop ou caso seu código seja descartado por algum motivo.

#### Regras do branch

- **Cria-se a partir de**: `_branch_ **develop**`
- **Submete-se o merge request ao**: `_branch_ **develop**`
- **Convenção de nome do *branch***: `<NÚMERO-DA-ISSUE><Texto_complementar_opcional>`, exemplo: `PJELEG-123` ou `PJELEG-123_meu-feature-branch`
- **Regras de revisão**: O grupo revisor dos tribunais deverá realizar a revisão do código submetido, seguindo o modelo estabelecido pelo próprio grupo revisor.

#### Release branches

##### Propósito

Ao final da sprint de revisão do grupo revisor, gera-se uma TAG no *branch* **develop** (essa TAG terá o nome: " `<NÚMERO-RELEASE-PRETENDIDA>-RC`, exemplo: `2.1.3.0-RC` ") e a partir dessa TAG o novo *release branch* (esse *branch* terá o nome: `release-<NÚMERO-RELEASE-PRETENDIDA>`, exemplo: `release-2.1.3.0`).

O *release branch* oferece suporte à preparação da nova release de produção. Este *branch* permite que se faça os últimos ajustes no código e pequenas correções de estabilização para que seja possível o lançamento da nova versão de produção. Fazendo essas atividades diretamente no release *branch* o *branch* **develop** fica liberado para receber a integração de outras features da nova sprint de revisão.

Quando é criado o novo release *branch* inicia-se uma nova sprint de estabilização da release. Recomenda-se que todos os tribunais tenham um ambiente com a cópia da base de produção e que seja atualizado automaticamente na criação e atualização desses release *branches*.

Problemas impeditivos identificados durante a estabilização da versão candidata deverão ser registrados em issue de tipo específico "Bugfix release". Importante frisar que somente devem ser considerados "Bugfix releases" os erros graves que impeçam o usuário de completar uma tarefa ou abrir uma tela ou, ainda, aqueles que causem grande dano à tramitação do processo, como erros no protocolo de processos ou no agendamento periódico de prazos, por exemplo. Outros tipos de problemas (menos danosos) deverão ser registrados no Jira com o tipo 'Defeito' e seguir o fluxo já estabelecido.

As demandas criadas durante a estabilização da versão como "Bugfix releases" deverão ser corrigidas preferencialmente pelo mesmo tribunal que as identificou. No entanto, caso o tribunal não tenha condições de faze-lo, o grupo revisor será o responsável. O MR será direcionado ao *branch* da release (`release-<NÚMERO-RELEASE-PRETENDIDA>`) e seguirá como prioridade para a revisão dos demais membros do grupo revisor.

Ao final da sprint de estabilização da release (com sugestão de 2 semanas), se não houver nenhum "Bugfix release", a release estará automaticamente homologada (por todos os tribunais que fazem parte do projeto PJe) e será lançada a nova versão. Nesse momento, o coordenador do grupo de nacional de revisão solictará ao CNJ que seja gerada a versão oficial. O CNJ, por sua vez, realizará o merge do release *branch* no *branch* **master** e automaticamente no *branch* **develop**, também será lançada a TAG oficial da versão no *branch* **master**, no exemplo: 2.1.3.0.

##### Regras do branch

- **Cria-se a partir de**: *branch* **develop**
- **Submete-se o merge request ao**: *branches* **master** e haverá um procedimento automático para replicá-lo ao *branch* **develop**
- **Convenção de nome do *branch***: `release-<NÚMERO-RELEASE-PRETENDIDA>`, exemplo: `release-2.1.3.0`
- **Regras de revisão**: Os tribunais deverão homologar a aplicação de forma geral e verificar se as funcionalidades principais estão estáveis o suficiente para que seja lançada a nova release. O grupo revisor dos tribunais deverá realizar a revisão das alterações de estabilização de forma prioritária.

#### Hotfix branches

![Imagem do fluxo das branches de hotfix](https://docs.pje.jus.br/assets/images/hotfix-branches-0f168bf30e0f17226d68b4c6c15cf488.png#left)

##### Propósito

Hotfix branches são parecidos com os release branches em termos de que são preparações para novas releases de produção, apesar de não serem planejados. Esses branches surgem da necessidade de se agir rapidamente frente a um estado não desejado da aplicação na versão de produção. Quando um problema crítico na versão de produção precisa ser resolvido imediatamente.

Durante a correção do problema crítico libera-se a equipe para continuar trabalhando na revisão/integração das features no branch develop, enquanto outra pessoa prepara uma rápida correção da versão de produção.

Os problemas graves encontrados em produção e que precisam ser corrigidos rapidamente deverão ser registrados no Jira com o tipo "Hotfix" e sua correção deverá ser submetida ao branch master para revisão do grupo revisor em prioridade máxima. Quando for integrada a correção deverá ser lançada uma nova release de Hotfix, cuja numeração variará sequencialmente o último número da última release, ex.: 2.1.3.1, 2.1.3.2, 2.1.3.3 …

O proprio tribunal que reportou o defeito crítico deverá preferencialmente codificar a correção; para os tribunais que não tenham desenvolvedores disponíveis, a equipe de revisão de código deverá tratar o problema com prioridade.

##### Regras do branch

- **Cria-se a partir de**: *branch* master
- Submete-se o merge request ao: *branches* **master** e um procedimento automático replicará aos *branches* **develop** e `release-<NÚMERO-RELEASE-PRETENDIDA>` em andamento
- Convenção de nome do *branch*: `<NÚMERO-ISSUE>`, exemplo: `PJELEG-4321`
- Regras de revisão: Os tribunais deverão homologar a aplicação de forma geral e verificar se as funcionalidades principais estão estáveis o suficiente para que seja lançada a nova release. O grupo revisor dos tribunais deverá realizar a revisão das alterações de estabilização de forma prioritária.