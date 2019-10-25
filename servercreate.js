var http=require('http');
var server=http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('i am kanchan');
});
server.listen(3000,'127.0.0.1');
console.log('yes,now listening port 3000');