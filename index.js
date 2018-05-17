var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/:name', function(req, res) {
    var name = req.params.name;
    res.render('hello', {name: name});
});

app.listen(3000, function() {
	console.log('Server started.');
});
