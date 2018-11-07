
var path = './Views/login/';
var fs = require('fs');

var dbUsuario = require('../Models/Database/dbUsuario.js');


exports.realizarLogin=function realizarLogin(req,res,con)
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
      dbUsuario.loginUsuario(con,resultados.username,resultados.password).then(function(results)
      {
        if(results[0]==undefined)
      {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify("false"));
        return res.end();

      }
        else
        {
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.write(JSON.stringify("true"));
          return res.end();
        }
      });


  });




}

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


exports.salvaHTML=salvaHTML;
exports.salvaJS=salvaJS;
exports.salvaCSS=salvaCSS;
exports.salvaJSON=salvaJSON;
exports.salvaPNG=salvaPNG;
