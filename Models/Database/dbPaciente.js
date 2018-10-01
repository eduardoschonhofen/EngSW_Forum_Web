function obtemPaciente(con,nomePaciente)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario where ePaciente=true and nomeUsuario='"+nomePaciente+"'";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function obtemPacientes(con)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario WHERE ePaciente=true";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}




exports.obtemPaciente=obtemPaciente;
exports.obtemPacientes=obtemPacientes;
