'use strict';

var express = require('express'),
    GenerateSchema = require('generate-schema'),
    port = process.env.PORT || 9000,
    app = express()


app.get('/', function(req, res) {
  res.send('<h1>Welcome to  Schemas Generator !!!</h1>');
})

app.get('/schema', function(req, res) {
	var schema = GenerateSchema.json('Product', [
    {
        "id": 2,
        "name": "An ice sculpture",
        "price": 12.50,
        "tags": ["cold", "ice"],
        "dimensions": {
            "length": 7.0,
            "width": 12.0,
            "height": 9.5
        },
        "warehouseLocation": {
            "latitude": -78.75,
            "longitude": 20.4
        }
    },
    {
        "id": 3,
        "name": "A blue mouse",
        "price": 25.50,
        "dimensions": {
            "length": 3.1,
            "width": 1.0,
            "height": 1.0
        },
        "warehouseLocation": {
            "latitude": 54.4,
            "longitude": -32.7
        }
    }
])
  res.send(schema);
})

app.listen(port, function() {
  //callback function to display port number 
	 console.log('The server is running on port => '+port);
})