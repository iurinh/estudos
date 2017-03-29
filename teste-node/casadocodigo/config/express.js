var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function(){
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');//A partir da raiz do projeto

    app.use(bodyParser.urlencoded({extended: true}));

    load('routes',{cwd:'app'})//cwd limita as pastas escaneadas
        .then('infra')//adiciona alem da pasta routes outra desejada
        .into(app);

    return app;
}