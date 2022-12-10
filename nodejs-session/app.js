const http=require('http');
// console.log(http);
http.createServer((req,res)=>{
    console.log(req);
    res.setHeader('status',200);
    res.setHeader('content-type','text/plain');
    res.end('first node server response')
}).listen(8888);