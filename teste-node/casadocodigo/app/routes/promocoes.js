module.exports = function(app){
    app.get('/promocoes/form', function(req,res){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(erro,resultados){  
            res.render('promocoes/form',{lista:resultados});
        });
    });

    app.post('/promocoes', function(req,res){
        var promocao = req.body;
        console.log(promocao);

        res.redirect('promocoes/form');
    });
}