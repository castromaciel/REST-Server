import {
  Request, Response
} from 'express'

export const getApis = (req: Request, res: Response) => {
  res.status(200).json({
    movies: 'https://api-rest-server-collection.onrender.com/api/movies',
    ecommerce: 'https://api-rest-server-collection.onrender.com/api/e-commerce'
  })
}
