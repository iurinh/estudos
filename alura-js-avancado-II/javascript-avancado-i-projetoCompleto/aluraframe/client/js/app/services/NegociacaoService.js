class NegociacaoService {
	obterNegociacoesDaSemana(cb){//callback
		let xhr = new XMLHttpRequest();//AJAX usando apenas JS
        xhr.open('GET','negociacoes/semana');//Prepara para abrir o endereco
        
        /*
            0: requisicao ainda nao iniciada
            1: conexao com o servidor estabelecida
            2: requsicao recebida
            3: processando requisicao
            4: requisicao concluida e resposta esta pronta
        */
        xhr.onreadystatechange = () => {//Todas as vezes q mudar 0 estado ele chama a funcao
            if(xhr.readyState == 4)//requisicao concluida e resposta esta pronta
                if(xhr.status == 200){//resposta padrao para q indica q nao houve erro
                    cb(null, JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));//Formato de data retornada ja esta no formato padrao
                        
                }else{
                    console.log(xhr.responseText);
                    cb('Não foi possível obter as negociações', null);
                }
        };

        xhr.send();//Aciona a requisicao
	}

	obterNegociacoesDaSemanaAnterior(cb){//callback
		let xhr = new XMLHttpRequest();//AJAX usando apenas JS
        xhr.open('GET','negociacoes/anterior');//Prepara para abrir o endereco
        
        /*
            0: requisicao ainda nao iniciada
            1: conexao com o servidor estabelecida
            2: requsicao recebida
            3: processando requisicao
            4: requisicao concluida e resposta esta pronta
        */
        xhr.onreadystatechange = () => {//Todas as vezes q mudar 0 estado ele chama a funcao
            if(xhr.readyState == 4)//requisicao concluida e resposta esta pronta
                if(xhr.status == 200){//resposta padrao para q indica q nao houve erro
                    cb(null, JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));//Formato de data retornada ja esta no formato padrao
                        
                }else{
                    console.log(xhr.responseText);
                    cb('Não foi possível obter as negociações', null);
                }
        };

        xhr.send();//Aciona a requisicao
	}

	obterNegociacoesDaSemanaRetrasada(cb){//callback
		let xhr = new XMLHttpRequest();//AJAX usando apenas JS
        xhr.open('GET','negociacoes/retrasada');//Prepara para abrir o endereco
        
        /*
            0: requisicao ainda nao iniciada
            1: conexao com o servidor estabelecida
            2: requsicao recebida
            3: processando requisicao
            4: requisicao concluida e resposta esta pronta
        */
        xhr.onreadystatechange = () => {//Todas as vezes q mudar 0 estado ele chama a funcao
            if(xhr.readyState == 4)//requisicao concluida e resposta esta pronta
                if(xhr.status == 200){//resposta padrao para q indica q nao houve erro
                    cb(null, JSON.parse(xhr.responseText)
                        .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));//Formato de data retornada ja esta no formato padrao
                        
                }else{
                    console.log(xhr.responseText);
                    cb('Não foi possível obter as negociações', null);
                }
        };

        xhr.send();//Aciona a requisicao
	}
}