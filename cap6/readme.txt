npm install -g express
npm install -g express-generator

express ntalk --ejs

#documentacao ejs http://www.embeddedjs.com/

#atualizar moduloes
npm update --lastest --save
#diferenca entre ^ e ~ package.json http://stackoverflow.com/questions/22343224/difference-between-tilde-and-caret-in-package-json

#plugin express load mapeia diretorios para carregar e injetar modulos dentro de uma variavel que definirmos
npm install express-load --save

#para trabalhar com sessoes e necessario instalar o modulo express-session
npm install express-session --save

#mensagem resave option expresssession https://github.com/expressjs/session/issues/56

#criar rotas no padrao rest com o midlleare method-override
#permite que uma mesma rota seja reaproveitadaentre metodos distintos do http
npm install method-override --save

#instalar com socket.io para trabalhar com uma aplicacao bidirecional
npm install socket.io --save
