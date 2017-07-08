//add the express module
var express = require("express");

//add the path module
var path = require("path");

//create an instance of express module
var app = express();

//express.static built-in middle ware function in Express is used here for serving the static files
//like html, css, images etc. from EmployeeCRUDUsingMERN/app/dist directory
app.use(express.static(path.join(__dirname,"../app/dist")));

//run the server
  var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('RNA  Team Says: Server started and is listening at :> http://%s:%s', host, port);
});