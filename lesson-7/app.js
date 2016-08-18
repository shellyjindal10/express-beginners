'use strict';

var express = require('express'),
    port = process.env.PORT || 9000, //port number
    app = express(),
    posts = require('./mock/base.json') //default json


app.get('/', function(req, res) {
  res.send('<h1>Welcome to Lesson 7 !!!</h1>');
})

app.get('/blog/:title?', function(req, res) {
	 var title = req.params.title; //fetching the requested ids 
	 var post = posts[title]; // matching the object with the key (requested ids)
	 if(title === undefined) {
	 	 res.status(500); //setting the status code of response, since we dont have a title defined it should not give 200 status
	   res.send('<h1>This page is under construction</h1>') 
	 }
  res.send(post); //posting the result as response.
})

app.listen(port, function() {
  //callback function to display port number on server side
  console.log('The server is running on port => '+port);
})