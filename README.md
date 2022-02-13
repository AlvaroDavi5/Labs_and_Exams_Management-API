
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
After this, access the [localhost](http://localhost:3000/) link.
___
<br>

### Technologies
 - [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
 - [TypeScript](https://www.typescriptlang.org/)
 - [Node.js](https://nodejs.org/)
 - [Express.js](https://expressjs.com/)
 - [PostgreSQL](https://www.postgresql.org/)
 - [Sequelize ORM](https://sequelize.org/)
 - [Docker](https://www.docker.com/)
 - [Docker Compose](https://docs.docker.com/compose/)
 - [Heroku](https://www.heroku.com/)
 - [DBDiagram](https://dbdiagram.io/)
 - [API Blueprint](https://apiblueprint.org/)


---
<br>

#### TODO

- [x] Database
  - [x] Models
  - [x] Migrations
  - [x] Seeders
  - [x] Documentation
  - [x] Containerization
- [x] Exams Controllers
- [x] Labs Controllers
- [x] ExamLab Controllers
- [ ] API
  - [x] Routes
    - [x] Get active entities
    - [x] Find by term in name
    - [x] Create/Delete on all associated registers by lab_id/exam_id
    - [x] Find all labs associated with an exam
  - [x] REST Architecture
  - [x] HTTP Status Codes
  - [ ] Documentation
  - [x] Containerization
- [x] Aplication Deployment
- [ ] Migrate Code to TypeScript in different releases

___
</br>

For more information, visit the `docs` folder.
