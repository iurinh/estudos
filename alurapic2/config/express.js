var express = require('express');
var app = express();

//configurações do Express
app.use(express.static('./public'));

module.exports = app;
