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

		let data = new Date(...
			this._inputData.value
			.split('-')
			.map((item,index) => item - index % 2 )//arrow function, nao precisa de corpo e ele ja entende que sara um return
		);
		
		let negociacao = new Negociacao(
			data,
			this._inputQuantidade.value,
			this._inputValor.value
		);
		
		console.log(negociacao);
	}



}