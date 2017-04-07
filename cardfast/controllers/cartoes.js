module.exports = function(app){
  const CARTAO_AUTORIZADO = 'AUTORIZADO';

  app.get('/pagamentos', function(req, res){
    console.log('Recebida requisicao de teste na porta 3001');
    res.send('<h1>OK</h1>');
  });

  app.post('/cartoes/autoriza', function(req, res){
    var cartao = req.body;

    req.assert('numero','Número obrigatório e deve ter 16 caracteres.').notEmpty().len(16,16);
    req.assert('bandeira','Bandeira do cartão é obrigatória.').notEmpty();
    req.assert("ano_de_expiracao", "Ano de expiração é obrigatória e deve ter 4 caracteres").notEmpty().len(4,4);
    req.assert("mes_de_expiracao", "Mês de expiração é obrigatória e deve ter 2 caracteres").notEmpty().len(2,2);
    req.assert("cvv", "CVV é obrigatório e deve ter 3 caracteres").notEmpty().len(3,3);

    var erros = req.validationErrors();
    if(erros){
      console.log("Erros de validação encontrados.");
      res.status(400).send(erros);
      return;
    }

    console.log('Processando requisicao de autorizacao...');

    cartao.status = CARTAO_AUTORIZADO;

    var response = {
      dados_do_cartao: cartao
    }

    res.status(201).json(response);
  });

}
