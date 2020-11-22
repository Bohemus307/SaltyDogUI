// function requireAuth(userId) {
//   if (!userId) {
//     throw new Error('Unauthorized');
//   }
// }

const Query = {
  sensor: async (root, args, context) => {
    const result = await context.prisma.sensors.findOne({
      where: { correlateid: args.correlateid },
    });
    return { ...result, start: args.start, end: args.end };
  },
  sensors: async (parent, args, context) => context.prisma.sensors.findMany({ take: 10 }),
  values: async (parent, args, context) => context.prisma.values.findMany({ take: 100 }),
  value: async (root, { reading_id }, context) => {
    const id = parseInt(reading_id, 10);
    const result = await context.prisma.values.findOne({ where: { reading_id: id } });
    return result;
  }, // gets values by sensor_Id
};

const Mutation = {
  createSensor: async (root, { input }, context, { user }) => {
    // if (!user) {
    //   throw new Error('Unauthorized!');
    // }
    const result = await context.prisma.sensors.create({ data: { ...input } });
    return result;
  },

  createValue: async (root, { input }, context) => {
    const newValue = await context.prisma.values.create({ data: { ...input } });
    return newValue;
  },
};

const Sensor = {
  weekOfValues: async (parent, args, context) => {
    const result = await context.prisma.values.findMany({
      where: {
        correlateid: { equals: parent.correlateid },
        date: {
          lte: new Date(Date.now()),
          gte: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
        },
      },
    });
    return result;
  },
  monthOfValues: async (parent, args, context) => {
    const result = await context.prisma.values.findMany({
      where: {
        correlateid: { equals: parent.correlateid },
        date: {
          lte: new Date(Date.now()),
          gte: new Date(Date.now() - 29 * 24 * 60 * 60 * 1000),
        },
      },
    });
    return result;
  },
  exportValues: async (parent, args, context) => {
    console.log('p:', parent, args);
    const result = await context.prisma.values.findMany({
      where: {
        correlateid: { equals: parent.correlateid },
        date: {
          lte: parent.start,
          gte: parent.end,
        },
      },
    });
    return result;
  },
  values: async (parent, args, context) => {
    const result = await context.prisma.values.findMany({ take: 1000, orderBy: { time: 'asc' }, where: { correlateid: parent.correlateid } });
    return result;
  },
};

module.exports = {
  Query, Sensor, Mutation,
};
