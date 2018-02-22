module.exports = function(uri){
    var mongoose = require('mongoose');
    
    mongoose.connect(uri);
    
    mongoose.connection.on('connected', function(){
        console.log('Conectado ao MongoDB');
    });
    
    mongoose.connection.on('error', function(e){
        console.log(e);
    });
    
    mongoose.connection.on('disconnected', function(e){
        console.log('Desconectado do MongoDB');
    });
    
    process.on('SIGINT', function(){
        mongoose.connection.close(function(){
            console.log('Conexao com MongoDB fechada pelo termino da aplicacao.');
            process.exit(0);
        });
    })
}