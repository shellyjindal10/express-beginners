'use strict';

var express = require('express'),
    GenerateSchema = require('generate-schema'), //Library for converting json to json schema
    port = process.env.PORT || 9000, //port number
    app = express(),
    posts = require('./mock/base') //default json


app.get('/', function(req, res) {
  res.send('<h1>Welcome to  Schemas Generator !!!</h1>');
})

app.get('/schema', function(req, res) {
  //generating json schema from json 
  var schema = GenerateSchema.json('Product', [posts])
  res.send(schema); //posting the result as response.
})

app.listen(port, function() {
  //callback function to display port number 
  console.log('The server is running on port => '+port);
})