function obtemPaciente(con,nomePaciente)
{
  return new Promise(function(resolve,reject)
{
  busca="Select Nome from Usuario where nomeUsuario='"+nomePaciente+"'";
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
