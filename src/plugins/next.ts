import fp from 'fastify-plugin'
import next from '@fastify/nextjs';

export default fp(async (fastify, opts) => {
    fastify.register(next)
        .after(() => {
            fastify.next('/home')
        })
})
