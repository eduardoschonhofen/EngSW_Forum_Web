var express = require('express');


var router = express.Router();


//Página GET
router.get('/',function(req,res)
{
  res.render('index',{title:'DISGRAÇA!!!'});
});

router.get('/test/:id',function(req,res)
{
  res.render('teste',{output:req.params.id});


})

module.exports=router;
