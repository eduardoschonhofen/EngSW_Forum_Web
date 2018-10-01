var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Eduardo",
  password: "123",
  database: "website"
});

var dbPaciente = require('./dbPaciente.js');

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
dbPaciente.obtemPaciente(con,"eoschonhofen").then(function(results)
{
console.log(results);
})
inserePaciente().then(function(results)
{
console.log(results[0].Nome);
})
