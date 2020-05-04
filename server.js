var PORT = process.env.PORT || 2403;
var ENV = process.env.NODE_ENV || 'development';


// http + express + socket.io
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server, {'log level': 0});

// deployd
require('deployd').attach(server, {
    socketIo: io,
    env: ENV,
    db: {
      host: process.env.databaseHost,
      port: process.env.databasePort,
      name: process.env.databaseName,
      credentials: {
        username: process.env.databaseUser,
        password: process.env.databasePassword
      }
    }
});
app.use(server.handleRequest);

app.use(bodyParser.urlencoded({
  extended: false
}));

// test deployd routing pass to following handler
// when a given page match an express handler
app.get('/express-custom-handler', function(req, res) {
	res.send('Ok');
});

// start server
server.listen(PORT, function() {
    console.log({ ENV:ENV, PORT:PORT });
});
server.on('error', function(err) {
    console.log(err.stack);
    process.nextTick(function() { // Give the server a chance to return an error
        process.exit();
    });
});
