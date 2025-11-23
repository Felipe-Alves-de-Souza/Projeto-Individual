CREATE DATABASE Demon;
USE Demon;

CREATE TABLE Usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(45) NOT NULL,
    Email VARCHAR(45) NOT NULL UNIQUE,
    Senha VARCHAR(45) NOT NULL
);

CREATE TABLE Pergunta_avaliativa (
    id_pergunta INT AUTO_INCREMENT PRIMARY KEY,
    gostou_anime TINYINT(1) NOT NULL, 
    comentario VARCHAR(200),     
    data_resposta DATETIME DEFAULT CURRENT_TIMESTAMP, 
    Usuario_idUsuario INT NOT NULL,    
    FOREIGN KEY (Usuario_idUsuario) REFERENCES Usuario(idUsuario)
);

ALTER TABLE Pergunta_avaliativa
ADD CONSTRAINT unique_usuario_unico UNIQUE (Usuario_idUsuario);