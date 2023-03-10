const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../utils/auth');

const resolvers = {
  Query: {
    me: async () => {},
  },
  Mutation: {
    login: async () => {},
  },
};

module.exports = resolvers;
