import express, { Express } from 'express'

import { routes as v1 } from './v1'

const api: Express = express()

api.use('/v1', v1)

export default api
