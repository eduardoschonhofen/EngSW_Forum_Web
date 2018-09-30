
var Usuario = require('./Usuario.js');

class Medico extends Usuario
{

  constructor(especialidade)
  {
	  this.especialidade = especialidade;
  }
  
  setEspecialidade(especialidade)
  {
	  this.especialidade = especialidade;
  }
  
  getEspecialidade()
  {
	  return this.especialidade;
  }

  respondePergunta(textoResposta, pergunta)
  {
	// adiciona uma resposta para uma pergunta
  }
  
  atribuiNota(notaDeAvaliacao, registro)
  {
	// Atualiza a nota de avaliação daquele registro(pergunta ou resposta) no banco de dados
  }
  
}
