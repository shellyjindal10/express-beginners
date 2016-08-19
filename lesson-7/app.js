'use strict';

var express = require('express'),
    port = process.env.PORT || 9000, //port number
    app = express(),
    posts = require('./mock/base.json'), //default json
    fs = require('fs'),
    path = require('path'),
    index = path.join(__dirname, 'views/index.html')

app.get('/', function(req, res) {
  if(req.url === '/' || req.url === '/index.html') { //reading from the index.html
    fs.readFile(index, function(err, data){
      if(err) {
        console.error(err)
        res.writeHead(500, {'Content-Type': 'text/html'})
        res.end('<html><body><h1>500 server not found</h1></body>')
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data)
      }
    })
  } 
})

app.get('/blog/:title?', function(req, res) {
  var title = req.params.title; //fetching the requested ids
  var post = posts[title]; // matching the object with the key (requested ids)

  if(title === undefined) {
    res.status(500); //setting the status code of response, since we dont have a title defined it should not give 200 status
    res.send('<h1>This page is under construction</h1>')}

  res.send(post); //posting the result as response.
})

app.listen(port, function() {
  //callback function to display port number on server side
  console.log('The server is running on port => ' + port);
})