var path = require('path');
var app = require('express')();
var http = require('http').Server(app);
//var io = require('socket.io')(http);
var mongoose = require('mongoose');

var port = 8000;

var dbURI = 'mongodb://mongodb/app';
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

app.get('/', function(req, res){
  res.send('Backend - It works!');
});

//io.on('connection', function(socket){
//  socket.on('chat message', function(msg){
//    io.emit('chat message', msg);
//  });
//});

http.listen(port, function(){
  console.log('Backend-App is listening on port ' + port);
});
