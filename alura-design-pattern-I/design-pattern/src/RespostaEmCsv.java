
public class RespostaEmCsv implements Resposta{

	private Resposta outraResposta;

	public RespostaEmCsv(Resposta resposta) {
		this.outraResposta = resposta;
	}

	public void responde(Requisicao req, Conta conta) {
		if(req.getFormato() == Formato.CSV) {
			System.out.println(conta.getNome() + "," + conta.getSaldo());
		} else if(outraResposta != null){
            outraResposta.responde(req, conta);
        } else {
            // n�o existe pr�xima na corrente, e ningu�m atendeu a requisi��o!
            // poder�amos n�o ter feito nada aqui, caso n�o fosse necess�rio!
            throw new RuntimeException("Formato de resposta n�o encontrado");
        }
	}

	public void setProxima(Resposta resposta) {
		this.outraResposta = resposta;
	}
}
