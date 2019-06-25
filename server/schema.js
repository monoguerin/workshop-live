const { makeExecutableSchema } = require('graphql-tools');

const schema = makeExecutableSchema({
  typeDefs: `
    type Post {
      id: Int
      title: String
    }

    type User {
      id: Int
      name: String!
      lastname: String
      email: String!
    }
 
    type Query {
      posts: [Post]
      users: [User]!
    }
  `,
  resolvers: {
    Query: {
      users: () => [
        {
          name: 'Cesar',
          email: 'mono@zemoga.com',
        },
        {
          name: 'Mono',
          email: 'cesar@zemoga.com',
        },
        {
          name: 'Leonardo',
          email: 'guerrero@zemoga.com',
        },
      ],
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
