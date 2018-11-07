
var Registro = require('./Registro.js');
var path = './Views/question/';
var fs = require('fs');
var dbUsuario =require('./Database/dbUsuario.js');
var dbPergunta = require('./Database/dbPergunta.js');


class Pergunta extends Registro
{


  setNomePaciente(nomePaciente)
  {
	  this.nomePaciente = nomePaciente;
  }

  getNomePaciente()
  {
	  return this.nomePaciente;
  }

  geraNotificacao()
  {
	  // Avisa os médicos que existe pergunta nova ???
  }
  MostrarPerguntas(req,res,con)
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
        dbUsuario.obtemUsuario(con,resultados.cookie).then(function(results)
      {
        if(results[0]==undefined)
        {	res.writeHead(404, {'Content-Type': 'text/css'});
          return res.end("404 Not Found");
        }
        dbPergunta.obtemPerguntasAceitas(con).then(function(results)
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
  static realizarPergunta(req,res,con)
  {
    console("A");
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
}

module.exports=new Pergunta();
