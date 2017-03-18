class DateHelper {

	constructor(){
		//Pq essa classe será utilizada sem ficar criando instancias pelo codigo. 
		throw new Error('Essa classe não pode ser instanciada');
	}

	static textoParaData(texto){
		return new Date(
			...texto
				.split('-')
				.map((item,index) => item - index % 2 )
		);
	}

	static dataParaTexto(data){
		return 	data.getDate() + "/" + 
				(data.getMonth() + 1) + "/" + 
				data.getFullYear();
	}

}