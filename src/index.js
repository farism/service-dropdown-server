import hapi from 'hapi'
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi'
import { makeExecutableSchema } from 'graphql-tools'
import dotenv from 'dotenv'
dotenv.config()

import typeDefs from './typeDefs'
import resolvers from './resolvers'

const { HOST, PORT } = process.env

const server = new hapi.Server()

server.connection({
  host: HOST,
  port: PORT,
})

server.register({
  register: graphqlHapi,
  options: {
    path: '/graphql',
    graphqlOptions: {
      schema: makeExecutableSchema({
        typeDefs,
        resolvers,
      }),
    },
    route: {
      cors: true,
    },
  },
})

server.register({
  register: graphiqlHapi,
  options: {
    path: '/graphiql',
    graphiqlOptions: {
      endpointURL: '/graphql',
    },
  },
})

server.start(err => {
  if (err) {
    throw err
  }
  console.log(`Server running at: ${server.info.uri}`)
})
