function ProdutosBanco(connection){
    this._connection = connection;
}

ProdutosBanco.prototype.lista = function(callback){
    this._connection.query('select * from produtos', callback);
}

ProdutosBanco.prototype.remove = function(id, callback){
    this._connection.query('delete * from produtos where id = ' + id, callback);
}

module.exports = function(){
    return ProdutosBanco;
}