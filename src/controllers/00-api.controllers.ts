import {
  Request, Response
} from 'express'

export const getApis = (req: Request, res: Response) => {
  res.status(200).json({
    movies: `${process.env.SITE}/api/movies`,
    ecommerce: `${process.env.SITE}/api/e-commerce`
  })
}
