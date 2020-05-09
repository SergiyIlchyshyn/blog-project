var express = require('express');
var router = express.Router();

// const Post = require('../models/post');
const posts = require('../controllers/postController');

// GET - всі пости
router.get('/dashboard', posts.findAll);

// GET + id - один пост
router.get('/edit/:id', posts.findOne);

// // PUT - оновити
router.post('/edit/:id', posts.update);


// POST - створити 1 пост
// router.post('/', posts.create);


// // DELETE - видалити
// router.delete('/:id', products.delete);

// ========================================

module.exports = router;