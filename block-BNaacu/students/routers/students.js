var express = require("express");
var routers = express.Router();

routers.get('/', (req,res,next) => {
  res.render("students", { list: ["ankit", "suraj", "prashant", "ravi"] });
});

routers.get('/new', (req,res,next) => {
  res.send("form");
});
routers.post('/', (req,res,next) => {
  // rarab the data
});
routers.get('/:id', (req,res,next) => {
  res.render("studentDetail", {
    student: { name: "rahul", email: "rahul@altcampus.io" }
  }) 
});



module.exports = routers;