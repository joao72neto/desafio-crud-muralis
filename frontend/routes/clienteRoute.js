const express = require('express');
const router = express.Router();

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

module.exports = router;
