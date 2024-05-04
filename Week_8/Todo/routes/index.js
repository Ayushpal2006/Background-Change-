var express = require('express');
var router = express.Router();
var userModel = require('./users');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/read', async function(req, res) {
  let users = await userModel.find();
  res.render('read',{users});
});


router.get('/delete/:id', async function(req, res) {
  let users = await userModel.findOneAndDelete({_id: req.params.id});
  res.redirect('/read');
});

router.get('/edit/:id', async function(req, res) {
  let users = await userModel.findOne({_id: req.params.id});
  res.render('edit',{users});
});


router.post('/create', async function(req, res) {
  let{name, email, image} = req.body;
  let createdUser = await userModel.create({name, email, image});
  res.redirect('/read');

});

router.post('/update/:id', async function(req, res) {
  let{name, email, image} = req.body;
  let updatedUser = await userModel.findOneAndUpdate({_id: req.params.id},{name, email, image} ,{new:true});
  res.redirect('/read');
});

module.exports = router;
