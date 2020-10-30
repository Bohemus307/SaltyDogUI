const fs = require('fs');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const config = require('../../config');

const Router = require('./Router/router');

const app = express();

const PORT = config.app.port;

app.use(express.static(path.join(__dirname, '/../../public')));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// for redirect of refresh in spa
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.use('/data', Router);

// app.listen(PORT, () => console.log(`listening on port ${PORT}`));

// graph
const typeDefs = gql(fs.readFileSync('./schema.graphql', { encoding: 'utf8' }));
const resolvers = require('./Controllers/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

// The `listen` method launches a web server.
app.listen({ port: 4000 }, () => console.log(`Now browse to http://localhost:4000${server.graphqlPath}`));
