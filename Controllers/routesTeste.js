
function TestesalvaHTML(req,res)
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

function TestesalvaCSS(req,res)
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

function TestesalvaJS(req,res)
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
function TestesalvaJSON(req,res)
{
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify("A senha da prova é 1Q"));
    return res.end();
}

exports.TestesalvaJSON=TestesalvaJSON;
exports.TestesalvaJS=TestesalvaJS;
exports.TestesalvaCSS=TestesalvaCSS;
exports.TestesalvaHTML=TestesalvaHTML;
