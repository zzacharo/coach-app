const definitions = {
  SessionType: {
    title: 'Piece of exercise',
    type: 'string',
    anyOf: [
      {
        type: 'string',
        enum: ['warm_up'],
        title: 'Warm-Up',
      },
      {
        type: 'string',
        enum: ['strength'],
        title: 'Strength',
      },
      {
        type: 'string',
        enum: ['wod'],
        title: 'WOD',
      },
    ],
  },
};

export const schema = {
  definitions: definitions,
  title: 'Create a new custom wod',
  type: 'object',
  required: ['title', 'sessionType', 'sessionDetails'],
  properties: {
    title: {
      type: 'string',
      title: 'Wod name',
    },
    sessionType: {
      $ref: '#/definitions/SessionType',
      title: 'Session type',
    },
    sessionDetails: {
      type: 'string',
      title: 'Session details',
      description: 'Enter the session details',
    },
  },
};
