var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Eduardo",
  password: "123",
  database: "website"
});

function inserePaciente()
{
  system.log("AAA");

}


con.query("Select Nome from Usuario",(error,results,fields)=>{
  if(error)
  {
    return console.error(error.message);

  }
  console.log(results);
});

con.end();
