var express = require('express');
var router = express.Router();
const userModel = require('./users')
const localStrategy = require('passport-local');
const passport = require('passport');


passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/profile', IsloggedIn,function(req, res,) {
  res.render('profile');
  
});

//register Route
router.post('/register', function(req,res){
  var userDate = new userModel({
    username:req.body.username,
    secret:req.body.secret
  });

  userModel.register(userDate,req.body.password)
  .then(function(registeredUser){
    passport.authenticate("local")(req,res,function(){
      res.redirect('/profile')
    })
  })
})

//login route
router.post('/login',passport.authenticate("local",{
  successRedirect:"/profile",
  failureRedirect:"/"
}),function(req,res){});

//logout route
router.get('/logout',function(req,res,next){
  req.logout(function(err){
    if(err){return next(err)}
    res.redirect('/')
  })
});

//IsloggedIn
function IsloggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
};

module.exports = router;
