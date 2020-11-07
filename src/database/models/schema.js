const path = require('path');
const db = require('../connection.js');

// build model for users
const users = () => {
  const sqlString = `CREATE TABLE users (
    _id SERIAL PRIMARY KEY,
    userId VARCHAR (20) NOT NULL,
    userName VARCHAR (80) NOT NULL,
    employeeId VARCHAR (15) NOT NULL,
    email VARCHAR (35) NOT NULL,
    password VARCHAR (10) NOT NULL,
    token VARCHAR (1000) NOT NULL
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
    sensor_id SERIAL PRIMARY KEY,
    sensorId1 INT,
    valueId VARCHAR (20) NOT NULL,
    value INT,
    date_col DATE,
    timestamp_col TIMESTAMP
    )`;

  return db.query('DROP TABLE IF EXISTS Values')
    .then(() => db.query(sqlString));
};

// const addNewUser = (newUser) => {
//   console.log('newUser', newUser);
//   const sqlString = 'INSERT INTO Users(newUser) VALUES ($1)';
//   return db.query(sqlString, [newUser]);
// };

module.exports = {
  users, sensors, values,
};
