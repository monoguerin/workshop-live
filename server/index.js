const express = require('express');
const next = require('next');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

const PORT = process.env.PORT || 3000;

app.prepare()
  .then(() => {
    server.use('/graphql', graphqlHTTP({
      schema,
      graphiql: true,
    }));

    server.get('*', (req, res) => handle(req, res));

    server.listen(PORT, () => {
      console.log(`App listening in PORT ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
