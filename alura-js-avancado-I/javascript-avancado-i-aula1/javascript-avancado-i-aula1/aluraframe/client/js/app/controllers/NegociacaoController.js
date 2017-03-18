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
		
		let negociacao = new Negociacao(
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
		);
		
		let diamesAno = DateHelper.dataParaTexto(negociacao.data);

		console.log(diamesAno);
	}

}