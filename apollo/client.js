import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const client = new ApolloClient({
  fetch,
  uri: `${publicRuntimeConfig.HOST}/graphql`,
});

export default client;
