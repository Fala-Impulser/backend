# Fala Impulsers - Backend API

TODO: Descrição do projeto

## Instruções para desenvolvedores

### Requisitos

  * Docker última versão (atualmente 2.3.0.3 na versão community) - https://www.docker.com/products/docker-desktop

  Uma vez instalado, faça uma cópia do arquivo *.env.sample*, criando um arquivo *.env* preenchendo suas variáveis de ambiente.

  * NODE_ENV: Ambiente do projeto. Default: *development*
  * NODE_PORT: Porta onde irá rodar o node. Default: *4000*
  * DB_HOST: Host do banco de dados. Default: *localhost*
  * DB_PORT: Porta do banco de dados. Default: *5432*
  * DB_NAME: Nome do banco de dados. Default: *falaimpulser*
  * DB_USER: Usuário do banco de dados. Default: *postgres*
  * DB_PASS: Senha do banco de dados. *Por segurança, não tem senha default.
  * PGADMIN_DEFAULT_EMAIL: Email para se acessar o pgadmin. *Qualquer email válido.*
  * PGADMIN_DEFAULT_PASSWORD: Senha para se acessar o pgadmin. *Qualquer senha diferente de vazio.*

  Feito isto, para rodar o ambiente de desenvolvimento, basta executar o comando abaixo:

  ```
  docker-compose up -d --force-recreate
  ```

  Caso você seja usuário de linux, mac ou tenha o git bash no seu windows, pode utilizar os comandos make que acompanham esse projeto:

  Para **subir** os serviços:

  ```
  make up
  ```

  Para **baixar** os serviços:

  ```
  docker-compose down
  ```
  ou
  ```
  make down
  ```

  Para **visualizar os log's**:
  ```
  docker-compose logs -f
  ```
  ou
  ```
  make logs
  ```

### Banco de dados

  No docker-compose deste projeto, existe uma instalação do pgadmin (web), para acessá-lo abra a url http://localhost:5400. Para abrir é necessário usar o email e senha informados no arquivo docker-compose.yml:
  
  * e-mail: *impulser@gmail.com*
  * senha: *JGSaFb2YbmhsN4Yb*

  Ao abrir, será necessário informar a senha do BD, do usuário postgres:

  * senha: *S3hYyShtrrP8NApU*