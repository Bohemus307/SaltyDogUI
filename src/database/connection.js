const { Pool } = require('pg');
const config = require('../../config.js');

// uses config
const pool = new Pool(config.db);

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
