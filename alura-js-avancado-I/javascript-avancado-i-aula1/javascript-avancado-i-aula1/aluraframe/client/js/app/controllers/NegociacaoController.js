class NegociacaoController {

	constructor(){		
		let $ = document.querySelector.bind(document);//Mantem o contexto do document para o seletor	

		//Evita percorrer o DOM todas as vezes que for chamar uma funcao
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._listaNegociacoes = new ListaNegociacoes();
		this._negociacoesView = new NegociacoesView($("#negociacoesView"));

		this._negociacoesView.update(this._listaNegociacoes);
	}

	adiciona(event){
		event.preventDefault();
			
		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._negociacoesView.update(this._listaNegociacoes);
		this._limpaFormulario();
	}

	//Possui underline pq indica q somente quem faz parte desse controller eh q pode chamar essa funcao
	_criaNegociacao(){
		return new Negociacao(
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
		);
	}

	//Possui underline pq indica q somente quem faz parte desse controller eh q pode chamar essa funcao
	_limpaFormulario(){
		this._inputData.value = ""
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0;

		this._inputData.focus();
	}
}