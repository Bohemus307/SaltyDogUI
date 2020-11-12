const path = require('path');
const db = require('../connection.js');
const dataSeed = require('../scripts/seedPG.js');

// build model for users
const users = () => {
  const sqlString = `CREATE TABLE Users (
    _id SERIAL PRIMARY KEY,
    userId VARCHAR (20) NOT NULL,
    userName VARCHAR (80) NOT NULL,
    employeeId VARCHAR (15) NOT NULL,
    email VARCHAR (35) UNIQUE,
    password VARCHAR (10) NOT NULL
   )`;

  return db.query('DROP TABLE IF EXISTS Users')
    .then(() => db.query(sqlString));
};

// build model for sensors
const sensors = () => {
  const sqlString = `CREATE TABLE Sensors (
    correlateID VARCHAR (20) NOT NULL,
    sensorName VARCHAR(80),
    location VARCHAR (100) NOT NULL,
    UNIQUE (correlateId, sensorName)
   )`;

  return db.query('DROP TABLE IF EXISTS Sensors')
    .then(() => db.query(sqlString));
};

const values = () => {
  const sqlString = `CREATE TABLE Values(
    correlateID VARCHAR (20) NOT NULL,
    time TIMESTAMPTZ NOT NULL,
    reading DOUBLE PRECISION NOT NULL,
    date DATE NOT NULL,
    UNIQUE (correlateId, time)
    )`;

  return db.query('DROP TABLE IF EXISTS Values')
    .then(() => db.query(sqlString));
};

const hyperTable = () => {
  const sqlString = 'SELECT create_hypertable(\'Values\', \'time\', chunk_time_interval => INTERVAL \'1 day\')';
  db.query(sqlString);
};

const seedPgDatabase = () => {
  const pathToCSV = process.env.NODE_ENV === 'prod' ? '/home/bitnami/seed_files/readings.csv' : path.resolve(__dirname, '../../../readings.csv');
  const delimiter = ',';
  const sqlString = `COPY values(time, correlateId, reading, date) FROM '${pathToCSV}' DELIMITER '${delimiter}' CSV HEADER`;
  return db.query(sqlString);
};

const indexValueCorrelateIdValue = () => {
  const sqlString = 'CREATE INDEX idx_correlateID ON values(correlateID)';
  return db.query(sqlString);
};

const indexValueCorrelateIdSensor = () => {
  const sqlString = 'CREATE INDEX idx_correlateID ON sensors(correlateID)';
  return db.query(sqlString);
};

sensors()
  .then(() => console.log('Created table values users and sensors'))
  .then(values)
  .then(hyperTable)
  .then(() => console.log('Created hypertable now importing data'))
  .then(seedPgDatabase)
  .then(() => console.log('Imported all records now creating index on correlateId'))
  .then(indexValueCorrelateIdValue)
  .then(indexValueCorrelateIdSensor)
  .then(() => console.log('Success on script !!!!'))
  .catch((err) => console.log(err));

module.exports = {
  users, sensors, values, hyperTable, seedPgDatabase,
};
