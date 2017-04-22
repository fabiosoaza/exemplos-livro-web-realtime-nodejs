module.exports = function(app) {
  //emular a execucao de um filtro before e so colocar o middleware antes da funcao principal
  //caso queiramos criar um filtro after deve-se colocar o filtro por ultimo
  var autenticar = require('./../middlewares/autenticador');
  var chat = app.controllers.chat;
  app.get('/chat', autenticar, chat.index);

};
