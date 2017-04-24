
public class TesteDeImpostos {
	public static void main(String[] args) {
		Imposto iss = new ISS();
		Imposto icms = new ICMS();
		Imposto iccc = new ICCC();
		
		Orcamento orcamento = new Orcamento(500.0);
		
		CalculadorDeImposto calculador = new CalculadorDeImposto();
		
		calculador.realizaCalculo(orcamento, iss);
		calculador.realizaCalculo(orcamento, icms);
		
		calculador.realizaCalculo(orcamento, iccc);
		
		orcamento.setValor(2000.0);
		calculador.realizaCalculo(orcamento, iccc);
		
		orcamento.setValor(5000.0);
		calculador.realizaCalculo(orcamento, iccc);
	}
	
}
