const PORT = process.env.PORT || 3000;

module.exports = {
  PORT,
  HOST: process.env.HOST || `http://localhost:${PORT}`,
};
