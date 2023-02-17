import {
  Request, Response
} from 'express'
import { HeaderData } from '../models/header'

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
