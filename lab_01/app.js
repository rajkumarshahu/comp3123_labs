var moment = require('moment');
var format = require('date-format');
var greet = function (){
    for(i=0; i< 10; i++){
        var wrapped = moment(new Date());

        console.log('Hello world');
        console.log('');
        getCurrentDateAndTime();
        console.log('');
        console.log(wrapped);
    }   
};


var getCurrentDateAndTime = function(){
    var date_yymmddTT = format.asString(new Date()); 
    var formattedDate =   date_yymmddTT.replace(/T/, ' Current Time: ').replace(/\..+/, '');   // replace T with a space and delete the dot and everything after                                                                       
    var formattedTime = formattedDate.replace(/:\d+ /, ' ');
    for(i=0; i< 10; i++){
        console.log('Current Date: '+formattedTime);
    } 
};


greet();