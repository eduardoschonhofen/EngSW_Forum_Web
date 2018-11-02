
var path = './Views/question/';
var fs = require('fs');

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
      console.log(resultados);
      dbPergunta.inserePergunta(con,resultados.username,resultados.question,resultados.title);
});
}

exports.realizarPergunta=realizarPergunta;
