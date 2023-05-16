const { gql } = require("apollo-server-express");

// const typeDefs = gql`
//   type Book {
//     authors: [String]!
//     description: String!
//     bookId: String!
//     image: String
//     link: String
//     title: String!
//   }

//   type User {
//     _id: ID!
//     username: String!
//     email: String!
//     password: String!
//     savedBooks: [Book]!
//     bookCount: Int!
//   }

//   type Auth {
//     token: ID!
//     user: User
//   }

//   type Query {
//     me(userId: ID!): User
//   }

//   type Mutation {
//     addUser(username: String!, email: String!, password: String!): Auth
//     loginUser(email: String!, password: String!): Auth
//     saveBook(
//       userId: ID!
//       authors: [String]!
//       description: String!
//       bookId: String!
//       image: String
//       link: String
//       title: String
//     ): User
//     removeBook(userId: ID!, bookId: String!): User
//   }
// `;

module.exports = typeDefs;
