var express=require('express');
var app=express();


app.get('/',function(req,res){

res.send("Testing phase");

});




app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!');
});