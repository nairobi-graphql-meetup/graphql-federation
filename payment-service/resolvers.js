const payments = require('./payments');

const filterPaymentsByUserId = user_id => payments.filter(payment => payment.user_id === user_id);

const resolvers = {
  Query: {
    payments: () => payments
  },
  User: {
    payments: user => filterPaymentsByUserId(user.user_id)
  }
};

module.exports = resolvers;
