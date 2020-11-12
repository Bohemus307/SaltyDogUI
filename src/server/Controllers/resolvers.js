const db = require('../../../db');
const model = require('../../database/models/model.js');

// function requireAuth(userId) {
//   if (!userId) {
//     throw new Error('Unauthorized');
//   }
// }

const Query = {
  sensor: (root, { id }) => model.getSensorById(id), // gets sensor by id
  sensors: () => model.getSensors(), // all sensors
  values: () => model.getValues(), // all values
};

const Mutation = {
  createSensor: (root, { input }, { user }) => {
    if (!user) {
      throw new Error('Unauthorized!');
    }
    const id = model.addNewSensor({ ...input });
    return model.getSensorById(id);
  },

  createValue: (root, { input }) => {
    const id = model.addNewValue({ ...input });
    return model.getValueById(id);
  },
};

const Value = {
  sensor: (sensor) => db.sensors.get(sensor.companyId),
};

const Sensor = {
  readings: (sensorId) => model.getValuesBySensorId(sensorId)
    .filter((readings) => readings.sensor === sensorId),
};

module.exports = {
  Query, Sensor, Value, Mutation,
};
