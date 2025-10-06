---
title: "Inquérito | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Inqu%C3%A9rito"
author:
published:
created: 2025-09-30
description: "Configuração dos Nós"
tags:
  - "clippings"
---
# Inquérito | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Inqu%C3%A9rito


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/#__docusaurus_skipToContent_fallback)

## Inquérito

## Configuração dos Nós

## Início

O nó inicial, que já vem previamente inserido em todos os fluxos do PJe, segue o padrão de todos os nós de início, contendo a transição para o primeiro nó de tarefa configurada com a opção "Ocultar" desmarcada.

#### Transições que saem do nó

## Réu está preso?

Este nó de decisão é responsável por encaminhar o processo para **Intimar MP de Réu Preso (???)**, nos casos em que o Réu esteja preso (???), senão o processo seguirá para o nó **Intimar MP de Réu Solto (???**). A avaliação será feita por meio de **TO-DO: Definir expressão de avaliação!**

#### Transições que saem do nó

- Intimar MP de Réu Preso
- Intimar MP de Réu Solto

## Intimar MP de Réu Preso

O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO: Protótipo e definições**.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO:???**

#### Variáveis

**TO-DO: Quais variáveis serão necessários para executar a tarefa???**

#### Eventos

**TO-DO: Quais eventos serão necessários para executar a tarefa???**

#### Transições que saem do nó

- Cont. Prazo

## Intimar MP de Réu Solto

O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO: Protótipo e definições**.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO:???**

#### Variáveis

**TO-DO: Quais variáveis serão necessários para executar a tarefa???**

#### Eventos

**TO-DO: Quais eventos serão necessários para executar a tarefa???**

#### Transições que saem do nó

- Cont. Prazo

## Cont. Prazo

É um nó de processo para contar o prazo após a execução do nó de origem (???).

#### Transições que saem do nó

- Foi oferecida a Denúncia?

## Foi oferecida a Denúncia?

Este nó de decisão é responsável por encaminhar o processo para **TO-DO: Definir caminho 1!**, nos casos em que **TO-DO: Definir caso do caminho 1!**, senão o processo seguirá para o nó **TO-DO: Definir caminho 2!**. A avaliação será feita por meio de **TO-DO: Definir expressão de avaliação!**

#### Transições que saem do nó

- Decidir sobre Pedido Incidental
- Receber denúncia

## Decidir sobre Pedido Incidental

O nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim. Essa tarefa permitirá **TO-DO: Protótipo e definições**.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes **TO-DO:???**

#### Variáveis

**TO-DO: Quais variáveis serão necessários para executar a tarefa???**

#### Eventos

**TO-DO: Quais eventos serão necessários para executar a tarefa???**

#### Transições que saem do nó

- Foi determinado o arquivamento?

## Foi determinado o arquivamento?

Este nó de decisão é responsável por encaminhar o processo para **TO-DO: Definir caminho 1!**, nos casos em que **TO-DO: Definir caso do caminho 1!**, senão o processo seguirá para o nó **TO-DO: Definir caminho 2!**. A avaliação será feita por meio de **TO-DO: Definir expressão de avaliação!**

####### Transições que saem do nó

- Cumpri Dec.
- Receber denúncia

## Cumpri Dec

É um nó de processo que fará **TO-DO: Definições???**.

#### Transições que saem do nó

- Foi oferecida a Denúncia?
- Receber Denúncia

É um nó de processo que fará **TO-DO: Definições???**.

#### Transições que saem do nó

- Réu está preso?

## Término

Ao criar um fluxo, o nó de término, assim como o nó inicial, já vem previamente configurado. Para configurar um nó de término via interface do PJe, deve-se selecionar um "Nó final".

## Arquivo de Configuração

O administrador do sistema deverá acessar **Configuração → Sistema → Fluxo**. Abaixo temos uma versão do arquivo XML (CRI\_INQUERITO.xml) contendo a definição desse subfluxo:

```xml
<process-definition xmlns="urn:jbpm.org:jpdl-3.2" name="Inquérito">
   <description><![CDATA[]]></description>  
   <swimlane name="solicitante">
       <assignment actor-id="#{actor.id}"/>
   </swimlane>  
   <start-state name="Início">
       <task name="Tarefa inicial" swimlane="solicitante"/>
       <transition to="Reu está preso?" name="Reu está preso?"/>
   </start-state>  
   <decision expression="" name="Reu está preso?">
       <transition to="Intimar MP (Prazo 15d)" name="Intimar MP (Prazo 15d)"/>
       <transition to="Intimar MP (Prazo 5d)" name="Intimar MP (Prazo 5d)"/>
   </decision>
   <task-node end-tasks="true" name="Intimar MP (Prazo 15d)">
       <task name="Intimar MP (Prazo 15d)" swimlane="solicitante"/>
       <transition to="Cont Prazo" name="Cont Prazo"/>
   </task-node>
   <task-node end-tasks="true" name="Intimar MP (Prazo 5d)">
       <task name="Intimar MP (Prazo 5d)" swimlane="solicitante"/>
       <transition to="Cont Prazo" name="Cont Prazo"/>
   </task-node>
   <process-state name="Cont Prazo">
       <sub-process name="Controle de prazos" binding="late"/>
       <transition to="Tipo doc é denúncia?" name="Tipo doc é denúncia?"/>
   </process-state>
   <decision expression="" name="Tipo doc é denúncia?">
       <transition to="Receber denúncia" name="Receber denúncia"/>
       <transition to="Dec Ped. Incidental" name="Dec Ped. Incidental"/>
   </decision>
   <process-state name="Receber denúncia">
       <sub-process name="Recebimento de Denúncia" binding="late"/>
       <transition to="Reu está preso?" name="Reu está preso?"/>
       <transition to="Término" name="Término"/>
   </process-state>
   <task-node end-tasks="true" name="Dec Ped. Incidental">
       <task name="Dec Ped. Incidental" swimlane="solicitante"/>
       <transition to="Determinar Arquivamento?" name="Determinar Arquivamento?"/>
   </task-node>
   <decision expression="" name="Determinar Arquivamento?">
       <transition to="Cumpri Dec" name="Cumpri Dec"/>
       <transition to="Receber denúncia" name="Receber denúncia"/>
   </decision>
   <process-state name="Cumpri Dec">
       <sub-process name="Cumprimento de decisão do criminal" binding="late"/>
       <transition to="Tipo doc é denúncia?" name="Tipo doc é denúncia?"/>
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
   <event type="process-end">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
   <event type="task-end">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
</process-definition>
```