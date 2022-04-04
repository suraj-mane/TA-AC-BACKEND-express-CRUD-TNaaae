let express = require('express');
let routers = express.Router();
let user = require('../models/user');

routers.get('/', (reqw,res,next) => {
  user.find({}, (err,data) => {
    if(err) return next(err);
    res.render('userdeatils', {data:data});
  })
})
routers.post('/', (req,res,next) => {
  user.create(req.body, (err,data) => {
    if(err) return next(err);
    res.redirect('/user');
  })
})
routers.get('/new', (req,res,next) => {
  res.render('userform')
})
routers.get('/:id', (req,res,next) => {
  let id = req.params.id;
  user.findById(id, (err, data) => {
    if(err) return next(err);
    res.render('singleuser', {data:data})
  })
})
routers.get('/:id/edit', (req,res,next) => {
  var id = req.params.id;
  user.findById(id,(err, data) => {
    if(err) return next(err);
    res.render('edit', {data:data});
  })
})
routers.post('/:id/edit', (req,res,next) => {
  var id = req.params.id;
  user.findByIdAndUpdate(id, req.body, (err, data) => {
    if(err) return next(err);
    res.redirect('/user');
  })
})
routers.get('/:id/delete', (req,res,next) => {
  var id =req.params.id;
  user.findByIdAndDelete(id, (err) => {
    if(err) return next(err);
    res.redirect('/user/');
  })
})


module.exports = routers;