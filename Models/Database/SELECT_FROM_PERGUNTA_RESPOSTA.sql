SELECT Pergunta.titulo, Pergunta.nomeUsuario, Pergunta.texto, Pergunta.data, Medico.nome, Medico.especialidade, Resposta.perguntaTitulo, Resposta.texto, Resposta.data
FROM Pergunta
INNER JOIN Resposta ON Pergunta.titulo=Resposta.perguntaTitulo
INNER JOIN Usuario AS Medico ON Medico.nomeUsuario=Resposta.nomeUsuario;
