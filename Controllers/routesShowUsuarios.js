
var path = './Views/search/';
var fs = require('fs');

var dbUsuario =require('../Models/Database/dbUsuario.js');


exports.MostrarUsuarios=function MostrarUsuarios(req,res,con)
{
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
      dbUsuario.usuarioEModerador(con,resultados.cookie).then(function(results)
    {
      if(results[0]==undefined)
      {	res.writeHead(404, {'Content-Type': 'text/css'});
        return res.end("404 Not Found");
      }

      dbUsuario.obtemUsuariosNaoModeradores(con).then(function(results)
      {

          res.writeHead(200, {'Content-Type': 'application/json'});

        var valor=JSON.stringify({results});

		  res.write(valor);
		  res.end();
      });

    });

});
}
