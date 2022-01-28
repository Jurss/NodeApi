const mongoose = reuire('mongoose');

const PostsModel = mongoose.model(
    "node-api", {
        author: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    "post"
);

module.exports = { PostsModel };