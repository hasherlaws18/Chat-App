const { gql } = require("apollo-server-express");
const { GraphQLDateTime } = require("graphql-iso-date");

const typeDefs = gql`
  scalar GraphQLDateTime

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    comments: [Comment]
  }

  type Genre {
    _id: ID!
    name: String!
    comments: [Comment]
  }

  type Comment {
    _id: ID!
    username: String!
    text: String!
    genre: String!
    createdAt: GraphQLDateTime
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    allUsers: [User]
    allGenres: [Genre]
    genres: [Genre]
    comments: [Comment]
    comment(commentId: ID!): Comment
    genre(_id: ID!): Genre
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addComment(username: String!, genre: ID!, text: String!): Comment
  }
`;

module.exports = typeDefs;
