const { makeExecutableSchema } = require('graphql-tools');

const POSTS = [
  {
    title: 'My post 1',
    description: 'Suspendisse potenti. Praesent mattis nec mi eget eleifend. Etiam ultrices congue ipsum, ut pharetra nibh consectetur sed. Nam gravida elit sapien, quis pulvinar tellus mattis at. Duis finibus leo non risus accumsan, in finibus magna varius. In vel congue lacus, sed consequat nunc. Quisque nec tellus ac metus hendrerit egestas in id diam. Quisque pharetra dui sit amet dui laoreet dignissim.',
    favorite: false,
  },
  {
    title: 'My post 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum, risus quis condimentum congue, ex ligula dapibus nunc, ut luctus massa eros eget neque. Maecenas venenatis aliquam sagittis. Nunc sit amet posuere augue, dictum rhoncus est. Nam maximus mattis odio non rutrum. Sed imperdiet nibh sit amet nisi sollicitudin dapibus. Nam lacinia ligula et orci aliquam porta. Vestibulum porta id dui ac dictum. Nulla quis rutrum erat. Proin lorem augue, efficitur id diam vitae, egestas laoreet lectus. Maecenas laoreet urna nec pharetra finibus. Maecenas vel mi quam. Praesent risus felis, sagittis quis ullamcorper at, feugiat ac felis. Suspendisse at auctor nibh. Maecenas ac sapien eu sapien suscipit feugiat quis id sapien.',
    favorite: false,
  },
  {
    title: 'My post 3',
    description: 'Proin congue auctor sapien. Morbi a imperdiet justo, nec tincidunt eros. Duis nec nibh lobortis, gravida ex condimentum, hendrerit libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse quis orci vitae ligula consequat consequat. Nulla porta sem libero, in rhoncus ipsum lacinia ac. Nullam finibus enim sit amet interdum volutpat. Nulla a est eget elit sodales pharetra. Etiam placerat, diam a tincidunt ultricies, turpis justo scelerisque odio, quis posuere dolor odio sit amet nunc. Aenean tempus fringilla orci et tincidunt. Pellentesque ut varius urna, ac vehicula nulla. Nullam at bibendum nunc, at tincidunt nisl. Ut dignissim sed leo nec malesuada. Suspendisse potenti.',
    favorite: false,
  },
  {
    title: 'My post 4',
    description: 'Morbi finibus porta sollicitudin. Quisque rutrum bibendum euismod. Curabitur aliquet posuere varius. Curabitur placerat turpis eget odio volutpat porta. Ut in commodo nunc. Duis volutpat scelerisque finibus. Ut ultrices nunc non purus commodo convallis. Morbi ac interdum nulla, eget vehicula velit. Sed in tortor tempor, aliquam nisi vel, aliquet neque. In a consequat odio. Maecenas malesuada leo a sodales venenatis.',
    favorite: false,
  },
  {
    title: 'My post 5',
    description: 'Sed ultrices nisl ac ex rhoncus finibus. Duis et condimentum leo. Quisque maximus erat vitae purus dapibus condimentum a id lectus. Phasellus eu ligula id ligula consectetur bibendum. Nulla ultricies blandit dolor feugiat auctor. Phasellus felis purus, dignissim in nibh a, varius euismod mauris. Etiam nibh magna, mollis sed felis vitae, porta maximus felis. Quisque tincidunt tempor mi, nec maximus nisl pellentesque sit amet. Phasellus metus elit, consequat nec consequat et, dictum a velit. Vestibulum ornare orci lacus, non porttitor libero maximus a. Suspendisse rutrum nibh purus, cursus euismod augue aliquam ut. Mauris aliquam id neque id sodales. Duis ut mattis est, id vestibulum tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris id iaculis mi.',
    favorite: false,
  },
  {
    title: 'My post 6',
    description: 'Fusce et purus elit. Nulla in nisl vitae sem sagittis accumsan eu ac nibh. Donec imperdiet massa dictum sollicitudin scelerisque. Sed facilisis venenatis suscipit. Cras at sem nisl. Praesent eleifend a metus eu commodo. Duis dignissim eleifend orci sit amet pretium. Vivamus ut mi sit amet lacus aliquet laoreet in sit amet neque. Mauris vehicula malesuada nisi ut mattis. Integer scelerisque nisl in lacus semper, vitae laoreet ex lacinia. Nulla euismod lectus elit, sit amet aliquam nibh fermentum in. Curabitur erat felis, dapibus eget diam at, vestibulum viverra tortor. Etiam ipsum risus, viverra vitae sapien in, tincidunt commodo orci. Sed luctus mi quis ante porta elementum. Nulla ultricies mauris at elementum commodo.',
    favorite: false,
  },
];


const schema = makeExecutableSchema({
  typeDefs: `
    type Post {
      title: String
      description: String
      favorite: Boolean
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
      posts: () => POSTS,
    },
  },
});

module.exports = schema;
