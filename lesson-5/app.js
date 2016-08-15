//create an express app
var express = require('express'),
  app = express(),
  port = process.env.PORT || 9000

//create express middleware
app.use(function(req, res) {
  var data = JSON.stringify(req.headers)
  var contentType = 'application/json'

  res.writeHead(200, {'Content-Type': contentType})
  res.end(data)
})

app.listen(port)
