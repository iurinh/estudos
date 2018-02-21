var express = require('express');
var consign = require('consign');

var app = express();

//configurações do Express
app.use(express.static('./public'));

consign({cwd: 'app'}) //Current Word Directory
    .include('api')
    .then('routes')
    .into(app);

module.exports = app;
