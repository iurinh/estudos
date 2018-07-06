print("***********************")
print("Bem vindo ! Adivinhação é o Jogo!")
print("***********************")

numero_secreto = 42

chute = 0

acertou = chute == numero_secreto

while not acertou:
    try:
        chute = input("Digite o numero: ")
        chute = float(chute);

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