module.exports = function(request, response, next){
//implementacao de algo que lembra um filtro
  if(!request.session.usuario){
    return response.redirect('/');
  }
  return next();
};
