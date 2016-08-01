var express = require('express');
var path = require('path');

var app = express();
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/user/:id', function(req, res){
    res.send("Wartość id: " + req.params.id);
});

app.get('/blog', function(req, res){
    res.send("Strona z blogiem");
});

app.listen(3000);