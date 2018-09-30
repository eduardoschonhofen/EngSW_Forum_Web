class Usuario
{
  constructor(nome,idade,sexo,senha,mediaAvaliacao,,ePaciente,eMedico,eModerador)
  {
    this.nome=nome;
    this.idade=idade;
    this.sexo=sexo;
    this.senha=senha;
    this.mediaAvaliacao=mediaAvaliacao;
    this.somaDeAvaliacoes=somaDeAvaliacoes;
    this.ePaciente=ePaciente;
    this.eMedico=eMedico;
    this.eModerador=eModerador;
  }

  setNome(nome)
  {
    this.nome=nome;
  }
  getNome()
  {
	return this.nome;
  }
  setIdade(idade)
  {
    this.idade=idade;
  }
  getIdade()
  {
	return this.idade;
  }
  setSexo(sexo)
  {
    this.sexo=sexo;
  }
  getSexo()
  {
	return this.sexo;
  }
  setSenha(senha)
  {
    this.senha=senha;
  }
  getSenha()
  {
	return this.senha;
  }
  setMediaAvaliacao(mediaAvaliacao)
  {
    this.mediaAvaliacao=mediaAvaliacao;
  } 
  getMediaAvaliacao()
  {
    return this.mediaAvaliacao;
  }
  setSomaDeAvaliacoes(somaDeAvaliacoes)
  {
    this.somaDeAvaliacoes=somaDeAvaliacoes;
  }
  getSomaDeAvaliacoes()
  {
	 return this.somaDeAvaliacoes; 
  }


  setePaciente(ePaciente)
  {
    this.ePaciente=ePaciente;
  }
  getePaciente()
  {
	  return this.ePaciente;
  }
  seteMedico(eMedico)
  {
    this.eMedico=eMedico;
  }
  geteMedico()
  {
	  return this.eMedico;
  }
  setePaciente(eModerador)
  {
    this.eModerador=eModerador;
  }
  geteModerador()
  {
	  return this.eModerador;
  }
  
  realizarLogin(nomeDeUsuario, senha)
  {
	  if(//consistente no banco de dados)
	  {
		  // atualiza os dados do usuário
	  }
	  else
	  {
		  console.log('Usuário Inválido'); // mensagem de erro
	  }
  }
  
}

module.exports=Usuario;
