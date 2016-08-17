'use strict';
//create an express app
var express = require('express'),
    app = express(),
    port = process.env.PORT || 9000

//create express middleware
app.use(function(req, res) {
  //it can take any requested url and give the same response
  // try with localhost:9000/does/it/matter or localhost:9000
  var data = '<h1>This can be take any URL</h1>'

  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(data)
})

app.listen(port)
