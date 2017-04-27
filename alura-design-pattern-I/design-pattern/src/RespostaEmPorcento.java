
public class RespostaEmPorcento implements Resposta{
	private Resposta outraResposta;

	public RespostaEmPorcento(Resposta resposta) {
		this.outraResposta = resposta;
	}

	public void responde(Requisicao req, Conta conta) {
		if(req.getFormato() == Formato.PORCENTO) {
			System.out.println(conta.getNome() + "%" + conta.getSaldo());
		}
		else {
			outraResposta.responde(req, conta);
		}
	}

	public void setProxima(Resposta resposta) {
		this.outraResposta = resposta;
	}
}
