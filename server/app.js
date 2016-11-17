var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use( bodyParser.json() );


app.listen(process.env.PORT || 3000, function () {
  console.log("server is listening on port 3000");
});




app.get('/', function (req, res) {
  console.log('In main schedule page');
  res.sendFile(path.resolve('index.html'));
});
