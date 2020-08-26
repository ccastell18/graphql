import { GraphQLServer } from 'graphql-yoga';

//users array
const users = [
  {
    id: '1',
    name: 'Chris',
    email: 'chris@email.com',
    age: 27,
  },
  {
    id: '2',
    name: 'Jenna',
    email: 'jenna@email.com',
  },
  {
    id: '3',
    name: 'Bob',
    email: 'Bob@email.com',
    age: 22,
  },
];

const posts = [
  {
    id: '10',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: '1',
  },
  {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL post...',
    published: false,
    author: '1',
  },
  {
    id: '12',
    title: 'Programming Music',
    body: '',
    published: false,
    author: '2',
  },
];

const comments = [
  {
    id: '102',
    text: 'This worked well for me. Thanks!',
    author: '3',
    post: '10',
  },
  {
    id: '103',
    text: 'Glad you enjoyed it.',
    author: '2',
    post: '10',
  },
  {
    id: '104',
    text: 'This did no work.',
    author: '1',
    post: '11',
  },
  {
    id: '105',
    text: 'Nevermind. I got it to work.',
    author: '2',
    post: '12',
  },
];

//type definitions (Schema)
const typeDefs = `
type Query {
 users(query: String): [User!]!
 me: User!
 post: Post!
 posts: [Post!]!
 comments: [Comment!]!
}
type User {
  id: ID!
  name: String!
  email: String!
  age: Int
  posts: [Post!]!
}
type Post {
  id: ID!
  title: String!
  body: String!
  published: Boolean!
  author:User!
  comments: [Comment!]!
}
type Comment {
  id: ID!,
  text: String!
  author: User!
  post: Post!
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
        return user.name
          .toLocaleLowerCase()
          .includes(args.query.toLocaleLowerCase());
      });
    },
    posts(parent, args) {
      if (!args.query) {
        return posts;
      }
      return posts.filter((post) => {
        const isTitleMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBodyMatch = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return isTitleMatch || isBodyMatch;
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
    comments(parent, args) {
      return comments;
    },
  },
  Post: {
    author(parent, args) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
    comments(parent, args) {
      return comments.filter((comment) => {
        return comment.post === parent.id;
      });
    },
  },
  User: {
    posts(parent, args) {
      return posts.filter((post) => {
        return post.author === parent.id;
      });
    },
  },
  Comment: {
    author(parent, args) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
    post(parent, args) {
      return posts.find((post) => {
        return post.id === parent.post;
      });
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
