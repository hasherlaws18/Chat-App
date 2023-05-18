const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (_, { userId }, context) => {
      const user = await User.findById(userId).populate("Genre");
      if (!user) {
        throw new AuthenticationError("No user found with this id");
      }
      return user;
    },
  },

//   Mutation: {
//     addUser: async (_, { user }) => {
//       const newUser = await User.create(user);
//       const token = signToken(user);
//       return { token, newUser };
//     },

//     loginUser: async (_, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw new AuthenticationError("Incorrect email or password");
//       }

//       const correctPassword = await user.isCorrectPassword(password);

//       if (!correctPassword) {
//         throw new AuthenticationError("Incorrect email or password");
//       }

//       const token = signToken(user);

//       return { token, user };
//     },

//     saveBook: async (_, { userId, book }) => {
//       const updatedUser = await User.findByIdAndUpdate(
//         userId,
//         { $addToSet: { savedBooks: book } },
//         { new: true }
//       ).populate("savedBooks");

//       if (!updatedUser) {
//         throw new AuthenticationError("No user found with this id");
//       }

//       return updatedUser;
//     },

//     removeBook: async (_, { userId, bookId }) => {
//       const updatedUser = await User.findByIdAndUpdate(
//         userId,
//         { $pull: { savedBooks: { bookId } } },
//         { new: true }
//       ).populate("savedBooks");

//       if (!updatedUser) {
//         throw new AuthenticationError("No user found with this id");
//       }

//       return updatedUser;
//     },
//   },
// };

module.exports = resolvers;
