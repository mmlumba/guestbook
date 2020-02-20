const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar ObjectID
  scalar Date

  type Query {
    comments: [Comment]
  }

  type Mutation {
    addComment(comment: CommentInput!): Comment
    editComment(commentId: ObjectID!, comment: CommentInput!): Comment
    deleteComment(commentId: ObjectID!): Comment
  }

  input CommentInput {
    name: String
    email: String
    body: String
  }

  type Comment {
    id: ObjectID
    name: String
    email: String
    body: String
    createdAt: Date
  }
`;

module.exports = typeDefs;