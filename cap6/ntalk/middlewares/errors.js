exports.notFound = function(request, response, next){
//implementacao de algo que lembra um filtro
  response.status(404);
  response.render('not-found');
};
exports.serverError = function(error, request, response, next){
//implementacao de algo que lembra um filtro
  response.status(500);
  response.render('server-error',{error:error});
};
