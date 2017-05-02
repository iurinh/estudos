
public class Conta {
	private String nome;
	private double saldo;
	private String numero;
	private String agencia;

	public Conta(String nome, double saldo, String numero, String agencia) {
		this.nome = nome;
		this.saldo = saldo;
		this.numero = numero;
		this.agencia = agencia;
	}

	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public double getSaldo() {
		return saldo;
	}
	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}
	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public String getAgencia() {
		return agencia;
	}
	public void setAgencia(String agencia) {
		this.agencia = agencia;
	}
	
}
