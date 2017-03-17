class NegociacaoController {

	constructor(){		
		let $ = document.querySelector.bind(document);//Mantem o contexto do document para o seletor	

		//Evita percorrer o DOM todas as vezes que for chamar uma funcao
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}

	adiciona(event){
		event.preventDefault();

		//...this._inputData.value.split('-')//spread operator (pega o array e distribui em cada posição dos parametros do construtor)
		let data = new Date(...
			this._inputData.value
			.split('-')
			.map(function(item,index){
				return item - index % 2;//Ajuste realizado somente no mes (posicao 1)
			})
		);//spread operator (pega o array e distribui em cada posição dos parametros do construtor)
		console.log(data);
		
	}



}