const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', (req, res) => {
    var token = jwt.sign({email:"abc@1234"},"Secret")
    res.cookie("token",token);    
    res.send(token);
});


app.get('/check', (req, res) => {
    var decoded = jwt.verify(req.cookies.token, "Secret");
    res.send(decoded);

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});