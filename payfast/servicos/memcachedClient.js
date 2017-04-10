var memcached = require('memcached');

module.exports = function(){
  return createMemCachedClient;
}

function createMemCachedClient(){
  var cliente = new memcached('localhost:11211', {
    retries: 10,//Numero de retentativas
    retry: 10000,//Tempo de espera entre falha de servidor e tentar novamente
    remove: true//Caso nao tenha dado certo nenhuma tentativa, este eh removido
  });

  return cliente;
}
