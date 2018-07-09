

def jogar():
    print("***********************")
    print("Bem vindo ! Fogo da Forca!")
    print("***********************")

    palavra_secreta = "banana".upper()
    letras_acertadads = ["_", "_", "_", "_", "_", "_"]
    enforcou = False
    acertou = False
    erros = 0

    while not enforcou and not acertou:
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

        enforcou = erros == 6
        acertou = "_" not in letras_acertadads

    if acertou:
        print("Parabéns!")
    else:
        print("GAME OVER")

if(__name__ == "__main__"):
    jogar()