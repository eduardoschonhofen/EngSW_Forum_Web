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

function loginUsuario(con,nomeUsuario,senha)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * FROM Usuario WHERE nomeUsuario='"+nomeUsuario+"' and senha='"+senha+"'";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    console.log(busca);
    resolve(results);
});
});
}




exports.obtemUsuario=obtemUsuario;
exports.obtemUsuarios=obtemUsuarios;
exports.loginUsuario=loginUsuario;
