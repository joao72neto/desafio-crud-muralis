const express = require('express');
const router = express.Router();


// Página com todos os contatos
router.get('/contatos', (req, res) => {
    res.render('contatos');
});

// Página de edição
router.get('/contatos/edicao', (req, res) => {
    const clt_id = req.query.clt_id;
    res.render('edicao/editarContato', {clt_id: clt_id});
});

// Página de cadastro
router.get('/contatos/cadastro', (req, res) => {
    res.render('cadastro/cadastrarContato');
});

module.exports = router;
