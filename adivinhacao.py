print("***********************")
print("Bem vindo ! Adivinhação é o Jogo!")
print("***********************")

total_tentativas = 3;
tentativas = 1
game_over = total_tentativas == tentativas+1

numero_secreto = 42

chute = 0

acertou = chute == numero_secreto

while not acertou and not game_over:
    try:
        chute = input("Digite o numero ({0}/{1}): ".format(tentativas, total_tentativas))
        chute = float(chute);

        tentativas = tentativas + 1
        game_over = (total_tentativas+1 == tentativas)

        acertou = chute == numero_secreto
        maior = chute > numero_secreto

        if acertou:
            print("Acertou ")
        elif maior:
                print("Seu chute foi maior")
        else:
                print("Seu chute foi menor")

    except ValueError:
        print("Digite somente numeros")
else:
    if not acertou and game_over:
        print("Você não conseguiu - GAME OVER")