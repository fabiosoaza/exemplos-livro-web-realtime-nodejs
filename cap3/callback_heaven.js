//https://nodejs.org/docs/v0.12.4/api/fs.html
var fs = require('fs');

var lerArquivo = function(arquivo) {
  var path = './' + arquivo;
  fs.stat(path, function(errorStat, stat) {
    if (errorStat) {
      throw errorStat;
    }
    if (stat.isFile()) {
      console.log('%s %d bytes', arquivo, stat.size);
    }
  });
};

var lerDiretorio = function(diretorio) {
  fs.readdir(diretorio, function(error, files) {
    if (error) {
      throw error;
    }
    files.forEach(
      function(content) {
        lerArquivo(content);
      }
    );
  });

}

lerDiretorio(__dirname);
