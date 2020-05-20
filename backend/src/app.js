const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
const app = express(); 

app.use(cors()); //permitir que qualquer endereço front-end acesse a aplicação
app.use(express.json()); //a fim de conseguir ler o que vem no body da requisicao
app.use(routes); //usar as rotas configuradas no arquivo routes.js
app.use(errors());

module.exports = app;