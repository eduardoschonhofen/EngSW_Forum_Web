var fs = require('fs');
var dbPaciente = require('../Models/Database/dbPaciente.js');
var dbMedico = require('../Models/Database/dbMedico.js');
var dbModerador = require('../Models/Database/dbModerador.js');
var dbUsuario = require('../Models/Database/dbUsuario.js');
var dbPergunta = require('../Models/Database/dbPergunta.js');
var dbResposta = require('../Models/Database/dbResposta.js');
var dbCreate = require('../Models/Database/dbCreate.js');


var Pergunta = require('../Models/Pergunta.js');
var Resposta = require('../Models/Resposta.js');
var Medico = require('../Models/Medico.js');
var Usuario = require('../Models/Usuario.js');
var Moderador = require('../Models/Moderador.js');
var Topico = require('../Models/Tópico.js');


function loadPage(req,res,filename,type)
  {
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
exports.get=function get(req,res,path)
  {

    var indexOfDot = path.indexOf('.');
    console.log("IndexofDot:"+indexOfDot);
    if(indexOfDot>=0)
    {
    var subPath =path.substr(1, indexOfDot-1); // parse da string (remove '/' inicial e após o '.')
    var type = path.substr(indexOfDot+1); // html, css, js, ...
    var folder='./Views'
    var filename=folder+"/"+subPath+"/"+subPath+"."+type;
    console.log(filename);
    loadPage(req,res,filename,type);
    }

    else
    {
      if(path=="/create")
        dbCreate.create();
    }
  }

exports.post=function post(req,res)
  {

    switch(req.url)
    {
    case "/login":Usuario.realizarLogin(req,res);
    break;
    case "/register":Usuario.salvaUsuario(req,res);
    break;
    case "/question":Pergunta.realizarPergunta(req,res);
    break;
    case "/search":Pergunta.MostrarPerguntas(req,res);
    break;
    case "/topic":Topico.MostrarTopico(req,res);
    break;
    case "/answer":Resposta.insereResposta(req,res);
    break;
    case "/evaluate":Resposta.avaliaResposta(req,res);
    break;
    case "/pendingQuestions":Pergunta.MostrarPerguntasPendentes(req,res);
    break;
    case "/approveQuestion":Pergunta.aprovarPergunta(req,res);
    break;
    case "/removeQuestion":Pergunta.deletarPergunta(req,res);
    break;
	   case "/listusers":Usuario.MostrarUsuarios(req,res);
	   break;
    case "/deleteUser":Usuario.deletaUsuario(req,res);
    break;
    case "/approveModerator":Usuario.virarModerador(req,res);
    break;
    case "/searchTopic":Pergunta.buscaPergunta(req,res);
    break;
    case "/evaluateAnswer":Resposta.avaliaResposta(req,res);
    break;
    case "/evaluateQuestion":Pergunta.avaliaPergunta(req,res);
    break;
    default:
    	// 404 error
    	res.writeHead(404, {'Content-Type': 'text/css'});
        return res.end("404 Not Found");
    }
  }
