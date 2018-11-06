var request = require('request');

var fs = require('fs');

// request('http://www.google.com', function(error, res, body){
//     console.log('body: ', body);
// });

request('http://google.ca').pipe(fs.createWriteStream('output.html'));