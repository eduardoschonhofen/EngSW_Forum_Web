class Usuario
{
  constructor(nome,senha,mediaAvaliacao,ePaciente,eMedico,eModerador)
  {
    this.nome=nome;
    this.senha=senha;
    this.mediaAvaliacao=mediaAvaliacao;
    this.ePaciente=ePaciente;
    this.eMedico=eMedico;
    this.eModerador=eModerador;
  }

  setNome(nome)
  {
    this.nome=nome;
  }
  setSenha(senha)
  {
    this.senha=senha;
  }
  setNome(mediaAvaliacao)
  {
    this.mediaAvaliacao=mediaAvaliacao;
  }
  setSomaDeAvaliacoes(somaDeAvaliacoes)
  {
    this.somaDeAvaliacoes=somaDeAvaliacoes;
  }
  setTotalDeAvaliacoes(totalDeAvaliacoes)
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
