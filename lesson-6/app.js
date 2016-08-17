'use strict';

var express = require('express'),
      posts = require('./mock/post.json'),
       port = process.env.PORT || 9000

var app = express();

app.get('/', function(req, res) {
  res.send('<h1>Hello There !!!</h1>');
})

app.get('/blog', function(req, res) {
  res.send(posts);
})

app.listen(port, function() {
  //callback function to display port number 
	 console.log('The server is running on port => '+port);
})