const fs = require('fs');
const express = require('express');
const http = require('http');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const config = require('../../config');
const db = require('../database/connection');
const { getUserByEmail, addNewUser, getUserByPassword } = require('../database/models/model.js');
// const db = require('../../db');

const jwtSecret = Buffer.from(config.app.secret, 'base64');

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
  const { email, password, userName } = req.body;
  if (email === undefined || password === undefined) {
    res.status(400).json({
      message: 'Bad request - must include Email and Password',
    });
  }

  const emailCheck = getUserByEmail(email);
  if (!emailCheck) {
    res.status(401).json({
      message: 'Bad request - Email address is incorrect',
    });
  }

  const passwordCheck = getUserByPassword(userName);
  if (!passwordCheck) {
    res.status(401).json({
      message: 'Bad request - Password is incorrect',
    });
  }
  const token = jwt.sign({ sub: userName }, jwtSecret);
  res.send({ token });
});

app.post('/signup', (req, res) => {
  const newUser = req.body.user;
  if (newUser === undefined) {
    res.status(400).json({
      message: 'Bad request - must include all form fields',
    });
  }
  newUser.userId = 'asdfghjkl';

  addNewUser({ ...newUser })
    // .then((user) => res.sendStatus(200).json({ newUser: user }))
    .then((user) => console.log('new user', user))
    .catch((err) => res.status(400).json({
      message: 'Failed to Signup User',
      error: err,
    }));
});

// graphQL connect
const typeDefs = gql(fs.readFileSync('/Users/joshuaoxner/SaltyDogUI/src/server/schema.graphql', { encoding: 'utf8' }));
const resolvers = require('./Controllers/resolvers');

function context({ req, connection }) {
  if (req && req.user) {
    return { userId: req.user.sub };
  }
  if (connection && connection.context && connection.context.accesstoken) {
    const decodedToken = jwt.verify(connection.context.accesstoken, jwtSecret);
    return { userId: decodedToken.sub };
  }
  return {};
}

const server = new ApolloServer({ typeDefs, resolvers, context });
server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => console.log(`Server started on port ${PORT}`));
