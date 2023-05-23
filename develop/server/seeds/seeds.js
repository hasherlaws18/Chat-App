const db = require("../config/connection");
const { User, Genre, Comment } = require("../models");
const userData = require("./userData.json");
const commentData = require("./commentData.json");
const genreData = require("./genreData.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Genre.deleteMany({});
    await Comment.deleteMany({});

    const users = await User.insertMany(userData);
    const genres = await Genre.insertMany(genreData);
    const comments = await Comment.insertMany(commentData);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
