var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:String,
  age:Number,
  email:String
}, {timestamps: true});

var user = mongoose.model('user',userSchema);

module.exports = user;