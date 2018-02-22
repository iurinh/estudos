module.exports = function(app) {

    var mongoose = require('mongoose');
    var jwt = require('jsonwebtoken');

    var api = {};
    var model = mongoose.model('Usuario');

    api.autentica = function(req, res){

        model
        .findOne({login: req.body.login, senha: req.body.senha})
        .then(function(usuario){
            if(!usuario){
                console.log('Login e/ou senha invalidos');
                res.sendStatus(401);
            } else {
                var token = jwt.sign({login: usuario.login}, app.get('secret'), {
                    expiresIn: 84600 //24h em segundos
                });

                console.log("Token criado");
                console.log(token);

                res.set('x-access-token',token);//vai guardar no header, nome pode ser editado
                res.end();
            }
            
        }, function(error){
            console.log('Login e senha invalidos - Erro');
            res.sendStatus(401);
        });

    }

    api.verificaToken = function(req, res, next){
        var token = req.headers['x-access-token'];
        console.log("Verificando token");

        if(token){
            jwt.verify(token, app.get('secret'), function(err, decoded){
                if(err){
                    console.log('Token rejeitado');
                    res.sendStatus(401);
                }
        
                req.usuario = decoded;
                next();//PAssa para proxima rota
            })
        } else {
            console.log('Token não enviado');
            res.sendStatus(401);
        }

    }

    return api;
}