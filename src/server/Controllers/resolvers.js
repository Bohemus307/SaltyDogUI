const { PubSub } = require('graphql-subscriptions');
const db = require('../../../db');

const pubSub = new PubSub();

const MESSAGE_ADDED = 'MESSAGE_ADDED';

function requireAuth(userId) {
  if (!userId) {
    throw new Error('Unauthorized');
  }
}

const Query = {
  sensor: (root, { id }) => db.sensors.get(id),
  sensors: () => db.sensors.list(),
  values: () => db.values.list(),
};

const Mutation = {
  createSensor: (root, { input }, { user }) => {
    if (!user) {
      throw new Error('Unauthorized!');
    }
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

const Subscription = {
  sensorConnect: {
    subscribe: (_root, _args, { userId }) => pubSub.asyncIterator(MESSAGE_ADDED),
  },
};

module.exports = {
  Query, Sensor, Value, Mutation, Subscription,
};
