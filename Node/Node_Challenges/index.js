
var http = require('http');

http.createServer(function (req, res){
    res.write("Hello World of web");
    res.end();
}).listen(8080);

var events = require('events');
var eventEmitter = new events.EventEmitter();

//create an event handler
var myEventHandler = function() {
    console.log('I hear a scream');
}

//Assign the event handler to an event
eventEmitter.on('scream', myEventHandler);

//fire the event
eventEmitter.emit('scream');


