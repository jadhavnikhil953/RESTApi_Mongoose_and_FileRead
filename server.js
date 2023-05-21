var express = require('express');
require('dotenv').config()
var app = express();
var fs = require("fs");
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);
const Posts = require ( './models/post');


app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      res.end( data );
   });
})

app.get('/products',(req, res) => {
    Posts.find({postName:req.query.postName}).then(function(result){
        res.send(result);  
    })
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})