var database = require('./database.js');

function obtemModerador(con,nomeModerador)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario where nomeUsuario='"+nomeModerador+"' AND eModerador=true";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function obtemModeradores(con)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario where eModerador=true";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function usuarioEModerador(con,nomeUsuario)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * FROM Usuario WHERE nomeUsuario='"+nomeUsuario+"' and eModerador";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function virarModerador(con,username)
{
  insert="UPDATE Usuario SET eModerador=true WHERE nomeUsuario='{}'";
  insert=database.printf(insert,[username]);
  con.query(insert,function(error,results){
    if(error)
    {
      return console.error(error.message);
    }
  });

}


exports.obtemModerador=obtemModerador;
exports.obtemModeradores=obtemModeradores;
exports.usuarioEModerador=usuarioEModerador;
exports.virarModerador=virarModerador;

