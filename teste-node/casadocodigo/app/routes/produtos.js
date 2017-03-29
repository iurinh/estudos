
module.exports = function(app) {
    app.get('/produtos',function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(erro,resultados){
            res.render('produtos/lista',{lista:resultados});
        })

        connection.end();
    });

    app.get('produtos/remove', function(req, res){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        var produto = produtosDAO.carrega(id, callback);
        if(produto)
            produtosDAO.remove(produto, callback);

        connection.end();
    });
    
    app.get('/produtos/form', function(req, res){
        res.render('produtos/form')
    });

    app.post('/produtos/salva', function(req, res){
        var produto = req.body;//necessario instalar o bodyParser para conseguir os dados do formulario dessa forma
                
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function(erro, resultados){
            res.render('/produtos/lista');
        });
    });
}