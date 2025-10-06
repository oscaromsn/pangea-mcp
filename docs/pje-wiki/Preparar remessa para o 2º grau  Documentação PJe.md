---
title: "Preparar remessa para o 2º grau | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20e%20subfluxos%20principais/Preparar%20remessa%20para%20o%202%C2%BA%20grau"
author:
published:
created: 2025-09-30
description: "Pré-requisitos para funcionamento"
tags:
  - "clippings"
---
# Preparar remessa para o 2º grau | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20e%20subfluxos%20principais/Preparar%20remessa%20para%20o%202%C2%BA%20grau


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20e%20subfluxos%20principais/#__docusaurus_skipToContent_fallback)

## Preparar remessa para o 2º grau

## Pré-requisitos para funcionamento

1. A solução utiliza os serviços definidos pelo modelo [MNI](https://www.cnj.jus.br/tecnologia-da-informacao-e-comunicacao/comite-nacional-de-gestao-de-tecnologia-da-informacao-e-comunicacao-do-poder-judiciario/modelo-nacional-de-interoperabilidade/), logo se faz necessário que no diretório `lib/endorsed` do servidor de aplicação tenha a seguinte biblioteca: **jbossws-native-saaj.jar**.
2. É importante certificar se a configuração que diz respeito ao correto funcionamento dos *webservices* está de acordo com as instruções publicadas em Instalação e configuração do servidor de aplicação.
3. Certifique se o parâmetro **IGNORA\_FALHA\_DE\_EXECUCAO\_DO\_QUARTZ** está cadastrado nas aplicações de 1º e 2º graus.
4. É necessário que os **tipos de documentos** existentes na aplicação de 1º grau estejam cadastrados na aplicação de 2º grau. **Exige-se que o código e o nome do tipo de documento sejam os mesmos em ambas aplicações.**
5. As tabelas de **"CEPs"** das aplicações de 1º e 2º graus devem estar sincronizadas, ou seja, devem ter os mesmos valores.
6. As tabelas de **"Prioridade do processo"** das aplicações de 1º e 2º graus devem estar sincronizadas, ou seja, devem ter os mesmos valores. Inclusive, os **identificadores** devem ser os mesmos.
7. Para remeter processos do 1º para o 2º grau ou baixar processos do 2º para o 1º, esses processos devem atender os requisitos:
	1. Inexistência de prazos em aberto, ou seja, é necessário que todos os expedientes estejam fechados (esse requisito também foi registrado na regra RN494).
	2. Inexistência de documentos não assinados conforme rege a regra RN495.
8. Somente usuários logados com **certificado digital** poderão remeter processos do 1º grau para o 2º grau ou baixar processos do 2º grau para o 1º grau. Caso o usuário esteja logado no sistema sem certificado digital, este usuário poderá consultar a remessa, porém o **botão** da janela responsável por remeter processos do 1º grau para o 2º grau ou o **botão** da janela responsável por baixar processos do 2º grau para o 1º grau **não estarão visíveis**.
9. Se o parâmetro do sistema denominado **"pje:remessa:bloquearProcessoRemetido"** estiver com valor **"true"**, a regra RN549 será aplicada aos processos remetidos para o 2º grau. Essa necessidade foi implementada a pedido da demanda **PJEII-17922**.
10. Seguir as etapas de configuração.

**Nota:** caso o tribunal/conselho queira manifestar-se a respeito dos pré-requisitos aqui descritos, recomendamos a abertura de issue do tipo **Melhoria**.

## Limitações

1. Regra RN548.
2. As movimentações processuais não são migradas. Uma demanda foi registrada em PJEII-16467.
3. Se tiver alguma parte (polo ativo ou passivo) no processo que seja sigilosa, essa informação ainda não é migrada para o processo na instância de 2º grau. A migração dessa informação será tratada na demanda PJEII-18399.
4. Limitações que exemplificaremos por meio das situações abaixo:
	- Um processo protocolado no 1º grau é remetido para o 2º grau e, na tramitação no 2º grau, esse processo porventura sofre uma retificação/alteração em relação à alguma de suas características tais como: segredo de justiça/sigilo, justiça gratuita, pedido de liminar/antecipação de tutela, dependência, prioridade processual. Caso esse processo seja retornado para instância de origem (1º grau), essa retificação/alteração não é refletida no processo originário no 1º grau.
	- Um processo protocolado no 1º grau é remetido para o 2º grau e, na tramitação no 2º grau, esse processo porventura sofre uma retificação/alteração em relação aos seus participantes, podendo ser adicionada ou removida uma ou mais partes dos polos/outros participantes e, ainda, uma ou mais partes podendo ser sigilosas. Caso esse processo seja retornado para instância de origem (1º grau), essa retificação/alteração não é refletida no processo originário no 1º grau.
	- Um processo protocolado no 1º grau é remetido para o 2º grau e, na tramitação no 2º grau, nesse processo ocorre porventura a juntada de novos documentos com atributo de "sigilo". Caso esse processo seja retornado para instância de origem (1º grau), os novos documentos são refletidos no processo originário no 1º grau, porém sem o atributo de "sigilo".
5. Na especificação do MNI 2.2.2 (e versões inferiores), define o tema "Assistência Judiciária" no nível das partes do processo e não no nível do processo como é permitido na aplicação PJe por meio do campo "Justiça gratuita?". Com isso foi feita a seguinte codificação nas operações do MNI: quando o processo tiver justiça gratuita (campo "Justiça gratuita?" estiver marcado), o campo "assistenciaJudiciaria" de cada parte do polo ativo receberá o valor "true".

**Nota:** caso o tribunal/conselho queira manifestar-se a respeito das limitações aqui citadas, recomendamos a abertura de issue do tipo **Melhoria**.

## Etapas da configuração

1. O administrador do sistema deverá acessar **Configuração → Sistema → Parâmetro** e verificar a existência dos parâmetros para remessa de processos definidos em **Parâmetros - Remessa de processos ao 2º grau**. Caso não existam ou estejam diferentes, fazer as devidas modificações desses parâmetros.
	Outros parâmetros também devem ser configurados tanto na aplicação de 1º grau quanto na de 2º grau:
	- O parâmetro **"codMovimentoRemessa"** deve ter o valor **123**; também pode ser consultado.
	- O parâmetro **"codMovimentoRecebimento"** deve ter o valor **132**; também pode ser consultado.
2. O administrador do sistema deverá acessar **Configuração → Tabelas Judiciais → Classe Judicial → Classe Judicial** no ambiente de 2º grau e configurar as classes judiciais que serão caracterizadas como as classes recursais do 2º grau. Essa configuração é necessária porque o sistema buscará essas classes judiciais e as disponibilizará para a tarefa responsável pela remessa para o 2º grau na instância (neste caso, no 1º grau) onde está sendo preparada a remessa em questão; essas classes devem ter as seguintes características:
	- Deve ser "Recursal/interna?".
	- Deve ter um fluxo associado.
	Após a configuração de cada classe judicial, deve-se atentar que as classes devem estar em alguma competência e as competências recursais devem estar associadas a algum órgão julgador.
	**Nota:** é importante verificar também se os tipos de parte das classes judiciais do 2º grau caracterizadas como classes recursais contemplam os tipos de parte das classes do 1º grau. Caso contrário, o tipo de parte não compatível aparecerá como "Não Validado" nos detalhes do processo remetido para o 2º grau.
3. O administrador do sistema deverá verificar se o serviço de sincronismo de documentos está ativo tanto na aplicação de 1º grau quanto na de 2º grau, acessando o menu **Configuração → Ambiente → Jobs** da aplicação e verificar a existência do job **"consolidadorDocumentosService.execute()"** com a indicação da coluna "Valid Job" igual a **true**. Esse serviço de sincronismo é necessário para efetuar a transferência da parte binária dos documentos dos processos judiciais remetidos. Somente após a execução do job **consolidadorDocumentosService.execute()** será possível visualizar os documentos remetidos à instância superior, neste caso de 2º Grau.
4. O administrador do sistema deverá acessar **Configuração → Controle de Acesso → Funcionalidade** no ambiente de 1º grau para certificar se os seguintes recursos abaixo estão cadastrados, caso contrário, deverão ser cadastrados:
	- Nome **"Update Retificacao Autuacao Dados Iniciais"** com identificador **"/updateRetificacaoAutuacao/abaDadosIniciais"**.
	- Nome **"Update Retificacao Autuacao Assunto"** com identificador **"/updateRetificacaoAutuacao/abaAssunto"**.
	Após ter configurado os recursos, o administrador do sistema deverá acessar **Configuração → Controle de Acesso → Papeis** no ambiente de 1º grau e configurar os papeis que deverão receber os recursos descritos neste tópico.

## Configuração do fluxo no ambiente de 1º grau (remessa)

1. O administrador do sistema deverá acessar **Configuração → Sistema → Fluxo** no ambiente de 1º grau para criação e configuração do subfluxo responsável pela remessa para o 2º grau.
	A seguir apresentamos uma versão gráfica do fluxo (denominado **REM2G**) e, em seguida, uma versão do arquivo **REM2G.xml** contendo a definição desse subfluxo.
	Após a versão XML, apresentamos a descrição complementar da configuração do subfluxo para verificação.
	![Fluxo](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20e%20subfluxos%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)
```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<process-definition name="Remessa para 2o Grau">
   <description></description>
   <!-- SWIMLANES -->
   <swimlane name="Conhecimento">
   </swimlane>
   <swimlane name="Nó de Desvio - Remessa para 2o Grau">
   </swimlane>
   <swimlane name="solicitante">
   </swimlane>
   <!-- START-STATE -->
   <start-state name="Início">
    <task name="Tarefa inicial" swimlane="solicitante"/>
    <transition to="Remeter ao 2o Grau" name="Remeter ao 2o Grau"/>
   </start-state>
   <!-- NODES -->
   <task-node end-tasks="true" name="Remeter ao 2o Grau">
    <task name="Remeter ao 2o Grau" swimlane="Conhecimento">
     <controller>
      <variable name="Intercomunicacao_RetificacaoAutuacao_updateRetificacaoAutuacao" mapped-name="frame:Intercomunicacao_RetificacaoAutuacao_updateRetificacaoAutuacao" access="read,write"/>
     </controller>
    </task>
    <transition to="Nó de Desvio - Remessa para 2o Grau" name="Nó de Desvio - Remessa para 2o Grau">
     <condition expression="#{true}"/>
    </transition>
    <transition to="Aguardando apreciação pela instância superior" name="Aguardando apreciação pela instância superior">
     <condition expression="#{true}"/>
    </transition>
    <event type="task-create">
     <action name="upd" expression="#{taskInstanceUtil.setFrameDefaultTransition('Aguardando apreciação pela instância superior')}"/>
    </event>
    <event type="task-start">
      <action name="upd" expression="#{taskInstanceUtil.setVariable('comboMotivoRemessa','18;37,38,39,40,90')}"/>
    </event>
   </task-node>
   <task-node end-tasks="true" name="Aguardando apreciação pela instância superior">
    <task name="Aguardando apreciação pela instância superior" swimlane="Conhecimento">
     <controller>
      <variable name="Processo_ConsultaProcesso_Detalhe_detalheProcessoVisualizacao" mapped-name="page:Processo_ConsultaProcesso_Detalhe_detalheProcessoVisualizacao" access="read,write"/>
     </controller>
    </task>
    <transition to="Recebimento de instância superior" name="Recebimento de instância superior"/>
    <transition to="Nó de Desvio - Remessa para 2o Grau" name="Nó de Desvio - Remessa para 2o Grau">
     <condition expression="#{true}"/>
    </transition>
    <event type="task-create">
     <action name="upd" expression="#{taskInstanceUtil.setFrameDefaultTransition('Recebimento de instância superior')}"/>
    </event>
   </task-node>
   <task-node end-tasks="true" name="Recebimento de instância superior">
    <task name="Recebimento de instância superior" swimlane="Conhecimento">
     <controller>
      <variable name="Processo_ConsultaProcesso_Detalhe_detalheProcessoVisualizacao" mapped-name="page:Processo_ConsultaProcesso_Detalhe_detalheProcessoVisualizacao" access="read,write"/>
     </controller>
    </task>
    <transition to="Término" name="Término"/>
    <transition to="Nó de Desvio - Remessa para 2o Grau" name="Nó de Desvio - Remessa para 2o Grau">
     <condition expression="#{true}"/>
    </transition>
   </task-node>
   <end-state name="Término"/>
   <task-node end-tasks="true" name="Nó de Desvio - Remessa para 2o Grau">
    <task name="Nó de Desvio - Remessa para 2o Grau" swimlane="Nó de Desvio - Remessa para 2o Grau"/>
    <transition to="Término" name="Término"/>
    <transition to="Remeter ao 2o Grau" name="Remeter ao 2o Grau"/>
    <transition to="Aguardando apreciação pela instância superior" name="Aguardando apreciação pela instância superior"/>
    <transition to="Recebimento de instância superior" name="Recebimento de instância superior"/>
   </task-node>
   <!-- PROCESS-EVENTS -->
   <event type="node-enter">
    <script>
     br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)
    </script>
   </event>
   <event type="superstate-leave">
    <script>
     br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)
    </script>
   </event>
   <event type="subprocess-end">
    <script>
     br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)
    </script>
   </event>
   <event type="node-leave">
    <script>
     br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)
    </script>
   </event>
   <event type="before-signal">
    <script>
     br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)
    </script>
   </event>
   <event type="superstate-enter">
    <script>
     br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)
    </script>
   </event>
   <event type="process-start">
    <script>
     br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)
    </script>
   </event>
   <event type="transition">
    <script>
     br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)
    </script>
   </event>
   <event type="process-end">
    <script>
     br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)
    </script>
   </event>
   <event type="task-end">
    <script>
     br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)
    </script>
   </event>
   <event type="task-start">
    <script>
     br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)
    </script>
   </event>
   <event type="subprocess-created">
    <script>
     br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)
    </script>
   </event>
   <event type="after-signal">
    <script>
     br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)
    </script>
   </event>
   <event type="task-assign">
    <script>
     br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)
    </script>
   </event>
   <event type="task-create">
    <script>
     br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)
    </script>
   </event>
   <event type="timer">
    <script>
     br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)
    </script>
   </event>
   <!-- ACTIONS -->
</process-definition>
```
1. Adicionar a aba "Formulário".
2. No campo "Código do fluxo" informar "REM2G" (este código é uma sugestão, podendo o administrador do sistema informar outro).
3. No campo "Fluxo" informar "Remessa para 2º Grau" (este texto é uma sugestão, podendo o administrador do sistema informar outro).
4. O campo "Prazo (dias)" pode deixar em branco.
5. Marcar o campo "Publicado".
6. No campo "Publicado em" informar a data de publicação do subfluxo.
7. O campo "Publicado até" pode deixar em branco.
8. No campo "Ativo" selecionar "Ativo".
9. Clicar no botão "Gravar".
10. Clicar no botão "Definição".
11. Na nova página apresentada, clique na aba "XML". Em paralelo, abra em modo de edição o arquivo "REM2G.xml" em algum editor de texto puro, copie o seu conteúdo XML e cole na tela de edição aberta na aba "XML". Em seguida, acione o botão "Gravar".
12. Acionar o botão "Publicar".
13. Alterar as raias de permissões do subfluxo "Remessa para 2º Grau" conforme for adequado à realidade do tribunal.
14. Ao criar o subfluxo "Remessa para 2º Grau", via publicação do arquivo XML, os nomes dos labels das variáveis dos nós de tarefa devem ser corrigidos. Para realizar essa correção siga os passos abaixo:

14.1. Acessar o menu Configuração → Sistema → Fluxo. 14.2. O sistema apresenta a tela na aba "Pesquisa" contendo fluxos cadastrados. 14.3. Pesquisar pelo fluxo de nome "Remessa para 2º Grau" que tenha o código "REM2G". 14.4. Acionar o botão "Selecionar" do fluxo pesquisado para editá-lo. 14.5. Na tela apresentada, clique no botão "Definição". 14.6. Na nova página apresentada, clique na aba "Nós" para iniciar as correções dos labels das variáveis. 14.7. O sistema apresentará a tela para edição dos nós cadastrados. 14.8. Clicar no nome do nó de tarefa "Remeter ao 2º Grau". 14.9. No agrupador de edição de nó, localize a coluna "Label" e altere seu valor para: Remeter ao 2º Grau.

Para configuração do nó de tarefa responsável por remeter processo ao 2º Grau, caso não tenha feito importação do fluxo via arquivo XML:

- Adicionar, obrigatoriamente, a variável "Intercomunicacao\_RetificacaoAutuacao\_updateRetificacaoAutuacao" com Label sugerido "Remeter ao 2º Grau" e esta variável deve ser de "Escrita" e do tipo "Frame". Esse novo nó deve ser atribuído a alguma raia a critério do usuário.

Para configuração do registro automático do movimento de remessa com o respectivo complemento:

- Criar a seguinte expressão no evento "Sair do nó" do nó de tarefa "Remeter ao 2º Grau":
```java
#{preencherMovimento.deCodigo(123).comComplementoDeCodigo(7).doTipoLivre().preencherComTexto('<TEXTO DESEJADO>').comComplementoDeCodigo(18).doTipoDominio().preencherComElementoDeCodigo(motivoRemessa.codigoGlossario).lancarMovimento()}
```

Em `<TEXTO DESEJADO>` na expressão anterior, o administrador pode digitar o texto desejado, por exemplo, poderia ser 'Turma Recursal'.

- Quando o evento "Sair do nó" for executado, o sistema registrará o movimento "Remetidos os Autos `(#{motivo_da_remessa})` para `#{destino}"`.
- Esse movimento aparecerá na lista de movimentos dos detalhes do processo no 1º Grau.

Para configuração dos motivos da remessa para o 2º grau:

- Ao realizar a tarefa responsável pela remessa do processo para o 2º grau é apresentado um campo de seleção denominado "Motivo da remessa".
- O conteúdo desse campo é definido conforme a configuração do método "taskInstanceUtil.setVariable('comboMotivoRemessa','A;X,Y,Z')" que deverá ser configurado no nó de tarefa "Remessa para 2º Grau" da seguinte forma:
- Edite o nó de tarefa "Remessa para 2º Grau" e adicione o evento "Iniciar tarefa" e em "Ação 1" digite a expressão "taskInstanceUtil.setVariable('comboMotivoRemessa','A;X,Y,Z')".
- Leia assim: 'A' será sempre o código do domínio de complemento motivo\_da\_remessa e X,Y,Z... são os elementos desse domínio. Os códigos dos Motivos de Remessa estão disponíveis em Configuração → Tabelas judiciais → Movimentações → Complementos → Elementos de domínio.
- A expressão padrão no evento "Iniciar tarefa" é `#{taskInstanceUtil.setVariable('comboMotivoRemessa','18;37,38,39,40,90')}`

Para configuração do nó de tarefa responsável por aguardar apreciação pela instância superior, caso não tenha feito importação do fluxo via arquivo XML:

- Um processo remetido com sucesso para instância superior será movimentado para tarefa responsável por aguardar apreciação pela instância superior com nome sugerido "Aguardando apreciação pela instância superior". O processo ficará nessa tarefa até o momento em que ocorrer a baixa dessa manifestação processual por parte da instância superior. O nó de tarefa "Aguardando apreciação pela instância superior" tem a seguinte configuração:
- Conter obrigatoriamente a variável "Processo\_ConsultaProcesso\_Detalhe\_detalheProcessoVisualizacao" com Label sugerido "Processo Completo" e esta variável deve ser de "Escrita" e do tipo "Página". Esse novo nó deve ser atribuído a alguma raia a critério do usuário.
- Conectar esse novo nó ao nó de tarefa "Remessa para 2º Grau" já criado orientando-se por meio do diagrama gráfico ilustrado anteriormente.
- Quando a baixa for realizada, o sistema movimentará automaticamente o processo judicial para o nó de tarefa seguinte, neste caso, o nó responsável pelo recebimento da baixa.

Para configuração do nó responsável pelo recebimento da baixa, caso não tenha feito importação do fluxo via arquivo XML:

- Um processo baixado da instância superior para instância de origem (neste caso, 1º grau) estará nesse nó de tarefa com nome sugerido "Recebimento de instância superior". O nó de tarefa "Recebimento de instância superior" tem a seguinte configuração:
- Conter obrigatoriamente a variável "Processo\_ConsultaProcesso\_Detalhe\_detalheProcessoVisualizacao" com Label sugerido "Processo Completo" e esta variável deve ser de "Escrita" e do tipo "Página". Esse novo nó deve ser atribuído a alguma raia a critério do usuário.
- Conectar esse novo nó ao nó de tarefa "Aguardando apreciação pela instância superior" já criado orientando-se por meio do diagrama gráfico ilustrado anteriormente.
- Clicar o botão "Gravar", depois o botão "Publicar" e, em seguida, feche a tela de edição do subfluxo "Remessa para 2º Grau".
1. Após a criação e configuração do subfluxo de remessa para o 2º Grau recomendamos associá-lo ao fluxo principal do PJe do 1º Grau conforme for mais adequado à realidade do tribunal.
2. Quando a remessa for entregue ao destinatário (neste caso, 2º Grau), o sistema lançará automaticamente o movimento "132-Recebidos os autos"; esse movimento aparecerá na lista de movimentos dos detalhes do processo entregue no 2º Grau.

## Configuração do fluxo no ambiente de 2º grau (baixa)

1. O administrador do sistema deverá acessar Configuração → Sistema → Fluxo no ambiente de 2º grau para criação e configuração do nó de tarefa relativo à baixa/devolução do processo para instância de 1º grau, conforme orientações:
	- Selecionar o fluxo mais adequado à realidade do tribunal para inserção da tarefa responsável pela baixa.
	- Diante da tela de edição do fluxo escolhido faça:
		- Acionar o botão "Definição", depois clicar na aba "Nós" e, em seguida, clicar no botão "+" da tabela de Nós.
		- Selecionar o "Tipo de nó" denominado "Tarefa".
		- No campo "Nome:" informar o valor sugerido Remeter ao 1º Grau.
		- Preencher os campos "Inserir após:" e "Na transição:" conforme necessidade do tribunal.
		- Clicar no botão "Inserir" e depois clicar no botão "Gravar".
		- Selecionar um valor desejado para o campo "Atribuir a:".
		- Cadastrar, obrigatoriamente, a variável Intercomunicacao\_retornoProcesso clicando no botão "+" na tabela de variáveis.
		- Preencher o campo "Variável" com o valor Intercomunicacao\_retornoProcesso.
		- No campo Label atribuir o valor Retorno.
		- Marcar a coluna "Escrita".
		- No campo "Tipo" selecionar o valor "Frame".

Para configuração dos motivos da baixa para instância inferior, 1º grau:

- Editar o novo nó criado, Remeter ao 1º Grau, e depois cadastrar o evento "Iniciar tarefa" clicando no botão "+" na tabela "Eventos".
- Na linha que surge, selecionar a opção "Iniciar tarefa" para cadastrar as ações do evento "Iniciar tarefa".
- Clicar no botão "+" da tabela "Ações" e, depois, clicar no nome da nova ação que surge na tela.
- Preencher o campo "Expressão:" com o valor `"taskInstanceUtil.setVariable('comboMotivoRemessa','A;X,Y,Z')}"`, onde 'A' será sempre o código do domínio de complemento motivo\_da\_remessa e X,Y,Z... são os elementos desse domínio.
- Os códigos estão disponíveis em Configuração → Tabelas judiciais → Movimentações → Complementos → Elementos de domínio.
- A expressão padrão no evento "Iniciar tarefa" é `#{taskInstanceUtil.setVariable('comboMotivoRemessa','18;37,38,39,40,90')}`

Opcionalmente, para configuração do registro automático do movimento com o respectivo complemento:

- Criar a seguinte expressão no evento "Sair do nó":
```java
#{preencherMovimento.deCodigo(123).comComplementoDeCodigo(7).doTipoLivre().preencherComTexto('<TEXTO DESEJADO>').comComplementoDeCodigo(18).doTipoDominio().preencherComElementoDeCodigo(motivoRemessa.codigoGlossario).lancarMovimento()}
```
- Em `<TEXTO DESEJADO>` na expressão anterior, o administrador pode digitar o texto desejado, por exemplo, poderia ser 'Baixa' ou 'Devolução de processo'.
- Esse movimento aparecerá na lista de movimentos dos detalhes do processo baixado no 2º Grau.
- Clicar no botão "Gravar" e depois clicar no botão "Publicar".
1. Após a criação desse nó de tarefa (Remeter ao 1º Grau), recomendamos configurar as respectivas transições de acordo com a realidade do tribunal.
	- Quando a remessa for entregue ao destinatário (neste caso, 1º Grau), o sistema lançará automaticamente o movimento "22-Baixa Definitiva"; esse movimento aparecerá na lista de movimentos dos detalhes do processo baixado no 2º Grau.