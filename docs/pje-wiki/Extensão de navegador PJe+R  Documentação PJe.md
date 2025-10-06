---
title: "Extensão de navegador PJe+R | Documentação PJe"
source: "https://docs.pje.jus.br/servicos-negociais/extens%C3%A3o-pje-mais-r"
author:
published:
created: 2025-09-30
description: "Visão Geral"
tags:
  - "clippings"
---
# Extensão de navegador PJe+R | Documentação PJe
Available at https://docs.pje.jus.br/servicos-negociais/extens%C3%A3o-pje-mais-r


[Pular para o conteúdo principal](https://docs.pje.jus.br/servicos-negociais/#__docusaurus_skipToContent_fallback)

## Extensão de navegador PJe+R

## Visão Geral

Extensão de navegador com melhorias ao "microsistema PJe".

A extensão `PJe+R` ou `pjemaisr` busca aumentar a racionalidade, a rapidez e a relevância do sistema PJe e sistemas satélites, de forma a assegurar mais acessibilidade, eficiência e melhoria da experiência do usuário além de prover automações e integração entre esses sistemas.

É um projeto colaborativo, com a atuação de diversos desenvolvedores voluntários, inspirado pelo uso de scripts de usuário (como os utilizados pelo `GreaseMonkey` e assemelhados) e pela extensão `SEI++`. O projeto inspira-se também na experiência da extensão `AVJT - Assistente Virtual da Justiça do Trabalho`.

Entenda melhor assistindo ao vídeo [O que é o PJe+R](https://www.youtube.com/watch?v=PiHVuQOabGc).

## Instalação

A versão para o Chrome (recomendado) está na [Chrome Web Store](https://chrome.google.com/webstore/detail/pje-%2Br/kafnfkonkgfgkppomkfckmkgpkfkggcp?hl=pt-br).

A versão para o Firefox está no site [Firefox Browser Add-ons](https://addons.mozilla.org/pt-BR/firefox/addon/pje-mais-r/).

## Tutoriais para usuários

Verifique nossos tutoriais no youtube: [Onde encontrar os tutoriais?](https://www.youtube.com/watch?v=HaMofA3QHyU&t=2s).

## Colaborando com o projeto

### Preparação do ambiente

Para colaborar no projeto, sua estação de trabalho deve estar configurada com os seguintes aplicativos:

1. Navegadores de internet: Google Chrome, Mozilla Firefox, e, opcionalmente, Microsoft Edge.
2. [`NodeJS`](https://nodejs.org/pt-br/) - É um ambiente de execução Javascript *server-side*.
3. [`pNpm`](https://pnpm.io/pt/) - Gestor de pacotes.
4. [`Visual Studio Code / VS Code`](https://code.visualstudio.com/) (opcional, mas recomendado).
5. [`Git`](https://git-scm.com/) - É um sistema de controle de versões que possue a função de registrar quaisquer alterações feitas em arquivos simplificando o processo de compartilhamento de um projeto com um time.
6. [`Git Flow`](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html) - É um conjunto de extensões do Git que fornecem operações de alto nível para repositórios usando o modelo de ramificação de Vincent Driessen. A instalação desse item deve ser feita manualmente apenas se você estiver utilizando linux usando os comandos:

```markdown
sudo apt-get update
sudo apt-get install git-flow
```

Para simplificar a configuração no ambiente Microsoft Windows 10 ou superior podemos seguir o roteiro a seguir:

1. Abrir um terminal do `Powershell` (Tecla do `Windows + X` e depois `I`)
2. Instalar [`Scoop`](https://scoop.sh/) digitando os seguintes comandos no terminal do `Powershell`:  
	`Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`  
	`irm get.scoop.sh | iex`
3. Instalar os requisitos necessários (`Git`, `VS Code`, `NodeJS`, `pNpm`) `scoop bucket add extras` `scoop install git vscode pnpm nodejs`

### Obtendo o código e compilando

Caso seja a primeira vez que esteja usando o Git, defina o `user.name` e `user.email` primeiro. Veja como fazer [aqui](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git). Isso deve ser suficiente para você usar o `Git` pelo terminal. Se além dos comandos user.name e user.email, o Git solicitar a senha, o usuário deve seguir os passos abaixo:

1. Acesse a página de preferências do seu perfil do Git no link: [https://git.cnj.jus.br/-/profile/preferences](https://git.cnj.jus.br/-/profile/preferences); 1.1 Ao entrar na opção acima, você poderá criar um novo token de acesso, clicando em "Access Tokens";
2. Ao entrar na opção 1.1 você irá criar um novo token de acesso;  
	2.1 Preencher 'Token name';  
	2.2 Preencher 'Expiration date'. Caso este campo fique em branco, o token não irá expirar.  
	2.3 Selecionar o escopo de acordo com sua necessidade;  
	2.4 Após realizar os passos 2.1.0 até 2.1.2, o usuário deve clicar em "Create personal access token";
3. Copiar o código gerado e informar na linha de comando do git.

Para obter o código, clone o repositório e faça a primeira compilação com os seguintes comandos:

```markdown
git clone https://git.cnj.jus.br/git-jus/pjemaisr.git
cd pjemaisr
pnpm install
```

### Editando o código

Abra o `VS Code` pelo ícone no menu Iniciar ou digitando `code` no terminal.

Assim que o `VS Code` estiver disponível, selecione a opção `Abrir Pasta` e localize a pasta `pjemaisr`.

### Compilando o código

Ambiente preparado agora é hora de rodar o ambiente de desenvolvimento e ter acesso a um tutorial mais específico e detalhado. Para isso rode o comando:

```markdown
pnpm play:chrome
```

Após alguns segundos, o navegador será aberto com a extensão instalada. Para acessar a documentação mais detalhada, clique em "Documentação do PJe+R" veja imagem abaixo:![Imagem da tela inicial do amviente de desenvolvimento](https://docs.pje.jus.br/assets/images/tela-inicial-do-ambiente-de-desenvolvimento-5a3f5929c1c778581ab6b9466a99851f.png)

Nos vemos por lá!