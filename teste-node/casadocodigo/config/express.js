var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function(){
    var app = express();

    app.use(express.static('./app/public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');//A partir da raiz do projeto

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    
    app.use(expressValidator());

    load('routes',{cwd:'app'})//cwd limita as pastas escaneadas
        .then('infra')//adiciona alem da pasta routes outra desejada
        .into(app);

    app.use(function(req, res, next){//Coloca-se depois da verificacao das rotas, caso nao encontre, ai sim coloca a pagina de erro
        res.status(404).render('erros/404');
        next();
    });

    app.use(function(error, req, res, next){//o quarto argumento orienta a prioridade de apresentaççao do erro
        if(process.env.NODE_ENV == 'development'){
            res.status(500).render('erros/500');
            return;
        }
        next(error);
    });
    

    return app;
}