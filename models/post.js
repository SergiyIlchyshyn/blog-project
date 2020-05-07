const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true }
}, { collection: 'blog' });

module.exports = mongoose.model('Post', Post);