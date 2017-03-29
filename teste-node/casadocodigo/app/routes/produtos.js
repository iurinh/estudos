
module.exports = function(app) {
    var listaProdutos = function(req, res, next) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(erro,resultados){  
            if(erro)
                return next(erro);

            res.format({//Formatos disponiveis para resgate da informação
                html: function(){
                    res.render('produtos/lista',{lista:resultados});
                },
                json: function(){
                    res.json(resultados);
                }
            });
        });

        connection.end();
    };

    app.get('/produtos', listaProdutos);   

    app.get('produtos/remove', function(req, res){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        var produto = produtosDAO.carrega(id, callback);
        if(produto)
            produtosDAO.remove(produto, callback);

        connection.end();
    });
    
    app.get('/produtos/form', function(req, res){
        res.render('produtos/form',{errosValidacao:{}, produto:{}});
    });

    app.post('/produtos', function(req, res){//Como eh um POST, podemos atribuir a mesma URL, mas tera uma funcao diferente
        var produto = req.body;//necessario instalar o bodyParser para conseguir os dados do formulario dessa forma
        // console.log(produto);
        
        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();

        var erros = req.validationErrors();

        if(erros){
            res.format({//Formatos disponiveis para resgate da informação
                html: function(){
                    res.status(400).render('produtos/form',{errosValidacao:erros, produto:produto});
                },
                json: function(){
                    res.status(400).json(erros);
                }
            });
            return;
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function(erro, resultados){
            produtosDAO.lista(function(erro,resultados){
                res.redirect('/produtos');//Sempre faça um redirecionamento quando fizer um POST
            });
        });
    });
}