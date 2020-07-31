import 'dart:io';

cadastrarPessoa() {
  List<Map> list = [];
  String cmd;

  //testeInicial();

  print("\x1B[2J\x1B[0;0H");

  while(cmd != "sair") {
    print("=== Comando ===");
    cmd = stdin.readLineSync();

    if (cmd == "cadastrar") 
      list.add(cadastrar());
    else if (cmd == "imprimir")
      print(list);
  }

  print("=== Cadastrados ===");
  print(list);

  print("=== Programa Finalizado ===");
}

testeInicial() {
  Map<String, dynamic> map = {
    "nome": "Iuri",
    "idade": 31
  };

  print(map["nome"]);
  map["nome"] = "Iuri e Emy";

  print(map);

  print("=== Nome ===");
  String nome = stdin.readLineSync();

  print("=== Valor ===");
  map[nome] = stdin.readLineSync();

  print(map);
}

cadastrar() {
  Map map = {};

  print("=== Nome ===");
  map["nome"] = stdin.readLineSync();

  
  print("=== Idade ===");
  map["idade"] = stdin.readLineSync();

  print("\x1B[2J\x1B[0;0H");

  return map;
}