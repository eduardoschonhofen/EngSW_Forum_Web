var fs = require('fs');
var dbPergunta = require('../Models/Database/dbPergunta.js');
var dbResposta = require('../Models/Database/dbResposta.js');
var dbUsuario =require('../Models/Database/dbUsuario.js');
var dbMedico = require('../Models/Database/dbMedico.js');


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
      dbMedico.usuarioEMedico(resultados.username).then(function(results)
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
