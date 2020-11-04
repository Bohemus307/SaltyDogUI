const fs = require('fs');
const express = require('express');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const Router = require('./Router/router');
const config = require('../../config');
// const db = require('../database/connection');
const db = require('../../db');

const jwtSecret = Buffer.from('Zn8Q5tyZ/G1MHltc4F/gTkVJMlrbKiZt', 'base64');

const app = express();
app.use(cors(), bodyParser.json(), expressJwt({
  secret: jwtSecret,
  credentialsRequired: false,
  algorithms: ['HS256'],
}));

const PORT = config.app.port;

app.use(express.static(path.join(__dirname, '/../../public')));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// for redirect of refresh in front end
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const userVerify = db.users.list().find((user) => user.email === email);
  if (!(userVerify && userVerify.password === password)) {
    res.sendStatus(401);
    return;
  }
  const token = jwt.sign({ sub: user.id }, jwtSecret);
  res.send({ token });
});

app.post('/signup', (req, res) => {
  const newUser = req.body.user;
  console.log(newUser);
  const userVerify = db.users.list().find((user) => user.email === newUser.email);
  if (userVerify) {
    res.sendStatus(401);
    return;
  }
  const makeUser = db.users.create({ ...newUser });
  res.sendStatus(200).json({ newUSer: makeUser });
});

// router setup
// const router = new Router();
// app.use('/data', router);

// graphQL connect
const typeDefs = gql(fs.readFileSync('/Users/joshuaoxner/SaltyDogUI/src/server/schema.graphql', { encoding: 'utf8' }));
const resolvers = require('./Controllers/resolvers');

const context = ({ req }) => ({ user: req.user && db.users.get(req.user.sub) });
const server = new ApolloServer({ typeDefs, resolvers, context });
server.applyMiddleware({ app, path: '/graphql' });

// app.listen({ port: 4000 }, () => console.log(`Now browse to http://localhost:4000${server.graphqlPath}`));
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
