const db = require("../config/connection");
const { User, Genre, Comment } = require("../models");
const userSeeds = require("./userData.json");
const commentSeeds = require("./commentData.json");
const genreSeeds = require("./genreData.json");

db.once("open", async () => {
  try {
    // await Profile.deleteMany({});
    // await Profile.create(profileSeeds);
    await User.deleteMany({});
    await User.create(userSeeds);

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
