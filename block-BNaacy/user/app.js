var express = require("express");
var mongoose = require("mongoose");
var path = require('path');

mongoose.connect("mongodb://localhost/user", (err) => {
  console.log(err? err:'database is connected');
});

var app = express();

app.use(express.urlencoded({extended:false}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/users', require(__dirname + '/routers/user'));

app.listen(3000, () => {
  console.log("server is port on 3k");
})