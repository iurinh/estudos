class Negociacao {

	constructor(data, quantidade, valor){
		//Underline - indica ao programador q esses atributos somente podem ser acessados pela propria classe
		this._data = new Date(data.getTime());
		this._quantidade = quantidade;
		this._valor = valor;

		Object.freeze(this);//Nao possibilita a alteração das variaveis
	}

	get volume(){
		return this._quantidade * this._valor;
	}

	get data(){
		return new Date(this._data.getTime());
	}

	get quantidade(){
		return this._quantidade;
	}

	get valor(){
		return this._valor;
	}
}