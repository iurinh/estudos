class Mensagem {
	constructor(texto=''){//Parametro padrao, em caso de undefined
		this._texto = texto;
	}

	get texto(){
		return this._texto;
	}

	set texto(texto){
		this._texto = texto;
	}
}