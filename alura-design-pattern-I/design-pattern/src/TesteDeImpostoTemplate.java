
public class TesteDeImpostoTemplate {
	public static void main(String[] args) {
		Imposto ikcv = new IKCV();
		Imposto icpp = new ICPP();
		
		
		CalculadorDeImposto calculador = new CalculadorDeImposto();
		
		Orcamento orcamento = new Orcamento(600.0);
		calculador.realizaCalculo(orcamento, ikcv);
		calculador.realizaCalculo(orcamento, icpp);
		
		orcamento.setValor(2000.0);
		calculador.realizaCalculo(orcamento, ikcv);
		calculador.realizaCalculo(orcamento, icpp);
	}
}
