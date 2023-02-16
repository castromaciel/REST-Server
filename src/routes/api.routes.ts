import {
  Request, Response, Router
} from 'express'

const router = Router()

const getApis = (req: Request, res: Response) => {
  res.json({
    message: 'Apis'
  })
}

router.get('/', getApis)

export default router
