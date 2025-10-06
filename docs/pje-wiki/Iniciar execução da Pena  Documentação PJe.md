---
title: "Iniciar execução da Pena | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Iniciar%20execu%C3%A7%C3%A3o%20da%20Pena"
author:
published:
created: 2025-09-30
description: "Configuração dos Nós"
tags:
  - "clippings"
---
# Iniciar execução da Pena | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Iniciar%20execu%C3%A7%C3%A3o%20da%20Pena


## Iniciar execução da Pena

## Configuração dos Nós

## Início

### Arquivo de Configuração

O administrador do sistema deverá acessar `Configuração → Sistema → Fluxo`. Abaixo temos uma versão do arquivo XML (`CRI_EXECPENA.xml`) contendo a definição desse subfluxo:

```xml
<process-definition xmlns="urn:jbpm.org:jpdl-3.2" name="Iniciar  execução da Pena">
   <description><![CDATA[]]></description>  
   <swimlane name="solicitante">
       <assignment actor-id="#{actor.id}"/>
   </swimlane>  
   <start-state name="Início">
       <task name="Tarefa inicial"/>
       <transition to="Há Execução par ao réu?" name="Há Execução par ao réu?"/>
   </start-state>  
   <decision expression="" name="Há Execução par ao réu?">
       <transition to="Replicar Informação" name="Replicar Informação"/>
       <transition to="O réu está preso?" name="O réu está preso?"/>
   </decision>
   <decision name="O réu está preso?">
       <transition to="Comunicar ao estab. prisional" name="Comunicar ao estab. prisional"/>
       <transition to="Avaliar Penas" name="Avaliar Penas"/>
   </decision>
   <task-node end-tasks="true" name="Replicar Informação">
       <task name="Replicar Informação" swimlane="solicitante"/>
       <transition to="Término" name="Término"/>
   </task-node>
   <task-node end-tasks="true" name="Comunicar ao estab. prisional">
       <task name="Comunicar ao estab. prisional" swimlane="solicitante"/>
       <transition to="Término" name="Término"/>
   </task-node>
   <task-node end-tasks="true" name="Avaliar Penas">
       <task name="Avaliar Penas" swimlane="solicitante"/>
       <transition to="Expedir mandado de prisão" name="Expedir mandado de prisão"/>
       <transition to="Expedir mandado de cumrpimento" name="Expedir mandado de cumrpimento"/>
       <transition to="Decisão em Execução" name="Decisão em Execução"/>
   </task-node>
   <task-node end-tasks="true" name="Expedir mandado de prisão">
       <task name="Expedir mandado de prisão" swimlane="solicitante"/>
       <transition to="Aguardar captura ou prescrição" name="Aguardar captura ou prescrição"/>
   </task-node>
   <task-node end-tasks="true" name="Expedir mandado de cumrpimento">
       <task name="Expedir mandado de cumrpimento" swimlane="solicitante"/>
       <transition to="Aguardar Cumprimento" name="Aguardar Cumprimento"/>
   </task-node>
   <task-node end-tasks="true" name="Aguardar Cumprimento">
       <task name="Aguardar Cumprimento" swimlane="solicitante"/>
       <transition to="Foi cumprido?" name="Foi cumprido?"/>
   </task-node>
   <task-node end-tasks="true" name="Aguardar captura ou prescrição">
       <task name="Aguardar captura ou prescrição" swimlane="solicitante"/>
       <transition to="Está Prescrito?" name="Está Prescrito?"/>
   </task-node>
   <decision expression="" name="Está Prescrito?">
       <transition to="Aguardar Cumprimento" name="Aguardar Cumprimento"/>
       <transition to="Decisão de Extinção" name="Decisão de Extinção"/>
       <transition to="Aguardar cumprimento" name="Aguardar cumprimento"/>
   </decision>
   <task-node end-tasks="true" name="Aguardar cumprimento">
       <task name="Aguardar cumprimento" swimlane="solicitante"/>
       <transition to="Está Extinto?" name="Está Extinto?"/>
   </task-node>
   <decision expression="" name="Está Extinto?">
       <transition to="Avaliar Penas" name="Avaliar Penas"/>
       <transition to="Decisão de Extinção" name="Decisão de Extinção"/>
   </decision>
   <task-node end-tasks="true" name="Decisão de Extinção">
       <task name="Decisão de Extinção" swimlane="solicitante"/>
       <transition to="Intimar com controle de prazo" name="Intimar com controle de prazo"/>
   </task-node>
   <task-node end-tasks="true" name="Intimar com controle de prazo">
       <task name="Intimar com controle de prazo" swimlane="solicitante"/>
       <transition to="Aguardar Reabilitação" name="Aguardar Reabilitação"/>
       <transition to="Fluxo Recurso" name="Fluxo Recurso"/>
   </task-node>
   <task-node end-tasks="true" name="Aguardar Reabilitação">
       <task name="Aguardar Reabilitação" swimlane="solicitante"/>
       <transition to="Reabilitar" name="Reabilitar"/>
   </task-node>
   <task-node end-tasks="true" name="Reabilitar">
       <task name="Reabilitar" swimlane="solicitante"/>
       <transition to="Arquivo" name="Arquivo"/>
   </task-node>
   <process-state name="Arquivo">
       <sub-process name="Arquivamento" binding="late"/>
       <transition to="Término" name="Término"/>
   </process-state>
   <task-node end-tasks="true" name="Fluxo Recurso">
       <task name="Fluxo Recurso" swimlane="solicitante"/>
       <transition to="Aguardar Reabilitação" name="Aguardar Reabilitação"/>
   </task-node>
   <decision expression="" name="Foi cumprido?">
       <transition to="Fluxo Cumprir Medidas PRD" name="Fluxo Cumprir Medidas PRD"/>
       <transition to="Decisão em Execução" name="Decisão em Execução"/>
   </decision>
   <process-state name="Fluxo Cumprir Medidas PRD">
       <sub-process name="Cumprimento de decisão do criminal" binding="late"/>
       <transition to="Problemas nas PRDs?" name="Problemas nas PRDs?"/>
   </process-state>
   <decision expression="" name="Problemas nas PRDs?">
       <transition to="Decisão de Extinção" name="Decisão de Extinção"/>
   </decision>
   <task-node end-tasks="true" name="Decisão em Execução">
       <task name="Decisão em Execução" swimlane="solicitante"/>
       <transition to="Avaliar Penas" name="Avaliar Penas"/>
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