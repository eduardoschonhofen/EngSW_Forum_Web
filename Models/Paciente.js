var Usuario = require('./Usuario.js');

class Paciente extends Usuario
{

  FazPergunta(textoPergunta)
  {
	//Insere a pergunta no banco de dados como pendente para aprovação do moderador
  }
  atribuiNota(notaDeAvaliacao, registro)
  {
	// Atualiza a nota de avaliação daquele registro(pergunta ou resposta) no banco de dados
  }
}
