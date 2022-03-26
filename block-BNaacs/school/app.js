var express = require("express");
var mongoose = require("mongoose");
var path = require("path");

mongoose.connect("mongodb://localhost/students", (err) => {
  console.log(err? err: "connect to database");
})

var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

app.get("/", (req,res,next) => {
  res.render('index',{name:"sun"});
});

app.listen(3000, () => {
  console.log("server is run on port 3k");
});