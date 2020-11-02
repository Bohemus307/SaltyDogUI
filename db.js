const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
  sensors: store.collection('sensors'),
  users: store.collection('users'),
  values: store.collection('values'),
};
