var http = require('http');

// shorthanded to: req, res
var server = http.createServer(function(request, response){
  // console.log(request);
  // console.log(response);
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  response.end('Hello, world!');
});

server.listen(1337, '127.0.0.1');
console.log('Server listening at 127.0.0.1:1337');
