const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/login-app');

  let userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number
  });
  
  module.exports = mongoose.model('User', userSchema);