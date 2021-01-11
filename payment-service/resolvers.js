const users = require('../user-service/users');
const payments = require('./payments');

const resolvers = {
  Query: {
    payments: () => payments
  },
  Payment: {
    paid_by(payment) {
      return { __typename: "User", user_id: payment.user_id };
    }
  }
};

module.exports = resolvers;
