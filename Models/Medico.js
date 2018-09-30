//import Usuario from './Usuario';

var Usuario = require('./Usuario.js');

class Medico extends Usuario
{
  constructor(nome,senha,mediaAvaliacao)
  {
//this.nome=nome
this.senha=senha
this.mediaAvaliacao=mediaAvaliacao;
this.ePaciente=false;
this.eMedico=true;
this.eModerador=false;
  }

  respondePergunta()
  {


  }
}

module.exports=Medico;
