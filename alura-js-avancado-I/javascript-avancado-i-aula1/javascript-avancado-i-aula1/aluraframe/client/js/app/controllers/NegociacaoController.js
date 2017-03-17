class NegociacaoController {

	constructor(){		
		let $ = document.querySelector.bind(document);//Mantem o contexto do document para o seletor	

		//Evita percorrer o DOM todas as vezes que for chamar uma funcao
		this.inputData = $('#data');
		this.inputQuantidade = $('#quantidade');
		this.inputValor = $('#valor');
	}

	adiciona(event){
		event.preventDefault();

		console.log(this.inputData.value);
		console.log(this.inputQuantidade.value);
		console.log(this.inputValor.value);
	}

}