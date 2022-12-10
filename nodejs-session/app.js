const http=require('http');
var fs = require('fs');
// console.log(http);
http.createServer((req,res)=>{
    // console.log(req);
    fs.readFile('javascript.txt', 'utf8', function(err, data) {
        if (err) throw err;
        res.setHeader('status',200);
        res.setHeader('content-type','text/plain');
        res.end(data)
      });

}).listen(8888);