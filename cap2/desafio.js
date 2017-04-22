var http = require('http');
var url = require('url');
var fs = require('fs');

var StringUtils =   {};
StringUtils.contains = (function(stringToSearch, stringToMatch){
  return stringToSearch.indexOf(stringToMatch) !=-1;
});


var server = http.createServer(function(request, response){

var result = url.parse(request.url, true);
console.log("Parsed object:"+ JSON.stringify(result));

var filename = null;
var siteContents  = null;

var httpHeaders = {};

if( result.pathname == '/' || StringUtils.contains(result.pathname, 'artigos')){
  httpHeaders.status = 200;
  httpHeaders.headers = {'Content-Type':'text/html;charset=utf-8'};
  filename = "artigos.html";
}
else if(StringUtils.contains(result.pathname, 'contatos')){
  httpHeaders.status = 200;
  httpHeaders.headers = {'Content-Type':'text/html;charset=utf-8'};
  filename = "contatos.html";
}
else{
  httpHeaders.status = 404;
  httpHeaders.headers = {'Content-Type':'text/html;charset=utf-8'};
  filename = "error.html";
}

//_dirname retorna o diretorio raiz da aplicacao
var filenameComplete = __dirname+'/views/'+filename;
console.log('Arquivo existe: '+fs.existsSync(filenameComplete));
fs.readFile(filenameComplete, function(error, content){

  if (error) {
      console.log(error);
      httpHeaders.status = 503;
      httpHeaders.headers = {'Content-Type':'text/html;charset=utf-8'};
      siteContents = "Erro interno do server!";
  }
  else{
    siteContents = content;
  }
  response.writeHeader(httpHeaders.status, httpHeaders.headers);
  response.end(siteContents);
  //fecha a conexao
  //caso nao seja colocado a conexao continua aberta
  response.end();
});


});

server.listen(3000, function(){
  console.log('Server running!!!');
});
