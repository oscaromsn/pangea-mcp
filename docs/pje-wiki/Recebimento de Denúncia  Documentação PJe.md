---
title: "Recebimento de Denúncia | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Recebimento%20de%20Den%C3%BAncia"
author:
published:
created: 2025-09-30
description: "Configuração dos Nós do Fluxo de \"Recebimento de Denúncia\""
tags:
  - "clippings"
---
# Recebimento de Denúncia | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Recebimento%20de%20Den%C3%BAncia


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/#__docusaurus_skipToContent_fallback)

## Recebimento de Denúncia

## Configuração dos Nós do Fluxo de "Recebimento de Denúncia"

## 1\. Início

- **Descrição**: Nó inicial do fluxo.
- **Transição**: Para o nó "Decidir sobre recebimento de denúncia".

## 2\. Decidir sobre recebimento de denúncia

- **Tipo**: Tarefa
- **Descrição**: O magistrado decide sobre a denúncia utilizando um editor com minuta.
- **Variáveis**:
	- `Processo_Fluxo_decidirSobreRecebimentoDenuncia`: tipo "Escrita", "Frame".
- **Transição**: Para o nó "Houve Recebimento?".

## 3\. Houve Recebimento?

- **Tipo**: Decisão
- **Descrição**: Verifica se a denúncia foi recebida ou rejeitada pelo juiz.
- **Transições de saída**:
	- Para o nó "Evoluir Classe".
	- Para o nó "Houve Rejeição?".

## 4\. Evoluir Classe

- **Tipo**: Tarefa
- **Descrição**: O processo segue para a evolução da classe.
- **Transição**: Para o nó "Término".

## 5\. Houve Rejeição?

- **Tipo**: Decisão
- **Descrição**: Testa se a denúncia recebida foi rejeitada.
- **Transições de saída**:
	- Para o nó "Reu preso?".
	- Para o nó "Término".

## 6\. Reu preso?

- **Tipo**: Decisão
- **Descrição**: Testa se o réu do processo está preso.
- **Transições de saída**:
	- Para o nó "Expedir Alvará".
	- Para o nó "Intimar".

## 7\. Expedir Alvará

- **Tipo**: Tarefa
- **Descrição**: Permite expedir o alvará.
- **Transição**: Para o nó "Intimar".

## 8\. Intimar

- **Tipo**: Tarefa
- **Descrição**: Intima o réu do processo.
- **Transição**: Para o subprocesso "Controle de Prazos".

## 9\. Cont Prazo

- **Tipo**: Subprocesso
- **Descrição**: Controla os prazos definidos em lei.
- **Transição**: Para o nó "Ver recurso".

## 10\. Ver recurso

- **Tipo**: Tarefa
- **Descrição**: Possibilita a visualização de recursos.
- **Transições de saída**:
	- Para o nó "Decisão Ins. Superior".
	- Para o nó "Arquivamento".

## 11\. Decisão Ins. Superior

- **Tipo**: Tarefa
- **Descrição**: Avalia a decisão da instância superior.
- **Transição**: Para o nó "Avaliar Decisão Superior".

## 12\. Avaliar Decisão Superior

- **Tipo**: Tarefa
- **Descrição**: Avalia a decisão proferida ao réu.
- **Transições de saída**:
	- Para o nó "Arquivamento".
	- Para o nó "Término".

## 13\. Arquivamento

- **Tipo**: Subprocesso
- **Descrição**: Arquiva o processo.
- **Transição**: Para o nó "Término".

## 14\. Término

- **Descrição**: Finaliza o fluxo.
- **Observação**: O nó de término já vem previamente configurado.

## Arquivo de Configuração

O administrador do sistema deverá acessar Configuração → Sistema → Fluxo. Abaixo temos uma versão do arquivo XML (`CRI_RECEBDEN.xml`) contendo a definição desse subfluxo:

```xml
<process-definition xmlns="urn:jbpm.org:jpdl-3.2" name="Recebimento de Denúncia">
  <description><![CDATA[]]></description>  
  <swimlane name="solicitante">
      <assignment actor-id="#{actor.id}"/>
  </swimlane>  
  <start-state name="Início">
      <task name="Tarefa inicial" swimlane="solicitante"/>
      <transition to="Decidir sobre recebimento de denúncia" name="Decidir sobre recebimento de denúncia"/>
  </start-state>  
  <task-node end-tasks="true" name="Decidir sobre recebimento de denúncia">
      <task name="Decidir sobre recebimento de denúncia" swimlane="solicitante"/>
      <transition to="Houve Recebimento?" name="Houve Recebimento?"/>
  </task-node>
  <decision name="Houve Recebimento?">
      <transition to="Evoluir Classe" name="Evoluir Classe"/>
      <transition to="Houve Rejeição?" name="Houve Rejeição?"/>
  </decision>
  <task-node end-tasks="true" name="Evoluir Classe">
      <task name="Evoluir Classe" swimlane="solicitante"/>
      <transition to="Término" name="Término"/>
  </task-node>
  <decision expression="" name="Houve Rejeição?">
      <transition to="Reu preso?" name="Reu preso?"/>
      <transition to="Término" name="Término"/>
  </decision>
  <decision expression="" name="Reu preso?">
      <transition to="Intimar" name="Intimar"/>
      <transition to="Expedir Alvará?" name="Expedir Alvará?"/>
  </decision>
  <task-node end-tasks="true" name="Expedir Alvará?">
      <task name="Expedir Alvará?" swimlane="solicitante"/>
      <transition to="Intimar" name="Intimar"/>
  </task-node>
  <task-node end-tasks="true" name="Intimar">
      <task name="Intimar" swimlane="solicitante"/>
      <transition to="Cont Prazo" name="Cont Prazo"/>
  </task-node>
  <process-state name="Cont Prazo">
      <sub-process name="Controle de prazos" binding="late"/>
      <transition to="Ver recurso" name="Ver recurso"/>
  </process-state>
  <task-node end-tasks="true" name="Ver recurso">
      <task name="Ver recurso" swimlane="solicitante"/>
      <transition to="Decisão Ins. Superior" name="Decisão Ins. Superior"/>
      <transition to="Arquivamento" name="Arquivamento"/>
  </task-node>
  <task-node end-tasks="true" name="Decisão Ins. Superior">
      <task name="Decisão Ins. Superior" swimlane="solicitante"/>
      <transition to="Avaliar Decisão Superior" name="Avaliar Decisão Superior"/>
  </task-node>
  <task-node end-tasks="true" name="Avaliar Decisão Superior">
      <task name="Avaliar Decisão Superior" swimlane="solicitante"/>
      <transition to="Arquivamento" name="Arquivamento"/>
      <transition to="Término" name="Término"/>
  </task-node>
  <process-state name="Arquivamento">
      <sub-process name="Arquivamento" binding="late"/>
      <transition to="Término" name="Término"/>
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
  <event type="task-start">
      <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
  </event>
  <event type="subprocess-created">
      <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
  </event>
  <event type="after-signal">
      <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
  </event>
</process-definition>
```