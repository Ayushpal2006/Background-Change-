var express = require('express');
var router = express.Router();
const userModel = require('./users')

/* GET home page. */
router.get('/', function(req, res,) {
  res.render('index');
  
});

router.get('/Create',async function(req, res,) {
  var createdUser = await userModel.create({
    username:"rahul",
    nickname:"haddi",
    description:"love tech",
    categories:['js','html','css','node','gsap']
    })

   res.send(createdUser); 
});

router.get('/find',async function(req, res,) {
  //to perform in-Case Sensitive seach use RegExp;
  var Regex = new RegExp("^Ayush$" , 'i');
  var User = await userModel.find({username : Regex})

   res.send(User); 
});



module.exports = router;
