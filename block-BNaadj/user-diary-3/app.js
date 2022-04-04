const { urlencoded } = require('express');
let express = require('express');
let mongoose = require('mongoose');
let path = require('path');
let indexrequest = require('./routers/index');
let userurl = require('./routers/user');

mongoose.connect("mongodb://localhost/user", (err) => {
  console.log(err ? "not connect": "connect");
});

let app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine' ,'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', indexrequest);
app.use('/user', userurl);

app.use((req,res,next) => {
  res.send("page is not found");
})
app.use((err,req,res,next) => {
  res.send(err);
})
app.listen(3000, () => {
  console.log("server is run on port 3k");
});