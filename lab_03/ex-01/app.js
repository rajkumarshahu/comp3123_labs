
var fs = require('fs');

var stream = fs.readFile("./data.txt");

stream.on("data", function(data){
    console.log(data);
    
});