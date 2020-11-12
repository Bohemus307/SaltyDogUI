const db = require('../../../db');
const model = require('../../database/models/model.js');

// function requireAuth(userId) {
//   if (!userId) {
//     throw new Error('Unauthorized');
//   }
// }

const Query = {
  sensor: (root, {id}) => db.sensors.get(id), // gets values by sensorId1
  // sensors: () => model.getSensors(), // all sensors
  // values: () => model.getValues(), // all values
  sensors: () => db.sensors.list(),
  values: () => db.values.list(),
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
  // readings: (id) => model.getValuesBySensorId(id),
  readings: (sensor) => db.values.list()
    .filter((readings) => readings.sensor === sensor.id),
};

module.exports = {
  Query, Sensor, Value, Mutation,
};
