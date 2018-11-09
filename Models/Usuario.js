
var fs = require('fs');
var qs = require('querystring');
var dbUsuario = require('./Database/dbUsuario.js');
var dbPaciente = require('./Database/dbPaciente.js');
var dbMedico = require('./Database/dbMedico.js');
var dbModerador=require('./Database/dbModerador.js');

exports.salvaUsuario=function salvaUsuario(req,res)
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
			if(resultados.epaciente)
            	dbPaciente.inserePaciente(resultados.name,resultados.username,resultados.password);
			else
				dbMedico.insereMedico(resultados.name,resultados.username,resultados.password,resultados.speciality);

        });

}
exports.deletaUsuario=function deletaUsuario(req,res)
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
      dbUsuario.deletaUsuario(resultados.username);
});

}

exports.virarModerador=function virarModerador(req,res)
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
      dbModerador.virarModerador(resultados.username);
});

}

exports.MostrarUsuarios=function MostrarUsuarios(req,res)
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
      dbModerador.usuarioEModerador(resultados.cookie).then(function(results)
    {
      if(results[0]==undefined)
      {	res.writeHead(404, {'Content-Type': 'text/css'});
        return res.end("404 Not Found");
      }

      dbUsuario.obtemUsuariosNaoModeradores().then(function(results)
      {

          res.writeHead(200, {'Content-Type': 'application/json'});

        var valor=JSON.stringify({results});

		  res.write(valor);
		  res.end();
      });

    });

});
}
exports.realizarLogin=function realizarLogin(req,res)
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
      dbUsuario.loginUsuario(resultados.username,resultados.password).then(function(results)
      {
        if(results[0]==undefined)
      {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify("false"));
        return res.end();

      }
        else
        {
          console.log("AAA");
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.write(JSON.stringify("true"));
          return res.end();
        }
      });


  });




}
