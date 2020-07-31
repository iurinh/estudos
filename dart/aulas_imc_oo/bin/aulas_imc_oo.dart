
import 'dart:io';

import 'src/pessoa.dart';

void main(List<String> arguments) {
  var pessoa = Pessoa();

  print('=== Escreva o nome ===');
  pessoa.nome = stdin.readLineSync();

  while(pessoa.idade == null) {
    try {
      print('=== Escreva a idade ===');
      pessoa.idade = int.parse(stdin.readLineSync());
    } catch (e) {
      print('=== Somente valores inteiros são permitidos ===');
    }
  }

  while(pessoa.peso == null) {
    try {
      print('=== Escreva a peso ===');
      pessoa.peso = double.parse(stdin.readLineSync());
    } catch (e) {
      print('=== Somente números são permitidos ===');
    }
  }

  while(pessoa.altura == null) {
    try {
      print('=== Escreva a altura ===');
      pessoa.altura = double.parse(stdin.readLineSync());
    } catch (e) {
      print('=== Somente números são permitidos ===');
    }
  }

  print('=============');
  print('Nome: ${pessoa.nome}');
  print('Idade: ${pessoa.idade}');
  print('Peso: ${pessoa.peso}');
  print('Altura: ${pessoa.altura}');
  print('IMC: ${pessoa.imc()}');
  print('Maior: ${pessoa.maiorDeIdade()}');
}
