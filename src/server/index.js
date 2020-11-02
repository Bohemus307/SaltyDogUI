const fs = require('fs');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const Router = require('./Router/router');
// const Router = require('express-promise-router');
const config = require('../../config');
const db = require('../database/connection');

const app = express();

const PORT = config.app.port;

// app.use(express.static(path.join(__dirname, '/../../public')));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// // for redirect of refresh in spa
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/../../public/index.html'), (err) => {
//     if (err) {
//       res.status(500).send(err);
//     }
//   });
// });
// // router setup
// const router = new Router();
app.use('/data', Router);

// app.listen(PORT, () => console.log(`listening on port ${PORT}`));

// graphQL connect
const typeDefs = gql(fs.readFileSync('/Users/joshuaoxner/SaltyDogUI/src/server/schema.graphql', { encoding: 'utf8' }));
const resolvers = require('./Controllers/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 4000 }, () => console.log(`Now browse to http://localhost:4000${server.graphqlPath}`));

// module.exports = router;
