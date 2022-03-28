var express = require("express");
var path = require("path");

var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.use("/", require('./routers/users'));

app.listen(3000, () => {
  console.log("server is run on port 3k");
})