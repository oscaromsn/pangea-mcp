---
title: "Preparar ato de comunicação | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Preparar%20ato%20de%20comunica%C3%A7%C3%A3o"
author:
published:
created: 2025-09-30
description: "Configuração dos nós"
tags:
  - "clippings"
---
# Preparar ato de comunicação | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/Preparar%20ato%20de%20comunica%C3%A7%C3%A3o


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Fluxos%20da%20tramita%C3%A7%C3%A3o%20dos%20processos%20do%20CNJ/#__docusaurus_skipToContent_fallback)

## Preparar ato de comunicação

## Configuração dos nós

## Início

O nó inicial, que já vem previamente inserido em todos os fluxos do PJe, segue o padrão de todos os nós de início, contendo a transição para o primeiro nó de tarefa configurada com a opção "Ocultar" desmarcada. Através da opção "Atribuir a", deve-se vincular a tarefa a uma raia que contenha papéis e localizações os quais se deseja que tenham acesso à tarefa criada.

#### Transições que saem do nó

- **Preparar comunicação:** configurada com a opção "Ocultar" desmarcada.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes a Escrivão/Diretor de secretaria/Secretário jurídico.

## Preparar comunicação

O primeiro nó de tarefa desse fluxo, denominado "Preparar comunicação", é representado por uma tela já preparada no sistema para esse fim.

Para configurar o "Preparar comunicação", deve-se criar um nó de tarefa, vinculado ao fluxo, que contenha a variável "Processo\_Fluxo\_prepararExpediente" como sendo de "Escrita" e do tipo "Frame". A tela vinculada a essa variável permite a escolha dos destinatários, com seus respectivos tipos e meios de comunicação, tipos de prazo, endereços e a vinculação do expediente em si, com possibilidade de vinculação de documentos do processo e posterior assinatura. Os tipos de comunicação são, na verdade, tipos de documentos. Caso não seja explicitado pela configuração de forma diferente, os tipos de documentos da lista serão todos que estiverem ativos e cuja visibilidade seja interna ou ambos. Em geral, os tipos disponíveis recomendados pelas orientações de configuração são "Intimação", "Notificação", "Citação" e "Intimação de pauta", conforme explicaremos em seguida, na configuração dos eventos. Os meios de comunicação podem ser restringidos por expressão, conforme orientações mais adiante, mas obedecem à restrição RN501 quanto à exibição do meio eletrônico ('Enviar via sistema'). Pode-se também agrupar expedientes, de acordo com a lista de agrupadores disponíveis conforme regra RN61, fazendo com que sejam enviados expedientes individualmente para as partes, mas que estes apontem para um mesmo documento produzido e enviado para estas partes. Através da opção "Atribuir a", deve-se vincular o nó de tarefa a uma raia que contenha papéis e localizações os quais se deseja que tenham acesso à tarefa criada.

### Outras regras relacionadas à variável "Processo\_Fluxo\_prepararExpediente"

- RI273

#### Transições que saem do nó

- **ForkComunicacao:** A transição de saída padrão desse nó é o ForkComunicacao, que verificará o destino de acordo com o tipo de comunicação selecionado. Essa transição deve ser criada com a opção "Ocultar" marcada.
- **Término:** Para permitir que o usuário finalize a tarefa sem intimar, deve ser configurada como uma transição de saída do nó a opção de término imediato, apontando para a tarefa respectiva.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes a Escrivão/Diretor de secretaria/Secretário jurídico.

#### Variáveis

- **Processo\_Fluxo\_prepararExpediente:** do tipo frame, de escrita. Essa variável mapeia a tela de construção do expediente.

#### Eventos

- **Entrar no nó:** ação configurada com expressão como "Reexecutável" - Pode-se restringir a utilização de modelos de documentos específicos através da configuração de expressão pertinente em uma ação no Evento "Entrar no nó". Em princípio, serão exibidos os modelos vinculados ao tipo de documento selecionado. Com a especificação, os modelos são os listados na expressão desde que estejam vinculados ao tipo de documento.
- **Criar tarefa:** ação configurada com expressão como "Reexecutável" - Transição de saída padrão - deve-se configurar a transição de saída padrão para o nó de separação.
- **Criar tarefa:** ação configurada com expressão como "Reexecutável" - Pode-se restringir os tipos de comunicação, ou seja, tipos de documentos passíveis de serem utilizados através de expressão pertinente. Os tipos listados serão os ativos cujos tipos foram passados como parâmetro na expressão. Conforme dito anteriormente, caso não seja explicitado pela configuração de forma diferente, os tipos de documentos da lista serão todos que estiverem ativos e cuja visibilidade seja interna ou ambos.
- **Criar tarefa:** ação configurada com expressão como "Reexecutável" - Pode-se restringir os meios de comunicação passíveis de serem utilizados através de expressão pertinente. Ao utilizar as opções de Telefone ou Pessoalmente, o sistema permite intimação na própria secretaria.

### ForkComunicacao

É um nó de separação (fork). Nesse nó, devem ser configuradas as transições de saída do nó.

#### Transições que saem do nó

- **É mandado?** configurada com a opção "Ocultar" desmarcada.
- **É DJE?** configurada com a opção "Ocultar" desmarcada.
- **É Correios?** configurada com a opção "Ocultar" desmarcada.
- **É carta?** configurada com a opção "Ocultar" desmarcada.
- **É sistema?** configurada com a opção "Ocultar" desmarcada.
- **É telefone ou pessoal?** configurada com a opção "Ocultar" desmarcada.

### JoinComunicacao

É um nó de junção (join) que, sendo responsável por finalizar o nó de separação criado anteriormente, levará ao término do fluxo, através da configuração de uma transição de saída para o nó de término com a opção "Ocultar" desmarcada.

#### Transições que saem do nó

- **Término:** configurada com a opção "Ocultar" desmarcada.

### É mandado?

Deve ser configurado como um nó de decisão. De acordo com o selecionado no Preparar comunicação, o sistema verifica se a comunicação é por mandado para posterior verificação de uma ou mais centrais de mandados disponíveis.

#### Transições que saem do nó

- **JoinComunicacao**
- **Tem uma central?**

### Tem uma central?

Deve ser configurado como um nó de decisão. Verifica se há mais de uma central de mandado disponível para encaminhamento para o nó de seleção da central. Quando há apenas uma central disponível, o sistema não direciona para a tarefa de seleção, mas para a tarefa de encaminhamento para a central existente.

O nó deve ser cadastrado com a expressão correspondente.

#### Transições

- **Encaminhar central de mandados:** nó de encaminhamento para a central.
- **Selecionar central de mandados:** nó de seleção da central de mandados.

### Selecionar central de mandados

Nó de tarefa que possibilita a seleção de uma central.

#### Transições que saem do nó

- **Encaminhar central de mandados:** Configuração da transição de saída do nó.

#### Atribuir a

Vincular a tarefa à raia que contemple serventuários da justiça com papéis e localizações equivalentes a Escrivão/Diretor de secretaria/Secretário jurídico.

#### Variáveis

- **Processo\_Fluxo\_expedientes\_centralmandados:** do tipo frame, de escrita. Essa variável mapeia a tela de seleção da central de mandados.

#### Eventos

- **Criar tarefa:** Deve ser criado o evento para configurar a transição de saída padrão do nó, que deve ser o encaminhamento para a central de mandados, contendo a expressão de vinculação da saída padrão da tarefa configurada para 'Encaminhar central mandados'.

### Encaminhar central de mandados

Esse nó de sistema é responsável por enviar o expediente para a central escolhida previamente.

#### Transições

- **JoinComunicacao**

#### Eventos

- **Entrar no nó:** Ao entrar no nó, deve ser executada a ação de envio de expediente e lançamento do movimento.

### É DJE?

De acordo com o selecionado no Preparar comunicação, através desse nó de decisão, o sistema verifica se a comunicação é por diário para envio do expediente para registro de movimentação.

#### Transições que saem do nó

- **Registra expedição de documento**
- **JoinComunicacao**

### Registrar expedição de documento

Deve ser configurado como um nó de sistema. Esse nó deve enviar registrar o movimento de expedição de documento.

#### Transições que saem do nó

- **Deve registrar ciência?**

#### Eventos

- **Entrar no nó:** Ação - Deve-se criar expressão que lançará o movimento associado ao envio de outros documentos.

### É Correios?

De acordo com o selecionado no Preparar comunicação, através desse nó de decisão, o sistema verifica se a comunicação é por Correios, enviando o expediente para impressão.

#### Transições que saem do nó

- **Registra expedição de AR**
- **JoinComunicacao**

### Registrar expedição de AR

Deve ser configurado como um nó de sistema. Esse nó deve enviar o expediente para os Correios e registrar o movimento de expedição de documento.

#### Transições que saem do nó

- **Imprimir correspondência**

#### Eventos

- **Entrar no nó:** Deve ser criado o evento para registrar o movimento de expedição de AR.

### Imprimir correspondência

Deve ser configurado como um nó de sistema. Esse nó deve enviar o expediente para impressão de correspondência.

#### Transições que saem do nó

- **Deve registrar ciência?**

#### Eventos

- **Entrar no nó:** Deve ser criado o evento para registrar o movimento de impressão de correspondência.

### É carta?

De acordo com o selecionado no Preparar comunicação, através desse nó de decisão, o sistema verifica se a comunicação é por carta para envio de expediente para impressão.

#### Transições que saem do nó

- **Registrar expedição de documento**
- **JoinComunicacao**

### Registrar expedição de documento

Deve ser configurado como um nó de sistema. Esse nó deve enviar a carta para a parte e registrar o movimento de expedição de documento.

#### Transições que saem do nó

- **Deve registrar ciência?**

#### Eventos

- **Entrar no nó:** Ao entrar no nó, deve ser executada a ação de envio de expediente e lançamento do movimento.

### É sistema?

De acordo com o selecionado no Preparar comunicação, através desse nó de decisão, o sistema verifica se a comunicação é por sistema, para registro da expedição de documento e ciência no sistema, caso aplicável.

#### Transições que saem do nó

- **Registrar expedição de documento**
- **JoinComunicacao**

### Registrar expedição de documento

Deve ser configurado como um nó de sistema. Esse nó deve registrar o movimento de expedição de documento.

#### Transições que saem do nó

- **Registrar ciência no sistema**

#### Eventos

- **Entrar no nó:** Ao entrar no nó, deve ser executada a ação de envio de expediente e lançamento do movimento.

### Registrar ciência no sistema

Deve ser configurado como um nó de sistema. Esse nó deve registrar a ciência do destinatário no sistema.

#### Transições que saem do nó

- **JoinComunicacao**

#### Eventos

- **Entrar no nó:** Ao entrar no nó, deve ser executada a ação de registro de ciência.

### É telefone ou pessoal?

De acordo com o selecionado no Preparar comunicação, através desse nó de decisão, o sistema verifica se a comunicação é por telefone ou pessoal, para registro de expedição de documento e ciência.

#### Transições que saem do nó

- **Registrar ciência pessoal ou telefone**
- **JoinComunicacao**

### Registrar ciência pessoal ou telefone

Deve ser configurado como um nó de sistema. Esse nó deve registrar a ciência do destinatário via telefone ou pessoalmente.

#### Transições que saem do nó

- **JoinComunicacao**

#### Eventos

- **Entrar no nó:** Ao entrar no nó, deve ser executada a ação de registro de ciência.

## Término

O nó final do fluxo que deve estar configurado como a transição de saída do join, para finalizar o fluxo do processo. Não possui configurações adicionais.

## Arquivo de configuração

Abaixo segue o arquivo xml de configuração do fluxo representado acima. Para eventos de tarefa, eles devem ser configurados manualmente, já que o xml não transportará as informações de configuração. Atentar também para a quebra de linha necessária para visualização do fluxo na wiki, que não deve ser replicada na cópia para a aplicação.

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<process-definition xmlns="urn:jbpm.org:jpdl-3.2" name="Preparar ato de comunicação">
   <description><![CDATA[Fluxo destinado a permitir a realização de um ato de comunicação]]></description>  
   <swimlane name="Nó de Desvio - Preparar ato de comunicação">
       <assignment pooled-actors="#{localizacaoAssignment.getPooledActors('5:1338,5:1469')}"/>
   </swimlane>
   <swimlane name="Secretaria">
       <assignment pooled-actors="#{localizacaoAssignment.getPooledActors('5:1338,5:5483')}" actor-id="#{actor.id}"/>
   </swimlane>  
   <start-state name="Início">
       <task name="Tarefa inicial" swimlane="Secretaria"/>
       <transition to="Preparar comunicação" name="Preparar comunicação"/>
   </start-state>  
   <task-node end-tasks="true" name="Preparar comunicação">
       <task name="Preparar comunicação" swimlane="Secretaria">
           <controller>
               <variable name="Processo_Fluxo_prepararExpediente" mapped-name="frame:Processo_Fluxo_prepararExpediente" 
                 access="read,write"/>
           </controller>
       </task>
       <description><![CDATA[]]></description>
       <transition to="ForkComunicacao" name="ForkComunicacao">
           <condition expression="#{true}"/>
       </transition>
       <transition to="Término" name="Não intimar"/>
       <transition to="Nó de Desvio - Preparar ato de comunicação" name="Nó de Desvio - Preparar ato de comunicação">
           <condition expression="#{true}"/>
       </transition>
       <event type="node-enter">
           <action name="upd" expression="#{modeloDocumento.set('Processo_Fluxo_prepararExpediente',60,69,65,71)}"/>
       </event>
       <event type="task-create">
           <action name="upd" expression="#{taskInstanceUtil.setFrameDefaultTransition('ForkComunicacao')}"/>
           <action name="upd" expression="#{taskInstanceUtil.setVariable('tiposDisponiveisIds','60,69,65,71')} "/>
           <action name="upd" expression="#{preparaAtoComunicacaoAction.setMeiosComunicacao('P,E,C,L,M,T,S')}"/>
       </event>
   </task-node>
   <fork name="ForkComunicacao">
       <description><![CDATA[]]></description>
       <transition to="É DJE?" name="É DJE?"/>
       <transition to="É mandado?" name="Publicar DJE"/>
       <transition to="É Correios?" name="É Correios?"/>
       <transition to="É carta?" name="É carta?"/>
       <transition to="É sistema?" name="É sistema?"/>
       <transition to="É telefone ou pessoal?" name="É telefone ou pessoal?"/>
   </fork>
   <decision expression="#{comunicacaoProcessualAction.getExpedientesTelefone().size() > 0 or 
      comunicacaoProcessualAction.getExpedientesPessoal().size() > 0 ? 'Registrar expedição de documento' : 
      'JoinComunicacao'}" name="É telefone ou pessoal?">
       <description><![CDATA[]]></description>
       <transition to="JoinComunicacao" name="JoinComunicacao"/>
       <transition to="Registrar expedição de documento" name="Registrar expedição de documento"/>
   </decision>
   <node name="Registrar ciência">
       <transition to="JoinComunicacao" name="JoinComunicacao"/>
       <event type="node-enter">
           <action expression="#{comunicacaoProcessualAction.registrarCienciaExpedientePessoal()}"/>
       </event>
   </node>
   <decision expression="#{comunicacaoProcessualAction.getExpedientesEletronico().size() > 0 ? 'Encaminhar via sistema' : 
     'JoinComunicacao'}" name="É sistema?">
       <transition to="JoinComunicacao" name="JoinComunicacao"/>
       <transition to="Encaminhar via sistema" name="Encaminhar via sistema"/>
   </decision>
   <node name="Encaminhar via sistema">
       <transition to="JoinComunicacao" name="JoinComunicacao"/>
       <event type="node-enter">
           <action expression="#{comunicacaoProcessualAction.enviarExpedientesLancarMovimentos('E', 'processoExpedienteAtual',
                    '#{preencherMovimento.deCodigo(60).associarAoDocumento(processoExpedienteAtual.getProcessoDocumento()).
                    comComplementoDeCodigo(4).doTipoDominio().preencherComElementoDeCodigo(80).lancarMovimento()}')}"/>
       </event>
   </node>
   <decision expression="#{comunicacaoProcessualAction.getExpedientesDiario().size() > 0 ? 'Registrar expedição de documento' : 
     'JoinComunicacao'}" name="É DJE?">
       <transition to="JoinComunicacao" name="JoinComunicacao"/>
       <transition to="Registrar expedição de documento" name="Registrar expedição de documento"/>
   </decision>
   <node name="Registrar expedição de documento">
       <transition to="Deve registrar ciência?" name="Deve registrar ciência?"/>
       <event type="node-enter">
           <action expression="#{preencherMovimento.deCodigo(60).
              comComplementoDeCodigo(4).doTipoDominio().preencherComElementoDeCodigo(80).lancarMovimento()}"/>
       </event>
   </node>
   <decision expression="#{comunicacaoProcessualAction.getExpedientesTelefone().size() > 0 or 
     comunicacaoProcessualAction.getExpedientesPessoal().size() > 0 ? 'Registrar ciência' : 'Publicar DJE'}" name="Deve registrar ciência?">
       <transition to="Registrar ciência" name="Registrar ciência"/>
       <transition to="Publicar DJE" name="Publicar DJE"/>
   </decision>
   <node name="Publicar DJE">
       <transition to="Visualizar expediente DJE" name="Publicar DJE"/>
       <event type="node-enter">
           <action expression="#{comunicacaoProcessualAction.enviarExpedientesLancarMovimentos('P', 'processoExpedienteAtual',
                '#{preencherMovimento.deCodigo(60).associarAoDocumento(processoExpedienteAtual.getProcessoDocumento()).
                comComplementoDeCodigo(4).doTipoDominio().preencherComElementoDeCodigo(80).lancarMovimento()}')}"/>
       </event>
   </node>
   <task-node end-tasks="true" name="Visualizar expediente DJE">
       <task name="Visualizar expediente DJE" swimlane="Secretaria">
           <controller>
               <variable name="Processo_Fluxo_expedientes_diario" mapped-name="frame:Processo_Fluxo_expedientes_diario" 
                 access="read,write"/>
           </controller>
       </task>
       <transition to="JoinComunicacao" name="Concluir"/>
       <transition to="Nó de Desvio - Preparar ato de comunicação" name="Nó de Desvio - Preparar ato de comunicação">
           <condition expression="#{true}"/>
       </transition>
   </task-node>
   <decision expression="#{comunicacaoProcessualAction.getExpedientesMandados().size() > 0 ? 'Tem uma central?' : 
         'JoinComunicacao'}" name="É mandado?">
       <description><![CDATA[]]></description>
       <transition to="JoinComunicacao" name="JoinComunicacao"/>
       <transition to="Tem uma central?" name="Tem uma central?"/>
   </decision>
   <decision expression="#{conectorMandados.haVariasCentraisMandado() ? 'Selecionar central de mandados' : 
     'Encaminhar central de mandados'}" name="Tem uma central?">
       <transition to="Encaminhar central de mandados" name="Encaminhar central de mandados"/>
       <transition to="Selecionar central de mandados" name="Selecionar central de mandados"/>
   </decision>
   <task-node end-tasks="true" name="Selecionar central de mandados">
       <task name="Selecionar central de mandados" swimlane="Secretaria">
           <controller>
               <variable name="Processo_Fluxo_expedientes_centralmandados" mapped-name="frame:Processo_Fluxo_expedientes_centralmandados" 
                 access="read,write"/>
           </controller>
       </task>
       <description><![CDATA[]]></description>
       <transition to="Encaminhar central de mandados" name="Encaminhar Central Mandados"/>
       <transition to="Nó de Desvio - Preparar ato de comunicação" name="Nó de Desvio - Preparar ato de comunicação">
           <condition expression="#{true}"/>
       </transition>
       <event type="task-create">
           <action expression="#{taskInstanceUtil.setFrameDefaultTransition('Encaminhar central de mandados')}"/>
       </event>
   </task-node>
   <node name="Encaminhar central de mandados">
       <transition to="JoinComunicacao" name="Concluir"/>
       <event type="node-enter">
           <action expression="#{comunicacaoProcessualAction.enviarExpedientesLancarMovimentos('M', 'processoExpedienteAtual',
              '#{preencherMovimento.deCodigo(60).associarAoDocumento(processoExpedienteAtual.getProcessoDocumento()).
              comComplementoDeCodigo(4).doTipoDominio().preencherComElementoDeCodigo(78).lancarMovimento()}')}"/>
       </event>
   </node>
   <decision expression="#{comunicacaoProcessualAction.getExpedientesCorreios().size() > 0 ? 'Registra expedição de AR' : 
    'JoinComunicacao'}" name="É Correios?">
       <transition to="JoinComunicacao" name="JoinComunicacao"/>
       <transition to="Registra expedição de AR" name="Registra expedição de AR"/>
   </decision>
   <node name="Registra expedição de AR">
       <transition to="Imprimir correspondência" name="Imprimir correspondência"/>
       <event type="node-enter">
           <action expression="#{comunicacaoProcessualAction.enviarExpedientesLancarMovimentos('C', 'processoExpedienteAtual',
              '#{preencherMovimento.deCodigo(60).associarAoDocumento(processoExpedienteAtual.getProcessoDocumento()).
              comComplementoDeCodigo(4).doTipoDominio().preencherComElementoDeCodigo(74).lancarMovimento()}')}"/>
       </event>
   </node>
   <task-node end-tasks="true" name="Imprimir correspondência">
       <task name="Imprimir correspondência" swimlane="Secretaria">
           <controller>
               <variable name="Processo_Fluxo_expedientes_correios" mapped-name="frame:Processo_Fluxo_expedientes_correios" 
                access="read,write"/>
           </controller>
       </task>
       <description><![CDATA[teste]]></description>
       <transition to="JoinComunicacao" name="Concluir"/>
       <transition to="Nó de Desvio - Preparar ato de comunicação" name="Nó de Desvio - Preparar ato de comunicação">
           <condition expression="#{true}"/>
       </transition>
   </task-node>
   <decision expression="#{comunicacaoProcessualAction.getExpedientesPrecatorias().size() > 0 ? 'Visualizar carta' : 
     'JoinComunicacao'}" name="É carta?">
       <transition to="JoinComunicacao" name="JoinComunicacao"/>
       <transition to="Visualizar carta" name="Visualizar carta"/>
   </decision>
   <task-node end-tasks="true" name="Visualizar carta">
       <task name="Visualizar carta" swimlane="Secretaria">
           <controller>
               <variable name="Processo_Fluxo_expedientes_precatorias" mapped-name="frame:Processo_Fluxo_expedientes_precatorias" 
                 access="read,write"/>
           </controller>
       </task>
       <transition to="JoinComunicacao" name="JoinComunicacao"/>
       <transition to="Nó de Desvio - Preparar ato de comunicação" name="Nó de Desvio - Preparar ato de comunicação">
           <condition expression="#{true}"/>
       </transition>
       <event type="task-start">
           <action name="upd" expression="#{lancadorMovimentosService.setCondicaoLancamentoMovimentosTemporarioNoFluxo('#{false}')}"/>
       </event>
   </task-node>
   <join name="JoinComunicacao">
       <transition to="Término" name="Término"/>
   </join>
   <end-state name="Término"/>
   <task-node end-tasks="true" name="Nó de Desvio - Preparar ato de comunicação">
       <task name="Nó de Desvio - Preparar ato de comunicação" swimlane="Nó de Desvio - Preparar ato de comunicação"/>
       <transition to="Preparar comunicação" name="Preparar comunicação"/>
       <transition to="Visualizar expediente DJE" name="Publicar DJE"/>
       <transition to="Selecionar central de mandados" name="Selecionar Central de Mandado"/>
       <transition to="Imprimir correspondência" name="Imprimir Correspondência"/>
       <transition to="Término" name="Término"/>
       <transition to="Visualizar carta" name="Visualizar carta"/>
   </task-node>  
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