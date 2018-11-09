var path = './Views/question/';
var fs = require('fs');
var dbUsuario =require('./Database/dbUsuario.js');
var dbPergunta = require('./Database/dbPergunta.js');
var dbResposta = require('./Database/dbResposta.js');
var dbPaciente = require('./Database/dbPaciente.js');
var dbModerador=require('./Database/dbModerador.js');

exports.MostrarPerguntasPendentes=function MostrarPerguntasPendentes(req,res){
  console.log("BUGS");
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
      dbModerador.usuarioEModerador(resultados.username).then(function(results)
    {
      if(results[0]==undefined)
      {	res.writeHead(404, {'Content-Type': 'text/css'});
        return res.end("404 Not Found");
      }

      dbPergunta.obtemPerguntasPendentes().then(function(results)
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


exports.MostrarPerguntas=function MostrarPerguntas(req,res)
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
        console.log(resultados);
        dbUsuario.obtemUsuario(resultados.cookie).then(function(results)
      {
        if(results[0]==undefined)
        {	res.writeHead(404, {'Content-Type': 'text/css'});
          return res.end("404 Not Found");
        }
        dbPergunta.obtemPerguntasAceitas().then(function(results)
        {

            res.writeHead(200, {'Content-Type': 'application/json'});
          console.log("Acabou:");
          console.log(res.finished);

          var valor=JSON.stringify(results);

        res.write(JSON.stringify(results));
        res.end();
        });

      })


  })
  }
exports.realizarPergunta=function realizarPergunta(req,res)
  {
    var body = '';
    req.on('data', function (data) {
        body += data;
        if (body.length > 1e6) {
            req.connection.destroy();
        }
    });
    req.on('end', function () {
        resultados=JSON.parse(body);
        console.log(resultados);
        dbPaciente.usuarioEPaciente(resultados.username).then(function(results)
        {
          if(results[0]==undefined)
        {
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.write(JSON.stringify("false"));
          return res.end();
        }
          else
          {

  			dbPergunta.inserePergunta(resultados.username,resultados.question,resultados.title);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify("true"));
            return res.end();
          }
        });
  });
  }

  exports.avaliaPergunta=function avaliaPergunta(req,res)
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
        dbResposta.atualizaAvaliacao(resultados.resposta_id,resultados.nota);
      dbUsuario.atualizaAvaliacao(resultados.username,resultados.nota);
  });
  }

exports.buscaPergunta=function buscaPergunta(req,res)
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
      console.log(resultados);
      dbUsuario.obtemUsuario(resultados.cookie).then(function(results)
    {
      if(results[0]==undefined)
      {	res.writeHead(404, {'Content-Type': 'text/css'});
        return res.end("404 Not Found");
      }
      dbPergunta.buscaPergunta(resultados.texto).then(function(results)
      {

          res.writeHead(200, {'Content-Type': 'application/json'});
        console.log("Acabou:");
        console.log(res.finished);

        var valor=JSON.stringify(results);

      res.write(JSON.stringify(results));
      res.end();
      });

    })


})


}
