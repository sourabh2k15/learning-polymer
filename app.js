var http = require("http");
var express = require("express");
var app = express();
var port = 5000;
var server = http.Server(app);

app.use(express.static(__dirname+'/public/'));

server.listen(port,function(){
    console.log(" server listening on port "+port);
});

app.get('/handleget',function(req,res){
    console.log("reponse get on /handleget");
    res.send("hello from server!!");
});