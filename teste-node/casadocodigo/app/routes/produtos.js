
module.exports = function(app) {
    app.get('/produtos',function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connection);

        produtosBanco.lista(function(erro,resultados){
            res.render('produtos/lista',{lista:resultados});
        })

        connection.end();
    });

    app.get('produtos/remove', function(req, res){
        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connection);
        var produto = produtosBanco.carrega(id, callback);
        if(produto)
            produtosBanco.remove(produto, callback);

        connection.end();
    })
    
    app.get('/produtos/form', function(req, res){
        res.render('produtos/form')
    })
}