const {Schema, models} = require('mongoose');

const genreSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        comments: [],
    
    },

    {
        toJSON: {
            virtuals: true,
        },
    }
);

const Genre = model('Genre', genreSchema);
module.exports = Genre