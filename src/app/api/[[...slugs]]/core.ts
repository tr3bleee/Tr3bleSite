import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'

export const app = new Elysia()
    .use(
        swagger({
            path: '/api/swagger',
            documentation: {
                info: {
                    title: 'Tr3ble Documentation',
                    version: '1.0.0'
                }
            }
        })
    )