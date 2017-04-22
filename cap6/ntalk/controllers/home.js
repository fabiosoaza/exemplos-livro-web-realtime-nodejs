module.exports = function(app){
  var HomeController = {
    index: function(request, response){
      response.render('home/index');
    },
    login: function(request, response){

      var email = request.body.usuario.email;
      var nome = request.body.usuario.nome;
      if (email && nome) {
        var usuario = request.body.usuario;
        usuario['contatos'] = [];
        request.session.usuario = usuario;
        response.redirect('/contatos');
      }
      else{
        res.redirect('/');
      }

    },
    logout: function(request, response){
      request.session.destroy();
      response.redirect('/');
    },
  };
  return HomeController;
};
