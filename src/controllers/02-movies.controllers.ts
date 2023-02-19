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

export const getMovie = (req: Request, res: Response) => {
  const { id } = req.params
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    const headers = new HeaderData({ status: 'error', message: 'ObjectId is not valid' })

    return res.status(404).send({
      headers,
      data: []
    })
  }

  const headers = new HeaderData({ status: 'success', message: `Movie with id ${id} retrieved successfully` })
  return res.status(200).send({
    headers,
    movie: {
      id: 1,
      title: 'Random Movie',
      description: 'Lorem ipsum dolor sit amet, consectetur adip'
    }
  })
}
