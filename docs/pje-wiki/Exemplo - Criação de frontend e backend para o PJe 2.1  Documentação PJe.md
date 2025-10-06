---
title: "Exemplo - Criação de frontend e backend para o PJe 2.1 | Documentação PJe"
source: "https://docs.pje.jus.br/manuais-de-inicializacao/exemplo-criacao-de-frontend-e-backend-para-o-pje-2-1"
author:
published:
created: 2025-09-30
description: "Proposta de atividade"
tags:
  - "clippings"
---
# Exemplo - Criação de frontend e backend para o PJe 2.1 | Documentação PJe
Available at https://docs.pje.jus.br/manuais-de-inicializacao/exemplo-criacao-de-frontend-e-backend-para-o-pje-2-1


[Pular para o conteúdo principal](https://docs.pje.jus.br/manuais-de-inicializacao/#__docusaurus_skipToContent_fallback)

## Exemplo - Criação de frontend e backend para o PJe 2.1

## Proposta de atividade

Pretende-se que o monolito pje-legacy seja decomposto em vários microsserviços. Cada microsserviço deve atender a uma necessidade de negócio bem definida. Um bom ponto de partida consiste na identificação de contextos negoiciais triviais, como por exemplo as funcionalidades de CEP existentes no monolito.

### Necessidade a ser atendida

Construir um serviço de CEP separado do monolito, de modo que o pje-legacy e outros serviços possa fazer uso de seus recursos. O novo microsserviço deve atender ao gerenciamento de CEPs, e não deve fugir a este contexto negocial.

### Recursos

Através dete microsserviço será possível:

- Criar CEP;
- Consultar CEPs;
- Alterar CEPs;
- Excluir CEPs;
- Criar UF;
- Consultar UFs;
- Alterar UF;
- Excluir UFs;
- Criar municípios;
- Alterar municípios;
- Consultar municípios;
- Excluir municípios.

### Visão arquitetural

#### Interação com os ambiente de microsserviços

##### Interação com o ambiente de microsserviços

![Imagem de interação com o ambiente de microsserviços](https://docs.pje.jus.br/assets/images/diagrama-interacao-cep-60b5233b3a573e14782c659af2f29f46.png)

#### Diagrama de classes

##### Diagrama de classes do serviço de CEPs

![Imagem do diagrama de classes do serviço de CEP](https://docs.pje.jus.br/assets/images/diagrama-classe-cep-ed12dca871a78bdbf2d441fa8dc22127.png)

#### Arquitetura do microsserviço

##### Arquitetura do serviço CEP

![Imagem do diagrama de classes do serviço de CEP](https://docs.pje.jus.br/assets/images/arq-cep-4b8d124aca65ffc38623c77ee489b06e.png)

## Armazenamento dos dados

Utilizaremos um banco de dados relacional *PostgreSQL* para armazenar os dados do nosso novo microsserviço. É bom lembrar que a escolha do banco de dados deve levar em consideração as necessidades específicas do microsserviço.

Criando o novo banco de dados:

```sql
CREATE DATABASE "cep-service"
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'pt_BR.UTF-8'
       LC_CTYPE = 'pt_BR.UTF-8';
```

Criar as sequences das tabelas:

```sql
CREATE SCHEMA core;

CREATE SEQUENCE core.sq_tb_cep
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;
ALTER TABLE core.sq_tb_cep
  OWNER TO postgres;

CREATE SEQUENCE core.sq_tb_estado
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;
ALTER TABLE core.sq_tb_estado
  OWNER TO postgres;

CREATE SEQUENCE core.sq_tb_municipio
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;
ALTER TABLE core.sq_tb_municipio
  OWNER TO postgres;
```

Criar as tabelas do banco de dados:

```sql
CREATE TABLE core.tb_estado
(
  id_estado integer NOT NULL DEFAULT nextval('core.sq_tb_estado'::regclass),
  cd_estado character(2) NOT NULL,
  ds_estado character varying(30) NOT NULL,
  in_ativo boolean NOT NULL DEFAULT true,
  CONSTRAINT tb_estado_pkey PRIMARY KEY (id_estado)
)
WITH (
  OIDS=FALSE
);

CREATE TABLE core.tb_municipio
(
  id_municipio integer NOT NULL DEFAULT nextval('core.sq_tb_municipio'::regclass),
  id_estado integer NOT NULL,
  ds_municipio character varying(50) NOT NULL,
  in_ativo boolean NOT NULL DEFAULT true,
  id_municipio_ibge character varying(10),
  CONSTRAINT tb_municipio_pkey PRIMARY KEY (id_municipio),
  CONSTRAINT tb_municipio_id_estado_fkey FOREIGN KEY (id_estado)
      REFERENCES core.tb_estado (id_estado) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);

CREATE TABLE core.tb_cep
(
  id_cep integer NOT NULL DEFAULT nextval('core.sq_tb_cep'::regclass),
  nr_cep character varying(9) NOT NULL,
  nm_logradouro character varying(200),
  nm_bairro character varying(200),
  ds_complemento character varying(100),
  in_ativo boolean NOT NULL DEFAULT true,
  id_municipio integer NOT NULL,
  nr_endereco_cep character varying(6),
  CONSTRAINT tb_cep_pkey PRIMARY KEY (id_cep),
  CONSTRAINT tb_cep_id_municipio_fkey FOREIGN KEY (id_municipio)
      REFERENCES core.tb_municipio (id_municipio) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
```

## Backend

### O projeto sample-service

Este projeto consiste em um template de microserviços, que contém as funcionalidade básicas que um microsserviço do PJe deve ter. O projeto foi escrito com SpringBoot. Recursos como log, comunicação com o message broker entre outros já estão implementados. A ideia deste microsserviço é criar um padrão e acelerar a produção de novos microsserviços para o PJe.

### Iniciando a partir do sample-service

Devemos começar clonando o repositório sample-service:

```jsx
git clone git@git.cnj.jus.br:pje2/pje2-servicos/sample-service.git
```

Criar um novo branch a partir do branch master do projeto:

```jsx
git checkout -b <meu_branch> origin/master
```

Incluir as dependências spring-boot-starter-data-jpa e postgresql no pom.xml

```xml
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
</dependency>
```

### Configurando o microsserviço através do application.yml

Na pasta `src/main/resources` está o arquivo `application.yml`. Este arquivo do tipo *YAML* é reponsável por guardar e controlar as configurações da nossa aplicação SpringBoot. Configurações como conexão com o banco de dados, conexão com o *eureka*, conexão com e *rabbitmq*, porta do serviço entre outras estão neste arquivo. Nosso arquivo de configurações `application.yml` deve ficar deste jeito:

- **Linha 1**: Configurações do servidor
- **Linha 6**: Configurações do serviço
- **Linha 40**: Configurações do cliente para keycloak
- **Linha 47**: Configurações da instância no service discovery
- **Linha 56**: Configurações do actuator
- **Linha 63**: Opções de log

Pronto! Temos tudo o que precisamos para dar início a implementação do microsserviço.

### Mapeando as entidades

Vamos criar as representações das tabelas do nosso microsserviço no pacote `br.jus.pje.sample.model.entities`.

Criaremos três novas classes conforme o [Diagrama de classes](https://docs.pje.jus.br/manuais-de-inicializacao/exemplo-criacao-de-frontend-e-backend-para-o-pje-2-1#diagrama-de-classes):

- Estado;
- Município;
- CEP.

#### Entidade Estado

```java
@Entity
@Table(name = "tb_estado")
@SequenceGenerator(allocationSize = 1, name = "gen_estado", sequenceName = "sq_tb_estado")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Estado implements Serializable{

    private static final long serialVersionUID = 1L;

    private Long id;
    private String sigla;
    private String nome;
    private Boolean ativo = Boolean.FALSE;

    @Id
    @GeneratedValue(generator = "gen_estado")
    @Column(name = "id_estado", unique = true, nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "ds_estado", length = 30)
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Column(name = "cd_estado", length = 2)
    public String getSigla() {
        return sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }

    @Column(name = "in_ativo", nullable = false)
    public Boolean getAtivo() {
        return ativo;
    }

    public void setAtivo(Boolean ativo) {
        this.ativo = ativo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Estado estado = (Estado) o;
        return Objects.equals(id, estado.id) &&
                Objects.equals(sigla, estado.sigla) &&
                Objects.equals(nome, estado.nome) &&
                Objects.equals(ativo, estado.ativo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, sigla, nome, ativo);
    }
}
```

#### Entidade Município

```java
@Entity
@Table(name = "tb_municipio")
@SequenceGenerator(allocationSize = 1, name = "gen_municipio", sequenceName = "sq_tb_municipio")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Municipio implements Serializable{

    private static final long serialVersionUID = 1L;

    private Long id;
    private String nome;
    private String codigoIbge;
    private Estado estado;
    private Boolean ativo;

    @Id
    @GeneratedValue(generator = "gen_municipio")
    @Column(name = "id_municipio", unique = true, nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "ds_municipio", length = 50)
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Column(name = "id_municipio_ibge", length = 10)
    public String getCodigoIbge() {
        return codigoIbge;
    }

    public void setCodigoIbge(String codigoIbge) {
        this.codigoIbge = codigoIbge;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_estado", nullable = false)
    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }

    @Column(name = "in_ativo", nullable = false)
    public Boolean getAtivo() {
        return ativo;
    }

    public void setAtivo(Boolean ativo) {
        this.ativo = ativo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Municipio municipio = (Municipio) o;
        return Objects.equals(id, municipio.id) &&
                Objects.equals(nome, municipio.nome) &&
                Objects.equals(codigoIbge, municipio.codigoIbge) &&
                Objects.equals(estado, municipio.estado) &&
                Objects.equals(ativo, municipio.ativo);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, nome, codigoIbge, estado, ativo);
    }
}
```

#### Entidade CEP

```java
@Entity
@Table(name = "tb_cep")
@SequenceGenerator(allocationSize = 1, name = "gen_cep", sequenceName = "sq_tb_cep")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Cep implements Serializable{

    private static final long serialVersionUID = 1L;

    private Long id;
    private String cep;
    private String logradouro;
    private String bairro;
    private Municipio municipio;
    private String complemento;
    private Boolean ativo;
    private String numero;

    @Id
    @GeneratedValue(generator = "gen_cep")
    @Column(name = "id_cep", unique = true, nullable = false)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "nr_cep", nullable = false, length = 9, unique = true)
    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    @Column(name = "nm_logradouro", length = 200)
    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    @Column(name = "nm_bairro", length = 100)
    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_municipio")
    public Municipio getMunicipio() {
        return municipio;
    }

    public void setMunicipio(Municipio municipio) {
        this.municipio = municipio;
    }

    @Column(name = "ds_complemento", length = 100)
    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    @Column(name = "in_ativo", nullable = false)
    public Boolean getAtivo() {
        return ativo;
    }

    public void setAtivo(Boolean ativo) {
        this.ativo = ativo;
    }

    @Column(name = "nr_endereco_cep", length = 15)
    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Cep cep1 = (Cep) o;
        return Objects.equals(id, cep1.id) &&
                Objects.equals(cep, cep1.cep) &&
                Objects.equals(logradouro, cep1.logradouro) &&
                Objects.equals(bairro, cep1.bairro) &&
                Objects.equals(municipio, cep1.municipio) &&
                Objects.equals(complemento, cep1.complemento) &&
                Objects.equals(ativo, cep1.ativo) &&
                Objects.equals(numero, cep1.numero);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, cep, logradouro, bairro, municipio, complemento, ativo, numero);
    }
}
```

### Criando a camada de acesso aos dados (repository)

Para criar a camada de acesso aos dados utilizaremos os recursos do [Spring Data JPA](https://docs.spring.io/spring-data/jpa/docs/2.0.13.RELEASE/reference/html). O *Spring Data JPA* irá prover suporte para JPA, facilitanto e acelerando o processo de gerenciamento de nossa base de dados relacional com *PostgreSQL*. Entre os recursos providos pela biblioteca estão *query methods* e *query by example*. Este recursos irão facilitar a produção do nosso microsserviço.

Vamos criar três novas *interfaces* no pacote `br.jus.pje.sample.repositories`, uma para cada entidade:

- EstadoRepository;
- MunicipioRepository;
- CepRepository.

As novas *interfaces* criadas devem extender a *interface* *JpaRepository*. A interface *JpaRepository* nos dará uma boa gama de métodos para gerenciamento de nossos dados *out of the box*.

```java
public interface EstadoRepository extends JpaRepository<Estado, Long>{

}
```
```java
public interface MunicipioRepository extends JpaRepository<Municipio, Long>{
        public List<Municipio> findByEstado(Estado estado);
        public List<Municipio> findByNomeLikeIgnoreCase(String municipio);
}
```
```java
public interface CepRepository extends JpaRepository<Cep, Long>{

}
```

### Criando a camada de negócio (Bussiness Service)

Nesta camada construíremos a camada de negócio da nossa aplicação. As classes e métodos implementados nesta camada deverão prover as operações sobre as regras de negócio da nossa aplicação. Inicialmente iremos definir as *interfaces* de negócio, em seguida criaremos as respectivas implementações. Nossa camada *Bussiness Service* fará a ponte entre nossa camada de serviço **REST** e a camada de acesso aos dados. Ao final deveremos ter os seguintes novos artefatos no pacote `br.jus.pje.sample.services`:

- Interfaces
	- EstadoService.java
	- MunicipioService.java
	- CepService.java
- Implementações
	- EstadoServiceImpl.java
	- MunicipioServiceImpl.java
	- CepServiceImpl.java

Com este tipo de abordagem fica fácil criar novas implementações sobre as mesmas regras de negócio, ou mesmo reconstruir nossos microsserviços do zero caso seja necessário.

Vamos às interfaces de negócio:

```java
public interface EstadoService {
    public Estado criarEstado(Estado estado);
    public List<Estado> recuperarEstados();
    public Estado recuperarEstado(Long idEstado);
    public Page<Estado> recuperarEstadosPorPagina(Example<Estado> example, Pageable pageable);
    public Estado inativarEstado(Long idEstado);
    public Estado atualizarEstado(Estado estado);
}
```
```java
public interface MunicipioService {
    public Municipio criarMunicipio(Municipio municipio);
    public List<Municipio> recuperarMunicipios(Estado estado);
    public List<Municipio> recuperarMunicipios();
    public Municipio recuperarMunicipio(Long idMunicipio);
    public List<Municipio> recuperarMunicipio(String nome);
}
```
```java
public interface CepService {
    public Cep criarCep(Cep cep);
    public Page<Cep> recuperarCepsPorPagina(Pageable pageable);
    public Page<Cep> recuperarCepsPorPagina(Example<Cep> example, Pageable pageable);
    public Cep alterarCep(Cep cep);
    public Long excluirCep(Long idCep);
    public Cep recuperarCep(Long idCep);
    public Cep inativarCep(Long idCep);
}
```

E agora as nossas implementações das interfaces de negócio:

```java
@Service
public class EstadoServiceImpl implements EstadoService{

    @Autowired
    private EstadoRepository repo;

    @Override
    public Estado criarEstado(Estado estado) {
        return this.repo.save(estado);
    }

    @Override
    public List<Estado> recuperarEstados() {
        List<Estado> listaEstados = this.repo.findAll();
        if(listaEstados == null || listaEstados.isEmpty()){
            listaEstados = new ArrayList<Estado>();
        }
        return listaEstados;
    }

    @Override
    public Estado recuperarEstado(Long idEstado) {
        return this.repo.getOne(idEstado);
    }

        @Override
        public Page<Estado> recuperarEstadosPorPagina(Example<Estado> example, Pageable pageable) {
                return this.repo.findAll(example, pageable);
        }

        @Override
        public Estado inativarEstado(Long idEstado) {
                Estado estado = this.repo.findById(idEstado).orElse(null);
                estado.setAtivo(false);
                return this.repo.save(estado);
        }

        @Override
        public Estado atualizarEstado(Estado estado) {
                return this.criarEstado(estado);
        }
}
```
- **Linha 1**: Anotação indicando que a classe é do tipo *Service* e é um componente *Spring*;
- **Linha 4**: Injeção do repositório da entidade Estado.
```java
@Service
public class MunicipioServiceImpl implements MunicipioService{

    @Autowired
    private MunicipioRepository repo;

    @Override
    public Municipio criarMunicipio(Municipio municipio) {
        return this.repo.save(municipio);
    }

    @Override
    public List<Municipio> recuperarMunicipios(Estado estado) {
        return this.repo.findByEstado(estado);
    }

    @Override
    public List<Municipio> recuperarMunicipios() {
        return this.repo.findAll();
    }

    @Override
    public Municipio recuperarMunicipio(Long idMunicipio) {
        return this.repo.getOne(idMunicipio);
    }

    @Override
    public List<Municipio> recuperarMunicipio(String nome) {
        return this.repo.findByNomeLikeIgnoreCase("%" + nome + "%");
    }
}
```
```java
@Service
public class CepServiceImpl implements CepService{

    @Autowired
    private CepRepository repo;

    @Override
    public Cep criarCep(Cep cep) {
        return this.repo.save(cep);
    }

    @Override
    public Page<Cep> recuperarCepsPorPagina(Pageable pageable) {
        return this.repo.findAll(pageable);
    }

    @Override
    public Page<Cep> recuperarCepsPorPagina(Example<Cep> example, Pageable pageable) {
        return this.repo.findAll(example, pageable);
    }

    @Override
    public Cep alterarCep(Cep cep) {
        return this.repo.save(cep);
    }

    @Override
    public Long excluirCep(Long idCep) {
        this.repo.deleteById(idCep);
        return idCep;
    }

    @Override
    public Cep inativarCep(Long idCep) {
            Cep cep = this.repo.findById(idCep).orElse(null);

            if(cep != null) {
                    cep.setAtivo(false);
                    cep = this.repo.save(cep);
            }

            return cep;
    }

    @Override
    public Cep recuperarCep(Long idCep) {
        return this.repo.getOne(idCep);
    }
}
```

### Criando a camada REST (RestController)

Finalmente criaremos nossa camaada REST, tendo como referência o [Manual de padrões de API do PJe](https://docs.pje.jus.br/manuais-basicos/padroes-de-api-do-pje).

## Frontend

Agora trabalharemos em um frontend para o nosso novo microsserviço. Nosso frontend será construído no projeto [pje2-web](https://git.cnj.jus.br/pje2/pje2-clientes/pje2-web), que é o novo cliente web com [Agular](https://angular.io/) do PJe.

Nesta etapa vamos criar um novo módulo no *frontend* `pje2-web`. Este novo módulo deverá conter os componentes utilizados para exibição do *CRUD* de CEP.

Para iniciar os trabalhos vamos criar um novo branch a partir do branch `master` desse projeto. Caso não tenha o repositório faça o clone:

Em seguida crie o novo branch:

```jsx
git checkout -b <nome_branch> origin/master
```

Pronto! Já podemos começar a implementar um novo módulo no nosso *frontend* para o serviço de CEP.

### Criando um novo módulo

> *Aplicações Angular são modulares e o Angular tem seu sistema de modularidade próprio, chamado NgModules. NgModules são containers para um bloco coeso de código dedicado a um domínio de aplicação, um wokflow, ou a um conjunto de funcionalidades similares. Podem conter componentes, service providers, e outros códigos cujos escopos são definidos pelo NgModule*.
> 
> — [Angular.io](https://angular.io/guide/architecture-modules)

Precisamos criar um novo módulo no *frontend*, e para isso utilizaramos on [Angular CLI](https://angular.io/cli), que é uma ferramenta de automação de código muito útil para projetos construídos com *Angular*.

Para criar o módulo basta executar o comando do *Angular CLI* na raiz do projeto:

```jsx
ng g module cep --routing=true
```

Este comando criará a pasta `~/git/pje2-web/src/app/cep` com dois arquivos:

- `cep.module.ts`;
- `cep-routing.module.ts`.

### Criando uma rota lazy para o módulo CEP

O *frontend* `pje2-web` utiliza rotas do tipo *lazy* para seus módulos de *feature* como o `cep.module`. Isso quer dizer que os módulos são carregados sob demanda, somente quando a rota for acionada. Este tipo de abordagem otimiza o carregamento dos recursos do frontend melhorando a experiência do usuário no momento do carregamento da página.

Para isso vamos incluir uma nova entrada no array de rotas do arquivo app.routes.ts:

```tsx
...

const routes: Routes = [
  { path: 'painel-usuario-interno', loadChildren: 'app/painel/painel-usuario-interno/painel-usuario-interno.module#PainelUsuarioInternoModule' },
  { path: 'criminal', loadChildren: 'app/criminal/criminal.module#CriminalModule' },
  { path: 'cadastro-processo', loadChildren: 'app/cadastro-processo/cadastro-processo.module#CadastroProcessoModule'},
  { path: 'forbidden-page', component: ForbiddenPageComponent },

  { path: 'cep', loadChildren: 'app/cep/cep.module#CepModule'}
];

...
```

### Criando um componente para o novo módulo

Novamente utilizaremos as facilidades do *Angular CLI* para criar o componente de *CRUD* para nosso módulo de CEP. Dentro da pasta do módulo CEP executaremos o seguinte comando:

```jsx
ng g component crud-cep --export=true --selector=crud-cep
```

A execução do comando deverá gerar os seguintes artefatos na pasta `/src/app/cep/crud-cep`:

- `crud-cep.component.scss`
- `crud-cep.component.html`
- `crud-cep.component.spec.ts`
- `crud-cep.component.ts`

### Mapeando uma rota para o componente

Para conseguir acessar o novo componente precisamos antes mapear um nova rota para ele. Neste caso iremos mapear a nova rota no arquivo de rotas do módulo que o incluiu, ou seja, o `cep-routing.module.ts`.

No arquivo `cep-routing.module.ts` vamos incluir uma nova entrada no *array* de rotas, que deverá ficar da seguinte maneira:

```tsx
const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "crud-cep",
        component: CrudCepComponent,
      },
    ],
  },
];
```

O `path` indica o caminho que deve ser passado na URL, para que o *component* `CrudCepComponent` seja renderizado.

Podemos testar o acesso ao nosso componente em: [http://localhost:4200/#/cep/crud-cep](http://localhost:4200/#/cep/crud-cep).

Deverá ser exibida a frase: *crud-cep works!*.

### Criando os modelos

Para facilitar a manipulação dos recursos do backend vamos definir os modelos para Estado, Município e Cep, levando em consideração a documentação da API do serviço de CEP.

#### Modelos com Swagger

![Imagem de modelos com swagger](https://docs.pje.jus.br/assets/images/swagger-modelos-2aa0af384967e414cc81994d2441c65b.png)

Criaremos então uma pasta chamada *model* na raiz do módulo CEP, e nessa pasta criaremos as seguintes classes *typescript*:

- estado.model.ts
- municipio.model.ts
- cep.model.ts

Que ficarão da seguinte maneira:

```js
export class Estado {
  id: number;
  nome: string;
  ativo: boolean;
  sigla: string;

  constructor(id?: number, nome?: string, ativo?: boolean, sigla?: string) {
    this.id = id;
    this.nome = nome;
    this.ativo = ativo;
    this.sigla = sigla;
  }
}
```
```js
import { Estado } from "./estado.model";

export class Municipio {
  id: number;
  nome: string;
  ativo: boolean;
  codigoIbge: string;
  estado: Estado;

  constructor(
    id?: number,
    nome?: string,
    ativo?: boolean,
    codigoIbge?: string,
    estado?: Estado
  ) {
    this.id = id;
    this.nome = nome;
    this.ativo = ativo;
    this.codigoIbge = codigoIbge;
    this.estado = estado;
  }
}
```
```js
import { Municipio } from "./municipio.model";

export class Cep {
  id: number;
  cep: string;
  logradouro: string;
  bairro: string;
  municipio: Municipio;
  complemento: string;
  ativo: boolean;
  numero: string;

  constructor(
    id?: number,
    cep?: string,
    logradouro?: string,
    bairro?: string,
    municipio?: Municipio,
    complemento?: string,
    ativo?: boolean,
    numero?: string
  ) {
    this.id = id;
    this.cep = cep;
    this.logradouro = logradouro;
    this.bairro = bairro;
    this.municipio = municipio;
    this.complemento = complemento;
    this.ativo = ativo;
    this.numero = numero;
  }
}
```

### Acessando os recursos do backend

Nossa tela precisará acessar o *backend* para executar várias operações no serviço de CEP. Entre tantas operações, precisaremos, por exemplo, recuperar a lista de ceps cadastrados, gravar um novo cep, recuperar a lista de estados e recuperar a lista de municípios de um determinado Estado por parte do nome.

Para ter acesso a todos estes recursos do nosso serviço, teremos que criar uma classe do tipo service, que será responsável por acessar a api do serviço de CEP. Classes desse tipo poderão ser injetadas em componentes. No nosso caso injetaremos nossa *service* no componente `cep-crud`.

Vamos gerar nossa service com *Angular CLI*, na raiz do projeto execute:

```jsx
ng generate service core/services/cep --skipTests=true
```

Este comando irá criar a classe `cep.service.ts` na pasta `src/app/core/services/` esta é a pasta onde estão todas as *services* do cliente *Angular*.

A classe deve ficar com o seguinte conteúdo:

```js
@Injectable({
  providedIn: "root",
})
export class CepService {
  constructor() {}
}
```

Antes de implementarmos as chamadas ao *backend* precisamos criar uma entrada para rota do nosso serviço no *gateway*. No arquivo `rest-servers.ts` adicionamos a entrada para a rota do serviço de cep no *gateway*. O arquivo deverá ficar assim:

```js
export const PJE_LEGACY = "/seam/resource/rest/pje-legacy";
export const CRIMINAL = "/criminal";
export const CEP_SERVICE = "/cep-service/api/v1";
```

Esta constante irá nos auxiliar na montagem das URL das requisições HTTP ao *gateway*.

Agora podemos completar a implementação da classe *service*:

```js
@Injectable({
        providedIn: 'root'
})
export class CepService {

  constructor(private httpClient: HttpClient,
    private config: AppConfig) { }

  /**
   * Recupera todos os estados cadastrados no serviço de ceps
   */
  public recuperarEstados(): Observable<PjeResponse<Page<Estado>>> {
    return this.httpClient.get<PjeResponse<Page<Estado>>>(this.config.getUrlApiGateway() + CEP_SERVICE + "/estados");
  }

  /**
   * Recupera os ceps paginados
   * @param pagina número da página
   * @param tamanhoPagina tamanho da página
   */
  public recuperarCeps(pagina: number, tamanhoPagina: number): Observable<PjeResponse<Page<Cep>>> {

    let params = new HttpParams();
    params = pagina ? params.append("page", "" + pagina) : params;
    params = tamanhoPagina ? params.append("size", "" + tamanhoPagina) : params;

    return this.httpClient.get<PjeResponse<Page<Cep>>>(this.config.getUrlApiGateway() + CEP_SERVICE + "/ceps", { params: params });
  }

  /**
   * Recupera ceps paginados com critério de pesquisa
   * @param pagina índice da página
   * @param tamanhoPagina quantidade de elementos por página
   * @param simpleFilter objeto com modelo para pesquisa
   * @param params objeto modelo para filtrar a pesquisa
   */
  public pesquisarCeps(pagina: number, tamanhoPagina: number, simpleFilter: any): Observable<PjeResponse<Page<Cep>>> {
    let params = new HttpParams();

    params = pagina ? params.append("page", "" + pagina) : params;
    params = tamanhoPagina ? params.append("size", "" + tamanhoPagina) : params;
    params = params.append("sort", "cep");
    params = simpleFilter ? params.append("simpleFilter", JSON.stringify(simpleFilter)) : params;
    console.log(simpleFilter);

    return this.httpClient.get<PjeResponse<Page<Cep>>>(this.config.getUrlApiGateway() + CEP_SERVICE + "/ceps", { params: params });
  }

  /**
   * Recupera municipios com os critérios de pesquisa
   * @param simpleFilter objeto com modelo para pesquisa
   */
  public pesquisarMunicipios(simpleFilter: any): Observable<PjeResponse<Municipio[]>> {
    let params = new HttpParams();

    params = simpleFilter ? params.append("simpleFilter", JSON.stringify(simpleFilter)) : params;

    return this.httpClient.get<PjeResponse<Municipio[]>>(this.config.getUrlApiGateway() + CEP_SERVICE + "/municipios", { params: params });
  }

  /**
   * Salvar um cep
   * @param cep cep a ser registrado
   */
  public salvarCep(cep: Cep): Observable<PjeResponse<Cep>> {
    return this.httpClient.post<PjeResponse<Cep>>(this.config.getUrlApiGateway() + CEP_SERVICE + "/ceps", cep);
  }

  /**
   * Atualiza um cep
   * @param cep a ser atualizado
   */
  public atualizarCep(cep: Cep): Observable<PjeResponse<Cep>> {
    return this.httpClient.put<PjeResponse<Cep>>(this.config.getUrlApiGateway() + CEP_SERVICE + "/ceps/" + cep.id, cep);
  }

  public removerCep(cep: Cep): Observable<PjeResponse<Cep>> {
    return this.httpClient.delete<PjeResponse<Cep>>(this.config.getUrlApiGateway() + CEP_SERVICE + "/ceps/" + cep.id);
  }

}
```

### Datatable e pesquisa paginada

Com a camada de acesso ao *backend* pronta já poderemos construir o componente `crud-cep`. Os *cruds* do PJe possuem um certo padrão de design. Normalmente o *crud* possui duas ou mais abas, onde a primeira é a aba de pesquisa e a segunda o formulário para criação ou atualização da entidade.

#### Layout com abas

Vamos começar criando as abas para nosso conteúdo:

```jsx
<div id="crud-layout-container">
  <div class="ml-15 mr-15">
    <pje-tabs>
      <pje-tab tabTitle="Pesquisar" id="tabPesquisa">
        Aqui ficará a pesquisa com datatable
      </pje-tab>
      <pje-tab tabTitle="Formulário" id="tabFormulário">
        Aqui ficará o formulário
      </pje-tab>
    </pje-tabs>
  </div>
</div>
```
- **Linha 3**: Componente para criação de abas, pode conter n componentes do tipo `pje-tab`;
- **Linha 4**: Componente para criação de uma aba dentro de um componente `pje-tabs`.
```markdown
#crud-layout-container {
  height: 100%;
  width: 100%;
  padding: 15px;
}
```

#### Campos de pesquisa

Na primeira aba vamos inserir os campos de pesquisa e o *datatable*. Vamos começar pelo formulário de pesquisa. Com o Angular podemos fazer fomulários com duas abordagem diferentes: *reactive forms* ou *template-driven forms*. Utilizaremos formulários reativos.

Nosso formulário de pesquisa terá os seguintes campos:

- Cep (input text)
- Logradouro (input text)
- Estado (select/combo)
- Situação. (select/combo)

Inicialmente vamos dar vida a classe `crud-cep.component.ts` ela fará o controle da nossa camada de visão `crud-cep.compnent.html`.

- **Linha 7**: Variável para controle do formulário;
- **Linha 9**: Variável para estados exibidos no formulário de pesquisa;
- **Linha 13**: Injeção da camada de serviço de CEP;
- **Linha 21**: Método acionada ao submeter o formulário;
- **Linha 34**: Método responável por realizar o carregamento da lista de estados;
- **Linha 42**: Método responsável por inicializar o formulário com o modelo de Cep.

E agora o nosso template HTML:

```jsx
...

<pje-tab tabTitle="Pesquisar" id="tabPesquisa">
    <div class="row">
        <div class="col-md-3">
            <div class="pje-panel mt-15 mb-15">
                <form [formGroup]="pesquisaForm" (ngSubmit)="onSubmitPesquisa()">
                    <fieldset class="pt-10 pb-10">
                        <div class="col-md-12">
                            <label for="itCep">CEP</label>
                            <div>
                                <input type="text" formControlName="cep" name="itCep" id="itCep" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="itLogradouro">Logradouro</label>
                            <div>
                                <input type="text" formControlName="logradouro" name="itLogradouro" id="itLogradouro"
                                    class="form-control">
                            </div>
                        </div>
                        <div class="col-md-12" formGroupName="municipio">
                            <label for="slEstado">Estado</label>
                            <div>
                                <select formControlName="estado" name="slEstado" id="slEstado" class="form-control">
                                    <option value="">Todos...</option>
                                    <option *ngFor="let est of listaEstados" [ngValue]="est">{{est.nome}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <label for="slSituacao">Situa&ccedil;&atilde;o</label>
                            <div>
                                <select formControlName="ativo" name="slSituacao" id="slSituacao" class="form-control">
                                    <option value="">Todos</option>
                                    <option value="true">Ativo</option>
                                    <option value="false">Inativo</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12 pa-10">
                            <button type="submit" class="btn btn-primary mr-15">Pesquisar</button>
                            <button type="reset" class="btn btn-default" (click)="onResetPesquisa()">Limpar</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
        <div class="col-md-9">
            Aqui ficará o datatable
        </div>
    </div>
</pje-tab>

...
```

#### Datatable

O botão pesquisar já deve estar funcionando, entretanto só estamos jogando o resultado da *query* no console do browser. Precisamos carregar os dados recuperados do serviço em um *datatable*. É necessário que esse *datable* seja *lazy*, ou seja carregue os dados sob demanda, página por página. Usaremos o [PrimeNG](https://www.primefaces.org/primeng/table/lazy) para construir o datatable.

A primeira coisa a fazer é importar o módulo `TableModule` do *PrimenNG* no módulo de CEP:

Novamente vamos começar pelo componente, implementando a lógica de busca e paginação dos registros:

```js
@Component({
  selector: 'crud-cep',
  templateUrl: './crud-cep.component.html',
  styleUrls: ['./crud-cep.component.scss']
})
export class CrudCepComponent implements OnInit {

    pesquisaForm : FormGroup;
    listaEstados : Estado[];
    listaCep : Cep[];
    pageSize : number = 10;
    loading : boolean = true;
    totalRecords : number = 0;
    totalPages : number = 0;
    firstElement : number = 0;

    constructor(
      private formBuilder : FormBuilder,
      private cepService : CepService
    ) {
    }

    ngOnInit() {
      this.pesquisaForm = this.initPesquisaFormGroup();
      this.carregarEstados();
    }

    onSubmitPesquisa() {
      const cepPesquisa: Cep = Object.assign({}, this.pesquisaForm.value);
      this.loading = true;
      this.cepService.pesquisarCeps(0, this.pageSize, cepPesquisa)
      .subscribe((response: PjeResponse<Page<Cep>>) => {
          this.listaCep = response.result.content;
          this.totalRecords = response.result.totalElements;
          this.loading = false;
      });
    }

    onResetPesquisa() {
      this.pesquisaForm.reset();
    }

    carregarListaCep(event: LazyLoadEvent) {
      this.loading = true;

      const cepPesquisa: Cep = Object.assign({}, this.pesquisaForm.value);

      let pageIndex = this.pageIndex(this.totalRecords, event.first, this.totalPages);

      this.firstElement = event.first;

      this.cepService.pesquisarCeps(pageIndex, this.pageSize, cepPesquisa)
      .subscribe((response: PjeResponse<Page<Cep>>) => {
          this.listaCep = response.result.content;
          this.totalRecords = response.result.totalElements;
          this.totalPages = response.result.totalPages;
          this.loading = false;
      });
    }

    private carregarEstados() {
      this.cepService.recuperarEstados()
      .subscribe((res: PjeResponse<Page<Estado>>) => {
          this.listaEstados = res.result.content;
      });
    }

    private initPesquisaFormGroup(): FormGroup {
      return this.formBuilder.group({
        cep: null,
        logradouro: null,
        municipio: this.formBuilder.group(new Municipio()),
        ativo: null
      });
    }

    private pageIndex(totalRecords : number, first : number, pages : number) : number {
      let pageIndex = 0;

      if (totalRecords !== 0) {
        pageIndex = Math.trunc((first * pages) / totalRecords);
      }

      return pageIndex;
    }

}
```
- **Linha 10**: Array de CEPs recuperados do serviço a serem visualizados na página atual do datatable;
- **Linha 11**: Quantidade de itens por página;
- **Linha 12**: Variável auxiliar para mostrar o loading enquanto o serviço é consultado;
- **Linha 13**: Quantidade total de CEPs;
- **Linha 14**: Quantidade total de páginas;
- **Linha 43**: Método responsável por carregar a página atual, chamado também ao mudar a página do datatable;
- **Linha 77**: Método auxiliar responsável por recuperar o número da página.

Com todo o comportamento do *datatable* já implementado podemos implementar a camdada de visão. Vamos criar o *datatable* com quatro colunas, seguindo a documentação do [PrimeNG](https://www.primefaces.org/primeng/table).

### Formulário de inclusão e edição de CEP

A segunda aba da nossa tela servirá para cadastrar ou editar um novo CEP. Caso nenhum cep tenha sido selecionado, ao abrir a aba formulário o usuário deverá visualizar o formulário em branco, sendo possível cadastrar um novo cep. Deveremos, ainda, incrementar o datatable com as opções de edição e exclusão de cep. Com esse incremento na UI será possível que o usuário selecione um cep, de maneira que a tela seja, então, aberta com os dados par edição na aba formulário.

#### Criando o formulário

Na aba formulário utilizaremos mais dois componentes do *PrimeNG*, são eles:

- p-input-mask
	- Será utilizado no campo `cep` do formulário, para incluir a máscara 99999-999;
- p-autoComplete
	- Será utilizado no campo `municipio` para buscar o município do CEP a ser cadastrado.

A primeira coisa a fazer é importar os módulos destes componentes no módulo `cep.module.ts`:

Assim como no formulário de pesquisa, usaremos *reactive forms* para criar nosso formulário de criação e edição de CEPs. Começaremos criando os métodos e atributos necessários em `crud-cep.component.ts`.

```js
...

    cepForm : FormGroup;
    listaMunicipios : Municipio[];

    constructor(
      private formBuilder : FormBuilder,
      private cepService : CepService,
      private notification: NotificationMessageService
    ) {
    }

    ngOnInit() {
      this.pesquisaForm = this.initPesquisaFormGroup();
      this.cepForm = this.initCepFormGroup();
      this.carregarEstados();
    }

...

    onSubmitForm() {
        const cepForm: Cep = Object.assign({}, this.cepForm.value);

        this.cepService.salvarCep(cepForm)
        .subscribe((response) => {
            let cepResponse: Cep = response.result;

            this.cepForm = this.formBuilder.group({
              id: cepResponse.id,
              cep: [cepResponse.cep, Validators.required],
              logradouro: cepResponse.logradouro,
              bairro: cepResponse.bairro,
              municipio: [cepResponse.municipio, Validators.required],
              complemento: cepResponse.complemento,
              ativo: [cepResponse.ativo, Validators.required],
              numero: cepResponse.numero
            });

            this.notification.sendSuccess("Cep", "Novo cep criado com sucesso!");
        },(err) => {
          this.notification.sendError("Cep", "Erro inesperado!");
        });
    }

    onResetForm() {
      this.cepForm.reset({
        ativo: true
      });
    }

...

    carregarMunicipiosAutocomplete(event: any) {
      let municipioPesquisa = new Municipio();
      municipioPesquisa.nome = event.query;

      this.cepService.pesquisarMunicipios(municipioPesquisa)
      .subscribe((response: PjeResponse<Municipio[]>) => {
        this.listaMunicipios = response.result;
      });
    }

    private initCepFormGroup(): FormGroup {
      return this.formBuilder.group({
        cep: ['', Validators.required],
        logradouro: '',
        bairro: '',
        municipio: [new Municipio(), Validators.required],
        complemento: '',
        ativo: [true, Validators.required],
        numero: ''
      });
    }
```
- **Linha 3**: Modelo do formulário de CEP;
- **Linha 4**: Lista de municipios retornado para o campo *autocomplete*;
- **Linha 6**: Injeção do serviço do notificações;
- **Linha 13**: Definindo valores padrões para os formulários;
- **Linha 21**: Método utilizado ao submenter formulário;
- **Linha 46**: Método utilizado ao limpar formulário;
- **Linha 54**: Método utilizado ao digitar parte do nome de um município;
- **Linha 64**: Método utilizado para inicializar o formulário de CEP.

Com estes recursos implementados já podemos implementar a camada de visão para o formulário. Como visto antes utilizaremos os componentes `p-autoComplete` e `p-inputMask`:

```jsx
...

<form [formGroup]="cepForm" (ngSubmit)="onSubmitForm()">
    <fieldset class="pje-panel ma-10 pt-10 pb-10">
        <div class="col-md-6">
            <label for="cep">CEP</label>
            <div>
                <p-inputMask required="true" formControlName="cep" name="cep" id="cep"
                    styleClass="form-control" mask="99999-999"></p-inputMask>
                <!-- <input type="text" formControlName="cep" name="itCep" id="itCep" class="form-control"> -->
            </div>
        </div>
        <div class="col-md-6">
            <label for="logradouro">Logradouro</label>
            <div>
                <input type="text" formControlName="logradouro" name="logradouro" id="logradouro"
                    class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <label for="bairro">Bairro</label>
            <div>
                <input type="text" formControlName="bairro" name="bairro" id="bairro"
                    class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <label for="complemento">Complemento</label>
            <div>
                <input type="text" formControlName="complemento" name="complemento" id="complemento"
                    class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <label for="numero">Número</label>
            <div>
                <input type="text" formControlName="numero" name="numero" id="numero"
                    class="form-control">
            </div>
        </div>
        <div class="col-md-6">
            <label>Município</label>
            <div>
                <p-autoComplete name="municipio" formControlName="municipio" required="true"
                    forceSelection="true" inputStyleClass="form-control autocomplete"
                    [suggestions]="listaMunicipios"
                    (completeMethod)="carregarMunicipiosAutocomplete($event)" minLength="3"
                    field="nome">
                </p-autoComplete>
            </div>
        </div>
        <div class="col-md-6">
            <label for="ativo" class="radio control-label">Ativo?</label>
            <input type="radio" name="ativo" formControlName="ativo" [value]="true" /><span
                class="ml-5 mr-5">Ativo</span>
            <input type="radio" name="ativo" formControlName="ativo" [value]="false" /><span
                class="ml-5 mr-5">Inativo</span>
        </div>
        <div class="col-md-12 mt-15">
            <button type="submit" class="btn btn-primary mr-15"
                [disabled]="cepForm.invalid">Salvar</button>
            <button type="button" class="btn btn-default" (click)="onResetForm()"
                [disabled]="cepForm.pristine">Limpar</button>
        </div>
    </fieldset>
</form>

...
```

#### Adicionando os botões editar e excluir/inativar

Vamos voltar ao *datatable* para incluir mais uma coluna. O título da coluna será "Ações". Nesta coluna iremos colocar dois botões, uma para edição e outro para inativação do registro. Será necessário que ao clicar no botão de editar um CEP o usuário seja redirecionado para o formulário. Primeiro vamos incluir a nova coluna:

Para que possamos mudar de aba ao clicar no botão editar é necessário criar referencias para os componentes `pje-tabs` e `pje-tab`. Vamos injetar esses componentes no nosso componente de CEP. Para criara essas referências é necessário incluir o segunte código em `crud-cep.component.html`:

```jsx
...

<pje-tabs #tabs>

...

<pje-tab tabTitle="Formulário" id="tabFormulário" #tabFormulario>

...
```

E agora vamos injetar os componentes referenciados em `crud-cep.component.ts` e implementar os métodos responsáveis por carregar o CEP selecionado. Também vamos implementar o método para remover um CEP:

## Integrando ao PJeLegacy

Com o fronted e o backend prontos o próximo passo é efetuar a substituição da tela JSF legada. Para isso precisaremos acessar o projeto do pje-legacy.

Clonando o projeto do pje-legacy:

```jsx
git clone git@git.cnj.jus.br:pje/pje.git
```

O projeto pje-legacy é composto por dois módulos do maven:

- pje-comum;
- pje-web.

As páginas *JSF* estão no `pje-web`. A página do *CRUD* de CEP está localizada em `/pje-web/src/main/webapp/Cep/listView.xhtml`.

Para carregar o *frontend* Angular no `listView.xhtml` iremos utilizar o componente `ngFrame`. Este componente, que faz parte da *taglib* do PJe recebe um parâmetro, no qual passamos a rota do Angular a ser carregada em um *iframe*.

Exemplo: `<pje:ngFrame route="cep/crud-cep"/>`

Todo o conteúdo do `listView.xhtml` deve ser substituído pelo seguinte código:

```jsx
<?xml version="1.0" encoding="ISO-8859-1"?>
<ui:composition xmlns="http://www.w3.org/1999/xhtml"
  xmlns:ui="http://java.sun.com/jsf/facelets"
  xmlns:pje="http://www.cnj.jus.br/pje"
  template="/WEB-INF/xhtml/templates/simpleTemplateNg.xhtml">

  <ui:define name="title">#{messages['cep.titlePage']}</ui:define>

  <ui:define name="body">
          <pje:ngFrame route="cep/crud-cep"/>
  </ui:define>

</ui:composition>
```