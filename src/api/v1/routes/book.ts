import { Request, Response, Router } from 'express'

import asyncWrapper from 'async-wrapper-express-ts'

const router: Router = Router()

router.get(
  '/book',
  asyncWrapper(async (req: Request, res: Response) => {
    return res.json({ books: [1, 2, 3] })
  })
)

export default router
