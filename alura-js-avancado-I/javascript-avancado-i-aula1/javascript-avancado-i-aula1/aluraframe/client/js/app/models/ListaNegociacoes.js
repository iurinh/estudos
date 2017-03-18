class ListaNegociacoes{
	constructor(){
		this._negociacoes = [];
	}

	adiciona(negociacao){
		this._negociacoes.push(negociacao);
	}

	get negociacoes(){
		//Utiliza uma nova lista com uma copia dos dados da lista (acaba blindando);
		return [].concat(this._negociacoes);
	}
}