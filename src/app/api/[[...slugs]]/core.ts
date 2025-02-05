import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'

export const app = new Elysia({ prefix: '/api' })
    .get('/', () => 'Hello Elysia')
    .use(swagger({
        documentation: {
            servers: [{ url: '/api' }]
        }
    }))