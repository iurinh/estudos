import 'dart:io';
import 'dart:math';

/** Inicia programa */
main() {
  double peso = pedirPeso();
  double altura = pedirAltura();

  double imc = calcularIMC(peso, altura);
  print("Seu IMC é: " + imc.toString());

  verificarIMC(imc);
  print("========= Programa Finalizado ============");
}

/** Solicita valor de peso */
pedirPeso() {
  print("========= Digite seu peso ============");
  
  while (true) {
    try {
      return double.parse(stdin.readLineSync());
    } catch (e) {
      print("=== Por favor! digite um valor válido ===");
    }
  }
}

/** Solicita valor de altura */
pedirAltura() {
  print("======== Digite sua altura ===========");
  while (true) {
    try {
      return double.parse(stdin.readLineSync());
    } catch (e) {
      print("=== Por favor! digite um valor válido ===");
    }
  }
}

/** Calcula valor do IMC proveniente do peso e altura enviado nos parâmetros*/
calcularIMC(double peso, double altura) {
  return peso / pow(altura, 2);
}

/** Verifica faixa de IMC e imprime resultado */
verificarIMC(double imc) {
  if(imc >= 39.9) print("Obesidade grau 3");
  else if(imc > 35) print("Obesidade grau 2");
  else if(imc > 30) print("Obesidade grau 1");
  else if(imc > 25) print("Sobrepeso");
  else if(imc >= 18.5) print("Peso normal");
  else print("Abaixo do peso");
}