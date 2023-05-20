const { User, Genre, Comment } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    users: async () => {
      // Populate the users and username subdocuments when querying for schools
      return await User.find({}).populate("users").populate({
        path: "users",
        populate: "username",
      });
    },
    comments: async () => {
      // Populate the username subdocument when querying for comments
      return await Comment.find({}).populate("username");
    },
    genreFeed: async (parents, args) => {
      // finds the comments associated with a genre to create a blog feed.
      return await Genre.findById(args.id).populate("comments");
    },
  },

  Query: {
    users: async () => {
      // Search for a Genre with associated comments and populate 'users' and 'username' fields
      return await Genre.find({
        comments: { $exists: true, $ne: [] },
      }).populate({ path: "users", populate: { path: "username" } });
    },
    classes: async () => {
      // Populate the professor subdocument when querying for classes
      return await Class.find({}).populate({
        path: "professor",
        populate: { path: "username" },
      });
    },
    professors: async () => {
      return await Professor.find({});
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password, comments }) => {
      try {
        // Create and return the new User object
        const newUser = await User.create({
          username,
          email,
          password,
          comments,
        });
        return newUser;
      } catch (error) {
        // Handle any errors that occur during user creation
        throw new Error("Failed to create a new user.");
      }
    },
  },
};

// Mutation: {
//   addUser: async (_, { user }) => {
//     const newUser = await User.create(user);
//     const token = signToken(user);
//     return { token, newUser };
//   },
// },

// Query: {
//   me: async (_, { userID }, context) => {
//     const user = await User.findById(userID).populate("Genre");
//     if (!user) {
//       throw new AuthenticationError("No user found with this id");
//     }
//     return user;
//   },
// },

module.exports = resolvers;
