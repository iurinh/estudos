
public class Arrojado implements Investimento{
	
	@Override
	public double investir(double valor) {
		double random = new java.util.Random().nextDouble();
		
		if(random < 0.20){
			System.out.println("Investimento Arrojado 20%");
			return valor * 1.05;
		} else 
			if(random >= 0.20 && random < 0.50){
				System.out.println("Investimento Arrojado 3%");
				return valor * 1.03;
			} else {
				System.out.println("Investimento Arrojado 6%");
				return valor * 1.06;
			}
	}
	
}
