var http = require('http');
var server = http.createServer(
  function(request, response){

    if (request.url == "/" ) {
        response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        response.write("<h1>Home Page</h1>");

    }
    else if (request.url == "/welcome" ) {
        response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        response.write("<h1>Bem vindo</h1>");
    }
    else{
      response.writeHead(404, {"Content-Type": "text/html;charset=utf-8"});
      response.write("<h1>A página solicitada não pode encontrada</h1>");
    }

    response.end();
  });

server.listen(3000, function(){
  console.log('Server Running!');

});
