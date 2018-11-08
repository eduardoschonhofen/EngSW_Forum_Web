
var database = require('../Models/Database/database.js');

exports.obtemMedico=function obtemMedico(con,nomeMedico)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario where nomeUsuario='"+nomeMedico+"' AND eMedico=true";
  database.database.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

exports.obtemMedicos=function obtemMedicos(con)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario where eMedico=true";
  database.database.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}


exports.insereMedico=function insereMedico(con,nome,nomeUsuario,senha,especialidade)
{
  insert="INSERT INTO Usuario(nome,nomeUsuario,senha,especialidade,mediaAvaliacao,totalDeAvaliacoes,ePaciente,eMedico,eModerador) VALUES('{}','{}','{}','{}',0,0,false,true,false);";
  insert=database.printf(insert,[nome,nomeUsuario,senha,especialidade]);
  database.database.query(insert,function(error,results){
    if(error)
    {

      return console.error(error.message);
    }
})
}

exports.usuarioEMedico = function usuarioEMedico(con,nomeUsuario)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * FROM Usuario WHERE nomeUsuario='"+nomeUsuario+"' and eMedico";
  database.database.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}
