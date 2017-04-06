create database payfast;

use payfast;

CREATE TABLE pagamentos (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  forma_pagamento varchar(255) DEFAULT NULL,
  moeda text,
  status text,
  data date,
  descricao text,
  valor decimal(10,2) DEFAULT NULL
);
