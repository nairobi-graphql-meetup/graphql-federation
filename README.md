# graphql-federation

This repo shows how to make use of distributed federated graphql API's to build an entry point; Gateway; to access data from the underlying API's

## Repos

- We have two service; user-service and payment-service, and a gateway.
- user-service is in the `user-service` directory
- payment-service is on the `payment-service` directory
- gateway is in the `gateway` directory

## Starting servers

- First install dependancies by running `yarn`
- Start `user-service` by running `yarn user-service`
- Start `payment-service` by running `yarn payment-service`
- Start `gateway` by running `yarn gateway`
