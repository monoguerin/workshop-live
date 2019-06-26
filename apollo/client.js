import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

console.log('publicRuntimeConfig', publicRuntimeConfig);

const client = new ApolloClient({
  uri: `${publicRuntimeConfig.HOST}/graphql`,
  fetch,
});

export default client;
