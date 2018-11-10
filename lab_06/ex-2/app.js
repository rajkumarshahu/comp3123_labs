var express = require('express');
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

var requestTime = function(req, res,  next){
    req.requestTime = Date.now();
    next();
};

app.use(requestTime);

app.get('/greet', function(req, res){
    console.log('GET received: ' +req.requestTime);
    res.send('Hello world!');
});

app.post('/greet', function(req,res){
    console.log(req.body);
    res.send("Post Has been Send");
});

app.put('/greetput', function(req, res){
    console.log(`Put received: ${req.requestTime}`);
    res.send("Test put");
});

app.delete('/greetdelete', function(req,res){
    console.log(`Delete: ${req.requestTime} `)
    res.send("Test Delete");
});

app.listen(3000);
