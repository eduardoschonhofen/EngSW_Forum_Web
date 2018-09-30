CREATE TABLE IF NOT EXISTS Usuario(
usuario_id INT AUTO_INCREMENT,
PRIMARY KEY (usuario_id),
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
usuario_id INT NOT NULL,
FOREIGN KEY(usuario_id) REFERENCES Usuario(usuario_id),
texto TEXT NOT NULL,
data DATE,
mediaAvaliacao FLOAT,
somaDeAvaliacoes FLOAT,
totalDeAvaliacoes INT
);
CREATE TABLE IF NOT EXISTS Resposta(
resposta_id INTEGER AUTO_INCREMENT,
PRIMARY KEY(resposta_id),
medico_id INT NOT NULL,
FOREIGN KEY(medico_id) REFERENCES Usuario(usuario_id),
pergunta_id INTEGER NOT NULL,
FOREIGN KEY(pergunta_id) REFERENCES Pergunta(pergunta_id),
texto TEXT NOT NULL,
data DATE,
mediaAvaliacao FLOAT,
somaDeAvaliacoes FLOAT,
totalDeAvaliacoes INT
);
