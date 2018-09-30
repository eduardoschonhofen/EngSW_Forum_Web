var Usuario = require('./Usuario');

class Moderador extends Usuario
{

  aprovaPergunta(textoPergunta)
  {
	// verifica se a pergunta é consistente e pode aprovar, permanecendo no banco de dados ou reprovar removendo do banco de dados
	// chama o método abreTopico()
  }

  finalizaTopico(topico)
  {
    // fecha o tópico não podendo mais alterá-lo
  }
}

