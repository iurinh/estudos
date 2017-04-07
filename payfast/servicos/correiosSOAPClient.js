var soap = require('soap');

function CorreiosSOAPClient(){
  this._url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl';
};

module.exports = function(){
  return CorreiosSOAPClient;
};

CorreiosSOAPClient.prototype.calculaPrazo = function(args, callback){
  soap.createClient(this._url, function(erro, cliente){
    console.log('cliente soap criado');

    if(erro){
      console.log(erro);
      return;
    }

    cliente.CalcPrazo(args, callback);
  });
};
