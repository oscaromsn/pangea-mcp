---
title: "Objeto de Cumprimento de PRDs | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Objeto%20de%20Cumprimento%20de%20PRDs"
author:
published:
created: 2025-09-30
description: "Configuração dos Nós"
tags:
  - "clippings"
---
# Objeto de Cumprimento de PRDs | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Objeto%20de%20Cumprimento%20de%20PRDs


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/#__docusaurus_skipToContent_fallback)

## Objeto de Cumprimento de PRDs

## Configuração dos Nós

## Início

O nó inicial, que já vem previamente inserido em todos os fluxos do PJe, segue o padrão de todos os nós de início, contendo a transição para o primeiro nó de tarefa configurada com a opção "Ocultar" desmarcada.

#### Transições que saem do nó

### Cadastrar PRD

O primeiro nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim.

Para configurar o "Cadastrar PRD", deve-se criar um nó de tarefa, vinculado ao fluxo, que contenha a variável `Processo_Fluxo_cadastrarPRD` como sendo de "Escrita" e do tipo "Frame".

#### Transições que saem do nó

### Testar PRD

A transição de saída padrão desse nó é o Testar PRD, que verificará **TO-DO: Qual a sua finalidade?**. Essa transição deve ser criada com a opção "Ocultar" desmarcada.

### Nó de Desvio - Objeto de Cumprimento de PRDs

Para permitir que o usuário finalize a tarefa, deve ser configurada como uma transição de desvio do nó. Essa transição deve ser criada com a opção "Ocultar" marcada.

Atribuir a:  
Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes a **TO-DO:???**.

#### Variáveis

- `Processo_Fluxo_cadastrarPRD` - do tipo frame, de escrita. Essa variável mapeia a tela de cadastro de uma Pena Restritiva de Direito (PDR).

#### Eventos

- **Entrar no nó**  
	**TO-DO:???**
- **Criar tarefa**  
	**TO-DO:???**
- **Testar PRD**  
	O nó de tarefa destina-se à **TO-DO: Qual a sua finalidade?**.

#### Transições que saem do nó

### Aguardar a condição

Será a transição padrão de saída do nó, devendo ser cadastrada com a opção "Ocultar" desmarcada.

Atribuir a:  
Vincular a tarefa à raia que contemple (???) com papéis e localizações equivalentes a (???).

#### Variáveis

- `Processo_Fluxo_testarPRD` - do tipo frame, de escrita.

#### Eventos

**TO-DO:???**

### Aguardar a condição

O nó de tarefa destina-se à **TO-DO: Qual a sua finalidade?**.

#### Transições que saem do nó

## Concluída a pena?

Será a transição padrão de saída do nó, devendo ser cadastrada com a opção "Ocultar" desmarcada.

Atribuir a:  
Vincular a tarefa à raia que contemple (???) com papéis e localizações equivalentes a (???).

#### Variáveis

- `Processo_Fluxo_aguardarCondicao` - do tipo frame, de escrita.

#### Eventos

**TO-DO:???**

#### Concluída a pena?

Esse nó de tarefa destina-se à **TO-DO: Qual a sua finalidade?**.

#### Transições que saem do nó

#### IPC anterior ao prazo?

Será a transição padrão de saída do nó, devendo ser cadastrada com a opção "Ocultar" desmarcada.

#### Término

Para permitir que o usuário finalize a tarefa, deve ser configurada como uma transição de saída do nó a opção de término imediato.

Atribuir a:  
Vincular a tarefa à raia que contemple (???) com papéis e localizações equivalentes a (???).

#### Variáveis

- `Processo_Fluxo_concluidaPena` - do tipo frame, de escrita.

#### Eventos

**TO-DO:???**

### IPC anterior ao prazo?

Esse nó de decisão é responsável por encaminhar o processo para Analisar Cumprimento no caso de todas as ICPs estejam dentro do prazo, ou para retorno para "Aguardar condição", quando a IPC estiver com seu prazo vencido.

Ele deve ser criado contendo a seguinte expressão:

**TO-DO: EL???**

#### Transições que saem do nó

### Analisar Cumprimento

O nó de tarefa deve ser criado com a opção "Ocultar" desmarcada.

### Aguardar a condição

Se as IPCs estiverem fora do prazo, o processo retorna para esse nó de tarefa. Essa transição deve ser criada com a opção "Ocultar" desmarcada.

### Analisar Cumprimento

Esse nó de tarefa destina-se à **TO-DO: Qual a sua finalidade?**.

#### Transições que saem do nó

#### Cumpridec

Será a transição padrão de saída do nó, devendo ser cadastrada com a opção "Ocultar" desmarcada.

Atribuir a:  
Vincular a tarefa à raia que contemple (???) com papéis e localizações equivalentes a (???).

#### Variáveis

- `Processo_Fluxo_analisarCumprimento` - do tipo frame, de escrita.

#### Eventos

**TO-DO:???**

#### Cumpridec

É um nó de processo para iniciar o cumprimento de decisão do magistrado, logo após o nó Analisar Cumprimento.

#### Transições que saem do nó

#### Verificar Problemas TO-DO

#### Aguardar a condição TO-DO

#### Verificar Problemas

Esse nó de sistema é responsável por finalizar a ação do cumprimento das PRD.

### Transições

#### Término

#### Eventos

#### Entrar no nó

**TO-DO:???**

### Término

Ao criar um fluxo, o nó de término, assim como o nó inicial, já vem previamente configurado. Para configurar um nó de término via interface do PJe, deve-se selecionar um "Nó final".

## Arquivo de Configuração

O administrador do sistema deverá acessar **Configuração → Sistema → Fluxo**. Abaixo temos uma versão do arquivo xml (CRI\_ORD.xml) contendo a definição desse subfluxo:

```xml
<process-definition xmlns="urn:jbpm.org:jpdl-3.2" name="Objeto de Cumprimento de PRDs">
   <description><![CDATA[]]></description>  
   <swimlane name="solicitante">
       <assignment actor-id="#{actor.id}"/>
   </swimlane>  
   <start-state name="Início">
       <task name="Tarefa inicial" swimlane="solicitante"/>
       <transition to="Término" name="Término"/>
       <transition to="Cadastrar PRD" name="Cadastrar PRD"/>
   </start-state>  
   <task-node end-tasks="true" name="Cadastrar PRD">
       <task name="Cadastrar PRD" swimlane="solicitante"/>
       <transition to="Testar PRD" name="Testar PRD"/>
   </task-node>
   <task-node end-tasks="true" name="Testar PRD">
       <task name="Testar PRD" swimlane="solicitante"/>
       <transition to="Informar IP" name="Informar IP"/>
   </task-node>
   <task-node end-tasks="true" name="Informar IP">
       <task name="Informar IP" swimlane="solicitante"/>
       <transition to="Concluida a pena?" name="Concluida a pena?"/>
   </task-node>
   <decision expression="" name="IPC anterior ao prazo?">
       <transition to="Informar IP" name="Informar IP"/>
       <transition to="Analisar Cumprimento" name="Analisar Cumprimento"/>
   </decision>
   <task-node end-tasks="true" name="Concluida a pena?">
       <task name="Concluida a pena?" swimlane="solicitante"/>
       <transition to="IPC anterior ao prazo?" name="IPC anterior ao prazo?"/>
       <transition to="Término" name="Término"/>
   </task-node>
   <task-node end-tasks="true" name="Analisar Cumprimento">
       <task name="Analisar Cumprimento" swimlane="solicitante"/>
       <transition to="Cumpridec" name="Cumpridec"/>
   </task-node>
   <task-node end-tasks="true" name="Verificar Problemas">
       <task name="Verificar Problemas" swimlane="solicitante"/>
       <transition to="Término" name="Término"/>
   </task-node>
   <process-state name="Cumpridec">
       <sub-process name="Cumprimento de decisão do criminal" binding="late"/>
       <transition to="Verificar Problemas" name="Verificar Problemas"/>
       <transition to="Informar IP" name="Informar IP"/>
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
   <event type="process-end">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(executionContext)</script>
   </event>
</process-definition>
```