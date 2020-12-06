const path = require('path');
const db = require('../connection.js');

// build model for users
const users = () => {
  const sqlString = `CREATE TABLE users (
    _id SERIAL PRIMARY KEY,
    userId VARCHAR(20) NOT NULL,
    userName VARCHAR(80) NOT NULL,
    employeeId VARCHAR(15) NOT NULL,
    email VARCHAR(35) UNIQUE NOT NULL,
    password VARCHAR(10) NOT NULL
   )`;

  return db.query('DROP TABLE IF EXISTS users')
    .then(() => db.query(sqlString));
};

// build model for sensors
const sensors = () => {
  const sqlString = `CREATE TABLE sensors (
    sensor_id SERIAL PRIMARY KEY,
    correlateId VARCHAR(20) NOT NULL UNIQUE,
    sensorName VARCHAR(80) NOT NULL UNIQUE,
    location VARCHAR(25) NOT NULL,
    unitofmeasure VARCHAR(20) NOT NULL
   )`;

  return db.query('DROP TABLE IF EXISTS sensors')
    .then(() => db.query(sqlString));
};

const values = () => {
  const sqlString = `CREATE TABLE values (
    _id SERIAL PRIMARY KEY,
    correlateId VARCHAR(20) NOT NULL,
    time TIMESTAMP NOT NULL,
    reading DOUBLE PRECISION NOT NULL,
    date DATE NOT NULL,
    FOREIGN KEY(correlateId) REFERENCES sensors(correlateId)
    )`;

  return db.query('DROP TABLE IF EXISTS values')
    .then(() => db.query(sqlString));
};

const alerts = () => {
  const sqlString = `CREATE TABLE alerts (
    _id SERIAL PRIMARY KEY,
    sensor_id VARCHAR(20) NOT NULL UNIQUE,
    settingsId VARCHAR(20) NOT NULL,
    maxsetvalue DOUBLE PRECISION NOT NULL,
    minsetvalue DOUBLE PRECISION NOT NULL,
    dateSet DATE NOT NULL
    )`;

  return db.query('DROP TABLE IF EXISTS alerts')
    .then(() => db.query(sqlString));
};

const seedPgDatabaseWithAlerts = () => {
  const sqlString = `INSERT INTO alerts (sensor_id, settingsid, maxsetvalue, minsetvalue, dateset) VALUES
  ('EC-1', 'rvW-937', 5, 5, now()),
  ('PH-1', 'aZx-123', 5, 5, now()),
  ('DO-1', 'WaR-632', 5, 5, now())`;
  return db.query(sqlString);
};

const seedPgDatabaseWithSensors = () => {
  const sqlString = `INSERT INTO sensors (sensorName, correlateId, location, unitofmeasure) VALUES
  ('EC-1', 'HJRa-DOuG', 'saltwatertank1', 'mg/l'),
  ('PH-1', 'BJenjRROw', 'saltwatertank1', 'none'),
  ('DO-1', 'SJV0-wdOM', 'saltwatertank1', 'mS/cm')`;
  return db.query(sqlString);
};

const seedPgDatabaseWithDoValues = () => {
  const pathToCSV = (process.env.NODE_ENV === 'prod') ? '/home/bitnami/seed_files/readingsDo.csv' : path.resolve(__dirname, '../../../readingsDo.csv');
  const delimiter = ',';
  const sqlString = `COPY values(correlateId, time, reading, date) FROM '${pathToCSV}' DELIMITER '${delimiter}' CSV HEADER`;
  return db.query(sqlString);
};

const seedPgDatabaseWithEcValues = () => {
  const pathToCSV = (process.env.NODE_ENV === 'prod') ? '/home/bitnami/seed_files/readingsEc.csv' : path.resolve(__dirname, '../../../readingsEc.csv');
  const delimiter = ',';
  const sqlString = `COPY values(correlateId, time, reading, date) FROM '${pathToCSV}' DELIMITER '${delimiter}' CSV HEADER`;
  return db.query(sqlString);
};

const seedPgDatabaseWithPhValues = () => {
  const pathToCSV = (process.env.NODE_ENV === 'prod') ? '/home/bitnami/seed_files/readingsPh.csv' : path.resolve(__dirname, '../../../readingsPh.csv');
  const delimiter = ',';
  const sqlString = `COPY values(correlateId, time, reading, date) FROM '${pathToCSV}' DELIMITER '${delimiter}' CSV HEADER`;
  return db.query(sqlString);
};

// const indexValueCorrelateIdValue = () => {
//   const sqlString = 'CREATE INDEX idx_correlateId ON values(correlateID)';
//   return db.query(sqlString);
// };

const indexValueCorrelateIdSensor = () => {
  const sqlString = 'CREATE INDEX idx_correlateId ON sensors(correlateID)';
  return db.query(sqlString);
};

const functions = [
  sensors,
  values,
  users,
  alerts,
  seedPgDatabaseWithAlerts,
  seedPgDatabaseWithSensors,
  seedPgDatabaseWithPhValues,
  seedPgDatabaseWithDoValues,
  seedPgDatabaseWithEcValues,
  indexValueCorrelateIdSensor,
];

function myPromise(func) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(func());
    }, 2000);
  });
}

function sequencePromises(promise, func) {
  return new Promise((resolve) => {
    resolve(promise.then(() => myPromise(func)));
  });
}

functions.reduce(sequencePromises, Promise.resolve());

module.exports = {
  users, sensors, values, alerts,
};
