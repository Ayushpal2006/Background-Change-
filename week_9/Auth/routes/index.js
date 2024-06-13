var express = require('express');
var router = express.Router();
var userModel = require('./users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/sign',async function(req, res, next) {
  let{name,email,password,age} = req.body;

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      if (err) throw err;
      let user = new userModel({
        name,
        email,
        password: hash,
        age
      });

      var token = jwt.sign({email},"Secret")
      res.cookie("token",token);    
    
      res.json(user);
    });
  });
  
});

router.get('/logout',function(req, res) {
  res.clearCookie('token');
  console.log(req.cookies);
  console.log("Your are Logged out");
  res.redirect('/');
});

router.get('/logIn',function(req, res) {
  res.render('logIn');
});

router.post('/logIn',async function(req, res) {
  
  let user = await userModel.findOne({email:req.body.email});
    
    if (!user) {
      res.send("User not found");
    }
    bcrypt.compare(req.body.password, user.password, function(err, result) {
      if (result) {
        var token = jwt.sign({email: user.email},"Secret")
        res.cookie("token",token); 
        res.send("User Logged in");
      } else {
        res.render("Password is incorrect");
      }
    });
  });





module.exports = router;
