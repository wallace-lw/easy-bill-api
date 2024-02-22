import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
  return 'Hello Easy Bill'
})

server.listen({ port: 8080 }, () => {
  console.log('Server Running 🐱‍🏍')
})
