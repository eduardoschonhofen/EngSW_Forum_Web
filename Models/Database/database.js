var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Eduardo",
  password: "123",
  database: "website"
});

var dbPaciente = require('./dbPaciente.js');
var dbMedico = require('./dbMedico.js');
var dbModerador = require('./dbModerador.js');
var dbUsuario = require('./dbUsuario.js');
var dbPergunta = require('./dbPergunta.js');
var dbResposta = require('./dbResposta.js');

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

/*dbPaciente.obtemPaciente(con,"gafonseca").then(function(results)
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

dbPergunta.obtemPerguntaTitulo(con, 'como costurar meu braço de volta?').then(function(results)
{
console.log(results);
})*/

dbResposta.obtemRespostas(con).then(function(results)
{
console.log(results);
})

