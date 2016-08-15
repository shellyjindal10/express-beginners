var express = require('express')
var app = express()

app.listen(9000)

app.get('/', function(request, response){
  response.send("This would be some HTML")
})

app.get('/api', function(req, res){
  res.send({
    name: "Jindal",
    age: 40
  })
})