var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Eduardo",
  password: "123",
  database: "website"
});

buscaPacientes()
{
  con.query("Select Nome FROM Pacientes",function(err, result)
    {
        if (err)
            callback(err,null);
        else
            return result;

    }
  )
};

system.log(buscaPacientes);
