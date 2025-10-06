---
title: "Auto de prisão em flagrante | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Auto%20de%20pris%C3%A3o%20em%20flagrante"
author:
published:
created: 2025-09-30
description: "Configuração dos Nós"
tags:
  - "clippings"
---
# Auto de prisão em flagrante | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/Auto%20de%20pris%C3%A3o%20em%20flagrante


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/#__docusaurus_skipToContent_fallback)

## Auto de prisão em flagrante

## Configuração dos Nós

### Início

O nó inicial, que já vem previamente inserido em todos os fluxos do PJe, segue o padrão de todos os nós de início, contendo a transição para o primeiro nó de tarefa configurada com a opção "Ocultar" desmarcada.

#### Transições que saem do nó

### Vista ao MP?

O primeiro nó de tarefa desse fluxo, denominado "Vista ao MP?", é representado por uma tela já preparada no sistema para esse fim. É a tarefa onde **TO-DO: Definições!!!**

Para configurar a "Vista ao MP?", deve-se criar um nó de tarefa vinculado ao fluxo que contenha a variável `Processo_Fluxo_visitaMP` como sendo de "Escrita" e do tipo "Editor".

O nó de tarefa tem os eventos "Entrar no nó", "Sair do nó" e "Iniciar tarefa" vinculados. **TO-DO: Quais eventos???**

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes a **TO-DO: Quais papéis???**

#### Transições que saem do nó

#### Preparar decisão inicial em flagrante

A transição de saída padrão desse nó é o processo "Preparar decisão inicial em flagrante", que permitirá **TO-DO: Definições!!!**. Essa transição deve ser criada com a opção "Ocultar" desmarcada.

#### Vista ao MP

**TO-DO: Definições!!!**

#### Variáveis

- `Processo_Fluxo_visitaMP`, do tipo editor, de escrita.

#### Eventos

**TO-DO: Quais eventos???**

#### Preparar decisão inicial em flagrante

É um nó de processo para realizar a decisão da prisão em flagrante, logo após a execução do nó Vista ao MP?

#### Transições que saem do nó

#### Houve decisão para todos ou parte dos réus?

Eventos

**TO-DO: Quais eventos???**

#### Houve decisão para todos ou parte dos réus?

De acordo com o que foi recebido pelo Preparar decisão inicial em flagrante (???), através desse nó de decisão, o sistema, por meio da expressão `#{verificaEventoAction.verificarEventos(146, 175)?'Houve concessão de liberdade de provisória?':'Vista ao MP'}`, envia para o nó de decisão "Expedir alvará de soltura ou mandado de prisão?", caso haja decisão, senão retorna para o subfluxo de Visita ao MP.

#### Transições que saem do nó

- Expedir alvará de soltura ou mandado de prisão?
- Vista ao MP

#### Transições que entram no nó

- Preparar decisão inicial em flagrante
- Expedir alvará de soltura ou mandado de prisão?

Deve ser configurado como um nó de decisão. Verifica se houve um mandado de prisão, sendo encaminhado para Providências de prisão. No entanto, para efetuar a soltura do réu, o processo será direcionado para Expedir alvará de soltura com ou sem condições.

O nó deve ser cadastrado com a **TO-DO: Expressão???**

#### Transições

- Providências de prisão, nó de encaminhamento para o cadastro de prisão
- Expedir alvará de soltura com ou sem condições, nó de processo para efetuar a soltura do réu

### Expedir alvará de soltura com ou sem condições

É um nó de processo que criará o documento responsável por expedir um mandado de soltura para o réu, sendo efetuado logo após a execução do nó Expedir alvará de soltura ou mandado de prisão?

#### Transições que saem do nó

- Aguardar cumprimento do alvará

#### Providências de prisão

É um nó de separação (fork). Nesse nó, devem ser configuradas as transições de saída do nó.

#### Transições que saem do nó

- Expedir mandado de prisão, configurada com a opção "Ocultar" desmarcada.
- Cadastro de decreto de prisão, configurada com a opção "Ocultar" desmarcada.

#### Transições que chegam ao nó

- Expedir alvará de soltura ou mandado de prisão? **TO-DO:???**

### Cadastro de decreto de prisão

O nó de tarefa permite ao usuário a escolha de uma Informação Processual Complementar (IPC) e seu respectivo cadastro no sistema.

#### Transições que saem do nó

- Finalizar providências de prisão

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes a **TO-DO: Quais papéis???**

#### Variáveis

- `Processo_Fluxo_ip_ip` - do tipo frame, de escrita. Essa variável mapeia a tela para o cadastro dos tipos de IPCs disponíveis. **TO-DO: Validar!!!**

#### Eventos

- Criar tarefa **TO-DO: Validar!!!**
- ação configurada com expressão como "Reexecutável" - Pode-se restringir as IPCs por meio da expressão

`#{tramitacaoProcessualService.gravaVariavelTarefa('pje:fluxo:inserirInformacaoProcessual:tiposIPCs','PRI')}`.

### Expedir mandado de prisão

É um nó de processo que criará o documento responsável por solicitar a prisão do réu, sendo efetuado logo após a execução do nó Providências de prisão.

#### Transições que saem do nó

- Finalizar providências de prisão
- Aguardar cumprimento do alvará

#### É um nó de processo que TO-DO: Definições???, sendo efetuado logo após a execução do nó Expedir alvará de soltura com ou sem condições.

#### Transições que saem do nó

- A liberdade foi mediante condições

### Finalizar providências de prisão

É um nó de junção (join) que, sendo responsável por finalizar o nó de separação criado anteriormente, levará ao término do fluxo, através da configuração de uma transição de saída para o nó de arquivo, com a opção "Ocultar" desmarcada.

#### Transições que saem do nó

- Arquivo, configurada com a opção "Ocultar" desmarcada.

### A liberdade foi mediante condições

Deve ser configurado como um nó de sistema. Esse nó deve **TO-DO: Definições???**

#### Transições que saem do nó

- Arquivo

#### Eventos

- Entrar no nó
- Ação - **TO-DO: Eventos???**

#### Arquivo

É um nó de processo que arquiva o processo em questão.

#### Transições que chegam ao nó

- A liberdade foi mediante condições
- Aguardar cumprimento do alvará
- Finalizar providências de prisão

#### Transições que saem do nó

- Término

#### Eventos

**TO-DO: Há eventos???**

#### Término

Ao criar um fluxo, o nó de término, assim como o nó inicial, já vem previamente configurado. Para configurar um nó de término via interface do PJe, deve-se selecionar um "Nó final".

## Arquivo de Configuração

O administrador do sistema deverá acessar **Configuração → Sistema → Fluxo**. Abaixo temos uma versão do arquivo xml (CRI\_APF.xml) contendo a definição desse subfluxo:

```xml
<process-definition xmlns="urn:jbpm.org:jpdl-3.2" name="Auto de prisão e m flagrante">
   <description><![CDATA[]]></description>  
   <swimlane name="Nó de Desvio - Auto de prisão e m flagrante">
       <assignment pooled-actors="#{localizacaoAssignment.getPooledActors('-1:1338,1342:1469')}"/>
   </swimlane>
   <swimlane name="Nó de Desvio - Auto de prisão em flagrante">
       <assignment pooled-actors="#{localizacaoAssignment.getPooledActors('-1:1338,1342:1469')}"/>
   </swimlane>
   <swimlane name="solicitante">
       <assignment actor-id="#{actor.id}"/>
   </swimlane>  
   <start-state name="Início">
       <task name="Tarefa inicial"/>
       <transition to="Vista ao MP?" name="Vista ao MP?"/>
   </start-state>  
   <task-node end-tasks="true" name="Vista ao MP?">
       <task name="Vista ao MP?" swimlane="solicitante"/>
       <transition to="Vista ao MP" name="Vista ao MP"/>
       <transition to="Preparar decisão inicial em flagrante" name="Preparar decisão inicial em flagrante"/>
       <transition to="Nó de Desvio - Auto de prisão e m flagrante" name="Nó de Desvio - Auto de prisão e m flagrante">
           <condition expression="#{true}"/>
       </transition>
   </task-node>
   <process-state name="Vista ao MP">
       <sub-process name="Controle de prazos" binding="late"/>
       <transition to="Preparar decisão inicial em flagrante" name="Preparar decisão inicial em flagrante"/>
       <event type="before-signal">
           <action expression="#{mapear intimação automática e movimento}"/>
       </event>
   </process-state>
   <process-state name="Preparar decisão inicial em flagrante">
       <sub-process name="Controle de prazos" binding="late"/>
       <event type="before-signal">
           <action expression="#{mapear intimação automática e movimento}"/>
       </event>
   </process-state>
   <end-state name="Fim"/>
</process-definition>
```