var database = require('./database.js');

function obtemRespostaParaPerguntaPorId(con,idPergunta)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from resposta INNER JOIN Usuario ON Resposta.nomeUsuario=Usuario.nomeUsuario where pergunta_id="+idPergunta;
  database.database.query(busca,function(error,results,fields){
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
  database.database.query(busca,function(error,results,fields){
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
  database.database.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function insereResposta(con,nomeUsuario,texto,pergunta_id)
{
  insert="INSERT INTO Resposta(nomeUsuario,pergunta_id,texto,data,mediaAvaliacao,totalDeAvaliacoes) VALUES('{}','{}','{}',now(),0,0)";
  insert=database.printf(insert,[nomeUsuario,pergunta_id,texto]);
  database.database.query(insert,function(error,results){
    if(error)
    {
      return console.error(error.message);
    }
})
}

function atualizaAvaliacao(con,pergunta_id,nota)
{
  insert="UPDATE  RESPOSTA SET totalDeAvaliacoes=totalDeAvaliacoes+1,somaDeAvaliacoes=somaDeAvaliacoes+{} WHERE resposta_id={}";
  insert=database.printf(insert,[nota,pergunta_id]);
  database.database.query(insert,function(error,results){
    if(error)
    {
      return console.error(error.message);
    }
})

}

exports.obtemRespostaParaPerguntaPorId=obtemRespostaParaPerguntaPorId;
exports.obtemRespostas=obtemRespostas;
exports.insereResposta=insereResposta;
exports.atualizaAvaliacao=atualizaAvaliacao;
