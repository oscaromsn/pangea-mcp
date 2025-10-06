---
title: "Configurando parâmetros | Documentação PJe"
source: "https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Configurando%20par%C3%A2metros"
author:
published:
created: 2025-09-30
description: "Esse conteúdo foi migrado integralmente da antiga Wiki do PJe, e suas informações podem estar desatualizadas."
tags:
  - "clippings"
---
# Configurando parâmetros | Documentação PJe
Available at https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Configurando%20par%C3%A2metros


[Pular para o conteúdo principal](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/#__docusaurus_skipToContent_fallback)

## Parâmetros

> Lembrete: A alteração de valores nos parâmetros só terá efeito na aplicação após a reinicialização do servidor de aplicações (JBoss).

## Parâmetros

Outros parâmetros necessários na configuração do PJe. O cadastro pode ser feito em **Configuração → Sistema → Parâmetro**.

### Auditoria

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| registrarLogConsulta | Indica se a instalação deve manter registro de consultas a objetos do sistema, além do registro padrão das operações de criar, modificar e apagar. | true | Utilizado pelo LogLoadEvent para identificar se as consultas a informações do sistema também devem ser logadas tal como acontece com as operações de criar, modificar e apagar. |

### Central de mandados

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| pje:tipoResultadoDiligencia:id:naoCumprida | Valor do identificador do tipo de resultado de diligência correspondente ao não cumprimento da diligência |  | O valor a ser atribuído ao parâmetro é a chave da entidade Tipo de Resultado de Diligência correspondente ao não cumprimento da diligência. Esse parâmetro foi criado como parte da solução da issue PJEII-15157. |
| pje:centralmandado:registrarMovimentacaoDistribuicaoMandado | Informa se o sistema deve registrar movimentação na distribuição de mandado ao oficial pelo oficial distribuidor | true/false | Esse parâmetro foi criado como parte da solução da issue 7 PJEII-17871. |
| pje:centralmandado:registrarMovimentacaoDevolucaoMandado | Informa se o sistema deve registrar movimentação na devolução de mandado à secretaria pelo oficial | true/false | Esse parâmetro foi criado como parte da solução da issue 7 PJEII-17871. |
| idTipoResultadoDiligenciaRedistribuicao | Contém o id do banco de dados do id do tipo de resultado de diligência que deve ser utilizado para redistribuições | 4 |  |
| pje:centralmandado:tipoordenacaoendereco | Campo que será utilizado na ordenação dos mandados pelo oficial de justiça distribuidor em seu painel (Cep, Logradouro-Numero, Bairro, Cidade) | Cep | Esse parâmetro foi criado como parte da solução da issue PJEII-17344. |

### Diário de justiça

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| horarioLimiteEnvioDiario | Horário limite para envio de matéria do Diário no mesmo dia. Padrao: HH:MM:SS. | 14:00:00 | Utilizado em view da Justiça do Trabalho para encaminhamento de texto a ser publicado no diário da justiça. CadastroExpedienteDEJTAction.java. |
| idConsultaMateriaDiarioTimerParameter | Identificador do timer para consultar matéria no diário da justiça eletrônico. | \-f58ebe8:1357d907950:-7ffd | Não é utilizado no sistema. |
| ultimaDataJobDiario | Data da última consulta de confirmação das matérias publicadas no Diário. | 2012-03-18 | Utilizado em ProcessoParteExpedienteHome.getUltimaDataJobDiario() para recuperar o último momento em que houve verificação do diário da justiça. |

### Distribuição

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| distribuicaoManual | Define se a distribuição vai ocorrer manualmente em instância colegiada. | false | Parâmetro utilizado em ProcessoTrfHome, ProcessoTrfRedistribuicaoHome, update.xhtml, updateIncidente.xhtml, entre outras. |
| valorPesoAssuntoMax | Valor Máximo do Peso do Assunto | 4 | Utilizado em AssuntoTrf.isValorPesoValid() para verificar o cumprimento dos limites negociais mínimos e máximos dos pesos. |
| valorPesoAssuntoMin | Valor Mínimo do Peso do Assunto | 1 | Utilizado em AssuntoTrf.isValorPesoValid() para verificar o cumprimento dos limites negociais mínimos e máximos dos pesos. |
| valorPesoClasseJudicialMax | Valor Máximo do Peso da Classe Judicial | 5 | Utilizado em ClasseJudicial.isValorPesoValid() para verificar o cumprimento dos limites negociais mínimos e máximos dos pesos. |
| valorPesoClasseJudicialMin | Valor Mínimo do Peso da Classe Judicial | 1 | Utilizado em ClasseJudicial.isValorPesoValid() para verificar o cumprimento dos limites negociais mínimos e máximos dos pesos. |

### Fluxo

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| flagUtilizacaoNoDesvio | Indicação se a instância vai utilizar o nó de desvio. | true | Utilizado nas classes SolicitacaoNoDesvioHome, ProcessBuilder e IntercomunicacaoService para tratamento do uso do nó de desvio (chamamento à ordem) no fluxo. |
| fluxoDistribuicao | id do fluxo distribuição | 0 | Identificador de fluxo a ser adotado em instalações configuradas como instâncias colegiadas configuradas para funcionamento com distribuição manual (distribuicaoManual=true). |
| idFluxoPadrao | Identificador do fluxo de tramitação a ser adotado nos casos de classes judiciais que não tiveram um fluxo definido. | 1 | Utilizado em ProcessoTrfHome.distribuirProcesso() para os casos em que a classe não tem fluxo de tramitação definido. |
| idTarefaDarCienciaPartes | Identificador da tarefa do fluxo Dar Ciência às Partes. | 43 | Utilizado para dar atendimento à sistemática de intimações e controles de prazos do TRF5, que é travado no fluxo. |
| idTarefaDarCienciaPartesSREEO | Identificador da tarefa do fluxo Dar Ciência às Partes SREEO. | \-1 | Utilizado para dar atendimento à sistemática de intimações e controles de prazos do TRF5, que é travado no fluxo. |
| idTarefaParaAssinarAtasAudiencia | Identificador interno da tarefa na qual deverá estar o processo para assinatura da(s) ata(s) que vêm do AUD. (específico da JT) | 3 | Utilizado em ProcessoAudienciaJTHome para concentrar as assinaturas de atas em uma tarefa específica do fluxo. |
| pje:fluxo:digitalizacao:codigo | Identificador do fluxo de digitalização quando definido na instalação | FLXDIGIT | Utilizado no detalhamento do processo para permitir a deflagração do fluxo referenciado pelo código. |
| movimentoAutomatico.ELMovimentoRetificacaoClasse | Expressão a ser utilizada no lançamento de movimento de mudança de classe na retificação de autuação | [Movimento de mudança de classe](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/Express%C3%B5es%20em%20fluxos#encaminhamento-para-posto-avan%C3%A7ado) | O correto funcionamento depende da configuração dos movimentos e seus complementos. |
| utilizaFluxoColegiado | Sinaliza que a instalação utiliza fluxo para as decisões colegiadas (as atividades são realizadas no fluxo, não em telas disponíveis nos menus do sistema) | true | Caso o parâmetro seja false, algumas funcionalidades estarão disponíveis também fora do fluxo. |
| pje:fluxo:ordenarTransicoesAlfabeticamente | Ordenar as transições de saída do fluxo | false | Caso o valor seja alterado para true as transições da combo virão ordenadas. |
| pje:fluxo:incidental:sempreDisparar | Permite que fluxos incidentais associados a tipos de documentos sejam disparados quando documentos daqueles tipos forem inseridos no processo | true | Caso o valor seja alterado para false, a configuração de fluxo associado a tipo de documento não terá efeito algum. |

### Localização

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| idLocalizacaoDirecaoDistribuicao | Identificador interno da localização que deve ser atribuída a um diretor de distribuição. | 1739 | É utilizado na tela de definição de papéis de servidores para evitar que seja atribuído o papel “dir\_distribuicao” (sim, está hardcoded) quando a localização do servidor for diversa de uma suposta “Direção de distribuição”. Também é utilizado no NumeroProcessoTrfSuggestBean (nas caixas) para assegurar que, quando aplicado esse suggest a usuário da localização de distribuição, a lista de números de processos seja limitada àqueles que estão no fluxo de distribuição definido por fluxoDistribuicao. |
| idLocalizacaoDirecaoSecretaria | Identificador interno da localizacao atribuível ao gestor de uma secretaria. | 9 | É utilizado na tela de definição de papéis de servidores para evitar que seja atribuído o papel “dirSecretaria” (sim, está hardcoded) quando a localização do servidor for diversa de uma suposta “Direção de secretaria”. Também é utilizado no NoDeDesvioService para cadastro de nós de desvio. |
| idLocalizacaoGabineteMagistrado | Identificador interno da localização atribuível ao local de atuação de um magistrado. | 1342 | É utilizado no NoDeDesvioService para cadastro de nós de desvio. |
| idLocalizacaoPush | Identificador interno da localização a que está vinculada uma localização criada para permitir o envio de notificações por e-mail. | 45 | Utilizado na action ConfirmarCadastroPushAction para criar instância de perfil que receberá as notificações via push. |
| idLocalizacaoTribunal | Identificador da localização do tribunal em instalação de instância de revisão. | `<verificar o Id do registro na tabela parâmetro que representa o próprio tribunal na raiz da hierarquia>` | Utilizado no componente de tratamento de árvore de localizações do cadastro de servidores (LocalizacaoEstruturaServidorSegundoGrauTreeHandler) para limitar as localizações selecionáveis em uma implantação de instância colegiada. Também é utilizada em LocalizacaoTrf5RegiaoTreeHandler, que não é utilizada no projeto. |

### Mensagens

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| mensagemPlantao | Mensagem se deseja tratar o processo no plantão | \- | O processo está sendo protocolado em horário de plantão judiciário. Se a causa for, justificadamente, motivo de atendimento prioritário, selecione a opção abaixo e pressione o botão Prosseguir". Utilizado em Processo/update.xhtml para exibir uma mensagem de advertência quanto ao uso do plantão judicial. |
| textoEmailUploadDocs | textoEmailUploadDocs | \- | O anexo possui, por página, tamanho superior ao de um com resolução máxima permitida de 300 dpi(Art. 12, I, da Res CSJT nº 94/2012). Ajuste as configurações, alterando, p. ex., a resolução ou o modo de digitalização de colorido para preto e branco. Utilizado em AnexarDocumentos para exibir mensagem indicativa de tamanho inválido da página. |
| textoEmailUploadDocs2 | textoEmailUploadDocs2 | \- | Persistindo o erro, procure o suporte especializado (0800) ou compareça à Unidade Judiciária e solicite auxílio a um servidor para anexar os documentos. Utilizado em AnexarDocumentos para exibir mensagem indicativa de tamanho inválido da página. |
| exibirAvisoDocsNaoLidos | Configuração que permitirá que avisos de documentos não lidos sejam exibidos no detalhamento do processo e na execução da tarefa | false | Parâmetro criado pela pendência [PJEII-18215](https://www.cnj.jus.br/jira/login.jsp?permissionViolation=true&os_destination=%2Fbrowse%2FPJEII-18215&page_caps=&user_role=) |
| pje:assinador:avisarAntesSobreDocsNaoLidos | Configuração que permitirá que avisos de documentos não lidos sejam exibidos antes da assinatura de documentos | false | Parâmetro criado pela pendência [PJEII-18215](https://www.cnj.jus.br/jira/login.jsp?permissionViolation=true&os_destination=%2Fbrowse%2FPJEII-18215&page_caps=&user_role=) |
| pje:assinador:mensagemDocsNaoLidosAntesAssinatura | Mensagem a ser exibida antes da assinatura de documentos caso existam documentos não lidos no processo | Processo com documentos não lidos. Deseja continuar? | Parâmetro criado pela pendência [PJEII-18215](https://www.cnj.jus.br/jira/login.jsp?permissionViolation=true&os_destination=%2Fbrowse%2FPJEII-18215&page_caps=&user_role=) |

### Modelo de documento

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| idAvisoPermissaoCadastroAdvogado | Identificador do modelo de documento a ser exibido como aviso de permissão do cadastro de advogado. | 6 | Texto exibido na tela PessoaAdvogado/avisoCadastro.xhtml quando do cadastro do advogado e quando permitirCadastrosBasicos está marcado como false |
| pje:modelo:id:cadastroAdvogado | Identificador do modelo de documento que será exibido como comprovante de cadastro de advogado. | 50 | Utilizado em PessoaAdvogadoHome.gerarTermoDeCompromisso para criar o documento a ser assinado eletronicamente pelo advogado. |
| pje:modelo:id:cadastroJusPostulandi | Identificador do modelo de documento a ser exibido como cadastro de usuário jus postulandi. | 70 | Utilizado em CadastroJusPostulandiHome.validarCadastro para criar o documento a ser assinado eletronicamente pelo usuário. |
| idModeloDocumentoCMAAMarcada | ID do modelo de documento CMAA (Marcada). | 35 | Utilizado para criação de certidão de audiência automática. O evento de deflagração disso não foi identificado no código. |
| idModeloDocumentoCMAANaoMarcada | ID do modelo de documento CMAA (Não Marcada). | 36 | Utilizado para criação de certidão de audiência automática. O evento de deflagração disso não foi identificado no código. |
| idModeloDocumentoFaleConosco | Identificador do modelo de documento que é inserido como informações da página faleConosco.xhtml. | 67 | Utilizado na tela faleConosco |
| idModeloDocumentoInconsistencia | Identificador interno do modelo de documento que deve ser utilizado para indicar a existência de inconsistências quando do cadastro de advogado. | 49 | Utilizado em CadastroAdvogadoHome e ProcessoAdvogadoHome como substitutivo do documento de cadastro quando constatada a existência de inconsistências |
| idModeloDocumentoInconsistenciaJusPostulandi | Identificador interno do modelo de documento que deve ser utilizado para indicar a existência de inconsistências quando do cadastro de usuário jus postulandi. | 71 | Utilizado em CadastroJusPostulandiHome como substitutivo do documento de cadastro quando constatada a existência de inconsistências |
| idModeloEMailMudancaSenha | Identificador do modelo de documento a ser utilizado quando do pedido de substituição de senha nas instalações de homologação. | 122 | Utilizado em UsuarioHome.enviarEMail() para envio de informações sobre troca de senha |
| idModeloIntimacaoPauta | Identificador do modelo de documento a ser utilizado como base para realizar as intimações de fechamento de pauta. | 48 | Utilizado em SessaoJulgamentoService.fecharPauta, em SessaoFechaPautaProcessor e em SessaoJTFechamentoPautaProcessor. |
| idModeloPeticaoIncidental | Identificador interno do modelo de petição incidental a ser carregada automaticamente pelo sistema quando se tratar de anexação a processo judicial que já tenha peça inicial. | 7 | Utilizado em ProcessoDocumentoHome.afterNewInstance(), após chamada a “getNaoTemAlgumDocumentoAnexado()”. |
| idModeloPeticaoInicial | Identificador interno do modelo de petição inicial a ser carregada automaticamente pelo sistema quando da autuação de um processo. | 3 | Utilizado em ProcessoDocumentoHome.afterNewInstance(), após chamada a “getNaoTemAlgumDocumentoAnexado()”. Utilizado, ainda, em AnexarDocumentos.verificarDocumento() para assegurar a inserção de pelo menos uma peça inicial. |
| idTipoModeloDocumentoCMAA | ID do tipo do modelo do documento CMAA. | 20 | Utilizado para criação de certidão de audiência automática. O evento de deflagração disso não foi identificado no código. |
| idModeloDocumentoCertidaoJulgamento | (inserir descrição) | (inserir valor) | (inserir comentário) |
| pje:modelo:inteiroTeor | Identificador do modelo de documento do inteiro teor do acórdão. | identificador do modelo | Utilizado para customizar a formatação dos documentos do tipo "Inteiro Teor do Acórdão" |

### Movimentação

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| agrupamentoJulgamento | Identificador do agrupamento de movimentações de julgamento | 12 | O parâmetro é utilizado no objeto `br.com.infox.pje.service.PautaJulgamentoService` e em `processoJaPossuiEventoLancadoNaSessao` e no arquivo `modaisSecretarioSessao.xhtml` para recuperar se já houve um movimento de julgamento durante a sessão ou os movimentos passíveis de lançamento posteriormente. |
| codMovimentoAssistenciaGratuita | Código do movimento de concessão da assistência judiciária gratuita | 11024 | O parâmetro é utilizado pela classe `br.jus.csjt.pje.business.service.ResultadoSentencaService` para registrar a movimentação de concessão de assistência judiciária gratuita. |
| codMovimentoAudiencia | Código do movimento de designação de audiência | 970 | O parâmetro é utilizado para lançar o movimento pertinente nos métodos `ProcessoTrfHome.lancarMovimentoAudiencia()`. |
| codMovimentoBNDT | Código do movimento de envio de registro para o Banco Nacional de Devedores Trabalhistas | 50085 | O parâmetro é utilizado no método `DebitoTrabalhistaService.lancarMovimentoDebitoTrabalhista()`. |
| codMovimentoCustas | Código do movimento de exigência ou inexistência de custas | 50073 | O parâmetro é utilizado pela classe `br.jus.csjt.pje.business.service.ResultadoSentencaService` para registrar a movimentação de concessão de assistência judiciária gratuita. |
| codMovimentoDisponibilizacaoDiario | Código do movimento do CNJ de disponibilização da matéria no Diário | 1061 | O parâmetro é utilizado no método `ProcessoParteExpedienteHome.lancarMovimentosDiario()` para registrar que houve uma disponibilização de expediente em diário eletrônico. |
| codMovimentoDistribuicao | Código nacional do movimento de distribuição de processos judiciais | 26 | O parâmetro é utilizado no método `ProcessoTrfHome.executarDistribuicao()` para viabilizar o registro da distribuição. |
| codMovimentoExclusao | Código do movimento de exclusão de outros movimentos | 50033 | O parâmetro é utilizado para permitir a exclusão de de movimentos na tela `csjt/AjusteMovimentacao/listView.xhtml`, sendo referenciado em `ProcessoEventoList.getRenderedCheckboxRemover()` e em `LancadorMovimentosService.getMovimentoExclusao()`. |
| codMovimentoIncluidoProcessoPauta | Código do movimento de inclusão do processo em pauta de sessão de julgamento. | 417 | O parâmetro é utilizado no método `PautaSessaoManager.lancarMovimentoInclusaoPauta()` para registrar que o processo entrou em pauta. |
| codMovimentoLiquidacaoHomologacao | Código do movimento de homologação de liquidação de obrigação de pagar | 50047 | O parâmetro é utilizado no método `ObrigacaoPagarService.lancarMovimentoHomologaObrigacaoPagar()`, no pacote da Justiça do Trabalho. |
| codMovimentoNaoAssistenciaGratuita | Código do movimento da não concessão da assistência judiciária gratuita | 334 | O parâmetro é utilizado pela classe `br.jus.csjt.pje.business.service.ResultadoSentencaService` para registrar a movimentação de não concessão de assistência judiciária gratuita. |
| codMovimentoPublicacaoDiario | Código do movimento do CNJ de publicação da matéria no Diário | 92 | O parâmetro é utilizado no método `ProcessoParteExpedienteHome.lancarMovimentosDiario()` para registrar que houve uma publicação de expediente em diário eletrônico. |
| codMovimentoRecebimento | Código nacional do movimento de recebimento do processo, usado ao receber um processo originado de outro grau. | 132 | O parâmetro é utilizado no método `br.com.jt.pje.manager.VotoManager.lancarMovimentoAptoParaSessao()`. |
| codMovimentoRedistribuicao | Código nacional do movimento de redistribuição de processos | 36 | O parâmetro é utilizado nas classes `ProcessoTrfHome` e `ProcessoTrfRedistribuicaoHome`. |
| codMovimentoRemessa | Código do movimento de remessa do processo, usado ao enviar um processo de um grau para outro. | 123 | O parâmetro está sendo utilizado no método `AbstractRemessaProcesso.inserirEventoMovimentoRemessa()`. |
| idEventoArquivamento | Identificador interno da movimentação processual que significa o arquivamento do processo judicial (movimento 861). | 197 | Utilizado para cálculos estatísticos. |
| idEventoArquivamentoDefinitivo | Identificador interno da movimentação processual que significa o arquivamento definitivo do processo judicial (movimento 246). | 198 | Utilizado para cálculos estatísticos. |
| idEventoArquivamentoProvisorio | Identificador interno da movimentação processual que significa o arquivamento provisório do processo judicial (movimento 245). | 199 | Utilizado para cálculos estatísticos. |
| idEventoBaixaDefinitiva | Identificador interno da movimentação processual que significa a baixa definitiva do processo judicial (movimento 22). | 189 | Utilizado para cálculos estatísticos. |
| idEventoConclusao | Identificador interno do movimento de conclusão ou o ramo imediatamente superior a tipos de conclusão tratados como movimentos distintos (movimento 51). | 251 | Utilizados para identificação de processos conclusos (ProcessoTrfHome ou classes estatísticas). |
| idEventoDecisao | Identificador de ramo de movimentos que indicam a existência de uma decisão no processo judicial (movimento 3). | 2 | Utilizado para cálculos estatísticos. |
| idEventoDesarquivamento | Identificador interno da movimentação processual que significa o desarquivamento do processo judicial (movimento 893). | 209 | Utilizado para cálculos estatísticos. |
| idEventoDistribuicao | Identificador interno da movimentação processual que significa que houve uma distribuição de processo judicial (movimento 26). | 191 | Utilizado para cálculos estatísticos. |
| idEventoExtincaoPunibilidade | Identificador interno da movimentação processual correspondente à extinção de punibilidade (movimento 973). | 141 | Utilizado para cálculos estatísticos. |
| idEventoJulgamento | Identificador interno da movimentação processual que significa que houve um julgamento no processo judicial (movimento 193). | 123 | Utilizado para cálculos estatísticos. |
| idEventoJulgamentoEmDiligencia | Identificador interno da movimentação processual correspondente ao ramo de conversão do julgamento em diligência (movimento 11022). | 111 | Utilizado para cálculos estatísticos. |
| idEventoMudancaClasseProcessual | Identificador interno da movimentação processual correspondente à mudança de classe processual (movimento 10966). | 217 | Utilizado para cálculos estatísticos. |
| idEventoReativacao | Identificador interno da movimentação processual correspondente à reativação de um processo judicial (movimento 849). | 220 | Utilizado para cálculos estatísticos. |
| idEventoRecebimento | Identificador interno da movimentação processual correspondente ao recebimento de um processo judicial (movimento 132). | 221 | Utilizado para cálculos estatísticos. |
| idEventoRecebimento1grau | Identificador interno de movimentação processual indicativa de que o processo foi recebido de instância superior. | 221 | Utilizado no método `ProcessoTrfHome.verificaRemetido2Grau()` para identificar se um processo foi recebido após ter sido enviado para o segundo grau com registro do evento recuperado de `ParametroUtil.getEventoRemetidoTrf()`. |
| idEventoRedistribuicao | Identificador interno de movimentação processual indicativa da ocorrência de uma redistribuição (movimento 36). | 193 | Utilizado para cálculos estatísticos e para identificar se um processo judicial foi redistribuído durante sua tramitação. |
| idEventoRemetidoTrf | Identificador interno do movimento processual que indica que o processo judicial foi remetido para instância superior. | 578 | Utilizado no método `ProcessoTrfHome.verificaRemetido2Grau()` para identificar se um processo foi remetido ao segundo grau. |
| idEventoSemResolucaoMerito | Identificador interno da movimentação processual correspondente à emergência de um julgamento sem apreciação do mérito (movimento 218). | 158 | Utilizado para cálculos estatísticos. |
| idEventoSuspensaoDecisao | Identificador interno da movimentação processual correspondente à emergência de uma decisão que causou a suspensão ou sobrestamento do feito (movimento 25). | 92 | Utilizado para cálculos estatísticos. |
| idEventoSuspensaoDespacho | Identificador interno da movimentação processual correspondente à emergência de uma despacho que causou a suspensão ou sobrestamento do feito (movimento 11025). | 115 | Utilizado para cálculos estatísticos. |
| idProcessoIncluidoPauta | Id do evento Inclusão em Pauta | 251 | Utilizado no fechamento de pauta antigo. Atualmente, o fechamento realizado por `SessaoJulgamentoService.fecharPauta()` está com o movimento hardcoded. |
| idProcessoRetiradoPauta | Identificador interno do movimento indicativo de que houve uma retirada de processo de pauta. | 252 | Utilizado no `SessaoHome`, `SessaoPautaProcessoHome`, `SessaoPautaJulgamentoHome` e `ProcessoTrfHome` para indicar que um dado processo foi retirado da pauta de julgamento. |
| idTipoResultadoDiligenciaConcluida | Identificador do resultado de diligência que deve ser indicativo de que um determinado expediente da central de mandados foi concluído. | 3 | Utilizado em `DiligenciaHome` para viabilizar o reconhecimento de que um expediente foi encaminhado pelo oficial de justiça indicando o total cumprimento da diligência. |
| idTipoResultadoDiligenciaCumprido | Identificador do resultado de diligência que deve ser indicativo de que um determinado expediente da central de mandados foi cumprido. | 2 | Utilizado em `DiligenciaHome` para viabilizar o reconhecimento de que um expediente foi encaminhado pelo oficial de justiça indicando o total cumprimento da diligência. |
| idTipoResultadoDiligencianaoCumprida | Identificador do resultado de diligência que deve ser indicativo de que um determinado expediente da central de mandados não foi cumprido. | 4 | Utilizado em `DiligenciaHome` para viabilizar o reconhecimento de que um expediente foi encaminhado pelo oficial de justiça indicando o total cumprimento da diligência. |
| idTipoResultadoDiligenciaRedistribuicao | Identificador do resultado de diligência que deve ser indicativo de que um determinado expediente da central de mandados foi encaminhado para redistribuição. | 1 | Utilizado em `DiligenciaHome` para viabilizar o reconhecimento de que um expediente foi encaminhado pelo oficial de justiça para redistribuição. |
| pje:movimento:codigo:sessao:deliberacao | Código do movimento que indica a deliberação em sessão | opcional | Utilizado nas sessões de julgamento na operação "Registra Evento". Caso não informado, é utilizado o movimento nacional 873. |
| pje:movimento:codigo:sessao:retirado | Código do movimento que indica a retirada de pauta | opcional | Utilizado nas sessões de julgamento na operação "Registra Evento". Caso não informado, é utilizado o movimento nacional 987. |
| pje:movimento:codigo:sessao:adiado | Código do movimento que indica o adiamento para a próxima sessão | opcional | Utilizado nas sessões de julgamento na operação "Registra Evento". Caso não informado, o movimento não é registrado. |
| pje:movimento:codigo:sessao:vista | Código do movimento que indica o pedido de vista | opcional | Utilizado nas sessões de julgamento na operação "Registra Evento". Caso não informado, o movimento não é registrado. |
| pje:painel:visualizaUltimaMovimentacao | Permite que a última movimentação do processo seja visível no painel de listagem do usuário | true | Esse parâmetro foi criado a partir da solução da issue [PJEII-3616](https://www.cnj.jus.br/jira/login.jsp?permissionViolation=true&os_destination=%2Fbrowse%2FPJEII-3616&page_caps=&user_role=) |
| pje:movimento:codigo:recebidoMandadoCumprimento | Código da movimentação de recebimento de mandado para cumprimento | 985 | Esse parâmetro foi criado a partir da solução da issue [PJEII-17181](https://www.cnj.jus.br/jira/login.jsp?permissionViolation=true&os_destination=%2Fbrowse%2FPJEII-17181&page_caps=&user_role=) |
| pje:movimento:codigo:mandadoDevolvido | Código da movimentação de mandado devolvido | 106 | Esse parâmetro foi criado a partir da solução da issue [PJEII-17181](https://www.cnj.jus.br/jira/login.jsp?permissionViolation=true&os_destination=%2Fbrowse%2FPJEII-17181&page_caps=&user_role=) |

### Papel

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| idOficialJusticaDistribuidor | Identificador interno do papel Oficial de justiça distribuidor. | `<informar o valor registrado na base de dados do tribunal>` | Utilizado em `ProcessoExpedienteCentralMandadoHome`, indiretamente, por meio de `ParametroUtil.getPapelOficialJusticaDistribuidor()`. |
| pje:papel:id:oficialJustica | Identificador interno do papel Oficial de justiça. | `<informar o valor registrado na base de dados do tribunal>` | Utilizado em `ProcessoExpedienteCentralMandadoHome`, indiretamente, por meio de `ParametroUtil.getPapelOficialJustica()`. |
| idPapelAdvogado | Identificador interno do papel de advogado. | 1005 | Utilizado em mais de uma dezena de métodos, indiretamente, por meio de `ParametroUtil.getPapelAdvogado()`. Diretamente, é utilizado em `ProcessoParteHome.seParteIsAdvogadoQueEstaCadastrando()`. |
| idPapelAssistenteAdvogado | Identificação do papel de assistente de advogado. | 5687 | Utilizado em diversas chamadas para identificar usuários assistentes de advogados, indiretamente, por meio de `ParametroUtil.getPapelAssistenteAdvogado()`. |
| idPapelAssistenteGestorAdvogado | Identificação do papel de assistente gestor de advogado. | 5709 | Utilizado em `PessoaAssistenteAdvogadoLocalizacao`, `Authenticator` e `PessoaHome`, indiretamente, por meio de `ParametroUtil.getPapelAssistenteGestorAdvogado()`. |
| idPapelAssistenteGestorProcuradoria | Identificação do papel de assistente gestor de procuradoria. | 5710 | Utilizado em `PessoaAssistenteProcuradoriaLocalizacao`, `Authenticator` e `PessoaHome`, indiretamente, por meio de `ParametroUtil.getPapelAssistenteGestorProcuradoria()`. |
| idPapelAssistenteProcuradoria | Identificação do papel de assistente de procuradoria. | 5679 | Utilizado em `PessoaAssistenteProcuradoriaLocalizacao`, `Authenticator`, `ProcessoDocumentoHome` e `PessoaHome`, indiretamente, por meio de `ParametroUtil.getPapelAssistenteGestorProcuradoria()`. |
| idPapelDiretorSecretaria | Identificação do papel de diretor de secretaria. | 1338 | Utilizado indiretamente por meio de `ParametroUtil.getPapelDiretorSecretaria()` nos componentes `processoDocumentoTrfHome`, `OrgaoJulgadorDAO` e `RpvAction`. |
| idPapelEditarMinuta | Identificadores dos papéis que podem editar minuta. | `<informar os identificadores separados por vírgulas>` | Utilizado em `ProcessoDocumento Home` e em `ParametroUtil`. |
| idPapelJusPostulandi | Id do papel pessoa jus postulandi (até versão 1.4.6.x) / (a partir da versão 1.6.x). | 5788 | Utilizado no cadastro de usuário que pretende gozar do jus postulandi para identificar o papel adequado a ser atribuído. |
| idPapelMagistrado | Identificador interno do papel de magistrado. | 1469 | Utilizado em dezenas de chamadas para identificar o papel adotado como se tratando de papel do magistrado. |
| idPapelPerito | Identificador interno do papel de perito (até versão 1.4.6.x) / (a partir da versão 1.6.x). | 5200 | Utilizado para identificar, em `Authenticator`, `PessoaHome` e `ProcessoDocumentoNaoLidoList`, se o usuário é um usuário externo. |
| idPapelProcurador | Identificador interno do papel de procurador. | 1655 | Utilizado em diversas chamadas para identificar usuários procuradores. |
| idPapelProcuradorChefe | Identificador interno do papel de procurador gestor. | ? | Utilizado em diversas chamadas para identificar usuários procuradores gestores, que possuem permissões de administração da procuradoria/defensoria e dos usuários pertencentes a ela. |
| idPapelPush | Identificador interno do papel atribuído aos usuários do serviço PUSH. | 5837 | Utilizado em `ConfirmarCadastroPushAction` para atribuir adequadamente o papel para o usuário da funcionalidade PUSH. |
| idTipoParteAdvogado | Identificador interno do tipo de parte advogado. | 7 | Utilizado em diversos pontos do sistema para identificar que uma determinada parte é, em verdade, advogado de outra parte em um dado processo. |
| idTipoParteCessionario | Identificador interno do tipo de parte considerada como cessionário de um valor a ser pago em requisição judicial. | 76 | Utilizado em `RpvAction` e `RpvManager` para identificar se uma determinada parte do processo é cessionário de um valor pago para viabilizar sua inclusão como potencial beneficiário. |
| idTipoParteHerdeiro | Identificador interno do tipo de parte considerada como herdeiro para efeito de pagamento de valor. | 77 | Utilizado em `RpvAction` e `RpvManager` para identificar se uma determinada parte do processo é herdeiro para viabilizar a inclusão como potencial beneficiário. |
| idTipoPartePerito | Identificador interno do tipo de parte que deve ser considerado como perito em um processo judicial. | 75 | Utilizado em `RpvAction` e `RpvManager` para identificar se uma determinada parte do processo é perito para viabilizar a inclusão de todos os advogados como potenciais beneficiários. |
| idTipoParteProcurador | Identificador interno do tipo de parte que deve ser considerado como advogado em um processo judicial. | 9 | Utilizado em `RpvAction` e `RpvManager` para identificar se uma determinada pessoa é o representante do beneficiário de uma requisição de pagamento, assim como para viabilizar a inclusão de todos os advogados como potenciais beneficiários. |
| idTipoParteRepresentante | Identificador interno do tipo de parte que deve ser considerado como representante de uma pessoa para recebimento de um pagamento. | 47 | Utilizado em `RpvAction` para identificar se uma determinada pessoa é o representante do beneficiário de uma requisição de pagamento. A condição de representante é reconhecida se o tipo da parte for advogado, procurador ou herdeiro ou, se não identificado nenhum desses dois, o resultado da recuperação do tipo indicado por este parâmetro. |
| idTipoPessoaAdvogado | Identificador do tipo de pessoa que deve ser atribuído a um pessoa cadastrada como advogado no sistema. | 3 | Utilizado em diversos pontos do sistema como forma de substituir chamadas a “p instanceof PessoaAdvogado”. |
| idTipoPessoaEntidade | Identificador interno do tipo de pessoa (ramo) que contém as entidades de direito público. | 4 | Utilizado no método `RpvAction` para identificar se uma determinada pessoa faz parte da administração pública. |
| idTipoPessoaEscritorioAdvocacia | Identificação do tipo de pessoa escritório de advocacia. | 59 | Utilizado para permitir a gravação de um `EscritorioAdvocacia` com um tipo de pessoa jurídica padronizado. |
| idTipoPessoaFisica | Identificador interno do tipo de pessoa física. | 3 | Utilizado para permitir a gravação de uma `PessoaFisica`. |
| idTipoPessoaJuridica | Id do tipo de pessoa jurídica. | 2 | Utilizado para permitir a gravação de uma `PessoaJuridica`. |
| idTipoPessoaJusPostulandi | Id do tipo pessoa jus postulandi. | 3 | Utilizado para permitir a gravação de uma `PessoaJusPostulandi`. |
| idTipoPessoaMagistrado | Tipo pessoa perito. | 3 | Utilizado para permitir a gravação de uma `PessoaMagistrado`. |
| idTipoPessoaOficialJustica | Identificador interno do tipo de pessoa oficial de justiça no sistema. | 3 | Utilizado para permitir a gravação de uma `PessoaOficialJustica`. |
| idTipoPessoaPerito | Identificador interno do tipo de pessoa perito no sistema. | 3 | Utilizado para permitir a gravação de uma `PessoaPerito`. |
| idTipoPessoaServidor | Identificador interno do tipo de pessoa servidor no sistema. | 3 | Utilizado para identificar se uma dada pessoa é do tipo servidor. |
| id\_tipo\_parte\_litisconsorte | ID do tipo parte (LITISCONSORTE). | 54 | Utilizado em `TipoParte.isLitisconsorte` para prover informação utilizada pela `preCadastroPessoa.xhtml`. |
| permitirCadastrosBasicos | Permitir que usuários manipulem os cadastros básicos da aplicação. | true | Utilizado para controlar se os usuários (qualquer um) poderá manipular informações relativas a Papel, Cep, Agrupamento, cadastro de advogados e de seus escritórios, aplicação de classe, estado civil, etnia, profissões, tipos de documento de identificação, tipo de pessoa, tipo de processodocumento e movimentações. |
| permitirCadastroAdvogado | Permitir cadastro do advogado. | true | Permitir cadastro do advogado. |
| pje:agrupador:docsNaoLidos:papeis | Permite acrescentar papeis que, ao adicionar documentos a processos, os documentos adicionados por esses papeis serão apresentados no agrupador de documentos não lidos (referência: regra RN574). | Procurador/Gestor | Parâmetro criado pela pendência [PJEII-17903](https://www.cnj.jus.br/jira/login.jsp?permissionViolation=true&os_destination=%2Fbrowse%2FPJEII-17903&page_caps=&user_role=) |

### Plantão judicial

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| horaInicioPlantao | Hora de início do plantão no formato HH:mm | `<vazio >` | Utilizado em `PlantaoJudicialAction` para recuperar o horário de início de plantão. |
| horaTerminoPlantao | Hora de término do plantão no formato HH:mm | `<vazio>` | Utilizado em `PlantaoJudicialAction` para recuperar o horário de término de plantão. |
| idOjPlantao | Identificador do órgão julgador plantonista. | \-1 | Utilizado em `PlantaoJudicialAction` para identificar se há um órgão julgador plantonista. |

### Qualificação

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| idQualificacaoCnpj | Identificador interno da qualificação de CNPJ | 5 | Utilizado na consulta de processo para assegurar que `consultaProcessoConsultadoGrid.component.xml` retorne valores controlados por esses parâmetros. |
| idQualificacaoCpf | Identificador interno da qualificação de CPF | 2 | Utilizado na consulta de processo para assegurar que `consultaProcessoConsultadoGrid.component.xml` retorne valores controlados por esses parâmetros. |

### RPV

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| idAssuntoMultaAstreintes | Código de identificação interno do assunto Multa Cominatória / Astreintes usado no cadastro de RPV | 1169 | Identificador de assunto que significa a imposição de multa ou pena no processo, utilizado para incluir tal assunto quando da preparação de requisição de pagamento em que o usuário, na tela de preparação de requisições (RpvAction), indica a existência de uma imposição tal. |
| idPessoaSecaoJudiciaria | \[SETAR MANUALMENTE\] Referencia o id da Pessoa Juridica cadastrada no sistema que representa a Seção Judiciária. | \-1 | Utilizado em RpvAction e RpvManager para identificar se uma determinada parte do processo é cessionário de um valor pago para viabilizar sua inclusão como potencial beneficiário. |
| idStatusRpvCancelada | Identificador interno indicativo de que uma requisição de valor foi cancelada. | 3 | Utilizado em RpvAction e RpvManager para identificar se uma determinada parte do processo é cessionário de um valor pago para viabilizar sua inclusão como potencial beneficiário. |
| idStatusRpvDevolvida | Identificador interno indicativo de que uma requisição de valor foi devolvida. | 4 | Utilizado em RpvAction e RpvManager para identificar se uma determinada parte do processo é cessionário de um valor pago para viabilizar sua inclusão como potencial beneficiário. |
| idStatusRpvElaborado | Identificador interno indicativo de que uma requisição de valor foi elaborada. | 10 | Utilizado em RpvAction e RpvManager para identificar se uma determinada parte do processo é cessionário de um valor pago para viabilizar sua inclusão como potencial beneficiário. |
| idStatusRpvEmConferencia | Identificador interno indicativo de que uma requisição de valor está em conferência. | 2 | Utilizado em RpvAction e RpvManager para identificar se uma determinada parte do processo é cessionário de um valor pago para viabilizar sua inclusão como potencial beneficiário. |
| idStatusRpvEmElaboracao | Identificador interno indicativo de que uma requisição de valor está em elaboração. | 5 | Utilizado em RpvAction e RpvManager para identificar se uma determinada parte do processo é cessionário de um valor pago para viabilizar sua inclusão como potencial beneficiário. |
| idStatusRpvEmValidacao | Identificador interno indicativo de que uma requisição de valor está sob validação. | 1 | Utilizado em RpvAction e RpvManager para identificar se uma determinada parte do processo é cessionário de um valor pago para viabilizar sua inclusão como potencial beneficiário. |
| idStatusRpvRejeitada | Identificador interno indicativo de que uma requisição de valor foi rejeitada. | 9 | Utilizado em RpvAction e RpvManager para identificar se uma determinada parte do processo é cessionário de um valor pago para viabilizar sua inclusão como potencial beneficiário. |
| numeroInicialRpv | Numero inicial de requisições de pagamento. | 500 | Utilizado para permitir a numeração sequencial de requisições de pagamento elaboradas pelo `NumeroRpvUtil`. |
| percLimiteValorCompsar | Valor percentual para a simulação do Limite do Valor a Compensar, que será utilizado no RPV. | 0.97 | Utilizado em RpvManager e RpvSimulacaoAction para identificar eventuais limites de valores a compensar. |
| quantidadeSalarios | Quantidade de Salários | 60 | Utilizado para cálculo de requisições de pequeno valor em `RpvAction.validarValoresPartes()`. |
| valorSalarioMinimo | Valor do Salário Minimo | 500 | Utilizado em `ParametroUtil.getValorSalarioMinimo` e em `RpvAction.validarValoresPartes()`. Indiretamente, por meio de `ParametroUtil`, é utilizado em `ProcessoTrfHome.tetoJuizado`, que, por sua vez, é utilizado em `updateIncidente`. |

### Serviços externos

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| calcularCustasUrl | Endereço da página para cálculo de custas processuais. | [http://url](http://url/) | O parâmetro é utilizado para criar um link na página linkCustasProcesso.xhtml, que é incluída na aba “Características do processo” quando não se trata de instalação da Justiça do Trabalho ou a classe escolhida não tem custas. |
| chaveOAB | Chave de acesso ao WS OAB | `<cada tribunal deve efetuar acôrdo de cooperação com o Conselho Federal da OAB para obter a chave de acesso>` | O parâmetro é utilizado na classe ConsultaClienteOAB para viabilizar a consulta ao WEB service da Ordem dos Advogados do Brasil |
| dslinkPjePush | Caminho do sistema usado para enviar o link de documentos do PJe no e-mail das movimentações do Pje PUSH. | \-1 | Caminho básico que é concatenado com o trecho “/Painel/painel\_usuario/documentoHTML.seam?idBin=” a fim de permitir que os usuários do PJePush possam clicar diretamente em documentos a partir das mensagens. |
| pLoginUsuarioWsReceita | Nome do orgão usado como parâmetro pelos webservices de consulta de CPF e CNPJ na receita. | CNJ | Utilizado na implementação do cliente do serviço da Receita Federal provido pelo Conselho da Justiça Federal (consultaClienteReceitaP?CJF para identificar a o usuário que realiza a consulta. |
| pNomeAplicacaoWsReceita | Nome do orgão usado como parâmetro pelos webservices de consulta de CPF e CNPJ na receita. | PJE | Utilizado na implementação do cliente do serviço da Receita Federal provido pelo Conselho da Justiça Federal (consultaClienteReceitaP?CJF para identificar a aplicação (sistema) que realiza a consulta. |
| pNomeOrgaoWsReceita | Nome do órgão usado como parâmetro pelos webservices de consulta de CPF e CNPJ na receita. | CNJ | Utilizado na implementação do cliente do serviço da Receita Federal provido pelo Conselho da Justiça Federal (consultaClienteReceitaP?CJF para identificar o órgão (tribunal) que realiza a consulta. |
| senhaWebserviceBNDT | Senha utilizada pelo Webservice do BNDT | 123 | Utilizado em DebitoTrabalhistaService para encaminhamento de informações ao banco nacional de devedores trabalhistas. |
| tipoConexaoWebService | Tipo de conexão que será utilizada no webservice de consulta a dados da Receita Federal: CNJ ou CJF. | CNJ | Utilizado em ConsultaClienteWebService para compor o nome do componente de consulta à Receita Federal. |
| urlWebserviceBNDT | Url de conexao com bndt | [https://homologacao.tst.jus.br/cndtws/resource/envio/conteudoXML](https://homologacao.tst.jus.br/cndtws/resource/envio/conteudoXML) | Utilizado em DebitoTrabalhistaService para encaminhamento de informações ao banco nacional de devedores trabalhistas. |
| urlWsdlConsultaOab | Url do Wsdl da consulta nacional da OAB | [http://www5.oab.org.br/cnaws/service.asmx?WSDL](http://www5.oab.org.br/cnaws/service.asmx?WSDL) | Utilizado em ConsultaClienteOAB.consultaDados() para ter acesso ao cadastro nacional de advogados. |
| urlWsdlReceita | Url do webservice da Receita Federal | [https://www.cnj.jus.br/testeReceitaFederal/wsdl/proxyReceita.wsdl](https://www.cnj.jus.br/testeReceitaFederal/wsdl/proxyReceita.wsdl) | Utilizado em ConsultaClienteReceitaPFCJF e ConsultaClienteReceitaPFCNJ para recuperar o endereço do endpoint do serviço de consulta à base de CPFs da Receita Federal |
| urlWsdlReceitaCnpj | Url do webservice da Receita Federal para CNPJ | [https://www.cnj.jus.br/testeReceitaFederal/wsdl/proxyReceitaCNPJ.wsdl](https://www.cnj.jus.br/testeReceitaFederal/wsdl/proxyReceitaCNPJ.wsdl) | Utilizado em ConsultaClienteReceitaPJCJF e ConsultaClienteReceitaPJCNJ para recuperar o endereço do endpoint do serviço de consulta à base de CNPJs da Receita Federal |
| usuarioWebserviceBNDT | Usuário utilizado pelo Webservice do BNDT | [henrique.soares@tst.jus.br](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/) | Utilizado em DebitoTrabalhistaService para encaminhamento de informações ao banco nacional de devedores trabalhistas. |

### Sessão de julgamento

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| tempoSustentacaoOral | Tempo padrão (em minutos) para sustentação oral em uma sessão de julgamento. | \-1 | Referenciado em processoApregoadoSecretario.xhtml, indicando o tempo para sustentação oral. |
| tipoSituacaoPautaAguardandoSessaoJulgamento | Identificador do tipo de situação de julgamento da Justiça do Trabalho segundo a qual um dado processo está aguardando a ocorrência da sessão de julgamento. | 1 | Indica o TipoSituacaoPauta indicativa de que o processo aguarda o julgamento. É utilizado na implementação da Justiça do Trabalho relativa à sessão de julgamento. |
| tipoSituacaoPautaApregoado | Identificador do tipo de situação de julgamento da Justiça do Trabalho segundo a qual um dado processo foi apregoado para julgamento. | 3 | Indica o TipoSituacaoPauta indicativa de que o processo foi apregoado para julgamento. É utilizado na implementação da Justiça do Trabalho relativa à sessão de julgamento. |
| tipoSituacaoPautaJulgado | Identificador do tipo de situação de julgamento da Justiça do Trabalho segundo a qual um dado processo foi julgado. | 4 | Indica o TipoSituacaoPauta indicativa de que o processo foi julgado. É utilizado na implementação da Justiça do Trabalho relativa à sessão de julgamento. |
| tipoSituacaoPautaPendente | Identificador do tipo de situação de julgamento da Justiça do Trabalho segundo a qual um dado processo ainda está pendente de julgamento. | 2 | Indica o TipoSituacaoPauta indicativo de que o processo está pendente de julgamento. É utilizado na implementação da Justiça do Trabalho relativa à sessão de julgamento. |
| tipoSituacaoPautaRetiradoPauta | Identificador do tipo de situação de julgamento da Justiça do Trabalho segundo a qual um dado processo foi retirado de pauta. | 5 | Indica o TipoSituacaoPauta tido como se tratando de uma retirada de pauta de julgamento. É utilizado na implementação da Justiça do Trabalho relativa à sessão de julgamento. |
| pje:sessao:intimacaoMultipla | Parâmetro identificador da forma de intimação das partes de um processo automaticamente, no fechamento da pauta da sessão e no fechamento da sessão de julgamento. | false | Indica se a parte e seu representante serão intimados (true) ou se apenas o representante será intimado (false). |

### Sistema

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| aplicacaoSistema | Define se a instalação está configurada para funcionamento exclusivamente monocrática (1) ou em instância colegiada (2). | 2 | Mantido como está. |
| cdUfRemessaProcesso | Código do estado o qual o sistema pertence. | PE | O parâmetro é utilizado nas classes AbstractRemessaProcesso, AbstractRemessaoProcessoValidacao e NovoWork, todas do pacote br.com.infox.cliente, fazendo referências fixas em códigos a chamadas de bancos de dados para uso de remessa. |
| emailSistema | Email configurado como se tratando do remetente de mensagens do sistema. | `<vazio >` | Utilizado para identificação do remetente de mensagens do sistema na troca de senha e da sistemática de intimação automática do TRF5. |
| esperaMaximaSemPrazo | Tempo máximo para o expediente sem prazo ser considerado fechado | \- | Se esse parâmetro não estiver presente na instalação, o sistema utilizará o tempo padrão de 30 dias.Esse parâmetro não está presente na instalação padrão do PJe por ser utilizado apenas se estiver configurado |
| idEscolaridadeEnsinoSuperior | Identificador da escolaridade indicativa de ensino superior completo. | 6 | Utilizado no cadastro de advogado (CadastroAdvogadoHome e PessoaAdvogadoHome) para assegurar, como padrão do campo escolaridade, a escolaridade superior. |
| idJurisdicao | Identificador interno da jurisdição a que estão vinculados os processos. | 2 | Identifica a jurisdição padrão da instalação atual, sendo utilizada no método ProcessoTrfHome.verificaJurisdicao(), que é executado na movimentar.page.xml exclusivamente para instalações configuradas para segundo grau. |
| idProfissaoAdvogado | Profissão do tipo advogado | 6 | Utilizado no cadastro de advogado (CadastroAdvogadoHome e PessoaAdvogadoHome) para assegurar, como padrão do campo profissão, o valor “advogado”. |
| idUsuarioSistema | Id do usuário utilizado internamente pelo sistema. | 0 | Identificador interno do usuário “sistema”. |
| imgLogo | Logotipo utilizado na tela de login. | img/brasaoRep.png | Utilizado em login.xhtml e em informacoes.xhtml |
| imgLogoMax | Logotipo utilizado como pano de fundo da tela principal vazia. | /img/brasaoOri.png | Utilizado em home.xhtml |
| imgLogoMini | Logotipo utilizado em relatórios e à esquerda do cabeçalho. | /img/brasaoMini.png | Utilizado em dezenas de pontos de exibição no sistema. |
| inExibicaoTitularidadeProcesso | Indica a instância para exibir a titularidade no nº do processo: 0-Todos, 1-1º grau e 2-2º grau. | 1 | Utilizado em classes de exibição de processos para incluir uma sigla relativa ao fato de o processo estar com um juiz titular ou substituo. |
| inRemessaProcessoProducao | Envio de processo: produção ou homologação. (Ver tabela client.tb\_remessa\_processo\_host); | false | Utilizado em AbstractRemessaProcesso e AbstractRemessaProcessoValidacao na sistemática de envio de processos via banco de dados. |
| loginComCertificado | Define se o sistema exigirá que o login seja feito exclusivamente por meio de certificado digital. | false | Utilizado em login.page.xml e login.xhtml. |
| modoTesteCertificado | Indica que será usado o certificado de testes nas assinaturas | true | Utilizado em VerificaCertificado.isModoTesteCertificado para identificar se a aplicação está configurada para não exigir o certificado digital válido como critério de validação de assinaturas digitais. |
| nomeSecaoJudiciaria | Nome do órgão do Poder Judiciário a que se aplica o sistema. | Tribunal | Utilizado em dezenas de chamadas para reportar o nome do órgão do Poder Judiciário a que se aplica a instalação. |
| nomeSistema | Nome do sistema. | Processo Judicial Eletrônico | Utilizado em dezenas de chamadas para reportar o nome principal exibido no cabeçalho das telas, assim como para incluir em relatórios estatísticos. |
| numeroInicialProcesso | Número sequencial (NNNNNNN) do primeiro processo a ser distribuído em um dado ano. | 800001 | Utilizado em NumeroProcessoUtil para identificar o primeiro número de um processo distribuído em um dado ano. Caso a instalação seja feita com número superior a 1, deve-se procurar modificar o parâmetro para 1 após a primeira distribuição. |
| numeroOrgaoJustica | Numero do segmento do Poder Judiciário combinado com o número do Tribunal. | 200 | Utilizado para a numeração do processo judicial e para as consultas processuais. |
| secao | Seção onde se encontra a aplicação | PE | Utilizado pelos mecanismos de coleta estatística para identificação do local da instalação. |
| subNomeSistema | Nome usado embaixo do nome principal | Conselho Nacional de Justiça |  |
| tipoJustica | Identificador do segmento do Poder Judiciário da implantação | CNJ | Utilizado para identificar o segmento do Judiciário, liberando ou restringindo funcionalidades. |
| tipoPrazosResultadoDiligenciaParaJtComComprimentoDePrazoFlexivel | Código do tipo de resultado da diligência que possui prazo flexível para a JT. | 7:7179:7180:7181 | Utilizado na tela de visita de oficial de justiça, no caso da Justiça do Trabalho, para indicar prazos flexíveis de cumprimento. |
| tempoMinimoAudiencia | Intervalo mínimo, em dias, entre o momento da designação de audiência e a data para a qual ela foi designada automaticamente ou teve a data sugerida pelo sistema. A data final deverá necessariamente ser um dia em que haja audiência e haja também uma disponibilidade de uma nova audiência. | 10 | Intervalo, em dias, entre o momento da designação de audiência e a data para a qual ela foi designada automaticamente ou teve uma designação sugerida. |
| qtdDiasAlertaExpiracaoCertificado | Prazo, em dias, a partir do qual deve ser exibido o alerta de proximidade da expiração do certificado digital. | \-1 | Esse parâmetro foi criada pela demanda [PJEII-18228](https://www.cnj.jus.br/jira/login.jsp?permissionViolation=true&os_destination=%2Fbrowse%2FPJEII-18228&page_caps=&user_role=) |
| pje:sistema:uf | Unidade da federação padrão da instalação | XX | Quando utilizado o valor XX, nenhuma unidade da federação foi configurada |
| pje:modoMarcacaoAutomatica | Modo de seleção da sala na marcação de audiências automaticamente | concorrente | Será utilizado o valor concorrente quando o parâmetro não estiver configurado. Será utilizado o valor "sequencial" quando o parâmetro estiver configurado com esse valor. |

### Timer

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| IdEstatiscaEventoParameter | Identificador do timer responsável por realizar atualizações estatísticas de eventos | 2913cc73:13423077f68:-7f6a | O parâmetro é criado automaticamente pela classe EstatisticaEventoStarterProcessor e faz com que seja executada a cada 10 minutos a função EstatisticaEventoProcessor.processarEventos |
| IdEstatiscaTramitacaoParameter | Identificador do timer responsável por realizar atualizações estatísticas de tramitação | \-2006465a:133a320cc74:-7f97 | O parâmetro é criado automaticamente pela classe EstatisticaTramitacaoStarterProcessor e faz com que seja executada a cada 10 minutos a função EstatisticaTramitacaoProcessor.verificarProcessosTramitacao |
| idConsolidadorDocumentosTimerParameter | Identificador de timer relativo à consolidação de arquivos na base de dados do PJe. | \-6c7b448e:13a707104be:-7ff6 | Incluído automaticamente pelo sistema quando inexistente. |
| idExpedienteTimerParameter | ID do timer do sistema | \-2006465a:133a320cc74:-7f4e | Parâmetro inserido automaticamente quando da inicialização da aplicação em ProcessoParteExpedienteStarterProcessor. Faz parte da sistemática de contagem de prazos do TRF5 e, por isso, deve ser suprimido. |
| idFechamentoSessaoTimerParameter | ID do timer para fechamento automático da pauta da sessão | 19b0efa2:13576facfb4:-7ffb | Parâmetro inserido automaticamente quando da inicialização da aplicação em SessaoJTFechamentoPautaStarterProcessor. Faz parte da sistemática de contagem de prazos do TRF5 e, por isso, deve ser suprimido. A funcionalidade já é suprida por VerificadorPeriodico. |
| idGeradorBoletimEstatisticoTimerParameter | ID do timer para realizar a geração do boletim estatístico da JT | \-6c7b448e:13a707104be:-7ff4 | Parâmetro inserido automaticamente por AgendaServicosPeriodicos.executeBoletimEstatistico(). Atualmente, a chamada executada pelo método somente tem efeito se houver dados da Justiça do Trabalho. |
| idIniciarFluxoTimerParameter | ID do timer do sistema | \-2006465a:133a320cc74:-7f99 | Parâmetro inserido automaticamente quando da inicialização da aplicação em ProcessoIniciarFluxoStarterProcessor. Faz parte da sistemática de remessa dos processos de uma instância inferior para uma superior por meio de chamadas de bancos de dados. |
| idRemoveHashSessionExpiradosTimerParameter | ID do timer do sistema | \-306d547a:135ceca7174:-7ffc | Parâmetro inserido automaticamente por RemoveHashSessionExpiradosStarterProcessor para assegurar a expiração de sessões de upload de documentos. |
| idRemoveTokenExpiradosTimerParameter | ID do timer do sistema | \-306d547a:135ceca7174:-7ffa | Parâmetro inserido automaticamente por RemoveTokenExpiradosStarter para assegurar a expiração de tokens de desafio de assinatura. |
| idSessaoEnvioProcessoEstatisticaTimerParameter | Variável para iniciar a thread que transfere todos os eventos do primeiro para o segundo grau. | 237d8da7:13847d95238:-7ffc | Parâmetro inserido automaticamente por VerificaSessaoEnvioProcessoEstatisticaStarterProcesssor para assegurar o envio periódico de informações de movimentação processual para outra instalação do PJe. |
| idValidarOABTimerParameter | ID do timer do sistema | \-2006465a:133a320cc74:-7f4a | Parâmetro inserido automaticamente quando da inicialização da aplicação em ValidarOABStarterProcessor com o objetivo de permitir a verificação periódica de que os advogados estão regulares junto ao CNA.. |
| idVerificadorPeriodicoTimerParameter | ID do timer para realizar verificações de prazo para a ciência automática | \-7f491100:1356596bd08:-7ffc | Parâmetro inserido automaticamente quando da inicialização da aplicação em AgendaServicosPeriodicos. |
| tempoAtualizacaoProcessoApregoado | Tempo (em segundos) para atualização automática do processo apregoado no painel do magistrado na sessão. | \-1 | Intervalo, em segundos, para atualização automática do processo. |
| IGNORA\_FALHA\_DE\_EXECUCAO\_DO\_QUARTZ | Indicador para ignorar a execução do Quartz quando houver falha de execução e forçar que o Quartz seja executado somente na próxima execução agendada. | true |  |

### Tipo de documento

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| idProcessoDocumentoDiligencia | Identificador interno do tipo de documento utilizado na criação de uma informação sobre o cumprimento de uma diligência. | 59 | Utilizado em DiligenciaHome para viabilizar a criação de um documento relativo ao cumprimento de uma diligência. |
| idTipoDocumentoAtoOrdinatorio | Identificador interno do tipo de documento que representa um ato ordinatório. | 67 | Utilizado em TipoProcessoDocumentoManager.getTipoDocumentoAtoMagistradoList() para indicar de que se trata de ato de magistrado. Utilizado em outros pontos com idêntico objetivo. |
| idTipoDocumentoCertidao | Identificador interno do tipo de documento utilizado quando da criação de certidões. | 57 | Utilizado para a emissão de certidões a respeito de fatos processuais e de sessão de julgamento. |
| idTipoDocumentoInconsistencia | Identificador interno do tipo de documento que é criado quando há uma inconsistência no cadastro de usuário como advogado. | 55 | Utilizado no cadastro de advogado (CadastroAdvogadoHome e PessoaAdvogadoHome) para criar um documento de inconsistência do cadastro de um advogado. |
| idTipoDocumentoInconsistenciaJusPostulandi | Identificador interno do tipo de documento que é criado quando há uma inconsistência no cadastro de usuário que quer fazer gozo do jus postulandi. | 46 | Utilizado por CadastroJusPostulandiHome para criar um documento de inconsistência do cadastro do usuário que quer atuar como seu próprio representante nos processos pertinentes. |
| pje:documento:tipo:cadastroAdvogado | Identificador interno do tipo de documento que é criado para que um usuário acate as regras de utilização como advogado. | 56 | Utilizado no cadastro de advogado (CadastroAdvogadoHome e PessoaAdvogadoHome) para criar um documento de compromisso de aceitação das regras aplicáveis ao advogado. |
| pje:documento:tipo:cadastroJusPostulandi | Identificador interno do tipo de documento que é criado para que um usuário acate as regras de utilização quando em gozo do jus postulandi. | 85 | Utilizado por CadastroJusPostulandiHome para criar um documento de compromisso do usuário que quer atuar como seu próprio representante nos processos pertinentes. |
| idTipoProcessoDocumentoAcordao | Identificador interno do tipo de documento utilizado como “acórdão”. | 74 | Utilizado para identificar documentos que são tidos como documento judicial de mero expediente em AnexarDocumentos (para evitar sua exibição para advogados), em TipoProcesoDocumentoManager (para identificar os documentos que seriam apenas dos magistrados), em ProcessoDocumentoManager e ProcessoDocumentoHome (mesmo objetivo) e em tipoProcessoDocumentoMinutaItems.component.xml (também para limitar a visualização dos tipos disponíveis para magistrado no tipo de frame textEditMinuta). |
| idTipoProcessoDocumentoApelacao | Identificador interno do documento tipo apelação vinculado ao processo. | 16 | Utilizado para cálculos estatísticos. |
| idTipoProcessoDocumentoAtaAudiencia | Identificador interno do tipo de documento “ata de audiência” produzido pelo sistema AUD-JT. | 87 | Utilizado em ProcessoDocumentoHome.verificaDocumentoGeradoAUD() e AudImportacaoDAOPImpl.criarDocumentoAta(). |
| idTipoProcessoDocumentoCMAA | ID do Tipo de Documento para CMAA | 57 | Utilizado para criação de certidão de audiência automática. O evento de deflagração disso não foi identificado no código. |
| idTipoProcessoDocumentoCitacao | Identificador interno dos tipos de documentos utilizados como "citação". | `<informar o valor desejado cadastrado na base de dados >`, pode ser utilizada uma lista de IDs separados por vírgula | Utilizado em chamadas vinculadas à sistemática de produção de atos de comunicação antiga do PJe, pré-prepararAtosComunicacao. Também é utilizado nas operações disponíveis do serviço WSDL intercomunicacao?wsdl. |
| idTipoProcessoDocumentoContestacao | TipoProcessoDocumento que será utilizado na inserção do Documento de Contestação | 19 | Não há referência direta no PJe. |
| idTipoProcessoDocumentoDecisao | Identificador interno do tipo de documento utilizado como “decisão”. | 64 | Utilizado para identificar documentos que são tidos como documento judicial de mero expediente em AnexarDocumentos (para evitar sua exibição para advogados), em TipoProcesoDocumentoManager (para identificar os documentos que seriam apenas dos magistrados), em ProcessoDocumentoManager e ProcessoDocumentoHome (mesmo objetivo) e em tipoProcessoDocumentoMinutaItems.component.xml (também para limitar a visualização dos tipos disponíveis para magistrado no tipo de frame textEditMinuta). |
| idTipoProcessoDocumentoDespacho | Identificador interno do tipo de documento utilizado como “despacho”. | 63 | Utilizado para identificar documentos que são tidos como documento judicial de mero expediente em AnexarDocumentos (para evitar sua exibição para advogados), em TipoProcesoDocumentoManager (para identificar os documentos que seriam apenas dos magistrados), em ProcessoDocumentoManager e ProcessoDocumentoHome (mesmo objetivo) e em tipoProcessoDocumentoMinutaItems.component.xml (também para limitar a visualização dos tipos disponíveis para magistrado no tipo de frame textEditMinuta). |
| idTipoProcessoDocumentoDispositivo | Identificador interno do tipo de documento que representa o dispositivo de uma decisão colegiada na Justiça do Trabalho. | 89 | Utilizado para criação e recuperação de fundamentos de uma decisão colegiada nas classes que tratam de preparação de julgamento colegiado da Justiça do Trabalho. |
| idTipoProcessoDocumentoEmenta | Identificador interno do tipo de documento utilizado como “ementa” de decisão colegiada. | 77 | Utilizado em dezenas de chamadas para viabilizar a criação do documento adequado quando da preparação de uma ementa. |
| idTipoProcessoDocumentoFundamentacao | Identificador interno do tipo de documento que representa a fundamentação de uma decisão colegiada na Justiça do Trabalho. | 88 | Utilizado para criação e recuperação de fundamentos de uma decisão colegiada nas classes que tratam de preparação de julgamento colegiado da Justiça do Trabalho. |
| idTipoProcessoDocumentoInteiroTeor | Identificador interno do tipo de documento que representa o inteiro teor de um julgamento colegiado. | 79 | Utilizado para criação e recuperação de inteiro teor de um julgamento em SessaoProcessoDocumentoHome, ProcessoDocumentoManager em ProcessoDocumentoBinAction. |
| idTipoProcessoDocumentoIntimacaoPauta | Tipo processo documento para intimações de Pauta | 71 | Utilizado para identificar atos de intimação de pauta de sessão de julgamento, tanto para produção dos atos quanto para segmentar sua consulta. |
| idTipoProcessoDocumentoIntimacao | Identificador interno do tipo de documento utilizado como "intimação". | `<informar o valor desejado cadastrado na base de dados>`, pode ser utilizada uma lista de IDs separados por vírgula | Este parâmetro é utilizado nas operações disponíveis do serviço WSDL intercomunicacao?wsdl. |
| idTipoProcessoDocumentoNotificacao | Identificador interno do tipo de documento utilizado como "notificação". | `<informar o valor desejado cadastrado na base de dados >` | Este parâmetro é utilizado nas operações disponíveis do serviço WSDL intercomunicacao?wsdl. |
| idTipoProcessoDocumentoPautaAudienciaOuJulgamento | Identificador interno do tipo de documento utilizado como "pauta de julgamento/audiência". | `<informar o valor desejado cadastrado na base de dados>` | Este parâmetro é utilizado nas operações disponíveis do serviço WSDL intercomunicacao?wsdl. |
| idTipoProcessoDocumentoPeticaoInicial | Identificador interno do tipo de documento tido como inicial de um processo. | 12 | Utilizado em AnexarDocumentos.verificarDocumento(), ProcessoTrf.validarProcessoParaAutuacao(), ProcessoTrf.possuiPeticao(), ProcessoTrfConsultaSemFiltros.possuiPeticao(), ProcessoDocumentoHome.verificaDocumento(), ProcessoDocumento.isPeticaoInicial(), ProcessoTrfConexaoHome.validarProcesso(), ProcessoTrfHome.validarProcesso(), ProcessoTrfHome.isPeticaoInicial(), processoDocumentoBin.xhtml e processoDocumentoRecibo.xhtml para identificar a existência de uma petição inicial em um dado processo ou para identificar se um dado documento é uma inicial. |
| idTipoProcessoDocumentoRelatorio | Identificador interno do tipo de documento utilizado como “relatório” de decisão colegiada. | 73 | Utilizado em dezenas de chamadas para viabilizar a criação do documento adequado quando da preparação de um relatório de decisão colegiada. |
| idTipoProcessoDocumentoSentenca | Identificador interno do tipo de documento utilizado como “sentença” em uma instalação de primeiro grau. | 62 | Utilizado em AnexarDocumentos para evitar a exibição do tipo de documento “sentença” para mera anexação de documento, assim como em diversos outros pontos (via ParametroUtil.getTipoDocumentoSentenca ou via recuperação de Parametros.TIPODOCUMENTOSENTENCA) para identificar esse tipo de documento. |
| idTipoProcessoDocumentoUrgente | Identificador interno do tipo de documento utilizado como "urgente". | `<informar o valor desejado cadastrado na base de dados >` | Este parâmetro é utilizado nas operações disponíveis do serviço WSDL intercomunicacao?wsdl. |
| idTipoProcessoDocumentoVistaManifestacao | Identificador interno do tipo de documento utilizado como "vista para manifestação". | `<informar o valor desejado cadastrado na base de dados >` | Este parâmetro é utilizado nas operações disponíveis do serviço WSDL intercomunicacao?wsdl. |
| idTipoProcessoDocumentoVoto | Identificador interno do tipo de documento utilizado como “voto” em uma instalação colegiada. | 72 | Utilizado em dezenas de chamadas para viabilizar a criação do documento adequado quando da preparação de um voto. |
| pje:tipoDocumento:idTipoDocumentoProtocoloDistribuicao | Identificador interno do tipo de documento tido como inicial de um processo. | 12 | Utilizado na tarefa de reclassificação (ReclassificarDocumentoAction.init()) |

### Voto

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| permissaoAcessoVotoPreSessaoSecretario | Indicador de permissão de acesso ao voto que o secretário terá antes da sessão. | \-1 | Utilizado por AbstractVotoSessaoAction, da Justiça do Trabalho. |
| tipoVotoAcompanhaRelator | Identificador do tipo de voto da Justiça do Trabalho indicativo de que se trata de voto de acompanhamento ao do relator. | 4 | Utilizado em VotoDAO para identificar a quantidade de votos que acompanharam o do relator. |
| tipoVotoDivergeEmParte | Identificador do tipo de voto da Justiça do Trabalho indicativo de que se trata de voto divergente em parte. | 5 | Utilizado em VotoDAO para identificar a quantidade de votos parcialmente divergentes em em um julgamento. |
| tipoVotoDivergente | Identificador do tipo de voto da Justiça do Trabalho indicativo de que se trata de voto divergente. | 6 | Utilizado em VotoDAO para identificar a quantidade de votos divergentes em um julgamento. |
| tipoVotoNaoConhece | Identificador do tipo de voto da Justiça do Trabalho indicativo de que não houve o conhecimento de um dado recurso. | 7 | Utilizado em VotoDAO para identificar a quantidade de votos não conhecidos em um julgamento. |

### Remessa de processos ao 2º grau

> - Parâmetros no ambiente de 1º grau, no caso de remessa de processos ao 2º grau:

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| urlWsdlPJeInstanciaSuperior | Endereço do WSDL da instância superior (2º Grau) para consulta de informações. | http://\[\[ENDEREÇO DA APLICAÇÃO DE 2º GRAU\]\]/ConsultaPJe?wsdl |  |
| urlWsdlEnvioInstanciaSuperior | Endereço do WSDL da instância superior (2º Grau) para enviar a manifestação processual. | http://\[\[ENDEREÇO DA APLICAÇÃO DE 2º GRAU\]\]/intercomunicacao?wsdl |  |
| urlWsdlAplicacaoOrigem | Endereço do WSDL da aplicação atual (1º Grau) para sincronização de documentos. | http://\[\[ENDEREÇO DA APLICAÇÃO DE 1º GRAU\]\]/intercomunicacao?wsdl |  |
| urlWsdlAplicacaoOrigemConsulta | Endereço do WSDL da aplicação atual (1º Grau) para a consulta de informações. | http://\[\[ENDEREÇO DA APLICAÇÃO DE 1º GRAU\]\]/ConsultaPJe?wsdl |  |

> 1. Nota: quando a remessa de processos ao 2º grau está usando a versão com MNI ([Modelo Nacional de Interoperabilidade](https://www.cnj.jus.br/programas-de-a-a-z/eficiencia-modernizacao-e-transparencia/comite-nacional-da-tecnologia-da-informacao-e-comunicacao-do-poder-judiciario/modelo-nacional-de-interoperabilidade)) o sistema armazena o endereço WSDL da instância de 1º grau que está enviando a remessa para posterior retorno (baixa de processos ao 1º grau) se necessário.

- Parâmetros no ambiente de 2º grau, no caso de baixa de processos ao 1º grau:

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| urlWsdlPJeInstanciaInferior | Endereço do WSDL da instância inferior (1º Grau) para consulta de informações. | http://\[\[ENDEREÇO DA APLICAÇÃO DE 1º GRAU\]\]/ConsultaPJe?wsdl |  |
| urlWsdlEnvioInstanciaInferior | Endereço do WSDL da instância inferior (1º Grau) para enviar a manifestação processual. | http://\[\[ENDEREÇO DA APLICAÇÃO DE 1º GRAU\]\]/intercomunicacao?wsdl |  |
| urlWsdlAplicacaoOrigem | Endereço do WSDL da aplicação atual (2º Grau) para sincronização de documentos. | http://\[\[ENDEREÇO DA APLICAÇÃO DE 2º GRAU\]\]/intercomunicacao?wsdl |  |
| urlWsdlAplicacaoOrigemConsulta | Endereço do WSDL da aplicação atual (2º Grau) para a consulta de informações. | http://\[\[ENDEREÇO DA APLICAÇÃO DE 2º GRAU\]\]/ConsultaPJe?wsdl |  |

> 1. Nota: esses parâmetros serão usados quando a remessa de processos ao 2º grau não foi feita usando a versão com MNI ([Modelo Nacional de Interoperabilidade](https://www.cnj.jus.br/programas-de-a-a-z/eficiencia-modernizacao-e-transparencia/comite-nacional-da-tecnologia-da-informacao-e-comunicacao-do-poder-judiciario/modelo-nacional-de-interoperabilidade)).

### Remessa de processos ao STF

> - Parâmetros no ambiente (1º grau ou 2º grau) em que a remessa de processos para STF será preparada/remetida:

| Parâmetro | Descrição | Valor na base | Observações |
| --- | --- | --- | --- |
| pje:aplicacaoClasse:especial:id | Identificador da entidade "Aplicação da classe judicial ESPECIAL". | 3 | Normalmente o valor do identificador (id) é 3, porém é importante certificar-se do valor correto do id por meio da execução da query no banco de dados por meio do script: select id\_aplicacao\_classe from client.tb\_aplicacao\_classe where ds\_aplicacao\_classe = 'ESPECIAL';. |
| pje:classe:agrupamento:remessaManifestacaoProcessual:stf:codigo | Código do agrupamento de classes utilizado em remessas processuais ao STF. | STF |  |
| pje:assunto:agrupamento:remessaManifestacaoProcessual:stf:codigo | Código do agrupamento de assuntos utilizado em remessas processuais ao STF. | STF |  |
| pje:remessaManifestacaoProcessual:stf:wsdl | Endereço do WSDL para intercomunicação com STF via MNI. | O endereço do WSDL do STF para uso exclusivo no ambiente de homologação do tribunal é [https://wsh.stf.jus.br/servico-intercomunicacao-2.1/intercomunicacao?wsdl](https://wsh.stf.jus.br/servico-intercomunicacao-2.1/intercomunicacao?wsdl); este é valor é gravado por meio de carga de dados específica a partir da versão 1.6.0. | O endereço do WSDL para uso no ambiente de produção do tribunal deve ser solicitado pelo administrador do PJe para equipe técnica do PJe por meio de envio de email para [g-assistencia.qualidade.pje@cnj.jus.br](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/) |
| pje:remessaManifestacaoProcessual:stf:idManifestante | Identificador do manifestante para intercomunicação com STF via MNI. | O valor deste parâmetro é gravado por meio de carga de dados específica a partir da versão 1.6.0. É importante esclarecer que, esse valor já gravado é para uso no ambiente de homologação do tribunal. | O valor do identificador para uso no ambiente de produção do tribunal deve ser solicitado pelo administrador do PJe para equipe técnica do PJe por meio de envio de email para [g-assistencia.qualidade.pje@cnj.jus.br](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/) |
| pje:remessaManifestacaoProcessual:stf:senhaManifestante | Senha do manifestante para intercomunicação com STF via MNI. | O valor deste parâmetro é gravado por meio de carga de dados específica a partir da versão 1.6.0. É importante esclarecer que, esse valor já gravado é para uso no ambiente de homologação do tribunal. | O valor do identificador para uso no ambiente de produção do tribunal deve ser solicitado pelo administrador do PJe para equipe técnica do PJe por meio de envio de email para [g-assistencia.qualidade.pje@cnj.jus.br](https://docs.pje.jus.br/configura%C3%A7%C3%B5es-do-pje/) |
| pje:fluxo:remessaManifestacaoProcessual:nomeTarefa | Nome do nó que remete manifestações processuais (ainda não enviadas) ao STF; campo multivalorado. | O valor default deste parâmetro é "Acompanhar Manifestação Processual" o qual deve ter sido gravado por meio de carga de dados específica a partir da versão 1.6.0. | Recomendamos ao administrador do PJe analisar o fluxo responsável pela preparação/envio de remessa ao STF a fim de certificar-se a respeito do(s) nó(s) candidato(s) ao parâmetro em questão. |