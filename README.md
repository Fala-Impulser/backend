# Fala Impulsers - Backend API

TODO: Descrição do projeto

## Instruções para desenvolvedores

### Requisitos

  * Docker última versão (atualmente 2.3.0.3 na versão community) - https://www.docker.com/products/docker-desktop

  Uma vez instalado, para rodar o ambiente de desenvolvimento, basta executar o comando abaixo:

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