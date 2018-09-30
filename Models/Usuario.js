class Usuario
{
  constructor(nome,senha,mediaAvaliacao,ePaciente,eMedico,eModerador)
  {
this.nome=nome
this.senha=senha
this.mediaAvaliacao=mediaAvaliacao;
this.ePaciente=ePaciente;
this.eMedico=eMedico;
this.eModerador=eModerador;
  }

  setnome(nome)
  {
    this.nome=nome;
  }
  setsenha(senha)
  {
    this.senha=senha;
  }
  setnome(mediaAvaliacao)
  {
    this.mediaAvaliacao=mediaAvaliacao;
  }
  setsomaDeAvaliacoes(somaDeAvaliacoes)
  {
    this.somaDeAvaliacoes=somaDeAvaliacoes;
  }
  settotalDeAvaliacoes(totalDeAvaliacoes)
  {
    this.totalDeAvaliacoes=somaDeAvaliacoes;
  }


  setePaciente(ePaciente)
  {
    this.ePaciente=ePaciente;
  }
  seteMedico(eMedico)
  {
    this.eMedico=eMedico;
  }
  setePaciente(eModerador)
  {
    this.eModerador=eModerador;
  }
}

module.exports=Usuario;
