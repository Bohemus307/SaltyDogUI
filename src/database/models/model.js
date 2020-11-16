const db = require('../connection.js');

module.exports = {
  // crud for users
  getUserByEmail: (email) => {
    const sqlString = 'SELECT * FROM Users WHERE email = $1';
    return db.query(sqlString, [email])
      .catch((e) => console.error(e.stack));
  },

  getUserByPassword: (password) => {
    const sqlString = 'SELECT * FROM Users WHERE password = $1';
    return db.query(sqlString, [password])
      .catch((e) => console.error(e.stack));
  },

  addNewUser: (newUser) => {
    const values = Object.values(newUser);
    const sqlString = 'INSERT INTO Users(userName, email, password, employeeId, userId) VALUES ($1, $2, $3, $4, $5)';
    return db.query(sqlString, [...values])
      .catch((e) => console.error(e.stack));
  },

  deleteUserById: (userId) => {
    const sqlString = 'DELETE FROM Users WHERE userId = $1';
    return db.query(sqlString, [userId])
      .catch((e) => console.error(e.stack));
  },

  updateUserById: ({
    userId, userName, employeeId, password, token,
  }) => {
    const sqlString = 'UPDATE Artists SET userId = $1, userName = $2, employeeId = $3 password = $4, token = $5, WHERE userId = $1';

    return db.query(sqlString, [userId, userName, employeeId, password, token])
      .catch((e) => console.error(e.stack));
  },

  // crud for values
  getValuesByCorrelateId: (id) => {
    const sqlString = 'SELECT * FROM Values WHERE correlateid = $1';
    return db.query(sqlString, [id])
      .catch((e) => console.error(e.stack));
  },

  getValues: () => {
    const sqlString = 'SELECT * FROM Values';
    return db.query(sqlString)
      .catch((e) => console.error(e.stack));
  },

  getValuesByDate: (date) => {
    const sqlString = 'SELECT * FROM Values Where date = $1';
    return db.query(sqlString, [date])
      .catch((e) => console.error(e.stack));
  },

  addNewValue: (newValue) => {
    const values = Object.values(newValue);
    const sqlString = 'INSERT INTO Values(correlateid, time, reading, date) VALUES ($1, $2, $3, $4)';
    return db.query(sqlString, [...values])
      .catch((e) => console.error(e.stack));
  },

  deleteValueById: (id) => {
    const sqlString = 'DELETE FROM Values WHERE correlateID = $1';
    return db.query(sqlString, [id]);
  },

  updateValueById: ({
    sensorId1, valueId, value,
  }) => {
    const sqlString = 'UPDATE Values SET correlateid = $1, reading = $2, time = $3 date = $4 WHERE correlateid = $1';
    return db.query(sqlString, [sensorId1, valueId, value])
      .catch((e) => console.error(e.stack));
  },

  // crud for sensors
  getSensorById: (id) => {
    const sqlString = 'SELECT * FROM Sensors WHERE correlateid = $1';
    return db.query(sqlString, [id])
      .catch((e) => console.error(e.stack));
  },

  getSensors: () => {
    const sqlString = 'SELECT * FROM Sensors';
    return db.query(sqlString)
      .catch((e) => console.error(e.stack));
  },

  addNewSensor: (newSensor) => {
    const values = Object.values(newSensor);
    const sqlString = 'INSERT INTO Sensors(correlateID, sensorName, location) VALUES ($1, $2, $3)';
    return db.query(sqlString, [...values])
      .catch((e) => console.error(e.stack));
  },

  deleteSensorById: (correlateid) => {
    const sqlString = 'DELETE FROM Sensors WHERE corrrelateid = $1';
    return db.query(sqlString, [correlateid])
      .catch((e) => console.error(e.stack));
  },

  updateSensorById: ({
    sensor_id, sensorName, location,
  }) => {
    const sqlString = 'UPDATE Artists SET sensorId = $1, sensorName = $2, location = $3 WHERE sensorId = $1';
    return db.query(sqlString, [sensor_id, sensorName, location])
      .catch((e) => console.error(e.stack));
  },
};

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
