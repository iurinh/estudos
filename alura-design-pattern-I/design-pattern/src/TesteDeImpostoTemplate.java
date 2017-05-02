
public class TesteDeImpostoTemplate {
	public static void main(String[] args) {
		Imposto ikcv = new IKCV();
		Imposto icpp = new ICPP();
		Imposto ihit = new IHIT();
		
		CalculadorDeImposto calculador = new CalculadorDeImposto();
		
		Orcamento orcamento = new Orcamento(600.0);
		orcamento.adicionaItem(new Item("Lápis", 1.0));
		orcamento.adicionaItem(new Item("Lapiseira", 5.0));
		
		calculador.realizaCalculo(orcamento, ikcv);
		calculador.realizaCalculo(orcamento, icpp);
		calculador.realizaCalculo(orcamento, ihit);
		
		orcamento.adicionaItem(new Item("Caneta", 2.0));
		orcamento.setValor(2000.0);
		calculador.realizaCalculo(orcamento, ikcv);
		calculador.realizaCalculo(orcamento, icpp);
		calculador.realizaCalculo(orcamento, ihit);
	}
}
