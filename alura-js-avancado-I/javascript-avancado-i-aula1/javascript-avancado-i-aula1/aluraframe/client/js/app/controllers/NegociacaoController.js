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

		//Possivel solução PESSOAL
		let dates = this._inputData.value.split('-');
		dates.forEach(function(dt){
			dt = Number(dt);
		});

		// let data = new Date(this._inputData.value.split('-'));//ano-mes-dia
		let data = new Date(dates);//ano-mes-dia
		console.log(data);
		// let negociacao = new Negociacao(
		// 	this._inputData.value,
		// 	this._inputQuantidade.value,
		// 	this._inputValor.value
		// );

		// console.log(negociacao);
	}



}