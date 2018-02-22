var http = require('http');
var app = require('./config/express');
require('./config/database')('mongodb://127.0.0.1:27017/alurapic');

http.createServer(app).listen(3001, function(){
    console.log('Rodando na porta 3001');
});
