const path = require('path');
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
    sensorId1 VARCHAR(15) NOT NULL,
    sensorName VARCHAR(80),
    location VARCHAR (10) NOT NULL
   )`;

  return db.query('DROP TABLE IF EXISTS Sensors')
    .then(() => db.query(sqlString));
};

const values = () => {
  const sqlString = `CREATE TABLE Values(
    time TIMESTAMPTZ NOT NULL,
    sensorId1 VARCHAR(15) NOT NULL,
    readingId VARCHAR (20) NOT NULL,
    reading DOUBLE PRECISION NOT NULL,
    date DATE NOT NULL
    )`;

  return db.query('DROP TABLE IF EXISTS Values')
    .then(() => db.query(sqlString));
};

const hyperTable = () => {
  const sqlString = `SELECT create_hypertable('Values', 'time', chunk_time_interval => INTERVAL '1 day')`;
  db.query(sqlString);
};

const seedPgDatabase = () => {
  const pathToCSV = process.env.NODE_ENV === 'prod' ? '/home/bitnami/seed_files/artists.csv' : path.resolve(__dirname, '../../../readings.csv');
  const delimiter = ',';
  const sqlString = `COPY values(time, sensorId1, readingId, reading, date) FROM '${pathToCSV}' DELIMITER '${delimiter}' CSV HEADER`;
  return db.query(sqlString);
};

const indexSensorId = () => {
  const sqlString = 'CREATE INDEX idx_sensorId1 ON values(sensorId1)';

  return db.query(sqlString);
};

values()
  .then(users)
  .then(sensors)
  .then(() => console.log('Created table values users and sensors'))
  .then(hyperTable)
  .then(() => console.log('Created hypertable now importing data'))
  .then(seedPgDatabase)
  .then(() => console.log('Imported all records now creating index on sensorId'))
  .then(indexSensorId)
  .catch((err) => console.log(err));

module.exports = {
  users, sensors, values, hyperTable, seedPgDatabase,
};
