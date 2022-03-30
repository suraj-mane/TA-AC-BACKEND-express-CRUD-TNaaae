var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var index = require('./routers/index');
var user = require('./routers/user')

mongoose.connect('mongodb://localhost/user', (err) => {
  console.log(err? err:'connected');
})

var app = express();

app.use(express.urlencoded({extended: false}));

app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use('/', index);
app.use('/user', user);

app.listen(3000, () => {
  console.log("server is run on port");
})