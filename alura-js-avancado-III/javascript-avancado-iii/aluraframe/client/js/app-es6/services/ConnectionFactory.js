// var ConnectionFactory = (function (){

	//const auxilia a nao modificar as variaveis
	const stores = ['negociacoes'];
	const version = 4;
	const dbName = 'aluraframe';

	// var connection = null;
	let connection = null;

	// var close = null;
	let close = null;

	// return class ConnectionFactory {
	export class ConnectionFactory {

		constructor(){
			throw new Error('Não é possível criar instâncias de ConnectionFactory.')
		}

		static getConnection(){
			return new Promise((resolve, reject) => {
				let openRequest = window.indexedDB.open(dbName, version);
				openRequest.onupgradeneeded = e => {
					ConnectionFactory._createStores(e.target.result);				
				}

				openRequest.onsuccess = e => {
					if(!connection){
						connection = e.target.result;
						close = connection.close.bind(connection);//Resolve o problema interno do 'this', entao precisa fazer o bind
						connection.close = function(){
							throw new Error('Você não pode fechar diretamente a conexão');
						}
					}

					resolve(connection);
				}

				openRequest.onerror = e => {
					console.log(e.target.error);
					reject(e.target.error.name);
				}
			});
		}

		static _createStores(connection){
			stores.forEach(store => {
				if(connection.objectStoreNames.contains(store))
					connection.deleteObjectStore(store);

				connection.createObjectStore(store, {autoIncrement: true});		
			});
		}

		static closeConnection(){
			if(connection){
				// Reflect.apply(close, connection, []);Uma alternativa caso nao queira usar o bind na hora de resgatar o close com o escopo da conexao
				close();
				connection = null;
			}
		}

	}
// })();