import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import config from '../appConfig';

const client = new ApolloClient({
  uri: `${config.HOST}/graphql`,
  fetch,
});

export default client;
