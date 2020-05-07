var express = require('express');
var router = express.Router();

const Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
    Post.find()
        .then(posts => {
            res.render('index', { title: 'Дошка оголошень', posts: posts });
        })
        .catch(err => {
            console.error(err);
            throw err;
        })
});

module.exports = router;