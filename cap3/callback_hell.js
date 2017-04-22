//https://nodejs.org/docs/v0.12.4/api/fs.html

var fs = require('fs');

fs.readdir(__dirname, function(error, files){
  if(error){ throw error; }
  files.forEach(
    function(content){
      var path = './'+content;
      fs.stat(path, function(errorStat, stat){
        if(errorStat){ throw errorStat; }
        if(stat.isFile()){
          console.log('%s %d bytes', content, stat.size);
        }
      }
    );

    }
  );
});
