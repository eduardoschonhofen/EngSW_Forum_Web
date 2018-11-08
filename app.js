var http = require('http');
var fs = require('fs');
var url= require('url');
var path = "./Views/";
var mysql = require('mysql');
var Routes=require('./Controllers/routes.js');
var database=require('./Models/Database/database.js');
/*
var con = mysql.createPool({
  connectionLimit : 10,
  host: "us-cdbr-iron-east-01.cleardb.net",
  user: "b089b876f46b39",
  password: "e7e02c90",
  database: "heroku_cb42695d67403c5"
});*/
//mysql --host=us-cdbr-iron-east-01.cleardb.net --user=b089b876f46b39 --password=e7e02c90 --reconnect heroku_cb42695d67403c5



function selector(req,res)
{
adr=req.url;
q=url.parse(adr,true);
path=q.pathname;
console.log("Path:"+path);

if(req.method!="POST")
  Routes.get(req,res,path,con);
else
  Routes.post(req,res,con);
}

var port = process.env.PORT || 8080;
http.createServer(function(req,res){
console.log(database.database.state);
selector(req, res);
}


).listen(port);
