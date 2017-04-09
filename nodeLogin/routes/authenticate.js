module.exports = function(app){
    app.post('/authenticate/login', function(req, res, next){

        console.log('Servidor respondendo /authenticate/login - ' + new Date());
        res.setHeader('Access-Control-Allow-Origin', '*');//Website precisa para identificar a origem da resposta do cabeçalho
        res.status(200).json({'ok':'ok'});
        next();

    });
}

// res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Range, Content-Disposition, Content-Type, Authorization');
// res.setHeader('Access-Control-Allow-Credentials', true);
