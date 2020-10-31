const db = require('../../../db');

const Query = {
  user: (root, { id }) => db.user.get(id),
  sensor: (root, { id }) => db.sensors.get(id),
  value: (root, { id }) => db.values.get(id),
  values: () => db.values.list(),
};

const User = {
  userName: (user) => db.users.get(user.userName),
};

const Value = {
  sensor: (sensor) => db.sensors.get(sensor.companyId),
};

const Sensor = {
  values: (sensor) => db.values.list()
    .filter((values) => values.sensorId === sensor.id),
};

module.exports = {
  Query, Sensor, Value, User,
};
