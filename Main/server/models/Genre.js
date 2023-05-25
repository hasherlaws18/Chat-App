const { Schema, model } = require("mongoose");
const commentSchema = require("./Comment");

const genreSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
});

const Genre = model("Genre", genreSchema);
module.exports = Genre;
