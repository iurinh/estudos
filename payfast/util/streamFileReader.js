var fs = require('fs');

//A cada pedaço de leitura, ja eh feita a escrita do arquivo. Entao nao precisa indicar o buffer, ele fica implicito
//Eh mais indicado, principalmente se depender de recursos de memoria
fs.createReadStream('imagem.jpg')
  .pipe(fs.createWriteStream('imagem-com-stream.jpg'))
  .on('finish', function(){
    console.log('arquivo escrito com stream');
  })
