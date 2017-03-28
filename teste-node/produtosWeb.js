var http = require('http');
var porta = 3000;
var ip = "localhost";

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});    
    if(req.url == '/produtos')
        res.end('<html><body><h1>Listando Produtos</h1><body></html>');
    else 
        res.end('<html><body><h1>HOME - Casa do código</h1><body></html>');
});

server.listen(porta, ip);

console.log("Server running at http://" + ip + ":" + porta + "/");