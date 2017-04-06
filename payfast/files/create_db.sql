create database payfast;

use payfast;

CREATE TABLE pagamentos (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  forma_de_pagamento varchar(255) NOT NULL,
  moeda varchar(3) NOT NULL,
  status varchar(255) NOT NULL,
  data date DEFAULT NULL,
  descricao text DEFAULT NULL,
  valor decimal(10,2) NOT NULL
);
