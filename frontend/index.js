var path = require('path');
var app = require('express')();
var http = require('http').Server(app);

var port = 8080;

app.get('/', function(req, res){
  res.sendFile(path.resolve(__dirname + '/index.html'));
  //res.send('Frontend - It  works!');
});

http.listen(port, function(){
  console.log('Frontend-App is listening on port ' + port);
});
