var express = require("express");
var router = express.Router();
var user = require('../models/user');

router.get('/', (req,res,next) => {
  res.render('index');
})

module.exports = router;