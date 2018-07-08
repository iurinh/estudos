
nome = "Emy"
numero = 3

def mudarVariavel(nome):
    nome = "IURI"
    print("Dentro: ", nome, id(nome))

print("Fora Antes ", nome, id(nome))
mudarVariavel(nome)
print("Fora Depois", nome, id(nome))

#print("Fora Antes ", numero)
#mudarVariavel(numero)
#print("Fora Depois", numero)

print("----------------------------------------")
print("----------------------------------------")
print("----------------------------------------")

class Pessoa:
    def __init__(self, nome, idade):
        self.__nome = nome
        self.__idade = idade

    @property
    def nome(self):
        return self.__nome

    @property
    def idade(self):
        return self.__idade

    @idade.setter
    def idade(self, idade):
        if(type(idade) is not int):
            raise ValueError ("Idade aceita somente numero inteiro")
        self.__idade = idade;

person = Pessoa("Iuri", 29);
print(person.nome, "-", person.idade, "-", id(person))
print("ID IDADE-", id(person.idade))

def mudaObj(pes):
    pes.idade = 30
    print(person.nome, "-", person.idade, "-", id(person))
    print("ID IDADE-", id(person.idade))

mudaObj(person)
print(person.nome, "-", person.idade, "-", id(person))
print("ID IDADE-", id(person.idade))


print("----------------------------------------")
print("----------------------------------------")
print("----------------------------------------")

nome1 = "IURI"
nome2 = nome1
print(nome1, "-", nome2)

nome1 = "IURI"
nome2 = nome1
nome2 = "Emy"
print(nome1, "-", nome2)

nome1 = "IURI"
nome2 = nome1
nome1 = "Emy"
print(nome1, "-", nome2)