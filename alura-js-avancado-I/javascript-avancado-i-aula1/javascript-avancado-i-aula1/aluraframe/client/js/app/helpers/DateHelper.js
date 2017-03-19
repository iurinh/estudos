class DateHelper {

	constructor(){
		//Pq essa classe será utilizada sem ficar criando instancias pelo codigo. 
		throw new Error('Essa classe não pode ser instanciada');
	}

	static textoParaData(texto){
		if(! /^\d{4}-\d{2}-\d{2}$/.test(texto))
			throw new Error('Texto de data deve estar no formato aaaa-mm-dd');

		return new Date(
			...texto
				.split('-')
				.map((item,index) => item - index % 2 )
		);
	}

	static dataParaTexto(data){
		//Template String (coisa nova do ES2015) - essa crase se chama "back stick"
		return 	`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
	}

}