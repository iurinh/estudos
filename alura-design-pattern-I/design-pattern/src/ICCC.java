
public class ICCC implements Imposto{

	@Override
	public double calcula(Orcamento orcamento) {
		if(orcamento.getValor() < 1000.0){
			System.out.println("valor < 1000.0");
			return orcamento.getValor() * 0.05;			
		} else
			if(orcamento.getValor() >= 1000.0 && orcamento.getValor() < 3000.0){
				System.out.println("valor entre 1000.0 e 3000.0");
				return orcamento.getValor() * 0.07;
			} else {
				System.out.println("valor >= 3000.0");
				return orcamento.getValor() * 0.08;
			}
	}

}
