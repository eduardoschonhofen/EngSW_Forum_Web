var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Eduardo",
  password: "123",
  database: "website"
});

var dbPaciente = require('./dbPaciente.js');
var dbUsuario = require('./dbUsuario.js');

function inserePaciente()
{
  return new Promise(function(resolve,reject)
{
  con.query("Select Nome from Usuario",function(error,results,fields){
    if(error)
    {
      return console.error(error.message);

    }
    resolve(results);
});
});
}

dbPaciente.obtemPaciente(con,"gafonseca").then(function(results)
{
console.log(results);
})

dbPaciente.obtemPacientes(con).then(function(results)
{
console.log(results);
})



dbUsuario.loginUsuario(con,"eoschonhofen","batataFrita123").then(function(results)
{
console.log(results);
})
