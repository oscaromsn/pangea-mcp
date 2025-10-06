---
title: "Expressões em fluxos | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Express%C3%B5es%20em%20fluxos"
author:
published:
created: 2025-09-30
description: "Esse conteúdo foi migrado integralmente da antiga Wiki do PJe, e suas informações podem estar desatualizadas."
tags:
  - "clippings"
---
# Expressões em fluxos | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Express%C3%B5es%20em%20fluxos


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/#__docusaurus_skipToContent_fallback)

## Expressões

Esta seção se destina a explicitar algumas expressões (EL) que devem ser usadas na construção de fluxos do PJe para atender determinadas situações.

## Definir variável no fluxo

```java
#{org.jboss.seam.bpm.processInstance.contextInstance.setVariable('<nome da variável>', <valor>)}
```

Configura para uso futuro no fluxo uma variável cujo nome seja `<nome da variável>` para conter o valor especificado pelo valor respectivo.

Exemplos:

```java
#{org.jboss.seam.bpm.processInstance.contextInstance.setVariable('pje:aguardaEstouroPrazo', 'true')}
```
```java
#{org.jboss.seam.bpm.processInstance.contextInstance.setVariable('pje:aguardaFecharExpediente', 'true')}
```
```java
#{taskInstanceUtil.setVariable('ocultarAssinatura', 'true')}
```

### Definir minuta em elaboração

```java
#{org.jboss.seam.bpm.processInstance.contextInstance.setVariable('minutaEmElaboracao', processoHome.idProcessoDocumento)}
```

Configura para uso futuro no fluxo a variável minutaEmElaboração como sendo o documento em manutenção.

### Restringir tipos de documentos disponíveis

```java
#{taskInstanceUtil.setVariable('tiposDisponiveisIds','60,69,65,71')}
```

Restringe os tipos de documentos disponíveis para utilização no fluxo aos tipos passados como parâmetro, desde que estejam definidos na instalação e estejam ativos. Para que a restrição não mais ocorra no fluxo, deve-se apagar a variável.

Deve ser utilizada, por exemplo, ao criar expedientes, para limitar os tipos de documentos que poderão ser utilizados na construção do expediente.

## Excluir variável

```java
#{org.jboss.seam.bpm.processInstance.contextInstance.deleteVariable('pje:aguardaEstouroPrazo')}
```

Exclui a variável criada anteriormente (evento)

```java
#{org.jboss.seam.bpm.processInstance.contextInstance.deleteVariable('pje:aguardaCiencia')}
```

Exclui a variável criada anteriormente (evento)

```java
#{processInstance.getContextInstance().deleteVariable('minutaEmElaboracao')}
```

Exclui a variável criada anteriormente (evento)

### Apagar agrupamentos

```java
#{org.jboss.seam.bpm.processInstance.contextInstance.deleteVariable('AgrupamentosLancadosTemporariamente')}
```

Apaga possíveis agrupamentos lançados temporiamente anteriormente

### Apagar movimentos

```java
#{org.jboss.seam.bpm.processInstance.contextInstance.deleteVariable('MovimentosLancadosTemporariamente')}
```

Apaga possíveis movimentos lançados temporiamente anteriormente

## Configurar lançador de movimentações

```java
#{lancadorMovimentosService.setCondicaoLancamentoMovimentosTemporarioNoFluxo('#{true}')}
```

Essa expressão configura o lançador de movimentações como associado à tarefa sendo configurada. Ao setar o parâmetro para "false", o usuário está dizendo que o lançamento da movimentação não precisará ser confirmado em tarefa futura. O contrário diz que uma tarefa futura confirmará o movimento.

## Vincular modelo à tarefa

```java
#{modeloDocumento.set('<nome de tarefa>',<código(s) do(s) modelo(s) a ser(em) vinculado(s)>)}
```

Configura os modelos de documento passíveis de serem utilizados pela tarefa cujo nome é < nome da tarefa >. No caso de serem mais de um modelo, os códigos devem ser separados por vírgula.

Exemplos:

### Restringir modelos do PAC

```java
#{modeloDocumento.set('Processo_Fluxo_prepararExpediente',60,69,65,71)}
```

Configura os modelos de documento passíveis cujos códigos são 60, 69, 65 e 71 para serem utilizadas na tarefa do PAC de preparar expediente.

### Restringir modelos da minuta

```java
#{modeloDocumento.set('minuta_ato_judicial',85,86,75,76)}
```

Configura os modelos de documento passíveis cujos códigos são 60, 69, 65 e 71 para serem utilizadas na tarefa do PAJ de minutar.

## Verificação de audiências marcadas

```java
#{processoTrfHome.instance.processoAudienciaList.size() > 0 ? 'Verificar providência a adotar' : 'Escolher providência inicial'}
```

Verifica se houve audiências marcadas e encaminha o fluxo para as tarefas "Verificar providência a adota" ou "Escolher providência inicial", conforme existência de audiência ou não, respectivamente.

## Remover a exibição do botão GRAVAR na tarefa

No evento de criar tarefa crie a variável 'mostrarBotaoGravarNoFluxo', com o valor 'false'.

```java
#{taskInstanceUtil.setVariable('mostrarBotaoGravarNoFluxo','false')}
```

## Transição de saída padrão

```java
#{taskInstanceUtil.setFrameDefaultTransition(' <nome da transição de saída padrão> ')}
```

Vinculação da transição de saída padrão da tarefa

Adicione sempre no evento Criar Tarefa

Exemplos:

### Transição da saída padrão

```java
#{taskInstanceUtil.setFrameDefaultTransition('Término')}
```

Na tarefa em que é utilizada, a transição de saída padrão passar a ser Término.

### Transição de saída padrão da revisão

```java
#{taskInstanceUtil.setFrameDefaultTransition('Confirmar movimentação')}
```

Na tarefa de revisão da minuta (Confirmar ato), a transição de saída padrão passar a ser Confirmar movimentação.

## Atos de comunicação em aberto

```java
#{atoComunicacaoService.getAtosComunicacaoAbertos(processoJudicialService.findById(org.jboss.seam.bpm.processInstance.contextInstance.getVariable('processo'))) != 0}
```

Verifica existência de atos de comunicação em aberto

```java
#{atoComunicacaoService.getAtosComunicacaoAbertos(processoJudicialService.findById(org.jboss.seam.bpm.processInstance.contextInstance.getVariable('processo'))) == 0 ? 'Prazos vencidos' : 'Aguardando término dos prazos'}
```

Verifica se há atos de comunicação em aberto (nó de decisão)

## Verificação de movimentos

```java
#{processoTrfHome.existeMovimentoLancadoPorIdEvento(848)}
```

Verifica se há movimento lançado com aquele identificador

```java
#{verificaEventoAction.verificarEventos(19, 28)}
```

Verifica se existem aqueles movimentos no processo

## Existência de sentença líquida

```java
#{resultadoSentencaService.isPossuiSentencaLiquida()}
```

Verifica se há sentença líquida lançada no processo

## Quantidade de postos avançados

```java
#{postoAvancadoAction.numeroDePostosDoOrgaoJulgador() > 0}
```

Verifica se o OJ possui posto avançado

```java
#{postoAvancadoAction.numeroDePostosDoOrgaoJulgador() == 1 ? 'Encaminhar posto avançado' : 'Escolher posto avançado' }
```

Verfica a quantidade de postos avançados do OJ (nó de decisão)

## Verificação de documento de magistrado assinado

```java
#{!resultadoSentencaService.isUltimoSentencaDecisaoDespachoAssinado()}
```

Verifica se a última sentença, despacho ou decisão está assinada

## Verificação de último documento do processo assinado

```java
#{processoDocumentoHome.isUltimoDocumentoAssinado()}
```

Verifica se último documento do processo está assinado

## Verificação de audiências

```java
#{processoAudienciaHome.existeAudienciaPendenteProcesso()}
```

Verifica se há audiência pendente de ser realizada no processo

```java
#{processoAudienciaHome.existeAudienciaPendenteProcesso() ? 'Operações da Audiência' : 'Designar Audiência'}
```

Verifica se há audiência pendente de ser realizada no processo (nó de decisão)

## Recupera o posto avançado

```java
#{processoTrfHome.instance.orgaoJulgador.postoAvancado}
```

Obtém o posto avançado do órgão julgador

## Existência de carta precatória

```java
#{comunicacaoProcessualAction.getExpedientesPrecatorias().size() > 0 ? 'Encaminhar Carta' : 'JoinComunicacao'}
```

Verifica se há expedientes do tipo carta precatória (nó de decisão)

## Sentença

```java
#{org.jboss.seam.bpm.processInstance.contextInstance.getVariable('tipoSentenca') == 'true' ? 'Partes cientes?' : 'Controle de prazos diversos'}
```

Verifica se a variável criada “tiposentenca” está setada para true (nó de decisão)

## Expedientes para o diário

```java
#{comunicacaoProcessualAction.getExpedientesDiario().size() > 0 ? 'Publicar DJE' : 'JoinComunicacao'}
```

Verifica se há expedientes enviados para o diário (nó de decisão)

## Órgão público

```java
#{processoJudicialService.findById(org.jboss.seam.bpm.processInstance.contextInstance.getVariable('processo')).haParteOrgaoPublico() ? 'Reexame necessário' : 'Registrar trânsito em julgado'}
```

Utilizado para verificar se há partes no processo do tipo órgão público

## Expediente carta

```java
#{comunicacaoProcessualAction.getExpedientesPrecatorias().size() > 0 ? 'Encaminhar carta' : 'JoinComunicacao'}
```

Verifica se há expedientes do tipo Carta

## Expedientes para os correios

```java
#{comunicacaoProcessualAction.getExpedientesCorreios().size() > 0 ? 'Imprimir Correspondência' : 'JoinComunicacao'}
```

Verifica se há expedientes do tipo Correios (nó de decisão)

## Expediente edital

```java
#{comunicacaoProcessualAction.getExpedientesEdital().size() > 0 ? 'Encaminhar Edital' : 'JoinComunicacao'}
```

Verifica se há expedientes do tipo edital (nó de decisão)

## Expediente telefone

```java
#{comunicacaoProcessualAction.getExpedientesTelefone().size() > 0 ? 'Registrar ciência' : 'JoinComunicacao'}
```

Verifica se há expedientes do tipo telefone (nó de decisão)

## Expediente pessoal

```java
#{comunicacaoProcessualAction.getExpedientesPessoal().size() > 0 ? 'Registrar ciência' : 'JoinComunicacao'}
```

Verifica se há expedientes do tipo pessoal (nó de decisão)

## Nó de decisão para expediente pessoal/por telefone ou para expediente DJE

```java
#{comunicacaoProcessualAction.getExpedientesTelefone().size() > 0 or comunicacaoProcessualAction.getExpedientesPessoal().size() > 0 ? 'Registrar ciência' : 'Publicar DJE'}
```

Verifica se o expediente é pessoal ou por telefone para envio para registro de ciência. Caso contrário, assume que o expediente é para o diário e envia para publicação.

## Verificação de assunto do processo

```java
#{competenciaClasseAssuntoHome.processoContemClasseAssunto('40;1116;991;992;993;990;261:55292') ? 'Iniciar Execução' : 'Verificar Valor'}
```

Verifica se há assunto cadastrado para processo (nó de decisão)

## Documentos não apreciados

```java
#{documentoJudicialService.haDocumentoNaoApreciado(org.jboss.seam.bpm.processInstance.contextInstance.getVariable('processo') ,62,23) ? 'Embargos de Declaração' : 'Aguardando prazo - recurso'}
```
```java
#{documentoJudicialService.haDocumentoNaoApreciado(org.jboss.seam.bpm.processInstance.contextInstance.getVariable('processo') ,62,47,5,42) ? 'Analisar manifestação' : 'Há órgão público?'}
```

Verifica se há documento não apreciado (nó de decisão)

## Verifica urgência ou sigilo

```java
#{processoTrfHome.isEmPedidoSegredoJustica() or processoTrfHome.isEmPedidoUrgencia ? 'Apreciar Urgentes' : 'Triagem Inicial'}
```

Verifica se há pedido de urgência ou segredo de justiça (nó de decisão)

## Expediente para central

```java
#{comunicacaoProcessualAction.getExpedientesMandados().size() > 0 ? 'Tem uma Central?' : 'JoinComunicacao'}
```

Verifica se há expedientes do tipo mandado ou ofício (nó de decisão)

## Expediente após sentença

```java
#{processoExpedienteManager.existeExpedienteAposUltimaSentenca(org.jboss.seam.bpm.processInstance.contextInstance.getVariable('processo')) ? 'Aguardando ciência' : 'Aguardando prazo - ED'}
```

Verifica se há expedientes após última sentença do processo (nó de decisão)

## Expedientes sem ciência

```java
#{processoParteExpedienteManager.todosTomaramCiencia(org.jboss.seam.bpm.processInstance.contextInstance.getVariable('processo') ) ? 'Aguardando prazo - ED' : 'Aguardando ciência'}
```

Verifica se todos os destinatários já tomaram ciência (nó de decisão)

## Verificação de faixa de valores

```java
#{processoTrfHome.isViolacaoFaixaValores() ? 'Valor Incompatível' : 'Verificar Urgência'}
```

Verifica se há violação de faixa de valores no processo (nó de decisão)

## Verificação de expedientes eletrônicos

```java
#{comunicacaoProcessualAction.getExpedientesEletronico().size() > 0 ? 'Encaminhar Via Sistema' : 'JoinComunicacao'}
```

Verifica se há expedientes do tipo eletrônico (nó de decisão)

## Centrais de mandado

```java
#{conectorMandados.haVariasCentraisMandado() ? 'Selecionar central de mandados' : 'Encaminhar central de mandados'}
```

Verifica se há mais de uma central de mandado vinculado ao OJ (nó de decisão)

## Verificação de execução ou liquidação

```java
#{(processoTrfHome.isProcessoExecucao() )?'Iniciar Execução':(processoTrfHome.isProcessoLiquidacao() ? 'Iniciar Liquidação' : 'Verificar Valor')}
```

Verifica se é processo de execução ou é processo de liquidação (nó de decisão)

## Tipos de documentos na tarefa

```java
#{tipoDocumento.set('textEditSecretariaJT',63,62)}
```

Setar tipos de documentos que podem ser utilizados na tarefa (evento)

### Restringir tipos de documento da revisão de minuta

```java
#{tipoDocumento.set('Processo_Fluxo_revisarMinuta',62,63,64)}
```

Na tarefa "confirmar ato" (variável "Processo\_Fluxo\_revisarMinuta" do tipo "Frame") deve-se utilizar a EL para restrição dos tipos de documentos. Nesse exemplo, o primeiro parâmetro do método corresponde ao nome da variável definido no fluxo, os seguintes são os identificadores (ids) dos tipos de documentos que devem ser disponibilizados.

## Registro automático de movimentos

```java
#{preencherMovimento.deCodigo(51).comComplementoDeCodigo(3).doTipoDominio().preencherComElementoDeCodigo(36).lancarMovimento()}
```

Registrar movimento automaticamente (evento)

```java
#{preencherMovimento.deCodigo(123).comComplementoDeCodigo(7).doTipoDominio().preencherComElementoDeCodigo(7051).comComplementoDeCodigo(18).doTipoDominio().preencherComElementoDeCodigo(38).lancarMovimento()}
```

Registrar movimento automaticamente (evento)

```java
#{preencherMovimento.deCodigo(848).lancarMovimento()}
```

Registrar movimento automaticamente (evento)

### Movimentos com complemento do tipo identificador

```java
#{preencherMovimento.deCodigo(135).comProximoComplementoVazio().preencherComTexto(processoTrfHome.instance.numeroProcesso).lancarMovimento()}
```

Registrar com movimento com código 135 com complemento utilizando o número do processo

### Movimentos com complemento do tipo livre

```java
#{preencherMovimento.deCodigo(10966).comComplementoDeCodigo(<CODIGO_DO_TIPO_DE_COMPLEMENTO_CRIADO>).doTipoLivre(). preencherComTexto(processoHistoricoClasseHome.instance.classeJudicialAnterior).comComplementoDeCodigo(<CODIGO_DO_TIPO_DE_COMPLEMENTO_CRIADO>). doTipoLivre().preencherComTexto(processoHistoricoClasseHome.instance.classeJudicialAtual).lancarMovimento()}
```

Registrar movimento do tipo 10966 com dois complementos do tipo livre, a classe judicial anterior do processo e a classe judicial atual. Para utilização dessa EL, deve ser criado um complemento de nome "tipo", do tipo livre. O código utilizado na criação deve ser inserido na EL em lugar do campo `<CODIGO_DO_TIPO_DE_COMPLEMENTO_CRIADO>`.

### Movimento de mudança de classe

```java
#{preencherMovimento.deCodigo(10966).comComplementoDeNome('classeAnterior').preencherComTexto(classeAntiga).comComplementoDeNome('classeAtual').preencherComTexto(classeNova).lancarMovimento()}
```

Registrar movimento do tipo 10966, o sistema deve lançar a movimentação, que possui o formato: Classe Processual alterada de `#{classeAnterior}` para `#{classeNova}`.

Para essa EL funcionar, devem ter sido configurados os seguintes valores no sistema:

## Exclusão de movimento

```java
#{lancadorMovimentosService.excluirUltimoMovimento('51')}
```

Excluir o último registro do movimento processual (evento)

## Exclusão de movimentos temporários

```java
#{lancadorMovimentosService.apagarMovimentosTemporarios()}
```

Exclui movimentos serializados (evento)

## Encaminhamento para posto avançado

```java
#{postoAvancadoAction.encaminharParaPostoAvancado()}
```

Remete o processo para o posto avançado cadastrado para o OJ (evento)

## Retorno do posto avançado para o órgão julgador

```java
#{postoAvancadoAction.retornarParaOrgaoJulgador()}
```

Executa o método que efetiva o retorno do processo para o OJ principal do posto avançado

## Meios de comunicação possíveis

```java
#{preparaAtoComunicacaoAction.setMeiosComunicacao('P,E,C,M,L')}
```

Setar os meios de comunicação possíveis de uso no preparar ato de comunicação (evento)

```java
#{preparaAtoComunicacaoAction.setMeiosComunicacao('P,D,E,C,M,L')}
```

Setar os meios de comunicação possíveis de uso no preparar ato de comunicação (evento)

```java
#{preparaAtoComunicacaoAction.setMeiosComunicacao('P,E,C,L,M,T,S')}
```

Setar os meios de comunicação possíveis de uso no preparar ato de comunicação.

## Habilitar homologação da sentença

```java
#{resultadoSentencaService.homologarResultadoSentenca()}
```

Habilitar o botão para homologação de sentenca (evento)

## Exclusão de resultado não homologado

```java
#{resultadoSentencaService.excluirResultadoSentencaNaoHomologado()}
```

Exclui o registro de resultado de sentença (evento)

## Registrar ciência

```java
#{comunicacaoProcessualAction.registrarCienciaExpedientePessoal()}
```

Registra a ciência do expediente feito na própria secretaria (por telefone ou pessoalmente)

## Envio de expediente e registro de movimento

Expressões utilizadas para envio de expedientes e concomitante registro de movimento associado ao envio, ou seja, movimento de código 60 - Expedição de documento.

### Envio de expediente do tipo aviso de recebimento

```java
#{comunicacaoProcessualAction.enviarExpedientesLancarMovimentos('C', 'processoExpedienteAtual', '#{preencherMovimento.deCodigo(60).associarAoDocumento(processoExpedienteAtual.getProcessoDocumento()). comComplementoDeCodigo(<CÓDIGO_DO_TIPO_DE_COMPLEMENTO_DO_TIPO_DOMÍNIO_PARA_tipo_de_documento>).doTipoDominio(). preencherComElementoDeCodigo(<CÓDIGO_DO_ELEMENTO_DE_DOMÍNIO_PARA_aviso_de_recebimento>).lancarMovimento()} ')}
```

Envia o expediente Correios e registra o movimento processual de forma automatizada (evento)

### Envio de expediente do tipo mandado

```java
#{comunicacaoProcessualAction.enviarExpedientesLancarMovimentos('M', 'processoExpedienteAtual', '#{preencherMovimento.deCodigo(60).associarAoDocumento(processoExpedienteAtual.getProcessoDocumento()). comComplementoDeCodigo(<CÓDIGO_DO_TIPO_DE_COMPLEMENTO_DO_TIPO_DOMÍNIO_PARA_tipo_de_documento>).doTipoDominio(). preencherComElementoDeCodigo(<CÓDIGO_DO_ELEMENTO_DE_DOMÍNIO_PARA_mandado>).lancarMovimento()} ')}
```

Envia o expediente do tipo mandado e registra o movimento processual de forma automatizada (evento)

### Envio de expediente do tipo eletrônico

```java
#{comunicacaoProcessualAction.enviarExpedientesLancarMovimentos('E', 'processoExpedienteAtual', '#{preencherMovimento.deCodigo(60).associarAoDocumento(processoExpedienteAtual.getProcessoDocumento()). comComplementoDeCodigo(<CÓDIGO_DO_TIPO_DE_COMPLEMENTO_DO_TIPO_DOMÍNIO_PARA_tipo_de_documento>). doTipoDominio().preencherComElementoDeCodigo(<CÓDIGO_DO_ELEMENTO_DE_DOMÍNIO_PARA_outros_documentos>).lancarMovimento()}')}
```

Envia o expediente eletrônico e registra o movimento processual de forma automatizada (evento)

## Envio de expediente

```java
#{comunicacaoProcessualAction.enviarExpedientesLancarMovimentos('P', 'processoExpedienteAtual', '')}
```

Envia o expediente utilizando o conector com o diário de justiça eletrônico, se existir.

## Preencher movimento de expedição de documento

```java
#{preencherMovimento.deCodigo(60).comComplementoDeCodigo(<CÓDIGO_DO_TIPO_DE_COMPLEMENTO_DO_TIPO_DOMÍNIO_PARA_tipo_de_documento>).doTipoDominio(). preencherComElementoDeCodigo(<CÓDIGO_DO_ELEMENTO_DE_DOMÍNIO_PARA_outros_documentos>).associarAoDocumentoDeId(processoHome.idProcessoDocumento). lancarMovimento()}
```

Preenche o movimento de "Expedição de outros documentos", utilizado em expedientes para o diário de justiça eletrônico, por telefone e pessoais.

## Lista de documentos

Quando o processo é físico, o advogado autor apresenta DUAS cópias da petição inicial. Uma delas será encaminhada conjuntamente com a intimação inicial ao Reclamado. No processo eletrônico esse custo (milhares de processos x milhares de folhas) será da Justiça do Trabalho que tem de imprimir a inicial para encaminhar a notificação ao(s) reclamado(s). O TRT13, dentre outros, solucionou o problema colocando códigos de acesso aos documentos no corpo da notificação, de forma que o reclamado é instruído a acessar o documento e fazer o download. Manda-se apenas uma única folha. Inclusive o formato, preparado para dobrar em tres partes onde a 1a parte exposta contém o endereço do destinatário. Anexo envio exemplo.

Criar variável com lista de documentos (códigos de acesso) para compor Notificação Inicial e assim não ter que imprimir a petição inicial para envio via correio

```java
#{processoTrfHome.tabelaHashDocumentos}
```

## Verificar se o processo chegou via MNI

```java
#{intercomunicacaoService.processoAutuadoViaMNI(processoTrfHome.instance)}
```

Retorna verdadeiro se o processo chegou via MNI.

### Definir um procedimento manual que deve ser feito pela instância de primeiro grau quando a instância de segundo grau devolve um processo que não foi remetido via MNI

No fluxo, após a atividade que devolve o processo para o primeiro grau, incluir um nó de decisão com a expressão abaixo:

```java
#{intercomunicacaoService.processoAutuadoViaMNI(processoTrfHome.instance)?'Recebimento do processo':'Fim'}
```

onde: 'Recebimento do processo' corresponde ao nome da tarefa que será executada pela instância de primeiro grau depois que a instância de segundo grau devolver o processo. Esta atividade só será executada se o processo devolvido não tiver chegado no segundo grau via MNI. 'Fim' corresponde ao nó de término.

Assim, se o processo foi remetido para o segundo grau sem usar MNI, quando o segundo grau devolver o processo para o primeiro grau, o primeiro grau terá que executar a atividade 'Recebimento do processo'. Mas quando o processo foi remetido para o segundo grau por meio do MNI, quando o segundo grau devolver o processo para o primeiro grau, nenhuma intervenção manual será necessária.

## Deslocamento de processo para a presidência

Para realizar o deslocamento de um processo para a presidência no PJe, é necessário, como pré-condição, que se obtenha, no banco de dados, os identificadores do colegiado a que a presidência está vinculada, do próprio órgão presidência e do órgão julgador cargo (cargo judicial concreto) da presidência.

Após, devem ser criados dois nós de sistema, um para a ida, e outro para a volta. No meio, devem ser colocadas as atividades da presidência. Eis a descrição ideal dos nós de ida e de volta:

- 4 eventos na ida em nó de sistema. Os três primeiros, ao entrar no nó, para gravação do juízo de origem
```xml
---------- Nó de ida ----------

    - tramitacaoProcessualService.gravaVariavel("pje:fluxo:identificador:orgaoOrigem", processoTrfHome.instance.orgaoJulgador.idOrgaoJulgador)

    - tramitacaoProcessualService.gravaVariavel("pje:fluxo:identificador:colegiadoOrigem",  

    processoTrfHome.instance.orgaoJulgadorColegiado.idOrgaoJulgadorColegiado)

    - tramitacaoProcessualService.gravaVariavel("pje:fluxo:identificador:cargoOrigem",

    processoTrfHome.instance.orgaoJulgadorCargo.idOrgaoJulgadorCargo)

    Ao sair do nó de sistema

    #{processoJudicialService.deslocarOrgaoJulgador(processoTrfHome.instance), 2 (id órgão presidência), 1 (id órgão julgador colegiado), 

    18 (id do orgao julgador  cargo presidência)}

    ---------- Fim do nó de ida ----------

    Volta

    ---------- Nó de volta ----------

    Ao entrar no nó:

    #{processoJudicialService.deslocarOrgaoJulgador(processoTrfHome.instance,)

    tramitacaoProcessualService.recuperaVariavel("pje:fluxo:identificador:orgaoOrigem"),  

    tramitacaoProcessualService.recuperaVariavel("pje:fluxo:identificador:colegiadoOrigem"),

    tramitacaoProcessualService.recuperaVariavel("pje:fluxo:identificador:cargoOrigem")}

    Ao sair do nó

    - tramitacaoProcessualService.apagaVariavel("pje:fluxo:identificador:orgaoOrigem")

    - tramitacaoProcessualService.apagaVariavel("pje:fluxo:identificador:colegiadoOrigem")

    - tramitacaoProcessualService.apagaVariavel("pje:fluxo:identificador:cargoOrigem")

    ---------- Fim do nó de volta ----------
```

## Acesso a sistemas externos por meio de tarefas de fluxo

```java
#{tramitacaoProcessualService.gravaVariavelTarefa('pje:flx:paginaExterna', 'URL_DO_SISTEMA_EXTERNO')}
```

Frame que permite o acesso a sistemas externos por meio de tarefas de fluxo. Exemplos de sistemas que poderiam ser acessados: Bacenjud, Renajud, Banco Nacional de Bens Apreendidos e eventuais sistemas de controle de precatórios.

## Supressão de visualizadores em processos sigilosos

```java
#{processoVisibilidadeSegredoManager.limpaRegistros(processo)}
```

Limpa a lista de visualizadores de um determinado processo.

## Enviar intimação para Ministério Público

```java
#{atoComunicacaoService.intimarDestinatarioEletronicamente(tramitacaoProcessualService.recuperaProcesso().idProcessoTrf, <idPessoaMP>, '<tipoprazo>',<qtd_prazo>,<cod_modelo>,<cod_tipo>)}
```

Expressão a ser inserida no evento "Ao entrar no nó" de um nó de sistema para realizar a intimação automática do ministério público. Para isso, seguem os significados dos parâmetros:

```xml
- <idPessoaMP> - deve ser substituído pela id da pessoa ao qual está vinculado o Ministério Público

    - <tipoprazo> - deve ser substituído pelo Tipo de prazo correspondente, conforme opções disponíveis na regra de domínio RD96. Por exemplo, D.

    - <qtd_prazo> - é a quantidade a ser associado ao tipo de prazo. Por exemplo, se esse valor for 5 e o valor do parâmetro anterior for 'D', o prazo de resposta da intimação são cinco dias

    - <cod_modelo> - código do modelo de documento a ser utilizado pela intimação

    - <cod_tipo> - código do tipo de documento a ser utilizado pela intimação
```
```java
#{atoComunicacaoService.intimarDestinatarioEletronicamente(tramitacaoProcessualService.recuperaProcesso().idProcessoTrf, <idPessoaMP>, '<tipoprazo>',<qtd_prazo>,<cod_doc>)}
```

Expressão a ser inserida no evento "Ao entrar no nó" de um nó de tarefa para realizar a intimação automática do ministério público. Para isso, seguem os significados dos parâmetros:

```xml
- <idPessoaMP> - deve ser substituído pela id da pessoa ao qual está vinculado o Ministério Público
    - <tipoprazo> - deve ser substituído pelo Tipo de prazo correspondente, conforme opções disponíveis na regra de domínio RD96. Por exemplo, D.
    - <qtd_prazo> - é a quantidade a ser associado ao tipo de prazo. Por exemplo, se esse valor for 5 e o valor do parâmetro anterior for 'D', o prazo de resposta da intimação são cinco dias
    - <cod_doc> - código do documento a ser utilizado pela intimação
```

## Registrar inclusão em pauta

```java
#{processoJudicialManager.aptidaoParaJulgamento(processoTrfHome.instance.idProcessoTrf, true)}
```

Expressão utilizada para que um processo esteja marcado como selecionado para pauta, via de regra utilizada em um nó de sistema

## Criar um nó de decisão baseado na classe judicial do processo

```java
#{processoTrfHome.instance.classeJudicial.codClasseJudicial == 'códigoClasse'  ? 'transiçãoSeVerdadeiro' : 'transiçãoSeFalso'}
```

Expressão utilizada para criar um nó de decisão baseado na classe judicial do processo

## Identificar os meios de comunicação sem ciência registrada

```java
#{taskInstanceUtil.setVariable('pje:fluxo:registrociencia:meios','P,T')}
```

Expressão utilizada para identificar quais os meios de comunicação/expedição sem ciência registrada que poderão ter ciência manipulada na tarefa Registro manual de ciência de expedientes.

A sequência de valores do parâmetro pje:fluxo:registrociencia:meios implica na sequência de meios de comunicação desejados de acordo com a lista de meios de comunicação permitidos para a tarefa em questão:

- P("Diário Eletrônico");
- L("Carta") - exemplos: carta rogatória, de ordem ou precatória;
- D("Edital");
- N("Comunicação");
- S("Pessoalmente");
- T("Telefone").

## Transição de desistência

```java
#{tramitacaoProcessualService.gravaVariavelTarefa('pje:fluxo:transicao:dispensaRequeridos','Nome da transição que dispensa os campos')}
```

Expressão utilizada na configuração de evento em nó de tarefa para caracterizar transição de desistência, ou seja, transição que não validará campos da tela.

## Registrar situação processual

```java
#{tramitacaoProcessualService.acrescentarSituacao('codigo_da_situacao')}
```

Expressão a ser utilizada na configuração de evento para registrar uma determinada situação no processo. A situação deve ter sido previamente configurada.

As situações do processo são exibidas, de acordo com permissão adequada, no detalhamento do processo.

## Encerrar situação processual

```java
#{tramitacaoProcessualService.removerSituacao('codigo_da_situacao')}
```

Expressão a ser utilizada na configuração de evento para remover uma determinada situação do processo já registrada anteriormente.

As situações do processo são exibidas, de acordo com permissão adequada, no detalhamento do processo.

## Verificar situação processual

```java
#{tramitacaoProcessualService.temSituacao('<nome da situação>')}
```

Expressão a ser utilizada para verificar se o processo tem determinada situação processual ainda não encerrada.

As situações do processo são exibidas, de acordo com permissão adequada, no detalhamento do processo.

## Recuperar id do órgão julgador do processo

```java
#{processoTrfHome.instance.orgaoJulgador.idOrgaoJulgador}
```

Expressão a ser utilizada para recuperar o id do órgão julgador do processo. A expressão pode ser utilizada, por exemplo, na verificação de condição em uma transição. Se uma determinada transição só deve estar disponível para processos distribuídos para determinado órgão julgador, pode-se utilizar a o registro de condição na configuração da transição da seguinte forma:

```java
#{processoTrfHome.instance.orgaoJulgador.idOrgaoJulgador == 3}
```

Da mesma forma, pode-se restringir a transição à processos que não sejam de determinado órgão julgado:

```java
#{processoTrfHome.instance.orgaoJulgador.idOrgaoJulgador != 3}
```

## Recuperar o nome da pessoa

```java
#{processoParte.pessoa.inTipoPessoa eq 'J' ? pessoaJuridicaManager.findById(parteSelecionada.pessoa.idPessoa).nomeFantasia : parteSelecionada.getNomeParte()}
```

Expressão que retorna o nome da pessoa física ou o nome fantasia da pessoa jurídica parte do processo.

## Verificar papel do usuário

```java
#{org.jboss.seam.security.identity.hasRole('<identificador do papel>')}
```

Expressão verifica se o usuário tem o papel passado como parâmetro. Por exemplo:

```java
#{org.jboss.seam.security.identity.hasRole('cnj:chefesetor')}
```

## Recuperar classe judicial do processo

```java
#{tramitacaoProcessualService.recuperaProcesso().classeJudicial.codClasseJudicial}
```

Expressão recupera a classe judicial do processo. A expressão pode ser utilizada, por exemplo, na verificação de condição em uma transição. Se uma determinada transição só deve estar disponível para processos de determinada classe judicial, pode-se utilizar a o registro de condição na configuração da transição da seguinte forma:

```java
#{tramitacaoProcessualService.recuperaProcesso().classeJudicial.codClasseJudicial == '11888'}
```

## Definir variável

Há dois tipos de variável que podem ser criadas, variáveis de fluxo e variáveis de tarefa. - Variáveis de fluxo são variáveis que quando criadas em alguma tarefa do fluxo, continuam disponíveis para uso em qualquer tarefa do fluxo até que sejam apagadas. - Variáveis de fluxo são variáveis cujo contexto de utilização é apenas para a tarefa na qual foram criadas, desta forma, mesmo que não tenham sido apagadas durante o andamento do fluxo, estas variáveis não estarão disponíveis de uma tarefa para outra.

### Definição de variáveis de fluxo

```java
#{tramitacaoProcessualService.gravaVariavel('<nome da variável>', <valor>)}
```

### Definição de variáveis de tarefa

```java
#{tramitacaoProcessualService.gravaVariavelTarefa('<nome da variável>', '<valor>')}
```

Similarmente à definição já descrita no início dessa página (aqui), define um valor para uma variável a fim de recuperá-lo posteriormente.

## Recuperar variável definida anteriormente

```java
#{tramitacaoProcessualService.recuperaVariavel('<nome da variável>')}
```

Similarmente à recuperação já descrita com o uso de getVariable, recupera o valor de uma variável definida anteriormente. Caso não tenha sido definida, o valor retornará vazio.

A expressão pode ser utilizada, por exemplo, na definição de um nó de decisão. Pode-se optar por uma transição caso não tenha sido definida uma variável ou não tenha sido definida com o valor "true" e por outra transição caso a situação seja diferente dessa. Segue o exemplo:

```java
#{empty tramitacaoProcessualService.recuperaVariavel('cnj:fluxo:determinacaoPrevia') or not tramitacaoProcessualService.recuperaVariavel('cnj:fluxo:determinacaoPrevia') ? 'Decisão inicial' : 'Cumprir determinação'}
```

Pode-se utilizar um campo do tipo "Aviso" para exibir o conteúdo de uma variável de fluxo, para isso deve-se dar um nome de variável qualquer (diferente do nome da variável que se quer exibir o conteúdo) e no campo "Label" a expresão: `#{tramitacaoProcessualService.recuperaVariavel('<nome da variável>')}` e o campo Escrita deve estar marcado.

- se o valor da variável for um campo datetime deve-se utilizá-la separadamente de qualquer outro texto no campo do tipo aviso, desta forma o sistema exibirá na seguinte formatação: DD/MM/AAAA, pois se este tipo de variável estiver no meio de um texto o sistema não fará esta formatação, exibindo o texto da seguinte forma: NONONONONO AAAA-MM-DD 00:00:00.

## Apagar variável

```java
#{tramitacaoProcessualService.apagaVariavel('cnj:fluxo:determinacaoPrevia')}
```

Similarmente à remoção já descrita anteriormente (aqui), apaga a variável definida anteriormente.

## Verificar urgência

```java
#{tramitacaoProcessualService.temUrgencia()}
```

Verifica se foi registrado pedido de liminar ou de antecipação de tutela para o processo ainda não apreciado.

## Verificar movimento de determinado grupo

```java
#{tramitacaoProcessualService.temMovimento('<nome do grupo>')}
```

Verifica se houve registro no processo de algum movimento do grupo fornecido como parâmetro.

## Verificar movimento de determinado grupo até determinada data

```java
#{tramitacaoProcessualService.temMovimentoDoGrupo('<nome do grupo>', tramitacaoProcessualService.recuperaVariavel(<variaveldatadefinidaanteriormente>))}
```

Verifica se houve, até a data fornecida como parâmetro, registro no processo de algum movimento do grupo fornecido como parâmetro. Deve-se observar que a data passada como parâmetro pode vir na forma de uma variável do tipo "java.util.Date". Entre outras opções, para se obter uma data nesse formato, pode-se utilizar a seguinte função da biblioteca do PJe:

DateUtil.stringToDate(datatexto, formato)

Como exemplo, segue a chamada da EL utilizando a data formatada:

```java
#{tramitacaoProcessualService.temMovimentoDoGrupo('Julgamento', DateUtil.stringToDate('2014-03-14', 'yyyy-MM-dd') )}
```

Pode-se, por exemplo, utilizar a verificação em um nó de decisão conforme exemplo de expressão abaixo:

```java
#{tramitacaoProcessualService.temMovimentoDoGrupo('Julgamento', tramitacaoProcessualService.recuperaVariavel('pje:julgado:data')) ? 'Comunicar de decisão terminativa' : 'Cumprir decisão em pedido urgente'}
```

## Recuperar ano do processo

```java
#{tramitacaoProcessualService.recuperaProcesso().ano}
```

Recupera o campo ano de distribuição do processo. O ano está presente no número do processo conforme valor de xxxx da máscara abaixo:

nnnnnnn-nn.xxxx.n.nn.nnnn

## Recuperar número sequencial do processo

```java
#{tramitacaoProcessualService.recuperaProcesso().numeroSequencia}
```

Recupera o campo sequencial do número do processo, ou seja, o valor de xxxxxxx da máscara abaixo:

xxxxxxx-nn.nnnn.n.nn.nnnn

## Comparar assunto

```java
#{tramitacaoProcessualService.temAssunto(codigoAssunto)}
```

Verifica se o processo judicial atual tem, entre seus assuntos ativos, aquele cujo código é o passado como parâmetro.

## Verificar assunto conforme agrupamento

```java
#{tramitacaoProcessualService.temAssuntoDoGrupo(codigoAgrupamento)}
```

Verifica se o processo tem, entre seus assuntos, algum dos assuntos contidos no agrupamento passado como parâmetro.

## Atribuir segredo de justiça

```java
#{tramitacaoProcessualService.recuperaProcesso().setSegredoJustica(true)}
```

Atribui segredo de justiça ao processo. Via de regra, será utilizada ao distribuir o processo caso seja verificado que o processo tem a ele associado determinados assuntos (verificação através de expressões temAssunto e temAssuntoDoGrupo).

## Verificar decisão pelo tipo de documento

```java
#{processoDocumentoManager.findById(tramitacaoProcessualService.recuperaVariavel(“pje:atoProferido”)). tipoProcessoDocumento.idTipoProcessoDocumento == ID_TIPO_DOCUMENTO_DECISAO}
```

Verifica se há documento no processo que caracteriza uma decisão

## Criar fluxo paralelo

```java
#{processoJudicialService.incluirNovoFluxo(tramitacaoProcessualService.recuperaProcesso(), '<código do fluxo>')}
```

Inicia no processo o fluxo identificado pelo código passado como parâmetro. Abaixo, veja como fica a EL que inicia o fluxo de digitalização identificado pelo código FLXDIGIT:

```java
#{processoJudicialService.incluirNovoFluxo(tramitacaoProcessualService.recuperaProcesso(), 'FLXDIGIT')}
```

## Verificar magistrados vinculados

```java
#{vinculacaoMagistradoAction.magistradosVinculados.size() > 0}
```

Verifica se há pelo menos um magistrado vinculado ao processo. Essa expressão é útil em instalações onde determinados processos podem ser atribuídos a magistrados que compõem o órgão julgador, mas que não estão caracterizados como titular do órgão. Essa vinculação pode ser realizada por meio da aba Processos da configuração do órgão julgador ou por meio de tarefa no fluxo.

## Liberar documentos da sessão

```java
#{sessaoProcessoDocumentoManager.liberarDocumentosSessao(processoTrfHome.instance, <ORGAO-JULGADOR>, <SESSÃO-JULGAMENTO>)}
```

Expressão utilizada para liberar os documentos (voto, relatório, ementa) de um dado processo, associados a um órgão julgador, para uma determinada sessão de julgamento.

Para liberar todos os documentos do relator de um processo, independentemente da sessão, utilize a EL assim:

```java
#{sessaoProcessoDocumentoManager.liberarDocumentosSessao(processoTrfHome.instance, processoTrfHome.instance.orgaoJulgador, null)}
```

Para liberar todos os documentos não só do relator, mas inclusive dos demais vogais, independentemente da sessão, utilize a EL assim:

```java
#{sessaoProcessoDocumentoManager.liberarDocumentosSessao(processoTrfHome.instance, null, null)}
```

## Verificação se o relatório está assinado

```java
#{votacaoColegiadoAction.relatorioAssinado}
```

Esta expressão verifica se o relatório do processo está assinado, utiliza-se esta expressão para verificar se o fluxo pode ser encaminhado para a inclusão de pauta, visto que o relatório estar assinado é condição essencial (no CNJ) para solicitar a inclusão de um processo em pauta.

## Restringir tipos de documentos na reclassificação

```java
#{tramitacaoProcessualService.gravaVariavelTarefa('pje:reclassificarDocumento:idsTipoDocumentoProibidoAlterar','12,62,63,64')}
```

Esta expressão restringe os tipos de documentos que serão disponibilizados na tarefa de reclassificação de documentos. A expressão deve ser configurada em uma ação no evento "Criar tarefa" da tarefa de reclassificação. Na mesma tarefa, deve-se configurar a seguinte expressão em uma ação no evento "Ao sair do nó":

```java
#{tramitacaoProcessualService.apagaVariavelTarefa('pje:reclassificarDocumento:idsTipoDocumentoProibidoAlterar')}
```

## Especificar tipos de documentos na reclassificação

```java
#{tramitacaoProcessualService.gravaVariavelTarefa('pje:reclassificarDocumento:idsTipoDocumentoPermitidoAlterar','12,62,63,64')}
```

Esta expressão especifica os tipos de documentos que serão disponibilizados na tarefa de reclassificação de documentos. A expressão deve ser configurada em uma ação no evento "Criar tarefa" da tarefa de reclassificação. Na mesma tarefa, deve-se configurar a seguinte expressão em uma ação no evento "Ao sair do nó":

```java
#{tramitacaoProcessualService.apagaVariavelTarefa('pje:reclassificarDocumento:idsTipoDocumentoPermitidoAlterar')}
```

## Esconder botão gravar dos frames

```java
#{taskInstanceUtil.deleteVariableLocally('mostrarBotaoGravarNoFluxo')}
```

Esta expressão especifica que não será exibido o botão "Gravar" na tela da tarefa configurada. Ela deve ser utilizada na criação de frames, em uma ação no evento "Criar tarefa".