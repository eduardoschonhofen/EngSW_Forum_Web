var database=require('./database.js');

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
  insert="INSERT INTO Usuario(nome,nomeUsuario,senha,mediaAvaliacao,totalDeAvaliacoes,ePaciente,eMedico,eModerador) VALUES('{}','{}','{}',0,0,true,false,false);";
  insert=database.printf(insert,[nome,nomeUsuario,senha]);
  con.query(insert,function(error,results){
    if(error)
    {

      return console.error(error.message);
    }
})
}

function usuarioEPaciente(con,nomeUsuario)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * FROM Usuario WHERE nomeUsuario='"+nomeUsuario+"' and ePaciente";
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
exports.inserePaciente=inserePaciente;
exports.usuarioEPaciente=usuarioEPaciente;
