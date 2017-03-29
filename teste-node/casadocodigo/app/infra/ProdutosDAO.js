function ProdutosDAO(connection){
    this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
    this._connection.query('select * from produtos', callback);
}

ProdutosDAO.prototype.remove = function(id, callback){
    this._connection.query('delete * from produtos where id = ' + id, callback);
}

module.exports = function(){
    return ProdutosDAO;
}