module.exports = function(app){
   //emular a execucao de um filtro before e so colocar o middleware antes da funcao principal
   //caso queiramos criar um filtro after deve-se colocar o filtro por ultimo
  var autenticar = require('./../middlewares/autenticador');

    var after = require('./../middlewares/after');
    var contatos = app.controllers.contatos;
    app.get('/contatos', autenticar, contatos.index, after);
    app.get('/contato/:id', autenticar, contatos.show, after);
    app.post('/contato', autenticar, contatos.create, after);
    app.put('/contato/:id', autenticar, contatos.update, after);
    app.get('/contato/:id/editar', autenticar, contatos.edit, after);
    app.delete('/contato/:id', autenticar, contatos.destroy, after);
};
