const express = require('express')
const app = express()
const port = 3000

app.set("view engine","ejs"); //confire ejs

app.use(express.static('./public'));


app.get('/', (req, res) => {
  res.render("index")         //render instead of send
})

app.get('/about',(req,res)=>{
    res.render("about",{Anton:"Ayush"});
})

app.get('/error',(req,res,next)=>{
  throw new error("something Went Wrong");
})

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})