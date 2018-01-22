const express = require("express");  
const request = require('request');  
const app = express();
var port = process.env.PORT || 8080;

app.get('/', (req, res) =>  request({  
    url: req.query.url,
    method: req.query.method
  }).pipe(res));
app.listen(port); 
