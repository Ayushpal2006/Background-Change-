

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

const userScheme = mongoose.Schema({
  username:String,
  nickname:String,
  description:String,
  categories:{
    type:Array,
    default:[]
  },
  dataCreated:{
    type:Date,
    default:Date.now()
  }
});

module.exports = mongoose.model("user",userScheme);


