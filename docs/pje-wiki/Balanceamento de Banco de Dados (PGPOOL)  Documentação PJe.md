---
title: "Balanceamento de Banco de Dados (PGPOOL) | Documentação PJe"
source: "https://docs.pje.jus.br/servicos-infraestrutura/balanceamento-de-banco-de-dados-pgpool"
author:
published:
created: 2025-09-30
description: "Instalação e Configuração"
tags:
  - "clippings"
---
# Balanceamento de Banco de Dados (PGPOOL) | Documentação PJe
Available at https://docs.pje.jus.br/servicos-infraestrutura/balanceamento-de-banco-de-dados-pgpool


[Pular para o conteúdo principal](https://docs.pje.jus.br/servicos-infraestrutura/#__docusaurus_skipToContent_fallback)

## Balanceamento de Banco de Dados (PGPOOL)

## Instalação e Configuração

Para demonstrar como foi construída toda a instalação do *PGPOOL-II* para atender a arquitetura definida a cima considere os passos relatados no procedimento de instalação e configuração que se segue. A especificação abaixo considera que está sendo utilizada a distribuição *RED-HAT 7.x.*, *PostgreSQL* versão 11 e *PGPOOL-II* 4.1.

### Adicionar o repositório do PGPOOL-II

```jsx
vi /etc/yum.repos.d/pgpool.repo

[pgpool]
name=PgPoolRepo
baseurl=https://www.pgpool.net/yum/rpms/4.1/redhat/rhel-$releasever-$basearch/
enabled=1
gpgcheck=0
```

### Adicionar o repositório do PostgreSQL versão 11

Procedimento necessário, pois alguns pacotes dele são dependências do PGPOOL-II.

```jsx
yum install https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm
```

Caso seja necessário proxy para acessar o repositório online do PGPOOL-II, configurar em:

```jsx
vi /etc/yum.conf

# The proxy server - proxy server:port number
proxy=http://proxy.com.br:2386
proxy_username=usuario
proxy_password=senha
```

Verificar se o repositório está buscando os pacotes necessários:

```jsx
yum search pgpool

Loaded plugins: enabled_repos_upload, langpacks, package_upload, product-id, search-disabled-repos, subscription-manager
pgpool-II-10.x86_64 :            Pgpool is a connection pooling/replication server for PostgreSQL
pgpool-II-10-debuginfo.x86_64 :  Debug information for package pgpool-II-10
pgpool-II-10-devel.x86_64 :      The development files for pgpool-II
pgpool-II-10-extensions.x86_64 : Postgresql extensions for pgpool-II
pgpool-II-11.x86_64 :            Pgpool is a connection pooling/replication server for PostgreSQL
pgpool-II-11-debuginfo.x86_64 :  Debug information for package pgpool-II-11
pgpool-II-11-devel.x86_64 :      The development files for pgpool-II
pgpool-II-11-extensions.x86_64 : Postgresql extensions for pgpool-II
pgpool-II-12.x86_64 :            Pgpool is a connection pooling/replication server for PostgreSQL
pgpool-II-12-debuginfo.x86_64 :  Debug information for package pgpool-II-12
pgpool-II-12-devel.x86_64 :      The development files for pgpool-II
pgpool-II-12-extensions.x86_64 : Postgresql extensions for pgpool-II
```

### Instalar os pacotes do PGPOOL-II para o PostgreSQL 11

```jsx
yum install -y  pgpool-II-11*

Dependencies Resolved
==============================================================================================
 Package                     Arch         Version           Repository                   Size
==============================================================================================
Reinstalling:
pgpool-II-11                 x86_64      4.1.0-1.rhel7       pgdg11                      705 k
pgpool-II-11-debuginfo       x86_64      4.1.0-1.rhel7       pgdg11                      2.2 M
pgpool-II-11-devel           x86_64      4.1.0-1.rhel7       pgdg11                       11 k
pgpool-II-11-extensions      x86_64      4.1.0-1.rhel7       pgdg11                       19 k

Transaction Summary
==============================================================================================
Installing  4 Packages
```

### Configurando os arquivos

Para configurar o *PGPOOL-II* são necessários 4 arquivos básicos `pool_passwd`, `pcp`, `pgpool.conf` e `pool_hba.conf` que ficam no diretório `/etc/pgpool-II-11/`.

#### Arquivo pcp.conf

O *PGPOOL-II* fornece uma interface para os administradores executarem a operação de gerenciamento, como obter o status do *PGPOOL-II* ou encerrar os processos do *PGPOOL-II* remotamente. O `pcp.conf` é o arquivo de usuário e senha usado para autenticação por parte da interface. Todos os modos de operação exigem que o arquivo `pcp.conf` seja definido. Um arquivo `prefix/etc/pcp.conf.sample` é criado durante a instalação do *PGPOOL-II*. Copie o arquivo como `prefix/etc/pcp.conf` e adicione seu nome de usuário e senha a ele.

```jsx
cd /etc/pgpool-II-11/
cp pcp.conf.sample pcp.conf
```

Um nome de usuário e sua senha associada devem ser gravados como uma linha, usando o seguinte formato: nome de usuário: \[senha criptografada md5\] ou utilizar o utilitário `pg_md5` para este fim conforme abaixo:

```bash
/usr/bin/pg_md5 -u postgres -m 123123

Irá gerar a seguinte saída no arquivo: postgres:md5c709cff0e4ede2c7beeb96a9738281d9
```
```bash
cat pcp.conf

# PCP Client Authentication Configuration File
.
.
.
# be ignored. Again, no spaces or tabs allowed before '#'.
# USERID:MD5PASSWD
postgres:e10adc3949ba59abbe56e057f20f883e
```

#### Arquivo pool\_hba.conf

O *PGPOOL-II* fornece uma interface para os administradores executarem a operação de gerenciamento, como obter o status do *PGPOOL-II* ou encerrar os processos do *PGPOOL-II* remotamente. O pcp.conf é o arquivo de usuário e senha usado para autenticação por parte da interface. Todos os modos de operação exigem que o arquivo `pcp.conf` seja definido. Um arquivo `prefix/etc/pcp.conf.sample` é criado durante a instalação do *PGPOOL-II*. Copie o arquivo como `prefix/etc/pcp.conf` e adicione seu nome de usuário e senha a ele.

```bash
cat pool_hba.conf

# pgpool Client Authentication Configuration File
.
.
.
#
# TYPE  DATABASE       USER            CIDR-ADDRESS          METHOD
  host  BancoDeDados   usuário         ipServidorPJE/32      md5 #
```

#### Arquivo pool\_passwd

Para usar o arquivo de autenticação `pool_passwd`, a autenticação *md5* deve conter a senha do usuário no formato criptografado *md5* em texto sem formatação ou no formato *AES*. O arquivo `pool_passwd` deve conter linhas no seguinte formato:

```bash
"nome de usuário: plain_text_passwd"
"nome de usuário: encrypted_passwd"
```

Exemplo do conteúdo do `pool_passwd`, supondo que os usuários (`postgres`, `UserPje`, `UserLeitura`) todos utilizem a senha `123123` para se conectar ao banco de dados:

```bash
cat pool_passwd.conf

#usuario:md5[senha criptografada]
postgres: md5e10adc3949ba59abbe56e057f20f883e
UserPje: md5e10adc3949ba59abbe56e057f20f883e
UserLeitura: md5e10adc3949ba59abbe56e057f20f883e
```

#### Arquivo pgpool.conf

Neste arquivo devem constar todas as configurações do serviço *PGPOOL-II*, e qual seu comportamento com o banco de dados.

Supondo que as máquinas *PostgreSQL* são:

- 10.0.0.1 – Master
- 10.0.0.2 – Slave 1
- 10.0.0.3 – Slave 2
- 10.0.0.4 – Slave 3

E o *$PGDATA* está configurado em `/dados/data`.

Está liberado no `pg_hba.conf` de todos os servidores *PostgreSQL* o acesso ao servidor que irá servir o *PGPOOL-II*. A quantidade de conexões no `postgresql.conf` pode suportar de maneira mínima o valor configurado em `num_init_children`.

As principais propriedades que devem ser configuradas são:

```yaml
listen_addresses = '*'
reserved_connections = 5
backend_hostname0 = '10.0.0.1'
backend_port0 = 5432
backend_weight0 = 0
backend_data_directory0 = '/dados/data'
backend_flag0 = 'ALWAYS_MASTER'

backend_application_name0 = 'MASTER'
backend_hostname1 = '10.0.0.2'
backend_port1 = 5432
backend_weight1 = 1
backend_data_directory1 = '/dados/data'
backend_flag1 = 'DISALLOW_TO_FAILOVER'
backend_application_name1 = 'SLAVE.01'

backend_hostname2 = '10.0.0.3'
backend_port2 = 5432
backend_weight2 = 1
backend_data_directory2 = '/dados/data'
backend_flag2 = 'DISALLOW_TO_FAILOVER'
backend_application_name2 = 'SLAVE.02'

backend_hostname3 = '10.0.0.4'
backend_port3 = 5432
backend_weight3 = 1
backend_data_directory3 = '/dados/data'
backend_flag3 = 'DISALLOW_TO_FAILOVER'
backend_application_name3 = 'SLAVE.03'

enable_pool_hba = on
authentication_timeout = 180
num_init_children = 605 #valor de conexões disponíveis a todos servidores
        #i.e.
        #Tem-se 3 nós de aplicação PJe, cada um com um pool de 200 conexões máximas,
        #então 3(servidores)_ x 200(conexões0) + 5(reserved_connections) = 605
log_destination = 'syslog'
log_line_prefix = '%t [%p]: [%l-1] client=%h '
log_standby_delay = 'always'
logdir = '/var/log/pgpool'
allow_sql_comments = on #parametro que possibilita as consultas com comentário serem balanceadas
disable_load_balance_on_write = 'transaction'
master_slave_mode = on
master_slave_sub_mode = 'stream'
sr_check_period = 0
delay_threshold = 0

health_check_period = 0

failover_on_backend_error = off

relcache_expire = 3600
relcache_query_target = load_balance_node
```

Criar as pastas a seguir:

```bash
mkdir /var/run/pgpool
mkdir /var/log/pgpool
chown postgres. /var/run/pgpool
chown postgres. /var/log/pgpool
```

Iniciar o serviço do *PGPOOL-II*

```bash
service pgpool-II-11 start
```

Para verificar utilize:

```bash
service pgpool-II-11 status

Redirecting to /bin/systemctl status pgpool-II-11.service
pgpool-II-11.service - PGPool-II Middleware Between PostgreSQL Servers And PostgreSQL Database Clients
Loaded: loaded (/usr/lib/systemd/system/pgpool-II-11.service; disabled; vendor preset: disabled)
Active: active (running) since Tue 2020-01-07 12:56:54 -03; 2h 22min ago
Process: 25223 ExecStop=/usr/pgpool-11/bin/pgpool -f /etc/pgpool-II-11/pgpool.conf -m fast stop (code=exited, status=0/SUCCESS)
 Main PID: 25227 (pgpool)
   Tasks: 15
   Memory: 58.9M
   CGroup: /system.slice/pgpool-II-11.service
           ├─25227 /usr/pgpool-11/bin/pgpool -f /etc/pgpool-II-11/pgpool.conf -n -D
           ├─25229 pgpool: wait for connection request
           ├─25230 pgpool: wait for connection request
           .
           .
           .
           ├─25239 pgpool: PCP: wait for connection request
           ├─25240 pgpool: worker process
           ├─25241 pgpool: health check process(0)
           └─25242 pgpool: health check process(1)

Jan 07 12:56:54 pgpool-2g-dev.pjmt.local systemd[1]: Started PGPool-II Middleware Between PostgreSQL Servers And PostgreSQL Database Clients.
Jan 07 12:56:54 pgpool-2g-dev.pjmt.local systemd[1]: Starting PGPool-II Middleware Between PostgreSQL Servers And PostgreSQL Database Clients...
```

Editar o arquivo de configuração acrescentando ou retirando os servers:

```bash
vi pgpool.conf
```

Duplique o ssh abra o journal para monitorar o log:

```bash
journalctl -f -u pgpool.service
```

Inicie o pgpool após todas as slaves tiver configurado:

```bash
service pgpool start
```

#### Arquivo pgpool.conf.sample-stream

Apesar de ser possível gerenciar as replicações pelo *PGPool*, esta prática esta em desuso, sendo assim foi decidido delegar para servidor de banco de dados *PostgreSQL* esta função pois nenhum sistema melhor do que ele para executar esta tarefa. Esta decisão foi tomada também para que o *PGPool* valide as autenticações e realize o balanceamento das conexões pois esta é a função principal do sistema, deixando assim cada sistema realizar a suas funções principais para as quais foram construídos, fazendo com que a arquitetura seja mais simples de se configurar e manter.

Para tal abordagem citada, foi utilizado o arquivo de exemplo `/etc/pgpool-II-11/pgpool.conf.sample-stream` como segue:

```bash
# ----------------------------
# pgPool-II configuration file
# ----------------------------
#
# This file consists of lines of the form:
#
#   name = value
#
# Whitespace may be used.  Comments are introduced with "#" anywhere on a line.
# The complete list of parameter names and allowed values can be found in the
# pgPool-II documentation.
#
# This file is read on server startup and when the server receives a SIGHUP
# signal.  If you edit the file on a running system, you have to SIGHUP the
# server for the changes to take effect, or use "pgpool reload".  Some
# parameters, which are marked below, require a server shutdown and restart to
# take effect.
#

#------------------------------------------------------------------------------
# CONNECTIONS
#------------------------------------------------------------------------------

# - pgpool Connection Settings -

listen_addresses = '*'
                                   # Host name or IP address to listen on:
                                   # '*' for all, '' for no TCP/IP connections
                                   # (change requires restart)
port = 9999
                                   # Port number
                                   # (change requires restart)
socket_dir = '/tmp'
                                   # Unix domain socket path
                                   # The Debian package defaults to
                                   # /var/run/postgresql
                                   # (change requires restart)
listen_backlog_multiplier = 2
                                   # Set the backlog parameter of listen(2) to
                                   # num_init_children * listen_backlog_multiplier.
                                   # (change requires restart)
serialize_accept = off
                                   # whether to serialize accept() call to avoid thundering herd problem
                                   # (change requires restart)
reserved_connections = 5
                                   # Number of reserved connections.
                                   # Pgpool-II does not accept connections if over
                                   # num_init_chidlren - reserved_connections.

# - pgpool Communication Manager Connection Settings -

pcp_listen_addresses = '*'
                                   # Host name or IP address for pcp process to listen on:
                                   # '*' for all, '' for no TCP/IP connections
                                   # (change requires restart)
pcp_port = 9898
                                   # Port number for pcp
                                   # (change requires restart)
pcp_socket_dir = '/tmp'
                                   # Unix domain socket path for pcp
                                   # The Debian package defaults to
                                   # /var/run/postgresql
                                   # (change requires restart)

# - Backend Connection Settings -

backend_hostname0 = '10.0.0.1'
backend_port0 = 5432
backend_weight0 = 0
backend_data_directory0 = '/dados/data'
backend_flag0 = 'ALWAYS_MASTER'

backend_application_name0 = 'MASTER'
backend_hostname1 = '10.0.0.2'
backend_port1 = 5432
backend_weight1 = 1
backend_data_directory1 = '/dados/data'
backend_flag1 = 'DISALLOW_TO_FAILOVER'
backend_application_name1 = 'SLAVE.02'

backend_hostname2 = '10.0.0.3'
backend_port2 = 5432
backend_weight2 = 1
backend_data_directory2 = '/dados/data'
backend_flag2 = 'DISALLOW_TO_FAILOVER'
backend_application_name2 = 'SLAVE.03'

backend_hostname3 = '10.0.0.4'
backend_port3 = 5432
backend_weight3 = 1
backend_data_directory3 = '/dados/data'
backend_flag3 = 'DISALLOW_TO_FAILOVER'
backend_application_name3 = 'SLAVE.04'
# - Authentication -

enable_pool_hba = on
                                   # Use pool_hba.conf for client authentication
pool_passwd = 'pool_passwd'
                                   # File name of pool_passwd for md5 authentication.
                                   # "" disables pool_passwd.
                                   # (change requires restart)
authentication_timeout = 180
                                   # Delay in seconds to complete client authentication
                                   # 0 means no timeout.

allow_clear_text_frontend_auth = off
                                   # Allow Pgpool-II to use clear text password authentication
                                   # with clients, when pool_passwd does not
                                   # contain the user password

# - SSL Connections -

ssl = off
                                   # Enable SSL support
                                   # (change requires restart)
#ssl_key = './server.key'
                                   # Path to the SSL private key file
                                   # (change requires restart)
#ssl_cert = './server.cert'
                                   # Path to the SSL public certificate file
                                   # (change requires restart)
#ssl_ca_cert = ''
                                   # Path to a single PEM format file
                                   # containing CA root certificate(s)
                                   # (change requires restart)
#ssl_ca_cert_dir = ''
                                   # Directory containing CA root certificate(s)
                                   # (change requires restart)

ssl_ciphers = 'HIGH:MEDIUM:+3DES:!aNULL'
                                   # Allowed SSL ciphers
                                   # (change requires restart)
ssl_prefer_server_ciphers = off
                                   # Use server's SSL cipher preferences,
                                   # rather than the client's
                                   # (change requires restart)
ssl_ecdh_curve = 'prime256v1'
                                   # Name of the curve to use in ECDH key exchange
ssl_dh_params_file = ''
                                   # Name of the file containing Diffie-Hellman parameters used
                                   # for so-called ephemeral DH family of SSL cipher.

#------------------------------------------------------------------------------
# POOLS
#------------------------------------------------------------------------------

# - Concurrent session and pool size -

num_init_children = 10
                                   # Number of concurrent sessions allowed
                                   # (change requires restart)
max_pool = 4
                                   # Number of connection pool caches per connection
                                   # (change requires restart)

# - Life time -

child_life_time = 300
                                   # Pool exits after being idle for this many seconds
child_max_connections = 0
                                   # Pool exits after receiving that many connections
                                   # 0 means no exit
connection_life_time = 10
                                   # Connection to backend closes after being idle for this many seconds
                                   # 0 means no close
##client_idle_limit = 0
client_idle_limit = 3600
#client_idle_limit = 3600
                                   # Client is disconnected after being idle for that many seconds
                                   # (even inside an explicit transactions!)
                                   # 0 means no disconnection

#------------------------------------------------------------------------------
# LOGS
#------------------------------------------------------------------------------

# - Where to log -

log_destination = 'syslog'
                                   # Where to log
                                   # Valid values are combinations of stderr,
                                   # and syslog. Default to stderr.

# - What to log -

##log_line_prefix = '%t: pid %p: '   # printf-style string to output at beginning of each log line.
log_line_prefix = '%t [%p]: [%l-1] client=%h '

log_connections = off
                                   # Log connections
log_hostname = off
                                   # Hostname will be shown in ps status
                                   # and in logs if connections are logged
log_statement = off
                                   # Log all statements
log_per_node_statement = off
                                   # Log all statements
                                   # with node and backend informations
log_client_messages = off
                                   # Log any client messages
##log_standby_delay = 'none'
log_standby_delay = 'always'
                                   # Log standby delay
                                   # Valid values are combinations of always,
                                   # if_over_threshold, none

# - Syslog specific -

syslog_facility = 'LOCAL0'
                                   # Syslog local facility. Default to LOCAL0
syslog_ident = 'pgpool'
                                   # Syslog program identification string
                                   # Default to 'pgpool'

# - Debug -

#log_error_verbosity = default          # terse, default, or verbose messages

#client_min_messages = notice           # values in order of decreasing detail:
                                        #   debug5
                                        #   debug4
                                        #   debug3
                                        #   debug2
                                        #   debug1
                                        #   log
                                        #   notice
                                        #   warning
                                        #   error

#log_min_messages = warning             # values in order of decreasing detail:
                                        #   debug5
                                        #   debug4
                                        #   debug3
                                        #   debug2
                                        #   debug1
                                        #   info
                                        #   notice
                                        #   warning
                                        #   error
                                        #   log
                                        #   fatal
                                        #   panic

#------------------------------------------------------------------------------
# FILE LOCATIONS
#------------------------------------------------------------------------------

pid_file_name = '/var/run/pgpool/pgpool.pid'
                                   # PID file name
                                   # Can be specified as relative to the"
                                   # location of pgpool.conf file or
                                   # as an absolute path
                                   # (change requires restart)
logdir = '/var/log/pgpool'
                                   # Directory of pgPool status file
                                   # (change requires restart)

#------------------------------------------------------------------------------
# CONNECTION POOLING
#------------------------------------------------------------------------------

connection_cache = on
                                   # Activate connection pools
                                   # (change requires restart)

                                   # Semicolon separated list of queries
                                   # to be issued at the end of a session
                                   # The default is for 8.3 and later
reset_query_list = 'ABORT; DISCARD ALL'
                                   # The following one is for 8.2 and before
#reset_query_list = 'ABORT; RESET ALL; SET SESSION AUTHORIZATION DEFAULT'

#------------------------------------------------------------------------------
# REPLICATION MODE
#------------------------------------------------------------------------------

replication_mode = off
                                   # Activate replication mode
                                   # (change requires restart)
replicate_select = off
                                   # Replicate SELECT statements
                                   # when in replication mode
                                   # replicate_select is higher priority than
                                   # load_balance_mode.

#insert_lock = on
insert_lock = off
                                   # Automatically locks a dummy row or a table
                                   # with INSERT statements to keep SERIAL data
                                   # consistency
                                   # Without SERIAL, no lock will be issued
lobj_lock_table = ''
                                   # When rewriting lo_creat command in
                                   # replication mode, specify table name to
                                   # lock

# - Degenerate handling -

replication_stop_on_mismatch = off
                                   # On disagreement with the packet kind
                                   # sent from backend, degenerate the node
                                   # which is most likely "minority"
                                   # If off, just force to exit this session

failover_if_affected_tuples_mismatch = off
                                   # On disagreement with the number of affected
                                   # tuples in UPDATE/DELETE queries, then
                                   # degenerate the node which is most likely
                                   # "minority".
                                   # If off, just abort the transaction to
                                   # keep the consistency

#------------------------------------------------------------------------------
# LOAD BALANCING MODE
#------------------------------------------------------------------------------

load_balance_mode = on
                                   # Activate load balancing mode
                                   # (change requires restart)
ignore_leading_white_space = on
                                   # Ignore leading white spaces of each query
white_function_list = ''
                                   # Comma separated list of function names
                                   # that don't write to database
                                   # Regexp are accepted
black_function_list = 'currval,lastval,nextval,setval'
                                   # Comma separated list of function names
                                   # that write to database
                                   # Regexp are accepted

black_query_pattern_list = ''
                                   # Semicolon separated list of query patterns
                                   # that should be sent to primary node
                                   # Regexp are accepted
                                   # valid for streaming replicaton mode only.

database_redirect_preference_list = ''
                                   # comma separated list of pairs of database and node id.
                                   # example: postgres:primary,mydb[0-4]:1,mydb[5-9]:2'
                                   # valid for streaming replicaton mode only.
app_name_redirect_preference_list = ''
                                   # comma separated list of pairs of app name and node id.
                                   # example: 'psql:primary,myapp[0-4]:1,myapp[5-9]:standby'
                                   # valid for streaming replicaton mode only.
##allow_sql_comments = off
allow_sql_comments = on
                                   # if on, ignore SQL comments when judging if load balance or
                                   # query cache is possible.
                                   # If off, SQL comments effectively prevent the judgment
                                   # (pre 3.4 behavior).

disable_load_balance_on_write = 'transaction'
                                   # Load balance behavior when write query is issued
                                   # in an explicit transaction.
                                   # Note that any query not in an explicit transaction
                                   # is not affected by the parameter.
                                   # 'transaction' (the default): if a write query is issued,
                                   # subsequent read queries will not be load balanced
                                   # until the transaction ends.
                                   # 'trans_transaction': if a write query is issued,
                                   # subsequent read queries in an explicit transaction
                                   # will not be load balanced until the session ends.
                                   # 'always': if a write query is issued, read queries will
                                   # not be load balanced until the session ends.

####statement_level_load_balance = off
statement_level_load_balance = off
                                        # Enables statement level load balancing
                                        #Era OFF
                                        #Por definição será tentado ON
                                        #Tentativa não bem sucedida em 2019-11-26
                                        #statement_level_load_balance (boolean)
                                        #When set to on, the load balancing node is decided for each read query. When set to off, load balancing node is decided at
                                        #the session start time and will not be changed until the session ends. For example, in applications that use connection pooling
                                        #remain connections open to the backend server, because the session may be held for a long time, the load balancing node does
                                        #not change until the session ends. In such applications, When statement_level_load_balance is enabled, it is possible to decide
                                        #load balancing node per query, not per session. The default is off.

#------------------------------------------------------------------------------
# MASTER/SLAVE MODE
#------------------------------------------------------------------------------

#master_slave_mode = off
master_slave_mode = on
                                   # Activate master/slave mode
                                   # (change requires restart)
master_slave_sub_mode = 'stream'
                                   # Master/slave sub mode
                                   # Valid values are combinations stream, slony
                                   # or logical. Default is stream.
                                   # (change requires restart)

# - Streaming -

sr_check_period = 0
                                   # Streaming replication check period
                                   # Disabled (0) by default
sr_check_user = 'nobody'
                                   # Streaming replication check user
                                   # This is necessary even if you disable
                                   # streaming replication delay check with
                                   # sr_check_period = 0

sr_check_password = ''
                                   # Password for streaming replication check user.
                                   # Leaving it empty will make Pgpool-II to first look for the
                                   # Password in pool_passwd file before using the empty password

sr_check_database = 'postgres'
                                   # Database name for streaming replication check
delay_threshold = 0
                                   # Threshold before not dispatching query to standby node
                                   # Unit is in bytes
                                   # Disabled (0) by default

# - Special commands -

follow_master_command = ''
                                   # Executes this command after master failover
                                   # Special values:
                                   #   %d = failed node id
                                   #   %h = failed node host name
                                   #   %p = failed node port number
                                   #   %D = failed node database cluster path
                                   #   %m = new master node id
                                   #   %H = new master node hostname
                                   #   %M = old master node id
                                   #   %P = old primary node id
                                   #   %r = new master port number
                                   #   %R = new master database cluster path
                                   #   %N = old primary node hostname
                                   #   %S = old primary node port number
                                   #   %% = '%' character

#------------------------------------------------------------------------------
# HEALTH CHECK GLOBAL PARAMETERS
#------------------------------------------------------------------------------

health_check_period = 0
                                   # Health check period
                                   # Disabled (0) by default
health_check_timeout = 20
                                   # Health check timeout
                                   # 0 means no timeout
health_check_user = 'nobody'
                                   # Health check user
health_check_password = ''
                                   # Password for health check user
                                   # Leaving it empty will make Pgpool-II to first look for the
                                   # Password in pool_passwd file before using the empty password

health_check_database = ''
                                   # Database name for health check. If '', tries 'postgres' frist, then 'template1'

health_check_max_retries = 0
                                   # Maximum number of times to retry a failed health check before giving up.
health_check_retry_delay = 1
                                   # Amount of time to wait (in seconds) between retries.
connect_timeout = 10000
                                   # Timeout value in milliseconds before giving up to connect to backend.
                                   # Default is 10000 ms (10 second). Flaky network user may want to increase
                                   # the value. 0 means no timeout.
                                   # Note that this value is not only used for health check,
                                   # but also for ordinary conection to backend.

#------------------------------------------------------------------------------
# HEALTH CHECK PER NODE PARAMETERS (OPTIONAL)
#------------------------------------------------------------------------------
#health_check_period0 = 0
#health_check_timeout0 = 20
#health_check_user0 = 'nobody'
#health_check_password0 = ''
#health_check_database0 = ''
#health_check_max_retries0 = 0
#health_check_retry_delay0 = 1
#connect_timeout0 = 10000

#------------------------------------------------------------------------------
# FAILOVER AND FAILBACK
#------------------------------------------------------------------------------

failover_command = ''
                                   # Executes this command at failover
                                   # Special values:
                                   #   %d = failed node id
                                   #   %h = failed node host name
                                   #   %p = failed node port number
                                   #   %D = failed node database cluster path
                                   #   %m = new master node id
                                   #   %H = new master node hostname
                                   #   %M = old master node id
                                   #   %P = old primary node id
                                   #   %r = new master port number
                                   #   %R = new master database cluster path
                                   #   %N = old primary node hostname
                                   #   %S = old primary node port number
                                   #   %% = '%' character
failback_command = ''
                                   # Executes this command at failback.
                                   # Special values:
                                   #   %d = failed node id
                                   #   %h = failed node host name
                                   #   %p = failed node port number
                                   #   %D = failed node database cluster path
                                   #   %m = new master node id
                                   #   %H = new master node hostname
                                   #   %M = old master node id
                                   #   %P = old primary node id
                                   #   %r = new master port number
                                   #   %R = new master database cluster path
                                   #   %N = old primary node hostname
                                   #   %S = old primary node port number
                                   #   %% = '%' character

failover_on_backend_error = off
                                   # Initiates failover when reading/writing to the
                                   # backend communication socket fails
                                   # If set to off, pgpool will report an
                                   # error and disconnect the session.

detach_false_primary = off
                                   # Detach false primary if on. Only
                                   # valid in streaming replicaton
                                   # mode and with PostgreSQL 9.6 or
                                   # after.

search_primary_node_timeout = 300
                                   # Timeout in seconds to search for the
                                   # primary node when a failover occurs.
                                   # 0 means no timeout, keep searching
                                   # for a primary node forever.

auto_failback = off
                                   # Dettached backend node reattach automatically
                                   # if replication_state is 'streaming'.
auto_failback_interval = 60
                                   # Min interval of executing auto_failback in
                                   # seconds.

#------------------------------------------------------------------------------
# ONLINE RECOVERY
#------------------------------------------------------------------------------

recovery_user = 'nobody'
                                   # Online recovery user
recovery_password = ''
                                   # Online recovery password
                                   # Leaving it empty will make Pgpool-II to first look for the
                                   # Password in pool_passwd file before using the empty password

recovery_1st_stage_command = ''
                                   # Executes a command in first stage
recovery_2nd_stage_command = ''
                                   # Executes a command in second stage
recovery_timeout = 90
                                   # Timeout in seconds to wait for the
                                   # recovering node's postmaster to start up
                                   # 0 means no wait
client_idle_limit_in_recovery = 0
                                   # Client is disconnected after being idle
                                   # for that many seconds in the second stage
                                   # of online recovery
                                   # 0 means no disconnection
                                   # -1 means immediate disconnection

#------------------------------------------------------------------------------
# WATCHDOG
#------------------------------------------------------------------------------

# - Enabling -

use_watchdog = off
                                    # Activates watchdog
                                    # (change requires restart)

# -Connection to up stream servers -

trusted_servers = ''
                                    # trusted server list which are used
                                    # to confirm network connection
                                    # (hostA,hostB,hostC,...)
                                    # (change requires restart)
ping_path = '/bin'
                                    # ping command path
                                    # (change requires restart)

# - Watchdog communication Settings -

wd_hostname = ''
                                    # Host name or IP address of this watchdog
                                    # (change requires restart)
wd_port = 9000
                                    # port number for watchdog service
                                    # (change requires restart)
wd_priority = 1
                                    # priority of this watchdog in leader election
                                    # (change requires restart)

wd_authkey = ''
                                    # Authentication key for watchdog communication
                                    # (change requires restart)

wd_ipc_socket_dir = '/var/run/postgresql'
                                    # Unix domain socket path for watchdog IPC socket
                                    # The Debian package defaults to
                                    # /var/run/postgresql
                                    # (change requires restart)

# - Virtual IP control Setting -

delegate_IP = ''
                                    # delegate IP address
                                    # If this is empty, virtual IP never bring up.
                                    # (change requires restart)
if_cmd_path = '/sbin'
                                    # path to the directory where if_up/down_cmd exists
                                    # If if_up/down_cmd starts with "/", if_cmd_path will be ignored.
                                    # (change requires restart)
if_up_cmd = '/usr/bin/sudo /sbin/ip addr add $_IP_$/24 dev eth0 label eth0:0'
                                    # startup delegate IP command
                                    # (change requires restart)
if_down_cmd = '/usr/bin/sudo /sbin/ip addr del $_IP_$/24 dev eth0'
                                    # shutdown delegate IP command
                                    # (change requires restart)
arping_path = '/usr/sbin'
                                    # arping command path
                                    # If arping_cmd starts with "/", if_cmd_path will be ignored.
                                    # (change requires restart)
arping_cmd = '/usr/bin/sudo /usr/sbin/arping -U $_IP_$ -w 1 -I eth0'
                                    # arping command
                                    # (change requires restart)

# - Behaivor on escalation Setting -

clear_memqcache_on_escalation = on
                                    # Clear all the query cache on shared memory
                                    # when standby pgpool escalate to active pgpool
                                    # (= virtual IP holder).
                                    # This should be off if client connects to pgpool
                                    # not using virtual IP.
                                    # (change requires restart)
wd_escalation_command = ''
                                    # Executes this command at escalation on new active pgpool.
                                    # (change requires restart)
wd_de_escalation_command = ''
                                    # Executes this command when master pgpool resigns from being master.
                                    # (change requires restart)

# - Watchdog consensus settings for failover -

failover_when_quorum_exists = on
                                    # Only perform backend node failover
                                    # when the watchdog cluster holds the quorum
                                    # (change requires restart)

failover_require_consensus = on
                                    # Perform failover when majority of Pgpool-II nodes
                                    # aggrees on the backend node status change
                                    # (change requires restart)

allow_multiple_failover_requests_from_node = off
                                    # A Pgpool-II node can cast multiple votes
                                    # for building the consensus on failover
                                    # (change requires restart)

enable_consensus_with_half_votes = off
                                    # apply majority rule for consensus and quorum computation
                                    # at 50% of votes in a cluster with even number of nodes.
                                    # when enabled the existence of quorum and consensus
                                    # on failover is resolved after receiving half of the
                                    # total votes in the cluster, otherwise both these
                                    # decisions require at least one more vote than
                                    # half of the total votes.
                                    # (change requires restart)

# - Lifecheck Setting -

# -- common --

wd_monitoring_interfaces_list = ''  # Comma separated list of interfaces names to monitor.
                                    # if any interface from the list is active the watchdog will
                                    # consider the network is fine
                                    # 'any' to enable monitoring on all interfaces except loopback
                                    # '' to disable monitoring
                                    # (change requires restart)

wd_lifecheck_method = 'heartbeat'
                                    # Method of watchdog lifecheck ('heartbeat' or 'query' or 'external')
                                    # (change requires restart)
wd_interval = 10
                                    # lifecheck interval (sec) > 0
                                    # (change requires restart)

# -- heartbeat mode --

wd_heartbeat_port = 9694
                                    # Port number for receiving heartbeat signal
                                    # (change requires restart)
wd_heartbeat_keepalive = 2
                                    # Interval time of sending heartbeat signal (sec)
                                    # (change requires restart)
wd_heartbeat_deadtime = 30
                                    # Deadtime interval for heartbeat signal (sec)
                                    # (change requires restart)
heartbeat_destination0 = 'host0_ip1'
                                    # Host name or IP address of destination 0
                                    # for sending heartbeat signal.
                                    # (change requires restart)
heartbeat_destination_port0 = 9694
                                    # Port number of destination 0 for sending
                                    # heartbeat signal. Usually this is the
                                    # same as wd_heartbeat_port.
                                    # (change requires restart)
heartbeat_device0 = ''
                                    # Name of NIC device (such like 'eth0')
                                    # used for sending/receiving heartbeat
                                    # signal to/from destination 0.
                                    # This works only when this is not empty
                                    # and pgpool has root privilege.
                                    # (change requires restart)

#heartbeat_destination1 = 'host0_ip2'
#heartbeat_destination_port1 = 9694
#heartbeat_device1 = ''

# -- query mode --

wd_life_point = 3
                                    # lifecheck retry times
                                    # (change requires restart)
wd_lifecheck_query = 'SELECT 1'
                                    # lifecheck query to pgpool from watchdog
                                    # (change requires restart)
wd_lifecheck_dbname = 'template1'
                                    # Database name connected for lifecheck
                                    # (change requires restart)
wd_lifecheck_user = 'nobody'
                                    # watchdog user monitoring pgpools in lifecheck
                                    # (change requires restart)
wd_lifecheck_password = ''
                                    # Password for watchdog user in lifecheck
                                    # Leaving it empty will make Pgpool-II to first look for the
                                    # Password in pool_passwd file before using the empty password
                                    # (change requires restart)

# - Other pgpool Connection Settings -

#other_pgpool_hostname0 = 'host0'
                                    # Host name or IP address to connect to for other pgpool 0
                                    # (change requires restart)
#other_pgpool_port0 = 5432
                                    # Port number for other pgpool 0
                                    # (change requires restart)
#other_wd_port0 = 9000
                                    # Port number for other watchdog 0
                                    # (change requires restart)
#other_pgpool_hostname1 = 'host1'
#other_pgpool_port1 = 5432
#other_wd_port1 = 9000

#------------------------------------------------------------------------------
# OTHERS
#------------------------------------------------------------------------------
relcache_expire = 3600
                                   # Life time of relation cache in seconds.
                                   # 0 means no cache expiration(the default).
                                   # The relation cache is used for cache the
                                   # query result against PostgreSQL system
                                   # catalog to obtain various information
                                   # including table structures or if it's a
                                   # temporary table or not. The cache is
                                   # maintained in a pgpool child local memory
                                   # and being kept as long as it survives.
                                   # If someone modify the table by using
                                   # ALTER TABLE or some such, the relcache is
                                   # not consistent anymore.
                                   # For this purpose, cache_expiration
                                   # controls the life time of the cache.

relcache_size = 256
                                   # Number of relation cache
                                   # entry. If you see frequently:
                                   # "pool_search_relcache: cache replacement happend"
                                   # in the pgpool log, you might want to increate this number.

check_temp_table = catalog
                                   # Temporary table check method. catalog, trace or none.
                                   # Default is catalog.

check_unlogged_table = on
                                   # If on, enable unlogged table check in SELECT statements.
                                   # This initiates queries against system catalog of primary/master
                                   # thus increases load of master.
                                   # If you are absolutely sure that your system never uses unlogged tables
                                   # and you want to save access to primary/master, you could turn this off.
                                   # Default is on.
enable_shared_relcache = on
                                   # If on, relation cache stored in memory cache,
                                   # the cache is shared among child process.
                                   # Default is on.
                                   # (change requires restart)

relcache_query_target = load_balance_node     # Target node to send relcache queries. Default is master (primary) node.
                                   # If load_balance_node is specified, queries will be sent to load balance node.
#------------------------------------------------------------------------------
# IN MEMORY QUERY MEMORY CACHE
#------------------------------------------------------------------------------
memory_cache_enabled = off
                                   # If on, use the memory cache functionality, off by default
                                   # (change requires restart)
memqcache_method = 'shmem'
                                   # Cache storage method. either 'shmem'(shared memory) or
                                   # 'memcached'. 'shmem' by default
                                   # (change requires restart)
memqcache_memcached_host = 'localhost'
                                   # Memcached host name or IP address. Mandatory if
                                   # memqcache_method = 'memcached'.
                                   # Defaults to localhost.
                                   # (change requires restart)
memqcache_memcached_port = 11211
                                   # Memcached port number. Mondatory if memqcache_method = 'memcached'.
                                   # Defaults to 11211.
                                   # (change requires restart)
memqcache_total_size = 67108864
                                   # Total memory size in bytes for storing memory cache.
                                   # Mandatory if memqcache_method = 'shmem'.
                                   # Defaults to 64MB.
                                   # (change requires restart)
memqcache_max_num_cache = 1000000
                                   # Total number of cache entries. Mandatory
                                   # if memqcache_method = 'shmem'.
                                   # Each cache entry consumes 48 bytes on shared memory.
                                   # Defaults to 1,000,000(45.8MB).
                                   # (change requires restart)
memqcache_expire = 0
                                   # Memory cache entry life time specified in seconds.
                                   # 0 means infinite life time. 0 by default.
                                   # (change requires restart)
memqcache_auto_cache_invalidation = on
                                   # If on, invalidation of query cache is triggered by corresponding
                                   # DDL/DML/DCL(and memqcache_expire).  If off, it is only triggered
                                   # by memqcache_expire.  on by default.
                                   # (change requires restart)
memqcache_maxcache = 409600
                                   # Maximum SELECT result size in bytes.
                                   # Must be smaller than memqcache_cache_block_size. Defaults to 400KB.
                                   # (change requires restart)
memqcache_cache_block_size = 1048576
                                   # Cache block size in bytes. Mandatory if memqcache_method = 'shmem'.
                                   # Defaults to 1MB.
                                   # (change requires restart)
memqcache_oiddir = '/var/log/pgpool/oiddir'
                                   # Temporary work directory to record table oids
                                   # (change requires restart)
white_memqcache_table_list = ''
                                   # Comma separated list of table names to memcache
                                   # that don't write to database
                                   # Regexp are accepted
black_memqcache_table_list = ''
                                   # Comma separated list of table names not to memcache
                                   # that don't write to database
                                   # Regexp are accepted
```