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




function selector(req,res)
{
adr=req.url;
q=url.parse(adr,true);
path=q.pathname;
var indexOfDot = path.indexOf('.');
var type = path.substr(indexOfDot+1); // html, css, js, ...
path = path.substr(1, indexOfDot-1); // parse da string (remove '/' inicial e após o '.')

var Router=new Routes();
if(req.method!="POST")
  Router.get(req,res,path,type);
else
  Router.post(req,res,con);
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
