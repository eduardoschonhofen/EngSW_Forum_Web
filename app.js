var http = require('http');
var fs = require('fs');
var url= require('url');
var path = "./Views/";
var mysql = require('mysql');
var dbPaciente = require('./Models/Database/dbPaciente.js');
var dbMedico = require('./Models/Database/dbMedico.js');
var dbModerador = require('./Models/Database/dbModerador.js');
var dbUsuario = require('./Models/Database/dbUsuario.js');
var dbPergunta = require('./Models/Database/dbPergunta.js');
var dbResposta = require('./Models/Database/dbResposta.js');


var con = mysql.createConnection({
  host: "localhost",
  user: "Eduardo",
  password: "123",
  database: "website"
});



//require(path + 'yourfile.js');



function selector(req,res)
{
url=req.url;
q=url.parse(url,true);
path=q.pathname;


switch(path)
{
case "login":

}


}

http.createServer(function (req, res) {
  console.log(req.url);
  switch(req.url)
  {
  case "/":salvaHTML(req,res);
  break;
  case "/style.css":salvaCSS(req,res);
  break;
  case "/test.js":salvaJS(req,res);
  break;
  default:salvaJSON(req,res);

  }

}).listen(8080);
