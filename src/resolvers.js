import db from './db'

const resolvers = {
  Query: {
    company: (_, { id }) => ({}),
    project: (_, { id }) => {
      console.log(_, id)
    }
  },
}
