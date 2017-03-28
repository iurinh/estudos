var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');//A partir da raiz do projeto

module.exports = function(){
    return app;
}