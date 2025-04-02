const express = require('express');
const router = express.Router();

//Juntando as rotas
const clienteRoute = require('./clienteRoute');
const contatoRoute = require('./contatoRoute');

router.use('/', clienteRoute);
router.use('/', contatoRoute);

//Expotando as rotas pra o app
module.exports = router;