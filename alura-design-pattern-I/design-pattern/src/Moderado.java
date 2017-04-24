
public class Moderado implements Investimento{

	@Override
	public double investir(double valor) {
		
		boolean escolhido = new java.util.Random().nextDouble() > 0.50;
		
		if(escolhido){
			System.out.println("Investimento Moderado 2.5%");
			return valor * 1.025;
		} else {
			System.out.println("Investimento Moderado 7%");
			return valor * 1.07;
		}
	}

}
