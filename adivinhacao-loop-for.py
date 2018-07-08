import random
from urllib.error import HTTPError

print("***********************")
print("Bem vindo ! Adivinhação é o Jogo!")
print("***********************")

pontos = 1000
nivel = 0
while nivel == 0:
    try:
        print("Qual o nível de dificuldade?")
        print("1 - Fácil")
        print("2 - Mádio")
        print("3 - Difícil")
        nivel = int(input("-> "))

        if nivel<1 or nivel>3:
            print("Digite apenas um dos níveis apresentados.")
            nível = 0;

        if nivel == 1:
            total_tentativas = 20
        elif nivel == 2:
            total_tentativas = 10
        else:
            total_tentativas = 5

    except ValueError:
        print("Digite apenas um dos níveis apresentados.")
        nível = 0;

tentativas = 1
game_over = total_tentativas == tentativas+1
numero_secreto = int(random.randrange(100))
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
            print("Acertou! Pontos: " + pontos);

            break;
        elif maior:
                print("Seu chute foi maior")
        else:
                print("Seu chute foi menor")

        pontos = pontos - abs(numero_secreto - chute)

    except ValueError:
        print("Digite somente numeros")
        pontos = pontos - 100
        print("Pontos: {}".format(pontos))
else:
    if not acertou and (tentativas == total_tentativas):
        print("Você não conseguiu - GAME OVER")
        print("O número era: {}".format(numero_secreto))