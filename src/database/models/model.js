const db = require('../connection.js');

module.exports = {
  // getRelatedArtists: (artistId) => {
  //   console.log(artistId);
  //   const sqlString = `SELECT
  //   a.artistname AS main_artist,
  //   b.artistname AS related_artist_name,
  //   b.bio AS related_artist_bio,
  //   b.avatar AS related_artist_avatar
  //   FROM relatedartists AS ra
  //   JOIN artists as a ON ra.artistid1 = a.artistid
  //   JOIN artists as b ON ra.artistid2 = b.artistid
  //   WHERE a.artistid = $1`;

  //   return db.query(sqlString, [artistId]);
  // },

  // crud for users
  getUserByEmail: (email) => {
    const sqlString = 'SELECT * FROM Users WHERE email = $1';
    return db.query(sqlString, [email]);
  },

  getUserByPassword: (password) => {
    const sqlString = 'SELECT * FROM Users WHERE password = $1';
    return db.query(sqlString, [password]);
  },

  addNewUser: (newUser) => {
    const values = Object.values(newUser);
    const sqlString = 'INSERT INTO Users(userId, userName, email, employeeId, password, token) VALUES ($1, $2, $3, $4, $5, $6)';
    return db.query(sqlString, [...values]);
  },

  deleteUserById: (userId) => {
    const sqlString = 'DELETE FROM Users WHERE userId = $1';
    return db.query(sqlString, [userId]);
  },

  updateUserById: ({
    userId, userName, employeeId, password, token,
  }) => {
    const sqlString = 'UPDATE Artists SET userId = $1, userName = $2, employeeId = $3 password = $4, token = $5, WHERE userId = $1';

    return db.query(sqlString, [userId, userName, employeeId, password, token]);
  },

  // crud for values
  getValueById: (valueId) => {
    const sqlString = 'SELECT * FROM Values WHERE valueId = $1';
    return db.query(sqlString, [valueId]);
  },

  addNewValue: (newValue) => {
    const values = Object.values(newValue);
    const sqlString = 'INSERT INTO Values(sensorId1, valueId, value) VALUES ($1, $2, $3)';
    return db.query(sqlString, [...values]);
  },

  deleteValueById: (valueId) => {
    const sqlString = 'DELETE FROM Values WHERE valueId = $1';
    return db.query(sqlString, [valueId]);
  },

  updateValueById: ({
    sensorId1, valueId, value,
  }) => {
    const sqlString = 'UPDATE Values SET sensorId1 = $1, valueId = $2, value = $3 WHERE valueId = $1';
    return db.query(sqlString, [sensorId1, valueId, value]);
  },

  // crud for sensors
  getSensorById: (sensorId) => {
    const sqlString = 'SELECT * FROM Sensors WHERE sesnorId = $1';
    return db.query(sqlString, [sensorId]);
  },

  addSensorUser: (newSensor) => {
    const values = Object.values(newSensor);
    const sqlString = 'INSERT INTO Users(sensorId, sensorName, location) VALUES ($1, $2, $3)';
    return db.query(sqlString, [...values]);
  },

  deleteSensorById: (sensorId) => {
    const sqlString = 'DELETE FROM Sensors WHERE sesnsorId = $1';
    return db.query(sqlString, [sensorId]);
  },

  updateSensorById: ({
    sensorId, sensorName, location,
  }) => {
    const sqlString = 'UPDATE Artists SET sensorId = $1, sensorName = $2, location = $3 WHERE sensorId = $1';

    return db.query(sqlString, [sensorId, sensorName, location]);
  },
};
