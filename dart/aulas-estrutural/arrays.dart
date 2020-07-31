
import 'dart:io';

/** Inicia o programa */
main() {
  var list = <String>[];

  for (var i = 0; i < 5; i++) {
    list.add("$i foi o numero inserido");
  }

  print(list);
  for (var item in list) {
    print(item);
  }

  list.forEach((item) { print("$item num ForEach"); });

  iniciaPerguntas();
}

iniciaPerguntas() {
  List<String> list = [];

  String text;

  while (text != "sair") {
    print("=== Digite ===");

    text = stdin.readLineSync();
    list.add(text);
    
    print(list);
    print("Tamanho: " + list.length.toString());
  }

  print("=== Imprimindo pela posição ===");
  for (var i = 0; i < list.length; i++) {
    print(list[i]);
  }

  print("=== Removendo 'sair' ===");
  list.remove('sair');
  print(list);

  if (list.length > 0) {
    print("=== Removendo primeiro ===");
    list.removeAt(0);
    print(list);
  }

  print("=== Programa Finalizado ===");
}