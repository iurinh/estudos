import random

def jogar():
    max_tentativas = 6
    erros = 0

    abertura()
    palavra_secreta = carrega_palavra_secreta()
    letras_acertadas = inicializa_letras_acertadas(palavra_secreta)

    while True:
        chute = pede_chute()

        if chute in palavra_secreta:
            marca_chute_correto(chute, letras_acertadas, palavra_secreta)
        else:
            erros += 1
            mostra_msg_erro(erros, max_tentativas)

        if max_tentativas == erros:
            break
        if acertou(letras_acertadas):
            break

    if acertou(letras_acertadas):
        print("Parabéns!")
    else:
        print("GAME OVER")

def abertura():
    print("***********************")
    print("Bem vindo ! Fogo da Forca!")
    print("***********************")


def carrega_palavra_secreta():
    palavras = []
    arquivo = open("palavras.txt", "r")

    for linha in arquivo:
        palavras.append(linha.strip())

    arquivo.close()

    linha_escolhida = random.randrange(0, len(palavras))
    palavra_secreta = palavras[linha_escolhida].upper()

    return palavra_secreta

def inicializa_letras_acertadas(palavra):
    return ["_" for letra in palavra]

def acertou(letras):
    return "_" not in letras

def pede_chute():
    return input("Qual letra?").strip().upper()

def marca_chute_correto(chute, letras_acertadas, palavra_secreta):
    idx = 0
    for letra in palavra_secreta:
        if chute == letra:
            letras_acertadas[idx] = chute

        idx += 1

    print("Quantidade de letras encontradas: ", palavra_secreta.count(chute))
    print(letras_acertadas)

def mostra_msg_erro(erros, max_tentativas):
    if max_tentativas != erros:
        print("Ops, você errou! Faltam {} tentativas.".format(max_tentativas - erros))

if(__name__ == "__main__"):
    jogar()

