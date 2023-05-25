const db = require("../config/connection");
const { User, Genre, Comment } = require("../models");
const userData = require("./userData.json");
const commentData = require("./commentData.json");
const genreData = require("./genreData.json");

const seedDatabase = async () => {
  try {
    await db.once("open", async () => {
      await User.deleteMany();
      await Genre.deleteMany();
      await Comment.deleteMany();

      const users = await User.insertMany(userData);
      const comments = await Comment.insertMany(commentData);
      const genres = await Genre.insertMany(genreData);

      // Populate comments for each genre
      for (const comment of comments) {
        const genre = genres.find((g) => g.name === comment.genre);
        if (genre) {
          genre.comments.push(comment._id);
          await genre.save();
        }
      }

      console.log("Seed data successfully populated!");
      process.exit(0);
    });
  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1);
  }
};

seedDatabase();
