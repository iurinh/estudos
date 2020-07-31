import 'dart:io';

main() {
  List<String> produtos = [];
  String text;

  print("\x1B[2J\x1B[0;0H");

  while (text != "sair") {
    print("=== Adicione um produto ===");
    text = stdin.readLineSync();
    
    if (text != "sair") {      
      print("\x1B[2J\x1B[0;0H");
      if (text == "imprimir")
        produtos.forEach((produto) => print("${produtos.indexOf(produto)} - $produto"));
      else if (text == "remover") 
        remover(produtos);
      else {
        produtos.add(text);
      }
    }
  }

  print("=== Seus produtos ===");
  produtos.asMap().forEach((index, produto) => print("$index - $produto"));
  
  print("=== Finalizou o programa ===");
}

remover(produtos) {
  print("=== Seus produtos são esses ===");
  produtos.asMap().forEach((index, produto) => print("$index - $produto"));

  print("=== Qual produto remover ? ===");

  try {
    produtos.removeAt(int.parse(stdin.readLineSync()));
  } catch (e) {
    print("=== Não foi possível remover ===");
  }
}