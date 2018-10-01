function obtemRespostaParaPergunta(con,tituloPergunta)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Resposta where perguntaTitulo='"+tituloPergunta+"'";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function obtemRespostas(con)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Pergunta INNER JOIN Resposta ON Pergunta.titulo=Resposta.perguntaTitulo"
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

exports.obtemRespostaParaPergunta=obtemRespostaParaPergunta;
exports.obtemRespostas=obtemRespostas;

