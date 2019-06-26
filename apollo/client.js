import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import getConfig from 'next/config';
import config from '../appConfig';

const { publicRuntimeConfig } = getConfig();

console.log('publicRuntimeConfig', publicRuntimeConfig);

const client = new ApolloClient({
  uri: `${config.HOST}/graphql`,
  fetch,
});

export default client;
