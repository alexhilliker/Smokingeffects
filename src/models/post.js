const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const postSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    content: {
        type:String,
        required: true
    },
    TimeCreated: {
        type:Date, 
        default:Date.now,
    },
}); 
const post = mongoose.model('Post', postSchema);
module.exports = post;