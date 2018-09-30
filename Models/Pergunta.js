
var Registro = require('./Registro.js');

class Pergunta extends Registro
{
  constructor(nomePaciente)
  {
	  this.nomePaciente = nomePaciente;
  }
  
  setNomePaciente(nomePaciente)
  {
	  this.nomePaciente = nomePaciente;
  }
  
  getNomePaciente()
  {
	  return this.nomePaciente;
  }
  
  geraNotificacao()
  {
	  // do something
  }
  
}

module.exports=Pergunta;
