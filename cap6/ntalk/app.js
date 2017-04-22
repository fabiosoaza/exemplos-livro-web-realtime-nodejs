const KEY = 'ntalk.sid';
const SECRET = 'ntalk';


var express = require('express');
var path = require('path');
//lugin express load mapeia diretorios para carregar e injetar modulos dentro de uma variavel que definirmos
var load = require('express-load');
//parseia os dados de um formulario para um objeto json disponibiliando a propriedade request.body
var bodyParser = require('body-parser');
//habilita o gerenciador de cookies
var cookieParser = require('cookie-parser');
//habilita o controle de sessao
var expressSession = require('express-session');
//permite que uma mesma rota seja reaproveitadaentre metodos distintos do http
var methodOverride = require('method-override');
//middleware de tratamento dos erros 500 e 404
var error = require('./middlewares/errors');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//compartilhar sessao socket io e express
var cookie = cookieParser(SECRET);
var store = new expressSession.MemoryStore();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//incluido antes do session para que o session utilize o mesmo sesion id incluido no cookie
app.use(cookie);
//mensagem resave option deprecated https://github.com/expressjs/session/issues/56
app.use(expressSession({
  secret: SECRET,
  name: KEY,
  resave: true,
  saveUninitialized: true,
  store: store,
}));




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

io.use(function(socket, next) {
  var data = socket.request;
  cookie(data, {}, function() {
    var sessionID = data.signedCookies[KEY];
    store.get(sessionID, function(err, session) {
      if (err || !session) {
        return next(new Error('acesso negado'));
      } else {
        socket.handshake.session = session;
        return next();
      }
    });
  });
});

//ordem e relevante pois os modulos serao injetados na ordem declarada
//deve ser colocado apos o app.use
load('models')
  .then('controllers')
  .then('routes')
  .into(app);

//deve ser chamada a uma nova chamda load
load('sockets')
  .into(io);

//as rotas de tratamento de error devem ser carregadas por ultimo apos as outras rotas
app.use(error.notFound);
app.use(error.serverError);

server.listen(3000, function() {
  console.log('NTalk running...');
});
