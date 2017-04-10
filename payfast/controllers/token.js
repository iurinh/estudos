module.exports = function(app){
  app.post("/token/criptografa", function(req,res){
    console.log(">>>>>>>>>>>>>>>>SERVICO TOKEN");
    var token = req.body;
    
    console.log(token);
    // console.log(req);
    // console.log(res);

  });
}
