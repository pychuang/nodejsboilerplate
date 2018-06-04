var express = require('express');
var router = express.Router();

var Blog = require('../models/blog');

// Index
router.get('/blogs', function(req, res) {
    console.log('GET /blogs');
    res.render('index', {blogs: Blog.blogs});
});

// New
router.get('/blogs/new', function(req, res) {
    console.log('GET /blogs/new');
    res.render('new');
});

// Create
router.post('/blogs', function(req, res) {
    console.log('POST /blogs');
    var blog = req.body.blog;
    Blog.create(blog);
    res.redirect('/blogs');
});

// Show
router.get('/blogs/:id', function(req, res) {
    console.log('GET /blogs/' + req.params.id);
    var blog = Blog.find(req.params.id);
    res.render('show', {blog: blog});
})

// Edit
router.get('/blogs/:id/edit', function(req, res) {
    console.log('GET /blogs/' + req.params.id + '/edit');
    var blog = Blog.find(req.params.id);
    res.render('edit', {blog: blog});
});

// Update
router.put('/blogs/:id', function(req, res) {
    console.log('PUT /blogs/' + req.params.id);
    var blog = req.body.blog;
    Blog.update(req.params.id, blog);
    res.redirect('/blogs/' + req.params.id)
});

// Destroy
router.delete('/blogs/:id', function(req, res) {
    console.log('DELETE /blogs/' + req.params.id);
    Blog.delete(req.params.id);
    res.redirect('/blogs');
});

module.exports = router;