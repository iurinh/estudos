import 'dart:io';

main() {

  int idade;

  while(idade == null) {    
    print('=== Digite uma idade ===');
    try {
      idade = int.parse(stdin.readLineSync());    
    } catch (e) {
      print('=== Idade invalida ===');
    }
  }

  if (idade >= 50) 
    print('melhor idade');
  if (idade >= 18) 
    print('adulto');
  if (idade >= 12) 
    print('adolescente');
  else
    print('criança');
}