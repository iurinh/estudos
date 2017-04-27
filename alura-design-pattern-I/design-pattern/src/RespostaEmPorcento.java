
public class RespostaEmPorcento implements Resposta{
	private Resposta outraResposta;

	public RespostaEmPorcento(Resposta resposta) {
		this.outraResposta = resposta;
	}

	public void responde(Requisicao req, Conta conta) {
		if(req.getFormato() == Formato.PORCENTO) {
			System.out.println(conta.getNome() + "%" + conta.getSaldo());
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
