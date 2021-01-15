const { ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({ schema: buildFederatedSchema([{ typeDefs, resolvers }]), tracing: true });

server
  .listen({
    port: 4001
  })
  .then(({ url }) => console.log(`🚀 user service started at ${url}`));
