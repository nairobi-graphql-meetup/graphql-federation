const payments = require('./payments');

const resolvers = {
  Query: {
    payments: () => payments
  }
};

module.exports = resolvers;
