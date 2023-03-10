const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type Auth {
    token: ID!
  }

  type Query {
    me: Auth
  }

  type Mutation {
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
