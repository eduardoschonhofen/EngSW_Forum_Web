var database = require('./database.js');
var utilitary = require('./utilitary.js');
function obtemModerador(nomeModerador)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario where nomeUsuario='"+nomeModerador+"' AND eModerador=true";
  database.query(busca,function(error,results,fields){
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
  database.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function usuarioEModerador(nomeUsuario)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * FROM Usuario WHERE nomeUsuario='"+nomeUsuario+"' and eModerador";
  database.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function virarModerador(username)
{
  insert="UPDATE Usuario SET eModerador=true WHERE nomeUsuario='{}'";
  insert=utilitary.printf(insert,[username]);
  database.query(insert,function(error,results){
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
