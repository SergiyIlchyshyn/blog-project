var express = require('express');
var router = express.Router();

const posts = require('../controllers/postController');

// GET - всі пости
router.get('/dashboard', posts.findAll);

// GET + id - один пост
router.get('/edit/:id', posts.findOne);

// // PUT - оновити
router.post('/edit/:id', posts.update);

// POST - створити 1 пост
router.get('/create', function(req, res, next) {
    res.render('admin/create', { title: 'Create' });
});
router.post('/create', posts.create);

// DELETE - видалити
router.get('/delete/:id', posts.delete);

// ========================================

module.exports = router;