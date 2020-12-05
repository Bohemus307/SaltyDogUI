const fs = require('fs');
const express = require('express');
const http = require('http');
const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { ApolloServer, gql } = require('apollo-server-express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const config = require('../../config');
// const db = require('../database/connection');

const { getUserByEmail, addNewUser, getUserByPassword } = require('../database/models/model.js');

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
app.use(express.json());
app.use(cookieParser());

// for redirect of refresh in front end
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../../public/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.post('/login', async (req, res) => {
  try {
    const { email, password, userName } = req.body;
    if (email.length === 0 || password.length === 0) {
      res.status(400).json({
        message: 'Bad request - must include Email and Password',
      });
    }
    const emailCheck = await getUserByEmail(email);
    if (emailCheck.rows.length === 0) {
      res.status(401).json({
        message: 'Bad request - Email is incorrect',
      });
    }
    let hashCheck = await bcrypt.compare(password, hash).then((result) => {
      // result == true
    });
    const passwordCheck = await getUserByPassword(password);
    if (passwordCheck.rows.length === 0) {
      res.status(401).json({
        message: 'Bad request - Password is incorrect',
      });
    }

    const token = jwt.sign({ sub: userName }, jwtSecret);

    res.send({ token });
  } catch (err) {
    res.status(401).json({
      message: 'Failed to Login User',
      error: err,
    });
  }
});

app.post('/signup', async (req, res) => {
  try {
    let newUser = req.body.user;
    if (newUser === undefined) {
      res.status(400).json({
        message: 'Bad request - must include all form fields',
      });
    }
    // const password = await bcrypt.hash(req.body.password, 5);
    console.log('in server', newUser);
    const hashPassword = await bcrypt.hash(newUser.password, 5, (err, hash) => {
      newUser = { ...newUser, password: hash };
      return newUser;
    });
    console.log('in server', newUser);
    newUser = { ...newUser, userId: 'asdfghjkl' };
    console.log('in server', newUser);
    const addUser = await addNewUser({ ...newUser });
    res.sendStatus(200).json({ newUser: addUser });
  } catch (err) {
    res.status(400).json({
      message: 'Failed to Signup User in server',
      error: err,
    });
  }
});

// graphQL connect
const typeDefs = gql(fs.readFileSync(path.join(__dirname, '/schema.graphql'), { encoding: 'utf8' }));
const resolvers = require('./Controllers/resolvers');

const prisma = new PrismaClient();

async function context({ req, connection }) {
  if (req && req.user) {
    return {
      userId: req.user.sub,
      prisma,
    };
  }
  if (connection && connection.context && connection.context.accesstoken) {
    const decodedToken = jwt.verify(connection.context.accesstoken, jwtSecret);
    return {
      userId: decodedToken.sub,
      prisma,
    };
  }
  return {
    prisma,
  };
}

const server = new ApolloServer({ typeDefs, resolvers, context });
server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => console.log(`Server started on port ${PORT}`));
