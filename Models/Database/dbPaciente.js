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

function inserePaciente(con,nome,nomeUsuario,senha)
{
  insert="INSERT INTO Usuario(nome,nomeUsuario,senha,mediaAvaliacao,totalDeAvaliacoes,ePaciente,eMedico,eModerador) VALUES('+nome+','+nomeUsuario+','+senha+',0,0,false,true,true);";

  con.query(insert,function(error,results){
    if(error)
    {
      return console.error(error.message);
    }
})
}




exports.obtemPaciente=obtemPaciente;
exports.obtemPacientes=obtemPacientes;
exports.inserePaciente=inserePaciente;
