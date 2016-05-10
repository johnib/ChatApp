var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connect', function () {
  console.log('new connection');
  io.emit('new message', 'Hello server');
});

io.on('new message', function (data) {
  console.log(data);
});

server.listen(3000, function () {

});