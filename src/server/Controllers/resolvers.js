const db = require('../../../db');
const models = require('../../database/models/model.js');

// function requireAuth(userId) {
//   if (!userId) {
//     throw new Error('Unauthorized');
//   }
// }

const Query = {
  sensor: async (parent, args, context, { id }) => context.prisma.sesnor.findOne({
    where: { correlateid: id },
  }),
  sensors: () => models.getSensors(), // all sensors
  values: () => models.getValues(), // all values
  // sensor: (root, { id }) => db.sensors.get(id), // gets values by sensorId1
  // sensors: () => db.sensors.list(),
  // values: () => db.values.list(),
};

const Mutation = {
  createSensor: (root, { input }, { user }) => {
    if (!user) {
      throw new Error('Unauthorized!');
    }
    const id = models.addNewSensor({ ...input });
    return models.getSensorById(id);
  },

  createValue: (root, { input }) => {
    const id = models.addNewValue({ ...input });
    return models.getValueById(id);
  },
};

const Value = {
  sensor: (sensor) => db.sensors.get(sensor.companyId),
};

const Sensor = {
  // readings: (id) => model.getValuesBySensorId(id),
  // readings: (sensor) => db.values.list()
  //   .filter((readings) => readings.sensor === sensor.id),
  readings: () => console.log('sensor ran'),
};

module.exports = {
  Query, Sensor, Value, Mutation,
};
