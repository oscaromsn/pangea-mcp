---
title: "Recurso do Processo Criminal | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Recurso%20do%20Processo%20Criminal"
author:
published:
created: 2025-09-30
description: "Configuração dos Nós"
tags:
  - "clippings"
---
# Recurso do Processo Criminal | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Recurso%20do%20Processo%20Criminal


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/#__docusaurus_skipToContent_fallback)

## Recurso do Processo Criminal

## Configuração dos Nós

## Início

O nó inicial é configurado como padrão em todos os fluxos do PJe, com a transição para o primeiro nó de tarefa ("Intimar do julgamento") tendo a opção "Ocultar" desmarcada.

#### Transições que saem do nó

## Intimar do julgamento

- O primeiro nó de tarefa é denominado "Intimar do julgamento", que é representado por uma tela já preparada no sistema.

#### Variáveis

- **Processo\_Fluxo\_intimarJulgamento**: O nó de tarefa "Intimar do julgamento" deve conter a variável "Processo\_Fluxo\_intimarJulgamento" do tipo "Frame" e com a opção "Escrita".

#### Atribuir a

- Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes a Diretor de Secretaria/Servidor Geral.

#### Transições de saída

- A transição de saída padrão deste nó vai para o nó de tarefa "Cont\_Prazo", que deve ter a opção "Ocultar" desmarcada.

#### Eventos

- **Finalizar tarefa**: Definir eventos conforme necessário.

## Cont Prazo

- Nó de processo para contar o prazo após a execução do nó de intimação.

#### Transições que saem do nó

- **Avaliar Interp. de Recursos**: Este nó de tarefa possibilita definir as ações pertinentes.

#### Transições que saem do nó

- **Decidir sobre recurso**
- **Enviar Int, Superior**
- **Transito Julgado**

#### Atribuir a

- Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes a Diretor de Secretaria/Servidor Geral.

#### Variáveis

- **Processo\_Fluxo\_expedientes\_avaliarInterpRecursos**: Do tipo frame, de escrita. Essa variável mapeia a tela para as definições.

#### Eventos

- **Criar tarefa**: Definir eventos conforme necessário.

## Decidir sobre recurso

- Nó de tarefa que permite ao magistrado decidir sobre o recurso do processo.

#### Transições que saem do nó

- **Intimar do julgamento**

#### Atribuir a

- Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes ao Magistrado.

#### Variáveis

- **Processo\_Fluxo\_DecidirSobreRecurso**: Do tipo frame, de escrita. Essa variável mapeia a tela de minuta de decisão.

#### Eventos

- **Entrar no nó**:
	- Ação 1: Definir a expressão `#{tipoDocumento.set('minuta_ato_judicial',62,63,64)}` com a opção "Reexecutável?" marcada.
	- Ação 2: Definir a expressão `#{modeloDocumento.set('minuta_ato_judicial',85,86,75,76)}` com a opção "Reexecutável?" marcada.

#### Sair do nó

- **Transito Julgado**: Ao criar este nó de tarefa, deve-se adicionar a variável "Processo\_Fluxo\_transitoJulgado" do tipo "Frame" e marcada como "Escrita".

#### Atribuir a

- Vincular a tarefa à raia que contemple o papel pertinente.

#### Transições que saem do nó

- **Término**

#### Variáveis

- **Processo\_Fluxo\_transitoJulgado**: Do tipo frame, de escrita.

#### Eventos

- Definir eventos conforme necessário.

## Enviar Int, Superior

- O nó de tarefa "Enviar Int, Superior" possibilita as definições necessárias.

#### Transições que saem do nó

- **Término**

#### Atribuir a

- Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações específicas.

#### Variáveis

- **Processo\_Fluxo\_enviarInstSuperior**: Do tipo frame, de escrita. Essa variável mapeia a tela para as definições.

#### Eventos

- **Criar tarefa**: Definir eventos conforme necessário.

## Término

- O nó de término é configurado automaticamente ao criar um fluxo. Para configurá-lo via interface do PJe, selecione um "Nó final".

---

## Arquivo de Configuração

O administrador do sistema deve acessar **Configuração → Sistema → Fluxo**. Abaixo está a versão do arquivo XML (CRI\_RECURSO.xml) contendo a definição desse subfluxo:

```xml
<process-definition xmlns="urn:jbpm.org:jpdl-3.2" name="Recurso">
    <description><![CDATA[]]></description>  
    <swimlane name="solicitante">
        <assignment actor-id="#{actor.id}"/>
    </swimlane>  
    <start-state name="Início">
        <task name="Tarefa inicial" swimlane="solicitante"/>
        <transition to="Intimar do julgamento" name="Intimar do julgamento"/>
    </start-state>  
    <task-node end-tasks="true" name="Intimar do julgamento">
        <task name="Intimar do julgamento" swimlane="solicitante"/>
        <transition to="Cont_Prazo" name="Cont_Prazo"/>
    </task-node>
    <task-node end-tasks="true" name="Cont_Prazo">
        <task name="Cont Prazo" swimlane="solicitante"/>
        <transition to="Avaliar Interp. de Recursos" name="Avaliar Interp. de Recursos"/>
    </task-node>
    <task-node end-tasks="true" name="Avaliar Interp. de Recursos">
        <task name="Avaliar Interp. de Recursos" swimlane="solicitante"/>
        <transition to="Decidir sobre recurso" name="Decidir sobre recurso"/>
        <transition to="Enviar Int, Superior" name="Enviar Int, Superior"/>
        <transition to="Transito Julgado" name="Transito Julgado"/>
    </task-node>
    <task-node end-tasks="true" name="Decidir sobre recurso">
        <task name="Decidir sobre recurso" swimlane="solicitante"/>
        <transition to="Intimar do julgamento" name="Intimar do julgamento"/>
    </task-node>
    <task-node end-tasks="true" name="Enviar Int, Superior">
        <task name="Enviar Int, Superior" swimlane="solicitante"/>
        <transition to="Término" name="Término"/>
    </task-node>
    <task-node end-tasks="true" name="Transito Julgado">
        <task name="Transito Julgado" swimlane="solicitante"/>
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