---
title: "Serviço Consumidor | Documentação PJe"
source: "https://docs.pje.jus.br/servicos-negociais/servico-consumidor"
author:
published:
created: 2025-09-30
description: "Introdução"
tags:
  - "clippings"
---
# Serviço Consumidor | Documentação PJe
Available at https://docs.pje.jus.br/servicos-negociais/servico-consumidor


[Pular para o conteúdo principal](https://docs.pje.jus.br/servicos-negociais/#__docusaurus_skipToContent_fallback)

## Serviço Consumidor

## Introdução

O CNJ e o Ministério da Justiça e Segurança Pública celebraram, no dia 20 de maio de 2019, o [Acordo de Cooperação Técnica nº 16/2019](https://www.cnj.jus.br/wp-content/uploads/2019/06/20b9300f43209abf4670bb17fb02b7b4.pdf), o qual teve como objetivo o incentivo à utilização da plataforma on-line de solução de conflitos [*CONSUMIDOR.GOV.BR*](https://consumidor.gov.br/), que possibilita a negociação direta com os fornecedores de produtos e serviços com o prazo máximo de resposta de 10 (dez) dias. Assim, sem prejuízo do andamento do processo, tornou-se possível tentar uma negociação extrajudicial on-line diretamente com o fornecedor.

## Integração

O `consumidor-service` foi criado com o objetivo de abstrair toda complexidade de comunicação com a *API* do *CONSUMIDOR.GOV.BR*, além de verificar a conclusão da reclamação e notificar o processo judicial (por meio do `mni-client-service`) de maneira automática.

### Diagrama de integração

![Imagem do diagrama de integração com o serviço consumidor](https://docs.pje.jus.br/assets/images/diagrama-integracao-consumidor-547d8e66fcfd4db879c4176ac345fc2f.png)

## Como funciona

A integração com a plataforma *CONSUMIDOR.GOV.BR* viabiliza ao usuário o preenchimento da reclamação de consumo dentro do sistema PJe. Logo após o preenchimento da reclamação, o sistema realizará, automaticamente, o cadastro da ação judicial. A petição inicial será gerada a partir de um modelo padrão contendo as informações preenchidas no cadastro da reclamação, tais como o assunto, a descrição da reivindicação e o pedido à empresa reclamada. Os documentos anexados à reclamação serão convertidos para o formato PDF e automaticamente apensados à petição inicial do processo. Todos os documentos (incluindo a petição inicial) serão assinados com o certificado digital do PJe e juntados ao processo.

Identificado o desfecho da tratativa pelo `consumidor-service`, uma certidão será anexada aos autos do processo. Esta certidão poderá ser de **ACORDO**, **NÃO ACORDO** ou **ABANDONO**.

## PJe

O PJe tem como dependência a biblioteca `api-client`. Esta contém o *Seam component* `ConsumidorRestClient`, o qual disponibiliza métodos para comunicação com a *API* do `consumidor-service`.

### Configuração

#### Ativar a integração

A variável de sistema `integracaoConsumidorGovBr` deve possuir o valor `true`.

#### Cadastrar competência

Novo assunto intitulado **Resolução de conflito (7777)** foi adicionado sobre a estrutura **DIREITO DO CONSUMIDOR (1156) / CONTRATOS DE CONSUMO (7771)**. Portanto, deve-se vinculá-lo a alguma competência para que seja possível o protocolo do processo.

#### Cadastrar fluxo processual

Um exemplo de fluxo pode ser obtido [aqui](https://docs.pje.jus.br/assets/files/fluxo-c4e62128189766adad5dfb9fdf2496ad.txt). Neste exemplo existem fluxos auxiliares (**Consumidor Acordo**, **Consumidor Não Acordo**, **Consumidor Abandono**) responsáveis por sinalizar o nó de tarefa **\[CONSUMIDOR.GOV.BR\] Aguardando entrega de certidão** quando do recebimento de uma certidão.

#### Associar fluxo aos novos documentos

Foram criados 3 tipos de documentos processuais. Cada um corresponde a uma certidão que o `consumidor-service` irá enviar ao PJe. Para cada um desses tipos de documento deve-se associar um fluxo, da seguinte forma:

- Documento de código **99002** → Fluxo **Consumidor Acordo**;
- Documento de código **99003** → Fluxo **Consumidor Não Acordo**;
- Documento de código **99004** → Fluxo **Consumidor Abandono**.

## Execução

### Configuração

O `consumidor-service` pode ser configurado de acordo com as seguintes variáveis de ambiente:

| Variável | Valor padrão | Descrição |
| --- | --- | --- |
| CONSUMIDOR.GOV.BR\_HOST |  | Host da API de serviços do CONSUMIDOR.GOV.BR. |
| CONSUMIDOR.GOV.BR\_IFRAME |  | URL da página de cadastro da reclamação. |
| CRON\_EXPRESSION | `-` | Indica a periodicidade com a qual o sistema irá verificar a conclusão da reclamação na plataforma CONSUMIDOR.GOV.BR. |
| DB\_DRIVER | `org.h2.Driver` | Driver do banco de dados. |
| DB\_PASSWORD |  | Senha do usuário do banco de dados |
| DB\_URL | \` |  |
| jdbc:h2:mem:consumidor;DB\_CLOSE\_ON\_EXIT=FALSE\` | URL do banco de dados. |  |
| DB\_USER | `sa` | Usuário do banco de dados. |
| EUREKA\_CLIENT\_ENABLED | `true` | Indicativo de que o serviço deve ou não se registrar no service discovery. |
| EUREKA\_SERVER\_DEFAULT\_ZONE | [`http://localhost:8761/eureka`](http://localhost:8761/eureka) | URL do service discovery. |
| GATEWAY\_URL | [`http://localhost:8180`](http://localhost:8180/) | URL do gateway. |
| SERVICE\_PORT | `8000` | Porta do serviço. |

### Docker

#### Inicie a aplicação

```jsx
docker container run --rm --name consumidor -it -p 8000:8000 \
      -e CONSUMIDOR.GOV.BR_HOST=https://api-treinamento.consumidor.gov.br/api/servico \
      -e CONSUMIDOR.GOV.BR_IFRAME=https://treinamento.consumidor.gov.br/pages/acesso-externo/autenticacao/autenticar \
      -e EUREKA_CLIENT_ENABLED=false \
      -e LOGGING_LEVEL_BR_JUS_PJE=DEBUG \
      registry.cnj.jus.br/pje2/pje2-servicos/consumidor:latest
```

## Principais tecnologias utilizadas

### Linguagem de programação

Java versão 8

### Framework

SpringBoot 2

### Armazenamento dos dados

Banco relacional *H2* ou *PostgreSQL* com *enconding* **UTF-8**.

## Comunidade

### Dúvidas

Faça parte da nossa comunidade no RocketChat! Acesse [https://rocketchat.cloud.pje.jus.br/channel/consumidor](https://rocketchat.cloud.pje.jus.br/channel/consumidor).

### Requisição de melhorias e correções de defeitos

Pode-se abrir uma demanda no sistema [*Jira*](https://www.cnj.jus.br/jira/projects/PJECONS) para o projeto **PJECONS**.