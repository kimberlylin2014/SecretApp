DROP DATABASE IF EXISTS secrets;

CREATE DATABASE secrets;

USE secrets;

CREATE TABLE users (
  user_id int AUTO_INCREMENT,
  name VARCHAR(25) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY(user_id)
);

CREATE TABLE accounts (
  account_id int AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL UNIQUE,
  account_name VARCHAR(25) NOT NULL,
  account_password VARCHAR(100) NOT NULL,
  user_id int NOT NULL,
  PRIMARY KEY(account_id),
  FOREIGN KEY(user_id) REFERENCES users(user_id)
);

INSERT INTO accounts(email, account_name, account_password, user_id) VALUES(
    -> 'k.dev@gmail.com', 'facebook', 'abc', 1);

    INSERT INTO accounts(email, account_name, account_password, user_id) VALUES('k.youtube@gmail.com', 'youtube', 'wow', 1);