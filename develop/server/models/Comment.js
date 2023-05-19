const {Schema, model} = require('mongoose');
const Genre = require('./Genre')

const commentSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },

        text: {
            type: String,
            required: true,
        },
        comments: [],

    },
   
);

const Comment = model('Comment', commentSchema);

module.exports = Comment