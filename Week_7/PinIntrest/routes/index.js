var express = require('express');
var router = express.Router();

var UserModel = require('./users')
var PostModel = require('./post')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/createdUser',async function(req, res) {
  var Us = await UserModel.create({
    username: "Ayush",
    password: "Ayush",
    
    dp: "nice",
    email: "xyz@gmail.com"
  })

  res.send(Us);
});

module.exports = router;
