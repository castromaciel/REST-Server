import {
  Request, Response
} from 'express'
import { HeaderData } from '../models/Header'

export const getProducts = (req: Request, res: Response) => {
  const headers = new HeaderData({ status: 'success', message: 'Products retrieved successfully' })

  res.status(200).send({
    headers,
    data: [
      {
        id: 1,
        title: 'Product',
        description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit'
      }
    ]
  })
}

export const getProduct = (req: Request, res: Response) => {
  const { id } = req.params
  const headers = new HeaderData({ status: 'success', message: `Products with id ${id} retrieved successfully` })

  res.status(200).send({
    headers
  })
}
