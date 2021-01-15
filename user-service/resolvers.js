const users = require("./users");

const resolvers = {
  Query: {
    users: () => users,
  },
  User: {
    __resolveReference(reference) {
      console.log("__resolveReference reference", reference);
      return users.find((user) => user.user_id === reference.user_id);
    },
  },
};

module.exports = resolvers;
