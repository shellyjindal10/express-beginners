'use strict';

var http = require('http'),
    fs = require('fs'),
    path = require('path')

var app = http.createServer(function(req, res) {
  var index = path.join(__dirname, 'index.html')

  if(req.url === '/' || req.url === '/index.html') {
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
  } else {
    // response not found
    console.log('resource not found: '+req.url)
    res.writeHead(404, {'Content-Type': 'text/html'})
    res.end('<html><body><h1>404 not found</h1></body>')
  }
})

app.listen(9000, 'localhost')

