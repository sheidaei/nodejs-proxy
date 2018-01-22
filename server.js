const express = require("express");  
const request = require('request');  
const app = express();

app.get('/', (req, res) =>  request({  
    url: req.query.url,
    method: req.query.method
  }).pipe(res);
);
app.listen(8080); 
