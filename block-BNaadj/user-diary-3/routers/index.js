let express = require('express');
let routers = express.Router();

routers.get('/', (req,res,next) => {
  res.render('index');
})

module.exports = routers;