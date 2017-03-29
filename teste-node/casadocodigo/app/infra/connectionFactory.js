var mysql = require('mysql');

function createDbConnection(){
    if(!process.env.NODE_ENV)
        return mysql.createConnection({
            host: "localhost",
            user: "root",
            password : "root",
            database: "casadocodigo_nodejs",
        });
    if(process.env.NODE_ENV = 'test')
        return mysql.createConnection({
            host: "localhost",
            user: "root",
            password : "root",
            database: "casadocodigo_nodejs_test",
        });
}

//wrapper - funcao que embrulha outra funcao
module.exports = function(){
    return createDbConnection;
}