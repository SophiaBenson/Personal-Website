var express = require('express');
var app = express();
var path = require('path');

app.listen(process.env.PORT || 3000, function () {
  console.log("server is listening on port 3000");
});
