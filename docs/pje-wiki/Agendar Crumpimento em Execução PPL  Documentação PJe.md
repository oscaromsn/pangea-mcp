---
title: "Agendar Crumpimento em Execução PPL | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Agendar%20Crumpimento%20em%20Execu%C3%A7%C3%A3o%20PPL"
author:
published:
created: 2025-09-30
description: "Configuração dos Nós"
tags:
  - "clippings"
---
# Agendar Crumpimento em Execução PPL | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Agendar%20Crumpimento%20em%20Execu%C3%A7%C3%A3o%20PPL


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/#__docusaurus_skipToContent_fallback)

## Agendar Crumpimento em Execução PPL

## Configuração dos Nós

### Início

O nó inicial, que já vem previamente inserido em todos os fluxos do PJe, segue o padrão de todos os nós de início, contendo a transição para o primeiro nó de tarefa configurada com a opção "Ocultar" desmarcada.

#### Transições que saem do nó

#### Ag. Inc. execução

**Ag Inc Execução**  
O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO:** Protótipo e definições.

##### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO:**???

##### Variáveis

**TO-DO:** Quais variáveis serão necessários para executar a tarefa???

##### Eventos

**TO-DO:** Quais eventos serão necessários para executar a tarefa???

#### Transições que saem do nó

- Recuperar Dado
- Analisar incidente

## Término

#### Recuperar Dado

O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO:** Protótipo e definições.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO:**???

#### Variáveis

**TO-DO:** Quais variáveis serão necessários para executar a tarefa???

#### Eventos

**TO-DO:** Quais eventos serão necessários para executar a tarefa???

#### Transições que saem do nó

- Dado incidente?

## Dado incidente?

Este nó de decisão é responsável por encaminhar o processo para **TO-DO:** Definir caminho 1!, nos casos em que **TO-DO:** Definir caso do caminho 1!, senão o processo seguirá para o nó **TO-DO:** Definir caminho 2!. A avaliação será feita por meio de **TO-DO:** Definir expressão de avaliação!

#### Transições de saída

- Ag. Inc. execução
- Analisar incidente

## Analisar incidente

O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO:** Protótipo e definições.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO:**???

#### Variáveis

**TO-DO:** Quais variáveis serão necessários para executar a tarefa???

#### Eventos

**TO-DO:** Quais eventos serão necessários para executar a tarefa???

#### Transições que saem do nó

- Ag. Inc. execução
- Intimar MP
- Recuperar Dados
- Término

## Intimar MP

O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO:** Protótipo e definições.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO:**???

#### Variáveis

**TO-DO:** Quais variáveis serão necessários para executar a tarefa???

#### Eventos

**TO-DO:** Quais eventos serão necessários para executar a tarefa???

#### Transições que saem do nó

- Recuperar Dados

## Recuperar Dados

O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO:** Protótipo e definições.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO:**???

#### Variáveis

**TO-DO:** Quais variáveis serão necessários para executar a tarefa???

#### Eventos

**TO-DO:** Quais eventos serão necessários para executar a tarefa???

#### Transições que saem do nó

- Decidir em Incidente

## Decidir em Incidente

O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO:** Protótipo e definições.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO:**???

#### Variáveis

**TO-DO:** Quais variáveis serão necessários para executar a tarefa???

#### Eventos

**TO-DO:** Quais eventos serão necessários para executar a tarefa???

#### Transições que saem do nó

- Cumpridec

## Cumpridec

É um nó de processo que fará **TO-DO:** Definições???

#### Transições que saem do nó

- Analisar incidente
- Término

#### Término

Ao criar um fluxo, o nó de término, assim como o nó inicial, já vem previamente configurado. Para configurar um nó de término via interface do PJe, deve-se selecionar um "Nó final".

## Arquivo de Configuração

O administrador do sistema deverá acessar **Configuração → Sistema → Fluxo**. Abaixo temos uma versão do arquivo XML (CRI\_APF.xml) contendo a definição desse subfluxo:

```xml
<process-definition xmlns="urn:jbpm.org:jpdl-3.2" name="Agendar Crumpimento em Exec. PPL">
  <description><![CDATA[]]></description>  
  <swimlane name="solicitante">
      <assignment actor-id="#{actor.id}"/>
  </swimlane>  
  <start-state name="Início">
      <task name="Tarefa inicial" swimlane="solicitante"/>
      <transition to="Término" name="Término"/>
      <transition to="Ag. inc execução" name="Ag. inc execução"/>
  </start-state>  
  <task-node end-tasks="true" name="Ag. inc execução">
      <task name="Ag. inc execução" swimlane="solicitante"/>
      <transition to="Analisar Incidente" name="Analisar Incidente"/>
      <transition to="Recuperar Dado" name="Recuperar Dado"/>
  </task-node>
  <task-node end-tasks="true" name="Analisar Incidente">
      <task name="Analisar Incidente" swimlane="solicitante"/>
      <transition to="Intimar MP" name="Intimar MP"/>
      <transition to="Término" name="Término"/>
      <transition to="Recuperar Dados" name="Recuperar Dados"/>
  </task-node>
  <task-node end-tasks="true" name="Recuperar Dados">
      <task name="Recuperar Dados" swimlane="solicitante"/>
      <transition to="Decidir em Incidente" name="Decidir em Incidente"/>
  </task-node>
  <task-node end-tasks="true" name="Decidir em Incidente">
      <task name="Decidir em Incidente" swimlane="solicitante"/>
      <transition to="Cumpridec" name="Cumpridec"/>
  </task-node>
  <task-node end-tasks="true" name="Recuperar Dado">
      <task name="Recuperar Dado" swimlane="solicitante"/>
      <transition to="Dado incidente?" name="Dado incidente?"/>
  </task-node>
  <task-node end-tasks="true" name="Intimar MP">
      <task name="Intimar MP" swimlane="solicitante"/>
      <transition to="Recuperar Dados" name="Recuperar Dados"/>
  </task-node>
  <decision expression="" name="Dado incidente?">
      <transition to="Ag. inc execução" name="Ag. inc execução"/>
      <transition to="Analisar Incidente" name="Analisar Incidente"/>
  </decision>
  <process-state name="Cumpridec">
      <sub-process name="Cumprimento de decisão do criminal" binding="late"/>
      <transition to="Analisar Incidente" name="Analisar Incidente"/>
  </process-state>
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