require('dotenv').config();
const express = require('express');
const app = express();
//const port = 3000;

app.get('/',(req, res)=>{
  res.send("<h1>this is your home page</h1>");
})

app.get('/login', (req, res)=>{
  res.send("<h1>this is my login page</h1>")
})

app.listen(process.env.PORt,()=>{
  console.log(`Your server is running on http://localhost:${process.env.PORt}`);
})