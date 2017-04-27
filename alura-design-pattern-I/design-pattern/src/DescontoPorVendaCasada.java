
public class DescontoPorVendaCasada implements Desconto {
	
	private Desconto proximo;

	private boolean existe(String nomeDoItem, Orcamento orcamento) {
        for (Item item : orcamento.getItens()) {
            if(item.getNome().equals(nomeDoItem)) 
            	return true;
        }
        return false;
    }

    private boolean aconteceuVendaCasadaEm(Orcamento orcamento) {
        return existe("CANETA", orcamento) && existe("LAPIS", orcamento);
    }
    
	@Override
	public double desconto(Orcamento orcamento) {
		if(aconteceuVendaCasadaEm(orcamento)) 
			return orcamento.getValor() * 0.05;
        else 
        	return proximo.desconto(orcamento);
    }

	@Override
	public void setProximos(Desconto proximo) {
		this.proximo = proximo;		
	}
}
