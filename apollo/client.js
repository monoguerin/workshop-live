import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

const HOST = process.env.HOST || 'http://localhost:3000';

const client = new ApolloClient({
  fetch,
  uri: `${HOST}/graphql`,
});

export default client;
