const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
  companies: store.collection('sensors'),
  jobs: store.collection('values'),
  users: store.collection('users'),
};
