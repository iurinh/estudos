
import 'src/gato.dart';
import 'src/pessoa.dart';

void main(List<String> arguments) {
  var pessoa = Pessoa(nome: 'Iuri', idade: 31, sexo: 'M');
  pessoa.nome = 'Iuri';
  pessoa.altura = 2;
  pessoa.peso = 80;

  print('pessoa.nome ${pessoa.nome}');
  print('pessoa.variavelFinal ${pessoa.variavelFinal}');
  print('pessoa.altura ${pessoa.altura}');
  print('pessoa.peso ${pessoa.peso}');

  var gato = Gato(nome: 'Meowth', barulho: 'Miau');
  print('Gato faz ${gato.barulho}');
}
