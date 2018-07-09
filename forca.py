def jogar():

    print("***********************")
    print("Bem vindo ! Fogo da Forca!")
    print("***********************")

    palavra_secreta = "banana".upper()
    letras_acertadads = ["_", "_", "_", "_", "_", "_"]
    max_tentativas = 6
    erros = 0

    def acertou():
        return "_" not in letras_acertadads

    while True:
        chute = input("Qual letra?").strip().upper()

        if chute in palavra_secreta:
            idx = 0
            for letra in palavra_secreta:
                if chute == letra:
                    letras_acertadads[idx] = chute

                idx += 1

            print("Quantidade de letras encontradas: ", palavra_secreta.count(chute))
            print(letras_acertadads)
        else:
            erros += 1
            if max_tentativas != erros:
                print("Ops, você errou! Faltam {} tentativas.".format(max_tentativas - erros))

        if max_tentativas == erros:
            break
        if acertou():
            break

    if acertou():
        print("Parabéns!")
    else:
        print("GAME OVER")

if(__name__ == "__main__"):
    jogar()