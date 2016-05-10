var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// function sendToAllButSender(socket, msg) {
//     for (var current in io.sockets.sockets) {
//         if (current.id != socket.id ) {
//             current.emit('public message', msg);
//         }
//     }
// }


io.on('connection', function (socket) {
    console.log("connection");

    socket.emit("user login", socket.username);


    socket.on('new message', function (msg) {
        console.log(msg.data.toString());
        //socket.emit('own message', msg);
        msg.sender = socket.id;
        io.emit('new message', msg);

    });

    io.emit('new user'); // TODO - Add user name
});

//
// io.on('connect', function () {
//     console.log("connect");
// });


server.listen(3000, function () {

});