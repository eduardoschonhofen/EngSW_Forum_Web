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
var routesTeste = require('./Controllers/routesTeste.js');
var routesLogin = require('./Controllers/routesLogin.js');


var con = mysql.createConnection({
  host: "localhost",
  user: "Eduardo",
  password: "123",
  database: "website"
});



//require(path + 'yourfile.js');

// Não funcionou essa função

/*function auxSelector(route, type, req, res)
{
	switch(type)
	{
		case 'html': route.salvaHTML(req, res);
		break;
		case 'css': route.salvaCSS(req, res);
		break;
		case 'js': route.salvaJS(req, res);
		break;
		default:
		
	}
}*/



function selector(req,res)
{
adr=req.url;
q=url.parse(adr,true);
path=q.pathname;
var indexOfDot = path.indexOf('.');
var type = path.substr(indexOfDot+1); // html, css, js, ...
path = path.substr(1, indexOfDot-1); // parse da string (remove '/' inicial e após o '.')

console.log(path);
console.log(type);
// --> qdo for comunicar por .js acho q tem q dar um nome que vai cair em algum switch daqui <--


switch(path)
{
case "login":
	switch(type)
	{
		case 'html': routesLogin.salvaHTML(req, res);
		break;
		case 'css': routesLogin.salvaCSS(req, res);
		break;
		case 'js': routesLogin.salvaJS(req, res);
		break;
		case 'png': routesLogin.salvaPNG(req, res);
		break;
		default:	
	}
	//auxSelector(routesLogin, type, req, res);
break;
case "test":
	switch(type)
	{
		case 'html': routesTeste.salvaHTML(req, res);
		break;
		case 'css': routesTeste.salvaCSS(req, res);
		break;
		case 'js': routesTeste.salvaJS(req, res);
		break;
		default:	
	}
break;
default:
	// ERRO 404 PAGE NOT FOUND
}


}

http.createServer(function (req, res) {
  //console.log(req.url);
  /*switch(req.url)
  {
  //case "/":routesTeste.TestesalvaHTML(req,res);
  //break;
  case "/test.js":routesTeste.TestesalvaJS(req,res);
  break;
  case "/style.css":routesTeste.TestesalvaCSS(req,res);
  break;
  case "/login.html":selector(req, res);
  break;
  case "/test.html":selector(req, res);
  break;
  default:routesTeste.TestesalvaJSON(req,res);

  }*/
  selector(req, res);


}).listen(8080);
