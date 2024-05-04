var express = require('express');
var router = express.Router();

var UserModel = require('./users')
var PostModel = require('./post')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/create',async function(req, res) {
  var createdUser = await UserModel.create({
    username: "Ayush",
    password: "Ayush",
    
    dp: "nice",
    email: "xyz@gmail.com"
  })

  res.send(createdUser);
});


router.get('/post',async function(req, res) {
  var createdPost = await PostModel.create({
    postText: "Ram Ram bhai Sarayan Ne",
    Users: "661ac25a44a15626e8a1d787"
  });
  
  var User=await UserModel.findOne({_id : "661ac25a44a15626e8a1d787"});
  User.posts.push(createdPost);
  await User.save();
  res.send("Done Baby");
});

module.exports = router;