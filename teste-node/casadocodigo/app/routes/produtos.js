module.exports = function(app) {
    app.get("/produtos",function(req, res) {
        console.log('Conectando...');
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password : "root",
            database: "casadocodigo_nodejs",
        });

        connection.query('select * from produtos', function(err, results){
            res.send(results);
        });

        connection.end();

        console.log('Conectou');

    });
}