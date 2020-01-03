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
  const { schema, executor } = await gateway.load();
  const server = new ApolloServer({ schema, executor });
  server.listen().then(({ url }) => console.log(`🚀 gateway started at ${url}`));
})();
