const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    payments: [Payment!]
  }

  type Payment @key(fields: "payment_id") {
    amount: Float!
    payment_id: String!
    date_paid: String!
    user_id: String!
    paid_by: User
  }

  extend type User @key(fields: "user_id") {
    user_id: String! @external
  }
`;

module.exports = typeDefs;
