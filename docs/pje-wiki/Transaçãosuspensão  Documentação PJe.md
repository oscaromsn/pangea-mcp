---
title: "Transação/suspensão | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Suspens%C3%A3o"
author:
published:
created: 2025-09-30
description: "Configuração dos Nós"
tags:
  - "clippings"
---
# Transação/suspensão | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Suspens%C3%A3o


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/#__docusaurus_skipToContent_fallback)

## Transação/suspensão

## Configuração dos Nós

## Início

O nó inicial, que já vem previamente inserido em todos os fluxos do PJe, segue o padrão de todos os nós de início, contendo a transição para o primeiro nó de tarefa configurada com a opção "Ocultar" desmarcada.

#### Transições que saem do nó

- **Expedir mandado de cumprimento**, configurada com a opção "Ocultar" desmarcada.

## Expedir Mandado de Cumprimento

O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO: Protótipo e definições**.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO:???**

#### Variáveis

**TO-DO: Quais variáveis serão necessários para executar a tarefa???**

#### Eventos

**TO-DO: Quais eventos serão necessários para executar a tarefa???**

#### Transições que saem do nó

- **Aguardar Cumprim.**

## Aguardar Cumprimento

O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO: Protótipo e definições**.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO:???**

#### Variáveis

**TO-DO: Quais variáveis serão necessários para executar a tarefa???**

#### Eventos

**TO-DO: Quais eventos serão necessários para executar a tarefa???**

#### Transições que saem do nó

- **Cumprido?**

## Cumprido?

Este nó de decisão é responsável por encaminhar o processo para **Fluxo Cumprimento de medidas PRD**, nos casos em que a resposta seja sim, senão o processo seguirá para o nó **Decisão em execução**. A avaliação será feita por meio de **TO-DO: Definir expressão de avaliação!**

#### Transições que saem do nó

- **Fluxo Cumprimento de medidas PRD**
- **Decisão em execução**

## Fluxo Cumprimento de Medidas PRD

É um nó de processo que fará **TO-DO: Definições???**.

#### Transições que saem do nó

- **Problemas nas PRDs?**

## Problemas nas PRDs?

Este nó de decisão é responsável por encaminhar o processo para **Intimar com controle de prazo**, nos casos em que a resposta seja sim, senão o processo seguirá para o nó **Decisão de extinção**. A avaliação será feita por meio de **TO-DO: Definir expressão de avaliação!**

#### Transições que saem do nó

- **Intimar com controle de prazo**
- **Decisão de extinção**

## Decisão de Extinção

O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO: Protótipo e definições**.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO:???**

#### Variáveis

**TO-DO: Quais variáveis serão necessários para executar a tarefa???**

#### Eventos

**TO-DO: Quais eventos serão necessários para executar a tarefa???**

#### Transições que saem do nó

- **Intimar com controle de prazo**

## Intimar com Controle de Prazo

O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO: Protótipo e definições**.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO:???**

#### Variáveis

**TO-DO: Quais variáveis serão necessários para executar a tarefa???**

#### Eventos

**TO-DO: Quais eventos serão necessários para executar a tarefa???**

#### Transições que saem do nó

- **Fluxo de recurso**
- **Aguardar reabilitação**

## Fluxo de Recurso

É um nó de processo que fará **TO-DO: Definições???**.

#### Transições que saem do nó

- **Avaliar decisão superior**
- **Aguardar reabilitação**

## Aguardar Reabilitação

O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO: Protótipo e definições**.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO:???**

#### Variáveis

**TO-DO: Quais variáveis serão necessários para executar a tarefa???**

#### Eventos

**TO-DO: Quais eventos serão necessários para executar a tarefa???**

#### Transições que saem do nó

- **Término**

## Avaliar Decisão Superior

O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO: Protótipo e definições**.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO:???**

#### Variáveis

**TO-DO: Quais variáveis serão necessários para executar a tarefa???**

#### Eventos

**TO-DO: Quais eventos serão necessários para executar a tarefa???**

#### Transições que saem do nó

- **Expedir mandado de cumprimento**

#### Término

Decisão em execução. O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO: Protótipo e definições**.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO:???**

#### Variáveis

**TO-DO: Quais variáveis serão necessários para executar a tarefa???**

#### Eventos

**TO-DO: Quais eventos serão necessários para executar a tarefa???**

#### Transições que saem do nó

- **Expedir mandado de cumprimento**
- **Término**

## Término

Ao criar um fluxo, o nó de término, assim como o nó inicial, já vem previamente configurado. Para configurar um nó de término via interface do PJe, deve-se selecionar um "Nó final".

## Arquivo de Configuração

O administrador do sistema deverá acessar **Configuração → Sistema → Fluxo**. Abaixo temos uma versão do arquivo XML (CRI\_TRANSACAO.xml) contendo a definição desse subfluxo:

```xml
<process-definition xmlns="urn:jbpm.org:jpdl-3.2" name="Recurso">
  <description><![CDATA[]]></description>  
  <swimlane name="solicitante">
      <assignment actor-id="#{actor.id}"/>
  </swimlane>  
  <start-state name="Início">
      <task name="Tarefa inicial" swimlane="solicitante"/>
      <transition to="Expedir mandado de cumprimento" name="Expedir mandado de cumprimento"/>
  </start-state>  
  <task-node end-tasks="true" name="Expedir mandado de cumprimento">
      <task name="Expedir mandado de cumprimento" swimlane="solicitante"/>
      <transition to="Aguardar Cumprimento" name="Aguardar Cumprim"/>
  </task-node>
  <task-node end-tasks="true" name="Aguardar Cumprimento">
      <task name="Aguardar Cumprim" swimlane="solicitante"/>
      <transition to="Cumprido?" name="Cumprido?"/>
  </task-node>
  <decision expression="" name="Cumprido?">
      <transition to="Fluxo Cumprimento de medidas PRD" name="CRI_CUMPRD"/>
      <transition to="Decisão em execução" name="Decisão em exercício"/>
  </decision>
  <decision expression="" name="Problemas nas PRDs?">
      <description><![CDATA[]]></description>
      <transition to="Decisão em execução" name="Decisão em exercício"/>
      <transition to="Decisão de extinção" name="Decisão de extinção"/>
  </decision>
  <process-state name="Fluxo Cumprimento de medidas PRD">
      <sub-process name="Objeto de Cumprimento de PRDs" binding="late"/>
      <description><![CDATA[Se a resposta de "Cumprido?" for sim.]]></description>
      <transition to="Problemas nas PRDs?" name="Problemas nas PRDs?"/>
  </process-state>
  <task-node end-tasks="true" name="Decisão de extinção">
      <task name="Decisão de extinção" swimlane="solicitante"/>
      <description><![CDATA[Caso a resposta à decisão "Problemas nas PRDs?" seja não.]]></description>
      <transition to="Intim. com controle de prazo" name="Intim. com controle de prazo"/>
  </task-node>
  <task-node end-tasks="true" name="Avaliar decisão superior">
      <task name="Avaliar decisão superior" swimlane="solicitante"/>
      <description><![CDATA[Caso a resposta à decisão "Cumprido?" seja sim.]]></description>
      <transition to="Aguardar reabilitação" name="Aguardar reabilitação"/>
  </task-node>
  <task-node end-tasks="true" name="Aguardar reabilitação">
      <task name="Aguardar reabilitação" swimlane="solicitante"/>
      <transition to="Término" name="Término"/>
  </task-node>
  <end-state name="Término" />
</process-definition>
```