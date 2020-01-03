const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    payments: [Payment]
  }

  type Payment {
    amount: Float!
    payment_id: String!
    date_paid: String!
    user_id: String!
  }
`;

module.exports = typeDefs;
