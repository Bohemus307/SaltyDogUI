// function requireAuth(userId) {
//   if (!userId) {
//     throw new Error('Unauthorized');
//   }
// }

const Query = {
  sensor: async (parent, { correlateid }, context) => {
    const result = await context.prisma.sensors.findOne({ where: { correlateid } });
    return result;
  },
  sensors: async (parent, args, context) => context.prisma.sensors.findMany({ take: 10 }),
  values: async (parent, args, context) => context.prisma.values.findMany({ take: 100 }),
  value: async (root, { sensor_id }, context) => {
    const id = parseInt(sensor_id, 2);
    const result = await context.prisma.values.findOne({ where: { sensor_id: id } });
    return result;
  }, // gets values by sensor_Id
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
  // sensor: (sensor) => db.sensors.get(sensor.companyId),
};

const Sensor = {
  values: async (parent, { correlateid }, context) => {
    const result = await context.prisma.values.findMany({ orderBy: { time: 'asc' }, where: { correlateid } });
    return result;
  },
};

module.exports = {
  Query, Sensor, Value, Mutation,
};
