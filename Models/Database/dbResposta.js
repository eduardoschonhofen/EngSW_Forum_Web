function obtemRespostaParaPerguntaPorId(con,idPergunta)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from resposta INNER JOIN Usuario ON Resposta.nomeUsuario=Usuario.nomeUsuario where pergunta_id="+idPergunta;
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}
function obtemRespostaParaPerguntaPorTitulo(con,tituloPergunta)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from resposta where perguntaTitulo='"+tituloPergunta+"'";
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
  busca="Select * from pergunta INNER JOIN Resposta ON Pergunta.titulo=Resposta.perguntaTitulo"
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function printf(str, params) {
var i;

  for (i = 0; i < params.length; i++) {
    str = str.replace("{}", params[i]);
  }

  return str;
}

function insereResposta(con,nomeUsuario,texto,pergunta_id)
{
  insert="INSERT INTO Resposta(nomeUsuario,pergunta_id,texto,data,mediaAvaliacao,totalDeAvaliacoes) VALUES('{}','{}','{}',now(),0,0)";
  insert=printf(insert,[nomeUsuario,pergunta_id,texto]);
  con.query(insert,function(error,results){
    if(error)
    {
      return console.error(error.message);
    }
})
}

exports.obtemRespostaParaPerguntaPorId=obtemRespostaParaPerguntaPorId;
exports.obtemRespostas=obtemRespostas;
