var express = require('express');
var app = express();
var fs = require("fs");
var http = require("http");
app.get('/listUsers', function (req, res) {
   http.get("http://localhost/info.php", function (req, response) {
	   console.log(req);
      console.log( response );
      res.end( response );
   });
})

var server = app.listen(73, function () {
   var host = "localhost"
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})