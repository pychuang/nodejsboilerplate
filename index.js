var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverrid = require('method-override');

var indexRoutes = require('./routes/index');
var blogRoutes = require('./routes/blogs');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverrid('_method'));

app.use(indexRoutes);
app.use(blogRoutes);

app.listen(3000, function() {
	console.log('Server started.');
    console.log('http://localhost:3000');
});
