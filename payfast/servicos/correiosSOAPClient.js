var soap = require('soap');

soap.createClient('http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl',
  function(erro, cliente){
    if(erro)
      console.log(erro);

    cliente.CalcPrazo(
      {
        'nCdServico':'40010',
        'sCepOrigem':'04101300',
        'sCepDestino':'65000600'
      }, function(err, resultado){
      console.log(JSON.stringify(resultado));
    });
    console.log('cliente soap criado');
  }
);
