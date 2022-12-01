import express, { Express, Request, Response } from 'express'

import api from './api'
import dotenv from 'dotenv'
import http from 'http'

dotenv.config()

const app: Express = express()

const ip: string = process.env.IP || 'localhost'

const port: number = parseInt(process.env.PORT || '3000')

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello Thailand' })
})

app.use('/api', api)

http
  .createServer(app)
  .listen(port, ip, () => console.log(`Listening on http://${ip}:${port}`))
