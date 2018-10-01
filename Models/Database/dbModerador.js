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

function obtemTodosModeradores(con)
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



exports.obtemModerador=obtemModerador;
exports.obtemTodosModeradores=obtemTodosModeradores;

