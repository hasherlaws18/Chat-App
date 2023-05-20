const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    comments: [Comment]!
  }

  type Genre {
    _id: ID!
    name: String!
    comments: [Comment]!
  }

  type Comment {
    _id: ID!
    username: String!
    text: String!
    genre: ID!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    genres: [Genre]
    comments: [Comment]
    // Define a query with an ID paramenter as a query arguement to return a single genre object:
    genre(_id: ID!): genre
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): Auth
    addComment(username: String!, genre: ID!, text: String!): Comment
  }
`;

module.exports = typeDefs;
