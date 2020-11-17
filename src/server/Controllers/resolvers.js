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
  value: async (root, { reading_id }, context) => {
    const id = parseInt(reading_id);
    console.log(id);
    const result = await context.prisma.values.findOne({ where: { reading_id: id } });
    return result;
  }, // gets values by sensor_Id
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

const Sensor = {
  values: async (parent, { correlateid }, context) => {
    const result = await context.prisma.values.findMany({ orderBy: { time: 'asc' }, where: { correlateid } });
    return result;
  },
};

module.exports = {
  Query, Sensor, Mutation,
};
