var http = require('http');
var configuracoes = {
    hostname: 'localhost',
    port: 3000,
    path: '/produtos',
    headers: {
        'Accept': 'application/json'
        // 'Accept': 'text/html' -> pode ser usado, caso a aplicacao queira o formato de uma pagina
    }
}

http.get(configuracoes, function(res){
    console.log(res.statusCode);
    res.on('data', function(body){
        console.log(""+body);
    });
});