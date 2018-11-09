
var path = './Views/login/';
var fs = require('fs');

var dbUsuario = require('../Models/Database/dbUsuario.js');




function salvaHTML(req,res)
{
  filename=path+"login.html";
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
  filename=path+"login.css";
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
  filename=path+"login.js";
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
  filename=path+"login.png";
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



var path = './Views/register/';
var fs = require('fs');
var qs = require('querystring');

var dbPaciente = require('../Models/Database/dbPaciente.js');
var dbUsuario = require('../Models/Database/dbUsuario.js');
var dbMedico = require('../Models/Database/dbMedico.js');

//var sublime = require('sublime');

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
      dbUsuario.virarModerador(resultados.username);
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

exports.salvaHTML=salvaHTML;
exports.salvaJS=salvaJS;
exports.salvaCSS=salvaCSS;
exports.salvaJSON=salvaJSON;
exports.salvaPNG=salvaPNG;

exports.salvaHTML=salvaHTML;
exports.salvaJS=salvaJS;
exports.salvaCSS=salvaCSS;
exports.salvaJSON=salvaJSON;
exports.salvaPNG=salvaPNG;


var path = './Views/search/';
var fs = require('fs');

var dbPergunta = require('../Models/Database/dbPergunta.js');
var dbResposta = require('../Models/Database/dbResposta.js');
var dbUsuario =require('../Models/Database/dbUsuario.js');


exports.MostrarTopico=function MostrarTopico(req,res)
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
      dbUsuario.obtemUsuario(resultados.cookie).then(function(results)
    {
      if(results[0]==undefined)
      {	res.writeHead(404, {'Content-Type': 'text/css'});
        return res.end("404 Not Found");
      }

      dbPergunta.obtemPerguntaId(resultados.topico_id).then(function(results)
      {
        dbResposta.obtemRespostaParaPerguntaPorId(resultados.topico_id).then(function(results2)
        {


          res.writeHead(200, {'Content-Type': 'application/json'});

        var valor=JSON.stringify({"question":results,"answer":results2});

      res.write(valor);
      res.end();
    });
      });

    });


});
}

exports.insereResposta=function insereResposta(req,res)
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
      dbUsuario.usuarioEMedico(resultados.username).then(function(results)
      {
        if(results[0]==undefined)
      {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify("false"));
        return res.end();

      }
        else
        {
			dbResposta.insereResposta(resultados.username,resultados.texto,resultados.topico_id);
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.write(JSON.stringify("true"));
          return res.end();
        }
      });
});
}

exports.avaliaResposta=function avaliaResposta(req,res)
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
      dbResposta.atualizaAvaliacao(resultados.pergunta_id,resultados.nota);
	  dbUsuario.atualizaAvaliacao(resultados.username,resultados.nota);
});

}

exports.MostrarPerguntasPendentes=function MostrarPerguntasPendentes(req,res)
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
      dbUsuario.usuarioEModerador(resultados.username).then(function(results)
    {
      if(results[0]==undefined)
      {	res.writeHead(404, {'Content-Type': 'text/css'});
        return res.end("404 Not Found");
      }

      dbPergunta.obtemPerguntasPendentes().then(function(results)
      {


          res.writeHead(200, {'Content-Type': 'application/json'});

        var valor=JSON.stringify({results});

		  res.write(valor);
		  res.end();
      });

    });

});
}

exports.aprovarPergunta=function aprovarPergunta(req,res)
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
      dbPergunta.aprovaPergunta(resultados.pergunta_id);
});
}

exports.deletarPergunta=function deletarPergunta(req,res)
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
      dbPergunta.deletaPergunta(resultados.pergunta_id);
});
}


var path = './Views/search/';
var fs = require('fs');

var dbUsuario =require('../Models/Database/dbUsuario.js');


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
      dbUsuario.usuarioEModerador(resultados.cookie).then(function(results)
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
