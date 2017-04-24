
public class Conservador implements Investimento{

	@Override
	public double investir(double valor) {
		System.out.println("Investimento Conservador 8%");
		return valor * 1.08;
	}

}
