import {
  Request, Response, Router
} from 'express'

const router = Router()

const getApis = (req: Request, res: Response) => {
  res.json({
    movies: 'movies',
    ecommerce: 'e-commerce'
  })
}

router.get('/', getApis)

export default router
