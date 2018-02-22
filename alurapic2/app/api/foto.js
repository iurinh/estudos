var mongoose = require('mongoose');//Ja possui a configuracao do Mongo, pois o Node carrega apenas 1 vez, as outras ele usa o que esta em memoria

var api = {};

api.lista = function(req, res){
    var model = mongoose.model('Foto');
    model.find(function(error, fotos){
        if(error)
            res.status(500).json(error);

        res.json(fotos);
    });

    model
    .find({})
    .then(function(fotos){
        res.json(fotos);
    }, function(error){
        console.log(error);
        res.status(500).json(error);
    })
}

api.buscaPorId = function(req, res){
    
}

api.removePorId = function(req, res){
    
}

api.adiciona = function(req, res){
    
}

api.atualizar = function(req, res){
    
}

module.exports = api;