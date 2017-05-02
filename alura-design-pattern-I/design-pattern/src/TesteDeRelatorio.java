import java.util.ArrayList;
import java.util.List;

public class TesteDeRelatorio {
	public static void main(String[] args) {
		Relatorio simples = new RelatorioSimples();
		Relatorio complexo = new RelatorioComplexo();
		
		List<Conta> contas = new ArrayList<>();
		contas.add(new Conta("Itau", 600.0, "1234-5", "000456789-5"));
		contas.add(new Conta("Bradesco", 300.0, "1234-6", "000456789-6"));
		contas.add(new Conta("Banco do Brasil", 1000.0, "1234-7", "000456789-7"));
		contas.add(new Conta("Safra", 8000.0, "1234-8", "000456789-8"));
		
		simples.imprime(contas);
		System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		complexo.imprime(contas);
	}
}
