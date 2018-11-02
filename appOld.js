var http = require('http');
var fs = require('fs');
var url= require('url');
var path = "./Views/";
var mysql = require('mysql');

var Routes=require('./Controllers/routes.js');

var con = mysql.createConnection({
  host: "localhost",
  user: "Eduardo",
  password: "123",
  database: "website"
});


function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if(request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}

function selector(req,res)
{
adr=req.url;
q=url.parse(adr,true);
path=q.pathname;
var indexOfDot = path.indexOf('.');
var type = path.substr(indexOfDot+1); // html, css, js, ...
path = path.substr(1, indexOfDot-1); // parse da string (remove '/' inicial e após o '.')


switch(type)
{
case '/checkLogin':
	console.log('checking Login...');
	routesLogin.salvaJSON(req,res);
break;
}
var Router=new Routes();
if(req.method!="POST")
Router.get(req,res,path,type);

/*
{
switch(path)
{
case "login":
  {
  console.log(q);
  console.log(q.query);
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
}
break;
case "search":
	switch(type)
	{
		case 'html': routesShowPerguntas.salvaHTML(req, res);
		break;
		case 'css': routesShowPerguntas.salvaCSS(req, res);
		break;
		case 'js': routesShowPerguntas.salvaJS(req, res);
		break;
		default:
	}
break;

case "question":
	switch(type)
	{
		case 'html': routesCreatePergunta.salvaHTML(req, res);
		break;
		case 'css': routesCreatePergunta.salvaCSS(req, res);
		break;
		case 'js': routesCreatePergunta.salvaJS(req, res);
		break;
		default:
	}
break;
  case "register":
  	switch(type)
  	{
  		case 'html': routesRegister.salvaHTML(req, res);
  		break;
  		case 'css': routesRegister.salvaCSS(req, res);
  		break;
  		case 'js': routesRegister.salvaJS(req, res);
  		break;
  		default:
  	}
break;
default:
{
console.log(q);
console.log(q.query);
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
  default: routesLogin.salvaHTML(req, res);
}
}
}
}
*/
else
{
  Router.post(req,res,con);
}


}

var port = process.env.PORT || 8080;
http.createServer(

  /*console.log(req.url);
  switch(req.url)
  {
  case "/":routesTeste.salvaHTML(req,res);
  break;
  case "/test.js":routesTeste.salvaJS(req,res);
  break;
  case "/test.css":routesTeste.salvaCSS(req,res);
  break;
  default:routesTeste.salvaJSON(req,res);

}*/function(req,res){
console.log(con.state);



selector(req, res);
}


).listen(port);
