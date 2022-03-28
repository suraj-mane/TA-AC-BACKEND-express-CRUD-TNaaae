var express = require("express");
var mongoose = require("mongoose");
var path = require('path');

mongoose.connect('mongodb://localhost/user', (err) => {
  console.log(err? 'db not connect': 'db is connect')
})

var app = express();

app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname + '/public/'))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

app.use('/', require('./routers/index'))
app.use('/user', require('./routers/user'));

app.listen(3000, () => {
  console.log("server is run on port 3k");
})