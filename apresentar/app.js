

var http = require('http');
var fs = require('fs');
var path = './';
//var filename;

function LsalvaHTML(req,res)
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

function LsalvaCSS(req,res)
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

function LsalvaJS(req,res)
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

function LsalvaPNG(req,res)
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


function TsalvaHTML(req,res)
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

function TsalvaCSS(req,res)
{
  filename=path+"test.css";
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

function TsalvaJS(req,res)
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



http.createServer(function (req, res) {
  console.log(req.url);
  var file;
  switch(req.url)
  {
	  case '/login.html': LsalvaHTML(req, res);
	  break;
	  case '/login.css': LsalvaCSS(req, res);
	  break;
	  case '/login.js': LsalvaJS(req, res);
	  break;
	  case '/login.png': LsalvaPNG(req, res);
	  break;
	  case '/test.html': TsalvaHTML(req, res);
	  break;
	  case '/test.css': TsalvaCSS(req, res);
	  break;
	  case '/test.js': TsalvaJS(req, res);
	  break;
	  default:
	  res.writeHead(404, {'Content-Type': 'text/css'});
	  return res.end("404 Not Found");
  }

}).listen(8080);


/*http.createServer(function (req, res) {
  console.log(req.url);
  var file;
  switch(req.url)
  {
	  case '/': file = './login.html';
	  break;
	  case '/test.html': file = './test.html';
	  break;
  }
  fs.readFile(file, function(err, data) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
  });

}).listen(8080);*/
