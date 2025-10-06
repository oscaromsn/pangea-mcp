---
title: "Medidas Cautelares | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Medidas%20Cautelares"
author:
published:
created: 2025-09-30
description: "Configuração dos Nós"
tags:
  - "clippings"
---
# Medidas Cautelares | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Medidas%20Cautelares


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/#__docusaurus_skipToContent_fallback)

## Medidas Cautelares

## Configuração dos Nós

## Início

O nó inicial, que já vem previamente inserido em todos os fluxos do PJe, segue o padrão de todos os nós de início, contendo a transição para o primeiro nó de tarefa configurada com a opção "Ocultar" desmarcada.

#### Transições que saem do nó

## Decisão em Gab.

O primeiro nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim.

Para configurar o "Decisão em Gab", deve-se criar um nó de tarefa, vinculado ao fluxo, que contenha a variável `Processo_Fluxo_decisaoGabinete` como sendo de "Escrita" e do tipo "Frame".

#### Transições que saem do nó

- Cumpridec

#### Atribuir a

- Vincular a tarefa à raia que contemple **TO-DO**: Definir papel

#### Variáveis

- `Processo_Fluxo_decisaoGab` - do tipo frame, de escrita. Essa variável mapeia a tela de construção do expediente.

#### Eventos

- **TO-DO**: Quais eventos serão necessários para executar a tarefa???

## Cumpridec

É um nó de processo para cumprimento de decisão. **TO-DO**: Definir Cumpridec Criminal

#### Transições que saem do nó

- Houve Julgamento?

## Houve Julgamento

Após o cumprimento de decisão, o nó **Houve Julgamento?** verifica se o julgamento foi realizado. Se houver julgamento, o processo segue para o nó **Avaliar Resultado**, senão o processo vai para o nó **Recurso**.

O nó **Houve Julgamento?** deve ser criado contendo a seguinte expressão: **TO-DO**: Definir expressão!

#### Transições que saem do nó

- Avaliar Resultado
- Recurso

## Avaliar Resultado

O nó de tarefa é representado por uma tela já preparada no sistema para esse fim. É por meio dessa tarefa que **TO-DO**: Definir tarefa

#### Variáveis

- `Processo_Fluxo_avaliarResultado`

Para configurar o nó de tarefa "Avaliar Resultado", deve-se criar um nó de tarefa, vinculado ao fluxo, que contenha a variável **TO-DO**: Definir variável como sendo de "Escrita" e do tipo "Frame". **TO-DO**: Existem outras?

#### Transições de saída

- Decisão em Gab.

#### Eventos

- **TO-DO**: Quais são os possíveis eventos desta tarefa?

## Recurso

É um nó de processo para elaborar recurso. **TO-DO**: Alinhar com a orientação do subfluxo

#### Transições que saem do nó

- Receb. Instrução
- Há Acomp. Ativo?

## Receb. Instrução

O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim.

Essa tarefa permitirá **TO-DO**: Protótipo e definições

#### Atribuir a

- Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO**:???

#### Variáveis

- **TO-DO**: Quais variáveis serão necessários para executar a tarefa???.

#### Eventos

- **TO-DO**: Quais eventos serão necessários para executar a tarefa???

#### Transições que saem do nó

- Decisão em Gab.
- Recurso

## Há Acomp. Ativo?

Este nó de decisão é responsável por encaminhar o processo para o **Arquivo** (???), nos casos em que não houver acompanhamento ativo (???), senão o processo seguirá para o nó **Acompanhar Cumprimento** (???). A avaliação será feita por meio de **TO-DO**: Definir expressão de avaliação!

#### Transições que saem do nó

- Arquivo
- Acomp. Cumprimento

## Arquivo

É um nó de processo que arquivará o recurso (???).

#### Transições que saem do nó

- Término
- Acomp. Cumprimento

## Acomp. Cumprimento

O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO**: Protótipo e definições

#### Atribuir a

- Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO**:???

#### Variáveis

- **TO-DO**: Quais variáveis serão necessários para executar a tarefa???.

#### Eventos

- **TO-DO**: Quais eventos serão necessários para executar a tarefa???

#### Transições que saem do nó

- Término

## Término

Ao criar um fluxo, o nó de término, assim como o nó inicial, já vem previamente configurado. Para configurar um nó de término via interface do PJe, deve-se selecionar um "Nó final".

## Arquivo de Configuração

O administrador do sistema deverá acessar **Configuração → Sistema → Fluxo**. Abaixo temos uma versão do arquivo XML (CRI\_MEDC.xml) contendo a definição desse subfluxo:

```xml
<process-definition xmlns="urn:jbpm.org:jpdl-3.2" name="Medidas Cautelares">
   <description><![CDATA[]]></description>  
   <swimlane name="solicitante">
       <assignment actor-id="#{actor.id}"/>
   </swimlane>  
   <start-state name="Início">
       <task name="Tarefa inicial" swimlane="solicitante"/>
       <transition to="Decisão em Gab." name="Decisão em Gab."/>
   </start-state>  
   <task-node end-tasks="true" name="Decisão em Gab.">
       <task name="Decisão em Gab." swimlane="solicitante"/>
       <transition to="Cumpridec" name="Cumpridec"/>
   </task-node>
   <process-state name="Cumpridec">
       <sub-process name="Cumprimento de decisão do criminal" binding="late"/>
       <transition to="Houve Julgamento?" name="Houve Julgamento?"/>
   </process-state>
   <decision name="Houve Julgamento?">
       <transition to="Avaliar Resultado" name="Avaliar Resultado"/>
       <transition to="Recurso" name="Recurso"/>
   </decision>
   <task-node end-tasks="true" name="Avaliar Resultado">
       <task name="Avaliar Resultado" swimlane="solicitante"/>
       <transition to="Decisão em Gab." name="Decisão em Gab."/>
   </task-node>
   <process-state name="Recurso">
       <sub-process name="Cumprimento de decisão do criminal" binding="late"/>
       <transition to="Receb. Instrução" name="Receb. Instrução"/>
       <transition to="Há Acomp. Ativo?" name="Há Acomp. Ativo?"/>
   </process-state>
   <task-node end-tasks="true" name="Receb. Instrução">
       <task name="Receb. Instrução" swimlane="solicitante"/>
       <transition to="Decisão em Gab." name="Decisão em Gab."/>
       <transition to="Recurso" name="Recurso"/>
   </task-node>
   <decision expression="" name="Há Acomp. Ativo?">
       <transition to="Acomp. Cumprimento" name="Acomp. Cumprimento"/>
       <transition to="Arquivo" name="Arquivo"/>
   </decision>
   <process-state name="Arquivo">
       <sub-process name="Arquivamento" binding="late"/>
       <transition to="Término" name="Término"/>
   </process-state>
   <task-node end-tasks="true" name="Acomp. Cumprimento">
       <task name="Acomp. Cumprimento" swimlane="solicitante"/>
       <transition to="Término" name="Término"/>
   </task-node>
   <end-state name="Término"/>  
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
</process-definition>
```