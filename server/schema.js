const { makeExecutableSchema } = require('graphql-tools');

const schema = makeExecutableSchema({
  typeDefs: `
    type Post {
      id: Int
      title: String
    }
 
    type Query {
      posts: [Post]
    }
  `,
  resolvers: {
    Query: {
      posts: () => [
        {
          id: 1,
          title: 'Mi titulo',
        },
        {
          title: 'Cesar',
        },
      ],
    },
  },
});

module.exports = schema;
