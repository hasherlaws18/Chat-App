const { Schema, model } = require("mongoose");
const { GraphQLDateTime } = require("graphql-iso-date");
// const { Date } = require("graphql-scalars/typings/mocks");

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
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
