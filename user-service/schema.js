const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
  }

  type User @key(fields: "user_id") {
    user_id: String!
    first_name: String!
    last_name: String!
    active: Boolean
    email: String
  }
`;

module.exports = typeDefs;
