
public class TesteDeRespostaRequisicao {
	public static void main(String[] args) {
		Conta conta = new Conta("IURI", 150.0, "1324-5", "00045678-8");
		
		Requisicao reqXML = new Requisicao(Formato.XML);
		Requisicao reqCSV = new Requisicao(Formato.CSV);
		Requisicao reqPORCENTO = new Requisicao(Formato.PORCENTO);
		
		//Chain of Responsability
		Resposta r3 = new RespostaEmPorcento(null);
		Resposta r2 = new RespostaEmCsv(r3);
		Resposta r1 = new RespostaEmXml(r2);
		
		r1.responde(reqXML, conta);
		r1.responde(reqCSV, conta);
		r1.responde(reqPORCENTO, conta);
	}
}
