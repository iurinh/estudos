module.exports = function(app){
    app.post('/authenticate/login', function(req, res){
        console.log('Tentou autenticar.');
        res.status(201).json({'ok':'ok'});
    });
}