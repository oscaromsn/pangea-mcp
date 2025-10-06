---
title: "Serviço MNI Client | Documentação PJe"
source: "https://docs.pje.jus.br/servicos-auxiliares/servico-mni-client"
author:
published:
created: 2025-09-30
description: "Serviço responsável por disponibilizar uma API REST para o Modelo Nacional de Interoperabilidade (MNI)."
tags:
  - "clippings"
---
# Serviço MNI Client | Documentação PJe
Available at https://docs.pje.jus.br/servicos-auxiliares/servico-mni-client


[Pular para o conteúdo principal](https://docs.pje.jus.br/servicos-auxiliares/#__docusaurus_skipToContent_fallback)

## Serviço MNI Client

Serviço responsável por disponibilizar uma API REST para o [**Modelo Nacional de Interoperabilidade (MNI)**](https://www.cnj.jus.br/tecnologia-da-informacao-e-comunicacao/comite-nacional-de-gestao-de-tecnologia-da-informacao-e-comunicacao-do-poder-judiciario/modelo-nacional-de-interoperabilidade).

## Como funciona

Trata-se de um serviço auxiliar o qual permite que serviços negociais possam utilizar a operação **Entrega Manifestação Processual** do MNI. Esta operação permite criar um processo (**Peticionamento**) ou anexar um documento ao processo (**Entrega Avulsa**) no sistema destino que implementa o MNI.

A indicação do sistema destino da comunicação é feita por meio do atributo **idSistemaDestino** presente na entidade **ManifestacaoV1** ou **ManifestacaoV2**. O cadastro das informações de um sistema destino é realizado por meio do endpoint **/api/\*/configuracoes**

## Detalhes da versão

Veja os detalhes do deploy do serviço em:

- [https://gateway.stg.cnj.cloud/mni-client/actuator/info](https://gateway.stg.cnj.cloud/mni-client/actuator/info) (Homologação)
- [https://gateway.prd.cnj.cloud/mni-client/actuator/info](https://gateway.prd.cnj.cloud/mni-client/actuator/info) (Produção)

## Health Check

Veja o status (UP/DOWN) do serviço em:

- [https://gateway.stg.cnj.cloud/mni-client/actuator/health](https://gateway.stg.cnj.cloud/mni-client/actuator/health) (Homologação)
- [https://gateway.prd.cnj.cloud/mni-client/actuator/health](https://gateway.prd.cnj.cloud/mni-client/actuator/health) (Produção)

## Testes

### Remoto

Acesse a API do serviço:

- [https://gateway.stg.cnj.cloud/mni-client/swagger-ui/index.html](https://gateway.stg.cnj.cloud/mni-client/swagger-ui/index.html) (Homologação)
- [https://gateway.prd.cnj.cloud/mni-client/swagger-ui/index.html](https://gateway.prd.cnj.cloud/mni-client/swagger-ui/index.html) (Produção)

### Local

```bash
Execute o comando abaixodocker container run --rm --name mni-client -it -p 8125:8125 \
    registry.cnj.jus.br/pje2/pje2-auxiliares/mni-client:latest
```

## Parametrização do serviço

| Variável | Valor padrão | Descrição |
| --- | --- | --- |
| DB\_DRIVER |  | Driver do banco de dados. |
| DB\_PASSWORD |  | Senha do usuário do banco de dados. |
| DB\_URL |  | URL do banco de dados. |
| DB\_USER |  | Usuário do banco de dados. |
| EUREKA\_CLIENT\_ENABLED | `true` | Indicativo de que o serviço deve ou não se registrar no *service discovery*. |
| EUREKA\_SERVER\_DEFAULT\_ZONE |  | URL do *service discovery*. |
| PASSWORD\_CRYPTO\_KEY |  | Chave de 128 *bits* codificada em *Base64* para encriptar a senha do usuário. |
| SERVICE\_PORT | `8125` | Porta do serviço. |
| SSO\_AUTH\_SERVER\_URL |  | URL de autenticação do serviço de SSO (keycloak). |
| SSO\_REALM |  | Domínio da política de segurança configurado no serviço de *SSO* (*keycloak*). |
| SSO\_RESOURCE |  | O identificador do cliente (`client-id`) no serviço de *SSO* (*keycloak*). |

## Principais tecnologias utilizadas

### Linguagem de programação

Java versão 8.

### Framework

SpringBoot 2.

### Armazenamento dos dados

Banco relacional *PostgreSQL* com *enconding* **UTF-8**.

## PJe

### Configuração

A tela de configuração está disponível em **Configuração** → **Serviços** → **MNI Client** → **Configuração** apenas para usuários com perfil de Administrador.

## Comunidade

### Dúvidas

Faça parte da nossa comunidade no RocketChat! Acesse [https://rocketchat.cloud.pje.jus.br/channel/mni-client](https://rocketchat.cloud.pje.jus.br/channel/mni-client).

### Requisição de melhorias e correções de defeitos

Pode-se abrir demandas no sistema [*Jira*](https://www.cnj.jus.br/jira/projects/PJEMNICLI) para o projeto **PJEMNICLI**.

## Release notes

[Notas da versão](https://docs.pje.jus.br/servicos-auxiliares/servico-mni-client/notas-da-versao)