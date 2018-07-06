print("***********************")
print("Bem vindo ! Adivinhação é o Jogo!")
print("***********************")

total_tentativas = 3;
tentativas = 1
game_over = total_tentativas == tentativas+1

numero_secreto = 42

chute = 0

acertou = chute == numero_secreto

for tentativas in range(1, total_tentativas+1):
    try:
        chute = input("Digite o numero ({0}/{1}): ".format(tentativas, total_tentativas))
        chute = float(chute);

        if chute < 1 or chute > 99:
            print("Digite apenas numeros entre 0 e 100")
            continue

        acertou = chute == numero_secreto
        maior = chute > numero_secreto

        if acertou:
            print("Acertou ");
            break;
        elif maior:
                print("Seu chute foi maior")
        else:
                print("Seu chute foi menor")

    except ValueError:
        print("Digite somente numeros")
else:
    if not acertou and (tentativas == total_tentativas):
        print("Você não conseguiu - GAME OVER")