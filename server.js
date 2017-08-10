const express = require('express');
const webpack = require('webpack');
const fs =require('fs');
var cors=require('cors');

var app = express();
app.use(cors());
app.use(express.static('./data/images'));
app.get("/bvc", function(req, res){
 fs.readFile("data/data.json",'utf-8',(error ,data)=>{
 var r = error?error:data;
 res.send(JSON.parse(r)); 
});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
} )
