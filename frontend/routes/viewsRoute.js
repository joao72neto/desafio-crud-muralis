const express = require('express');
const router = express.Router();

// CLIENTES

// Página com todos os clientes
router.get('/', (req, res) => {
    res.render('index');
});

//Página de edição
router.get('/edicao', (req, res) => {
    res.render('edicao/editarCliente');
});

// Página de cadastro
router.get('/cadastro', (req, res) => {
    res.render('cadastro/cadastrarCliente');
});

//CONTATOS

// Página com todos os contatos
router.get('/contatos', (req, res) => {
    res.render('contatos');
});

// Página de edição
router.get('/contatos/edicao', (req, res) => {
    res.render('edicao/editarContato');
});

// Página de cadastro
router.get('/contatos/cadastro', (req, res) => {
    res.render('cadastro/cadastrarContato');
});


module.exports = router;
