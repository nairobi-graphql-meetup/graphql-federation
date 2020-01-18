const users = require('./users');

const findUserById = id => users.find(({ user_id }) => user_id === id);

const resolvers = {
  Query: {
    users: () => users
  },
  Payment: {
    paid_by: payment => findUserById(payment.user_id)
  }
};

module.exports = resolvers;
