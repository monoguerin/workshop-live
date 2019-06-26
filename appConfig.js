const getConfig = require('next/config');

const { publicRuntimeConfig } = getConfig();

const PORT = process.env.PORT || 3000;

console.log('publicRuntimeConfig', publicRuntimeConfig);

module.exports = {
  PORT,
  HOST: process.env.HOST || `http://localhost:${PORT}`,
};
