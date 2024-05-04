const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.get('/', (req, res) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("Password", salt, function(err, hash) {
            // Store hash in your password DB.
            console.log(hash);
            console.log(salt);
            
        });
    })
  res.send('Done');
});

app.get('/compare', (req,res)=>{
    bcrypt.compare("Password", "$2b$10$ygV6RnVQpzf2Rk5kWcXNnev5wCH3Ux9hx289fu8kgsFGX/K.U1vGy", function(err, result) {
        console.log(result);
    })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});