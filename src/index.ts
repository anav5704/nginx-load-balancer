import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello NGINX'))

const port = 3000

console.log("Server is running on http://localhost:" + port)

serve({
    fetch: app.fetch,
    port
})
