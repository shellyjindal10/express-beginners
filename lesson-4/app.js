'use strict';
//create an express server
var app = require('express')(),
    port = process.env.PORT || 9000

app.get('/', function(req, res) {
  res.send('<h1>Welcome to Express</h1>')
});

app.get('/about', function(req, res) {
	 //response for  the request /about
  res.send('<h1>This is a simple express routing demo</h1>')
});

app.get('/hello', function(req, res) {
	 //response for  the request /hello
  res.send('<h1>Well, hello there !</h1>')
});

app.listen(port, function() {
  //adding a callback to print the port on which server is running
	 console.log('The Server is running on port  =>' + port)
})
