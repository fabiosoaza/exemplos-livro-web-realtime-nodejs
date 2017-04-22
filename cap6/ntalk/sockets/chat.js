module.exports = function(io) {
  var crypto = require('crypto');
  var sockets = io.sockets;
  sockets.on('connection', function(client) {
    var session = client.handshake.session;
    var usuario = session.usuario;
    client.on('send-server', function(msg) {
      var sala = session.sala;
      var data = {email:usuario.email, sala:sala};
      var msg = "<b>" + usuario.nome + ":</b> " + msg + "<br/>";
      //responde apenas ao próprio client
      //client.emit('send-client', msg);
      //reponde a todos os clientes exceto ao emissor
      //client.broadcast.emit('send-client', msg);
      client.broadcast.emit('new-message', data);
      sockets.in(sala).emit('send-client', msg);
    });
    client.on('join', function(sala) {
      if (!sala) {
        var timestamp = new Date().toString();
        var md5 = crypto.createHash('md5');
        sala = md5.update(timestamp).digest('hex');
      }
      session.sala = sala;
      client.join(sala);
    });
    //criado evento para quando o cliente desconectar da sala
    client.on('disconnect', function() {
      client.leave(session.sala);
    });
  });
};
