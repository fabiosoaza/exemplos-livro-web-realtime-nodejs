var http = require('http');
var fs = require('fs');
var leituraAsync = require('./leitura_async');
var leituraSync = require('./leitura_sync');

var arquivo = "files/node.exe";
var stream = fs.createWriteStream(arquivo);
var download = "http://nodejs.org/dist/latest/win-x64/node.exe";

http.get(download, function(res){
  console.log('Fazendo o download do Node.js');
  res.on('data', function(data){
    //console.log('args onData', [].slice.call(arguments));
    stream.write(data);
  });

  res.on('end', function(){
    //console.log('args onEnd', [].slice.call(arguments));
    stream.end();
    console.log('Download finalizado');
    leituraAsync(arquivo);
    leituraSync(arquivo);
  });

});
