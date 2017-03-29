var mysql = require('mysql');

function createDbConnection(){
    console.log(process.env.NODE_ENV);
    if(!process.env.NODE_ENV || process.env.node === 'development')
        return mysql.createConnection({
            host: "localhost",
            user: "root",
            password : "root",
            database: "casadocodigo_nodejs",
        });
    if(process.env.NODE_ENV == 'test')
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