import {
  Request, Response, Router
} from 'express'

const router = Router()

const getError = (req: Request, res: Response) => {
  res.sendFile('error/index.html', { root: 'public' })
}

router.get('/', getError)

export default router
