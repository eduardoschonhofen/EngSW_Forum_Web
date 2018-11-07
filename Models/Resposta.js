
var Registro = require('./Registro.js');

class Resposta extends Registro
{
  constructor(nomeMedico)
  {
	  this.nomeMedico = nomeMedico;
  }

  setNomePaciente(nomeMedico)
  {
	  this.nomeMedico = nomeMedico;
  }

  getNomePaciente()
  {
	  return this.nomeMedico;
  }

}

module.exports=Resposta();
