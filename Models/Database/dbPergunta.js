function obtemPerguntaId(con,Pergunta)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from pergunta where pergunta_id="+Pergunta;
  console.log(busca);
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
  busca="Select * from pergunta where nomeUsuario='"+nomeUsuario+"'";
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

function obtemPerguntasPendentes(con)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Pergunta INNER JOIN Usuario ON Pergunta.nomeUsuario=Usuario.nomeUsuario WHERE aprovada=false";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}
function obtemPerguntasAceitas(con)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Pergunta INNER JOIN Usuario ON Pergunta.nomeUsuario=Usuario.nomeUsuario WHERE aprovada=true";
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

exports.obtemPerguntaId=obtemPerguntaId;
exports.obtemPerguntaUsuario=obtemPerguntaUsuario;
exports.obtemPerguntas=obtemPerguntas;
exports.obtemPerguntasPendentes=obtemPerguntasPendentes;
exports.obtemPerguntasAceitas=obtemPerguntasAceitas;
