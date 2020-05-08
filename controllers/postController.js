const Post = require('../models/post');

// Retrieve and return all from the database
exports.findAll = (req, res) => {
    Post.find()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json(err));
};