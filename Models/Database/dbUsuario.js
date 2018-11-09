var database=require('./database.js');

function obtemUsuario(con,nomeUsuario)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario where nomeUsuario='"+nomeUsuario+"'";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function obtemUsuarios(con)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function obtemUsuariosNaoModeradores(con)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario WHERE not eModerador";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function loginUsuario(con,nomeUsuario,senha)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * FROM Usuario WHERE nomeUsuario='"+nomeUsuario+"' and senha='"+senha+"'";
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

function deletaUsuario(con,username)
{
  insert="DELETE FROM  Usuario WHERE nomeUsuario='{}'";
  insert=database.printf(insert,[username]);
  con.query(insert,function(error,results){
    if(error)
    {
      return console.error(error.message);
    }
  });
}

function atualizaAvaliacao(con,nomeUsuario,nota)
{
  insert="UPDATE  RESPOSTA SET totalDeAvaliacoes=totalDeAvaliacoes+1,somaDeAvaliacoes=somaDeAvaliacoes+{} WHERE nomeUsuario='{}'";
  insert=database.printf(insert,[nota,nomeUsuario]);
  con.query(insert,function(error,results){
    if(error)
    {
      return console.error(error.message);
    }
})

}

exports.deletaUsuario=deletaUsuario;
exports.obtemUsuario=obtemUsuario;
exports.obtemUsuarios=obtemUsuarios;
exports.obtemUsuariosNaoModeradores = obtemUsuariosNaoModeradores;
exports.loginUsuario=loginUsuario;
exports.atualizaAvaliacao=atualizaAvaliacao;
