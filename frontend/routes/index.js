const express = require('express');
const router = express.Router();

//Juntando as rotas
const apisRoute = require('./apisRoute');
const viewRoute = require('./viewsRoute');

router.use('/', apisRoute);
router.use('/', viewRoute);

//Expotando as rotas pra o app
module.exports = router;