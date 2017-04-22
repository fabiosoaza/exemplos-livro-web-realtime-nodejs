var http = require('http');
//https://nodejs.org/docs/v0.12.4/api/url.html
var url = require('url');
var server = http.createServer(
  function(request, response){

    response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    response.write("<h1>Dados da query string</h1>");

    //http://stackoverflow.com/questions/25005736/node-js-url-parse-only-returns-null-for-host-and-protocoll
    //req.url just returns path, You should detect host and protocol separately.
    console.log("url"+request.url);

    var urlComplete = (request.connection.encrypted ? 'https': 'http') + '://' + request.headers.host + request.url;
    //parseia um aurl qualquer
    var result = url.parse(urlComplete, true);

    for(var key in result.query){
      response.write("<h2>"+key+":"+result.query[key]+"</h2>");
    }

    console.log("Parse object:"+ JSON.stringify(result));

    response.end();
  });

server.listen(3000, function(){
  console.log('Server Running!');

});
