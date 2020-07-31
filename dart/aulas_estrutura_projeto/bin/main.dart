import 'package:aulas_estrutura_projeto/aulas-estrutural/carrinho_compras.dart';
import 'package:aulas_estrutura_projeto/aulas-estrutural/idade.dart';
import 'package:aulas_estrutura_projeto/aulas-estrutural/imc.dart';
import 'package:aulas_estrutura_projeto/aulas-estrutural/maps.dart';

import '../lib/aulas_estrutura_projeto.dart';

void main(List<String> arguments) {
  
  switch (arguments[0]) {
    case 'multiplicar':
      calculate(int.parse(arguments[1]), int.parse(arguments[2]));
      break;
    case 'idade':
      calcularIdade();
      break;
    case 'compras':
      compras();
      break;
    case 'imc':
      imc();
      break;
    case 'cadastrar':
      cadastrarPessoa();
      break;
    default:
      print('=== Comando nao encontrado ===');
  }

}
