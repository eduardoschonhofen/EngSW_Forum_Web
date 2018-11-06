
var path = './Views/search/';
var fs = require('fs');

var dbPergunta = require('../Models/Database/dbPergunta.js');
var dbResposta = require('../Models/Database/dbResposta.js');
var dbUsuario =require('../Models/Database/dbUsuario.js');


function MostrarPerguntaErespostas(req,res,con)
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
        console.log(results);
        console.log(results2);

        var valor=JSON.stringify({"question":results,"answer":results2});
        console.log(valor);

      res.write(valor);
      res.end();
    });
      });

    });


});
}

function insereResposta(req,res,con)
{
  console.log("INSERIU RESPOSTA");
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
      dbUsuario.obtemUsuario(con,resultados.username,resultados.password).then(function(results)
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
  console.log("AVALIOU RESPOSTA!!!!!!!!!!SUPER AVALIADOR NOTA MIL!!!");
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
      dbResposta.atualizaAvaliacao(con,resultados.pergunta_id,resultados.nota);
});

}
exports.MostrarPerguntaErespostas=MostrarPerguntaErespostas;
exports.insereResposta=insereResposta;
