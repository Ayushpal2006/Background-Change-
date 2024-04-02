const bodyParser = require('body-parser');
const express = require('express')
const fs=require('fs');
const app = express()
const port = 3000
app.use(bodyParser.json());


app.get('/todo', (req, res) => {
  fs.readFile('todo.json',"utf8",(err,data)=>{
    if(err)throw err;
    res.json(JSON.parse(data));
  })
})





app.post('/todo', (req, res) => {
    const newTodo = {
      id: Math.floor(Math.random() * 15), // unique random id
      title: req.body.title,
      description: req.body.description
    };
    fs.readFile("todo.json", "utf8", (err, data) => {
      if (err) throw err;
      const todos = JSON.parse(data);
      todos.push(newTodo);
      fs.writeFile("todo.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(201).json(newTodo);
      });
    });
  });


  function findIndex(arr,target){
    for(let index = 0; index < arr.length; index++) {
        if(target == arr[index].id){
            return index;
        };
    };
}
function removeAtIndex(arr,tar){
    arr.splice(tar,1);
    return arr
}   



app.delete('/todo/:id', (req, res) => {

    fs.readFile("todo.json", "utf8", (err, data) => {
      if (err) throw err;
      var todos = JSON.parse(data);
      const todoIndex = findIndex(todos, parseInt(req.params.id));
      if (todoIndex === -1) {
        res.status(404).send();
      } else {
        todos = removeAtIndex(todos, todoIndex);
        fs.writeFile("todo.json", JSON.stringify(todos), (err) => {
          if (err) throw err;
          res.status(200).send("hello world");
        });
      }
    });
  });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})