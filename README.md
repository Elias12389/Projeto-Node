# Users API

API REST para CRUD de usuários, construída com Node.js, Express e MongoDB.

Projeto de estudo para a prática com Node.js, Express, Mongoose e Postman

## Stack

- Node.js
- Express
- MongoDB (Atlas) / Mongoose
- Postman

## Como rodar

1. Clone o repositório
2. Copie `.env.example` para `.env` e preencha com suas credenciais:

```env
MONGODB_USERNAME=seu-usuario
MONGODB_PASSWORD=sua-senha
MONGODB_CLUSTER=projetonodejs.oatwjvo.mongodb.net
MONGODB_DB=projeto_node

Estrutura da connection string:
mongodb+srv://USER:PASS@CLUSTER/DB?appName=ProjetoNodeJs

```

3. instale as dependências:
   npm install

4. inicie o servidor:
   npm run start:dev

## Endpoints

Método Rota Descrição
GET /users Lista todos os usuários
GET /users/:id Busca um usuário por ID
POST /users Cria um novo usuário
PATCh /users/:id Atualiza um usuário
DELETE /users/:id Remove um usuário

## Testes

Coleção do postman usada no desenvolvimento do projeto está em
"Curso de Node.Js.postman_collection.json"

## Autor

> Projeto desenvolvido durante o curso de Node.js do Felipe Rocha.
