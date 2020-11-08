const { Pool } = require('pg');
const config = require('../../config');

// uses config
const pool = new Pool(config.db);

// // // options object
// const pool = new Pool({
//   database: 'saltydog1',
// });

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
