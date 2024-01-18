const express = require('express')
const app = express()
const port = 3000

function CalculateSum(counter){
    let sum=0;
    for(let i=0;i<=counter;i++){
        sum =sum+i;
    }

    return sum;
}

function handleRequest(req, res){
    let counter=req.query.counter;   //give request to browser;
    let CalculatedSum=CalculateSum(counter);
    let answer="This is the sum of the number  : "+CalculatedSum;
    res.send(answer)
}

function CreateUser(req,res){
  res.send("Hello World")
}


app.get('/:username', handleRequest); 
app.post('/CreateUser',CreateUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



