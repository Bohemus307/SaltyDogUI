const { Pool } = require('pg');
const config = require('../../config.js');

// Prod
const pool = new Pool(config.db);

// // Dev
// const pool = new Pool({
//   database: 'saltydog1',
//   port: 5432,
//   ssl: true,
//   max: 20, // set pool max size to 20
//   idleTimeoutMillis: 1000, // close idle clients after 1 second
//   // return an error after 1 second if connection could not be established
//   connectionTimeoutMillis: 1000,
//  // close (and replace) a connection after it has been used 7500 times (see below for discussion)
//   maxUses: 7500,
// });

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
