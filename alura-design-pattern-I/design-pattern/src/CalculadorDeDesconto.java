
public class CalculadorDeDesconto {
	public double calcula(Orcamento orcamento){
		//Chain of Responsability
		Desconto d1 = new DescontoPorCincoItens();
		Desconto d2 = new DescontoPorMaisDeQuinhentosReais();
		Desconto d3 = new SemDesconto();
		
		d1.setProximos(d2);
		d2.setProximos(d3);
		
		return d1.desconto(orcamento);
	}
}
