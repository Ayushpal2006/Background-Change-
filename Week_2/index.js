const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000


app.use(bodyParser.json());
// function middleware(req,res,next){
//   console.log("this is from middleware  "+ req.headers.counter);
//   next();
// }

// app.use(middleware);

function CalculateSum(counter){  
    let sum=0;
    for(let i=0;i<=counter;i++){
        sum =sum+i;
    }

    return sum;
}


function CalculateMul(counter){
    let mul=1;
    for(let i=1;i<=counter;i++){
        mul =mul*i;
    }

    return mul
}

function handleRequest(req, res){
    let counter=req.query.counter;   //give request to browser;
    // let counter=req.headers.counter;
    // let counter=req.body.counter;
    
      let CalculatedSum=CalculateSum(counter);
      let CalculatedMul=CalculateMul(counter);

      let answerObject={
        sum:CalculatedSum,
        mul:CalculatedMul,
      };

      let answer="This is the sum of the number  : "+CalculatedSum;
      res.status(200).send(answerObject)
    
}

function CreateUser(req,res){
  res.send("Hello World")
}

function getHtml(req,res){
  res.sendFile(__dirname + '/index.html')
}

app.get('/',getHtml)
app.get('/:username', handleRequest); 
app.post('/CreateUser',handleRequest)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



