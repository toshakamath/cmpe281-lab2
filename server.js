// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    for(var i=0;i<10000;i++){
        console.log("Increasing cpu utilization");
    }

    res.render('index');
});

app.listen(3001);
console.log('3001 is the magic port');