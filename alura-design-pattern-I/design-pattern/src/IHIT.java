import java.util.ArrayList;
import java.util.List;

public class IHIT extends TemplateDeImportoCondicional{

	@Override
	public double minimaTaxacao(Orcamento orcamento) {
		return orcamento.getValor() * (0.01 * orcamento.getItens().size());
	}

	@Override
	public double maximaTaxacao(Orcamento orcamento) {
		return (orcamento.getValor() * 0.13) + 100;
	}

	@Override
	public boolean deveUsarMaximaTaxacao(Orcamento orcamento) {
		List<String> nomes = new ArrayList<>();
		
		for (Item item : orcamento.getItens())
			if(nomes.contains(item.getNome()))
				return true;
			else
				nomes.add(item.getNome());
		
		return false;
	}
	
}
