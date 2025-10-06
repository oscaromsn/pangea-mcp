---
title: "Deploy de Aplicações | Documentação PDPJ-Br"
source: "https://docs.pdpj.jus.br/desenvolvendo-para-a-pdpj/deploy-de-aplicacoes"
author:
published:
created: 2025-09-30
description: "Conceitos Gerais"
tags:
  - "clippings"
---
# Deploy de Aplicações | Documentação PDPJ-Br
Available at https://docs.pdpj.jus.br/desenvolvendo-para-a-pdpj/deploy-de-aplicacoes


## Conceitos Gerais

Nos projetos da PDPJ, os ambientes de *deployment* estão instalados em *clusters* Kubernetes, gerenciados por meio da ferramenta *open source* de orquestração de containeres chamada Rancher.

De toda sorte, o desenvolvedor não necessita maiores conhecimentos a respeito desses ambientes, bastando que sua aplicação possua os arquivos *yamls* sugeridos para que o *deploy* ocorra de forma automática por meio de *pipelines* de CI/CD (*Continuous Delivery* e *Continuous Integration*) executados pelo GitLab do CNJ ([https://git.cnj.jus.br/](https://git.cnj.jus.br/)).

Além disso, como a aplicação será executada em ambiente "contineirizado", ela deve possuir um arquivo Dockerfile, especificando o modo pelo qual ela deve ser empacotada.

Por fim, o projeto deve possuir um arquivo.gitlab-ci.yml, o qual especifica a *pipeline* propriamente dita.

Em suma, para que ocorra o *deploy* da aplicação de forma automática, é necessário:

- Presença de *Dockerfile* definindo o modo de empacotamento da aplicação
- Presença do arquivo *.gitlab-ci.yml* definindo a *pipeline* de *deploy* automático
- Presença da pasta *kubernetes*, com os arquivos *yamls* necessários para os diversos ambientes de destino

## Acesso aos Logs da Aplicação

Caso seguida as recomendações da seção anterior, a equipe de desenvolvimento terá acesso aos *logs* gerados pelos *pods* da aplicação diretamente no GitLab.

Para tanto, basta clicar no menu Operações, submenu Logs, na página do projeto:

***Logs diretamente pelo GitLab***

![Logs no Gitlab](https://docs.pdpj.jus.br/assets/images/img_log_gitlab-5c9a21a52bc71e0e54325497c8056059.png)

## Estrutura do Projeto

A estrutura do projeto, independentemente da linguagem de programação em que for escrita, deve possuir, portanto, a seguinte estrutura mínima:

```markdown
projeto
├── Dockerfile [1]
├── .gitlab-ci.yml [2]
└── kubernetes/ [3]
   ├── base/
   │   ├── base.yml
   │   └── kustomization.yml
   └── overlays/
       ├── eks-hml-01/ [4]
       │   ├── configmaps.yml  [5]
       │   ├── ingress.yml  [6]
       │   └── kustomization.yml  [7]
       └── eks-prd-01/ [8]
           ├── configmaps.yml
           ├── ingress.yml
           └── kustomization.yml
```

1. Dockerfile que define o empacotamento/build da aplicação (varia para cada linguagem de programação/caso concreto)
2. Arquivo *yaml* que define os passos da *pipeline* de *build* e *deploy* automáticos
3. Pasta que define as configurações necessárias para o ambiente kubernetes
4. Pasta com configurações para o ambiente de homologação da PDPJ
5. Arquivo de configuração/propriedades da aplicação para o ambiente em questão
6. Arquivo de configuração do *ingress* da aplicação. Necessário apenas para aquelas aplicações que necessitem de URL própria exposta na Internet. Se a aplicação for um serviço que será acessado exclusivamente via *Gateway API*, pode ser omitido
7. Arquivo da ferramenta Kustomize, que realiza a personalização das configurações conforme o ambiente
8. Pasta com configurações para o ambiente de produção da PDPJ

Se o projeto for uma aplicação Java, sugere-se a existência também de um arquivo `.m2/settings.xml`, que é o arquivo de configuração do *maven* apontando para o repositório de artefatos do CNJ, utilizado no exemplo abaixo para o *build* de aplicações Java.

## Exemplos de Arquivos

### Dockerfile para uma aplicação em Java

```dockerfile
# Dockerfile
FROM openjdk:11-jre-slim

COPY target/myapp.jar /opt/myapp/myapp.jar

EXPOSE 8080
ENTRYPOINT [ "java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/opt/myapp/myapp.jar" ]
```

### .gitlab-ci.yml

(independe da lingaguem de programação, exceto a fase de build, que varia conforme a linguagem adotada. No exemplo abaixo, presume Java com maven)

```yaml
stages:
  - package
  - build
  - release
  - deploy

# build de aplicações java
maven-package:
  stage: package
  interruptible: true
  image:
    name: maven:3-jdk-11
    entrypoint: [ "" ]
  variables:
    DOCKER_HOST: "tcp://docker:2375"
    DOCKER_TLS_CERTDIR: ""
    DOCKER_DRIVER: overlay2
    MAVEN_CLI_OPTS: "--settings .m2/settings.xml --batch-mode "
    MAVEN_OPTS: "-Dmaven.repo.local=.m2/repository"
  services:
      - docker:dind
  cache:
    key: "${CI_PROJECT_ID}-${CI_JOB_NAME}"
    paths: [ ".m2/repository" ]
  artifacts:
    paths: [ "target/myapp.jar" ]
  script:
    - mvn $MAVEN_CLI_OPTS package

# Ambiente de homologação
.env-eks-hml-01:
  environment:
    name: eks-hml-01
    deployment_tier: staging
    kubernetes:
      namespace: negociais

# Ambiente de produção
.env-eks-prd-01:
  environment:
    name: eks-prd-01
    deployment_tier: production
    kubernetes:
      namespace: negociais

.prepare-job-template:
  stage: package
  image:
    name: registry.cnj.jus.br/segsa/k8s-utils:latest
    entrypoint: [ "" ]
  dependencies: []
  artifacts:
    paths: [ "kubernetes/" ]
  environment:
    action: prepare
  script:
    - cd "$CI_PROJECT_DIR/kubernetes/overlays/$CI_ENVIRONMENT_NAME"
    - kustomize edit set image "registry.cnj.jus.br/pdpj/myapp:$CI_COMMIT_REF_NAME"
    - kustomize edit add annotation --force "app.gitlab.com/app:${CI_PROJECT_PATH_SLUG}"
        "app.gitlab.com/env:${CI_ENVIRONMENT_SLUG}" "app.gitlab.com/commit-short-sha:${CI_COMMIT_SHORT_SHA}"
    - kubectl apply --dry-run=client -k .

prepare-eks-hml-01:
  extends:
    - .prepare-job-template
    - .env-eks-hml-01

prepare-eks-prd-01:
  extends:
    - .prepare-job-template
    - .env-eks-prd-01

# Criação da imagem Docker da aplicação e seu envio para o servidor do CNJ
docker-image:
  stage: build
  image: docker:20.10
  services:
    - docker:20.10-dind
  variables:
    DOCKER_TLS_CERTDIR: "/certs"
  before_script:
    - docker login -u "$NEXUS_USERNAME" -p "$NEXUS_PASSWORD" registry.cnj.jus.br
  script:
    - docker build --pull -t "registry.cnj.jus.br/pdpj/myapp:$CI_COMMIT_REF_NAME"
        -t "registry.cnj.jus.br/pdpj/myapp:latest" -f Dockerfile "$CI_PROJECT_DIR"
    - docker push "registry.cnj.jus.br/pdpj/myapp:$CI_COMMIT_REF_NAME"
    - docker push "registry.cnj.jus.br/pdpj/myapp:latest"

release-job:
  stage: release
  image:
    name: registry.gitlab.com/gitlab-org/release-cli:latest
    entrypoint: [ "" ]
  dependencies: []
  rules:
    - if: $CI_COMMIT_TAG
  variables:
    GIT_STRATEGY: none
  script:
    - release-cli create --tag-name "${CI_COMMIT_TAG}" --description "${CI_COMMIT_MESSAGE}"

.deploy-job-template:
  stage: deploy
  image:
    name: registry.cnj.jus.br/segsa/k8s-utils:latest
    entrypoint: [ "" ]
  variables:
    GIT_STRATEGY: none
  retry:
    max: 2
    when: stuck_or_timeout_failure
  script:
    - cd "$CI_PROJECT_DIR/kubernetes/overlays/$CI_ENVIRONMENT_NAME"
    - kubectl apply -k . || (kubectl delete --ignore-not-found --wait -k . && kubectl apply -k .)

deploy-eks-hml-01:
  rules:
    - if: '$CI_COMMIT_BRANCH == "master"'
  extends:
    - .deploy-job-template
    - .env-eks-hml-01
  dependencies: [ "prepare-eks-hml-01" ]

deploy-eks-prd-01:
  rules:
    - if: $CI_COMMIT_TAG
  extends:
    - .deploy-job-template
    - .env-eks-prd-01
  dependencies: [ "prepare-eks-prd-01" ]
```

Importante destacar que a imagem *docker* deve ser sempre salva no repositório de artefatos do CNJ, uma vez que o Rancher busca de lá as imagens para o *deploy* da aplicação. O usuário não precisa se preocupar com as credenciais do repositório, uma vez que eles são fornecidas de forma transparente pelo ambiente do GitLab.

Os arquivos dentro do diretório `kubernetes/base` contêm a aplicação e tudo que é comum a todos os ambientes:

### kubernetes/base/base.yml

```yaml
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  namespace: negociais # namespace para módulos negociais da PDPJ
  labels:
    app: myapp
spec:
  replicas: 1
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 100
            podAffinityTerm:
              labelSelector:
                matchLabels:
                  app: myapp
              topologyKey: kubernetes.io/hostname
      containers:
      - name: myapp
        image: registry.cnj.jus.br/pdpj/myapp:latest
        imagePullPolicy: Always
        env:
        - name: TZ
          value: America/Sao_Paulo
        - name: EUREKA_INSTANCE_PREFERIPADDRESS
          value: "true"
        envFrom:
        - secretRef:
            name: db-secret # secret no Kubernetes (senhas e outras informações confidenciais devem ser armazenadas em secrets)
        ports:
        - containerPort: 8080
          name: http
        livenessProbe:
          httpGet:
            path: /
            port: http
          failureThreshold: 6
          initialDelaySeconds: 10
          periodSeconds: 30
          timeoutSeconds: 10
        readinessProbe:
          httpGet:
            path: /
            port: http
          failureThreshold: 3
          initialDelaySeconds: 10
          periodSeconds: 30
          timeoutSeconds: 10
        startupProbe:
          httpGet:
            path: /
            port: http
          failureThreshold: 60
          periodSeconds: 30
          timeoutSeconds: 10
        resources:
          requests:
            memory: "512Mi"
            cpu: "50m"
          limits:
            memory: "1Gi"
            cpu: "1000m"
        volumeMounts:
        - name: myapp-config
          mountPath: /opt/myapp/myapp.properties
          subPath: myapp.properties
          readOnly: true
      volumes:
      - name: myapp-config
        configMap:
          name: myapp-config
...
---
apiVersion: v1
kind: Service
metadata:
  name: myapp
  namespace: negociais # namespace para módulos negociais da PDPJ
  labels:
    app: myapp
spec:
  type: NodePort
  ports:
  - name: http
    port: 8080
  selector:
    app: myapp
...
```

### kubernetes/base/kustomization.yml

```yaml
---
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
- base.yml
...
```

Os arquivos dentro do diretório `kubernetes/overlays/eks-hml-01` contêm somente as configurações que devem ser aplicadas ao ambiente de **homologação** da aplicação.

### kubernetes/overlays/eks-hml-01/configmaps.yml

```yaml
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-config
  namespace: myapp-namespace
  labels:
    app: myapp
data:
  myapp.properties: |
    ambiente=homologação
    propriedade.X=valorX
...
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-env
  namespace: myapp-namespace
  labels:
    app: myapp
data:
  SPRING_PROFILES_ACTIVE: "staging"
...
```

Um *configmap* nada mais é do que uma ferramenta de substituição de arquivos e seus conteúdos fornecido pelo ambiente Kubernetes, a fim de facilitar a configuração da aplicação conforme o ambiente em que ela esteja a executar (homologação, sustentação, produção, treinamento, etc).

### kubernetes/overlays/eks-hml-01/ingress.yml

```yaml
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp
  namespace: myapp-namespace
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}, {"HTTPS": 443}]'
    alb.ingress.kubernetes.io/ssl-redirect: '443'
  labels:
    app: myapp
spec:
  rules:
  - host: myapp.stg.pdpj.jus.br
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: myapp
            port:
              name: http
...
```

Um *ingress*, por sua vez, é a configuração do modo pelo qual a aplicação será acessada externamente pela Internet. Essa configuração só faz sentido se a aplicação possuir uma URL/frontend própria. Caso ela vá servir apenas como fachada REST acessível via o *Gateway API*, a configuração de *ingress* é desnecessária.

### kubernetes/overlays/eks-hml-01/kustomization.yml

```yaml
---
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
- ../../base
- configmaps.yml
- ingress.yml
...
```

O arquivo *kustomization.yaml* possui a configuração da ferramenta Kustomize, utilizada pelo CNJ para viabilizar o *deploy* automático a depender do ambiente de destino.

Por sua vez, os arquivos dentro do diretório `kubernetes/overlays/eks-prd-01` contêm somente as configurações que devem ser aplicadas ao ambiente de **produção** da aplicação:

### kubernetes/overlays/eks-prd-01/configmaps.yml

```yaml
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-config
  namespace: myapp-namespace
  labels:
    app: myapp
data:
  myapp.properties: |
    ambiente=produção
    propriedade.X=valorY
...
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-env
  namespace: myapp-namespace
  labels:
    app: myapp
data:
  SPRING_PROFILES_ACTIVE: "production"
...
```

### kubernetes/overlays/eks-prd-01/ingress.yml

```yaml
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp
  namespace: myapp-namespace
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP": 80}, {"HTTPS": 443}]'
    alb.ingress.kubernetes.io/ssl-redirect: '443'
  labels:
    app: myapp
spec:
  rules:
  - host: myapp.pdpj.jus.br
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: myapp
            port:
              name: http
...
```

### kubernetes/overlays/eks-prd-01/kustomization.yml

```yaml
---
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
- ../../base
- configmaps.yml
- ingress.yml

# Na produção utilizamos 2 ou mais réplicas, para alta disponibilidade da aplicação
replicas:
- name: myapp
  count: 2
...
```

Por fim, se aplicação for escrita na linguagem Java e fizer uso da ferramenta *maven*, o seguinte arquivo deve existir no projeto, na pasta `.m2` (obs: as variáveis de ambiente NEXUS\_USERNAME e NEXUS\_PASSWORD são preenchidas em tempo de execução pelo próprio GitLab, ou seja, pode-se deixar o conteúdo arquivo abaixo *ipsis litteris* no projeto):

### m2/settings.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
  <servers>
    <server>
      <id>nexus</id>
      <username>${env.NEXUS_USERNAME}</username>
      <password>${env.NEXUS_PASSWORD}</password>
    </server>
  </servers>
  <mirrors>
    <mirror>
      <id>nexus</id>
      <name>nexus.cnj.jus.br</name>
      <url>https://nexus.cnj.jus.br/repository/maven-public</url>
      <mirrorOf>external:*</mirrorOf>
    </mirror>
  </mirrors>
</settings>
```