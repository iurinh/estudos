
public class TesteDeRespostaRequisicao {
	public static void main(String[] args) {
		Conta conta = new Conta("IURI", 150.0);
		
		Requisicao reqXML = new Requisicao(Formato.XML);
		Requisicao reqCSV = new Requisicao(Formato.CSV);
		Requisicao reqPORCENTO = new Requisicao(Formato.PORCENTO);
		
		//Chain of Responsability
		Resposta r1 = new RespostaEmXml();
		Resposta r2 = new RespostaEmCsv();
		Resposta r3 = new RespostaEmPorcento();
		
		r1.setProxima(r2);
		r2.setProxima(r3);
		
		r1.responde(reqXML, conta);
		r1.responde(reqCSV, conta);
		r1.responde(reqPORCENTO, conta);
	}
}
