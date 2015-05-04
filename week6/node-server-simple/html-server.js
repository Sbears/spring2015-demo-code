// InClass Challenge:
//    Send down some HTML content instead of plain text.
//    The content should contain an h1 and a paragraph.
//    (You can skip the normal boilerplate and just send the tags)

var http = require('http');

var counter = 0;

// shorthanded to: req, res
var server = http.createServer(function(request, response){
  console.log(request.url);
  if(request.url === '/favicon.ico'){
    return response.end('no plz');
  }
  // console.log(response);
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });

  var responseStr = '<h1>Hello!</h1><p>You are visitor '+counter+'</p>';
  var ulStr = '<ul>';
  for (var i = 0; i < 10; i++) {
    ulStr += '<li>' + i + '</li>';
  }
  ulStr += '</ul>';


  response.end(responseStr + ulStr);
  counter++;
});

server.listen(1337, '127.0.0.1');
console.log('Server listening at 127.0.0.1:1337');
