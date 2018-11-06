var events = require('events');
var eventEmitter = new events.EventEmitter();

//create and event handler:
var myEventHandler = function(){
    console.log("Alarm has been triggered!!!");
    eventEmitter.emit('call');
};

var callHandler = function(){
    console.log('Call 911');
};

var actionHandler = function(){
    console.log('Hurry up!!!')
};

//Assign the eventhandler to an event:
//eventEmitter.on('alarm', myEventHandler);
//eventEmitter.on('call', myEventHandler);

//event chaining
eventEmitter
.on('alarm', myEventHandler)
.on('call', callHandler)
.on('alarm',actionHandler);


//Fire the 'scream' event:
eventEmitter.emit('alarm');


