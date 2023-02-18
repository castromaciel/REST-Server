import {
  Request, Response
} from 'express'
import { HeaderData } from '../models/Header'
import { Product } from '../models/Products'

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find({ })
  const headers = new HeaderData({ status: 'success', message: 'Products retrieved successfully' })

  res.status(200).send({
    headers,
    data: products
  })
}

export const getProduct = (req: Request, res: Response) => {
  const { id } = req.params
  const headers = new HeaderData({ status: 'success', message: `Products with id ${id} retrieved successfully` })

  res.status(200).send({
    headers
  })
}
