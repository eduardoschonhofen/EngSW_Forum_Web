function obtemPaciente(con,nomePaciente)
{
  return new Promise(function(resolve,reject)
{
  con.query("Select Nome from Usuario where nomeUsuario="+nomePaciente,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}
