var restify = require('restify');

function ClienteCartoes(){

  var cliente = restify.createJsonClient({
    url:'http://localhost:3001',
  });

  cliente.post('/cartoes/autoriza', cartao, function(erro, req, res, retorno){
    console.log('consumindo servico de cartoes');
    console.log(retorno);
  });

}
