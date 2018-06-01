var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverrid = require('method-override');

var Blog = require('./models/blog');

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverrid('_method'));

app.get('/', function(req, res) {
    res.redirect('/blogs');
});

// Index
app.get('/blogs', function(req, res) {
    console.log('GET /blogs');
    res.render('index', {blogs: Blog.blogs});
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
    Blog.create(blog);
    res.redirect('/blogs');
});

// Show
app.get('/blogs/:id', function(req, res) {
    console.log('GET /blogs/' + req.params.id);
    var blog = Blog.find(req.params.id);
    res.render('show', {blog: blog});
})

// Edit
app.get('/blogs/:id/edit', function(req, res) {
    console.log('GET /blogs/' + req.params.id + '/edit');
    var blog = Blog.find(req.params.id);
    res.render('edit', {blog: blog});
});

// Update
app.put('/blogs/:id', function(req, res) {
    console.log('PUT /blogs/' + req.params.id);
    var blog = req.body.blog;
    Blog.update(req.params.id, blog);
    res.redirect('/blogs/' + req.params.id)
});

// Destroy
app.delete('/blogs/:id', function(req, res) {
    console.log('DELETE /blogs/' + req.params.id);
    Blog.delete(req.params.id);
    res.redirect('/blogs');
});

app.listen(3000, function() {
	console.log('Server started.');
    console.log('http://localhost:3000');
});
