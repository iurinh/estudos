
public class TesteDeInvestimento {
	public static void main(String[] args) {
		Investimento conservador = new Conservador();
		System.out.println(conservador.investir(50.0));
		Investimento moderado1 = new Moderado();
		System.out.println(moderado1.investir(50.0));
		Investimento moderado2 = new Moderado();
		System.out.println(moderado2.investir(50.0));
		Investimento moderado3 = new Moderado();
		System.out.println(moderado3.investir(50.0));
		Investimento arrojado1 = new Arrojado();
		System.out.println(arrojado1.investir(50.0));
		Investimento arrojado2 = new Arrojado();
		System.out.println(arrojado2.investir(50.0));
		Investimento arrojado3 = new Arrojado();
		System.out.println(arrojado3.investir(50.0));
		Investimento arrojado4 = new Arrojado();
		System.out.println(arrojado4.investir(50.0));
	}
}
