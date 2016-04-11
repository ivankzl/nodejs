var net = require('net');
var port = 1235;

net.createServer(function(socket){
    console.log('A new client connected');

    socket.on('data', function(data){
        console.log('Data received from client : ' + data);
    });

    socket.on('close', function(data){
        console.log('A Client disconnected');
    });
}).listen(port, "localhost");

console.log("Server running");
