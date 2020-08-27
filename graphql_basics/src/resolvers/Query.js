const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }
    return db.users.filter((user) => {
      return user.name
        .toLocaleLowerCase()
        .includes(args.query.toLocaleLowerCase());
    });
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter((post) => {
      const isTitleMatch = post.title
        .toLowerCase()
        .includes(args.query.toLowerCase());
      const isBodyMatch = post.body
        .toLowerCase()
        .includes(args.query.toLowerCase());
      return isTitleMatch || isBodyMatch;
    });
  },
  comments(parent, args, { db }, info) {
    return db.comments;
  },
  me() {
    return {
      id: '123',
      name: 'mike',
      email: 'mike@email.com',
    };
  },
  post() {
    return {
      id: '111',
      title: 'GraphQL',
      body: '',
      published: false,
    };
  },
};

export { Query as default };
