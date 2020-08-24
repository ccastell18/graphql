import { GraphQLServer } from 'graphql-yoga';

//users array
const users = [
  {
    id: 1,
    name: 'Chris',
    email: 'chris@email.com',
    age: 27,
  },
  {
    id: 2,
    name: 'Jenna',
    email: 'jenna@email.com',
  },
  {
    id: 3,
    name: 'Bob',
    email: 'Bob@email.com',
    age: 22,
  },
];

//type definitions (Schema)
const typeDefs = `
type Query {
users(query: String): [User!]!
 me: User!
 post: Post!
}
type User {
  id: ID!
  name: String!
  email: String!
  age: Int
}
type Post {
  id: ID!
  title: String!
  body: String!
  published: Boolean!
}
`;
//resolvers
const resolvers = {
  Query: {
    users(parent, args) {
      if (!args.query) {
        return users;
      }
      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    me(parent, args) {
      return {
        id: '123',
        name: 'mike',
        email: 'mike@email.com',
      };
    },
    post(parent, args) {
      return {
        id: '111',
        title: 'GraphQL',
        body: '',
        published: false,
      };
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log('server is running');
});
