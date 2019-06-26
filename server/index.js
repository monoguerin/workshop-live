const express = require('express');
const next = require('next');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const config = require('../appConfig');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

app.prepare()
  .then(() => {
    server.get('/test', (req, res) => res.send('Cesar Guerrero'));

    server.use('/graphql', graphqlHTTP({
      schema,
      graphiql: true,
    }));

    server.get('*', (req, res) => handle(req, res));

    server.listen(config.PORT, () => {
      console.log(`App listening in PORT ${config.HOST}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
