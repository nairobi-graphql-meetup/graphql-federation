const { ApolloServer } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  tracing: true,
});

server
  .listen({
    port: 4002,
  })
  .then(({ url }) => console.log(`🚀 payments service started at ${url}`));
