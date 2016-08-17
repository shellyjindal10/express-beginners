'use strict';

var express = require('express'),
    app = express(),
    port = process.env.PORT || 9000

app.get('/', function(req, res) {
  var data = '<h1>Hello world</h1>'

  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(data)
})

app.get('/api', function(req, res) {
  res.send({
    name: "Jindal",
    age: 40
  })
})

app.listen(port, function() {
  //callback for printing port address
  console.log('The server is running on port => '+port)
})