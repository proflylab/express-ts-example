import { Router } from 'express'
import book from './book'

const routes: Router = Router()

routes.use(book)

export default routes
