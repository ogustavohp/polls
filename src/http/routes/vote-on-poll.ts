import { z } from 'zod'
import { prisma } from '../../lib/prisma'
import { FastifyInstance } from 'fastify'

export async function voteOnPoll(app: FastifyInstance) {
  app.post('/polls/:pollId/votes', async (request, reply) => {
    const voteOnPollBody = z.object({
      pollOptionId: z.string().uuid(),
    })

    const voteOnPollParams = z.object({
      pollId: z.string().uuid(),
    })

    const { pollOptionId } = voteOnPollBody.parse(request.body)
    const { pollId } = voteOnPollParams.parse(request.params)

    const sessionId = crypto.randomUUID()

    return reply.status(201).send()
  })
}
