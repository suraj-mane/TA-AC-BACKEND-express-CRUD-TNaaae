var express = require("express");
var router = express.Router();
var path = require("path");



router.get('/',(req,res) => {
  res.render('user',{'name':["suraj"]})
})
router.get('/:id', (req,res) => {
  res.render('singleUser',{'id':['id is not found']});
})
router.get('/new', (req,res) => {
  res.sendFile(path.join(__dirname, '../user.html'));
})
router.delete('/:id', (req,res) => {
  res.send("user is delete");
})
router.put('/:id',(req,res) => {
  res.render('userForm',{'name':'user is updsate'});
})


module.exports = router;