//create an express server
var app = require('express')(),
    port = process.env.PORT || 9000

app.get('/', function(req, res){
  res.send('<h1>Welcome to Express</h1>')
});

app.get('/about', function(req, res){
  res.send('<h1>This is a simple express routing demo</h1>')
});

app.get('/hello', function(req, res){
  res.send('<h1>Well, hello there !</h1>')
});

app.listen(port)
