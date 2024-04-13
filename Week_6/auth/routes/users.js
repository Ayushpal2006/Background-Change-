var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const plm = require('passport-local-mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/testing');

const userScheme = mongoose.Schema({
  username:String,
  password:String,
  secret:String
});

userScheme.plugin(plm);

module.exports = mongoose.model("user",userScheme);
