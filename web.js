var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


var buffer = fs.readFileSync('index.html');
var outputText = buffer.toString();

app.get('/', function(request, response) {
  response.send(outputText);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
