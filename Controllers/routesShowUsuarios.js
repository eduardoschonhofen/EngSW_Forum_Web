
var path = './Views/search/';
var fs = require('fs');

var dbUsuario =require('../Models/Database/dbUsuario.js');


function MostrarUsuarios(req,res,con)
{
  console.log("Entrei na pergunta e resposta");
  var body = '';
  req.on('data', function (data) {
      body += data;

      // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
      if (body.length > 1e6) {
          // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
          req.connection.destroy();
      }
  });
  req.on('end', function () {

      resultados=JSON.parse(body);
      console.log(resultados.topico_id);
      console.log(resultados.cookie);
      dbUsuario.usuarioEModerador(con,resultados.cookie).then(function(results)
    {
      if(results[0]==undefined)
      {	res.writeHead(404, {'Content-Type': 'text/css'});
        return res.end("404 Not Found");
      }

      dbUsuario.obtemUsuarios(con).then(function(results)
      {


          res.writeHead(200, {'Content-Type': 'application/json'});
        console.log(results);

        var valor=JSON.stringify({results});
        console.log(valor);

		  res.write(valor);
		  res.end();
      });

    });

});
}
exports.MostrarUsuarios=MostrarUsuarios;
