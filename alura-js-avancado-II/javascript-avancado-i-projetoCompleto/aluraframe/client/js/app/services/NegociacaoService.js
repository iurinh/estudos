class NegociacaoService {
	obterNegociacoesDaSemana(){
		return new Promise((resolve, reject) => {
			let xhr = new XMLHttpRequest();
	        xhr.open('GET','negociacoes/semana');
	        
	        /*
	            0: requisicao ainda nao iniciada
	            1: conexao com o servidor estabelecida
	            2: requsicao recebida
	            3: processando requisicao
	            4: requisicao concluida e resposta esta pronta
	        */
	        xhr.onreadystatechange = () => {
	            if(xhr.readyState == 4)
	                if(xhr.status == 200){
	                    resolve(JSON.parse(xhr.responseText)
	                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));//Formato de data retornada ja esta no formato padrao
	                        
	                }else{
	                    console.log(xhr.responseText);
	                    reject('Não foi possível obter as negociações da semana');
	                }
	        };

	        xhr.send();
		});

		
	}

	obterNegociacoesDaSemanaAnterior(){
		return new Promise((resolve, reject) => {
			let xhr = new XMLHttpRequest();
	        xhr.open('GET','negociacoes/anterior');
	        
	        /*
	            0: requisicao ainda nao iniciada
	            1: conexao com o servidor estabelecida
	            2: requsicao recebida
	            3: processando requisicao
	            4: requisicao concluida e resposta esta pronta
	        */
	        xhr.onreadystatechange = () => {
	            if(xhr.readyState == 4)
	                if(xhr.status == 200){
	                     resolve(JSON.parse(xhr.responseText)
	                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));//Formato de data retornada ja esta no formato padrao
	                        
	                }else{
	                    console.log(xhr.responseText);
	                    reject('Não foi possível obter as negociações da semana anterior');
	                }
	        };

	        xhr.send();//Aciona a requisicao
	    });
	}

	obterNegociacoesDaSemanaRetrasada(){
		return new Promise((resolve, reject) => {
			let xhr = new XMLHttpRequest();
	        xhr.open('GET','negociacoes/retrasada');
	        
	        /*
	            0: requisicao ainda nao iniciada
	            1: conexao com o servidor estabelecida
	            2: requsicao recebida
	            3: processando requisicao
	            4: requisicao concluida e resposta esta pronta
	        */
	        xhr.onreadystatechange = () => {
	            if(xhr.readyState == 4)
	                if(xhr.status == 200){
	                    resolve(JSON.parse(xhr.responseText)
	                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));//Formato de data retornada ja esta no formato padrao
	                        
	                }else{
	                    console.log(xhr.responseText);
	                    reject('Não foi possível obter as negociações da semana retrasada');
	                }
	        };

	        xhr.send();//Aciona a requisicao
	    });
	}
}