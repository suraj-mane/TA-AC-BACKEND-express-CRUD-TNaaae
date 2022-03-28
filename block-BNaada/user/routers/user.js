var express = require("express");
var router = express.Router();
var user = require('../models/user');

router.get('/',(req,res,next) => {
  user.find({}, (err,user) => {
    if(err) return next(err);
    res.render('user', {user:user});
  })
})

router.get('/new', (req,res,next) => {
  res.render('userForm');
})

router.get('/:id',(req,res,next) => {
  var id = req.params.id;
  user.findById(id, (err,u) => {
    if(err) return next(err);
    res.render('userdetail', {u:u});
  })
})

router.post('/',(req,res,next) => {
  user.create(req.body, (err, user) => {
    if(err) return next(err);
    res.redirect('/user');
  })
})

module.exports = router;