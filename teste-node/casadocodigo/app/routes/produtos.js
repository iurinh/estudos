
module.exports = function(app) {
    var listaProdutos = function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(erro,resultados){
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
        res.render('produtos/form');
    });

    app.post('/produtos', function(req, res){//Como eh um POST, podemos atribuir a mesma URL, mas tera uma funcao diferente
        var produto = req.body;//necessario instalar o bodyParser para conseguir os dados do formulario dessa forma
        console.log(produto);

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function(erro, resultados){
            produtosDAO.lista(function(erro,resultados){
                console.log("ERRO->" + erro);
                res.redirect('/produtos');//Sempre faça um redirecionamento quando fizer um POST
            });
        });
    });
}