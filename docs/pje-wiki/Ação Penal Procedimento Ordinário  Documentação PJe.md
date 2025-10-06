---
title: "Ação Penal Procedimento Ordinário | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/A%C3%A7%C3%A3o%20Penal%20Procedimento%20Ordin%C3%A1rio"
author:
published:
created: 2025-09-30
description: "Início"
tags:
  - "clippings"
---
# Ação Penal Procedimento Ordinário | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/A%C3%A7%C3%A3o%20Penal%20Procedimento%20Ordin%C3%A1rio


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20do%20processo%20criminal/#__docusaurus_skipToContent_fallback)

## Ação Penal Procedimento Ordinário

## Início

O nó inicial, que já vem previamente inserido em todos os fluxos do PJe, segue o padrão de todos os nós de início, contendo a transição para o primeiro nó de tarefa configurada com a opção "Ocultar" desmarcada.

#### Transições que saem do nó

- **Houve Rec. Denuncia?**, configurada com a opção "Ocultar" desmarcada.

### Houve Rec. Denuncia?

De acordo com o que foi recebido pelo Rito Receb. Denúncia (???), através desse nó de decisão, o sistema (definir expressão) envia para Providências de citação, caso a denúncia tenha sido devidamente recebida; senão, retorna para o subfluxo de Rito Receb. Denúncia.

#### Transições que saem do nó

- Providências de citação
- Rito Receb. Denúncia

#### Transições que entram no nó

- Rito Receb. Denúncia

### Rito Receb. Denúncia

É um nó de processo para receber uma denúncia. (To-do)

### Providências de citação

É um nó de separação (fork). Nesse nó, devem ser configuradas as transições de saída do nó.

#### Transições que saem do nó

- Citar
- Cumprir Mandado Avulso

### Citar

É um nó de processo para realizar a citação. (To-do)

#### Transições que entram no nó

- Citação Cumpridas
- Cumprir Mandado Avulso

O primeiro nó de tarefa desse fluxo é representado por uma tela já preparada no sistema para esse fim.

Para configurá-lo, deve-se criar um nó de tarefa, vinculado ao fluxo, que contenha a variável "Processo\_Fluxo\_cumprirMandadoAvulso" como sendo de "Escrita" e do tipo "Frame".

A tela vinculada a essa variável permite (???)

#### Transições que saem do nó

- Citação Cumpridas
- Atribuir a

Vincular a tarefa à raia que contemple (???) com papéis e localizações equivalentes a (???).

### Variáveis

- **Processo\_Fluxo\_cumprirMandadoAvulso** - do tipo frame, de escrita. Essa variável mapeia a tela de construção do mandado avulso.

### Eventos

- **Entrar no nó**: ação configurada com expressão como "Reexecutável" - Pode-se restringir a utilização de modelos de documentos específicos através da configuração de expressão pertinente em uma ação no Evento "Entrar no nó". Em princípio, serão exibidos os modelos vinculados ao tipo de documento selecionado. Com a especificação, os modelos são os listados na expressão desde que estejam vinculados ao tipo de documento.
- **Criar tarefa**: ação configurada com expressão como (???)

### Citação Cumpridas

É um nó de junção (join) que, sendo responsável por finalizar o nó de separação criado anteriormente, levará ao término do fluxo, através da configuração de uma transição de saída para o nó de término com a opção "Ocultar" desmarcada.

#### Transições que saem do nó

- Término, configurada com a opção "Ocultar" desmarcada.

### Todos se defenderam?

De acordo com o que foi recebido pelo Citação Cumpridas (???), através desse nó de decisão, o sistema (definir expressão) envia para Verificar Defesa, caso todos os réus tenham se defendido; senão, retorna para (???)

### Verificar Defesa

O nó de tarefa destina-se à verificação das defesas apresentadas.

#### Transições que saem do nó

- Intimar MP
- Decidir sobre instrução
- Atribuir a

Vincular a tarefa à raia que contemple (???) com papéis e localizações equivalentes a (???).

#### Variáveis

- **Processo\_Fluxo\_verificaDefesa** - do tipo frame, de escrita.

### Intimar MP

O nó de tarefa destina-se à intimação do Ministério Público.

#### Transições que saem do nó

- Contar Prazo
- Atribuir a

Vincular a tarefa à raia que contemple (???) com papéis e localizações equivalentes a (???).

### Variáveis

- **Processo\_Fluxo\_intimaMP** - do tipo frame, de escrita.

### Contar Prazo

É um nó de processo para contar o prazo após a execução do nó Intimar MP.

#### Transições que saem do nó

- Contar Prazo
- Decidir sobre instrução

### Julgou?

De acordo com o que foi recebido pelo Decidir sobre instrução (???), através desse nó de decisão, o sistema (definir expressão) envia para Cumpridec, caso todos os réus tenham sido julgados; senão, envia para Recurso.

### Cumpridec

- Recurso
- Término

Ao criar um fluxo, o nó de término, assim como o nó inicial, já vem previamente configurado. Para configurar um nó de término via interface do PJe, deve-se selecionar um "Nó final".

## Arquivo de Configuração

O administrador do sistema deverá acessar Configuração → Sistema → Fluxo. Abaixo temos uma versão do arquivo XML (CRI\_ORD.xml) contendo a definição desse subfluxo:

```xml
<process-definition xmlns="urn:jbpm.org:jpdl-3.2" name="Ação Penal Procedimento Ordinário">
   <description><![CDATA[]]></description>  
   <swimlane name="solicitante">
       <assignment actor-id="#{actor.id}"/>
   </swimlane>  
   <start-state name="Início">
       <task name="Tarefa inicial" swimlane="solicitante"/>
       <transition to="Houve Rec. Denuncia?" name="Houve Rec. Denuncia?"/>
   </start-state>  
   <decision expression="" name="Houve Rec. Denuncia?">
       <transition to="Rito Receb. Denúncia" name="Rito Receb. Denúncia"/>
       <transition to="Separação" name="Separação"/>
   </decision>
   <process-state name="Rito Receb. Denúncia">
       <sub-process name="Cumprimento de decisão" binding="late"/>
       <transition to="Houve Rec. Denuncia?" name="Houve Rec. Denuncia?"/>
   </process-state>
   <fork name="Separação">
       <transition to="Cumprir Mandado Avulso" name="Cumprir Mandado Avulso"/>
       <transition to="Citar" name="Citar"/>
   </fork>
   <task-node end-tasks="true" name="Cumprir Mandado Avulso">
       <task name="Cumprir Mandado Avulso" swimlane="solicitante"/>
       <transition to="Junção" name="Junção"/>
   </task-node>
   <process-state name="Citar">
       <sub-process name="Cumprimento de decisão" binding="late"/>
       <transition to="Junção" name="Junção"/>
   </process-state>
   <join name="Junção">
       <transition to="Todos se defenderam?" name="Todos se defenderam?"/>
   </join>
   <decision expression="" name="Todos se defenderam?">
       <transition to="Verificar Defesa" name="Verificar Defesa"/>
   </decision>
   <task-node end-tasks="true" name="Verificar Defesa">
       <task name="Verificar Defesa" swimlane="solicitante"/>
       <transition to="Intimar MP" name="Intimar MP"/>
       <transition to="Decidir sobre instrução" name="Decidir sobre instrução"/>
   </task-node>
   <task-node end-tasks="true" name="Intimar MP">
       <task name="Intimar MP" swimlane="solicitante"/>
       <transition to="Contar Prazo" name="Contar Prazo"/>
   </task-node>
   <task-node end-tasks="true" name="Contar Prazo">
       <task name="Contar Prazo" swimlane="solicitante"/>
       <transition to="Decidir sobre instrução" name="Decidir sobre instrução"/>
   </task-node>
   <task-node end-tasks="true" name="Decidir sobre instrução">
       <task name="Decidir sobre instrução" swimlane="solicitante"/>
       <transition to="Julgou?" name="Julgou?"/>
   </task-node>
   <decision expression="" name="Julgou?">
       <transition to="Cumpridec" name="Cumpridec"/>
       <transition to="Recurso" name="Recurso"/>
   </decision>
   <process-state name="Cumpridec">
       <sub-process name="Cumprimento de decisão" binding="late"/>
       <transition to="Decidir sobre instrução" name="Decidir sobre instrução"/>
   </process-state>
   <process-state name="Recurso">
       <sub-process name="Recurso" binding="late"/>
       <transition to="Término" name="Término"/>
   </process-state>
   <end-state name="Término"/>  
   <event type="node-enter">
       <script>br.com.infox.ibpm.util.JbpmEvents.raiseEvent(execution.getId(), event);</script>
   </event>
</process-definition>
```