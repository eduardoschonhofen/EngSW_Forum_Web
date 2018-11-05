function obtemPerguntaId(con,Pergunta)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Pergunta where titulo="+Pergunta;
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
  busca="Select * from Pergunta INNER JOIN Usuario ON Pergunta.nomeUsuario=Usuario.nomeUsuario";
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


function inserePergunta(con,nomeUsuario,texto,titulo)
{
  insert="INSERT INTO Pergunta(nomeUsuario,titulo,texto,data,mediaAvaliacao,totalDeAvaliacoes) VALUES('{}','{}','{}',now(),0,0)";
  insert=printf(insert,[nomeUsuario,titulo,texto]);
  con.query(insert,function(error,results){
    if(error)
    {
      return console.error(error.message);
    }
})
}

exports.inserePergunta=inserePergunta;

exports.obtemPerguntaTitulo=obtemPerguntaTitulo;
exports.obtemPerguntaUsuario=obtemPerguntaUsuario;
exports.obtemPerguntas=obtemPerguntas;
