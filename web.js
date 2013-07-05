var express = require('express');
var express = require('buf');
var express = require('fs');

var app = express.createServer(express.logger());


var buffer = new Buffer[25];
//buffer = fs.readFileSync('index.html');
var outputText = 'hello' ; //buffer.toString();
app.get('/', function(request, response) {
  response.send(outputText);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
