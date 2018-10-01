function obtemMedico(con,nomeMedico)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario where nomeUsuario='"+nomeMedico+"' AND eMedico=true";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function obtemTodosMedicos(con)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario where eMedico=true";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}



exports.obtemMedico=obtemMedico;
exports.obtemTodosMedicos=obtemTodosMedicos;

