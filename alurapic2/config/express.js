var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

//configurações do Express
app.set('secret','Frase chave jwt');
app.use(express.static('./public'));
app.use(bodyParser.json());

consign({cwd: 'app'}) //Current Word Directory
    .include('models')
    .then('api')
    .then('routes/auth.js')//garante que vai carregar primeiro
    .then('routes')
    .into(app);

module.exports = app;
