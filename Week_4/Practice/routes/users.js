var express = require('express');
var router = express.Router();
const mongoos=require('mongoose');
mongoos.connect("mongodb://127.0.0.1:27017/practice");
const userScheme=mongoos.Schema({
  username:String,
  name:String,
  age:Number
})

module.exports=mongoos.model("Users",userScheme);

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
