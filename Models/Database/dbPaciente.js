var database = require('./database.js');
var utilitary = require('./utilitary.js');
function obtemPaciente(nomePaciente)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario where ePaciente=true and nomeUsuario='"+nomePaciente+"'";
  database.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function obtemPacientes()
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario WHERE ePaciente=true";
  database.query(busca,function(error,results,fields){
    if(error)
    {

      return console.error(error.message);
    }
    resolve(results);
});
});
}


function inserePaciente(nome,nomeUsuario,senha)
{
  insert="INSERT INTO Usuario(nome,nomeUsuario,senha,mediaAvaliacao,totalDeAvaliacoes,ePaciente,eMedico,eModerador) VALUES('{}','{}','{}',0,0,true,false,false);";
  insert=utilitary.printf(insert,[nome,nomeUsuario,senha]);
  database.query(insert,function(error,results){
    if(error)
    {

      return console.error(error.message);
    }
})
}

function usuarioEPaciente(nomeUsuario)
{
  return new Promise(function(resolve,reject)
{
  console.log(database.database);
  busca="Select * FROM Usuario WHERE nomeUsuario='"+nomeUsuario+"' and ePaciente";
  database.query(busca,function(error,results,fields){
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
