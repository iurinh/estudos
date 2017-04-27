
public class DescontoPorCincoItens implements Desconto{
	
	private Desconto proximo;

	public double desconto(Orcamento orcamento){
		if(orcamento.getItens().size() > 5)
			return orcamento.getValor() * 0.1;
		 
		return proximo.desconto(orcamento);
	}

	@Override
	public void setProximos(Desconto proximo) {
		this.proximo = proximo;
	}
}
