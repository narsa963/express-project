const express= require('express');

const app = express();

app.get('/', function(req, res){
  res.send('<h1>Hello</h1>');
})

app.get('/contact', function(req, res){
  res.send('contact me @gmail.com');
})

app.get('/about', function(req, res){
  res.send('my self narsamma, iam working as developer');
})

app.listen(3000, function(){
  console.log('server started on port 3000')
})
