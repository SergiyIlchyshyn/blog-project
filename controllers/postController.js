const Post = require('../models/post');

// Retrieve and return all from the database
exports.findAll = (req, res) => {
    Post.find()
        .then(posts => {
            res.render('admin/dashboard', { title: 'Admin', posts: posts });
        })
        .catch(err => {
            console.error(err);
            throw err;
        })
};

// Find a sigle note with a noteId
exports.findOne = (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            res.render('admin/edit', { title: 'Edit - ' + post.title, post: post });
        })
        .catch(err => {
            consolo.error(err.message);
            throw err;
        })
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    console.log(req.body);
    var postId = req.params.id;
    var update = {
        title: req.body.postTitle,
        description: req.body.postDescription,
        author: req.body.postAuthor,
        date: req.body.postDate
    };
    //записати зміни в БД
    Post.findByIdAndUpdate(postId, update)
        .then(result => {
            console.log(result);
            res.redirect('/');
        })
        .catch(err => {
            consolo.error(err.message);
            throw err;
        })
};