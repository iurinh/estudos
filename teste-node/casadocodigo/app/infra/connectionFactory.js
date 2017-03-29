var mysql = require('mysql');

function createDbConnection(){
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password : "root",
        database: "casadocodigo_nodejs",
    });
}

//wrapper - funcao que embrulha outra funcao
module.exports = function(){
    return createDbConnection;
}