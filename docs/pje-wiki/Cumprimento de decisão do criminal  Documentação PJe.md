---
title: "Cumprimento de decisão do criminal | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20e%20subfluxos%20principais/Cumprimento%20de%20decis%C3%A3o%20do%20criminal"
author:
published:
created: 2025-09-30
description: "Configuração dos Nós"
tags:
  - "clippings"
---
# Cumprimento de decisão do criminal | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20e%20subfluxos%20principais/Cumprimento%20de%20decis%C3%A3o%20do%20criminal


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20e%20subfluxos%20principais/#__docusaurus_skipToContent_fallback)

## Cumprimento de decisão do criminal

## Configuração dos Nós

## Início

O nó inicial, que já vem previamente inserido em todos os fluxos do PJe, segue o padrão de todos os nós de início, contendo a transição para o primeiro nó de tarefa configurada com a opção "Ocultar" desmarcada.

#### Transições que saem do nó

- Cumprir determinações
- Aguardar realização de leilão
- Juntar atos do leilão
- Perícia
- Realizar bloqueio de ativos
- Testa existência de bloqueio total
- Realizar audiência
- Liberar ativos financeiros do devedor
- Testa problema na liberação
- Criar variável de conclusão para decisão
- Lavrar termo de penhora
- Avaliar bens
- Redistribuir processo
- Apensar processos
- Criar variável redistribuído
- Expedir documentos
- Intimar de decisão
- Aguardar prazos para manifestação
- Designar audiência
- Intimar da audiência designada

## Término

Ao criar um fluxo, o nó de término, assim como o nó inicial, já vem previamente configurado. Para configurar um nó de término via interface do PJe, deve-se selecionar um "Nó final".

## Arquivo de Configuração

O administrador do sistema deverá acessar Configuração → Sistema → Fluxo. Abaixo temos uma versão do arquivo XML (`CUMPRIDEC_CRI.xml`) contendo a definição desse subfluxo:

```xml
<process-definition xmlns="urn:jbpm.org:jpdl-3.2" name="Cumprimento de decisão do criminal">
   <description><![CDATA[Fluxo destinado a permitir o cumprimento de decisões de magistrados, inclusive eventuais determinações de redistribuições.]]></description>  
   <swimlane name="Nó de Desvio - Cumprimento de decisão do criminal">
       <assignment pooled-actors="#{localizacaoAssignment.getPooledActors('-1:1338,1342:1469')}"/>
   </swimlane>
   <swimlane name="Secretaria">
       <assignment pooled-actors="#{localizacaoAssignment.getPooledActors('6:1338')}"/>
   </swimlane>  
   <start-state name="Início">
       <task name="Tarefa inicial" swimlane="Secretaria"/>
       <transition to="Cumprir determinações" name="Cumprir determinações"/>
   </start-state>  
   <task-node end-tasks="true" name="Cumprir determinações">
       <task name="Cumprir determinações" swimlane="Secretaria">
           <controller>
               <variable name="Processo_Fluxo_visualizarDecisao" mapped-name="frame:Processo_Fluxo_visualizarDecisao" access="read,write"/>
               <variable name="MovimentarLote" mapped-name="movimentarLote:MovimentarLote" access="read,write"/>
           </controller>
       </task>
       <transition to="Retificar dados do processo" name="Retificar dados do processo"/>
       <transition to="Redistribuir processo" name="Redistribuir processo"/>
       <transition to="Apensar processos" name="Apensar processos"/>
       <transition to="Designar audiência" name="Designar audiência"/>
       <transition to="Intimar de decisão" name="Intimar de decisão"/>
       <transition to="Término" name="Nada mais a cumprir"/>
       <transition to="Lavrar termo de penhora" name="Lavrar termo de penhora"/>
       <transition to="Aguardar prazos para manifestação" name="Aguardar prazos ainda pendentes"/>
       <transition to="Expedir documentos" name="Expedir documentos"/>
       <transition to="Avaliar bens" name="Avaliar bens"/>
       <transition to="Aguardar realização de leilão" name="Aguardar realização de leilão"/>
       <transition to="Juntar atos do leilão" name="Juntar atos do leilão"/>
       <transition to="Realizar audiência" name="Realizar audiência"/>
       <transition to="Realizar bloqueio de ativos" name="Realizar bloqueio de ativos"/>
       <transition to="Liberar ativos financeiros do devedor" name="Liberar ativos financeiros do devedor"/>
       <transition to="Nó de Desvio - Cumprimento de decisão do criminal" name="Nó de Desvio - Cumprimento de decisão do criminal">
           <condition expression="#{true}"/>
       </transition>
       <transition to="Perícia" name="Perícia"/>
   </task-node>
   <task-node end-tasks="true" name="Realizar audiência">
       <task name="Realizar audiência" swimlane="Secretaria">
           <controller>
               <variable name="Processo_Fluxo_abaDesignarAudiencia" mapped-name="frame:Processo_Fluxo_abaDesignarAudiencia" access="read,write"/>
               <variable name="MovimentarLote" mapped-name="movimentarLote:MovimentarLote" access="read,write"/>
           </controller>
       </task>
       <transition to="Cumprir determinações" name="Cumprir determinações"/>
       <transition to="Término" name="Nada mais a cumprir"/>
       <transition to="Nó de Desvio - Cumprimento de decisão do criminal" name="Nó de Desvio - Cumprimento de decisão do criminal">
           <condition expression="#{true}"/>
       </transition>
   </task-node>
   <process-state name="Expedir documentos">
       <sub-process name="Preparar ato de cartório" binding="late"/>
       <transition to="Cumprir determinações" name="Cumprir determinações"/>
   </process-state>
   <task-node end-tasks="true" name="Retificar dados do processo">
       <task name="Retificar dados do processo" swimlane="Secretaria">
           <controller>
               <variable name="Processo_RetificacaoAutuacao_updateRetificacaoAutuacao" mapped-name="page:Processo_RetificacaoAutuacao_updateRetificacaoAutuacao" access="read,write"/>
               <variable name="MovimentarLote" mapped-name="movimentarLote:MovimentarLote" access="read,write"/>
           </controller>
       </task>
       <transition to="Cumprir determinações" name="Cumprir determinações"/>
       <transition to="Término" name="Nada mais a cumprir"/>
       <transition to="Nó de Desvio - Cumprimento de decisão do criminal" name="Nó de Desvio - Cumprimento de decisão do criminal">
           <condition expression="#{true}"/>
       </transition>
   </task-node>
   <task-node end-tasks="true" name="Redistribuir processo">
       <task name="Redistribuir processo" swimlane="Secretaria">
           <controller>
               <variable name="Processo_Fluxo_abaRedistribuicaoProcesso" mapped-name="frame:Processo_Fluxo_abaRedistribuicaoProcesso" access="read,write"/>
               <variable name="MovimentarLote" mapped-name="movimentarLote:MovimentarLote" access="read,write"/>
           </controller>
       </task>
       <transition to="Cumprir determinações" name="Cumprir determinações"/>
       <transition to="Criar variável redistribuído" name="Criar variável redistribuído">
           <condition expression="#{true}"/>
       </transition>
       <transition to="Nó de Desvio - Cumprimento de decisão do criminal" name="Nó de Desvio - Cumprimento de decisão do criminal">
           <condition expression="#{true}"/>
       </transition>
       <event type="task-create">
           <action name="upd" expression="#{tramitacaoProcessualService.gravaVariavel('frameDefaultLeavingTransition', 'Criar variável redistribuído')}"/>
       </event>
   </task-node>
   <node name="Criar variável redistribuído">
       <transition to="Término" name="Término"/>
       <event type="node-leave">
           <action expression="#{tramitacaoProcessualService.gravaVariavel('pje:fluxo:redistribuido', true)}"/>
       </event>
   </node>
   <process-state name="Intimar de decisão">
       <sub-process name="Preparar ato de comunicação" binding="late"/>
       <transition to="Aguardar prazos para manifestação" name="Aguardar prazos para manifestação"/>
   </process-state>
   <process-state name="Aguardar prazos para manifestação">
       <sub-process name="Controle de prazos" binding="late"/>
       <transition to="Término" name="Nada mais a cumprir"/>
   </process-state>
   <task-node end-tasks="true" name="Apensar processos">
       <task name="Apensar processos" swimlane="Secretaria">
           <controller>
               <variable name="Processo_Fluxo_associarProcessos" mapped-name="frame:Processo_Fluxo_associarProcessos" access="read,write"/>
               <variable name="MovimentarLote" mapped-name="movimentarLote:MovimentarLote" access="read,write"/>
           </controller>
       </task>
       <transition to="Cumprir determinações" name="Cumprir determinações"/>
       <transition to="Término" name="Nada mais a cumprir"/>
       <transition to="Nó de Desvio - Cumprimento de decisão do criminal" name="Nó de Desvio - Cumprimento de decisão do criminal">
           <condition expression="#{true}"/>
       </transition>
   </task-node>
   <task-node end-tasks="true" name="Designar audiência">
       <task name="Designar audiência" swimlane="Secretaria">
           <controller>
               <variable name="Processo_Fluxo_abaDesignarAudiencia" mapped-name="frame:Processo_Fluxo_abaDesignarAudiencia" access="read,write"/>
               <variable name="MovimentarLote" mapped-name="movimentarLote:MovimentarLote" access="read,write"/>
           </controller>
       </task>
       <transition to="Término" name="Nada mais a cumprir"/>
       <transition to="Nó de Desvio - Cumprimento de decisão do criminal" name="Nó de Desvio - Cumprimento de decisão do criminal">
           <condition expression="#{true}"/>
       </transition>
   </task-node>
   <task-node end-tasks="true" name="Lavrar termo de penhora">
       <task name="Lavrar termo de penhora" swimlane="Secretaria">
           <controller>
               <variable name="Processo_Fluxo_lavrarTermoPenhora" mapped-name="frame:Processo_Fluxo_lavrarTermoPenhora" access="read,write"/>
               <variable name="MovimentarLote" mapped-name="movimentarLote:MovimentarLote" access="read,write"/>
           </controller>
       </task>
       <transition to="Cumprir determinações" name="Cumprir determinações"/>
       <transition to="Término" name="Nada mais a cumprir"/>
       <transition to="Nó de Desvio - Cumprimento de decisão do criminal" name="Nó de Desvio - Cumprimento de decisão do criminal">
           <condition expression="#{true}"/>
       </transition>
   </task-node>
   <task-node end-tasks="true" name="Liberar ativos financeiros do devedor">
       <task name="Liberar ativos financeiros do devedor" swimlane="Secretaria">
           <controller>
               <variable name="Processo_Fluxo_liberarAtivosFinanceiros" mapped-name="frame:Processo_Fluxo_liberarAtivosFinanceiros" access="read,write"/>
               <variable name="MovimentarLote" mapped-name="movimentarLote:MovimentarLote" access="read,write"/>
           </controller>
       </task>
       <transition to="Cumprir determinações" name="Cumprir determinações"/>
       <transition to="Término" name="Nada mais a cumprir"/>
       <transition to="Nó de Desvio - Cumprimento de decisão do criminal" name="Nó de Desvio - Cumprimento de decisão do criminal">
           <condition expression="#{true}"/>
       </transition>
   </task-node>
   <task-node end-tasks="true" name="Realizar bloqueio de ativos">
       <task name="Realizar bloqueio de ativos" swimlane="Secretaria">
           <controller>
               <variable name="Processo_Fluxo_bloquearAtivos" mapped-name="frame:Processo_Fluxo_bloquearAtivos" access="read,write"/>
               <variable name="MovimentarLote" mapped-name="movimentarLote:MovimentarLote" access="read,write"/>
           </controller>
       </task>
       <transition to="Cumprir determinações" name="Cumprir determinações"/>
       <transition to="Término" name="Nada mais a cumprir"/>
       <transition to="Nó de Desvio - Cumprimento de decisão do criminal" name="Nó de Desvio - Cumprimento de decisão do criminal">
           <condition expression="#{true}"/>
       </transition>
   </task-node>
   <task-node end-tasks="true" name="Perícia">
       <task name="Perícia" swimlane="Secretaria">
           <controller>
               <variable name="Processo_Fluxo_abaPericia" mapped-name="frame:Processo_Fluxo_abaPericia" access="read,write"/>
               <variable name="MovimentarLote" mapped-name="movimentarLote:MovimentarLote" access="read,write"/>
           </controller>
       </task>
       <transition to="Cumprir determinações" name="Cumprir determinações"/>
       <transition to="Término" name="Nada mais a cumprir"/>
       <transition to="Nó de Desvio - Cumprimento de decisão do criminal" name="Nó de Desvio - Cumprimento de decisão do criminal">
           <condition expression="#{true}"/>
       </transition>
   </task-node>
</process-definition>
```