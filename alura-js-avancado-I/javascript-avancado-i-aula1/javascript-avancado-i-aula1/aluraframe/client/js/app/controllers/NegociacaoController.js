class NegociacaoController {

	adiciona(event){
		event.preventDefault();

		let $ = document.querySelector.bind(document);//Mantem o contexto do document para o seletor
		
		let inputData = $('#data');
		let inputQuantidade = $('#quantidade');
		let inputValor = $('#valor');

		console.log(inputData.value);
		console.log(inputQuantidade.value);
		console.log(inputValor.value);
	}

}