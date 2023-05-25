const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  genre: {
    type: Schema.Types.ObjectId,
    ref: "Genre",
    required: true,
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
