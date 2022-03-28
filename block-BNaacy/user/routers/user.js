var express = require("express");
var router = express.Router();
var user = require('../models/user');

router.get('/',(req,res) => {
  res.render('userdetails');
})
router.get('/new',(req,res) => {
  res.render('userForm');
})
router.post('/',(req,res,next) => {
  user.create(req.body, (err, user) => {
    if(err) return next(err);
    res.redirect('/users');
  })
})

module.exports = router;