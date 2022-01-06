var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;