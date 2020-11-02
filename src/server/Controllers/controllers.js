// const path = require('path');
const model = require('../../database/models/model');

module.exports = {
  addNewArtist: (req, res) => {
    const newUser = {
      userid: 'ry9pbwdOz',
      userName: 'james',
      email: 'bob@goobook.co',
      employeeId: 'SJV0-wdOM',
      password: 'bob123',
      token: true,
    };
    if (newUser !== undefined) {
      model.addNewUser(newUser);
    } else {
      res.status(400).json({
        message: 'Bad request - must include artistName',
      });
    }
  },
};
