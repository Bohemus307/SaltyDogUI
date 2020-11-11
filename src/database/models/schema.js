const db = require('../connection.js');

// build model for users
const users = () => {
  const sqlString = `CREATE TABLE users (
    _id SERIAL PRIMARY KEY,
    userId VARCHAR (20) NOT NULL,
    userName VARCHAR (80) NOT NULL,
    employeeId VARCHAR (15) NOT NULL,
    email VARCHAR (35) UNIQUE,
    password VARCHAR (10) NOT NULL
   )`;

  return db.query('DROP TABLE IF EXISTS users')
    .then(() => db.query(sqlString));
};

// build model for sensors
const sensors = () => {
  const sqlString = `CREATE TABLE Sensors (
    _id SERIAL PRIMARY KEY,
    sensorId INT NOT NULL,
    sensorName VARCHAR(80),
    location VARCHAR (10) NOT NULL
   )`;

  return db.query('DROP TABLE IF EXISTS Sensors')
    .then(() => db.query(sqlString));
};

const values = () => {
  const sqlString = `CREATE TABLE Values(
    time TIMESTAMPTZ NOT NULL,
    sensorId1 INT,
    readingId VARCHAR (20) NOT NULL,
    reading DOUBLE PRECISION,
    date_col DATE NOT NULL,
    UNIQUE (time, date)
    )`;

  return db.query('DROP TABLE IF EXISTS Values')
    .then(() => db.query(sqlString));
};

const hyperTable = () => {
  const sqlString = 'SELECT create_hypertable(Values, time, chunk_time_interval => INTERVAL 1 day)';
  db.query(sqlString);
};

module.exports = {
  users, sensors, values, hyperTable,
};
