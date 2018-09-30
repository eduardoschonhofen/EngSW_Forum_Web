class Registro
{
  constructor(texto, mediaAvaliacao, somaDeAvaliacao)
  {
    this.texto = texto;
    this.mediaAvaliacao = mediaAvaliacao;
    this.somaDeAvaliacao = somaDeAvaliacao;
  }
  
  setTexto(texto)
  {
	  this.texto = texto;
  }
  
  getTexto()
  {
	  return this.texto;
  }
  
  setMediaAvaliacao(media)
  {
	  this.mediaAvaliacao = mediaAvaliacao;
  }
  
  getMediaAvaliacao()
  {
	  return mediaAvaliacao;
  }
  
  setSomaDeAvaliacao(novaAvaliacao)
  {
	  this.somaDeAvaliacao = novaAvaliacao;
  }
  
  getSomaDeAvaliacao()
  {
	  return this.somaDeAvaliacao;
  }
  
}
