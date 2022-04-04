var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:String,
  email:String,
  age:Number,
  bio:String
}, {timestamps:true});

var user = mongoose.model('user', userSchema);
module.exports = user;