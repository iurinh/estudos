module.exports = function(app){
  const PAGAMENTO_CRIADO = "CRIADO";
  const PAGAMENTO_CONFIRMADO = "CONFIRMADO";
  const PAGAMENTO_CANCELADO = "CANCELADO";

  app.get('/pagamentos', function(req, res){
    console.log('Recebida requisicao de teste na porta 3000');
    res.send('<h1>OK</h1>');
  });

  app.post('/pagamentos/pagamento', function(req, res){

    req.assert('pagamento.forma_de_pagamento','Forma de pagamento obrigatório.').notEmpty();
    req.assert('pagamento.valor','Valor obrigatório e deve ser um decimal.').notEmpty().isFloat();
    req.assert("pagamento.moeda", "Moeda é obrigatória e deve ter 3 caracteres").notEmpty().len(3,3);

    var erros = req.validationErrors();
    if(erros){
      console.log("Erros de validação encontrados.");
      res.status(400).send(erros);
      return;
    }

    var pagamento = req.body.pagamento;
    console.log('Processando uma requisicao de um novo pagamento...');

    pagamento.status = PAGAMENTO_CRIADO;
    pagamento.data = new Date();

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDAO(connection);

    pagamentoDao.salva(pagamento, function(erro, resultado){
      if(erro){
        console.log('Erro ao inserir no banco:' + erro);
        res.status(500).send(erro);
      } else {
        console.log('Pagamento criado');
        pagamento.id = resultado.insertId;

        if(pagamento.forma_de_pagamento == 'cartao'){
          var cartao = req.body['cartao'];
          console.log(cartao);

          var clienteCartoes = new app.servicos.clienteCartoes();
          clienteCartoes.autoriza(cartao, function(exception, request, response, retorno){
            if(exception){
              console.log(exception);
              res.status(400).send(exception);
              return;
            }

            console.log(retorno);

            res.location('/pagamentos/pagamento/' + pagamento.id);//Caso tenha criado um novo acesso

            var response = {
              dados_do_pagamento: pagamento,
              cartao: retorno,
              links: [
                {
                  href: "http://localhost:3000/pagamentos/pagamento/" + pagamento.id,
                  rel: "confirmar",
                  method: "PUT"
                },
                {
                  href: "http://localhost:3000/pagamentos/pagamento/" + pagamento.id,
                  rel: "cancelar",
                  method: "DELETE"
                }
              ]
            }

            res.status(201).json(response);
          });
        } else {
          res.location('/pagamentos/pagamento/' + pagamento.id);//Caso tenha criado um novo acesso

          var response = {
            dados_do_pagamento: pagamento,
            links: [
              {
                href: "http://localhost:3000/pagamentos/pagamento/" + pagamento.id,
                rel: "confirmar",
                method: "PUT"
              },
              {
                href: "http://localhost:3000/pagamentos/pagamento/" + pagamento.id,
                rel: "cancelar",
                method: "DELETE"
              }
            ]
          }

          res.status(201).json(response);
        }

      }
    })
  });

  app.put('/pagamentos/pagamento/:id',function(req, res){
    var pagamento = {};
    var id = req.params.id;

    pagamento.id = id;
    pagamento.status= PAGAMENTO_CONFIRMADO;

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDAO(connection);

    pagamentoDao.atualiza(pagamento, function(erro){
      if(erro){
          res.status(500).send(erro);
          return;
      }
      console.log('Pagamento Confirmado');
      res.send(pagamento);
    });
  });

  app.delete('/pagamentos/pagamento/:id',function(req, res){
    var pagamento = {};
    var id = req.params.id;

    pagamento.id = id;
    pagamento.status= PAGAMENTO_CANCELADO;

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDAO(connection);

    pagamentoDao.atualiza(pagamento, function(erro){
      if(erro){
          res.status(500).send(erro);
          return;
      }
      console.log('Pagamento Cancelado');
      res.status(204).send(pagamento);
    });
  });

  app.get('/pagamentos/pagamento/:id', function(req, res){
    var id = req.params.id;
    console.log('Consultando Pgto: ' + id);

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDAO(connection);

    pagamentoDao.buscaPorId(id, function(erro, resultado){
      if(erro){
        console.log('Erro ao consultar no banco: ' + erro);
        res.status(500).send(erro);
        return;
      }

      console.log('Pagamento encontrado: ' + JSON.stringify(resultado));
      res.status(200).json(resultado);
    })
  })
}
