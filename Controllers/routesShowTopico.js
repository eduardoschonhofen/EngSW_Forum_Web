
var path = './Views/search/';
var fs = require('fs');

var dbPergunta = require('../Models/Database/dbPergunta.js');
var dbResposta = require('../Models/Database/dbResposta.js');
var dbUsuario =require('../Models/Database/dbUsuario.js');


function MostrarPerguntaErespostas(req,res,con)
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
      dbUsuario.obtemUsuario(con,resultados.cookie).then(function(results)
    {
      if(results[0]==undefined)
      {	res.writeHead(404, {'Content-Type': 'text/css'});
        return res.end("404 Not Found");
      }

      dbPergunta.obtemPerguntaId(con,resultados.topico_id).then(function(results)
      {
        dbResposta.obtemRespostaParaPerguntaPorId(con,resultados.topico_id).then(function(results2)
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

function insereResposta(req,res,con)
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
      dbUsuario.usuarioEMedico(con,resultados.username).then(function(results)
      {
        if(results[0]==undefined)
      {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify("false"));
        return res.end();

      }
        else
        {
			dbResposta.insereResposta(con,resultados.username,resultados.texto,resultados.topico_id);
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.write(JSON.stringify("true"));
          return res.end();
        }
      });
});
}

function avaliaResposta(req,res,con)
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
      dbResposta.atualizaAvaliacao(con,resultados.pergunta_id,resultados.nota);
	  dbUsuario.atualizaAvaliacao(con,resultados.username,resultados.nota);
});

}

function MostrarPerguntasPendentes(req,res,con)
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
      dbUsuario.usuarioEModerador(con,resultados.username).then(function(results)
    {
      if(results[0]==undefined)
      {	res.writeHead(404, {'Content-Type': 'text/css'});
        return res.end("404 Not Found");
      }

      dbPergunta.obtemPerguntasPendentes(con).then(function(results)
      {


          res.writeHead(200, {'Content-Type': 'application/json'});

        var valor=JSON.stringify({results});

		  res.write(valor);
		  res.end();
      });

    });

});
}

function aprovarPergunta(req,res,con)
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
      dbPergunta.aprovaPergunta(con,resultados.pergunta_id);
});
}

function deletarPergunta(req,res,con)
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
      dbPergunta.deletaPergunta(con,resultados.pergunta_id);
});
}
exports.deletarPergunta=deletarPergunta;
exports.aprovarPergunta=aprovarPergunta;
exports.MostrarPerguntaErespostas=MostrarPerguntaErespostas;
exports.insereResposta=insereResposta;
exports.MostrarPerguntasPendentes=MostrarPerguntasPendentes;
exports.avaliaResposta=avaliaResposta;
