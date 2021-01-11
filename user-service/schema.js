const { gql } = require('apollo-server');

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

  # extend type Payment @key(fields: "payment_id") {
  #   payment_id: String! @external
  #   user_id: String! @external
  #   paid_by: User! @requires(fields: "user_id")
  # }
`;

module.exports = typeDefs;
