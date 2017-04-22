var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
//_dirname retorna o diretorio raiz da aplicacao
fs.readFile(__dirname+'/views/index.html', function(error, content){
  if (error) {
      throw error;
  }
  response.writeHeader(200, {'Content-Type':'text/html;charset=utf-8'});
  response.write(content);
  //fecha a conexao
  //caso nao seja colocado a conexao continua aberta
  response.end();
});


});

server.listen(3000, function(){
  console.log('Server running!!!');
});
