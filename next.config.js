const config = require('./appConfig');

module.exports = {
  publicRuntimeConfig: {
    HOST: process.env.HOST || config.HOST,
  },
};
