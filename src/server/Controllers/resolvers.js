const db = require('../../../db');

const Query = {
  user: (root, { id }) => db.users.get(id),
  sensor: (root, { id }) => db.sensors.get(id),
  sensors: () => db.sensors.list(),
  users: () => db.users.list(),
  values: () => db.values.list(),
};

const User = {
  userName: (user) => db.users.get(user.userName),
};

const Value = {
  sensor: (sensor) => db.sensors.get(sensor.companyId),
};

const Sensor = {
  readings: (sensor) => db.values.list()
    .filter((readings) => readings.sensor === sensor.id),
};

module.exports = {
  Query, Sensor, Value, User,
};
