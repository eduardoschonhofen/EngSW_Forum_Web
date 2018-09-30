
var Pergunta = require('./Pergunta.js');
var Resposta = require('./Resposta.js');

class Topico
{
  constructor(pergunta)
  {
	  this.pergunta = pergunta;
	  this.listaDeRespostas = [];
  }
  
  setPergunta(pergunta)
  {
	  this.pergunta = pergunta;
  }
  
  getPergunta()
  {
	  return this.pergunta;
  }
  
  adicionaResposta(resposta)
  {
	  this.listaDeRespostas.push(resposta);
  }
  
  getListaDeRespostas()
  {
	  return this.listaDeRespostas;
  }
  
  definePergunta(pergunta)
  {
	  setPergunta(pergunta);
  }
  
  insereResposta(resposta)
  {
	  adicionaResposta(resposta);
  }
  
}
