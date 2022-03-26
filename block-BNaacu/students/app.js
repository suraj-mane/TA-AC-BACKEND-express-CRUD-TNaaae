var express = require("express");
var path = require("path");

var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/students', require('./routers/students'));

app.listen(3000, () => {
  console.log("server is on port 3k");
});