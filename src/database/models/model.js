const db = require('../connection.js');

module.exports = {
  getUserById: (userId) => {
    const sqlString = 'SELECT * FROM Artists WHERE artistId = $1';

    return db.query(sqlString, [userId]);
  },

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

  addNewUser: (newUser) => {
    const sqlString = 'INSERT INTO Users(newUser) VALUES ($1)';

    return db.query(sqlString, [newUser]);
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

};
