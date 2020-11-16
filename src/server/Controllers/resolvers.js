// function requireAuth(userId) {
//   if (!userId) {
//     throw new Error('Unauthorized');
//   }
// }

const Query = {
  sensor: async (parent, { correlateid }, context) => {
    console.log(correlateid);
    context.prisma.sensors.findOne({ where: { correlateid } });
  },
  sensors: async (parent, args, context) => context.prisma.sensors.findMany({ take: 10 }),
  values: async (parent, args, context) => context.prisma.values.findMany({ take: 100 }),
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
  values: () => console.log('sensor ran'),
};

module.exports = {
  Query, Sensor, Value, Mutation,
};
