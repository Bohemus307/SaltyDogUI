const path = require('path');
const db = require('../connection.js');

// build model for users
const users = () => {
  const sqlString = `CREATE TABLE Users (
    _id SERIAL PRIMARY KEY,
    userId INT NOT NULL,
    userName VARCHAR (80) NOT NULL,
    employee VARCHAR (7) NOT NULL,
    password VARCHAR (10) NOT NULL,
    token VARCHAR (1000) NOT NULL
   )`;

  return db.query('DROP TABLE IF EXISTS Users')
    .then(() => db.query(sqlString));
};

// build model for sensors
const sensors = () => {
  const sqlString = `CREATE TABLE Sensors (
    _id SERIAL PRIMARY KEY,
    sensorId INT NOT NULL,
    sensorName VARCHAR(80),
    location VARCHAR (10) NOT NULL,
    date_col DATE,
    timestamp_col TIMESTAMP,
   )`;

  return db.query('DROP TABLE IF EXISTS Sensors')
    .then(() => db.query(sqlString));
};

const sensorValues = () => {
  const sqlString = `CREATE TABLE SensorValues(
    sensor_id SERIAL PRIMARY KEY,
    sensorId1 INT,
    value INT,
    )`;

  return db.query('DROP TABLE IF EXISTS SensorValues')
    .then(() => db.query(sqlString));
};