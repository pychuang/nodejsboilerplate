var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverrid = require('method-override');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverrid('_method'));

app.get('/', function(req, res) {
    res.redirect('/blogs');
});

var blogs = [];

// Index
app.get('/blogs', function(req, res) {
    console.log('GET /blogs');
    res.render('index', {blogs: blogs});
});

// New
app.get('/blogs/new', function(req, res) {
    console.log('GET /blogs/new');
    res.render('new');
});

// Create
app.post('/blogs', function(req, res) {
    console.log('POST /blogs');
    var blog = req.body.blog;
    var id = blogs.length;
    blog["id"] = id;
    blogs.push(blog);
    res.redirect('/blogs');
});

// Show
app.get('/blogs/:id', function(req, res) {
    console.log('GET /blogs/' + req.params.id);
	var blog = blogs[req.params.id];
    res.render('show', {blog: blog});
})

// Edit
app.get('/blogs/:id/edit', function(req, res) {
    console.log('GET /blogs/' + req.params.id + '/edit');
    var blog = blogs[req.params.id];
    res.render('edit', {blog: blog});
});

// Update
app.put('/blogs/:id', function(req, res) {
    console.log('PUT /blogs/' + req.params.id);
    var blog = req.body.blog;
    var id = req.params.id;
    blog["id"] = id;
    blogs[id] = blog;
    res.redirect('/blogs/' + req.params.id)
});

// Destroy
app.delete('/blogs/:id', function(req, res) {
    console.log('DELETE /blogs/' + req.params.id);
    blogs[req.params.id] = null;
    res.redirect('/blogs');
});

app.listen(3000, function() {
	console.log('Server started.');
});
