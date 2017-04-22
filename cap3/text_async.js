//https://nodejs.org/docs/v0.12.4/api/fs.html
var fs = require('fs');

for (var i=1; i<=5; i++) {
  var file = "files/async-txt"+i+".txt";
  //escrita assincrona
  fs.writeFile(file, "Hello Node JS", function(error){
      console.log("OK ");
     //var args = [].slice.call(arguments);
  });

}
