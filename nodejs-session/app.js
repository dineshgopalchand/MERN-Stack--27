const http = require('http');
var fs = require('fs');
const { uuid } = require('uuidv4');
const url=require('url');
console.log(uuid());

const port = process.env.port || 8000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  // const urlVal =new URL ('http://localhost:8000'+req.url);
  const urlVal =url.parse(req.url);
  const pathname=urlVal.pathname;
  if(pathname=='/'){
    res.setHeader('status', 200);
    res.setHeader('content-type', 'text/plain');
    return res.end('Home page');
  }else if(pathname=='/about'){
    res.setHeader('status', 200);
    res.setHeader('content-type', 'text/plain');
    return res.end('About');
  }else if(pathname=='/contact'){
    res.setHeader('status', 200);
    res.setHeader('content-type', 'text/plain');
    return res.end('Contact');
  }
  res.setHeader('status', 200);
  res.setHeader('content-type', 'text/plain');
  res.end('Not Found');
});
server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});