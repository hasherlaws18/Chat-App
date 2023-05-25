const { User, Genre, Comment } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    allUsers: async () => {
      return await User.find({});
    },
    comments: async () => {
      // Populate the username subdocument when querying for comments
      return await Comment.find({});
    },
    allGenres: async () => {
      return await Genre.find({});
    },
    // genreFeed: async (parents, args) => {
    //   // finds the comments associated with a genre to create a blog feed.
    //   return await Genre.findById(args.id).populate("comments");
    // },
  },

  // Query: {
  //   users: async () => {
  //     // Search for a Genre with associated comments and populate 'users' and 'username' fields
  //     return await Genre.find({
  //       comments: { $exists: true, $ne: [] },
  //     }).populate({ path: "users", populate: { path: "username" } });
  //   },
  // },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      try {
        // Create and return the new User object
        const newUser = await User.create({
          username,
          email,
          password,
        });
        const token = signToken({
          username,
          email,
          _id: newUser._id,
        });
        console.log(newUser);
        return { token, user: newUser };
      } catch (error) {
        // Handle any errors that occur during user creation
        throw new Error("Failed to create a new user.");
      }
    },
    addComment: async (parent, { username, genre, text }) => {
      try {
        const newComment = await Comment.create({
          username,
          genre,
          text,
          createdAt: new Date(),
        });

        console.log(newComment);
        return newComment;
      } catch (error) {
        console.log(error);
        throw new Error("Failed to create a new comment.");
      }
    },
  },
};

module.exports = resolvers;
