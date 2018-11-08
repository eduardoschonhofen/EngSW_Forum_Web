var database = require('./database.js');
var utilitary = require('./utilitary.js');
function obtemPerguntaId(con,Pergunta)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from pergunta where pergunta_id="+Pergunta;
  console.log(busca);
  database.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

exports.buscaPergunta=function buscaPergunta(con,texto)
{
  busca="select * from Pergunta where aprovada=true and  texto  like '%{}%'";
  busca=utilitary.printf(busca,[texto]);
  console.log(busca);
  database.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
}


function obtemPerguntaUsuario(con,nomeUsuario)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from pergunta where nomeUsuario='"+nomeUsuario+"'";
  database.query(busca,function(error,results,fields){
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
  database.query(busca,function(error,results,fields){
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
  database.query(busca,function(error,results,fields){
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
  database.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}





function inserePergunta(con,nomeUsuario,texto,titulo)
{
  insert="INSERT INTO Pergunta(nomeUsuario,titulo,texto,data,mediaAvaliacao,totalDeAvaliacoes,aprovada) VALUES('{}','{}','{}',now(),0,0,false)";
  insert=utilitary.printf(insert,[nomeUsuario,titulo,texto]);
  database.query(insert,function(error,results){
    if(error)
    {
      return console.error(error.message);
    }
})
}

function aprovaPergunta(con,pergunta_id)
{

  insert="UPDATE  PERGUNTA SET aprovada=true WHERE pergunta_id={}";
  insert=utilitary.printf(insert,[pergunta_id]);
  database.query(insert,function(error,results){
    if(error)
    {
      return console.error(error.message);
    }
  });
}

function deletaPergunta(con,pergunta_id)
{
  insert="DELETE FROM  PERGUNTA WHERE pergunta_id={}";
  insert=utilitary.printf(insert,[pergunta_id]);
  database.query(insert,function(error,results){
    if(error)
    {
      return console.error(error.message);
    }
  });

}
exports.deletaPergunta=deletaPergunta;
exports.inserePergunta=inserePergunta;
exports.obtemPerguntaId=obtemPerguntaId;
exports.obtemPerguntaUsuario=obtemPerguntaUsuario;
exports.obtemPerguntas=obtemPerguntas;
exports.obtemPerguntasPendentes=obtemPerguntasPendentes;
exports.obtemPerguntasAceitas=obtemPerguntasAceitas;
exports.aprovaPergunta=aprovaPergunta;
