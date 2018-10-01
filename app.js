var http = require('http');
var fs = require('fs');
var url= require('url');
var path = "./Views/";

//require(path + 'yourfile.js');

function salvaHTML(req,res)
{
  filename=path+"test.html";
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
  filename=path+"style.css";
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
  filename=path+"test.js";
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
