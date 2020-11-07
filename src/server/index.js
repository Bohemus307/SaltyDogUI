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
// const Router = require('./Router/router');
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
  const user = db.users.list().find((user) => user.email === email);
  if (!(user && user.password === password)) {
    res.sendStatus(401);
    return;
  }
  const token = jwt.sign({ sub: user.id }, jwtSecret);
  res.send({ token });
});

app.post('/signup', (req, res) => {
  const newUser = req.body.user;
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
