var fs = require('fs');
var dbPaciente = require('../Models/Database/dbPaciente.js');
var dbMedico = require('../Models/Database/dbMedico.js');
var dbModerador = require('../Models/Database/dbModerador.js');
var dbUsuario = require('../Models/Database/dbUsuario.js');
var dbPergunta = require('../Models/Database/dbPergunta.js');
var dbResposta = require('../Models/Database/dbResposta.js');
var dbCreate = require('../Models/Database/dbCreate.js');
var routesTeste = require('../Controllers/routesTeste.js');
var routesLogin = require('../Controllers/routesLogin.js');
var routesRegister = require('../Controllers/routesRegister.js');
var routesCreatePergunta=require('../Controllers/routesCreatePergunta');
var routesShowPerguntas=require('../Controllers/routesShowPerguntas.js');
class Routes
{
  get(req,res,path)
  {

    var indexOfDot = path.indexOf('.');
    if(indexOfDot!=0)
    {
    var subPath =path.substr(1, indexOfDot-1); // parse da string (remove '/' inicial e após o '.')
    var type = path.substr(indexOfDot+1); // html, css, js, ...
    var folder='./Views'
    var filename=folder+"/"+subPath+"/"+subPath+"."+type;
    console.log(filename);
      fs.readFile(filename, function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/'+type});
          return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/'+type});
        res.write(data);
        return res.end();
      });
    }
    else
    {
      if(path=="/create")
        dbCreate.create(con);

    }
    }

  post(req,res,con)
  {
    switch(req.url)
    {
    case "/login":routesLogin.realizarLogin(req,res,con);
    break;
    case "test":0;
    break;
    case "/register":routesRegister.salvaUsuario(req,res,con);
    break;
    case "/question":routesCreatePergunta.realizarPergunta(req,res,con);
    break;
    case "/search":routesShowPerguntas.MostrarPerguntas(req,res,con);
  break;
    default:
    	// 404 error
    	res.writeHead(404, {'Content-Type': 'text/css'});
        return res.end("404 Not Found");
    }
  }


}

module.exports=Routes