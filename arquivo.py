arquivo = open("palavras.txt", "w")

arquivo.write("banana\n")
arquivo.write("melancia\n")
arquivo.write("morango\n")
arquivo.write("maçã\n")

arquivo.close()


arquivo = open("palavras.txt", "r")
for linha in arquivo:
    print(linha.strip())

arquivo.close()