const {Schema, models} = require('mongoose');
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
        comment: [Genre],

    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment