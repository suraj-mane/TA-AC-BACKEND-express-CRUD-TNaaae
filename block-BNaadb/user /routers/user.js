var express = require('express');
var router = express.Router();
var user = require('../models/user')

router.get('/',(req,res,next) => {
  user.find({}, (err,user) => {
    if(err) return next(err);
    res.render('userMain',{user:user});
  })
})

router.get('/new',(req,res,next) => {
  res.render('newUser');
})

router.post('/',(req,res,next) => {
  user.create(req.body, (err,user) => {
    if(err) return next(err);
    res.redirect('/user/');
  })
})

router.get('/:id', (req,res,next) => {
  var id = req.params.id;
  user.findById(id, (err,user) => {
    if(err) return next(err);
    res.render('singleUser', {user:user});
  })
})

router.get('/:id/edit',(req,res,next) =>{
  var id = req.params.id;
  user.findById(id, (err, user) => {
    if(err) return next(err);
    res.render('edit',{user:user});
  })
})
router.post('/:id',(req,res,next) => {
  var id = req.params.id;
  user.findByIdAndUpdate(id, req.body, (err, user) => {
    if(err) return next(err);
    res.redirect('/user/');
  })
})
router.get('/:id/delete', (req,res,next) => {
  var id = req.params.id;
  user.findByIdAndDelete(id, (err,user) => {
    if(err) return next(err);
    res.redirect('/user/');
  })
})
module.exports = router;