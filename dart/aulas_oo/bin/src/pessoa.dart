import 'humano.dart';

class Pessoa extends Humano{

  String nome;
  int idade;
  String sexo;

  String _variavelPrivada;
  final String variavelFinal = 'Final';
  
  Pessoa({this.nome, this.idade, this.sexo});
}