const { GraphQLServer } = require('graphql-yoga');

const messages = [];

//Schema
const typeDefs = `
type Message{
  id: ID!
  user: String!
  content: String!
}

type Query{
  messages: [Message!]
}

type Mutation{
  postMessage(user:String!, content: String!):ID!
}
`;
//resolver is an array. Will match Query in typeDefs
const resolvers = {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    postMessage: (parent, { user, content }) => {
      const id = messages.length;
      messages.push({
        id,
        user,
        content,
      });
      return id;
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(({ port }) => {
  console.log(`Server started on port ${port}`);
});
