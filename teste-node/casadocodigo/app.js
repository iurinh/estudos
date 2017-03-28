var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/produtos', function(req,res){
    console.log('Atendendo a requisicao!')
    res.render('./produtos/lista');
});

app.listen(3000, function(){
    console.log('Servidor rodando');
});