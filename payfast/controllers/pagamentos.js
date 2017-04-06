module.exports = function(app){
  app.get('/pagamentos', function(req, res){
    console.log('Recebida requisicao de teste na porta 3000');
    res.send('<h1>OK</h1>');
  });

  app.post('/pagamentos/pagamento', function(req, res){
    var pagamento = req.body;
    console.log('Processando uma requisicao de um novo pagamento...');

    pagamento.status = 'CRIADO';
    pagamento.data = new Date();

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDAO(connection);

    pagamentoDao.salva(pagamento, function(erro, resultado){
      console.log('Pagamento criado');
      res.json(pagamento);
    })
  });
}
