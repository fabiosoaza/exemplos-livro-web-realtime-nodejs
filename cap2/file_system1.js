var fs = require('fs');
//leitura asiincrona
fs.readFile('views/index.html', function(error, file){
  if (error) {
    throw error;
  }
  console.log('file: '+file);
});

//leitura sincrona
var file2 = fs.readFileSync('views/index.html');
console.log('file2: '+file2);
