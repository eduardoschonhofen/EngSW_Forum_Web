function obtemPerguntaTitulo(con,tituloPergunta)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Pergunta where titulo='"+tituloPergunta+"'";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function obtemPerguntaUsuario(con,nomeUsuario)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Pergunta where nomeUsuario='"+nomeUsuario+"'";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function obtemPerguntas(con)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Pergunta";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}


exports.obtemPerguntaTitulo=obtemPerguntaTitulo;
exports.obtemPerguntaUsuario=obtemPerguntaUsuario;
exports.obtemPerguntas=obtemPerguntas;

