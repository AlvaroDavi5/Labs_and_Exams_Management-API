
# Wa Project Challenge - Backend


## Install dependencies
To install the dependencies, run the following command:  
```sh
# after install Yarn package manager
yarn install
```
---
<br>

## How run the application in container
To create and run the application in `Docker` containers, run the following command on the root of the project:  
```sh
# after install Docker and Docker Compose
docker-compose up -d
```
___
<br>

## How to start the application
To start the application, run the following command:  
```sh
# after install Sequelize
yarn run db_config
# after install Node.js
node src/app.js
```
___
<br>

### Technologies
 - [Node.js](https://nodejs.org/)
 - [Express.js](https://expressjs.com/)
 - [PostgreSQL](https://www.postgresql.org/)
 - [Sequelize ORM](https://sequelize.org/)
 - [JWT](https://jwt.io/)
 - [Docker](https://www.docker.com/)
 - [Docker Compose](https://docs.docker.com/compose/)
 - [API Blueprint](https://apiblueprint.org/)
 - [Heroku](https://www.heroku.com/)


---
<br>

#### TODO

- [ ] Database
  - [ ] Models
  - [ ] Migrations
  - [ ] Seeders
  - [x] Documentation
  - [ ] Containerization
- [ ] Labs Controllers (CRUD)
- [ ] Exams Controllers (CRUD)
- [ ] API
  - [ ] Routes
  - [ ] REST Architecture
  - [ ] HTTP Status Codes
  - [ ] Documentation
  - [ ] Containerization
- [ ] JWT/OAuth Authentication
- [ ] Aplication Deployment

___
</br>

For more information, visit the `docs` folder.

___
</br>

```
	Contexto

Estamos desenvolvendo uma API para as seguintes situações:

- Laboratório:
	- cadastrar um novo laboratório;
	- obter uma lista de laboratórios ativos;
	- atualizar um laboratório existente;
	- remover logicamente um laboratório ativo.

- Exames:
	- cadastrar um novo exame;
	- obter uma lista de exames ativos;
	- atualizar um exame existente;
	- remover logicamente um exame ativo.


	Informações

- Laboratório
	- nome
	- endereço
	- status [ativo, inativo]

- Exame
	- nome
	- tipo [analise clinica, imagem]
	- status [ativo, inativo]


	Associação:

	- Importante: O cadastro de um laboratório/exame é considerado ativo e recebe um `id` gerado automaticamente.
	- Importante: Um exame pode estar associado a mais de um laboratório;
	- associar/desassociar um exame ativo à/de um laboratório ativo;


	Funcionalidades extras

- Possibilidade de executar cadastro, atualização e remoção em lote;
- Endpoint que faz a busca por nome do exame e retorna todos os laboratórios associados a esse exame.
```
