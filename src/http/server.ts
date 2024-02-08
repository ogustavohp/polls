import fastify from 'fastify'
import cookie, { FastifyCookieOptions } from '@fastify/cookie'
import websocket from '@fastify/websocket'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import { pollResults } from './ws/poll-results'

const app = fastify()

app.register(cookie, {
  // string que vai ser usada para assinar os cookies
  secret: 'kajdwhklahwddwalkjdwa',
  hook: 'onRequest',
} as FastifyCookieOptions)

app.register(websocket)
app.register(pollResults)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running! http://localhost:3333/')
})
