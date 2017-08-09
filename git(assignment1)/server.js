const express = require('express');
const webpack = require('webpack');
const fs =require('fs');

var app = express();
app.get("/bvc", function(req, res){
 fs.readFile("data/data.json",'utf-8',(error ,data)=>{
 var r = error?error:data;
 res.send(JSON.parse(r)); 
});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
} )




//     function handleHomepageGet(req, res){
//         fs.readFile('./data/data.json', function (err,data) {
//             res.send(JSON.parse(data));
//         });
//     }

// app.get('/homepage', handleHomepageGet) 



// respond with "hello world" when a GET request is made to the homepage
