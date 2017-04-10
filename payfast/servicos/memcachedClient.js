var memcached = require('memcached');

var cliente = new memcached('localhost:11211', {
  retries: 10,//Numero de retentativas
  retry: 10000,//Tempo de espera entre falha de servidor e tentar novamente
  remove: true//Caso nao tenha dado certo nenhuma tentativa, este eh removido
});

cliente.set('pagamento-8', {'id':8}, 60000, function(erro){
  console.log('Nova chave adicionada ao cache: pagamento-8');
})

cliente.get('pagamento-8', function(erro, retorno){
  if(erro || !retorno){
    console.log('MISS - chave nao encontrada');
  } else {
    console.log('Hit - valor: ' + JSON.stringify(retorno));
  }
});
