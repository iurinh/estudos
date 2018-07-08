import forca
import adivinhacao_loop_for

print("***********************")
print("Bem vindo ! Escolha seu Jogo!")
print("***********************")

print ("2 - Adivinhação")
print ("1 - Forca")

opcao_invalida = True;

while opcao_invalida:
    try:
        opcao = int(input("-> "))

        if  opcao == 1:
            print("Abrindo jogo Adivinhação")
            opcao_invalida = False
            adivinhacao_loop_for.jogar()
        elif opcao == 2:
            print("Abrindo jogo Forca")
            opcao_invalida = False
            forca.jogar()
        else:
            raise ValueError()

    except ValueError:
        print("Escolha somente um das opções disponiveis.")