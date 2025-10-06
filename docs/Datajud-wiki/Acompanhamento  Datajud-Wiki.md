---
title: "Acompanhamento | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/protocolo/protocolo"
author:
published:
created: 2025-09-30
description: "A solução Replicação Nacional (https://replicacao.cnj.jus.br) foi criada para acompanhamento do envio dos processos e obter informações sobre eventuais divergências. Esta ferramenta permitirá que os Tribunais consultem detalhes sobre os processos enviados e possam agir de acordo com as orientações fornecidas pela plataforma."
tags:
  - "clippings"
---
# Acompanhamento | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/protocolo/protocolo


## Acompanhamento

A solução Replicação Nacional ([https://replicacao.cnj.jus.br](https://replicacao.cnj.jus.br/)) foi criada para acompanhamento do envio dos processos e obter informações sobre eventuais divergências. Esta ferramenta permitirá que os Tribunais consultem detalhes sobre os processos enviados e possam agir de acordo com as orientações fornecidas pela plataforma.

O arquivo XML com os processos a serem enviados poderão ser validados de acordo com os schemas XSD do MTD1.1. No entanto, essa resposta sobre a adequação ou não ao modelo XSD não é respondido de imediato ao Tribunal, pois dependerá de um processamento por parte de alguns sistemas automatizados do CNJ, que irão validar tanto o formato do dado, quanto a consistência das informações.

- **URL:
	## https://replicacao.cnj.jus.br
	**

Através da aplicação Web é possível listar os protocolos dos arquivos XMLs enviados em determinado período e verificar o *Status* do processamento conforme imagem abaixo:

![Replicação Nacional](https://datajud-wiki.cnj.jus.br/assets/images/tela_replicacao_nacional-398d1732622de09c0efe3f86ed3da718.png)

## Status do Processamento

Abaixo segue a relação de *Status* que o lote de arquivos XMLs pode receber desde o recebimento pelo CNJ até o devido processamento a atualização do Datajud:

| Status | Descrição |
| --- | --- |
| Enviado | Arquivo foi recém enviado, e ainda não foi iniciado o processamento do mesmo. |
| Aguardando Processamento | Iniciada a etapa de processamento para esse protocolo. Até esse momento, não existem ainda informações sobre os processos nos painéis de Saneamento ou API do Tribunais - Kibana |
| Processado com Sucesso | Dados sobre os processos foram processados sem erros estruturais graves, e estão disponíveis no Datajud. |
| Processado com Erro | Do processamento do protocolo surgiram erros negociais, como por exemplo, número de processo que fuja ao padrão da Numeração Única (Resolução 65), ou código de órgão inválido (não existente). |
| Erro no Arquivo | Erro estrutural, ou seja, no formato do arquivo. Pode também ser resultante de problemas de recepção e/ou transmissão. |

  

## Acesso via API REST

O endpoint para consulta dos protocolos é o seguinte:

```markdown
GET http://datajud.cloud.cnj.jus.br/modelo-de-transferencia-de-dados/v1/processos/protocolos
```

Esse endpoint aceita 4 parâmetros de consulta:

- **status**: Status do protocolo. Aceita os valores: 1, 3, 5, 6 e 7.
- **dataInicio**: Data de início do processamento do protocolo. Formato: YYYY-MM-DD.
- **dataFim**: Data de fim do processamento do protocolo. Formato: YYYY-MM-DD.
- **numeroProtocolo**: Número do protocolo. Formato: SIGLA\_TRIBUNAL+26 dígitos numéricos. Exemplo: TJDFT15128202504291745960999721.

O mecanismo de autenticação é o mesmo utilizado para o envio de dados, ou seja, o usuário e senha do Tribunal. O retorno da consulta é no formato JSON. O retorno da consulta é no formato JSON, com os seguintes campos:

```json
{
  "totalRegistros": 27,
  "resultado": [
    {
      "seqProtocolo": 27582750,
      "numProtocolo": "TJMA59250202006021591107250950",
      "codHash": "5e0235c91402abd6bd11646c28bf0e73de66c2ad3eaaf2b76f8210d5a649a774",
      "tipStatusProtocolo": 7,
      "datDataEnvioProtocolo": 1591107250981,
      "codIpEnvio": null,
      "qtdProcessosLote": 0,
      "qtdProcessosSucesso": 0,
      "qtdProcessosErro": 0,
      "siglaOrgao": "TJMA",
      "grau": "TR",
      "tamanhoArquivo": 819639,
      "urlArquivo": "2020/TJMA/06/TR/TJMA59250202006021591107250950",
      "flgExcluido": false
    }
  ]
}
```

### Exemplos de consulta

- Listar todos os protocolos com status 7 (erro no arquivo):
```markdown
http://datajud.cloud.cnj.jus.br/modelo-de-transferencia-de-dados/v1/processos/protocolos?status=7
```
- Listar todos os protocolos com status 3 (processado com sucesso) e data de início entre 2023-01-01 e 2023-01-31:
```markdown
http://datajud.cloud.cnj.jus.br/modelo-de-transferencia-de-dados/v1/processos/protocolos?status=3&dataInicio=2023-01-01&dataFim=2023-01-31
```
- Listar o protocolo com número TJPR15128202504291745960999721:
```markdown
http://datajud.cloud.cnj.jus.br/modelo-de-transferencia-de-dados/v1/processos/protocolos?numeroProtocolo=TJPR15128202504291745960999721
```