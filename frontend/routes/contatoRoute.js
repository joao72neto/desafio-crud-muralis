const express = require('express');
const router = express.Router();


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
