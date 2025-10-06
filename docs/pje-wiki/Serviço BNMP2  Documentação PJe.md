---
title: "Serviço BNMP2 | Documentação PJe"
source: "https://docs.pje.jus.br/servicos-negociais/servico-bnmp2"
author:
published:
created: 2025-09-30
description: "Confira a documentação do BNMP2 no Docs PDPJ."
tags:
  - "clippings"
---
# Serviço BNMP2 | Documentação PJe
Available at https://docs.pje.jus.br/servicos-negociais/servico-bnmp2


[Pular para o conteúdo principal](https://docs.pje.jus.br/servicos-negociais/#__docusaurus_skipToContent_fallback)

## Serviço BNMP2

## Integração PJe 2.1 com BNMP2

Guia para configuração da Integração do PJe com BNMP2. Este guia é baseado em um ambiente de instalação tradicional do PJe, com Wildfly/JBoss EAP.

## Fluxos do PJe

Exemplos de fluxos que poderão ser importados ao PJe para a funcionalidade de integração com BNMP2

[Fluxo BNMP ATO](https://docs.pje.jus.br/manuais/manual-integracao-pje-bnmp2/extras/Fluxo_BNMP-ATO.zip)

[Fluxo BNMP Confirmar ATO](https://docs.pje.jus.br/manuais/manual-integracao-pje-bnmp2/extras/Fluxo_BNMP-CONFIRMAR-ATO.zip)

[Exemplo de Fluxo do TJDFT](https://docs.pje.jus.br/manuais/manual-integracao-pje-bnmp2/extras/Fluxo-TJDFT.zip)

## Solicitação de acesso ao BNMP2

[Solicitação de acesso ao BNMP2 - Ambiente de Integração do BNMP2](https://integracao-sso.cnj.jus.br/cas/solicitacao-acesso)

[Solicitação de acesso ao BNMP2 - Ambiente de Produção do BNMP2](https://sso.cnj.jus.br/cas/solicitacao-acesso)

## Configuração do ambiente

Para que o PJe possa se conectar ao BNMP2 é necessário configurar o sistema com algumas variáveis. Estas configurações podem ser feitas de duas maneiras diferentes: variáveis de ambiente ou variáveis do maven.

### Configurando com variáveis de ambiente (Recomendado)

Esta é a maneira mais indicada por ser mais flexível. Utilizando variáveis de ambiente podemos detectar mais facilmente eventuais inconsistências na parametrização, bem como é mais fácil a correção destas inconsistências. Este método também é o mais recomendado para ambientes executados em containeres.

| Variável | Valor | Descrição |
| --- | --- | --- |
| ENV\_BNMP\_API\_CREDENTIALS\_CODIGO\_ORGAO | `<codigo_tribunal_bnmp2>` | Identificador do código do tribunal no BNMP2. |
| ENV\_BNMP\_API\_CREDENTIALS\_CLIENT\_ID | `bnmp` | Indica que o cliente do serviço é o BNMP2. |
| ENV\_BNMP\_WEB\_URL | Ex.: [https://integracao-bnmp.cnj.jus.br](https://integracao-bnmp.cnj.jus.br/) | URL do BNMP2 WEB. |
| ENV\_BNMP\_API\_URL | Ex.: [https://api.integracao-bnmp.cnj.jus.br](https://api.integracao-bnmp.cnj.jus.br/) | Endereço do API BNMP2. |
| ENV\_BNMP\_API\_CREDENTIALS\_USERNAME | Ex.: `tjxy` | Nome de usuário no BNMP2. |
| ENV\_BNMP\_API\_CREDENTIALS\_PASSWORD | `<senha no BNMP2>` | Senha no BNMP2. |