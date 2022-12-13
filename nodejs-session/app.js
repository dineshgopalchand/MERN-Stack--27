// const http = require('http');
// var fs = require('fs');
// const { uuid } = require('uuidv4');
// const url=require('url');
const express= require('express');
// console.log(uuid());
const port = process.env.port || 8000;

const app=express();
app.get('/', function (req, res) {
  console.log(req.method)
  res.send('GET-Hello World')
})
app.post('/', function (req, res) {
  console.log(req.method)
  res.send('POST - Hello World')
})
app.delete('/', function (req, res) {
  console.log(req.method)
  res.send('Delete - Hello World')
})
app.get('/about', function (req, res) {
  res.send('GET- About- Hello World')
})
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

 