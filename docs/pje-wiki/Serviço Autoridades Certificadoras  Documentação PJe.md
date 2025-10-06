---
title: "Serviço Autoridades Certificadoras | Documentação PJe"
source: "https://docs.pje.jus.br/servicos-auxiliares/servico-autoridades-certificadoras"
author:
published:
created: 2025-09-30
description: "O serviço tem por objetivo manter atualizada as duas listas de autoridades certificadoras utilizadas pela biblioteca ICPBr-Util e que são utilizadas para validar os certificados digitais utilizados pelos usuários no PJe. Que são os arquivos: intermedirias.zip e confiaveis.zip."
tags:
  - "clippings"
---
# Serviço Autoridades Certificadoras | Documentação PJe
Available at https://docs.pje.jus.br/servicos-auxiliares/servico-autoridades-certificadoras


[Pular para o conteúdo principal](https://docs.pje.jus.br/servicos-auxiliares/#__docusaurus_skipToContent_fallback)

## Serviço Autoridades Certificadoras

O serviço tem por objetivo manter atualizada as duas listas de autoridades certificadoras utilizadas pela biblioteca `ICPBr-Util` e que são utilizadas para validar os certificados digitais utilizados pelos usuários no PJe. Que são os arquivos: `intermedirias.zip` e `confiaveis.zip`.

## Início rápido

```bash
Criar um novo banco de dadoscreatedb -T template0 --encoding='UTF-8'  -U${USER} -h${HOST} autoridades_certificadoras;
```
```bash
Baixa imagem dockerdocker pull registry.cnj.jus.br/pje2/pje2-auxiliares/pje-autoridades-certificadoras:latest
```
```bash
Subir container com a imagem acimadocker run registry.cnj.jus.br/pje2/pje2-auxiliares/pje-autoridades-certificadoras:latest
```

## Tecnologias empregadas

O serviço foi construído com *SpringBoot 2*. Este serviço fornece *API+ para manipulação e recuperação de seus recursos utilizando \_REST* e banco de dados relacional.

Utiliza o *broker* de mensagens *RabbitMQ* para produzir mensagens da *exchange* do PJe `pje.exchange`.

Internamente possui um script feito em *python 2.2.7+* responsável por buscar a informação de atualização e conversão do pacote de autoridades certificadoras do site da ICP-Brasil.

### Linguagem de programação

Java 8 e Python 2.x.

### Framework

SpringBoot 2.

### Armazenamento dos dados

PostgreSQL.

### Outros temas

O serviço recupera a informação da lista de autoridades certificadoras diretamente do site do ITI aqui: [https://www.iti.gov.br/repositorio/repositorio-ac-raiz](https://www.iti.gov.br/repositorio/repositorio-ac-raiz).

## Visão arquitetural

O serviço (autoridades-certificadoras) possui um *scheduler* para buscar no site do ICPBR por uma atualização da lista de *ACs*, se houver, guarda no seu banco um arquivo já convertido igual ao `intermediarias.zip` e calcula seu *checksum*, além desse arquivo, o script verifica quais são os certificados raíz ICP-Brasil que estão presentes no pacote intermediarias e faz o download das demais versões desse certificado diretamento do site do ICPBR, armazenando também o arquivo `confiaveis.zip` em seu banco;

Ao final do processo de atualização é enviada uma mensagem ao *RabbitMQ* da plataforma com os meta-dados dessa atualização, indicando o novo *checksum*;

Os demais serviços devem se inscrever no *routingKey* deste serviço `..autoridades-certificadoras.AutoridadesCertificadoras.POST` ou consultar o endpoint `/api/v1/meta-dados/atualizacao/{data-atual}` para identificar qual é a última versão da lista de autoridades certificadoras (*checksum* do intermediarias e *checksum* do confiáveis), se o *checksum* remoto for diferente do *checksum* local, o serviço interessado deverá fazer outra chamada para recuperar o arquivo binário correspondente (uns 250KB para o intermediarias e outros 11KB para o confiáveis) em `/api/v1/binarios/intermediarias/{checksum-intermediarias}` e `/api/v1/binarios/confiaveis/{checksum-confiaveis}`;

O arquivo original recuperado do ICPBR pode ser baixado no endpoint `/api/v1/binarios/accompactado/{checksum-accompactado}`;

Os arquivos binários serão recuperados no formato *base64*, juntamente com a indicação de qual foi o codec utilizado para o cálculo do *checksum* (por padrão *SHA-512*), o *checksum* assinado pela chave privada do serviço, a chave pública que pode ser utilizada para validar a assinatura e qual o algoritmo utilizado para assinar (por padrão *RSA*).

![Imagem do fluxo de atualização das cadeias de certificados digitais](https://docs.pje.jus.br/assets/images/esquema-atualizacao-intermediarias-7c94284cd07236132f81ad01b9d14b69.jpg)

## Dependências

| Serviço | Tipo | Descrição |
| --- | --- | --- |
| Site ITI | Lista de autoridades certificadoras | Depende do site estar disponível e com uma taxa de resposta adequada para poder recuperar a lista de autoridades certificadoras corretamente.   Notou-se que é comum que o site tenha problemas na resposta às requisições. |
| RabbitMQ | Mensagens | Depende do *broker* de mensagens para enviar atualizações. |

## Configuração da aplicação

| Variável | Valor padrão | Descrição |
| --- | --- | --- |
| APP\_NAME | `autoridades-certificadoras` | Nome do serviço quando for se registrar no serviço de descoberta. |
| SERVER\_PORT | `8815` | Porta padrão de funcionamento do serviço. |
| RABBITMQ\_HOST | `localhost` | URL do serviço de mensageria *RabbitMQ*. |
| RABBIT\_USERNAME | `guest` | Nome de usuário no serviço de mensageria. |
| RABBIT\_PASSWORD | `guest` | Senha do usuário no serviço de mensageria. |
| DB\_ADDR | `localhost` | Endereço de acesso ao banco de dados. |
| DB\_PORT | `5432` | Porta do banco de dados. |
| DB\_DATABASE | `autoridades_certificadoras` | Nome do banco de dados. |
| DB\_USER | `postgres` | Nome de usuário no banco de dados. |
| DB\_PASSWORD | `admin123` | Senha de usuário no banco de dados. |
| EUREKA\_REGISTER\_ENABLE | `true` | Indicativo de que o serviço deve ou não se registrar no serviço de discoberta. |
| EUREKA\_SERVER\_DEFAULT\_ZONE | [`http://localhost:8761/eureka`](http://localhost:8761/eureka) | Url do serviço de discoberta. |
| CRYPTO\_TTL | `6` | Faz referência ao tempo em que o *token* simétrico para *POST* de binários é válido (em minutos). |
| SYMMETRIC\_KEY | `CHAVESIMETRICA` | Chave simétrica utilizada para assinar o *token* para *POST* de binários. |
| ASYMMETRIC\_PRIVATE\_KEY\_FILE | `KeyPair/autoridadesCertificadoras.key` | Chave privada utilizada para assinar o checksum. |
| ASYMMETRIC\_PUBLIC\_KEY\_FILE | `KeyPair/autoridadesCertificadoras.pub` | Chave púlica para desassinar o *checksum* (deve ser replicada nos demais serviços que utilizam, principalmente `icpbr-util`). |
| SCRIPT\_BUSCADOR\_COMMAND\_TYPE | `python` | Tipo de script para buscar informações sobre as atualizações do ICPBR. |
| SCRIPT\_BUSCADOR\_COMMAND | `buscadorACs.py` | Script para buscar informações sobre as atualizações do ICPBR. |

## Configuração do armazenamento de dados

Este serviço utiliza banco de dados *PostgreSQL* versão 9.6 ou superior. A base de dados deve ter *encoding* **UTF-8**. Para a execução do serviço é necessário apenas que já haja o banco criado e que o usuário de banco da aplicação tenha permissão de *DDL* e *DMLs*, o próprio serviço criará o banco automaticamente.

## Papeis e/ou recursos

Não contém papeis. Para acessar as funcionalidades de *POST* de meta-dados e de *POST* de binários é necessário encaminhar um *token* pré-gerado pelo sistema com validade equivalente ao informado na variável **CRYPTO\_TTL** (em minutos).

## Interações com o barramento de mensagens

O serviço é um produtor no barramento de mensagens. As mensagens são todas direcionadas à *exchange* geral da plataforma: `pje.exchange`. Com o *routingKey*: `000.0.autoridades-certificadoras.AutoridadesCertificadoras.POST` cujo objeto é o dado pela classe: `MetaDadosConjuntoACsCloudEvent`.

### Filas que escuta

Não há!

### Mensagens que produz

As mensagens são enviadas sempre em que há uma nova versão do arquivo de autoridades certifidadoras disponível. O serviço então encaminhará uma mensagem utilizando o *payload* dado pela classe `MetaDadosConjuntoACsCloudEvent`, com o *routingKey* `000.0.autoridades-certificadoras.AutoridadesCertificadoras.POST` à *exchange* principal da plataforma: `pje.exchange`.

## Interações com outros serviços

O serviço possui apenas um script feito em *Python* para interagir diretamente com o site ICPBrasil para buscar, validar, transformar e armazenar a informação relativa às autoridades certificadoras.

## Documentação das interfaces do serviço

[http://gateway.prd.cnj.cloud/autoridades-certificadoras/v2/api-docs](http://gateway.prd.cnj.cloud/autoridades-certificadoras/v2/api-docs)

## Eventos de Webhook

Pode-se utilizar para eventos de *webhook* o próprio evento encaminhado à *exchange* principal do *RabbitMQ*.