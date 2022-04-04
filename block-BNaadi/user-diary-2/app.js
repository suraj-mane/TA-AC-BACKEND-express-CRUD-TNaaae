var express = require("express");
var mongoose = require("mongoose");
var path = require("path");
let indexUrl = require("./router/index");
var userUrl = require("./router/user");

mongoose.connect("mongodb://localhost/user", (err) => {
  console.log(err ? "not connect":"connect" );
})

var app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/', indexUrl);
app.use('/user', userUrl);

app.use((req,res) => {
  res.send("Page is not found");
})

app.use((err,req,res,next) => {
  res.send(err);
})
app.listen(3000, () => {
  console.log("server is run on port 3k");
});