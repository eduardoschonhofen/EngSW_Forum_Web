
var path = './Views/register/';
var fs = require('fs');
var qs = require('querystring');

var dbPaciente = require('../Models/Database/dbPaciente.js');
var dbUsuario = require('../Models/Database/dbUsuario.js');
var dbMedico = require('../Models/Database/dbMedico.js');

//var sublime = require('sublime');

function salvaUsuario(req,res,con)
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
            	dbPaciente.inserePaciente(con,resultados.name,resultados.username,resultados.password);
			else
				dbMedico.insereMedico(con,resultados.name,resultados.username,resultados.password,resultados.speciality);

        });

}
function deletaUsuario(req,res,con)
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
      dbUsuario.deletaUsuario(con,resultados.username);
});

}

function aprovaModerador(req,res,con)
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
      dbUsuario.aprovaModerador(con,resultados.username);
});

}

function salvaHTML(req,res)
{
  filename=path+"register.html";
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}

function salvaCSS(req,res)
{
  filename=path+"register.css";
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/css'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.write(data);
    return res.end();
  });
}

function salvaJS(req,res)
{
  filename=path+"register.js";
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/javascript'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(data);
    return res.end();
  });
}

function salvaPNG(req,res)
{
  filename=path+"register.png";
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/javascript'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(data);
    return res.end();
  });
}

function salvaJSON(req,res)
{
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify("A senha da prova é 1Q"));
    return res.end();
}
exports.aprovaModerador=aprovaModerador;
exports.deletaUsuario=deletaUsuario;
exports.salvaHTML=salvaHTML;
exports.salvaJS=salvaJS;
exports.salvaCSS=salvaCSS;
exports.salvaJSON=salvaJSON;
exports.salvaPNG=salvaPNG;
exports.salvaUsuario=salvaUsuario;
