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
    me(userId: ID!): User
  }

  type Mutation {
     addUser(username: String!, email: String!, password: String!): Auth
     loginUser(email: String!, password: String!): Auth
       addComment(username: String!, Genre: _id!, text: String!): Auth
   }
 `;

module.exports = typeDefs;
