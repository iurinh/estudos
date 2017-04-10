var cluster = require('cluster');//Faz parte do Node
var os = require('os');//Faz parte do Node (informacoes do Sistema Operacional da máquina)

var cpus = os.cpus();

console.log("Executando thread");

if(cluster.isMaster){//somente pode iniciar uma nova thread a partir da master. A slave nao possui a funcao fork()
  console.log("thread master");

  cpus.forEach(function(){//Para cada CPU, cria uma ramificação
    cluster.fork();
  });

  cluster.on('listening', function(worker){
    console.log('cluster conectado ' + worker.process.pid);
  });

  //Caso o processo da thread seja 'kill' ele lanca uma nova thread no lugar
  cluster.on('exit', worker => {
    console.log('cluster %d desconectado ', worker.process.pid);
    cluster.fork();
  });

} else {
  console.log('thread slave');
  require('./index.js');//Isso possibilita subir uma aplicação (servidor) em cada processador da maquina. A propria API Cluster vai gerenciar a utilização dos processadores usando a mesma porta
}
