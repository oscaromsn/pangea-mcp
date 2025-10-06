---
title: "Certificado | Datajud-Wiki"
source: "https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/envio-xml/certificado"
author:
published:
created: 2025-09-30
description: "Ao utilizar o serviço de envio de XML ao Datajud, podem surgir possíveis problemas com o certificado, como o erro de HandShake SSL. Durante o teste de envio ou no serviço de produção pode ocorrer um erro semelhante ao descrito abaixo:"
tags:
  - "clippings"
---
# Certificado | Datajud-Wiki
Available at https://datajud-wiki.cnj.jus.br/para-tribunais/orientacoes-rest/envio-xml/certificado


## Certificado

Ao utilizar o serviço de envio de XML ao Datajud, podem surgir possíveis problemas com o certificado, como o erro de ***HandShake SSL***. Durante o teste de envio ou no serviço de produção pode ocorrer um erro semelhante ao descrito abaixo:

```java
com.sun.jersey.api.client.ClientHandlerException: 
javax.net.ssl.SSLHandshakeException: 
sun.security.validator.ValidatorException: PKIX path building failed:
sun.security.provider.certpath.SunCertPathBuilderException: unable to find 
valid certification path to requested target 
...
Caused by: javax.net.ssl.SSLHandshakeException: 
sun.security.validator.ValidatorException: PKIX path building failed: 
sun.security.provider.certpath.SunCertPathBuilderException: unable to find 
valid certification path to requested target
...
```

Esse tipo de erro de HandShake SSL pode surgir quando há alguma inconsistência ou problema com o certificado de segurança utilizado para estabelecer a conexão criptografada com o servidor do Datajud. Isso pode acontecer devido a diversos motivos, como expiração do certificado, configurações incorretas ou certificado não confiável.

Nesses casos, é importante verificar as configurações do certificado SSL utilizado e certificar-se de que ele esteja válido e corretamente configurado. Caso seja necessário, pode ser preciso renovar ou atualizar o certificado, bem como garantir que a cadeia de certificação esteja completa e corretamente configurada.

Para garantir a segurança da conexão com o CNJ, é imprescindível seguir o procedimento de importação do certificado da página do CNJ para sua aplicação. Essa etapa é essencial para que a comunicação ocorra de forma segura e confiável. Para importar o certificado corretamente, siga as instruções abaixo:

1. Acesse o ***endpoint*** **Validar Serviço (v1/processos/)** via browser: [https://www.cnj.jus.br/modelo-de-transferencia-de-dados/v1/processos/](https://www.cnj.jus.br/modelo-de-transferencia-de-dados/v1/processos/);
2. Aparecerá a tela pedindo autenticação, mas não tem problema. Clique no ícone com um cadeado, na parte esquerda da caixa de entrada da URL de conexão;
3. Clique no link ‘Detalhes’. Aparecerá uma tela parecida com a abaixo. Perceba que tem um botão chamado “View Certificate” ou “Ver Certificado”;
4. Abrirá uma janela para ver o certificado;
5. Clicar na aba “Detalhes”;
6. Clicar no botão “Copiar para Arquivo...”, e clique no botão “Avançar”;
7. Informe o caminho onde o arquivo com extensão.CER será gravado – no caso, utilizei o caminho C:\\certs\\cnjh.cer;
8. Clique em Concluir para finalizar a gravação;
9. Importe o certificado.cer para o repositório cacerts da JDK que está utilizando com o comando:
```powershell
> keytool -import -file “c:\certs\cnjh.cer” -storepass changeit -keystore cacerts -alias cnj
```

ou

```powershell
> keytool -import -trustcacerts –alias cnjh -file "C:\certs\cnjh.cer" \
-keystore "C:\Program Files\Java\jdk1.8.0_102\jre\lib\security\cacerts"
```
1. Após isso, pode executar novamente a rotina que executa os serviços de envio ao Datajud.