var database = require('./database.js');
var utilitary = require('./utilitary.js');
exports.obtemMedico=function obtemMedico(nomeMedico)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario where nomeUsuario='"+nomeMedico+"' AND eMedico=true";
  database.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

exports.obtemMedicos=function obtemMedicos()
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario where eMedico=true";
  database.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}


exports.insereMedico=function insereMedico(nome,nomeUsuario,senha,especialidade)
{
  insert="INSERT INTO Usuario(nome,nomeUsuario,senha,especialidade,mediaAvaliacao,totalDeAvaliacoes,ePaciente,eMedico,eModerador) VALUES('{}','{}','{}','{}',0,0,false,true,false);";
  insert=utilitary.printf(insert,[nome,nomeUsuario,senha,especialidade]);
  database.query(insert,function(error,results){
    if(error)
    {

      return console.error(error.message);
    }
})
}

exports.usuarioEMedico = function usuarioEMedico(nomeUsuario)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * FROM Usuario WHERE nomeUsuario='"+nomeUsuario+"' and eMedico";
  database.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}
