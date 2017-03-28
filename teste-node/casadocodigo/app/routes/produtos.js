module.exports = function(app){
    return app.get('/produtos', function(req,res){
        console.log('Atendendo a requisicao!')
        res.render('./produtos/lista');//Procura os enderecos a partir do diretorio 'views'
    });
}