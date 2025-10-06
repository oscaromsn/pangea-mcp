---
title: "Preparar ato judicial | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Preparar%20ato%20judicial"
author:
published:
created: 2025-09-30
description: "Configuração dos nós"
tags:
  - "clippings"
---
# Preparar ato judicial | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Preparar%20ato%20judicial


## Preparar ato judicial

## Configuração dos nós

## Início

O nó inicial segue o padrão de todos os nós de início dos fluxos no PJe, contendo a transição para o primeiro nó de tarefa configurada com a opção "Ocultar" desmarcada. Através da opção "Atribuir a", deve-se vincular a tarefa a uma raia que contenha papéis e localizações os quais se deseja que tenham acesso à tarefa criada. A primeira tarefa nesse fluxo é a de minuta.

#### Transições que saem do nó

- **Minutar ato**, configurada com a opção "Ocultar" desmarcada.

#### Atribuir a

- Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes a assessoria do magistrado.

#### Eventos

- **Sair do nó** - deve conter as seguintes ações configuradas:
	- Ação contendo expressão que apague possíveis movimentos lançados temporariamente anteriormente.
	- Ação contendo expressão que apague possíveis agrupamentos lançados temporariamente anteriormente.

## Minutar ato

O primeiro nó de tarefa desse fluxo, denominado "Minutar ato", é representado por uma tela já preparada no sistema para esse fim. É a tarefa onde o servidor construirá a minuta do ato judicial para posterior assinatura.

Para configurar o "Minutar ato", deve-se criar um nó de tarefa vinculado ao fluxo que contenha a variável `minutar_ato_judicial` como sendo de "Escrita" e do tipo "Editor".

O nó de tarefa tem os eventos "Entrar no nó", "Sair do nó" e "Iniciar tarefa" vinculados. Cada evento tem ações vinculadas. A seguir as tarefas e ações do Minutar ato.

#### Atribuir a

- Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes a assessoria do magistrado.

#### Transições que saem do nó

- **Confirmar ato**: A transição de saída desse nó é a tarefa de confirmação, que permitirá a assinatura do ato judicial. Via de regra, a tarefa é executada pelo magistrado. Essa transição deve ser criada com a opção "Ocultar" desmarcada.

#### Variáveis

- `minutar_ato_judicial`, do tipo editor, de escrita.

#### Eventos

- **Entrar no nó**: O evento "Entrar no nó" do "Minutar ato" deve conter uma ação marcada como reexecutável que vincule os possíveis modelos de documento de minuta à tarefa de minutar. Essa vinculação se dá através de linguagem de expressão ou através do ícone "Assistente para expressão". A expressão deve utilizar o(s) id(s) do(s) modelo(s) de documento respectivo(s).
- **Criar tarefa**: Ação configurada com expressão como "Reexecutável" - Pode-se restringir os tipos de documentos passíveis de serem utilizados através de expressão pertinente. Os tipos listados serão os ativos cujos tipos foram passados como parâmetro na expressão. Caso não seja explicitado pela configuração de forma diferente, os tipos de documentos da lista seguem a regra RN388.
- **Sair do nó**: O evento "Sair do nó" do "Minutar ato" deve conter uma ação que configure uma variável para recuperação futura no fluxo do documento produzido. A variável é a `minutaEmElaboracao`. Essa vinculação se dá através de linguagem de expressão.
- **Iniciar tarefa**: A configuração dessa ação será feita automaticamente com a configuração do evento de tarefa "Sair tarefa", descrita a seguir. Ao final da configuração do referido evento, a ação terá como conteúdo a expressão que contém o lançador de movimentações marcado como "true", ou seja, permitindo a seleção de movimento que será confirmado em outro momento do fluxo.

#### Eventos de tarefa

- **Sair tarefa** (Configuração do lançador de movimentações):
	- Deve ser configurado o evento de tarefa "Sair tarefa" e na opção "Agrupamento eventos" deve ser configurado um ou mais agrupamentos de movimentações, que disponibilizarão para o usuário da tarefa selecionar as movimentações relacionadas que estarão vinculadas à execução da tarefa.
	- O campo "Condição para lançamento temporário" da tela de "Agrupamento eventos", deve ser inserida a expressão "#", sinalizando o lançamento temporário.

## Confirmar ato

Nessa tarefa, o magistrado revisará e assinará a minuta construída pelo assessor em tarefa anterior. Ao criar o nó de tarefa Confirmar ato, deve-se adicionar a variável `Processo_Fluxo_revisarMinuta`, que deve estar marcada como “Escrita” e ser do tipo “Frame”.

#### Atribuir a

- Vincular a tarefa à raia que contemple o papel do magistrado.

#### Transições que saem do nó

- **Confirmar movimentação**, marcada como oculta.
- **Retornar para minuta**.

#### Variáveis

- `Processo_Fluxo_revisarMinuta`, do tipo frame, de escrita.

#### Eventos

- **Entrar no nó**:
	- Deve conter uma ação marcada como reexecutável contemplando expressão que vincule os tipos de documentos relacionados à revisão da minuta.
	- Deve conter uma ação marcada como reexecutável contemplando expressão que vincule os modelos de documentos relacionados à revisão da minuta.
- **Criar tarefa**: Deve conter a expressão que marca como transição de saída padrão o nó de destino “Confirmar movimentação”.

## Confirmar movimentação

O nó de tarefa “Confirmar movimentação” é destinado à atividade de verificação do ato, de forma a permitir que o servidor atualize ou confirme a movimentação selecionada na tarefa de minuta de acordo com o ato assinado pelo magistrado.

#### Atribuir a

- Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes a Escrivão/Diretor de secretaria/Secretário jurídico.

#### Transições que saem do nó

- **Finalizar ato**, marcada como oculta.

#### Variáveis

- `confirmarmovimentacao`, do tipo Homologador de movimentos temporários, de escrita. Esse tipo de variável só faz sentido ser utilizado quando houve lançamento de movimento temporário anteriormente, como é o caso desse fluxo, na tarefa Minutar ato.
- `Processo_Fluxo_visualizarDecisao`, do tipo frame. Essa variável exibirá o documento assinado pelo magistrado na tarefa Confirmar ato.

## Finalizar ato

Ao criar um fluxo, o nó de término, assim como o nó inicial, já vem previamente configurado. Para configurar um nó de término via interface do PJe, deve-se selecionar um "Nó final".

## Arquivo de configuração

Abaixo segue o arquivo xml de configuração do fluxo representado acima. Para eventos de tarefa, eles devem ser configurados manualmente, já que o xml não transportará as informações de configuração. Atentar também para a quebra de linha necessária para visualização do fluxo na wiki, que não deve ser replicada na cópia para a aplicação.

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
 <process-definition xmlns="urn:jbpm.org:jpdl-3.2" name="Preparar ato judicial">
   <description><![CDATA[]]></description>  
   <swimlane name="Assessor"/>
   <swimlane name="Nó de Desvio - Preparar ato judicial">
       <assignment pooled-actors="#{localizacaoAssignment.getPooledActors('-1:1338,1342:1469')}"/>
   </swimlane>
   <swimlane name="Magistrado"/>
   <swimlane name="Secretaria">
       <assignment actor-id="#{actor.id}"/>
   </swimlane>  
   <start-state name="Início">
       <task name="Tarefa inicial" swimlane="Assessor"/>
       <transition to="Minutar ato" name="Minutar ato"/>
   </start-state>  
   <task-node end-tasks="true" name="Minutar ato">
       <task name="Minutar ato" swimlane="Secretaria">
           <controller>
               <variable name="minutar_ato_judicial" mapped-name="textEditCombo:minutar_ato_judicial" access="read,write"/>
           </controller>
       </task>
       <transition to="Nó de Desvio - Preparar ato judicial" name="Nó de Desvio - Preparar ato judicial">
           <condition expression="#{true}"/>
       </transition>
       <transition to="Confirmar ato" name="Confirmar ato"/>
       <event type="node-enter">
           <action name="upd" expression="#{modeloDocumento.set('minuta_ato_judicial',85,86,75,76)}"/>
       </event>
       <event type="task-create">
           <action name="upd" expression="#{taskInstanceUtil.setVariable('tiposDisponiveisIds','63,64,65')} "/>
       </event>
       <event type="node-leave">
           <action name="upd" expression="#{org.jboss.seam.bpm.processInstance.contextInstance.setVariable('minutaEmElaboracao', processoHome.idProcessoDocumento)} "/>
       </event>
       <event type="task-start">
           <action name="Condicao do lancamento temporario de movimentos" expression="#{lancadorMovimentosService.setCondicaoLancamentoMovimentosTemporarioNoFluxo('#{true}')}"/>
       </event>
   </task-node>
   <task-node end-tasks="true" name="Confirmar ato">
       <task name="Confirmar ato" swimlane="Magistrado">
           <controller>
               <variable name="Processo_Fluxo_revisarMinuta" mapped-name="frame:Processo_Fluxo_revisarMinuta" access="read,write"/>
           </controller>
       </task>
       <transition to="Nó de Desvio - Preparar ato judicial" name="Nó de Desvio - Preparar ato judicial">
           <condition expression="#{true}"/>
       </transition>
       <transition to="Minutar ato" name="Retornar para minuta"/>
       <transition to="Confirmar movimentação" name="Confirmar movimentação"/>
       <event type="node-enter">
           <action name="upd" expression="#{tipoDocumento.set('Processo_Fluxo_revisarMinuta','63,64,65')} "/>
           <action/>
       </event>
       <event type="task-create">
           <action expression="#{taskInstanceUtil.setFrameDefaultTransition('Confirmar movimentação')} "/>
       </event>
   </task-node>
   <task-node end-tasks="true" name="Confirmar movimentação">
       <task name="Confirmar movimentação" swimlane="Secretaria">
           <controller>
               <variable name="confirmarmovimentacao" mapped-name="homologadorEventoTree:confirmarmovimentacao" access="read,write"/>
               <variable name="Processo_Fluxo_visualizarDecisao" mapped-name="frame:Processo_Fluxo_visualizarDecisao" access="read,write"/>
           </controller>
       </task>
       <transition to="Finalizar ato" name="Finalizar ato"/>
       <transition to="Nó de Desvio - Preparar ato judicial" name="Nó de Desvio - Preparar ato judicial">
           <condition expression="#{true}"/>
       </transition>
   </task-node>
   <end-state name="Finalizar ato"/>
   <task-node end-tasks="true" name="Nó de Desvio - Preparar ato judicial">
       <task name="Nó de Desvio - Preparar ato judicial" swimlane="Nó de Desvio - Preparar ato judicial"/>
       <transition to="Finalizar ato" name="Término"/>
       <transition to="Minutar ato" name="Minutar ato"/>
       <transition to="Confirmar ato" name="Confirmar ato"/>
       <transition to="Confirmar movimentação" name="Confirmar movimentação"/>
   </task-node>  
   <event type="node-enter">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
   <event type="superstate-leave">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
   <event type="subprocess-end">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
   <event type="node-leave">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
   <event type="before-signal">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
   <event type="superstate-enter">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
   <event type="process-start">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
   <event type="transition">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
   <event type="process-end">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
   <event type="task-end">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
   <event type="task-start">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
   <event type="subprocess-created">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
   <event type="after-signal">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
   <event type="task-assign">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
   <event type="task-create">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
   <event type="timer">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>  
 </process-definition>
```