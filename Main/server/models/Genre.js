const {Schema, model} = require('mongoose');
const commentSchema = require('./Comment');

const genreSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        comments: [commentSchema],
    
    },

    
);

const Genre = model('Genre', genreSchema);
module.exports = Genre