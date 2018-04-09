var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listen to request on port 4000');
});

//Static files
app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection');

    socket.on('chat', function(data){
        io.sockets.emit('chat', data)
    });

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data)
    })
})