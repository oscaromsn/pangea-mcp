---
title: "Orientações Gerais | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/criacao-arquivo/orientacoes"
author:
published:
created: 2025-09-30
description: "Para o encaminhamento dos processos judiciais ao Datajud, é necessário utilizar o formato XML, seguindo a versão atual do Modelo de Transferência de Dados (MTD). O MTD é um padrão que define a estrutura e o layout dos dados a serem enviados, garantindo a integridade e a consistência das informações."
tags:
  - "clippings"
---
# Orientações Gerais | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/criacao-arquivo/orientacoes


## Orientações Gerais

Para o encaminhamento dos processos judiciais ao Datajud, é necessário utilizar o formato XML, seguindo a versão atual do [Modelo de Transferência de Dados (MTD)](https://datajud-wiki.cnj.jus.br/mtd/v1_1). O MTD é um padrão que define a estrutura e o layout dos dados a serem enviados, garantindo a integridade e a consistência das informações.

### Classes, Assuntos e Movimentos

Os atributos ***classeProcessual***, ***assunto.codigoNacional*** ou ***assunto.assuntoLocal.codigoPaiNacional*** e ***movimento.movimentoNacional.codigoNacional*** ou ***movimento.movimentoLocal.codigoPaiNacional*** devem obedecer a numeração presente nas [Tabelas Processuais Unificadas - SGT](https://www.cnj.jus.br/sgt/consulta_publica_classes.php) conforme regulamenta a ([Resolução CNJ nº 46/2007](https://atos.cnj.jus.br/atos/detalhar/167)). O envio do arquivo fora do padrão poderá ocasionar em perda de parte da pontuação para o Prêmio.

### Complementos dos Movimentos

O DataJud permite o recebimento dos complementos de movimentações processuais de duas formas:

1. **Texto Simples Formatado**;
2. **Atributo Multivalorado**.

É facultado ao tribunal a escolha formato que melhor atenda suas necessidades.

#### 1\. Complementos por Texto Simples Formatado

Para a forma de envio simples com texto formatado, o tribunal deve utilizar o atributo complemento, observando a separação dos valores por “dois pontos” e a sequência dos itens na seguinte ordem: codigo do complemento, descrição do complemento e valor do complemento.

**Exemplo 1**: Movimento com apenas um complemento:

```xml
<movimento dataHora=”20150201110024″ identificadorMovimento=”4″>
        <movimentoNacional codigoNacional=”60″>
            <complemento>4:tipo_de_documento:80</complemento>
        </movimentoNacional>
    </movimento>
```

**Exemplo 2**: Movimento com vários complementos:

```xml
Complementos separados por ';'    <movimento dataHora=”20150201110024″ identificadorMovimento=”4″>
        <movimentoNacional codigoNacional=”11423″>
            <complemento>32:tipo_de_medida_protetiva:128;31:destinatario_de_medida_protetiva:124</complemento>
        </movimentoNacional>
    </movimento>
```

ou

```xml
Complementos incluídos com as tags do XML    <movimento dataHora=”20150201110024″ identificadorMovimento=”4″>
        <movimentoNacional codigoNacional=”11423″>
            <complemento>32:tipo_de_medida_protetiva:128</complemento>
            <complemento>31:destinatario_de_medida_protetiva:124</complemento>
        </movimentoNacional>
    </movimento>
```

#### 2\. Complemento por Atributo Multivalorado

O tribunal pode optar pelo formato de envio multivalorado, utilizando o atributo **complementoNacional**, conforme exemplo a seguir:

```xml
<movimento dataHora=”20150201110024″ identificadorMovimento=”4″>
        <movimentoNacional codigoNacional=”11423″>
        ...
        </movimentoNacional>
        <complementoNacional codComplemento=”32″ codComplementoTabelado=”128″ descricaoComplemento=”tipo_de_medida_protetiva”/>
        <complementoNacional codComplemento=”31″ codComplementoTabelado=”124″ descricaoComplemento=”destinatario_de_medida_protetiva”/>
    </movimento>
```

Nesta opção, os valores que compõem o complemento são indicados em campos específicos, e podem ser informados mais de um complemento, utilizando a mesma abordagem multivalorada.

### Órgãos Julgadores

Para os atributos ***codigoOrgao*** e ***nomeOrgao*** do tipo ***cnj:tipoOrgaoJulgador*** deverão ser informados os mesmos códigos das serventias judiciárias cadastradas no Módulo de Produtividade Mensal ([Resolução CNJ nº 76/2009](https://atos.cnj.jus.br/atos/detalhar/110)).