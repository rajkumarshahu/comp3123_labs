 //var ft = require(' ./sportsteam');
 var calc = require('calculator');
 var comp = require('comparer');

var num1 = 5;
var num2 = 10;

var result = comp.AreNumberEqual(num1, num2) ? calc.Add(num1, num2) : calc.Subtract(num1, num2);

console.log(result);

var events = require('events');
var eventEmmiter = new events.EventEmitter();

var fn = function(){
    console.log('call me!!!');
}


eventEmmiter.on('call', fn);
eventEmmiter.emit('call');

