var express = require('express')
var app = express()

app.listen(9000)

app.get('/', function(request, response){
  response.send('<h1>This would be some HTML</h1>');
})

app.get('/api', function(req, res){
  res.send({
    name: "Jindal",
    age: 40
  })
})