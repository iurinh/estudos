

def jogar():
    print("***********************")
    print("Bem vindo ! Fogo da Forca!")
    print("***********************")

    palavra_secreta = "banana"
    enforcou = False
    acertou = False

    while not enforcou and not acertou:
        chute = input("Qual letra?").strip()

        idx = 0
        for  letra in palavra_secreta:
            if chute.upper() == letra.upper():
                print(letra, idx)

            idx = idx + 1

        print("Jogando")

if(__name__ == "__main__"):
    jogar()