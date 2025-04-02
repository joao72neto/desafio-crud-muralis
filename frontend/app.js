const express = require('express');
const routes = require('./routes'); 
const path = require('path');

//Criando o app
const app = express();

//Configurando arquivos estáticos 
app.use(express.static('./public'));

//Configurando a view engine
app.set('view engine', 'ejs');

//Pegando todas as rotas
app.use('/', routes);

//Configurando o caminho das views
app.set('views', path.join(__dirname, 'views'));

//Iniciando o servidor
const PORT = 3000;
app.listen(PORT, () =>{
    console.log(`Rodando na porta ${PORT}...`);
});


