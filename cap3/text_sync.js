//https://nodejs.org/docs/v0.12.4/api/fs.html
var fs = require('fs');

for (var i=1; i<=5; i++) {
  var file = "files/sync-txt"+i+".txt";
  fs.writeFileSync(file, "Hello Node JS");
  //console.log("Out: "+out);
  console.log("OK ");
}
