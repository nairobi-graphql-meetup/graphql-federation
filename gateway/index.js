const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  serviceList: [
    {
      name: 'user-service',
      url: 'http://localhost:4001'
    },
    {
      name: 'payments-service',
      url: 'http://localhost:4002'
    }
  ]
});


(async () => {
  const { schema, executor } = await gateway.load().catch(error => console.log(`failed to load gateway ${error}`));
  const server = new ApolloServer({ schema, executor, tracing: true});
  server
    .listen({ port: 1000 })
    .then(({ url }) => console.log(`🚀 gateway started at ${url}`))
    .catch(error => console.log(`failed to start gateway ${error}`));
})();
