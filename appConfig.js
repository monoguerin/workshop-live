const PORT = process.env.PORT || 3000;

module.exports = {
  PORT,
  HOST: console.log(process.env) || process.env.HOST || `http://localhost:${PORT}`,
};
