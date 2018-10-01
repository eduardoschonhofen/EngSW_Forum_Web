var express=require('express');
var app=express();
var operations = require('/.operations.js');

app.listen(8080);

app.get('/',operations.startScreen(req,res));
app.post('/',operations.goLogin(req,res));


app.get('/login',operations.loginScreen(req,res));
app.post('/login',operations.DoLogin(req,res));


module.exports = app;
