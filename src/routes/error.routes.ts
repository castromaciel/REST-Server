import {
  Request, Response, Router
} from 'express'

const router = Router()

const getError = (req: Request, res: Response) => {
  res.status(404).json({
    message: 'Error: not found'
  })
}

router.get('/', getError)

export default router
