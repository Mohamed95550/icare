const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

  firstname: { type: String , required: true , maxlength:10 , minlength:2 },
  lastname: { type: String , required: true, maxlength:10 , minlength:2 } ,
  email : { type: String , required: true , maxlength:50 } ,
  password : { type: String , required: true , minlength:6 } ,
  date: { type: Date , default: Date.now() } ,
  role : { type: String , default: "client" } ,
  avatar: { type: String , default: "./assets/avatar.jpg" }
  
});
const User = mongoose.model('User', userSchema);

module.exports = User;