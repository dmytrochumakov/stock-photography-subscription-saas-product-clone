import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import "dotenv/config";

import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello world!')
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
