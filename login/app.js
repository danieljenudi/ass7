const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.urlencoded({ extended: false }));


server.post('/', (req, res) => {
    
  if (req.body.username === 'daniel' && req.body.password === '12345') {
    res.send('Welcome, Daniel!');
  } else {
    res.send('Invalid username or password');
}});


server.listen(12345)