import { Request, Response } from 'express'
import { HeaderData } from '../models/header'

export const getMovies = (req: Request, res: Response) => {
  const headers = new HeaderData({ status: 'success', message: 'Movies retrieved successfully' })
  res.status(200).send({
    headers,
    data: [
      {
        id: 1,
        title: 'Random Movie',
        description: 'Lorem ipsum dolor sit amet, consectetur adip'
      }
    ]
  })
}
