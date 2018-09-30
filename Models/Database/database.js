var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Eduardo",
  password: "123",
  database: "website"
});

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
var quero='';


inserePaciente().then(function(results)
{
console.log(results);
})
