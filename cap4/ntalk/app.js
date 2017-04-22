var express = require('express');
var path = require('path');
var load = require('express-load');
var app = express();

//ordem e relevante pois os modulos serao injetados na ordem declarada
load('models')
  .then('controllers')
  .then('routes')
  .into(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function(){
  console.log('NTalk is running...');
});
