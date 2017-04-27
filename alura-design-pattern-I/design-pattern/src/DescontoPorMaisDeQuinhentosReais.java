
public class DescontoPorMaisDeQuinhentosReais implements Desconto{
	
	private Desconto proximo;
	
	public double desconto(Orcamento orcamento){
		if(orcamento.getValor() > 500.0)
			return orcamento.getValor() * 0.07;
		
		return proximo.desconto(orcamento);
	}

	@Override
	public void setProximos(Desconto proximo) {
		this.proximo = proximo;
	}
}
