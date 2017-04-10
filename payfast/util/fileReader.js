var fs = require('fs');//File System - ja faz parte do Core do Node

fs.readFile('imagem.jpg', function(error, buffer){
  console.log('Arquivo lido');

  fs.writeFile('imagem2.jpg', buffer, function(err){
    console.log('Arquivo escrito');
  })
})
