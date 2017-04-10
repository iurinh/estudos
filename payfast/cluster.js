var cluster = require('cluster');

console.log("Executando thread");

if(cluster.isMaster){//somente pode iniciar uma nova thread a partir da master. A slave nao possui a funcao fork()
  console.log("thread master");
  cluster.fork();
} else {
  console.log('thread slave');
}
