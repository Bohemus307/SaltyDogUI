const db = require('../../../db');

const Query = {
  user: (root, { id }) => db.users.get(id),
  sensor: (root, { id }) => db.sensors.get(id),
  sensors: () => db.sensors.list(),
  users: () => db.users.list(),
  values: () => db.values.list(),
};

const Mutation = {
  createUser: (root, { input }) => {
    const id = db.users.create({ ...input });
    return db.users.get(id);
  },
  createSensor: (root, { input }) => {
    const id = db.sensors.create({ ...input });
    return db.sensors.get(id);
  },
  createValue: (root, { input }) => {
    const id = db.values.create({ ...input });
    return db.values.get(id);
  },
};

const Value = {
  sensor: (sensor) => db.sensors.get(sensor.companyId),
};

const Sensor = {
  readings: (sensor) => db.values.list()
    .filter((readings) => readings.sensor === sensor.id),
};

module.exports = {
  Query, Sensor, Value, Mutation,
};
