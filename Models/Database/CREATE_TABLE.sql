CREATE TABLE IF NOT EXISTS Usuario(
nomeUsuario VARCHAR(255) NOT NULL,
PRIMARY KEY (nomeUsuario),
nome varchar(255) NOT NULL,
idade INT,
sexo VARCHAR(2),
senha VARCHAR(255),
especialidade VARCHAR(255),
mediaAvaliacao FLOAT,
somaDeAvaliacoes FLOAT,
totalDeAvaliacoes INT,
ePaciente BOOLEAN,
eMedico BOOLEAN,
eModerador BOOLEAN
);


CREATE TABLE IF NOT EXISTS Pergunta(
pergunta_id INTEGER AUTO_INCREMENT,
PRIMARY KEY(pergunta_id),
titulo varchar(255),
nomeUsuario VARCHAR(255) NOT NULL,
FOREIGN KEY(nomeUsuario) REFERENCES Usuario(nomeUsuario)
ON DELETE CASCADE,
texto TEXT NOT NULL,
data DATE,
mediaAvaliacao FLOAT,
somaDeAvaliacoes FLOAT,
totalDeAvaliacoes INT,
aprovada BOOLEAN
);
CREATE TABLE IF NOT EXISTS Resposta(
resposta_id INTEGER AUTO_INCREMENT,
PRIMARY KEY(resposta_id),
nomeUsuario VARCHAR(255) NOT NULL,
FOREIGN KEY(nomeUsuario) REFERENCES Usuario(nomeUsuario)
ON DELETE CASCADE,
pergunta_id INTEGER,
FOREIGN KEY(pergunta_id) REFERENCES Pergunta(pergunta_id)
ON DELETE CASCADE,
texto TEXT NOT NULL,
data DATE,
mediaAvaliacao FLOAT,
somaDeAvaliacoes FLOAT,
totalDeAvaliacoes INT
);
