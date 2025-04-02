const express = require('express');
const router = express.Router();
const axios = require('axios');


// // Rota para a página de clientes
// router.get('/clientes', async (req, res) => {

//     try {
//         const response = await axios.get('http://localhost:8080/clientes');
//         res.json(response.data); 

//     } catch (error) {
//         console.error('Erro ao buscar clientes:', error.message);
//         res.status(500).json({ error: 'Erro ao buscar clientes' });
//     }
// });


module.exports = router;
