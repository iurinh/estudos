var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();

//configurações do Express
app.use(express.static('./public'));
app.use(bodyParser.json());

consign({cwd: 'app'}) //Current Word Directory
    .include('api')
    .then('routes')
    .into(app);

module.exports = app;
