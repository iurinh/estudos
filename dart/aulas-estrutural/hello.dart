import 'dart:io';
import 'dart:math';

/** Inicia o programa */
main() {
  print("Hello World");

  for (var i = 0; i < 10; i++) {
    print("$i - Random(0-10): " + Random.secure().nextInt(10).toString());
    
    var val = i%2;
    print(val);

    if(val > 0) 
      print(i.toString() + " é Impar");
    else
      print(i.toString() + " é Par");
  }

  print("======= Digite qualquer coisa =======");
  var input = stdin.readLineSync();
  print("No final você digitou: '" + input + "'");

  try {
    var number = double.parse(input);
    print("Você digitou um numero");
  } catch (e) {
    print("Você digitou uma palavra");
  }

  print("========= Programa Finalizado ============");
}