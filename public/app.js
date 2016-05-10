(function (io) {
  function sendMessage(msgRawValue) {
    var msg = {
      data: msgRawValue
    };

    socket.emit('new message', msg);
  }

  var addr = 'http://10.0.1.13:3000';
  var socket = io(addr);

  //region Events
  socket.on('new user', function (name) {
    console.log('new user: '.concat(name || ""));
  });

  socket.on('new message', function (msg) {
    if (msg.sender.endsWith(socket.id)) {
      console.error(msg.data);
    } else {
      console.log(msg.data);
    }

  });
  //endregion

  var textBox = document.getElementById('textbox');
  textBox.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
      sendMessage(textBox.value);
      textBox.value = "";
    } else {
      // emit typing
      console.info("typing");
    }
  });
})(io);
