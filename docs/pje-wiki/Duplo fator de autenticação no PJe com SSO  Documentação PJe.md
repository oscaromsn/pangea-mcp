---
title: "Duplo fator de autenticação no PJe com SSO | Documentação PJe"
source: "https://docs.pje.jus.br/servicos-negociais/duplo-fator-autenticacao-pje-sso"
author:
published:
created: 2025-09-30
description: "Comunicado"
tags:
  - "clippings"
---
# Duplo fator de autenticação no PJe com SSO | Documentação PJe
Available at https://docs.pje.jus.br/servicos-negociais/duplo-fator-autenticacao-pje-sso


[Pular para o conteúdo principal](https://docs.pje.jus.br/servicos-negociais/#__docusaurus_skipToContent_fallback)

## Duplo fator de autenticação no PJe com SSO

## Comunicado

Em 06 de setembro de 2023, o Departamento de Tecnologia da Informação do Conselho Nacional de Justiça enviou o Ofício-circular N. 18, a todos os dirigentes de Tecnologia da Informação e Comunicação do Poder Judiciário Brasileiro acerca da inclusão do duplo fator de autenticação com utilização de e-mail tanto nas soluções da Plataforma Digital do Poder Judiciário (PDPJ-Br), como no sistema Processo Judicial Eletrônico (PJe), informando que a partir de 11 de setembro de 2023, a referida funcionalidade estará configurada a todos os clientes do serviço autenticação única Single Sign-On (SSO) dessas duas soluções tecnológica.

## Motivação

A implementação surgiu diante da necessidade constante de aprimoramento e elevação do nível de segurança aplicado ao sistema.

## Como funciona no PJe

Ressalta-se, desde logo, que a alteração foi realizada apenas no processo de autenticação e exclusivamente do lado do serviço SSO, sem qualquer necessidade de alteração no sistema PJe.

O usuário que se autenticar no PJe pela primeira vez, seja por certificado digital ou CPF e senha, receberá um código de autenticação no seu e-mail cadastrado no sistema para validação. Contudo, o segundo fator de autenticação funcionará apenas quando os usuários tiverem seus e-mails cadastrados no PJe com as terminações **jus.br** e **gov.br**, conforme exemplo abaixo:

![Imagem de exemplo da página do duplo fato de autenticação](https://docs.pje.jus.br/assets/images/2fa-sso-pje-1dd9e1faa32efbafe5ec8454d8c10080.png)

Após o digitar o código recebido por e-mail e clicar em validar, seu acesso será concedido exatamente da mesma forma como já funciona atualmente.