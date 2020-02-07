const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  comments: [Comment]
}

  type Comment {
      id: Int,
      name: String,
      email: String,
      body: String
  }
`;

module.exports = typeDefs;