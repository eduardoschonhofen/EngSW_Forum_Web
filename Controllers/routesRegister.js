
var path = '../apresentar/register/';
var fs = require('fs');

var dbPaciente = require('../Models/Database/dbPaciente.js');

function salvaUsuario(req,res,con)
{
dbPaciente.inserePaciente(con,"A","A","a");
}

function salvaHTML(req,res)
{
  filename=path+"register.html";
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
  filename=path+"register.css";
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
  filename=path+"register.js";
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
  filename=path+"register.png";
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
	console.log(this.res);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify("A senha da prova é 1Q"));
    return res.end();
}


exports.salvaHTML=salvaHTML;
exports.salvaJS=salvaJS;
exports.salvaCSS=salvaCSS;
exports.salvaJSON=salvaJSON;
exports.salvaPNG=salvaPNG;
