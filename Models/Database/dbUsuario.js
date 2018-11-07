function obtemUsuario(con,nomeUsuario)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario where nomeUsuario='"+nomeUsuario+"'";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function obtemUsuarios(con)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * from Usuario";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}

function loginUsuario(con,nomeUsuario,senha)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * FROM Usuario WHERE nomeUsuario='"+nomeUsuario+"' and senha='"+senha+"'";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    console.log(busca);
    resolve(results);
});
});
}

function usuarioEMedico(con,nomeUsuario)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * FROM Usuario WHERE nomeUsuario='"+nomeUsuario+"' and eMedico";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
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

function usuarioEModerador(con,nomeUsuario)
{
  return new Promise(function(resolve,reject)
{
  busca="Select * FROM Usuario WHERE nomeUsuario='"+nomeUsuario+"' and eModerador";
  con.query(busca,function(error,results,fields){
    if(error)
    {
      return console.error(error.message);
    }
    resolve(results);
});
});
}
function deletaUsuario(con,username)
{
  insert="DELETE FROM  Usuario WHERE nomeUsuario={}";
  insert=printf(insert,[username]);
  con.query(insert,function(error,results){
    if(error)
    {
      return console.error(error.message);
    }
  });

}

function aprovaModerador(con,username)
{
  insert="UPDATE Usuario SET eModerador=true WHERE nomeUsuario={}";
  insert=printf(insert,[username]);
  con.query(insert,function(error,results){
    if(error)
    {
      return console.error(error.message);
    }
  });

}

exports.aprovaModerador=aprovaModerador;
exports.deletaUsuario=deletaUsuario;
exports.obtemUsuario=obtemUsuario;
exports.obtemUsuarios=obtemUsuarios;
exports.loginUsuario=loginUsuario;
exports.usuarioEMedico=usuarioEMedico;
exports.usuarioEPaciente=usuarioEPaciente;
exports.usuarioEModerador=usuarioEModerador;
