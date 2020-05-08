var express = require('express');
var router = express.Router();

// const Post = require('../models/post');

// /* GET home page. */
// router.get('/dashboard', function(req, res, next) {
//     // res.render('admin/dashboard', { title: 'Панель адміністратора' });
//     Post.find()
//         .then(posts => {
//             res.render('admin/dashboard', { title: 'Панель адміністратора', posts: posts });
//         })
//         .catch(err => {
//             console.error(err);
//             throw err;
//         })
// });

const posts = require('../controllers/postController');

// GET - всі пости
router.get('/dashboard', posts.findAll);

module.exports = router;