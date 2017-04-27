
public class RespostaEmXml implements Resposta{
	private Resposta outraResposta;

	public RespostaEmXml(Resposta resposta) {
		this.outraResposta = resposta;
	}

	public void responde(Requisicao req, Conta conta) {
		if(req.getFormato() == Formato.XML) {
			System.out.println("<conta><titular>" + conta.getNome() + "</titular><saldo>" + conta.getSaldo() + "</saldo></conta>");
		} else if(outraResposta != null){
            outraResposta.responde(req, conta);
        } else {
            // não existe próxima na corrente, e ninguém atendeu a requisição!
            // poderíamos não ter feito nada aqui, caso não fosse necessário!
            throw new RuntimeException("Formato de resposta não encontrado");
        }
	}

	public void setProxima(Resposta resposta) {
		this.outraResposta = resposta;
	}
}
