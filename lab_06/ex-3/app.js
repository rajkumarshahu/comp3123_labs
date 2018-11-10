var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://rajkumarshahu:meanlab6@ds157843.mlab.com:57843/mynewdatabase');

var port = process.env.PORT || 3000;

app.listen(port);

var Schema = mongoose.Schema;

var userSchema = new Schema({ name: String, status: String});

var User = mongoose.model('User', userSchema);

var john = User({ name: 'John', status: 'active'});
var jane = User({ name: 'Jane', status: 'active'});

john.save(function(err){
    if(err) throw err;

    console.log('**** User01 saved! ****');
});

jane.save(function(err){
    if(err) throw err;

    console.log('**** User02 saved! ****');
});