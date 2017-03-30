CRATE TABLE alunos (id integer auto_increment primary key, nome varchar(255), data_nascimento date, id_curso integer, )

CREATE TABLE cursos (id integer auto_increment primary key, nome varchar(255))

CRATE TABLE notas (id integer auto_increment primary key, nota decimal(3,2), id_aluno integer)

CREATE TABLE habilidades (id integer auto_increment primary key, nome varchar(255), nivel varchar(255), id_aluno integer)

