var express = require('express');
var router = express.Router();
const userModel=require('./users');
const model = require('mongoose');

//cookie code

router.get('/cookie',function(req,res){
res.cookie("name",101);
res.render('index');
})


router.get('/cookieread',function(req,res){
  req.cookie.name;
})


router.get('/cookiedelete',function(req,res){
  res.clearCookie("name");
})



//session code 
router.get('/session', function(req, res) {
  req.session.ban=true;
  console.log(req.session);
  res.render('index');
});

router.get('/ban',function(req,res){
  
  if(req.session.ban===true){
    res.send("bhai tu ban hai");
  }else{
    res.send("welcome ");
  }
})

router.get('/removeban',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.send("ban removed")
    console.log(req.session);

  })
})

//mongoos code
router.get('/create',async function(req, res) {
  // const createdUser=await userModel.create({
  //   username:"ayush",
  //   name:"ayush",
  //   age:17
  // })
  // res.send(createdUser);
});

router.get('/find', async function(req,res){
  const find=await userModel.find();
  // const find=await userModel.findOne({age:17});

  res.send(find);
})



module.exports = router;
