
public class SemDesconto implements Desconto{

	@Override
	public double desconto(Orcamento orcamento) {
		return 0;
	}

	@Override
	public void setProximos(Desconto desconto) {
		// nao tem!
	}
	
}
