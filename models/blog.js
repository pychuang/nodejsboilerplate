module.exports = {
    blogs: [],
    create(blog) {
        var id = this.blogs.length;
        blog["id"] = id;
        this.blogs.push(blog);
    },
    find(id) {
        return this.blogs[id];
    },
    update(id, blog) {
        blog["id"] = id;
        this.blogs[id] = blog;
    },
    delete(id) {
        this.blogs[id] = null;
    }
};
