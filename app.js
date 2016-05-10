var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function (data) {
    io.on('new message', function (msg) {
        console.log(msg.toString());
    });
});

io.on('connect', function () {
    io.emit('new message', 'Hello server');
});


server.listen(3000, function () {

});