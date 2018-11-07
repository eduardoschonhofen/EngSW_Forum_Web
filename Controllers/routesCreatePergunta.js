
var path = './Views/question/';
var fs = require('fs');

var dbUsuario =require('../Models/Database/dbUsuario.js');
var dbPergunta = require('../Models/Database/dbPergunta.js');


function realizarPergunta(req,res,con)
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
      dbUsuario.usuarioEPaciente(con,resultados.username).then(function(results)
      {
        if(results[0]==undefined)
      {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify("false"));
        return res.end();

      }
        else
        {
			dbPergunta.inserePergunta(con,resultados.username,resultados.question,resultados.title);
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.write(JSON.stringify("true"));
          return res.end();
        }
      });
});
}

exports.realizarPergunta=realizarPergunta;
